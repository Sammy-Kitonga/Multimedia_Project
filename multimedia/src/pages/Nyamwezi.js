import React from "react";
import MorphingCard from "../components/MorphingCard";
import "../App.css";

export default function Nyamwezi() {
  return (
    <section className="section fade-in tribe-nyamwezi">
      <h2>Nyamwezi Tribe (Tanzania)</h2>

      <MorphingCard icon="🍲" title="Traditional Foods">
        <ul>
          <li><strong>Ugali:</strong> Stiff maize porridge served with stewed meats and vegetables such as pumpkin leaves or okra.</li>
          <li><strong>Traditional Beer:</strong> Brewed from fermented millet, corn, or sorghum; used in ceremonies and communal gatherings.</li>
        </ul>
      </MorphingCard>

      <MorphingCard icon="💰" title="Economic Practices">
        <ul>
          <li><strong>Ivory trade and elephant hunting:</strong> The Nyamwezi hunted elephants with sacred guilds and traded tusks regionally for goods.</li>
          <li><strong>Farming and long-distance trade:</strong> The Nyamwezi were caravan porters and middlemen in the 19th-century East African trade networks.</li>
        </ul>
      </MorphingCard>

      <MorphingCard icon="🎶" title="Music & Dance">
        <p><strong>Hiari ya Moyo ("Desire of the Heart"):</strong> A cultural troupe founded in 1953 in Tabora that showcases Nyamwezi heritage through vibrant group dance, rhythm, and traditional attire.</p>
        <div className="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/5_C-RW4IqrA"
            title="Nyamwezi Dance"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </MorphingCard>

      <MorphingCard icon="👗" title="Traditional Attire">
        <ul>
          <li><strong>Women:</strong> Historically wore bark cloth; modern khangas/vitenge with proverbs.</li>
          <li><strong>Men:</strong> Traditional kanzu robes, caps (kofia), cloaks; elaborate tribal hairstyles noted by early anthropologists.</li>
        </ul>
      </MorphingCard>

      <MorphingCard icon="🙏" title="Beliefs">
        <p><strong>Likube (God):</strong> Ancestor worship and rainmaking rituals led by diviners.</p>
      </MorphingCard>
    </section>
  );
}