export type ProductSizes = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
export type ProductTypes = "shirts" | "pants" | "hoodies" | "hats";
export type ProductGenders = "men" | "women" | "kid" | "unisex";

type Product = {
	type: ProductTypes;
	description: string;
	images: string[];
	inStock: number;
	price: number;
	sizes: ProductSizes[];
	tags: string[];
	title: string;
	slug: string;
	gender: ProductGenders;
};

export default Product;
