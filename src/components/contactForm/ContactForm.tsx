"use client";

import { FormEvent } from "react";
import { z } from "zod";

const contactFormSchema = z.object({
	email: z.string().email(),
	message: z.string(),
});

export function ContactForm() {
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const formData = new FormData(event.currentTarget);

			const feedback = contactFormSchema.parse({
				email: formData.get("email"),
				message: formData.get("message"),
			});
			console.log(feedback);
		} catch (error) {
			console.warn("LoginForm", error);
		}
	};

	return (
		<form className="" onSubmit={handleSubmit}>
			<h1 className="title-text">Quick contact with me:</h1>
			<h3 className="text-lg italic">
				I am always open to interesting suggestions and constructive feedback. :)
			</h3>

			<label htmlFor="email">Your email:</label>
			<input
				className=""
				type="email"
				name="email"
				id="email"
				placeholder="Enter your email."
				minLength={3}
				required
			/>

			<label htmlFor="message">Your message:</label>
			<textarea
				className=""
				name="message"
				id="message"
				cols={30}
				rows={5}
				placeholder="Space for your message."
				minLength={5}
				required
			></textarea>
			<button type="submit">Send</button>
		</form>
	);
}
