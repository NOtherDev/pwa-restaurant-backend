import {Repository} from 'typeorm'
import webPush from 'web-push'

import Subscription from '../../entity/Subscription'

export default class PushService {
    private readonly vapidPublicKey = process.env.VAPID_PUBLIC_KEY!
    private readonly vapidPrivateKey = process.env.VAPID_PRIVATE_KEY!

    constructor(private readonly subscriptionRepository: Repository<Subscription>) {
        webPush.setVapidDetails('mailto:push-feedback@adambar.pl', this.vapidPublicKey, this.vapidPrivateKey)
    }

    async sendPushToUser(userId: string, messagePayload: any): Promise<boolean> {
        const subscription = await this.subscriptionRepository.findOne(userId)

        if (!subscription) {
            return false
        }

        const pushResult = await webPush.sendNotification(subscription.payload, JSON.stringify(messagePayload))

        if (pushResult.statusCode === 404 || pushResult.statusCode === 410) {
            await this.subscriptionRepository.delete({userId: subscription.userId})
        }

        return pushResult.statusCode === 201
    }
}