import React, { useState } from "react";
import "../App.css";

export default function MorphingCard({ icon, title, children }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div className={`morph-card ${expanded ? "expanded" : ""}`} onClick={toggleExpand}>
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>

      {expanded && <div className="card-body">{children}</div>}
    </div>
  );
}
