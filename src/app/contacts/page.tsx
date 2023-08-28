import Link from "next/link";

import { ContactForm } from "@/components/contactForm/ContactForm";

import { CONTACT_LINKS, METADATA, TContactsLink } from "@/constants";

export const metadata = {title: METADATA.CONTACTS};

export default function ContactsPage() {
	return (
		<ContactsPageLayout
			contactForm={<ContactForm />}
			links={CONTACT_LINKS.map((link) => {
				return <ContactLink key={link.id} link={link} />;
			})}
		/>
	);
}

function ContactsPageLayout({
	links,
	contactForm,
}: {
	links: JSX.Element[];
	contactForm: JSX.Element;
}) {
	return (
		<section className="flex flex-col flex-1 gap-5 h-full">
			<h1 className="title-text">From here you can contact me.</h1>
			<section className="flex gap-10 text-justify h-full">
				<article className="flex-1 flex flex-col gap-14 justify-center title-text">{links}</article>
				<article className="flex-1 flex flex-col gap-5 justify-evenly">{contactForm}</article>
			</section>
		</section>
	);
}

function ContactLink({ link }: { link: TContactsLink }) {
	return (
		<Link href={link.url} target="blank" className="capitalize text-center">
			{link.name}
		</Link>
	);
}
