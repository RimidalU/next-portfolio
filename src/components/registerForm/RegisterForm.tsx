"use client";

import { FormEvent, useState } from "react";
import { z } from "zod";

import { Button } from "@/components/button/Button";

const registerFormSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	password: z.string(),
});

export function RegisterForm() {
	const [error, setError] = useState(false);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const formData = new FormData(event.currentTarget);

			const feedback = registerFormSchema.parse({
				name: formData.get("name"),
				email: formData.get("email"),
				password: formData.get("password"),
			});
			console.log(feedback);
		} catch (error) {
			setError(true);
			console.warn("LoginForm", error);
		}
	};

	return (
		<form className="shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>

			{error && <span className="text-orange-700">Check the entered data!</span>}
			
			<label htmlFor="email">Your name:</label>
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

			<label htmlFor="email">Enter password:</label>
			<input
				type="password"
				name="password"
				id="password"
				placeholder="Enter your password."
				minLength={5}
				required
			/>
			<Button text="Register" type="submit" variant="none" />
		</form>
	);
}
