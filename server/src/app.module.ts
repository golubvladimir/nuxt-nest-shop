import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as ORMConfig from './orm.config';
import { join } from 'path';

@Module({
  imports: [
  	ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'static')
		}),
		TypeOrmModule.forRoot(ORMConfig),
  	ProductsModule,
  	CategoriesModule
	]
})
export class AppModule {}
