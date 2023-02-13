import EmptyCart from "@/components/cart/EmptyCart";
import { GetServerSideProps } from "next";
import { NextPageWithLayout } from "../_app";
import Product from "@/models/product";
import { ReactElement } from "react";
import ShopLayout from "@/layouts/ShopLayout";
import ShoppingCartDetail from "@/components/cart/ShoppingCartDetail";
import { getCartItems } from "@/integration/cart";

type ShoppingCartProps = {
	cartItems: Product[];
};

const ShoppingCart: NextPageWithLayout<ShoppingCartProps> = ({ cartItems }) =>
	cartItems.length <= 0 ? (
		<EmptyCart />
	) : (
		<ShoppingCartDetail cartItems={cartItems} />
	);

ShoppingCart.getLayout = (page): ReactElement => (
	<ShopLayout description="Shopping Cart information" title="Shopping Cart">
		{page}
	</ShopLayout>
);

export const getServerSideProps: GetServerSideProps<ShoppingCartProps> = async (
	ctx,
) => {
	const items = ctx.req.cookies["cart"];
	return {
		props: {
			cartItems:
				items && Array.from(JSON.parse(items)).length > 0
					? await getCartItems()
					: [],
		},
	};
};

export default ShoppingCart;
