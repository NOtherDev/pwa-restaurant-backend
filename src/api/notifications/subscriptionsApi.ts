import {Express} from 'express'
import {EntityManager} from 'typeorm'

import {catchErrors} from '../../routingUtils'
import Subscription from '../../entity/Subscription'

export default function subscriptionsApi(app: Express, entities: EntityManager) {
    app.get('/subscription', catchErrors(async (req, res) => {
        res.send({
            vapidPublicKey: process.env.VAPID_PUBLIC_KEY
        })
    }))

    app.put('/subscription', catchErrors(async (req, res) => {
        const subscription = await entities.findOne(Subscription, req.userId) ||
                             new Subscription(req.userId)

        subscription.payload = req.body
        await entities.save(subscription)

        res.status(201).send({})
    }))
}