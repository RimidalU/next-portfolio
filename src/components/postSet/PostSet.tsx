"use client";

import { IPost } from "@/types";
import useSWR, { Fetcher } from "swr";
import { ShortPostCard } from "../shortPostCard/ShortPostCard";

export function PostSet() {
	const fetcher: Fetcher<IPost[], string> = (...args) => fetch(...args).then((res) => res.json());

	const { data, mutate, error, isLoading } = useSWR(
		`/api/posts`,

		//   `/api/posts?username=${session?.data?.user.name}`,
		fetcher
	);

	return (
		<nav className="flex flex-col items-center">
			{!data?.length && (
				<>
					<span className="text-xl normal-case">You have no published posts.</span>
					<span className="text-lg normal-case">Let&apos;s fix this!</span>
				</>
			)}

			{data && data.map((post) => <ShortPostCard key={post._id} data={post} />)}
		</nav>
	);
}
