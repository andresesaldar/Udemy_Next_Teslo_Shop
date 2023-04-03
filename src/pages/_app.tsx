import "@/styles/globals.css";
import { FC, ReactElement } from "react";
import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { NextPage } from "next";
import { SWRConfig } from "swr";
import { ThemeModeProvider } from "@/context/ThemeModeContext";
import { fetcher } from "@/integration";

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
			<SWRConfig value={{ fetcher }}>
				<CssBaseline />
				{getLayout(<Component {...pageProps} />, pageProps)}
			</SWRConfig>
		</ThemeModeProvider>
	);
};

export default App;
