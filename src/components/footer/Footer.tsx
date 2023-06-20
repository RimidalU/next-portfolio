import Link from "next/link";

export function Footer() {
	return (
		<footer className="h-14 mx-auto flex items-center gap-4">
			<Link href="https://github.com/RimidalU" target="_blank">
				RimidalU
			</Link>
			<span>&copy; 2023</span>
		</footer>
	);
}
