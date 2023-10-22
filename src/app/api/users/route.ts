import { NextResponse } from "next/server";

import { connect } from "@/utils/mongodb";
import User from "@/models/User.model";

export const GET = async () => {
	try {
		await connect();
		const users = await User.find();

		return new NextResponse(JSON.stringify(users), { status: 200 });
	} catch (error) {
		return new NextResponse(`Database error${error}`, { status: 500 });
	}
};
