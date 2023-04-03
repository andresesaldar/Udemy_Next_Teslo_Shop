import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Fade,
	Typography,
} from "@mui/material";
import { FC, useState } from "react";
import Link from "next/link";
import Product from "@/models/product";

type ProductCardProps = {
	product: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const [hovered, setHovered] = useState(false);
	const [isImgLoaded, setIsImgLoaded] = useState(false);

	return (
		<Card>
			<Link
				href={`/products/${product.slug}`}
				passHref
				prefetch={false}
				style={{ color: "inherit", textDecoration: "none" }}
			>
				<CardActionArea
					onMouseEnter={(): void => setHovered(true)}
					onMouseLeave={(): void => setHovered(false)}
				>
					<CardMedia
						component="img"
						image={`/images/products/${
							hovered ? product.images[1] : product.images[0]
						}`}
						alt={product.title}
						onLoad={(): void => setIsImgLoaded(true)}
					/>
					<Fade in={isImgLoaded}>
						<CardContent
							sx={{
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<Typography variant="subtitle1" maxWidth="75%">
								{product.title}
							</Typography>
							<Typography
								variant="overline"
								color="text.secondary"
							>
								${product.price}
							</Typography>
						</CardContent>
					</Fade>
				</CardActionArea>
			</Link>
		</Card>
	);
};

export default ProductCard;
