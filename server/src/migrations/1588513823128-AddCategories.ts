import {MigrationInterface, QueryRunner} from "typeorm";
import {Category} from "../categories/category.entity";

export class AddCategories1588513823128 implements MigrationInterface {

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
