import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Category} from "../categories/category.entity";

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
	category: number
}