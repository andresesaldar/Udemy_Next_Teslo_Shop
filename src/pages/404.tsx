import { Box, Typography } from "@mui/material";
import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import ShopLayout from "@/layouts/ShopLayout";

const NotFound: NextPageWithLayout = () => (
	<Box
		display="flex"
		justifyContent="center"
		alignItems="center"
		height="calc(100vh - 100px)"
	>
		<Typography
			variant="h5"
			component="h1"
			display="flex"
			alignItems="center"
		>
			404 |
			<Typography variant="subtitle1" component="span" marginLeft={1}>
				This page could not be found.
			</Typography>
		</Typography>
	</Box>
);

NotFound.getLayout = (page): ReactElement => (
	<ShopLayout
		title="Page not found"
		description="This page could not be found. Nothing to see"
	>
		{page}
	</ShopLayout>
);

export default NotFound;
