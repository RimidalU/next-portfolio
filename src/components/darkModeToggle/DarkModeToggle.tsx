"use client";

import { useState } from "react";

export function DarkModeToggle() {
	const [mode, setMode] = useState("dark");

	const handleDarkMode = () => {
		setMode((prev) => (prev === "dark" ? "light" : "dark"));
	};
	return (
		<div
			className="border-2 border-orange-700 rounded-2xl flex p-1 gap-2 content-center relative cursor-pointer"
			onClick={handleDarkMode}
		>
			<div className="text-sm">🌙</div>
			<div className="text-sm">🔆</div>
			<div
				className="absolute w-5 h-5 rounded-full bg-emerald-800"
				style={mode === "light" ? { left: "2px" } : { right: "2px" }}
			/>
		</div>
	);
}
