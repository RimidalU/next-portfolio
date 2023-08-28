import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
	return <HomePageLayout resumeLink={<ResumeLink />} homePageImg={<HomePageImg />} />;
}

function HomePageLayout({
	resumeLink,
	homePageImg,
}: {
	resumeLink: JSX.Element;
	homePageImg: JSX.Element;
}) {
	return (
		<section className="flex flex-row gap-6 items-center min-h-full">
			<article className="flex flex-col flex-1 gap-10">
				<div
					className="flex flex-col flex-1 gap-10 bg-clip-text 
			text-transparent bg-gradient-to-b from-emerald-800 to-neutral-300"
				>
					<h2 className="text-7xl font-extrabold">Hey!</h2>
					<h1 className="text-6xl font-extrabold">I&apos;m Uladzimir.</h1>
					<p className="text-5xl font-extrabold">I&apos;m a fullstack developer.</p>
					<p className="text-5xl font-extrabold text-emerald-800 pl-3 animate-translateY">👇</p>
				</div>

				{resumeLink}
			</article>
			<aside>{homePageImg}</aside>
		</section>
	);
}

function ResumeLink() {
	return (
		<Link
			href={"/"}
			className="
			    inline-block w-fit border-2 py-2 px-4 rounded-lg border-orange-700
			    hover:rounded-2xl hover:border-emerald-800 inherit"
		>
			Resume
		</Link>
	);
}

function HomePageImg() {
	return (
		<Image src="/workplace.png" alt="My workplace" className="dark:invert" width={500} height={500} />
	);
}
