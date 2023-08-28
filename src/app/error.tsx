"use client";

export default function Error({ error }: { error: Error }) {
	return (
		<section className="flex items-center justify-center min-h-full">
			<h1 className="title-text text-orange-700">Error {error.message}</h1>
		</section>
	);
}
