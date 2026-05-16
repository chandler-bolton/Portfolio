import Link from "next/link";
import React from "react";

// Local import for styling
import "../styles/main.css";

export default function Home() {
	return ( 
		<main className="main">

			{/* ───── Hero Section ───── */}
			<section className="hero">
				<h1>
					Cloud & Integrations Engineer
				</h1>

				<div className="divider"></div>

				<div className="textContainer">
					<p>
						I'm a Cloud & Integrations Engineer with a passion for building scalable and efficient solutions. 
						<br/><br/>
						I design and build backend systems focused on API integrations, cloud infrastructure, and enterprise data synchronization. I also design and build frontend modules for data visualization and user interaction.
						<br/>
						My work centers on solving real-world problems involving distributed systems, data consistency, and cross-platform orchestration.
					</p>
				</div>

				<div className="textContainer buffer">
					<p>
						<strong>Technical Skills:</strong> Node.js • Python •AWS • RESTful APIs • GraphQL •Data Pipelines • Databases • System Architecture • DevOps
					</p>
				</div>
			</section>

			{/* ───── Featured Projects ─────  */}
			<section className="buffer">

				<h2>
					Featured Projects
				</h2>

				<div className="featuredProjects">
					<Link href="/projects/loan-integration" className="projectCard">
						<h3>Credit Systems Integration Platform</h3>
						<p>
							Unified Credit App Center, CreditSmarts, and Megasys into a
							centralized HubSpot reporting architecture.
						</p>
					</Link>

					<Link href="/projects/webex-integration" className="projectCard">
						<h3>Webex Events ↔ HubSpot</h3>
						<p>
								Multi-system synchronization platform with AWS-based pipelines,
              					reconciliation logic, and centralized CRM reporting.
						</p>
					</Link>
				</div>
			</section>

			{/* ───── About / Summary Section ───── */}
			<section className="buffer">
				<h2>
					What I Work On 
				</h2>

				<p className="textContainer">
					I specialize in building and maintaining systems that connect
					multiple platforms together. This includes handling API
					inconsistencies, designing resilient synchronization pipelines,
					managing data integrity, and ensuring systems remain reliable under
					real-world constraints like rate limits, incomplete documentation,
					and evolving schemas.
					<br></br>
					I have extensive experience with backend development, particularly in building API integrations and data pipelines. I enjoy working on complex problems that require designing solutions to handle data synchronization, error handling, and performance optimization across distributed systems.
					<br/><br/>
					I also have extensive experience with frontend development, particularly in building user interfaces for data visualization and interaction. I enjoy creating intuitive dashboards and tools that help users make sense of complex data and workflows.
					<br/><br/>
					My work is focused on solving real-world problems in enterprise environments, where systems need to be robust, scalable, and maintainable. I thrive on the challenge of designing solutions that can handle the complexities of distributed systems and data synchronization.
				</p>
			</section>

			{/* ───── Footer Section ───── */}
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
	)
}