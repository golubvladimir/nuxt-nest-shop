import {MigrationInterface, QueryRunner} from "typeorm";

export class AddPhotos1588251249189 implements MigrationInterface {
    name = 'AddPhotos1588251249189'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `photos` (`id` int NOT NULL AUTO_INCREMENT, `src` varchar(255) NOT NULL, `productId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `photos` ADD CONSTRAINT `FK_4e7f1b413734d5424ba9902a185` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `photos` DROP FOREIGN KEY `FK_4e7f1b413734d5424ba9902a185`", undefined);
        await queryRunner.query("DROP TABLE `photos`", undefined);
    }

}
