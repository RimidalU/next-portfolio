"use client";

export const handleClick = () => {
	console.log("LogOut");
};

export function Button({ text }: { text: string }) {
	return <button onClick={() => handleClick()}>{text}</button>;
}
