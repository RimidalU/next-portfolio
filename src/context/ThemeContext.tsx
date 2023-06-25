"use client";

import { createContext, useState } from "react";

type ThemeContext = { mode: string; handleDarkMode: () => void };

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [mode, setMode] = useState("dark");

	const handleDarkMode = (): void => {
		setMode((prev) => (prev === "dark" ? "light" : "dark"));
	};

	return (
		<ThemeContext.Provider value={{ handleDarkMode, mode }}>
			<html lang="en" className={`${mode} mdl-js`}>
				{children}
			</html>
		</ThemeContext.Provider>
	);
};
