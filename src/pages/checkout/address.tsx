import {
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { ReactElement, useState } from "react";
import Country from "@/models/country";
import { GetServerSideProps } from "next";
import { NextPageWithLayout } from "@/pages/_app";
import ShopLayout from "@/layouts/ShopLayout";
import { getCountries } from "@/integration/countries";

type AddressProps = {
	countries: Country[];
};

const Address: NextPageWithLayout<AddressProps> = ({ countries }) => {
	const [country, setCountry] = useState("");
	return (
		<form onSubmit={(e): void => e.preventDefault()}>
			<Typography variant="h4" component="h1" mb={2}>
				Address
			</Typography>
			<Typography variant="subtitle1" mb={2}>
				Client information
			</Typography>
			<Stack spacing={2}>
				<TextField id="name" label="Name" variant="outlined" required />
				<TextField
					id="last-name"
					label="Last name"
					variant="outlined"
					required
				/>
				<TextField
					id="phone-number"
					label="Phone number"
					variant="outlined"
					required
				/>
			</Stack>
			<Typography variant="subtitle1" my={2}>
				Location information
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth required>
						<InputLabel id="country-label">Country</InputLabel>
						<Select
							labelId="country-label"
							id="country"
							value={country}
							label="Country"
							onChange={(event): void =>
								setCountry(event.target.value)
							}
						>
							{countries.map(({ _id, name }) => (
								<MenuItem value={_id} key={_id}>
									{name}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						id="city"
						label="City"
						variant="outlined"
						required
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						id="address"
						label="Address"
						variant="outlined"
						required
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						id="address-line-2"
						label="Address line 2 (Optional)"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						id="postal-code"
						label="Postal code"
						variant="outlined"
						required
					/>
				</Grid>
			</Grid>
			<Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
				Review order
			</Button>
		</form>
	);
};

Address.getLayout = (page): ReactElement => (
	<ShopLayout
		description="Checkout address information"
		title="Checkout address"
	>
		{page}
	</ShopLayout>
);

export const getServerSideProps: GetServerSideProps = () =>
	getCountries().then((countries) => ({
		props: {
			countries,
		},
	}));

export default Address;
