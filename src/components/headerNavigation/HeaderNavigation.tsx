"use client";

import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { DarkModeToggle } from "../darkModeToggle/DarkModeToggle";

type NavLink = {
	label: string;
	href: string;
};

type Props = {
	navLinks: NavLink[];
};

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
	const pathname = usePathname().split('/')[1];

	const [toggle, setToggle] = useState(false);

	return (
		<>
			<nav className="hidden lg:flex items-center gap-4">
				<DarkModeToggle />
				{links.map((link) => {
					const isActive = `/${pathname}` === link.url;
					return (
						<Link key={link.id} href={link.url} className={`flex ${isActive ? "active" : ""}`}>
							{link.title}
						</Link>
					);
				})}
				{session.status === "authenticated" && <button onClick={() => signOut()}>LogOut</button>}
			</nav>
			<div className="lg:hidden flex flex-1 justify-end items-center">
				<Image
					className="cursor-pointer"
					width={30}
					height={30}
					src={toggle ? "/close.svg" : "/menu.svg"}
					alt="menu"
					onClick={() => setToggle(!toggle)}
				/>
				<div
					className={`${
						!toggle ? "hidden" : "flex"
					} p-8 flex-col gap-4 bg-neutral-200 dark:bg-neutral-900 opacity-95 absolute top-16 right-0 mx-4 z-10 rounded-xl`}
				>
					{session.status === "authenticated" && <button onClick={() => signOut()}>LogOut</button>}
					{links.map((link) => {
						const isActive = pathname === link.url;
						return (
							<Link
								key={link.id}
								href={link.url}
								className={`flex ${isActive ? "active" : ""}`}
								onClick={() => {
									setToggle(!toggle);
								}}
							>
								{link.title}
							</Link>
						);
					})}
					<DarkModeToggle />
				</div>
			</div>
		</>
	);
}
