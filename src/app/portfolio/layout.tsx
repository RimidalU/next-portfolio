export const metadata = {
	title: "Uladzimir Stankevich - Portfolio. | My projects",
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {	//add navigation??
	return (
		<>
			<header className="">
				<h1 className="title-text">My projects</h1>
			</header>
			{children}
		</>
	);
}
