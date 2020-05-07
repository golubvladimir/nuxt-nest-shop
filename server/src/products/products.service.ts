import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Product} from "./product.entity";
import {Repository} from "typeorm";
import {getProducts} from "./products.interface";

@Injectable()
export class ProductsService {
	constructor(
		@InjectRepository(Product)
		private productsRepository: Repository<Product>
	) {}

	async getProducts(page: number, perPage: number): Promise<getProducts> {
		const products = await this.productsRepository.find({
			take: perPage,
			skip: page * perPage,
			relations: ["category", "photos"] }
		);

		const total = await this.productsRepository.count();

		const totalPage = Math.ceil(total/perPage);

		return {
			products,
			total,
			totalPage
		}
	}

	getProductById(id: string): Promise<Product> {
		return this.productsRepository.findOne(id, { relations: ["category"] });
	}
}
