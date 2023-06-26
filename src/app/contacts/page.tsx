import { ContactForm } from "@/components/contactForm/ContactForm";
import Image from "next/image";
import Link from "next/link";

const contactLinks = [
	{
		id: 1,
		name: "email me",
		url: "mailto:stankevichuuladimiru@gmail.com?subject=Fast%20message%20from%20my%20CV.",
	},
	{
		id: 2,
		name: "linkedin",
		url: "https://www.linkedin.com/in/uladzimir-stankevich/",
	},
	{
		id: 3,
		name: "GitHab",
		url: "https://github.com/RimidalU",
	},
];

export const metadata = {
	title: "Uladzimir Stankevich - Portfolio. | Contacts",
};

export default function Contacts() {
	return (
		<section className="flex flex-col flex-1 gap-5 h-full">
			<h1 className="title-text">From here you can contact me.</h1>
			<section className="flex gap-10 text-justify h-full">
				<article className="flex-1 flex flex-col gap-14 justify-center title-text">
					{contactLinks.map((link) => {
						return (
							<Link key={link.id} href={link.url} target="blank" className="capitalize text-center">
								{link.name}
							</Link>
						);
					})}
				</article>
				<article className="flex-1 flex flex-col gap-5 justify-evenly">
					<ContactForm />
					<div className="w-full h-32 relative">
						<Image
							src="/stamp.png"
							alt="Santa's postal stamp"
							className="dark:invert object-contain animate-translateY"
							fill={true}
						/>
					</div>
				</article>
			</section>
		</section>
	);
}
