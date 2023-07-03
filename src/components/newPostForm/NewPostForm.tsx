"use client";

import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { z } from "zod";

const newPostFormSchema = z.object({
	title: z.string().nonempty(),
	subtitle: z.string(),
	description: z.string().nonempty(),
	image: z.custom<File>(), // https://github.com/colinhacks/zod/issues/387
});

export function NewPostForm() {
	const [error, setError] = useState(false);

	const session = useSession();

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const formData = new FormData(event.currentTarget);
			const uploadFile = formData.get("image") as File;

			const newPost = newPostFormSchema.parse({
				title: formData.get("title"),
				subtitle: formData.get("subtitle"),
				description: formData.get("description"),
				image: `/${uploadFile.name}`,
			});

			const res = await fetch("/api/posts/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...newPost,
					author: session.data?.user?.email,
				}),
			});
			res.status === 201 && console.log(res);
		} catch (error) {
			setError(true);
		}
	};

	return (
		<form className="" onSubmit={handleSubmit}>
			{error && <span className="text-orange-700">Something went wrong!</span>}

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
			<input type="file" name="image" id="image" />
			<span className="italic">* A post without a picture is “dry” and “boring”...</span>

			<button type="submit">Add The Post</button>
		</form>
	);
}
