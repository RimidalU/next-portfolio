"use client";

import { FormEvent } from "react";
import { z } from "zod";

const newPostFormSchema = z.object({
	title: z.string().nonempty(),
	subtitle: z.string(),
	description: z.string().nonempty(),
	image: z.string().nullable(),	
});

export function NewPostForm() {
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const formData = new FormData(event.currentTarget);

			const feedback = newPostFormSchema.parse({
				title: formData.get("title"),
				subtitle: formData.get("subtitle"),
				description: formData.get("description"),
				image: formData.get("image"),
			});
			console.log(feedback);
		} catch (error) {
			console.warn("NewPostFormSchema", error);
		}
	};

	return (
		<form className="" onSubmit={handleSubmit}>
			<h1 className="title-text">new post</h1>

			<blockquote className="border-l-2 border-current italic my-3 pl-4 md:pl-8 py-2 mx-4 md:mx-10 max-w-md">
				<p className="text-sm text-right">What you hid is gone . What you gave is yours . </p>
				<cite className="block text-sm text-right mt-4 text-gray-600">- Shota Rustaveli</cite>
			</blockquote>

			<label htmlFor="title">Post title:</label>
			<input
				type="title"
				name="title"
				id="title"
				placeholder="Enter your post title."
				minLength={3}
				required
			/>

			<label htmlFor="subtitle">Post subtitle:</label>
			<input
				type="subtitle"
				name="subtitle"
				id="subtitle"
				placeholder="Enter your post subtitle. (not necessary)"
				minLength={3}
			/>

			<label htmlFor="description">Post content:</label>
			<textarea
				name="description"
				id="description"
				cols={30}
				rows={5}
				placeholder="Space for your post."
				minLength={5}
				required
			></textarea>

			<label htmlFor="image">Post image:</label>
			<input type="file" name="image" id="image" disabled />
			<span className="italic">* A post without a picture is “dry” and “boring”...</span>

			<button type="submit">Add The Post</button>
		</form>
	);
}
