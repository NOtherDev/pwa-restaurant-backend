import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Dish {
    constructor(name: string, group: string, price: number) {
        this.name = name
        this.group = group
        this.price = price
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    group: string;

    @Column()
    price: number;
}
