/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			keyframes: {
				translateY: {
					"from": { transform: "translateY(-15px)" },
					"to": { transform: "translateY(0) scale(0.97)" },
				},
			},
			animation: {
				translateY: "translateY 3s ease-in-out infinite alternate",
			},
		},
	},
	plugins: [],
};
