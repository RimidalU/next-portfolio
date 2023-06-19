import Link from "next/link";

const links = [
	{
		id: 1,
		title: "Home",
		url: "/",
	},
	{
		id: 2,
		title: "Portfolio",
		url: "/portfolio",
	},
	{
		id: 3,
		title: "Blog",
		url: "/blog",
	},
	{
		id: 4,
		title: "About",
		url: "/about",
	},
	{
		id: 5,
		title: "Contacts",
		url: "/contacts",
	},
	{
		id: 6,
		title: "Dashboard",
		url: "/dashboard",
	},
];

export function Header() {
	return (
		<header>
			<Link href={"/"}>RimidalU</Link>
			<nav>
				{links.map((link) => (
					<Link key={link.id} href={link.url}>
						{link.title}
					</Link>
				))}
			</nav>
		</header>
	);
}
