import { Model, Schema, model, models } from "mongoose";
import Product, {
	ProductGenders,
	ProductSizes,
	ProductTypes,
} from "@/models/product";

const productSchema = new Schema<Product>(
	{
		description: { required: true, type: String },
		gender: {
			enum: {
				message: "Invalid gender",
				values: ProductGenders,
			},
			required: true,
			type: String,
		},
		images: [{ type: String }],
		inStock: { default: 0, required: true, type: Number },
		price: { default: 0, required: true, type: Number },
		sizes: [
			{
				enum: {
					message: "Invalid size",
					values: ProductSizes,
				},
				type: String,
			},
		],
		slug: { required: true, type: String, unique: true },
		tags: [{ type: String }],
		title: { required: true, type: String },
		type: {
			enum: {
				message: "Invalid type",
				values: ProductTypes,
			},
			required: true,
			type: String,
		},
	},
	{
		timestamps: true,
	},
);

const ProductModel: Model<Product> =
	models.Product || model("Product", productSchema);

export default ProductModel;
