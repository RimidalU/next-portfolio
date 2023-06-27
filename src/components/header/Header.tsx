import Link from "next/link";

import { HeaderNavigation } from "../headerNavigation/HeaderNavigation";

export function Header() {
	return (
		<header className="h-24 flex justify-between items-center">
			<Link href={"/"} className="font-bold text-xl">
				RimidalU
			</Link>
			<HeaderNavigation />
		</header>
	);
}
