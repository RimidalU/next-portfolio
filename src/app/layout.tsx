import { Inter } from "next/font/google";

import { ThemeProvider } from "@/context/ThemeContext";
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
		<ThemeProvider>
			<body
				className={`${inter.className} container bg-neutral-950 text-neutral-300  dark:bg-neutral-300 dark:text-neutral-900 duration-1000`}
			>
				<Header />
				<main className="no-scrollbar">{children}</main>
				<Footer />
			</body>
		</ThemeProvider>
	);
}
