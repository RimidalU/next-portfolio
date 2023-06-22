"use client";

import { FormEvent } from "react";
import { Button } from "../button/Button";

export function ContactForm() {
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(event);
	};

	return (
		<form className="" onSubmit={handleSubmit}>
			<h1 className="text-3xl bold capitalize">Quick contact with me:</h1>
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
			<Button text="Send" type="submit" />
		</form>
	);
}
