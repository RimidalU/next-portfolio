"use client";

import { signIn, signOut } from "next-auth/react";

const handler = (variant: "logOut" | "loginGoogle" | "none") => {
	const action = {
		logOut: () => signOut(),
		loginGoogle: () => signIn("google"),
		none: () => undefined,
	};

	return action[variant]();
};

type Props = {
	text: string;
	type?: "button" | "submit" | "reset" | undefined;
	variant: "logOut" | "loginGoogle" | "none";
};

export function Button({ text, type = "button", variant }: Props) {
	return (
		<button type={type} onClick={() => handler(variant)}>
			{text}
		</button>
	);
}
