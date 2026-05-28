"use client";

import { projects } from "@/content/projects";
import { usePathname } from "next/navigation";
import React from "react";
import "@/styles/main.css";
import MobileDrawer from "@/components/mobile-drawer";

const NAV_LINKS = [
	{ href: "/#header", label: "Home", headerDisplay: true },
	{ href: "/projects", label: "Projects", headerDisplay: true },
	{ href: "/certifications", label: "Certifications", headerDisplay: true },
	{ href: "#contact", label: "Contact", headerDisplay: true },
];

const HOME_JUMP_LINKS = [
	{ href: "/#hero", label: "Intro" },
	{ href: "/#featured-projects", label: "Featured Projects" },
	{ href: "/#skills", label: "Technical Skills" },
	{ href: "/#work", label: "What I Work On" },
	{ href: "/#about", label: "About Me" },
];

const JUMP_LINKS = [
	{ href: "#header", label: "Back to Top" },
]



export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const drawerJumpLinks = isHome ? [...HOME_JUMP_LINKS, ...JUMP_LINKS] : [...JUMP_LINKS];

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
					<div className="navGirdItemLeft"></div>

					<div className="navGirdItemMiddle">

						<ul className="textContainer naviItems">
						{NAV_LINKS.filter(link => link.headerDisplay).map((link) => (
							<li key={link.href}>
								<a href={link.href} target="_self">
									{link.label}
								</a>
							</li>
						))}
						</ul>
					</div>
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