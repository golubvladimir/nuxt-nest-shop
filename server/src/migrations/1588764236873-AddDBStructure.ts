import {MigrationInterface, QueryRunner} from "typeorm";

export class AddDBStructure1588764236873 implements MigrationInterface {
    name = 'AddDBStructure1588764236873'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `photos` (`id` int NOT NULL AUTO_INCREMENT, `src` varchar(255) NOT NULL, `productId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `orders` (`id` int NOT NULL AUTO_INCREMENT, `dateCreate` datetime NOT NULL DEFAULT NOW(), `dateEdit` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `products` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `price` int NOT NULL, `categoryId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `categories` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `orders_products` (`id_order` int NOT NULL, `id_product` int NOT NULL, INDEX `IDX_216c7bbcb24c485129790a1efa` (`id_order`), INDEX `IDX_3a3d13824b4f3daa7c87bf0096` (`id_product`), PRIMARY KEY (`id_order`, `id_product`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `photos` ADD CONSTRAINT `FK_4e7f1b413734d5424ba9902a185` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `products` ADD CONSTRAINT `FK_ff56834e735fa78a15d0cf21926` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `orders_products` ADD CONSTRAINT `FK_216c7bbcb24c485129790a1efa5` FOREIGN KEY (`id_order`) REFERENCES `orders`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `orders_products` ADD CONSTRAINT `FK_3a3d13824b4f3daa7c87bf00962` FOREIGN KEY (`id_product`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `orders_products` DROP FOREIGN KEY `FK_3a3d13824b4f3daa7c87bf00962`", undefined);
        await queryRunner.query("ALTER TABLE `orders_products` DROP FOREIGN KEY `FK_216c7bbcb24c485129790a1efa5`", undefined);
        await queryRunner.query("ALTER TABLE `products` DROP FOREIGN KEY `FK_ff56834e735fa78a15d0cf21926`", undefined);
        await queryRunner.query("ALTER TABLE `photos` DROP FOREIGN KEY `FK_4e7f1b413734d5424ba9902a185`", undefined);
        await queryRunner.query("DROP INDEX `IDX_3a3d13824b4f3daa7c87bf0096` ON `orders_products`", undefined);
        await queryRunner.query("DROP INDEX `IDX_216c7bbcb24c485129790a1efa` ON `orders_products`", undefined);
        await queryRunner.query("DROP TABLE `orders_products`", undefined);
        await queryRunner.query("DROP TABLE `categories`", undefined);
        await queryRunner.query("DROP TABLE `products`", undefined);
        await queryRunner.query("DROP TABLE `orders`", undefined);
        await queryRunner.query("DROP TABLE `photos`", undefined);
    }

}
