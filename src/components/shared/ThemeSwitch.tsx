import { FC, useContext } from "react";
import {
	LightMode as LightModeIcon,
	ModeNight as ModeNightIcon,
} from "@mui/icons-material";
import { Switch } from "@mui/material";
import ThemeModeContext from "@/context/ThemeModeContext";

const ThemeSwitch: FC = () => {
	const { mode, toggleMode } = useContext(ThemeModeContext);
	return (
		<Switch
			color="secondary"
			checked={mode === "dark"}
			onChange={(): void => toggleMode()}
			icon={<LightModeIcon fontSize="small" />}
			checkedIcon={<ModeNightIcon fontSize="small" />}
		/>
	);
};

export default ThemeSwitch;
