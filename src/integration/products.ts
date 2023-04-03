import useSWR, { SWRConfiguration, SWRResponse } from "swr";
import Product from "@/models/product";

export const useAllProducts = (
	category?: string,
	config?: SWRConfiguration,
): SWRResponse<Product[]> =>
	useSWR(`/products${category ? `?gender=${category}` : ""}`, config);

export const useProductBySlug = (
	slug: string,
	config?: SWRConfiguration,
): SWRResponse<Product> => useSWR(`/products/${slug}`, config);
