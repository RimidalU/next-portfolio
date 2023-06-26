import { FullPostCard } from "@/components/fullPostCard/FullPostCard";
import { IPost } from "@/types";

type Props = {
	params: {
		id: string;
	};
};

async function getData(id: string) {
	const res = await fetch(`${process.env.HOST_URL}api/posts/${id}`, { cache: "no-store" });

	if (!res.ok) {
		throw new Error("Filed to fetch data");
	}
	return res.json();
}

export async function generateMetadata({ params }: Props) {
	const post: IPost = await getData(params.id);
	return {
		title: `Uladzimir Stankevich - Portfolio. | Blog | ${post.title}`,
	};
}

export default async function BlogPost({ params }: Props) {
	const post: IPost = await getData(params.id);

	return <FullPostCard post={post} />;
}
