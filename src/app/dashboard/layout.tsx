export const metadata = {
	title: "Uladzimir Stankevich - Portfolio. | Dashboard",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<h1>Dashboard Layout</h1>
			{children}
		</div>
	);
}
