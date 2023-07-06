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
		<article className="flex-1 flex flex-col gap-14 title-text overflow-y-auto no-scrollbar ">
			{isLoading && <p> Loading ... </p>}

			{!data?.length && !isLoading && (
				<>
					<span className="text-xl normal-case">You have no published posts.</span>
					<span className="text-lg normal-case">Let&apos;s fix this!</span>
				</>
			)}

			{data &&
				data.reverse().map((post) => (
					<div key={post._id} className="relative border-4 rounded-lg border-emerald-800">
						<span className="text-red-500 font-black text-5xl absolute right-0 bottom-16 cursor-pointer ">
							X
						</span>
						<ShortPostCard data={post} />
					</div>
				))}
		</article>
	);
}
