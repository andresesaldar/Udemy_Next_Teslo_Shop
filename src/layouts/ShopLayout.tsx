import { FC, PropsWithChildren } from "react";
import AppBar from "@/components/shared/AppBar";
import { Container } from "@mui/material";
import Head from "next/head";

type ShopLayoutProps = {
	title: string;
	description: string;
	imageUrl?: string;
} & PropsWithChildren;

const ShopLayout: FC<ShopLayoutProps> = ({
	children,
	title,
	description,
	imageUrl,
}) => (
	<>
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="og:title" content={title} />
			<meta name="og:description" content={description} />
			{imageUrl && <meta name="og:image" content={imageUrl} />}
		</Head>
		<AppBar />
		<Container sx={{ paddingY: 1 }} component="main">
			{children}
		</Container>
	</>
);

export default ShopLayout;
