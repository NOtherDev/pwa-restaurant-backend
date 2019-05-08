import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import Dish from './Dish'
import Order from './Order'

@Entity()
export default class OrderItem {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne((type) => Order, order => order.items, {nullable: false})
    order: Order

    @ManyToOne((type) => Dish, {nullable: false})
    dish: Dish

    @Column({nullable: false})
    quantity: number

    @Column({nullable: true})
    notes?: string

    constructor(dish: Dish, quantity: number) {
        this.dish = dish
        this.quantity = quantity
    }
}
