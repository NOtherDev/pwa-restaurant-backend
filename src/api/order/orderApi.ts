import {Express} from 'express'
import {EntityManager} from 'typeorm'
import keyBy from 'lodash.keyby'

import Order from '../../entity/Order'
import OrderItem from '../../entity/OrderItem'
import Dish from '../../entity/Dish'
import {catchErrors} from '../../routingUtils'
import createOrderResponse from './orderResponse'
import PushService from '../notifications/pushService'

interface RawItem {
    quantity?: number
    dishId: number
}

export default function orderApi(app: Express, entities: EntityManager, pushService: PushService) {
    app.get('/orders', catchErrors(async (req, res) => {
        const orders = await entities.find(Order, {
            where: {userId: req.userId},
            relations: ["items", "items.dish"],
        })

        res.send(orders.map((order) => createOrderResponse(order)))
    }))

    app.put('/orders/:orderId', catchErrors(async (req, res) => {
        const order = await entities.findOne(Order, req.params.orderId) ||
                      await entities.save(new Order(req.params.orderId, req.userId))

        if (order.userId !== req.userId) {
            res.sendStatus(403)
            return
        }

        const items: RawItem[] = req.body.items || []
        const dishes = keyBy(await entities.find(Dish), 'id')

        await entities.delete(OrderItem, {orderId: req.params.orderId})
        order.updateItems(items.map((item) => new OrderItem(dishes[item.dishId], item.quantity || 1)))

        await entities.save(order.items)
        await entities.save(order)

        enqueuePushNotification(req.userId, order)

        res.send(createOrderResponse(order))
    }))

    function enqueuePushNotification(userId: string, order: Order) {
        setTimeout(async () => {
            try {
                await pushService.sendPushToUser(userId, {
                    orderId: order.id,
                    event: 'OrderReady'
                })
                console.log(`Sent push message to ${userId} about orderId=${order.id}.`)
            } catch (e) {
                console.warn(`Cannot send push message to ${userId} about orderId=${order.id}: ${e}.`)
            }
        }, 30 * 1000)
    }
}