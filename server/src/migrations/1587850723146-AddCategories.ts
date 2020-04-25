import {MigrationInterface, QueryRunner} from "typeorm";
import {Category} from "../categories/category.entity";

export class AddCategories1587850723146 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<any> {
		const categoryRepo = queryRunner.connection.getRepository(Category);

		await categoryRepo.insert([
			{
				id: 1,
				name: 'Category 1',
			},
			{
				id: 2,
				name: 'Category 2',
			},
			{
				id: 3,
				name: 'Category 3',
			}
		])
	}

	public async down(queryRunner: QueryRunner): Promise<any> {
	}
}
