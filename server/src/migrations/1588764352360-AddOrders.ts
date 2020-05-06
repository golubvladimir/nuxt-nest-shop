import {MigrationInterface, QueryRunner} from "typeorm";
import {Order} from "../orders/order.entity";
import {Product} from "../products/product.entity";

export class AddOrders1588764352360 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
			const ordersRepo = queryRunner.connection.getRepository(Order);
			const productsRepo = queryRunner.connection.getRepository(Product);

			await ordersRepo.insert([
				{
					id: 1
				},
				{
					id: 2
				}
			]);

			const order1 = await ordersRepo.findOne(1, { relations: ['products'] });
			const order2 = await ordersRepo.findOne(2, { relations: ['products'] });

			const product1 = await productsRepo.findOne(1);
			const product2 = await productsRepo.findOne(2);
			const product3 = await productsRepo.findOne(3);

			order1.products.push(product1);
			order1.products.push(product2);

			order2.products.push(product3);

			await ordersRepo.save(order1);
			await ordersRepo.save(order2);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
