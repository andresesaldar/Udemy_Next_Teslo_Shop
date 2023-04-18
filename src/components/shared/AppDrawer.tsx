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
import { useRouter } from "next/router";

type MenuItem = {
	icon: ReactElement;
	text: string;
	onlySm?: boolean;
	path?: string;
};

const menuItems: MenuItem[] = [
	{ icon: <AccountCircleIcon />, text: "Profile" },
	{ icon: <ConfirmationNumberIcon />, text: "My Orders" },
	{ icon: <MaleIcon />, onlySm: true, path: "/category/men", text: "Male" },
	{
		icon: <FemaleIcon />,
		onlySm: true,
		path: "/category/women",
		text: "Female",
	},
	{
		icon: <EscalatorWarningIcon />,
		onlySm: true,
		path: "/category/kid",
		text: "Kids",
	},
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

const listGroup = (
	menuItems: MenuItem[],
	onItemClick: (path?: string) => void,
): ReactElement[] =>
	menuItems.map(({ icon, text, onlySm, path }, index) => (
		<ListItem
			key={index}
			disablePadding
			sx={onlySm ? { display: { md: "none", xs: "inherit" } } : undefined}
		>
			<ListItemButton onClick={(): void => onItemClick(path)}>
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText primary={text} />
			</ListItemButton>
		</ListItem>
	));

const AppDrawer: FC<AppDrawerProps> = ({ open, onClose }) => {
	const router = useRouter();

	const onItemClick = (path?: string): void => {
		onClose();
		if (path) router.push(path);
	};

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
					{listGroup(menuItems, onItemClick)}
					<Divider />
					<ListSubheader>Admin</ListSubheader>
					{listGroup(adminMenuItems, onItemClick)}
				</List>
			</Box>
		</Drawer>
	);
};

export default AppDrawer;
