"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type DrawerLink = { href: string; label: string };

type DrawerProject = { slug: string; title: string; subtitle: string };

export default function MobileDrawer({
  navLinks,
  jumpLinks,
  featuredProjects,
}: {
  navLinks: DrawerLink[];
  jumpLinks: DrawerLink[];
  featuredProjects: DrawerProject[];
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        className="drawerToggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-drawer"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="drawerToggleIcon" aria-hidden="true">
          {open ? "✕" : "☰"}
        </span>
      </button>

      {open && (
        <div
          className="drawerBackdrop"
          onClick={close}
          aria-hidden="true"
        />
      )}

      <aside
        id="mobile-drawer"
        className={`drawer ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        <div className="drawerSection">
          <h3 className="drawerHeading">Navigate</h3>
          <ul className="drawerList">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={close}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {jumpLinks.length > 0 && (
          <div className="drawerSection">
            <h3 className="drawerHeading">Jump to</h3>
            <ul className="drawerList">
              {jumpLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={close}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {featuredProjects.length > 0 && (
          <div className="drawerSection">
            <h3 className="drawerHeading">Featured Projects</h3>
            <ul className="drawerProjectList">
              {featuredProjects.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    onClick={close}
                    className="drawerProjectLink"
                  >
                    <strong>{project.title}</strong>
                    <span>{project.subtitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/projects"
              onClick={close}
              className="drawerAllProjects"
            >
              View All Projects &rarr;
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
