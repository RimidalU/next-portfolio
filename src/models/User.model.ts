import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
	{
		name: {
			type: String,
			require: true,
		},
		email: {
			type: String,
			require: true,
			unique: true,
		},
		password: {
			type: String,
			require: true,
		},
		avatar: {
			//TODO implement user avatar
			type: String,
		},
	},
	{ timestamps: true }
);

export default mongoose.models["User"] || mongoose.model("User", UserSchema);   //https://stackoverflow.com/questions/59851947/now-mongoose-cannot-overwrite-model-once-compiled
