import { GetStaticProps } from "next";
import { NextPageWithLayout } from "./_app";
import Product from "@/models/product";
import ProductsGrid from "@/components/products/ProductsGrid";
import { ReactElement } from "react";
import ShopLayout from "@/layouts/ShopLayout";
import { Typography } from "@mui/material";
import { getAllProducts } from "@/integration/products";

type HomeProps = {
	products: Product[];
};

const Home: NextPageWithLayout<HomeProps> = ({ products }) => (
	<>
		<Typography variant="h4" component="h1">
			Shop
		</Typography>
		<Typography variant="subtitle1" component="h2">
			All Products
		</Typography>
		<ProductsGrid products={products} />
	</>
);

Home.getLayout = (page): ReactElement => (
	<ShopLayout
		title="Teslo shop - Home"
		description="See all our best products here"
	>
		{page}
	</ShopLayout>
);

export const getStaticProps: GetStaticProps<HomeProps> = async () => ({
	props: {
		products: await getAllProducts(),
	},
});

export default Home;
