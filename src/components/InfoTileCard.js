import React, { useState } from "react";
import "../App.css";

export default function InfoTileCard({ icon: Icon, title, children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`info-card ${expanded ? "expanded" : ""}`} onClick={() => setExpanded(!expanded)}>
      <div className="info-card-header">
        <div className="info-icon">
          <Icon size={32} />
        </div>
        <h3 className="info-title">{title}</h3>
      </div>
      {expanded && <div className="info-body">{children}</div>}
    </div>
  );
}
