import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Product} from "./product.entity";
import {Repository} from "typeorm";

@Injectable()
export class ProductsService {
	constructor(
		@InjectRepository(Product)
		private productsRepository: Repository<Product>
	) {}

	getAllProducts(): Promise<Product[]> {
		return this.productsRepository.find({ relations: ["category", "photos"] });
	}

	getProductById(id: string): Promise<Product> {
		return this.productsRepository.findOne(id, { relations: ["category"] });
	}
}
