import {Entity, Column, PrimaryColumn} from "typeorm"
import {PushSubscription} from 'web-push'

@Entity()
export default class Subscription {
    @PrimaryColumn()
    userId: string

    @Column({type: 'json', nullable: false})
    payload: PushSubscription

    constructor(userId: string) {
        this.userId = userId
    }
}
