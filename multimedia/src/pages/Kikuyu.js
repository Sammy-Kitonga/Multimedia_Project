import React from "react";
import MorphingCard from "../components/MorphingCard";
import "../App.css";

export default function Kikuyu() {
  return (
    <section className="section fade-in tribe-kikuyu">
      <h2>Kikuyu Tribe (Kenya)</h2>

      <MorphingCard icon="🍲" title="Traditional Foods">
        <ul>
          <li><strong>Githeri:</strong> Maize and beans boiled together.</li>
          <li><strong>Mukimo / Irio:</strong> Mashed potatoes, maize, and pumpkin leaves (Mukimo); Irio omits greens.</li>
          <li><strong>Nyama Choma & Mũtura:</strong> Roasted meats and blood sausage for ceremonies and rituals.</li>
          <li><strong>Ūcūrū & Muratina:</strong> Traditional fermented porridge and alcoholic brew served in gourds.</li>
        </ul>
      </MorphingCard>

      <MorphingCard icon="🎉" title="Marriage & Festivals">
        <p>
          <strong>Nguracio (Marriage):</strong> Involves dowry (Ruracio), planting a branch, shared porridge, and rituals.
        </p>
        <div className="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/kR68DDjrkYc?si=8o9AOkf9m8ubV4TR"
            title="Kikuyu Marriage Ceremony"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </MorphingCard>

      <MorphingCard icon="💼" title="Economic Practices">
        <ul>
          <li>Agriculture: Maize, beans, potatoes, tea, and coffee.</li>
          <li>Livestock for food, leather; tanning as a craft.</li>
          <li>Home brewing for community rituals.</li>
        </ul>
      </MorphingCard>

      <MorphingCard icon="🪘" title="Music & Oral Traditions">
        <p>Drums, flutes, horns guide songs and dances during harvest, weddings, and initiations. Elders pass down wisdom via proverbs and stories.</p>
      </MorphingCard>

      <MorphingCard icon="🧥" title="Traditional Attire">
        <ul>
          <li><strong>Women:</strong> Muthuru (leather skirt), bead necklaces, cowrie shells, and a shawl.</li>
          <li><strong>Men:</strong> Nyambari cloth wraps and animal skin cloaks (status symbol).</li>
        </ul>
      </MorphingCard>

      <MorphingCard icon="🕊️" title="Beliefs & Spirituality">
        <p>Ngai, the creator, is believed to dwell on Mount Kenya. Elders lead prayers and rituals near sacred trees and rivers for rain, fertility, and healing.</p>
      </MorphingCard>
    </section>
  );
}
