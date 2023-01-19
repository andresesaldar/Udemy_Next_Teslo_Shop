import "@/styles/globals.css";
import { FC, ReactElement } from "react";
import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { NextPage } from "next";
import { ThemeModeProvider } from "@/context/ThemeModeContext";

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement, props: P) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

const App: FC<AppPropsWithLayout> = ({
	Component,
	pageProps,
}: AppPropsWithLayout) => {
	const getLayout = Component.getLayout ?? ((page): ReactElement => page);
	return (
		<ThemeModeProvider>
			<CssBaseline />
			{getLayout(<Component {...pageProps} />, pageProps)}
		</ThemeModeProvider>
	);
};

export default App;
