import {
	Box,
	Button,
	Chip,
	Grid,
	ImageList,
	ImageListItem,
	Stack,
	Typography,
} from "@mui/material";
import { FC, useState } from "react";
import Image from "next/image";
import ItemCounter from "../shared/ItemCounter";
import Product from "@/models/product";
import ProductSizeSelector from "./ProductSizeSelector";

type ProductDetailImageProps = {
	title: string;
	image: string;
	item?: number;
};

const ProductDetailImage: FC<ProductDetailImageProps> = ({
	image,
	title,
	item,
}) => (
	<Image
		src={`/images/products/${image}`}
		alt={`${title}${item ? "-" + item : ""}`}
		height={500}
		width={500}
		style={{
			height: "auto",
			objectFit: "cover",
			width: "100%",
		}}
	/>
);

type ProductDetailProps = {
	product: Product;
};

const ProductDetail: FC<ProductDetailProps> = ({ product }) => {
	const [itemCount, setItemCount] = useState(1);
	const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
	const onItemCounterChange = (newValue: number): void =>
		setItemCount(newValue);
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} sm={7} md={7}>
				<ImageList cols={3}>
					<ImageListItem cols={2} rows={2}>
						<ProductDetailImage
							image={product.images[0]}
							title={product.title}
						/>
					</ImageListItem>
					{product.images.map((image, i) => (
						<ImageListItem key={i}>
							<ProductDetailImage
								image={image}
								item={i + 1}
								title={product.title}
							/>
						</ImageListItem>
					))}
				</ImageList>
			</Grid>
			<Grid item xs={12} sm={5} md={5}>
				<Stack spacing={2} py={2}>
					<Box>
						<Typography component="h1" variant="h4">
							{product.title}
						</Typography>
						<Typography variant="subtitle1" color="text.secondary">
							${product.price}
						</Typography>
					</Box>
					{product.inStock > 0 ? (
						<Stack
							onSubmit={(e): void => e.preventDefault()}
							component="form"
							spacing={1}
						>
							<ProductSizeSelector
								available={new Set(product.sizes)}
								selected={selectedSize}
								onChange={(newValue): void =>
									setSelectedSize(newValue)
								}
								name="product-size"
								label="Product Size"
							/>
							<Stack
								direction="row"
								justifyContent="space-between"
								alignItems="center"
							>
								<Typography>
									{product.inStock} in stock
								</Typography>
								<ItemCounter
									label="Item count"
									name="item-count"
									current={itemCount}
									min={1}
									onChange={onItemCounterChange}
									max={product.inStock}
								/>
							</Stack>
							<Button variant="contained" type="submit" fullWidth>
								Add to cart
							</Button>
						</Stack>
					) : (
						<Chip label="Out of stock" variant="outlined" />
					)}
					<Typography variant="body2">
						{product.description}
					</Typography>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default ProductDetail;
