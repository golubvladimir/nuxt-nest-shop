import {MigrationInterface, QueryRunner} from "typeorm";
import {Photo} from "../products/photo.entity";

export class AddPhotos1588513841685 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
			const photosRepo = queryRunner.connection.getRepository(Photo);

			await photosRepo.insert([
				{
					id: 1,
					src: '/vegetables/pomodors.jpg',
					product: 1
				},
				{
					id: 2,
					src: '/fruits/apples.jpg',
					product: 2
				},
				{
					id: 3,
					src: '/fruits/oranges.jpg',
					product: 3
				}
			])
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
