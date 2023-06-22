"use client";

export const handleClick = () => {
	console.log("LogOut");
};

export function Button({
	text,
	type = "button",
}: {
	text: string;
	type: "button" | "submit" | "reset" | undefined;
}) {
	return (
		<button type={type} onClick={() => handleClick()}>
			{text}
		</button>
	);
}
