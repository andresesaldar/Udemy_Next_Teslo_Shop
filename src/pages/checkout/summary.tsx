import { Button, Grid, Stack, Typography } from "@mui/material";
import Address from "@/models/address";
import AddressSummary from "@/components/checkout/AddressSummary";
import CartItemsSummary from "@/components/cart/CartItemsSummary";
import { GetServerSideProps } from "next";
import { NextPageWithLayout } from "../_app";
import OrderSummary from "@/components/cart/OrderSummary";
import Product from "@/models/product";
import { ReactElement } from "react";
import ShopLayout from "@/layouts/ShopLayout";
import { getCurrentOrder } from "@/integration/orders";

type OrderSummaryProps = {
	orderItems: Product[];
	address: Address;
};

const Summary: NextPageWithLayout<OrderSummaryProps> = ({
	orderItems,
	address,
}) => (
	<>
		<Typography component="h1" variant="h4">
			Order summary
		</Typography>
		<Grid container spacing={2} marginTop={0.5}>
			<Grid item xs={12} sm={7}>
				<CartItemsSummary items={orderItems} hideActions />
			</Grid>
			<Grid item xs={12} sm={5}>
				<Stack spacing={1}>
					<AddressSummary address={address} editable />
					<OrderSummary items={orderItems} editable />
				</Stack>
				<Button fullWidth variant="contained" sx={{ marginTop: 1 }}>
					Confirm
				</Button>
			</Grid>
		</Grid>
	</>
);

Summary.getLayout = (page): ReactElement => (
	<ShopLayout description="Order summary" title="Order summary">
		{page}
	</ShopLayout>
);

export const getServerSideProps: GetServerSideProps<
	OrderSummaryProps
> = async () => {
	const { address, items: orderItems } = await getCurrentOrder();
	return {
		props: {
			address,
			orderItems,
		},
	};
};

export default Summary;
