import React, { useState } from "react";
import "../App.css";

export default function SectionTabs({ sections }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="section-tabs-wrapper">
      <div className="tabs-scrollbar">
        {sections.map((section, index) => (
          <button
            key={index}
            className={`tab-button ${selected === index ? "active" : ""}`}
            onClick={() => setSelected(index)}
          >
            <section.icon size={22} />
            <span>{section.title}</span>
          </button>
        ))}
      </div>

      <div className="tab-content fade-in">
        {sections[selected].content}
      </div>
    </div>
  );
}
