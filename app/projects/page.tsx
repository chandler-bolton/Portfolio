import Link from "next/link";
import { projects } from "@/content/projects";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/main.css";

export default function ProjectsPage() {
  return (
    <main className="projects-page">
		<Header />
		<div className="main">

			<div className="buffer"></div>

			<h1>Projects</h1>

			<div className="divider flushedTop"></div>


			<div className="projectGrid textContainer">
				{projects.map((project) => (
					<Link
						key={project.slug}
						href={`/projects/${project.slug}`}
						className="projectListingCard"
					>
						<h2>{project.title}</h2>

						<div className="divider thin"></div>

						<p>{project.subtitle}</p>

						<div>
						{project.techStack.join(" • ")}
						</div>
					</Link>
				))}
			</div>

			<div className="buffer"></div>

	  	</div>

		{/* ───── Footer Section ───── */}
		<Footer />
    </main>
  );
}