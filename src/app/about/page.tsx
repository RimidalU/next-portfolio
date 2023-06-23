import Image from "next/image";
import Link from "next/link";

export default function About() {
	return (
		<section className="flex flex-col flex-1 gap-5">
			<div className="w-full h-64 relative">
				<Image
					src="/etretat3-rem3.jpg"
					alt="My Étretat"
					className="dark:invert object-contain"
					fill={true}
				/>
				<blockquote
					className="absolute bottom-4 left-4 p-2 italic text-lg bg-gradient-to-r from-emerald-800 from-75%"
					cite="@Me)"
				>
					<h1 className="pr-20">
						&quot;If nothing happens, then something needs to be done about it...&quot;
					</h1>
				</blockquote>
			</div>
			<section className="flex gap-10 text-justify">
				<article className="flex-1 flex flex-col gap-5	">
					<h2 className="title-text">who am I?</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum optio error sint cupiditate quos
						quidem, eligendi necessitatibus fuga dolorum vero.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe omnis eligendi culpa quis sunt ex,
						quod veniam dolores error eius accusantium natus harum! Fuga architecto aperiam dolores. Inventore,
						mollitia neque!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam assumenda iste excepturi
						repudiandae quidem, eius tempore vel reprehenderit iure, voluptate nisi ducimus recusandae facere
						quasi architecto, accusamus quibusdam tenetur? Aperiam culpa impedit fugit quaerat ut incidunt amet
						quod ducimus commodi.
					</p>
					<Link href="contacts" className="hover:no-underline mt-3 self-center">
						<button>Contacts</button>
					</Link>
				</article>
				<article className="flex-1 flex flex-col gap-5">
					<h2 className="title-text">what I do?</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reiciendis et iusto adipisci
						voluptate delectus veniam, nesciunt cupiditate earum quam iste facere unde laudantium vel.
					</p>
					<ul className="list-disc list-inside flex flex-col gap-5 list-image-('&#x2714')">
						<li>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, adipisci tempora nisi molestiae
							impedit expedita.
						</li>
						<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, inventore!</li>
						<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
						<li>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum placeat dolore assumenda
							reprehenderit, natus veritatis praesentium, quisquam impedit repellendus incidunt pariatur. Vitae.
						</li>
					</ul>
				</article>
			</section>
		</section>
	);
}
