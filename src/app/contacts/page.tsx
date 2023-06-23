import { ContactForm } from "@/components/contactForm/ContactForm";
import Image from "next/image";
import Link from "next/link";

export default function Contacts() {
	return (
		<section className="flex flex-col flex-1 gap-5 h-full">
			<h1 className="text-3xl bold capitalize">Contact Page</h1>
			<section className="flex gap-10 text-justify h-full">
				<article className="flex-1 flex flex-col gap-5 justify-center">
					<h2 className="text-3xl bold capitalize">Contact Links</h2>
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
