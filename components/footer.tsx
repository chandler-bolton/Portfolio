import { projects } from "@/content/projects";
import Link from "next/link";
import React from "react";
import "@/styles/main.css";

export default function Footer() {
  return (
	<footer className="buffer footer">
	{/* ───── Footer Section ───── */}
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
	</footer>
  )
}
