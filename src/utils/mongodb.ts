import mongoose from "mongoose";

export const connect = async () => {
	try {
		mongoose.set("strictQuery", true); //https://stackoverflow.com/questions/74747476/deprecationwarning-mongoose-the-strictquery-option-will-be-switched-back-to

		await mongoose.connect(process.env.MONGO_LINK || "");
	} catch (error) {
		throw new Error("connection failed!");
	}
};
