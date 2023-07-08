"use client";

import { useSession } from "next-auth/react";
import useSWR, { Fetcher } from "swr";

import { ShortPostCard } from "../shortPostCard/ShortPostCard";
import { IPost } from "@/types";
import { useState } from "react";

export function PostSet() {
	const [errorMessage, setErrorMessage] = useState(false);

	const session = useSession();

	const fetcher: Fetcher<IPost[], string> = (...args) => fetch(...args).then((res) => res.json());

	const { data, isLoading } = useSWR(`/api/posts?email=${session?.data?.user?.email}`, fetcher);

	const { mutate } = useSWR(`/api/posts?email=${session?.data?.user?.email}`);

	const handleRemove = async (id: string) => {
		try {
			await fetch(`/api/posts/${id}`, {
				method: "DELETE",
			});

			mutate();
		} catch (error) {
			setErrorMessage(true);
		}
	};

	return (
		<article className="flex-1 flex flex-col gap-4 overflow-y-auto no-scrollbar ">
			{errorMessage && <span className="text-orange-700 title-text">Something went wrong!</span>}

			{isLoading && <p className="title-text"> Loading ... </p>}

			{!data?.length && !isLoading && (
				<>
					<span className="text-xl">You have no published posts.</span>
					<span className="text-lg">Let&apos;s fix this!</span>
				</>
			)}

			{data &&
				data.reverse().map((post) => (
					<div key={post._id} className="relative border-4 rounded-r-lg border-emerald-800 max-w-full">
						<ShortPostCard data={post} />
						<button
							onClick={() => handleRemove(post._id)}
							className="absolute right-2 bottom-2 text-sm"
							type="submit"
						>
							Remove
						</button>
					</div>
				))}
		</article>
	);
}
