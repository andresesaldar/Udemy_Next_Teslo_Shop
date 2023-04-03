import { GetStaticPaths, GetStaticProps } from "next";
import FullScreenLoader from "@/components/shared/FullScreenLoader";
import { NextPageWithLayout } from "../_app";
import ProductsGrid from "@/components/products/ProductsGrid";
import { ReactElement } from "react";
import ShopLayout from "@/layouts/ShopLayout";
import { Typography } from "@mui/material";
import { useAllProducts } from "@/integration/products";

type ProductsByCategoryProps = {
	category: string;
};

type ProductsByCategoryParams = {
	name: string;
};

const ProductsByCategory: NextPageWithLayout<ProductsByCategoryProps> = ({
	category,
}) => {
	const { data: products, isLoading } = useAllProducts(category);
	return (
		<>
			<Typography
				variant="h4"
				component="h1"
				sx={{ textTransform: "capitalize" }}
			>
				{category}
			</Typography>
			<Typography
				variant="subtitle1"
				component="h2"
				sx={{ textTransform: "capitalize" }}
			>
				All products for {category}
			</Typography>
			{isLoading ? (
				<FullScreenLoader />
			) : !products ? (
				<div>No data</div>
			) : (
				<ProductsGrid products={products} />
			)}
		</>
	);
};

ProductsByCategory.getLayout = (page, { category }): ReactElement => (
	<ShopLayout
		description={`${category} Products`}
		title={`See all our best products for ${category} here`}
	>
		{page}
	</ShopLayout>
);

export const getStaticPaths: GetStaticPaths<
	ProductsByCategoryParams
> = async () => {
	const categories = ["kid", "women", "men"];
	return {
		fallback: false,
		paths: categories.map((category) => ({ params: { name: category } })),
	};
};

export const getStaticProps: GetStaticProps<
	ProductsByCategoryProps,
	ProductsByCategoryParams
> = async (ctx) => {
	const category = ctx.params?.name.toString();
	return category
		? {
				props: {
					category,
				},
		  }
		: {
				notFound: true,
		  };
};

export default ProductsByCategory;
