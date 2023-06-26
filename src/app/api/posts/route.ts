import { connect } from "@/utils/mongodb";
import { NextResponse } from "next/server";
import Post from "@/models/Post.model";

export const GET = async () => {
	try {
		await connect();

		const posts = await Post.find()
			.select(["_id", "title", "subtitle", "description", "createdAt"])
			// .skip(offset)                               //TODO: Add pagination
			// .limit(count)
			.lean();

		return new NextResponse(JSON.stringify(posts), { status: 200 });
	} catch (error) {
		return new NextResponse(`Database error${error}`, { status: 500 });
	}
};
