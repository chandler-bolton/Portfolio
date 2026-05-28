"use client";

import { ReactNode, useState } from "react";

export default function ExpandableText({
  children,
  lines = 4,
  className = "",
}: {
  children: ReactNode;
  lines?: number;
  className?: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`expandable ${expanded ? "expanded" : "collapsed"} ${className}`.trim()}
      style={{ ["--clamp-lines" as string]: lines }}
    >
      <div className="expandableContent">{children}</div>
      <button
        type="button"
        className="expandableToggle"
        aria-expanded={expanded}
        onClick={() => setExpanded((value) => !value)}
      >
        {expanded ? "Show less" : "Read more"}
      </button>
    </div>
  );
}
