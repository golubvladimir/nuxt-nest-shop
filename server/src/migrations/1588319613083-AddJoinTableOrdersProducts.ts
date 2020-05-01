import {MigrationInterface, QueryRunner} from "typeorm";

export class AddJoinTableOrdersProducts1588319613083 implements MigrationInterface {
    name = 'AddJoinTableOrdersProducts1588319613083'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `orders` (`id` int NOT NULL AUTO_INCREMENT, `dateCreate` datetime NOT NULL DEFAULT NOW(), `dateEdit` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `orders_products` (`ordersId` int NOT NULL, `productsId` int NOT NULL, INDEX `IDX_3c896321873d00008a0590bf46` (`ordersId`), INDEX `IDX_c5da576f0342e179fd678c9427` (`productsId`), PRIMARY KEY (`ordersId`, `productsId`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `orders_products` ADD CONSTRAINT `FK_3c896321873d00008a0590bf46b` FOREIGN KEY (`ordersId`) REFERENCES `orders`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `orders_products` ADD CONSTRAINT `FK_c5da576f0342e179fd678c94276` FOREIGN KEY (`productsId`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `orders_products` DROP FOREIGN KEY `FK_c5da576f0342e179fd678c94276`", undefined);
        await queryRunner.query("ALTER TABLE `orders_products` DROP FOREIGN KEY `FK_3c896321873d00008a0590bf46b`", undefined);
        await queryRunner.query("DROP INDEX `IDX_c5da576f0342e179fd678c9427` ON `orders_products`", undefined);
        await queryRunner.query("DROP INDEX `IDX_3c896321873d00008a0590bf46` ON `orders_products`", undefined);
        await queryRunner.query("DROP TABLE `orders_products`", undefined);
        await queryRunner.query("DROP TABLE `orders`", undefined);
    }

}
