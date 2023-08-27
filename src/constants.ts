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

export type TContactsLink = {
    id: number;
    name: string;
    url: string;
}

export const METADATA = {
	CONTACTS: {
		title: "Uladzimir Stankevich - Portfolio. | Contacts",
	},
};
