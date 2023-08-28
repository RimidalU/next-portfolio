import { connect } from "@/utils/mongodb";
import { NextResponse } from "next/server";

import Post from "@/models/Post.model";

export const GET = async (request: Request) => {
	const url = new URL(request.url);

	const userEmail = url?.searchParams.get("email");

	try {
		await connect();
		if (userEmail) {
			const posts = await Post.find({ author: userEmail })
				// .skip(offset)                               //TODO: Add pagination
				// .limit(count)
				.lean();

			return new NextResponse(JSON.stringify(posts), { status: 200 });
		}

		if (!userEmail) {
			const posts = await Post.find()
				.select(["_id", "title", "subtitle", "description", "image"])
				// .skip(offset)                               //TODO: Add pagination
				// .limit(count)
				.lean();

			return new NextResponse(JSON.stringify(posts), { status: 200 });
		}
	} catch (error) {
		return new NextResponse(`Database error${error}`, { status: 500 });
	}
};

export const POST = async (request: Request) => {
	const body = await request.json();

	const newPost = new Post(body);

	try {
		await connect();

		console.log(await newPost.save());
		return new NextResponse("Post has been created", { status: 201 });
	} catch (error) {
		return new NextResponse(`Database error${error}`, { status: 500 });
	}
};
