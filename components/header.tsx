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
  )
}