import { Header } from "@/components/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer/Footer";

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
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
