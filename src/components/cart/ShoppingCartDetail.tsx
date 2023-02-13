import { Button, Grid, Typography } from "@mui/material";
import CartItemsSummary from "./CartItemsSummary";
import { FC } from "react";
import OrderSummary from "./OrderSummary";
import Product from "@/models/product";

type ShoppingCartDetailProps = {
	cartItems: Product[];
};

const ShoppingCartDetail: FC<ShoppingCartDetailProps> = ({ cartItems }) => {
	return (
		<>
			<Typography component="h1" variant="h4">
				Shopping cart
			</Typography>
			<Grid container spacing={2} marginTop={0.5}>
				<Grid item xs={12} sm={7}>
					<CartItemsSummary items={cartItems} />
				</Grid>
				<Grid item xs={12} sm={5}>
					<OrderSummary items={cartItems} />
					<Button fullWidth variant="contained" sx={{ marginTop: 1 }}>
						Checkout
					</Button>
				</Grid>
			</Grid>
		</>
	);
};

export default ShoppingCartDetail;
