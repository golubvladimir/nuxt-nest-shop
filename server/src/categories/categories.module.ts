import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { Category } from "./category.entity";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoriesController]
})
export class CategoriesModule {}
