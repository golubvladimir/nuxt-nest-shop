import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "../products/product.entity";

@Entity({
	name: 'categories'
})
export class Category {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@OneToMany(type => Product, product => product.category)
	products: Product[]
}