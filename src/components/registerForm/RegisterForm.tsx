"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { z } from "zod";

const registerFormSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	password: z.string(),
});

export function RegisterForm() {
	const [error, setError] = useState(false);

	const router = useRouter();
	const session = useSession();

	useEffect(() => {
		//https://stackoverflow.com/questions/62336340/cannot-update-a-component-while-rendering-a-different-component-warning
		if (session.status === "authenticated") {
			router?.push("/dashboard");
		}
	}, [router, session.status]);

	if (session.status === "loading") {
		return <p> Loading ... </p>;
	}

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const formData = new FormData(event.currentTarget);

			const feedback = registerFormSchema.parse({
				name: formData.get("name"),
				email: formData.get("email"),
				password: formData.get("password"),
			});

			const res = await fetch("/api/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(feedback),
			});
			res.status === 201 && router.push("/dashboard/login?success=Account has been created");
		} catch (error) {
			setError(true);
		}
	};

	return (
		<form className="shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
			{error && <span className="text-orange-700">Something went wrong!</span>}

			<label htmlFor="name">Your name:</label>
			<input type="text" name="name" id="name" placeholder="Enter your name." minLength={3} required />

			<label htmlFor="email">Your email:</label>
			<input
				type="email"
				name="email"
				id="email"
				placeholder="Enter your email."
				minLength={5}
				required
			/>

			<label htmlFor="password">Enter password:</label>
			<input
				type="password"
				name="password"
				id="password"
				placeholder="Enter your password."
				minLength={5}
				required
			/>
			<button type="submit">Register</button>
		</form>
	);
}
