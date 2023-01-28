import {
	AccountCircle as AccountCircleIcon,
	AdminPanelSettings as AdminPanelSettingsIcon,
	Category as CategoryIcon,
	ConfirmationNumber as ConfirmationNumberIcon,
	EscalatorWarning as EscalatorWarningIcon,
	Female as FemaleIcon,
	Male as MaleIcon,
	Search as SearchIcon,
} from "@mui/icons-material";
import {
	Box,
	Divider,
	Drawer,
	IconButton,
	Input,
	InputAdornment,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	ListSubheader,
} from "@mui/material";
import { FC, ReactElement } from "react";

type MenuItem = {
	icon: ReactElement;
	text: string;
	onlySm?: boolean;
};

const menuItems: MenuItem[] = [
	{ icon: <AccountCircleIcon />, text: "Profile" },
	{ icon: <ConfirmationNumberIcon />, text: "My Orders" },
	{ icon: <MaleIcon />, onlySm: true, text: "Male" },
	{ icon: <FemaleIcon />, onlySm: true, text: "Female" },
	{ icon: <EscalatorWarningIcon />, onlySm: true, text: "Kids" },
];
const adminMenuItems: MenuItem[] = [
	{ icon: <CategoryIcon />, text: "Products" },
	{ icon: <ConfirmationNumberIcon />, text: "Orders" },
	{ icon: <AdminPanelSettingsIcon />, text: "Users" },
];

type AppDrawerProps = {
	open: boolean;
	onClose: () => void;
};

const listGroup = (menuItems: MenuItem[]): ReactElement[] =>
	menuItems.map(({ icon, text, onlySm }, index) => (
		<ListItem
			key={index}
			disablePadding
			sx={onlySm ? { display: { md: "none", xs: "inherit" } } : undefined}
		>
			<ListItemButton>
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText primary={text} />
			</ListItemButton>
		</ListItem>
	));

const AppDrawer: FC<AppDrawerProps> = ({ open, onClose }) => {
	return (
		<Drawer open={open} onClose={onClose}>
			<Box
				sx={{
					width: 250,
				}}
				role="presentation"
			>
				<List>
					<ListItem>
						<Input
							type="text"
							placeholder="Search something"
							endAdornment={
								<InputAdornment position="end">
									<IconButton aria-label="toggle password visibility">
										<SearchIcon />
									</IconButton>
								</InputAdornment>
							}
						/>
					</ListItem>
					{listGroup(menuItems)}
					<Divider />
					<ListSubheader>Admin</ListSubheader>
					{listGroup(adminMenuItems)}
				</List>
			</Box>
		</Drawer>
	);
};

export default AppDrawer;
