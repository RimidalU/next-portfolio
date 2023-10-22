import Link from "next/link";

export default function NotFound() {
	return (
		<section className="flex flex-col gap-6 items-center justify-center h-screen">
			<h1 className="title-text text-orange-700">Page Not Found</h1>
			<Link href="/">To Home</Link>
		</section>
	);
}
