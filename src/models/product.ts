export type ProductSize = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
export type ProductType = "shirts" | "pants" | "hoodies" | "hats";
export type ProductGender = "men" | "women" | "kid" | "unisex";

type Product = {
	type: ProductType;
	description: string;
	images: string[];
	inStock: number;
	price: number;
	sizes: ProductSize[];
	tags: string[];
	title: string;
	slug: string;
	gender: ProductGender;
};

export default Product;
