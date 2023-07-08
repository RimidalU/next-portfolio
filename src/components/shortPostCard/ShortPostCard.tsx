import { IPost } from "@/types";
import Image from "next/image";
type Props = {
	data: Partial<IPost>;
};

export function ShortPostCard({ data }: Props) {
	return (
		<section className="flex flex-col text-justify md:flex-row md:max-w-7xl">
			<article className="flex-1 flex flex-col gap-5">
				{data.image && (
					<div className="h-52 min-h-full relative">
						<Image src={data.image} alt="Project" className="object-cover w-full" fill={true} />
					</div>
				)}
			</article>

			<article className="flex-1 flex flex-col gap-2 p-6 pb-11 md:gap-4 md:pb-6 overflow-hidden">
				<h2 className="text-xl line-clamp-2">{data.subtitle || data.title}</h2>
				<p className="line-clamp-3 text-base">{data.description}</p>
			</article>
		</section>
	);
}
