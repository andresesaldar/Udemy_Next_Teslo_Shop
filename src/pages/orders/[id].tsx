import { Button, Chip, Grid, Stack, Typography } from "@mui/material";
import {
	CreditCardOff as CreditCardOffIcon,
	CreditScore as CreditScoreIcon,
} from "@mui/icons-material";
import AddressSummary from "@/components/checkout/AddressSummary";
import CartItemsSummary from "@/components/cart/CartItemsSummary";
import { GetServerSideProps } from "next";
import { NextPageWithLayout } from "../_app";
import Order from "@/models/order";
import OrderSummary from "@/components/cart/OrderSummary";
import { ReactElement } from "react";
import ShopLayout from "@/layouts/ShopLayout";
import httpClient from "@/integration";

type OrderDetailParams = {
	id: string;
};

type OrderDetailProps = {
	order: Order;
};

const OrderDetail: NextPageWithLayout<OrderDetailProps> = ({
	order: { _id, address, items, status },
}) => (
	<>
		<Stack
			spacing={1}
			sx={{
				alignItems: {
					sm: "center",
					xs: "start",
				},
				flexDirection: {
					sm: "row",
				},
				justifyContent: {
					sm: "space-between",
				},
			}}
		>
			<Typography component="h1" variant="h4">
				Order {_id || ""} detail
			</Typography>
			<Chip
				variant="outlined"
				color={status === "processed" ? "success" : "warning"}
				label={status === "processed" ? "Processed" : "Pending payment"}
				icon={
					status === "processed" ? (
						<CreditScoreIcon />
					) : (
						<CreditCardOffIcon />
					)
				}
			/>
		</Stack>
		<Grid container spacing={2} marginTop={0.5}>
			<Grid item xs={12} sm={7}>
				<CartItemsSummary items={items} hideActions />
			</Grid>
			<Grid item xs={12} sm={5}>
				<Stack spacing={1}>
					<AddressSummary address={address} />
					<OrderSummary items={items} />
				</Stack>
				{status !== "processed" && (
					<Button fullWidth variant="contained" sx={{ marginTop: 1 }}>
						Go to payment
					</Button>
				)}
			</Grid>
		</Grid>
	</>
);

OrderDetail.getLayout = (page, props): ReactElement => (
	<ShopLayout
		description={`Order ${props.order._id || ""} detail`}
		title={`Order ${props.order._id || ""} detail`}
	>
		{page}
	</ShopLayout>
);

export const getServerSideProps: GetServerSideProps<
	OrderDetailProps,
	OrderDetailParams
> = async (ctx) => {
	const id = ctx.params?.id || "";
	const { data: order } = await httpClient.get<Order>(`/orders/${id}`);
	return {
		props: {
			order,
		},
	};
};

export default OrderDetail;
