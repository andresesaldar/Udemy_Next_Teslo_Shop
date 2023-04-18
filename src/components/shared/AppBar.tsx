import {
	AppBar as AppBarUI,
	Badge,
	Box,
	Button,
	Grid,
	IconButton,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import { FC, useState } from "react";
import {
	Menu as MenuIcon,
	Search as SearchIcon,
	ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";
import AppDrawer from "./AppDrawer";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { useRouter } from "next/router";

type AppBarLinkProps = {
	path: string;
	label: string;
};

const AppBarLink: FC<AppBarLinkProps> = ({ label, path }) => {
	const router = useRouter();

	return (
		<Button
			component={Link}
			href={path}
			size="small"
			color={router.asPath === path ? "primary" : "inherit"}
		>
			{label}
		</Button>
	);
};

const AppBar: FC = () => {
	const [openDrawer, setOpenDrawer] = useState(false);

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBarUI position="sticky">
					<Toolbar>
						<Grid container display="flex" alignItems="center">
							<Grid
								item
								xs={6}
								md={4}
								display="flex"
								alignItems="center"
							>
								<IconButton
									size="small"
									edge="start"
									color="inherit"
									aria-label="menu"
									sx={{ mr: 1 }}
									onClick={(): void => setOpenDrawer(true)}
								>
									<MenuIcon />
								</IconButton>
								<Typography variant="h6" sx={{ flexGrow: 1 }}>
									<Link
										href="/"
										style={{
											color: "inherit",
											textDecoration: "none",
										}}
									>
										Teslo |{" "}
										<Typography
											component="span"
											sx={{ flexGrow: 1 }}
										>
											Shop
										</Typography>
									</Link>
								</Typography>
							</Grid>
							<Grid
								item
								xs={4}
								justifyContent="center"
								sx={{
									display: {
										md: "flex",
										xs: "none",
									},
								}}
							>
								<Stack direction="row" spacing={1}>
									<AppBarLink
										label="Men"
										path="/category/men"
									/>
									<AppBarLink
										label="Women"
										path="/category/women"
									/>
									<AppBarLink
										label="Children"
										path="/category/kid"
									/>
								</Stack>
							</Grid>
							<Grid
								item
								xs={6}
								md={4}
								display="flex"
								justifyContent="end"
								alignItems="center"
							>
								<IconButton>
									<SearchIcon />
								</IconButton>
								<Link
									href="/cart"
									style={{
										color: "inherit",
										textDecoration: "none",
									}}
								>
									<IconButton>
										<Badge
											badgeContent={2}
											color="secondary"
										>
											<ShoppingCartIcon />
										</Badge>
									</IconButton>
								</Link>
								<ThemeSwitch />
							</Grid>
						</Grid>
					</Toolbar>
				</AppBarUI>
			</Box>
			<AppDrawer
				open={openDrawer}
				onClose={(): void => setOpenDrawer(false)}
			/>
		</>
	);
};

export default AppBar;
