import {Product} from "./product.entity";

export interface getProducts {
	products: Product[],
	total: number
}