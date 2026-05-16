"use client";

import { projects } from "@/content/projects";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import "@/styles/main.css";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
	<header className="header">
		{/* ───── Header Section ───── */}
		<nav>
			<div className="navGrid">
				<div className="navGirdItemLeft">
					{!isHome && (
						<div className="textContainer leftAlign">
						<div className="homeLink flushedTop">
							<Link href="/">← Home</Link>
						</div>
						</div>
					)}
				</div>
					
				<div className="navGirdItemMiddle">
					<ul className="textContainer naviItems">
					<li>
						<a href="/" target="_blank" rel="noopener noreferrer">
							Home
						</a>
					</li>
					<li>
						<a href="/projects" target="_blank" rel="noopener noreferrer">
							Projects
						</a>
					</li>
					<li>
						<a href="/" target="_blank" rel="noopener noreferrer">
							Contact
						</a>
					</li>
				</ul>
				</div>
				
				<div className="navGirdItemRight"></div>
			</div>
		</nav>
	</header>
  )
}