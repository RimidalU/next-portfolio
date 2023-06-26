import { FullPostCard } from "@/components/fullPostCard/FullPostCard";
import { IPost } from "@/types";

type Props = {
	params: {
		id: string;
	};
};

async function getData(id: string) {
	const res = await fetch(`${process.env.HOST_URL}api/posts/${id}`, { cache: "no-store" });
	console.log(res);

	if (!res.ok) {
		throw new Error("Filed to fetch data");
	}
	return res.json();
}

export default async function BlogPost({ params }: Props) {
	const post: IPost = await getData(params.id);

	return <FullPostCard post={post} />;
}
