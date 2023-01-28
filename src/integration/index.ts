import axios from "axios";

const httpClient = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL || undefined,
});

export default httpClient;
