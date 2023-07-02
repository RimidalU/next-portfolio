"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
	const session = useSession();
	const router = useRouter();

	useEffect(() => {
		//https://stackoverflow.com/questions/62336340/cannot-update-a-component-while-rendering-a-different-component-warning
		if (session.status === "unauthenticated") {
			router.push("/dashboard/login");
		}
	}, [router, session.status]);

	if (session.status === "loading") {
		return <p> Loading ... </p>;
	}

	if (session.status === "authenticated") {
		return <div className=""> Dashboard Page </div>;
	}
}
