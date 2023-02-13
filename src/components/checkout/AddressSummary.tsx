import { Paper, Stack, Typography } from "@mui/material";
import Address from "@/models/address";
import { FC } from "react";
import Link from "next/link";

type AddressSummary = {
	address: Address;
	editable?: boolean;
};

const AddressSummary: FC<AddressSummary> = ({
	address: {
		address,
		city,
		country,
		lastName,
		name,
		phoneNumber,
		postalCode,
	},
	editable,
}) => (
	<Paper elevation={3} sx={{ padding: 2 }}>
		<Stack
			direction="row"
			alignItems="center"
			justifyContent="space-between"
		>
			<Typography variant="h6">Address</Typography>
			{editable && (
				<Link
					href="/checkout/address"
					prefetch={false}
					style={{ color: "inherit" }}
				>
					Edit
				</Link>
			)}
		</Stack>
		<Stack my={1}>
			<Typography component="span">
				{name} {lastName}
			</Typography>
			<Typography component="span">{address}</Typography>
			<Typography component="span">
				{city}, {postalCode}
			</Typography>
			<Typography component="span">{country.name}</Typography>
			<Typography component="span">{phoneNumber}</Typography>
		</Stack>
	</Paper>
);

export default AddressSummary;
