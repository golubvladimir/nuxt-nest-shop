import {
	Entity, PrimaryGeneratedColumn, Column,
	ManyToOne, OneToMany, ManyToMany, JoinTable
} from "typeorm";
import {Category} from "../categories/category.entity";
import {Photo} from "./photo.entity";
import {Order} from "../orders/order.entity";

@Entity({
	name: 'products'
})
export class Product {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	description: string;

	@ManyToOne(type => Category, category => category.products)
	category: number;

	@OneToMany(type => Photo, photo => photo.product)
	photos: Photo[];

	@ManyToMany(type => Order, order => order.products)
	@JoinTable({
		name: 'orders_products'
	})
	orders: Order[];
}