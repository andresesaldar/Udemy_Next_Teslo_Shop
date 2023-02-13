import {
	Card,
	CardContent,
	CardMedia,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { Delete as DeleteIcon } from "@mui/icons-material";
import ItemCounter from "../shared/ItemCounter";
import Link from "next/link";
import Product from "@/models/product";

type CartItemSummaryProps = {
	product: Product;
	hideActions?: boolean;
};

const CartItemSummary: FC<CartItemSummaryProps> = ({
	product,
	hideActions,
}) => {
	const [itemCount, setItemCount] = useState(1);
	return (
		<Card sx={{ display: "flex" }} key={product.slug} variant="outlined">
			<CardMedia
				component="img"
				sx={{ width: "30%" }}
				image={"/images/products/" + product.images[0]}
				alt={product.title}
			/>
			<CardContent
				sx={{
					flexGrow: 1,
				}}
			>
				<Stack
					direction="row"
					justifyContent="space-between"
					spacing={1}
					height="100%"
				>
					<Stack justifyContent="space-between">
						<Typography component="div" variant="subtitle1">
							<Link
								href={`/products/${product.slug}`}
								style={{
									color: "inherit",
									textDecoration: "none",
								}}
								prefetch={false}
							>
								{product.title}
							</Link>
							<Typography
								variant="overline"
								color="text.secondary"
								component="div"
							>
								${product.price}
							</Typography>
						</Typography>
						<Stack direction="row">
							{hideActions ? (
								<Typography>{product.inStock} items</Typography>
							) : (
								<ItemCounter
									current={itemCount}
									max={product.inStock}
									min={1}
									label={"Cart item " + product.slug}
									name={"cart-item-" + product.slug}
									onChange={(newValue): void =>
										setItemCount(newValue)
									}
								/>
							)}
						</Stack>
					</Stack>
					<Stack justifyContent="space-between" alignItems="center">
						<Typography
							variant="subtitle1"
							color="text.secondary"
							component="div"
						>
							{product.sizes[0]}
						</Typography>
						{!hideActions && (
							<IconButton size="small" color="primary">
								<DeleteIcon />
							</IconButton>
						)}
					</Stack>
				</Stack>
			</CardContent>
		</Card>
	);
};

type CartItemsSummaryProps = {
	items: Product[];
	hideActions?: boolean;
};

const CartItemsSummary: FC<CartItemsSummaryProps> = ({
	items,
	hideActions,
}) => (
	<Stack spacing={1}>
		{items.map((item, i) => (
			<CartItemSummary product={item} key={i} hideActions={hideActions} />
		))}
	</Stack>
);

export default CartItemsSummary;
