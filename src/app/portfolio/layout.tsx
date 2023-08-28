"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// export const metadata = {
// 	title: "Uladzimir Stankevich - Portfolio. | My projects",
// };

const links = [
	{
		id: 1,
		title: "Web",
		url: "/portfolio/web",
	},
	{
		id: 2,
		title: "Apps",
		url: "/portfolio/apps",
	},
	{
		id: 3,
		title: "Implementations",
		url: "/portfolio/implementations",
	},
];

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	return (
		<>
			<header className="flex justify-around pb-10">
				<h1 className="title-text ">My projects: </h1>
				{links.map((link) => {
					const isActive = pathname === link.url;
					return (
						<Link key={link.id} href={link.url} className={`flex ${isActive ? "active" : ""}`}>
							{link.title}
						</Link>
					);
				})}
			</header>
			{children}
		</>
	);
}
