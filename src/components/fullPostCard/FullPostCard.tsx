import Image from "next/image";

export function FullPostCard({ post }: any) {
	return (
		<section className="flex flex-col gap-5">
			<section className="flex gap-15 text-justify mb-6">
				<article className="flex-1 flex flex-col justify-between gap-3 p-2">
					<h1 className="title-text">{post.title}</h1>
					<p className="text-lg italic">{post.subtitle || undefined}</p>
					<article className="flex content-center gap-3 p-2 items-center">
						<div className=" w-12 h-12 relative">
							<Image
								src={post.image}
								alt={post.author}
								className="object-cover border-4 rounded-full border-emerald-800"
								fill={true}
							/>
						</div>
						<span>
							{post.author} by on Friday, 31 March 2023
							{/* {post.date}                                       TODO:add date-convertor*/}
						</span>
					</article>
				</article>
				<div className="flex-1 h-72 min-h-full relative">
					<Image
						src={post.image}
						alt={post.title}
						className="object-cover w-full border-4 rounded-lg border-emerald-800"
						fill={true}
					/>
				</div>
			</section>
			<p>{post.description}</p>
		</section>
	);
}
