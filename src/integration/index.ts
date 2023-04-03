import axios from "axios";

const httpClient = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL || undefined,
});

export default httpClient;

export const fetcher = <T>(url: string): Promise<T> =>
	httpClient.get<T>(url).then((res) => res.data);
