import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { FC } from "react";
import { ThemeModeProvider } from "@/context/ThemeModeContext";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
	<ThemeModeProvider>
		<CssBaseline />
		<Component {...pageProps} />
	</ThemeModeProvider>
);

export default App;
