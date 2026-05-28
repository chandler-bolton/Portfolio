"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { projects } from "@/content/projects";
import type { ProjectCaseStudy } from "@/content/projects/netsuite-ui-cards";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/main.css";

const ALL_TAGS = "all";

function renderProjectCard(project: ProjectCaseStudy) {
  return (
    <Link
      key={project.slug}
      href={`/projects/${project.slug}`}
      className="projectListingCard"
    >
      <h2>{project.title}</h2>

      <div className="divider thin"></div>

      <p>{project.subtitle}</p>

      <div className="buffer"></div>

      <div>{project.techStack.join(" • ")}</div>

      {/* ───── Tags ───── */}
      <div className="tagParent">
        {project.tags.map((tag) => (
          <span key={tag} id={`tag-${tag}`} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string>(ALL_TAGS);

  const tagOptions = useMemo(() => {
    const unique = new Set<string>();
    for (const project of projects) {
      for (const tag of project.tags) unique.add(tag);
    }
    return Array.from(unique).sort((a, b) => a.localeCompare(b));
  }, []);

  const { matching, others } = useMemo(() => {
    if (selectedTag === ALL_TAGS) {
      return { matching: projects, others: [] as ProjectCaseStudy[] };
    }
    const matching: ProjectCaseStudy[] = [];
    const others: ProjectCaseStudy[] = [];
    for (const project of projects) {
      if (project.tags.includes(selectedTag)) matching.push(project);
      else others.push(project);
    }
    return { matching, others };
  }, [selectedTag]);

  const showOthersDivider = selectedTag !== ALL_TAGS && matching.length > 0 && others.length > 0;

  return (
	// ───── Listing Page ─────
    <main className="projects-page">
		<Header />
		<div className="main">

			<div className="buffer"></div>

			<h1>Projects</h1>

			<div className="divider flushedTop"></div>

			{/* ───── Sorting Options ───── */}
			<div className="projectSortControls">
				<label htmlFor="tag-sort" className="projectSortLabel">
					Sort by tag:
				</label>
				<select
					id="tag-sort"
					className="projectSortSelect"
					value={selectedTag}
					onChange={(event) => setSelectedTag(event.target.value)}
				>
					<option value={ALL_TAGS}>All</option>
					{tagOptions.map((tag) => (
						<option key={tag} value={tag}>
							{tag}
						</option>
					))}
				</select>
			</div>

			{/* ───── Cards ─────  */}
			<div className="projectGrid equalize textContainer">
				{matching.map((project) => renderProjectCard(project))}

				{showOthersDivider && (
					<div className="otherProjectsSection">
						<div className="divider"></div>
						<h3 className="otherProjectsHeading">More Projects</h3>
						<p className="otherProjectsSubtitle">Beyond the <em>{selectedTag}</em> tag</p>
					</div>
				)}

				{others.map((project) => renderProjectCard(project))}
			</div>

			<div className="buffer"></div>

	  	</div>

		{/* ───── Footer Section ───── */}
		<Footer />
    </main>
  );
}
