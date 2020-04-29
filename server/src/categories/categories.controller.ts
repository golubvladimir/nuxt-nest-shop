import {Controller, Param, Get} from '@nestjs/common';
import {CategoriesService} from "./categories.service";
import {Category} from "./category.entity";

@Controller('categories')
export class CategoriesController {
	constructor(
		private categoriesService: CategoriesService
	) {}

	@Get('/')
	getAllCategories(): Promise<Category[]> {
		return this.categoriesService.getAllCategories();
	}

	@Get('/:id')
	getCategoryById(@Param('id') id): Promise<Category> {
		return this.categoriesService.getCategoryById(id)
	}
}
