import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from "@mui/material";
import { GetStaticProps } from "next";
import { NextPageWithLayout } from "./_app";
import Product from "@/models/product";
import { ReactElement } from "react";
import ShopLayout from "@/layouts/ShopLayout";
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
		<Grid container spacing={2}>
			{products.map((product) => (
				<Grid item xs={6} sm={4} lg={3} key={product.slug}>
					<Card>
						<CardActionArea>
							<CardMedia
								component="img"
								image={`images/products/${product.images[0]}`}
								alt={product.title}
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant="subtitle1"
									component="div"
								>
									{product.title}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			))}
		</Grid>
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
