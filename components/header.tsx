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
						<a href="/">
							Home
						</a>
					</li>
					<li>
						<a href="/projects">
							Projects
						</a>
					</li>
					<li>
						<a href="/">
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