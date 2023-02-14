import { AppBar, Box, Paper, Stack, Toolbar, Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { ShoppingBag as ShoppingBagIcon } from "@mui/icons-material";
import ThemeSwitch from "@/components/shared/ThemeSwitch";

type AuthLayoutProps = {
	title: string;
	description: string;
} & PropsWithChildren;

const AuthLayout: FC<AuthLayoutProps> = ({ children, title, description }) => (
	<>
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="og:title" content={title} />
			<meta name="og:description" content={description} />
		</Head>
		<Box
			component="main"
			sx={{
				alignItems: "center",
				display: "flex",
				height: "100vh",
				justifyContent: "center",
			}}
		>
			<Paper
				elevation={3}
				sx={{
					height: {
						sm: "auto",
						xs: "100%",
					},
					width: {
						lg: "30%",
						md: "50%",
						sm: "75%",
						xs: "100%",
					},
				}}
			>
				<Box sx={{ flexGrow: 1 }}>
					<AppBar position="static" sx={{ py: 1 }}>
						<Toolbar>
							<Stack
								direction="row"
								alignItems="center"
								spacing={1}
								sx={{ flexGrow: 1 }}
							>
								<ShoppingBagIcon fontSize="large" />
								<Typography variant="h4" component="h1">
									Teslo Shop
								</Typography>
							</Stack>
							<ThemeSwitch />
						</Toolbar>
					</AppBar>
				</Box>
				<Box p={4}>{children}</Box>
			</Paper>
		</Box>
	</>
);

export default AuthLayout;
