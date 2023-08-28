import mongoose from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema(
	{
		title: {
			type: String,
			require: true,
			unique: true,
		},
		subtitle: {
			type: String,
		},
		description: {
			type: String,
			require: true,
		},
		author: {
			// TODO: add link to User entity
			// 	type: Schema.Types.ObjectId,
			// 	ref: "User",
			type: String,
			require: true,
		},
		image: {
			//TODO implement img loading
			type: String,
			// require: true,
		},
	},
	{ timestamps: true }
);

export default mongoose.models["Post"] || mongoose.model("Post", PostSchema); //https://stackoverflow.com/questions/59851947/now-mongoose-cannot-overwrite-model-once-compiled
