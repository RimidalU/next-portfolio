import { NewPostForm } from "@/components/newPostForm/NewPostForm";
import { PostSet } from "@/components/postSet/PostSet";

export default function Dashboard() {
	return (
		<section className="flex flex-col-reverse gap-10 text-justify h-fit lg:h-[calc(100vh-10rem)] lg:flex-row lg:max-w-7xl">
			<PostSet />
			<article className="flex-1 flex flex-col gap-5 justify-evenly">
				<NewPostForm />
			</article>
		</section>
	);
}
