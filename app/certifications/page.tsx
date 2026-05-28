import Link from "next/link";
import React from "react";
import "@/styles/main.css";

import { projects } from "@/content/projects";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ExpandableText from "@/components/expandable-text";
import Image from "next/image";

const CERTIFICATIONS = [
	{ title: "Getting Started With Go", issuer: "University of California", featured: false, skills: ["Go (Programming Language)", "Programming Fundamentals"] },
	{ title: "Functions, Methods, and Interfaces in Go", issuer: "University of California", featured: false, skills: ["Go (Programming Language)", "UI", "Interfaces", "Operations"] },
	{ title: "Concurrency in Go", issuer: "University of California",   featured: false, skills: ["Go (Programming Language)", "Concurrency", "Parallelism", "Multithreading", "System Architecture"] },
	{ title: "Programming with Google Go (Specialization)", issuer: "University of California", featured: false, skills: ["Go (Programming Language)", "Software Development", "Algorithms", "Concurrency", "Parallelism", "Multithreading"] },
	{ title: "Python Data Structures", issuer: "University of Michigan", featured: true, skills: ["Python", "System Design", "System Architecture", "Multithreading", "Concurrency"] },
	{ title: "Using Python to Access Web Data", issuer: "University of Michigan", featured: false, skills: ["Python", "Datastructures", "Automation", "API", "Web Scraping"] },
	{ title: "Using Databases with Python", issuer: "University of Michigan", featured: false, skills: ["Python", "Databases", "SQL", "Automation", "API"] },
	{ title: "Capstone: Retrieving, Processing, and Visualizing Data with Python", issuer: "University of Michigan", featured: false, skills: ["Python", "Data Analysis", "Data Visualization", "SQL", "Automation"] },
	{ title: "Python for Everybody", issuer: "University of Michigan", featured: true, skills: ["Python", "Programming Fundamentals", "Data Structures", "Web Scraping"] }, 
	{ title: "NVDA Certified Expert", issuer: "NV Access", featured: false, skills: ["NVDA Screen Reader", "Assistive Technology", "Accessibility"] }, 
	{ title: "Software Development Processes and Methodologies", issuer: "University of Minnesota", featured: true, skills: ["Software Development Life Cycle", "Agile Methodologies", "Waterfall Model", "DevOps Practices"] },
	{ title: "Agile Software Development", issuer: "University of Minnesota", featured: true, skills: ["Agile Methodologies", "Scrum", "Kanban"] },
	{ title: "Lean Software Development", issuer: "University of Minnesota", featured: false, skills: ["Lean Principles", "Continuous Improvement", "Value Stream Mapping"] },
	{ title: "Growth-Driven Design", issuer: "HubSpot", featured: false, skills: ["Growth-Driven Design", "Inbound Marketing", "Conversion Optimization"] },
	{ title: "Salesforce Integration", issuer: "HubSpot", featured: false, skills: ["Salesforce", "CRM Integration", "API Management"] },
	{ title: "Data Integrations", issuer: "HubSpot", featured: true, skills: ["Data Integration", "ETL Processes", "API Development"] },
	{ title: "CMS for Developers", issuer: "HubSpot", featured: true, skills: ["CMS Development", "Web Development", "Content Management"] },
	{ title: "HubSpot Architecture: Data Models and APIs", issuer: "HubSpot", featured: true, skills: ["Data Modeling", "API Design", "System Architecture"] },
];

export default function Home() {
	const featuredProjects = projects.filter(project => project.featured);

	return (
		<main>
			<Header />

			<div className="main">

				<div className="buffer"></div>

				<h1 className="buffer textContainer">Certifications</h1>

				<div className="divider"></div>

					{/* ───── Featured Certifications ─────  */}
					<section id="featured-certifications" className="textContainer buffer featuredCertificationsSection">

						<h2 className="buffer flushedTop">
							Featured
						</h2>

							<ExpandableText lines={20}>
						<div className="featuredCertifications">
							{(() => {
								const featuredCerts = CERTIFICATIONS.filter(cert => cert.featured);
								return featuredCerts.map((cert, i) => {
									const isOrphanLast = i === featuredCerts.length - 1 && featuredCerts.length % 2 === 1;
									return (
										<div key={cert.title} id={`cert-${i}`} className={`certificationCard${isOrphanLast ? ' last' : ''}`}>
											<h3>{cert.title}</h3>
											<div className="divider thin"></div>
											<p className="issuer">{cert.issuer}</p>
											<div className="smallBuffer"></div>

											<div className="skills">
												{cert.skills.join(' • ')}
											</div>
										</div>
									);
								});
							})()}
						</div>
							</ExpandableText>
					</section>

					<div className="divider"></div>

					{/* ───── All Certifications ───── */}
					<section className="textContainer viewAllCertifications">

						<h2>All Certifications</h2>
						
						<div className="divider thin"></div>

						<div className="allCertifications">
							<ExpandableText lines={10}>
								<ul className="certificationList">
									{CERTIFICATIONS.map((cert, i) => (
										<li key={cert.title} id={`cert-${i}`} className="certificationListItem">
											<p><b>{cert.title}</b></p>
											<div className="divider thin"></div>

											<p className="issuer">By: {cert.issuer}</p>
											<div className="smallBuffer"></div>
											<div className="skills">
												{cert.skills.join(' • ')}
											</div>
										</li>
									))}
								</ul>
							</ExpandableText>
						</div>
					</section>

					<div className="smallBuffer"></div>

			</div>

			{/* ───── Footer Section ───── */}
			<Footer />
		</main>
	)
}
