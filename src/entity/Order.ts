import {Entity, PrimaryColumn, Column, OneToMany} from "typeorm";
import OrderItem from './OrderItem'

@Entity()
export default class Order {
    @PrimaryColumn()
    id: string

    @Column({nullable: false})
    userId: string

    @Column({nullable: true, type: "decimal"})
    discount?: number

    @Column({nullable: false, type: "decimal", default: 0.0})
    totalPrice: number

    @OneToMany((type) => OrderItem, item => item.order)
    items: OrderItem[]

    constructor(id: string, userId: string) {
        this.id = id
        this.userId = userId
    }

    updateItems(items: OrderItem[]) {
        this.items = (items || []).filter((item) => !!item.dish)

        this.items.forEach((item) => {
            item.order = this
        })

        this.totalPrice = this.items.reduce((acc, item) => {
            return acc + (item.dish.price * item.quantity)
        }, 0.0)
    }
}
