import {
	Column, Entity, ManyToMany, PrimaryGeneratedColumn,
	JoinTable
} from "typeorm";
import {Product} from "../products/product.entity";

@Entity({
	name: 'orders'
})
export class Order {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: 'datetime',
		default: () => 'NOW()'
	})
	dateCreate: string;

	@Column({
		type: 'timestamp',
		default: () => 'CURRENT_TIMESTAMP'
	})
	dateEdit: string;

	@ManyToMany(type => Product, product => product.orders)
	@JoinTable({
		name: 'orders_products'
	})
	products: Product[]
}