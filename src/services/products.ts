import Product, { ProductGender } from "@/models/product";
import ProductModel from "@/database/product-model";
import connect from "@/database";

const selectArgs: readonly (keyof Product)[] = [
	"images",
	"inStock",
	"price",
	"slug",
	"title",
	"tags",
] as const;

export const getProducts = async (
	gender?: ProductGender,
): Promise<Pick<Product, (typeof selectArgs)[number]>[]> => {
	await connect();
	return ProductModel.find(gender ? { gender } : {})
		.lean()
		.select(selectArgs.join(" ").concat(" -_id"))
		.sort({ createdAt: "desc" });
};

export const getProductBySlug = async (
	slug: string,
): Promise<Product | null> => {
	await connect();
	return ProductModel.findOne({ slug }).lean();
};

export const searchProductsByKeyword = async (
	keyword: string,
): Promise<Pick<Product, (typeof selectArgs)[number]>[]> => {
	await connect();
	return ProductModel.find({ $text: { $search: keyword } })
		.lean()
		.select(selectArgs.join(" ").concat(" -_id"));
};
