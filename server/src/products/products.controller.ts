import {Controller, Param, Get, Query} from '@nestjs/common';
import {ProductsService} from "./products.service";
import {Product} from "./product.entity";
import {getProducts} from "./products.interface";

@Controller('products')
export class ProductsController {
	constructor(
		private productsService: ProductsService
	) {}

	@Get('/')
	getProducts(@Query('page') page, @Query('perPage') perPage): Promise<getProducts> {
		return this.productsService.getProducts(page, perPage);
	}

	@Get('/:id')
	getProductById(@Param('id') id): Promise<Product> {
		return this.productsService.getProductById(id);
	}
}
