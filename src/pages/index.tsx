import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import ShopLayout from "@/layouts/ShopLayout";
import { Typography } from "@mui/material";

const Home: NextPageWithLayout = () => (
	<>
		<Typography variant="h4" component="h1">
			Shop
		</Typography>
		<Typography variant="subtitle1" component="h2">
			All Products
		</Typography>
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

export default Home;
