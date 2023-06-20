import { Inter } from "next/font/google";

import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Uladzimir Stankevich - Portfolio",
	description: "Uladzimir Stankevich - Portfolio Website.",
	icons: {
		icon: "/icon.png",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} container`}>
				<Header />
				<main className="max-">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
