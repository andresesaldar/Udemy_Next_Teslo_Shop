import Country from "./country";

type Address = {
	name: string;
	lastName: string;
	phoneNumber: string;
	country: Country;
	city: string;
	address: string;
	addressExtra?: string;
	postalCode: string;
};

export default Address;
