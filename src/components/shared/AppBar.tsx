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
									<Link
										href="/category/men"
										style={{
											color: "inherit",
											textDecoration: "none",
										}}
									>
										<Button size="small" color="inherit">
											Men
										</Button>
									</Link>
									<Link
										href="/category/women"
										style={{
											color: "inherit",
											textDecoration: "none",
										}}
									>
										<Button size="small" color="inherit">
											Women
										</Button>
									</Link>
									<Link
										href="/category/child"
										style={{
											color: "inherit",
											textDecoration: "none",
										}}
									>
										<Button size="small" color="inherit">
											Child
										</Button>
									</Link>
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
