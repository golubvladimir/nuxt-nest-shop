import {MigrationInterface, QueryRunner} from "typeorm";
import {Category} from "../categories/category.entity";

export class AddCategories1588764312620 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
			const categoryRepo = queryRunner.connection.getRepository(Category);

			await categoryRepo.insert([
				{
					id: 1,
					name: 'Fruits',
				},
				{
					id: 2,
					name: 'Vegetables',
				},
				{
					id: 3,
					name: 'Dairy',
				},
				{
					id: 4,
					name: 'Bakery'
				},
				{
					id: 5,
					name: 'Meat'
				}
			]);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
