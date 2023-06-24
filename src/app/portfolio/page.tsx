import Link from "next/link";

const categories = [
	{
		id: 1,
		name: "web",
		url: "/web",
		img: "/web.jpg",
	},
	{
		id: 2,
		name: "apps",
		url: "/apps",
		img: "/apps.jpg",
	},
	{
		id: 3,
		name: "implementations",
		url: "/implementations",
		img: "/implementations.jpg",
	},
];
export default function Portfolio() {
	return (
		<section className="flex flex-col flex-1 gap-5 h-fit">
			<h1 className="title-text">Choose a category</h1>
			<section className="flex flex-wrap gap-10 justify-center text-justify h-fit">
				{categories.map((category) => {
					return (
						<Link href={`portfolio${category.url}`} key={category.id} className="relative">
							<div
								style={{ backgroundImage: `url(${category.img})` }}
								className="w-64 h-96 border-2 py-2 px-4 rounded-lg border-emerald-800 hover:rounded-2xl hover:border-orange-700  bg-cover not: grayscale hover:filter-none"
							></div>
							<span className="paint-stroke">
								{category.name}
							</span>
						</Link>
					);
				})}
			</section>
		</section>
	);
}
