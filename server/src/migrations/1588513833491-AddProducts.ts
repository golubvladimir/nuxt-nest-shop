import {MigrationInterface, QueryRunner} from "typeorm";
import {Product} from "../products/product.entity";

export class AddProducts1588513833491 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
			const productRepo = queryRunner.connection.getRepository(Product);

			await productRepo.insert([
				{
					id: 1,
					name: 'Product 1',
					description: 'Description product',
					category: 2
				},
				{
					id: 2,
					name: 'Product 2',
					description: 'Description product',
					category: 1
				},
				{
					id: 3,
					name: 'Product 3',
					description: 'Description product',
					category: 1
				}
			])
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
