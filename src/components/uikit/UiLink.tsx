import Link from "next/link";
import clsx from "clsx";

export function UiLink({
	href,
	className,
	children,
}: {
	href: string;
	className?: string;
	children: string | JSX.Element;
}) {
	return (
		<Link
			href={href}
			target="blank"
			className={clsx("no-underline text-inherit hover:text-orange-700 transition-colors", className)}
		>
			{children}
		</Link>
	);
}
