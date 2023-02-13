import { GetStaticPaths, GetStaticProps } from "next";
import { getAllProducts, getProductBySlug } from "@/integration/products";
import { NextPageWithLayout } from "../_app";
import Product from "@/models/product";
import ProductDetailUI from "@/components/products/ProductDetail";
import { ReactElement } from "react";
import ShopLayout from "@/layouts/ShopLayout";

type ProductDetailParams = {
	slug: string;
};

type ProductDetailProps = {
	product: Product;
};

const ProductDetail: NextPageWithLayout<ProductDetailProps> = ({ product }) => {
	return <ProductDetailUI product={product} />;
};

ProductDetail.getLayout = (page, { product }): ReactElement => (
	<ShopLayout description={product.description} title={product.slug}>
		{page}
	</ShopLayout>
);

export const getStaticPaths: GetStaticPaths<ProductDetailParams> = async () => {
	const products = await getAllProducts();
	return {
		fallback: false,
		paths: products.map(({ slug }) => ({ params: { slug } })),
	};
};

export const getStaticProps: GetStaticProps<
	ProductDetailProps,
	ProductDetailParams
> = async (ctx) => {
	const slug = ctx.params?.slug.toString() || "";
	const product = await getProductBySlug(slug);
	return {
		props: {
			product,
		},
	};
};

export default ProductDetail;