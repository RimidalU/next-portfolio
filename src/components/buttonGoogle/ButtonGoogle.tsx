"use client";

import { signIn } from "next-auth/react";

export function ButtonGoogle() {
	return <button onClick={() => signIn("google")}>Login with Google</button>;
}
