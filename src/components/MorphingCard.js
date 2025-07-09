import React, { useState } from "react";
import "../App.css";

export default function MorphingCard({ icon, title, children, backgroundImage }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  const cardStyle = backgroundImage && !expanded ? {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white'
  } : {};

  return (
    <div 
      className={`morph-card ${expanded ? "expanded" : ""}`} 
      onClick={toggleExpand}
      style={cardStyle}
    >
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>

      {expanded && <div className="card-body">{children}</div>}
    </div>
  );
}
