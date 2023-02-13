import { FC, ReactNode, useMemo } from "react";
import { Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Product from "@/models/product";

const calcSubtotal = (products: Product[]): number =>
	products.length > 0
		? products.reduce((acc, product) => acc + product.price, 0)
		: 0;

const calcTaxes = (products: Product[]): number =>
	products.length > 0
		? products.reduce((acc, product) => acc + product.price * 0.15, 0)
		: 0;

type OrderItemProps = {
	title: string;
	value: ReactNode;
	important?: boolean;
};

const OrderItem: FC<OrderItemProps> = ({ title, value, important }) => (
	<Typography
		sx={{
			display: "flex",
			justifyContent: "space-between",
		}}
		fontWeight={important ? "bold" : undefined}
		variant={important ? "subtitle1" : undefined}
	>
		{title}:
		<Typography
			fontWeight={important ? "bold" : undefined}
			variant={important ? "subtitle1" : undefined}
			component="span"
		>
			{value}
		</Typography>
	</Typography>
);

type OrderSummaryProps = {
	items: Product[];
	editable?: boolean;
};

const OrderSummary: FC<OrderSummaryProps> = ({ items, editable }) => {
	const { taxes, subtotal } = useMemo(
		() => ({
			subtotal: calcSubtotal(items),
			taxes: calcTaxes(items),
		}),
		[items],
	);
	return (
		<Paper elevation={3} sx={{ padding: 2 }}>
			<Stack
				direction="row"
				alignItems="center"
				justifyContent="space-between"
			>
				<Typography variant="h6">Order</Typography>
				{editable && (
					<Link
						href="/cart"
						prefetch={false}
						style={{ color: "inherit" }}
					>
						Edit
					</Link>
				)}
			</Stack>
			<Stack my={1}>
				<OrderItem title="Items" value={items.length} />
				<OrderItem title="Subtotal" value={`$${subtotal}`} />
				<OrderItem title="Taxes (15%)" value={`$${taxes}`} />
			</Stack>
			<OrderItem title="Total" value={`$${subtotal + taxes}`} important />
		</Paper>
	);
};

export default OrderSummary;
