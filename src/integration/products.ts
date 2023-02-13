import Product from "@/models/product";
import httpClient from ".";

export const getAllProducts = (): Promise<Product[]> =>
	httpClient.get<Product[]>("/products").then(({ data }) => data);

export const getProductBySlug = (slug: string): Promise<Product> =>
	httpClient.get<Product>(`/products/${slug}`).then(({ data }) => data);
