import Order from "@/models/order";
import httpClient from ".";

export const getCurrentOrder = (): Promise<Order> =>
	httpClient.get<Order>("/orders/current").then(({ data }) => data);
