export const metadata = {
	title: "Uladzimir Stankevich - Portfolio. | My projects",
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {    //add navigation??
	return (
		<div>
			<header>
				<h1 className="title-text">My projects</h1>  
			</header>
			{children}
		</div>
	);
}
