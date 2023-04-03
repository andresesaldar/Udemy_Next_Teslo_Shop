import FullScreenLoader from "@/components/shared/FullScreenLoader";
import { NextPageWithLayout } from "./_app";
import ProductsGrid from "@/components/products/ProductsGrid";
import { ReactElement } from "react";
import ShopLayout from "@/layouts/ShopLayout";
import { Typography } from "@mui/material";
import { useAllProducts } from "@/integration/products";

const Home: NextPageWithLayout = () => {
	const { data: products, isLoading } = useAllProducts();
	return (
		<>
			<Typography variant="h4" component="h1">
				Shop
			</Typography>
			<Typography variant="subtitle1" component="h2">
				All Products
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

Home.getLayout = (page): ReactElement => (
	<ShopLayout
		title="Teslo shop - Home"
		description="See all our best products here"
	>
		{page}
	</ShopLayout>
);

export default Home;
