import Link from "next/link";

import { ShortPostCard } from "@/components/shortPostCard/ShortPostCard";

export default function Blog() {
	const posts = [
		{
			id: 1,
			title: "Post 1",
			subtitle: "Post about Lorem",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dignissimos veritatis illum exercitationem in enim similique sed, magni iure unde.",
			author: "Me",
			date: "2023",
			image: "/apps.jpg",
		},
		{
			id: 2,
			title: "Post 2",
			// subtitle: "My CV",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dignissimos veritatis illum exercitationem in enim similique sed, magni iure unde. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dignissimos veritatis illum exercitationem in enim similique sed, magni iure unde.",
			author: "Me",
			date: "2023",
			image: "/web.jpg",
		},
		{
			id: 2,
			title: "Cats",
			subtitle: "Cats vs dogs",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dignissimos veritatis illum exercitationem in enim similique sed, magni iure unde. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dignissimos veritatis illum exercitationem in enim similique sed, magni iure unde.",
			author: "Me",
			date: "2023",
			image: "/etretat.jpg",
		},
	];
	return (
		<section className="flex flex-col flex-1 gap-5 px-3 items-center">
			<h2 className="title-text">thoughts and useful things that I would like to keep.</h2>
			<ul className="w-full h-42 overflow-y-scroll no-scrollbar">
				{posts.map((post) => {
					return (
						<Link key={post.id} href={`blog/${post.title}`}>
							<ShortPostCard data={post} />
						</Link>
					);
				})}
			</ul>
		</section>
	);
}
