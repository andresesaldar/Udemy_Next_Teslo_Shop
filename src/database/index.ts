import { connect as connectMongoose, connection, set } from "mongoose";

const connect = async (): Promise<void> => {
	if (connection && connection.readyState === 1) return;
	if (!process.env.MONGO_URL)
		throw new Error("Missing MONGO_URL env variable");
	set("strictQuery", false);
	await connectMongoose(process.env.MONGO_URL);
};

export default connect;
