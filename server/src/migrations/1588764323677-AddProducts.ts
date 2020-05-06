import {MigrationInterface, QueryRunner} from "typeorm";
import {Product} from "../products/product.entity";
import {Category} from "../categories/category.entity";

export class AddProducts1588764323677 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
			const productsRepo = queryRunner.connection.getRepository(Product);
			const categoriesRepo = queryRunner.connection.getRepository(Category);

			const fruitsCategory = await categoriesRepo.findOne(1);
			const vegetablesCategory = await categoriesRepo.findOne(2);
			const dairyCategory = await categoriesRepo.findOne(3);
			const bakeryCategory = await categoriesRepo.findOne(4);
			const meatCategory = await categoriesRepo.findOne(5);

			await productsRepo.insert([
				{
					id: 1,
					name: 'Apples',
					description: 'Description product',
					price: 1,
					category: fruitsCategory
				},
				{
					id: 2,
					name: 'Oranges',
					description: 'Description product',
					price: 2,
					category: fruitsCategory
				},
				{
					id: 3,
					name: 'Peppers',
					description: 'Description product',
					price: 3,
					category: vegetablesCategory
				},
				{
					id: 4,
					name: 'Tomatoes',
					description: 'Description product',
					price: 4,
					category: vegetablesCategory
				},
				{
					id: 5,
					name: 'Milk',
					description: 'Description product',
					price: 5,
					category: dairyCategory
				},
				{
					id: 6,
					name: 'Yogurt',
					description: 'Description product',
					price: 6,
					category: dairyCategory
				},
				{
					id: 7,
					name: 'Bread',
					description: 'Description product',
					price: 7,
					category: bakeryCategory
				},
				{
					id: 8,
					name: 'Croissant',
					description: 'Description product',
					price: 8,
					category: bakeryCategory
				},
				{
					id: 9,
					name: 'Pork',
					description: 'Description product',
					price: 9,
					category: meatCategory
				},
				{
					id: 10,
					name: 'Beaf',
					description: 'Description product',
					price: 10,
					category: meatCategory
				}
			]);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
