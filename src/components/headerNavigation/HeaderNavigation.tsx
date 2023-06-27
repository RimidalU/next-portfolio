"use client";

import Link from "next/link";

import { DarkModeToggle } from "../darkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

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

export function HeaderNavigation() {
	const session = useSession();
	return (
		<nav className="flex items-center gap-5">
			<DarkModeToggle />
			{links.map((link) => (
				<Link key={link.id} href={link.url} className="flex">
					{link.title}
				</Link>
			))}
			{session.status === "authenticated" && <button onClick={() => signOut()}>LogOut</button>}
		</nav>
	);
}
