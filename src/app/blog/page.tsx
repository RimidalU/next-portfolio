import Link from "next/link";

import { ShortPostCard } from "@/components/shortPostCard/ShortPostCard";
import { IPost } from "@/types";

async function getData() {
	
	const res = await fetch(`${process.env.HOST_URL}api/posts`, { cache: "no-store" });

	if (!res.ok) {
		throw new Error("Filed to fetch data");
	}
	return res.json();
}

export const metadata = {
	title: "Uladzimir Stankevich - Portfolio. | Blog",
};

export default async function Blog() {
	const posts: Partial<IPost>[] = await getData()

	return (
		<section className="flex flex-col flex-1 gap-5 px-3 items-center">
			<h2 className="title-text">thoughts and useful things that I would like to keep.</h2>
			<ul className="w-full h-42 overflow-y-scroll no-scrollbar">
				{posts.map((post) => {
					return (
						<Link key={post._id} href={`blog/${post._id}`}>
							<ShortPostCard data={post} />
						</Link>
					);
				})}
			</ul>
		</section>
	);
}
