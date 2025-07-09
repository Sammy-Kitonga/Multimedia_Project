import React from "react";
import MorphingCard from "../components/MorphingCard";

export default function Banyakole() {
  return (
    <section className="section fade-in tribe-banyakole">
      <h2>Banyakole Tribe (Uganda)</h2>

      <MorphingCard icon="📜" title="Key Cultural Practices">
        <ul>
          <li><strong>Rites of Passage:</strong> Boys were initiated via cattle duties.</li>
          <li><strong>Marriage:</strong> Dowry paid in cattle, sacred milk pots (ebyanzi).</li>
        </ul>
      </MorphingCard>

      <MorphingCard icon="👗" title="Traditional Attire">
        <ul>
          <li>Men: Skin wraps → bark cloth.</li>
          <li>Women: Mushanana with beads.</li>
        </ul>
      </MorphingCard>

      <MorphingCard icon="🍲" title="Traditional Foods">
        <ul>
          <li>Millet bread (karo), milk, eshabwe, matoke.</li>
        </ul>
      </MorphingCard>
    </section>
  );
}
