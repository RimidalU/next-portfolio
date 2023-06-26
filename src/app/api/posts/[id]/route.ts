import { connect } from "@/utils/mongodb";
import { NextResponse } from "next/server";
import Post from "@/models/Post.model";

type Props = {
	params: {
		id: string;
	};
};

export const GET = async (_: any, { params }: Props) => {
	try {
		await connect();

		const post = await Post.findById(params.id);

		return new NextResponse(JSON.stringify(post), { status: 200 });
	} catch (error) {
		return new NextResponse(`Database error${error}`, { status: 500 });
	}
};
