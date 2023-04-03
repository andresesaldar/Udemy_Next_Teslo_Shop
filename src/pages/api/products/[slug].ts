import { BadRequestException, HttpException } from "@/exceptions/http";
import { NextApiRequest, NextApiResponse } from "next";
import { getProductBySlug } from "@/services/products";

const handler = async (
	req: NextApiRequest,
	res: NextApiResponse,
): Promise<void> => {
	try {
		const slug = req.query.slug?.toString();
		if (!slug) throw new BadRequestException();
		switch (req.method) {
			case "GET":
				return res.status(200).json(await getProductBySlug(slug));
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
