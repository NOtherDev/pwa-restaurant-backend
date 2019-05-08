import {Express} from 'express'
import {EntityManager} from 'typeorm'
import keyBy from 'lodash.keyby'

import Order from '../../entity/Order'
import OrderItem from '../../entity/OrderItem'
import Dish from '../../entity/Dish'
import {catchErrors} from '../../routingUtils'
import createOrderResponse from './orderResponse'

interface RawItem {
    quantity?: number
    dishId: number
}

export default function orderApi(app: Express, entities: EntityManager) {
    app.get('/orders', catchErrors(async (req, res) => {
        const orders = await entities.find(Order, {
            relations: ["items", "items.dish"]
        })

        res.send(orders.map((order) => createOrderResponse(order)))
    }))

    app.put('/orders/:orderId', catchErrors(async (req, res) => {
        const order = await entities.findOne(Order, req.params.orderId) || new Order(req.params.orderId)

        const items: RawItem[] = req.body.items || []
        const dishes = keyBy(await entities.find(Dish), 'id')

        order.updateItems(items.map((item) => new OrderItem(dishes[item.dishId], item.quantity || 1)))

        await entities.save(order.items)
        await entities.save(order)

        res.send(createOrderResponse(order))
    }))
}