import {MigrationInterface, QueryRunner} from "typeorm";
import {Photo} from "../products/photo.entity";
import {Product} from "../products/product.entity";

export class AddPhotos1588764333872 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
			const photosRepo = queryRunner.connection.getRepository(Photo);
			const productsRepo = queryRunner.connection.getRepository(Product);

			const appleProduct = await productsRepo.findOne(1);
			const orangeProduct = await productsRepo.findOne(2);
			const pepperProduct = await productsRepo.findOne(3);
			const tomatoProduct = await productsRepo.findOne(4);
			const milkProduct  = await productsRepo.findOne(5);
			const yogurtProduct = await productsRepo.findOne(6);
			const breadProduct = await productsRepo.findOne(7);
			const croissantProduct = await productsRepo.findOne(8);
			const porkProduct = await productsRepo.findOne(9);
			const beafProduct = await productsRepo.findOne(10);


			await photosRepo.insert([
				{
					id: 1,
					src: '/fruits/apples.jpg',
					product: appleProduct
				},
				{
					id: 2,
					src: '/fruits/oranges.jpg',
					product: orangeProduct
				},
				{
					id: 3,
					src: '/vegetables/tomatoes.jpg',
					product: pepperProduct
				},
				{
					id: 4,
					src: '/vegetables/tomatoes.jpg',
					product: tomatoProduct
				},
				{
					id: 5,
					src: '/dairy/milk.jpg',
					product: milkProduct
				},
				{
					id: 6,
					src: '/dairy/yogurt.jpg',
					product: yogurtProduct
				},
				{
					id: 7,
					src: '/bakery/bread.jpg',
					product: breadProduct
				},
				{
					id: 8,
					src: '/bakery/croissant.jpg',
					product: croissantProduct
				},
				{
					id: 9,
					src: '/meat/pork.jpg',
					product: porkProduct
				},
				{
					id: 10,
					src: '/meat/beaf.jpg',
					product: beafProduct
				}
			]);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
