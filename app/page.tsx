import Link from "next/link";
import React from "react";
import "@/styles/main.css";

import { projects } from "@/content/projects";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MobileDrawer from "@/components/mobile-drawer";
import ExpandableText from "@/components/expandable-text";
import Image from "next/image";

export default function Home() {
	const featuredProjects = projects.filter(project => project.featured);

	const drawerNavLinks = [
		{ href: "/", label: "Home" },
		{ href: "/projects", label: "Projects" },
		{ href: "#contact", label: "Contact" },
	];

	const drawerJumpLinks = [
		{ href: "#hero", label: "Intro" },
		{ href: "#featured-projects", label: "Featured Projects" },
		{ href: "#skills", label: "Technical Skills" },
		{ href: "#work", label: "What I Work On" },
		{ href: "#about", label: "About Me" },
	];

	const drawerProjects = featuredProjects.map(project => ({
		slug: project.slug,
		title: project.title,
		subtitle: project.subtitle,
	}));

	return (
		<main>
			<Header />

			<MobileDrawer
				navLinks={drawerNavLinks}
				jumpLinks={drawerJumpLinks}
				featuredProjects={drawerProjects}
			/>

			<div className="main">

				<div className="buffer"></div>

				<h1 className="buffer textContainer">Portfolio ─ Chandler Bolton</h1>

				{/* ───── Hero Section ───── */}
				<section id="hero" className="hero buffer">

						<div className="hero-left">
							<Image src="/images/profile-pic.jpg" alt="Profile Picture" width={300} height={300} className="profilePic" loading="eager"/>
							<h2>
								Chandler Bolton
							</h2>

							<h3>
								Cloud & Integrations Engineer
							</h3>
						</div>

						<div className="hero-right">

							<div className="textContainer rightAlign">
								<ExpandableText lines={3} className="heroIntro">
									<p className="buffer">
										I'm a Cloud & Integrations Engineer with a passion for building scalable and efficient solutions.
									</p>

									<p className="buffer flushedTop">
										I design and build backend systems focused on API integrations, cloud infrastructure, and enterprise data synchronization. I also design and build frontend modules for data visualization and user interaction.
									</p>

									<p className="buffer flushedTop">
										My work centers on solving real-world problems involving distributed systems, data consistency, and cross-platform orchestration.
									</p>
								</ExpandableText>
							</div>

					</div>

				</section>

				<div className="divider"></div>

					{/* ───── Featured Projects ─────  */}
					<section id="featured-projects" className="textContainer buffer featuredProjectsSection">

						<h2 className="buffer flushedTop">
							Featured Projects
						</h2>

						<div className="featuredProjects">
							{featuredProjects.map((project) => (
								<Link key={project.slug} href={`/projects/${project.slug}`} className="projectCard">
									<h3>{project.title}</h3>
									<p>{project.subtitle}</p>
								</Link>
							))}
						</div>
					</section>

					{/* ───── View All Projects ───── */}
					<section className="textContainer viewAllProjects">
						<Link href="/projects" className="">
							View All Projects →
						</Link>
					</section>

					<div className="divider mobileHidden"></div>

					{/* ───── Skills Section ───── */}
					<div id="skills" className="textContainer">
						<h2>
							Technical Skills
						</h2>

						<div className="divider thin"></div>

						<div className="skillsContainer parent">
							<ul className="skillsList">
								<li className="square">Frontend & Backend Development</li>
								<li className="square">AWS & Cloud Infrastructure</li>
								<li className="square">API Integrations & Synchronization Systems</li>
								<li className="square">REST & GraphQL Architectures</li>
								<li className="square">Distributed Data Pipelines</li>
							</ul>
							<ul className="skillsList">
								<li className="square">Database & Data Integrity Systems</li>
								<li className="square">System Architecture & Platform Design</li>
								<li className="square">DevOps, Monitoring & Operational Tooling</li>
								<li className="square">Technical Documentation & Client Communication</li>
								<li className="square">Python | JavaScript | TypeScript | React | Node.js</li>
							</ul>

						</div>

					</div>

				<div className="divider"></div>


				{/* ───── About / Summary Section ───── */}
				<section id="work" className="textContainer">
					<h2>
						What I Work On
					</h2>

					<ExpandableText lines={4}>
						<p className="aboutSummary buffer flushedTop">
							I specialize in <i><u>building and maintaining systems that connect
							multiple platforms together</u></i>. This includes handling API
							inconsistencies, designing resilient synchronization pipelines,
							managing data integrity, and ensuring systems remain reliable under
							real-world constraints like rate limits, incomplete documentation,
							and evolving schemas.
							<br/><br/>
							I have <i><u>extensive experience with backend development</u></i>, particularly in building API integrations and data pipelines. I enjoy working on complex problems that require designing solutions to handle data synchronization, error handling, and performance optimization across distributed systems.
							<br/><br/>
							I also have <i><u>extensive experience with frontend development</u></i>, particularly in building user interfaces for data visualization and interaction. I enjoy creating intuitive dashboards and tools that help users make sense of complex data and workflows.
							<br/><br/>
							My work is focused on solving real-world problems in enterprise environments, where systems need to be robust, scalable, and maintainable. I thrive on the challenge of designing solutions that can handle the complexities of distributed systems and data synchronization.
						</p>
					</ExpandableText>

					<div className="divider thin"></div>

					<h2 id="about">About Me</h2>
					<ExpandableText lines={3}>
						<p className="aboutSummary buffer flushedTop">
							I'm a software engineer with a passion for building scalable and efficient solutions. I have experience in both frontend and backend development, with a focus on API integrations, cloud infrastructure, and enterprise data synchronization. I enjoy solving complex problems and designing systems that can handle real-world constraints.
							<br/><br/>
							In my free time, I enjoy exploring new technologies, contributing to open source projects, and learning about the latest trends in software development. I'm always looking for opportunities to grow and take on new challenges in the tech industry. But above all else, I love spending time with my family.
						</p>
					</ExpandableText>

				</section>




			</div>

			{/* ───── Footer Section ───── */}
			<Footer />
		</main>
	)
}
