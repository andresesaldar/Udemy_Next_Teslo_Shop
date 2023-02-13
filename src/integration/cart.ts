import Product from "@/models/product";
import httpClient from ".";

export const getCartItems = (): Promise<Product[]> =>
	httpClient.get<Product[]>("/cart").then(({ data }) => data);
