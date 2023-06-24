import Image from "next/image";
import Link from "next/link";

import { projects } from "./projects";
import { ProjectCard } from "@/components/projectCard/ProjectCard";

export default function Category({ params }: any) {
	return (
		<section className="flex flex-col flex-1 gap-5 px-3 items-center">
			<h2 className="title-text">{params.category}</h2>
			<ul className="w-full h-42 overflow-y-scroll no-scrollbar">
				{projects.map((project) => {
					return <ProjectCard data={project} key={project.id} />;
				})}
			</ul>
		</section>
	);
}
