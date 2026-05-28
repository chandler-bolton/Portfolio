import { projects } from "@/content/projects";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import "@/styles/main.css";

import Footer from "@/components/footer";
import Header from "@/components/header";

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
	  <Header />

      <div className="main">

        <section className="textContainer projectHeader">
          <h1>{project.title}</h1>
          <p className=""><i>{project.subtitle}</i></p>

          <div className="tagParent">
            {project.tags.map((tag, i) => (
              <span key={i} id={`tag-${tag}`} className="tag">{tag}</span>
            ))}
          </div>

          </section>

          <div className="divider"></div>

        {/* ───── Overview Section ─────  */}
          <section className="textContainer buffer overview">
            <h2>Overview</h2>
            <p className="textContainer leftAlign">{project.summary}</p>
          </section>


        {/* ───── Overview Image Section ─────  */}
        {project.overviewImage && project.overviewImage.length > 0 && (
          <div className="overviewImageContainer">
            <section className="textContainer buffer overviewImage">
              <Image src={project.overviewImage[0].src} alt={`${project.title} Overview`} layout="responsive" width={800} height={400}
              />
            </section>

            {project.overviewImage.length > 1 && (
              <section className="textContainer">
                <p>{project.overviewImage[0].caption}</p>
              </section>
            )}

            <section className="imageOverviewNote textContainer">
              Confidential information redacted and replaced with placeholders
            </section>
          </div>
        )}

        {/* ───── Responsibilities Section ─────  */}
        <div className="divider"></div>
        <section className="textContainer leftAlign">
          <h2>Responsibilities</h2>

          <div className="textContainer leftAlign">
          <ul >
            {project.responsibilities.map((item, i) => (
              <li className="square" key={i}>{item}</li>
            ))}
          </ul>
          </div>
        </section>

        {/* ───── Challenges Section ─────  */}
        <div className="divider"></div>
        <section className="textContainer buffer leftAlign">
          <h2>Challenges</h2>

          {project.challenges.map((group, i) => (
            <div className="textContainer leftAlign" key={i}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item, j) => (
                  <li className="square" key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* ───── Solutions Section ─────  */}
        <div className="divider"></div>
        <section className="textContainer buffer leftAlign">
          <h2>Solutions</h2>

          <div className="textContainer leftAlign">
            <ul>
              {project.solutions.map((s, i) => (
                <li className="square" key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───── Results Section ─────  */}
        <div className="divider"></div>
        <section className="textContainer buffer leftAlign">
          <h2>Results</h2>

          <div className="textContainer leftAlign">
            <ul>
              {project.results.map((r, i) => (
                <li className="square" key={i}>{r}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───── Additional Images Section ─────  */}

        {project.overviewImage.length > 1 && (
          project.overviewImage.slice(1).map((image, i) => (
            <section className="textContainer buffer overviewImage" key={i}>
              <Image src={image.src} alt={`${project.title} Additional Image ${i + 1}`} layout="responsive" width={800} height={400} />
              <div className="buffer flushedTop"/>
              <p>{image.caption}</p>
            </section>
          ))
        )}

        {/* ───── Tech Stack Section ─────  */}
        <div className="divider"></div>
        <section className="textContainer buffer leftAlign">
          <h2>Tech Stack</h2>
          <p className="textContainer leftAlign">{project.techStack.join(" • ")}</p>
        </section>

      </div>

	  <Footer />

    </main>
  );
}