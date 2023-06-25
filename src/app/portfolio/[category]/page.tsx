import { notFound } from "next/navigation";

import { ProjectCard } from "@/components/projectCard/ProjectCard";

import { projects } from "./projects";

const getData = (category: "web" | "apps" | "implementations") => {
	return projects[category];
};

export default function Category({ params }: any) {
	const projectsInCategory = getData(params.category);

	if (!projectsInCategory) {
		notFound();
	}
	return (
		<section className="flex flex-col flex-1 gap-5 px-3 items-center">
			<h2 className="title-text">{params.category}</h2>
			<ul className="w-full h-42 overflow-y-scroll no-scrollbar">
				{projectsInCategory.map((project) => {
					return <ProjectCard data={project} key={project.id} />;
				})}
			</ul>
		</section>
	);
}
