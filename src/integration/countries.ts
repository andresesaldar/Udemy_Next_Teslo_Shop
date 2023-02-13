import Country from "@/models/country";
import httpClient from ".";

export const getCountries = (): Promise<Country[]> =>
	httpClient.get<Country[]>("/countries").then(({ data }) => data);
