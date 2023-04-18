import { Box, Chip, Typography } from "@mui/material";
import {
	CreditCardOff as CreditCardOffIcon,
	CreditScore as CreditScoreIcon,
} from "@mui/icons-material";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import Order, { OrderStatus } from "@/models/order";
import { ReactElement, useMemo } from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { NextPageWithLayout } from "../_app";
import ShopLayout from "@/layouts/ShopLayout";
import httpClient from "@/integration";

type OrderData = {
	id: string;
	address: string;
	location: string;
	status?: OrderStatus;
};

type HistoryProps = {
	orders: Order[];
};

const columns: GridColumns<OrderData> = [
	{
		field: "id",
		headerName: "Id",
		renderCell: (params): ReactElement => {
			const id = params.row.id;
			return (
				<Link
					href={`/orders/${id}`}
					prefetch={false}
					style={{ color: "inherit" }}
				>
					{id}
				</Link>
			);
		},
	},
	{
		field: "status",
		headerName: "Status",
		renderCell: (params): ReactElement => {
			const status = params.row.status;
			return (
				<Chip
					variant="outlined"
					color={status === "processed" ? "success" : "warning"}
					label={
						status === "processed" ? "Processed" : "Pending payment"
					}
					icon={
						status === "processed" ? (
							<CreditScoreIcon />
						) : (
							<CreditCardOffIcon />
						)
					}
				/>
			);
		},
		width: 200,
	},
	{ field: "address", headerName: "Address", width: 200 },
	{ field: "location", headerName: "Location", width: 150 },
];

const History: NextPageWithLayout<HistoryProps> = ({ orders }) => {
	const rows = useMemo<OrderData[]>(
		() =>
			orders.map(({ _id, address, status }) => ({
				address: address.address,
				id: _id || "",
				location: `${address.city}, ${address.country.name}`,
				status,
			})),
		[orders],
	);
	return (
		<>
			<Typography component="h1" variant="h4">
				Client orders history
			</Typography>
			<Box height="70vh" marginTop={2}>
				<DataGrid
					columns={columns}
					rows={rows}
					pageSize={10}
					rowsPerPageOptions={[10]}
					disableSelectionOnClick
				/>
			</Box>
		</>
	);
};

History.getLayout = (page): ReactElement => (
	<ShopLayout
		description="Client orders history"
		title="Client orders history"
	>
		{page}
	</ShopLayout>
);

export const getServerSideProps: GetServerSideProps<
	HistoryProps
> = async () => {
	const { data: orders } = await httpClient.get<Order[]>(`/orders/history`);
	return {
		props: {
			orders,
		},
	};
};

export default History;
