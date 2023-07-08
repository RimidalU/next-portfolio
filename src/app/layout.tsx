import { Inter } from "next/font/google";

import { AuthProvider } from "@/components/authProvider/AuthProvider";
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
			<AuthProvider>
				<body
					className={`${inter.className} 
					container bg-neutral-300 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-300 duration-1000`}
				>
					<Header />
					<main className="no-scrollbar">{children}</main>
					<Footer />
				</body>
			</AuthProvider>
		</ThemeProvider>
	);
}
