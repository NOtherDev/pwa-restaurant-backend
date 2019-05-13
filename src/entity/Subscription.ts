import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity()
export default class Subscription {
    @PrimaryColumn()
    userId: string

    @Column({type: 'json', nullable: false})
    payload: object

    constructor(userId: string) {
        this.userId = userId
    }
}
