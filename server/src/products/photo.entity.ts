import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Product} from "./product.entity";

@Entity({
	name: 'photos'
})
export class Photo {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	src: string;

	@ManyToOne(type => Product, product => product.photos)
	product: number;
}