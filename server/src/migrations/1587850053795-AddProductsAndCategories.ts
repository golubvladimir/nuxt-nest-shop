import {MigrationInterface, QueryRunner} from "typeorm";

export class AddProductsAndCategories1587850053795 implements MigrationInterface {
    name = 'AddProductsAndCategories1587850053795'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `products` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `categoryId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `categories` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `products` ADD CONSTRAINT `FK_ff56834e735fa78a15d0cf21926` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `products` DROP FOREIGN KEY `FK_ff56834e735fa78a15d0cf21926`", undefined);
        await queryRunner.query("DROP TABLE `categories`", undefined);
        await queryRunner.query("DROP TABLE `products`", undefined);
    }

}
