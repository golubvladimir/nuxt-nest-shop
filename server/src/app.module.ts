import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import * as ORMConfig from './orm.config';

@Module({
  imports: [
		TypeOrmModule.forRoot(ORMConfig),
  	ProductsModule,
  	CategoriesModule
	]
})
export class AppModule {}
