import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Category} from "./category.entity";
import {Repository} from "typeorm";

@Injectable()
export class CategoriesService {
	constructor(
		@InjectRepository(Category)
		private categoryRepository: Repository<Category>
	) {}

	getAllCategories(): Promise<Category[]> {
		return this.categoryRepository.find();
	}

	getCategoryById(id: string): Promise<Category> {
		return this.categoryRepository.findOne(id)
	}
}
