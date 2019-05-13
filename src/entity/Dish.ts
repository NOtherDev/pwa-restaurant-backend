import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export default class Dish {
    constructor(name: string, group: string, price: number, image?: string) {
        this.name = name
        this.group = group
        this.price = price
        this.image = image
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    group: string;

    @Column({type: "decimal"})
    price: number;

    @Column({nullable: true})
    image?: string;
}
