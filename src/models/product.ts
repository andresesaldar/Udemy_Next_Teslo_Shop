import Entity from "./entity";

export const ProductSizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"] as const;
export const ProductTypes = ["shirts", "pants", "hoodies", "hats"] as const;
export const ProductGenders = ["men", "women", "kid", "unisex"] as const;

export type ProductSize = (typeof ProductSizes)[number];
export type ProductType = (typeof ProductTypes)[number];
export type ProductGender = (typeof ProductGenders)[number];

type Product = Entity & {
	type: ProductType;
	description: string;
	images?: string[];
	inStock: number;
	price: number;
	sizes?: ProductSize[];
	tags?: string[];
	title: string;
	slug: string;
	gender: ProductGender;
};

export default Product;
