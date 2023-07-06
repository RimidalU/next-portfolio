"use client";

import { useSession } from "next-auth/react";
import useSWR, { Fetcher } from "swr";

import { ShortPostCard } from "../shortPostCard/ShortPostCard";
import { IPost } from "@/types";

export function PostSet() {
	const session = useSession();

	const fetcher: Fetcher<IPost[], string> = (...args) => fetch(...args).then((res) => res.json());

	const { data, mutate, error, isLoading } = useSWR(
		`/api/posts?email=${session?.data?.user?.email}`,
		fetcher
	);

	return (
		
		<nav className="flex flex-col items-center">
			{isLoading && <p> Loading ... </p>}

			{!data?.length && !isLoading && (
				<>
					<span className="text-xl normal-case">You have no published posts.</span>
					<span className="text-lg normal-case">Let&apos;s fix this!</span>
				</>
			)}

			{data && data.map((post) => <ShortPostCard key={post._id} data={post} />)}
		</nav>
	);
}
