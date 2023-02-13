import Address from "./address";
import Product from "./product";

type Order = {
	address: Address;
	items: Product[];
};

export default Order;
