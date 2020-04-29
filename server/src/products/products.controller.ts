import {Controller, Param, Get} from '@nestjs/common';
import {ProductsService} from "./products.service";
import {Product} from "./product.entity";

@Controller('products')
export class ProductsController {
	constructor(
		private productsService: ProductsService
	) {}

	@Get('/')
	getAllProducts(): Promise<Product[]> {
		return this.productsService.getAllProducts()
	}

	@Get('/:id')
	getProductById(@Param('id') id): Promise<Product> {
		return this.productsService.getProductById(id);
	}
}
