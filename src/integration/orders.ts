import Order from "@/models/order";
import httpClient from ".";

export const getCurrentOrder = (): Promise<Order> =>
	httpClient.get<Order>("/orders/current").then(({ data }) => data);

export const getOrderById = (id: string): Promise<Order> =>
	httpClient.get<Order>(`/orders/${id}`).then(({ data }) => data);

export const getOrdersHistory = (): Promise<Order[]> =>
	httpClient.get<Order[]>("/orders/history").then(({ data }) => data);
