import { projects } from "..";
import Link from "next/link";
import React from "react";
import "../../../styles/main.css";

type Props = {
  params: {
    slug: string; 
  };
};

export default async function ProjectPage({ params }: Props) {
  
  const { slug } = await params;
  
  const project = projects.find(
    (p) => p.slug === slug
  );


  if (!project) {
    return (
      <div>
        Project not found. <Link href="../">Go back to projects</Link>
      </div>
    );
  }

  return (
    <main>

      <div className="main">

        <div className="textContainer leftAlign ">
          <div className="homeLink flushedTop">
            <Link href="../">← Back to Projects</Link>
          </div>
        </div>

        <section className="textContainer leftAlign">
          <h1>{project.title}</h1>
          <p className=""><i>{project.subtitle}</i></p>

          </section>

          <div className="divider"></div>

          <section className="textContainer buffer leftAlign">
            <h2>Overview</h2>
            <p>{project.summary}</p>
          </section>
        

        <section className="textContainer leftAlign">
          <h2>Responsibilities</h2>
          <ul>
            {project.responsibilities.map((item, i) => (
              <li className="square" key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="textContainer buffer leftAlign">
          <h2>Challenges</h2>
          {project.challenges.map((group, i) => (
            <div key={i}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item, j) => (
                  <li className="square" key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="textContainer buffer leftAlign">
          <h2>Solutions</h2>
          <ul>
            {project.solutions.map((s, i) => (
              <li className="square" key={i}>{s}</li>
            ))}
          </ul>
        </section>

        <section className="textContainer buffer leftAlign">
          <h2>Results</h2>
          <ul>
            {project.results.map((r, i) => (
              <li className="square" key={i}>{r}</li>
            ))}
          </ul>
        </section>

        <section className="textContainer buffer leftAlign">
          <h2>Tech Stack</h2>
          <p>{project.techStack.join(" • ")}</p>
        </section>

        <div className="homeLink buffer textContainer">
          <Link href="../">← Back to Projects</Link>
        </div>

      </div>

			<section className="buffer footer">
				<h2>
					Links
				</h2>

				<ul className="textContainer">
					<li>
						<a href="https://www.linkedin.com/in/chandler-bolton" target="_blank" rel="noopener noreferrer">
							LinkedIn
						</a>
					</li>
					<li>
						<a href="https://github.com/chandler-bolton" target="_blank" rel="noopener noreferrer">
							GitHub
						</a>
					</li>
					<li>
						<a href="mailto:software.bolton@gmail.com" target="_blank" rel="noopener noreferrer">
							Email
						</a>
					</li>
				</ul>
			</section>

    </main>
  );
}