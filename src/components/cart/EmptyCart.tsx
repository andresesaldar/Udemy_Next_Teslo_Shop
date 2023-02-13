import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import NextLink from "next/link";
import { RemoveShoppingCart as RemoveShoppingCartIcon } from "@mui/icons-material";

const EmptyCart: FC = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			height="calc(100vh - 100px)"
		>
			<RemoveShoppingCartIcon sx={{ fontSize: "3.5rem" }} />
			<Stack marginLeft={1}>
				<Typography variant="subtitle1" component="span">
					Your shopping cart is empty.
				</Typography>
				<Typography color="primary.main">
					<NextLink href="/" style={{ color: "inherit" }}>
						Go back to shop
					</NextLink>
				</Typography>
			</Stack>
		</Box>
	);
};

export default EmptyCart;
