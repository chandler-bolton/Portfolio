"use client";

import { projects } from "@/content/projects";
import { usePathname } from "next/navigation";
import React from "react";
import "@/styles/main.css";
import MobileDrawer from "@/components/mobile-drawer";

const NAV_LINKS = [
	{ href: "/#header", label: "Home" },
	{ href: "/projects", label: "Projects" },
	{ href: "#contact", label: "Contact" },
];

const HOME_JUMP_LINKS = [
	{ href: "/#hero", label: "Intro" },
	{ href: "/#featured-projects", label: "Featured Projects" },
	{ href: "/#skills", label: "Technical Skills" },
	{ href: "/#work", label: "What I Work On" },
	{ href: "/#about", label: "About Me" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const drawerJumpLinks = isHome ? HOME_JUMP_LINKS : [];

  const drawerProjects = projects
	.filter((project) => project.featured)
	.map((project) => ({
		slug: project.slug,
		title: project.title,
		subtitle: project.subtitle,
	}));

  return (
	<>
		<header className="header" id="header">
			{/* ───── Header Section ───── */}
			<nav>
				<div className="navGrid">
					<div className="navGirdItemLeft">

					</div>

					<div className="navGirdItemMiddle">
						<ul className="textContainer naviItems">
						<li>
							<a href="/" target="_self">
								Home
							</a>
						</li>
						<li>
							<a href="/projects" target="_self">
								Projects
							</a>
						</li>
						<li>
							<a href="#contact" target="_self">
								Contact
							</a>
						</li>
					</ul>
					</div>

					<div className="navGirdItemRight"></div>
				</div>
			</nav>
		</header>

		<MobileDrawer
			navLinks={NAV_LINKS}
			jumpLinks={drawerJumpLinks}
			featuredProjects={drawerProjects}
		/>
	</>
  )
}