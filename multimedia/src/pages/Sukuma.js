import React from "react";
import MorphingCard from "../components/MorphingCard";
import "../App.css";

export default function Sukuma() {
  return (
    <section className="section fade-in tribe-sukuma">
      <h2>Sukuma Tribe (Tanzania)</h2>

      <MorphingCard icon="🍛" title="Traditional Foods">
        <ul>
          <li><strong>Sukuma Wiki:</strong> Greens with onions and spices, served with ugali.</li>
          <li><strong>Staples:</strong> Millet, cassava, sorghum, rice, sweet potatoes, peanuts.</li>
          <li><strong>Livestock:</strong> Meat and dairy from cattle, goats, poultry.</li>
        </ul>
        <div className="image-container">
          <img
            src="/assets/images/Sukuma_food.png"
            alt="Sukuma traditional food"
            className="styled-image"
          />
          <p className="image-caption">A traditional Sukuma meal featuring ugali and greens.</p>
        </div>
      </MorphingCard>

      <MorphingCard icon="🎶" title="Music & Dance">
        <p>Bugobogobo, Bukomyalume, and snake dances are vibrant cultural expressions featuring masks, drums, and competition.</p>
        <div className="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/n77YS8AnGtY?si=jowxCvaocw8KkzmM"
            title="Sukuma Dance Festival"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <div className="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/jhoztTq-EMY?si=sgnkLzX1gEj14LP2"
            title="Sukuma Snake Ceremony"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        
      </MorphingCard>

      <MorphingCard icon="💼" title="Economic Practices">
        <ul>
          <li>Agriculture: Sorghum, cotton, maize, tobacco, millet.</li>
          <li>Cattle herding; fishing near Lake Victoria.</li>
          <li>Crafts: Pottery, weaving, ironwork, drum-making.</li>
        </ul>
        
      </MorphingCard>

      <MorphingCard icon="🧥" title="Traditional Attire">
        <ul>
          <li><strong>Women:</strong> Kangas, beads, body paint during ceremonies.</li>
          <li><strong>Men:</strong> Shukas and kanzus; beadwork and animal skins for status.</li>
        </ul>
        <div className="image-container">
          <img
            src="/assets/images/Sukuma_women.png"
            alt="Sukuma traditional attire"
            className="styled-image"
          />
          <p className="image-caption">Sukuma women attire.</p>
        </div>
        <div className="image-container">
          <img
            src="/assets/images/sukuma_men.png"
            alt="Sukuma traditional attire"
            className="styled-image"
          />
          <p className="image-caption">Sukuma men attire.</p>
        </div>
      </MorphingCard>

      <MorphingCard icon="🕊️" title="Beliefs & Spirituality">
        <p>Shrines built near sacred trees or rocks. Ritual leaders include diviners and herbalists for healing, agricultural blessings, and protection.</p>
      </MorphingCard>
    </section>
  );
}