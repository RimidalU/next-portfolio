import Link from "next/link";
import Image from "next/image";

export function ProjectCard({ data }: any) {
	return (
		<section className="flex gap-15 text-justify mb-6 odd:flex-row-reverse ">
			<article className="flex-1 flex flex-col gap-5 p-5">
				<div className="w-full h-full relative">
					<Image
						src="/implementations.jpg"
						alt="Project"
						className="dark:invert object-cover border-4 rounded-lg border-emerald-800"
						fill={true}
					/>
					<h2 className="paint-stroke">{data.name}</h2>
				</div>
			</article>
			<article className="flex-1 flex flex-col gap-3 p-2">
				<h2 className="title-text">{data.name}</h2>
				<p>{data.description}</p>
				<ul>
					{data.tools.map((tool: any) => {
						return <li key={tool}>{tool}</li>;
					})}
				</ul>
				<div className="flex justify-around">
					<Link href={data.github}>
						<button>View in GitHab</button>
					</Link>
					<Link href={data.liveDemo}>
						<button>Live Demo</button>
					</Link>
				</div>
			</article>
		</section>
	);
}
