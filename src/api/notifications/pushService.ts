import {Repository} from 'typeorm'
import Subscription from '../../entity/Subscription'

export default class PushService {
    private readonly vapidPublicKey = process.env.VAPID_PUBLIC_KEY!
    private readonly vapidPrivateKey = process.env.VAPID_PRIVATE_KEY!

    constructor(private readonly subscriptionRepository: Repository<Subscription>) {
    }

    async sendPushToUser(userId: string, messagePayload: any): Promise<boolean> {
        const subscription = await this.subscriptionRepository.findOne(userId)

        if (!subscription) {
            return false
        }

        // TODO send messagePayload via push defined within subscription.payload

        return true
    }
}