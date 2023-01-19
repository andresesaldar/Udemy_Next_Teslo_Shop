import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState,
} from "react";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import Cookies from "js-cookie";
import darkTheme from "@/themes/dark";
import lightTheme from "@/themes/light";

export type ThemeMode = "light" | "dark";

type ThemeModeContextData = {
	toggleMode: () => void;
	mode: ThemeMode;
};

const ThemeModeContext = createContext({} as ThemeModeContextData);

export const ThemeModeProvider: FC<PropsWithChildren> = ({ children }) => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const [mode, setMode] = useState<ThemeMode>("light");
	const toggleMode = (): void => {
		const newMode = mode === "light" ? "dark" : "light";
		setMode(newMode);
		Cookies.set("mode", newMode);
	};
	useEffect(() => {
		const savedMode = Cookies.get("mode");
		if (savedMode) setMode(savedMode as ThemeMode);
		else setMode(prefersDarkMode ? "dark" : "light");
	}, [prefersDarkMode]);
	return (
		<ThemeModeContext.Provider
			value={{
				mode,
				toggleMode,
			}}
		>
			<ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
				{children}
			</ThemeProvider>
		</ThemeModeContext.Provider>
	);
};

export default ThemeModeContext;
