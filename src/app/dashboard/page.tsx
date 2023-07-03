import { NewPostForm } from "@/components/newPostForm/NewPostForm";
import { PostSet } from "@/components/postSet/PostSet";

export default function Dashboard() {
	return (
		<section className="flex flex-col flex-1 gap-5 h-full">
			<section className="flex gap-10 text-justify h-full">
				<article className="flex-1 flex flex-col gap-14 justify-center title-text">
					<PostSet />
				</article>
				<article className="flex-1 flex flex-col gap-5 justify-evenly">
					<NewPostForm />
				</article>
			</section>
		</section>
	);
}
