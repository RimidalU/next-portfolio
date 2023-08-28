import { ContactForm } from "@/components/contactForm/ContactForm";

import { UiLink } from "@/components/uikit";

import { METADATA } from "@/constants";

export const metadata = { title: METADATA.CONTACTS };

export const CONTACT_LINKS = [
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

export default function ContactsPage() {
	return (
		<ContactsPageLayout
			links={<ContactLinksSet links={CONTACT_LINKS} />}
			contactForm={<ContactForm />}
		/>
	);
}

function ContactsPageLayout({
	links,
	contactForm,
}: {
	links: JSX.Element;
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

function ContactLinksSet({ links }: { links: typeof CONTACT_LINKS }) {
	return links.map((link) => {
		return (
			<UiLink key={link.id} href={link.url} className="capitalize text-center">
				{link.name}
			</UiLink>
		);
	});
}
