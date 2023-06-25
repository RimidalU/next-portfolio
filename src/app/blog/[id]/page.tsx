import { FullPostCard } from "@/components/fullPostCard/FullPostCard";

const post = {
	id: 2,
	title: "Cats",
	subtitle: "Cats vs dogs",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dignissimos veritatis illum exercitationem in enim similique sed, magni iure unde. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dignissimos veritatis illum exercitationem in enim similique sed, magni iure unde.",
	author: "Me",
	date: "may 2023",
	image: "/web.jpg",
};

export default function BlogPost() {
	return <FullPostCard post={post} />;
}
