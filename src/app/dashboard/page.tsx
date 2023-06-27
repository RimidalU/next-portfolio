"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
	const session = useSession();
	const router = useRouter();

	if (session.status === "loading") {
		return <p> Loading ... </p>;
	}

	if (session.status === "unauthenticated") {
		router.push("/dashboard/login");
	}

	if (session.status === "authenticated") {
		return <div className=""> Dashboard Page </div>;
	}
}
