import useSWR, { SWRConfiguration, SWRResponse } from "swr";
import Order from "@/models/order";

export const useCurrentOrder = (
	config?: SWRConfiguration,
): SWRResponse<Order> => useSWR("/orders/current", config);

export const useOrderById = (
	id: string,
	config?: SWRConfiguration,
): SWRResponse<Order> => useSWR(`/orders/${id}`, config);

export const useOrdersHistory = (
	config?: SWRConfiguration,
): SWRResponse<Order[]> => useSWR("/orders/history", config);
