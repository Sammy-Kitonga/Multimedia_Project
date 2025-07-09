import React from "react";
import MorphingCard from "../components/MorphingCard";
import "../App.css";

export default function Buganda() {
  return (
    <section className="section fade-in tribe-buganda">
      <h2>Buganda Tribe (Uganda)</h2>

      <div className="morph-cards-container">
      <MorphingCard 
        icon="📜" 
        title="Key Cultural Practices"
        backgroundImage="/assets/images/Buganda_men.png"
      >
        <p>
          <strong>Rites of Passage:</strong> Bark cloth for newborns, circumcision in some clans, ancestral prayers during death.
        </p>
        <p>
          <strong>Clan System:</strong> 52 clans (e.g., Mmamba, Lugave) influence marriage; Kabaka is the head of all clans.
        </p>
        <p>
          <strong>Gender Roles:</strong> Men handle politics and farming; women cultivate crops, cook, and weave mats.
        </p>
        <p>
          <strong>Marriage Customs:</strong> Elaborate ceremonies ("Kwanjula") with dowry of food, goats, and bark cloth.
        </p>
        <p>
          <strong>Festivals:</strong> Kabaka’s birthday, Buganda New Year (Wangaale), planting festivals.
        </p>
      </MorphingCard>

      <MorphingCard 
        icon="👗" 
        title="Traditional Attire"
        backgroundImage="/assets/images/Buganda_women.png"
      >
        <p>
          <strong>Men:</strong> Kanzu (white robe).
        </p>
        <div className="image-container">
          <img
            src="/assets/images/Buganda_men.png"
            alt="Buganda men"
            className="styled-image"
          />
          <p className="image-caption">Buganda men wearing traditional Kanzu robes.</p>
        </div>
        <p>
          <strong>Women:</strong> Gomesi (colorful dress with sash and pointed shoulders).
        </p>
        <div className="image-container">
          <img
            src="/assets/images/Buganda_women.png"
            alt="Buganda women"
            className="styled-image"
          />
          <p className="image-caption">Buganda women dressed in Gomesi attire.</p>
        </div>
        <p>
          <strong>Materials:</strong> Bark cloth, later cotton and silk.
        </p>
        <p>
          <strong>Meaning:</strong> Kanzu symbolizes respect; gomesi colors signify joy, status, or clan identity.
        </p>
      </MorphingCard>

      <MorphingCard 
        icon="🍲" 
        title="Traditional Foods"
        backgroundImage="/assets/images/Matoke.png"
      >
        <p>
          <strong>Staples:</strong> Matoke, groundnut sauce, sweet potatoes, yams.
        </p>
        <div className="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/nchm_zmkL0E"
            title="Traditional Baganda Food"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <p className="video-caption">Traditional Baganda food preparation and culinary practices, featuring signature dishes and cooking methods.</p>
        </div>
        <p>
          <strong>Methods:</strong> Steaming in banana leaves ("Luwombo"), open-fire cooking.
        </p>
        <p>
          <strong>Sharing:</strong> Meals central to ceremonies like Kwanjula and burials.
        </p>
      </MorphingCard>

      <MorphingCard 
        icon="💼" 
        title="Economic Practices"
        backgroundImage="/assets/images/Matoke1.png"
      >
        <p>
          <strong>Farming:</strong> Bananas, coffee, yams.
        </p>
        <p>
          <strong>Industries:</strong> Bark cloth making, basket weaving.
        </p>
        <p>
          <strong>Trade:</strong> Historically traded salt, iron, and cloth.
        </p>
      </MorphingCard>

      <MorphingCard 
        icon="🎶" 
        title="Language, Music & Oral Traditions"
        backgroundImage="/assets/images/Buganda_men.png"
      >
        <p>
          <strong>Language:</strong> Luganda.
        </p>
        <div className="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/jmWJR7g9Tts"
            title="Traditional Baganda Dance"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <p>
          <strong>Music & Dance:</strong> Baakisimba dance, royal drumming.
        </p>
        <p>
          <strong>Instruments:</strong> Drums (ngoma), lyres, rattles.
        </p>
        <p>
          <strong>Storytelling:</strong> Proverbs, folktales, griots, and clan elders.
        </p>
      </MorphingCard>

      <MorphingCard 
        icon="🙏" 
        title="Beliefs & Spirituality"
        backgroundImage="/assets/images/Buganda_women.png"
      >
        <p>
          <strong>Beliefs:</strong> Worship of Katonda (supreme God) and balubaale (spirits).
        </p>
        <p>
          <strong>Sacred Sites:</strong> Naggalabi (coronation hill), forests.
        </p>
        <p>
          <strong>Rituals:</strong> Offerings to spirits, possession ceremonies.
        </p>
      </MorphingCard>

      <MorphingCard 
        icon="🗺️" 
        title="Geographical Location"
        backgroundImage="/assets/images/EastAfrica.png"
      >
        <p>
          <strong>Homeland:</strong> Central Uganda (Buganda Kingdom).
        </p>
        <p>
          <strong>Modern Areas:</strong> Kampala, Mukono, Mpigi, Masaka.
        </p>
        <p>
          <strong>Migration:</strong> Expanded during wars, absorbed smaller clans.
        </p>
      </MorphingCard>

      <MorphingCard 
        icon="📚" 
        title="Modern Influence"
        backgroundImage="/assets/images/Buganda_men.png"
      >
        <p>
          <strong>Colonization:</strong> Cooperation with British (1900 Agreement); Kabaka retained symbolic power.
        </p>
        <p>
          <strong>Religion:</strong> Predominantly Christian, some Muslims.
        </p>
        <p>
          <strong>Preservation:</strong> Clan associations, Buganda parliament (Lukiiko), cultural museums.
        </p>
      </MorphingCard>
      </div>
    </section>
  );
}