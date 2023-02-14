import Address from "./address";
import Product from "./product";

export type OrderStatus = "pending" | "processed";

type Order = {
	_id?: string;
	address: Address;
	items: Product[];
	status?: OrderStatus;
};

export default Order;
