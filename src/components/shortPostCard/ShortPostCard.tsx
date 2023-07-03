import { IPost } from "@/types";
import Image from "next/image";
type Props = {
	data: Partial<IPost>;
};

export function ShortPostCard({ data }: Props) {
	return (
		<section className="flex text-justify">
			<article className="flex-1 flex flex-col gap-5 p-5">
				<div className="h-36 min-h-full relative">
					<Image
						src={data.image!}
						alt="Project"
						className="object-cover border-4 rounded-lg border-emerald-800"
						fill={true}
					/>
				</div>
			</article>
			<article className="flex-1 flex flex-col gap-3 p-2">
				<h2 className="text-xl">{data.subtitle || data.title}</h2>
				<p className="line-clamp-4 text-base">{data.description}</p>
			</article>
		</section>
	);
}
