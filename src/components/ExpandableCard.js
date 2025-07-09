import React, { useState } from "react";

export default function ExpandableCard({ title, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="expandable-card">
      <div className="card-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h3>{title}</h3>
        <button className="toggle-button">{isExpanded ? "−" : "+"}</button>
      </div>
      {isExpanded && <div className="card-content">{children}</div>}
    </div>
  );
}
