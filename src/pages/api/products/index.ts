import { BadRequestException, HttpException } from "@/exceptions/http";
import { NextApiRequest, NextApiResponse } from "next";
import { ProductGender, ProductGenders } from "@/models/product";
import { getProducts } from "@/services/products";

const handler = async (
	req: NextApiRequest,
	res: NextApiResponse,
): Promise<void> => {
	try {
		switch (req.method) {
			case "GET":
				const gender = req.query.gender;
				if (gender && !ProductGenders.includes(gender as ProductGender))
					throw new BadRequestException();
				return res
					.status(200)
					.json(await getProducts(gender as ProductGender));
			default:
				return res.status(404).send(undefined);
		}
	} catch (error) {
		const statusCode = (error as HttpException).statusCode;
		return res.status(statusCode || 500).json({
			message: statusCode
				? (error as HttpException).message
				: "Internal Server error",
		});
	}
};

export default handler;
