import { projects } from "../../projects";
import Link from "next/link";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div>
        Project not found. <Link href="/projects">Go back to projects</Link>
      </div>
    );
  }

  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <h1>{project.title}</h1>
      <p>{project.subtitle}</p>

      <section>
        <h2>Overview</h2>
        <p>{project.summary}</p>
      </section>

      <section>
        <h2>Responsibilities</h2>
        <ul>
          {project.responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Challenges</h2>
        {project.challenges.map((group, i) => (
          <div key={i}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>Solutions</h2>
        <ul>
          {project.solutions.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Results</h2>
        <ul>
          {project.results.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Tech Stack</h2>
        <p>{project.techStack.join(" • ")}</p>
      </section>
    </main>
  );
}