import { FC } from "react";
import { Grid } from "@mui/material";
import Product from "@/models/product";
import ProductCard from "./ProductCard";

type ProductsGridProps = {
	products: Product[];
};

const ProductsGrid: FC<ProductsGridProps> = ({ products }) => (
	<Grid container spacing={2} my={0.5}>
		{products.map((product) => (
			<Grid item xs={6} sm={4} lg={3} key={product.slug}>
				<ProductCard product={product} />
			</Grid>
		))}
	</Grid>
);

export default ProductsGrid;
