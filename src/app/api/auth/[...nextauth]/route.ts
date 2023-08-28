import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import { compare } from "bcrypt";

import { connect } from "@/utils/mongodb";
import User from "@/models/User.model";

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
		}),
		CredentialsProvider({
			id: "credentials",
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email", placeholder: "j@smith.com" },
				password: { label: "Password", type: "password", placeholder: "*****" },
			},
			async authorize(credentials) {
				await connect();

				try {
					const user = await User.findOne({
						email: credentials?.email,
					});

					if (user) {
						const isPasswordCorrect = await compare(credentials?.password!, user.password);

						if (isPasswordCorrect) {
							return user;
						} else {
							throw new Error("User not found!");
						}
					} else {
						throw new Error("User not found!");
					}
				} catch (error) {
					throw new Error(`Database error${error}`);
				}
			},
		}),
	],
	pages: {
		signIn: "/dashboard/login",
		error: "/dashboard/login",
	},
});

export { handler as GET, handler as POST };
