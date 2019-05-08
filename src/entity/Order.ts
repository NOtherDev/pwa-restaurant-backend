import {Entity, PrimaryColumn, Column, OneToMany} from "typeorm";
import OrderItem from './OrderItem'

@Entity()
export default class Order {
    @PrimaryColumn()
    id: string

    @Column({nullable: true})
    discount?: number

    @Column({nullable: false})
    totalPrice: number

    @OneToMany((type) => OrderItem, item => item.order)
    items: OrderItem[]

    constructor(id: string) {
        this.id = id
    }

    updateItems(items: OrderItem[]) {
        this.items = items || []

        this.items.forEach((item) => {
            item.order = this
        })

        this.totalPrice = this.items.reduce((acc, item) => {
            return acc + (item.dish.price * item.quantity)
        }, 0.0)
    }
}
