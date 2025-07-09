import React from "react";
import MorphingCard from "../components/MorphingCard";
import "../App.css";

export default function Kikuyu() {
  return (
    <section className="section fade-in tribe-kikuyu">
      <h2>Kikuyu Tribe (Kenya)</h2>

      <MorphingCard icon="📜" title="Key Cultural Practices">
        <p>
          <strong>Circumcision (Irua):</strong> Marks the transition into adulthood for both genders, accompanied by extensive teachings on societal duties, traditional songs, and ceremonial dances that preserve cultural knowledge.
        </p>
        <p>
          <strong>Clans & Age Sets:</strong> Nine clans trace descent from legendary ancestors Gĩkũyũ and Mũmbi. Age-set groups progress from warriors to elders, managing life-stage responsibilities and community governance.
        </p>
        <p>
          <strong>Gender Roles & Leadership:</strong> Men traditionally handle land management, make decisions in councils, and perform religious sacrifices. Women manage households, agriculture, childrearing, and conduct spiritual fertility rites.
        </p>
        <p>
          <strong>Festivals & Ceremonies:</strong> Wang'ang'a Harvest Festival celebrates post-harvest thanksgiving with communal feasting, traditional dances, and storytelling. Founders' Festival honors ancestors through rituals and oral traditions.
        </p>
      </MorphingCard>

      <MorphingCard icon="🍲" title="Traditional Foods">
        <p>
          Kikuyu cuisine reflects their agricultural lifestyle and emphasizes communal sharing during ceremonies and daily life.
        </p>
        <ul>
          <li><strong>Githeri:</strong> A nutritious staple mix of maize and beans, cooked together in a traditional pot (sufuria) and served at most meals.</li>
          <li><strong>Mukimo / Irio:</strong> Mukimo combines mashed potatoes, maize, and pumpkin (or nettle) leaves. Irio contains the same ingredients minus the greens.</li>
          <li><strong>Nyama Choma & Mūtura:</strong> Roasted goat, beef, or chicken for ceremonies and celebrations; mūtura (blood sausage) serves both as street food and ritual fare.</li>
          <li><strong>Ūcūrū & Muratina:</strong> Traditional fermented porridge and alcoholic brew served in gourds during ceremonies and social gatherings.</li>
        </ul>
        <p>
          <strong>Traditional Preparation:</strong> Cooking done using earthenware pots and wooden spoons over three-stone fires. Meals often become community events during ceremonies, fostering social bonds.
        </p>
        <div className="image-container">
          <img
            src="/assets/images/Mukimo.png"
            alt="Kikuyu traditional food"
            className="styled-image"
          />
          <p className="image-caption">Mukimo - a traditional mashed dish with potatoes, maize, and greens.</p>
        </div>
        <div className="image-container">
          <img
            src="/assets/images/Muratina.png"
            alt="Kikuyu traditional food"
            className="styled-image"
          />
          <p className="image-caption">Muratina - traditional fermented alcoholic beverage.</p>
        </div>
        <div className="image-container">
          <img
            src="/assets/images/Nyama_choma.png"
            alt="Kikuyu traditional food"
            className="styled-image"
          />
          <p className="image-caption">Nyama choma - roasted meat for celebrations.</p>
        </div>
      </MorphingCard>

      <MorphingCard icon="🎉" title="Marriage & Festivals">
        <p>
          <strong>Nguracio (Marriage):</strong> Traditional marriages involve elaborate dowry negotiations (Ruracio) requiring livestock (often dozens of goats and sheep) and symbolic rituals including planting a branch (kuhanda ithigi), shoulder-cutting ceremonies, ear-eating (kuria matu), and sharing ritual porridge (gukundania ucuru).
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
        <p>
          <strong>Ceremonial Gatherings:</strong> Marriage ceremonies feature ritual acts, community gatherings, and traditional performances that strengthen family alliances and cultural continuity.
        </p>
        <div className="image-container">
          <img
            src="/assets/images/Kikuyu_marriage1.png"
            alt="Kikuyu marriage ceremony"
            className="styled-image"
          />
          <p className="image-caption">A Kikuyu marriage ceremony showcasing traditional rituals and community participation.</p>
        </div>
        <div className="image-container">
          <img
            src="/assets/images/Kikuyu_marriage2.png"
            alt="Kikuyu marriage ceremony"
            className="styled-image"
          />
          <p className="image-caption">Traditional Kikuyu wedding ceremonies with symbolic rituals and family blessings.</p>
        </div>
      </MorphingCard>

      <MorphingCard icon="💼" title="Economic Practices">
        <p>
          The Kikuyu economy traditionally centers around agriculture, complemented by livestock keeping and specialized crafts.
        </p>
        <ul>
          <li><strong>Agriculture:</strong> Cultivation of maize, beans, potatoes, tea, and coffee. Traditional rituals ensure fertility and adequate rainfall for successful harvests.</li>
          <li><strong>Livestock & Tanning:</strong> Keeping goats, sheep, and cattle for food and leather. Tanning animal skins is a specialized trade for making traditional clothing and ceremonial items.</li>
          <li><strong>Homestead Brewing:</strong> Cooperative production of traditional beers for ancestral ceremonies and social cohesion, maintaining cultural traditions and community bonds.</li>
          <li><strong>Ceremonial Events:</strong> Initiation and age-set rituals, marriage rites, harvest festivals, and founders' celebrations that combine economic exchange with cultural expression.</li>
        </ul>
      </MorphingCard>

      <MorphingCard icon="🪘" title="Music & Oral Traditions">
        <p>
          <strong>Musical Heritage:</strong> Drums, flutes, and horns guide traditional songs and dances during harvest celebrations, weddings, and initiation ceremonies. Music serves as both entertainment and cultural education.
        </p>
        <p>
          <strong>Oral Literature:</strong> The Kikuyu language preserves wisdom through proverbs and folktales passed down by elders. Stories teach moral lessons, bravery, and respect for community values.
        </p>
        <p>
          <strong>Ceremonial Music:</strong> Traditional songs and dances accompany initiations, weddings, and harvests, guided by drums, horns, and flutes that create rhythmic foundations for cultural expression.
        </p>
        <p>
          <strong>Cultural Transmission:</strong> Elders pass down ancestral wisdom through storytelling, proverbs, and musical traditions that preserve historical knowledge and moral guidance.
        </p>
      </MorphingCard>

      <MorphingCard icon="🧥" title="Traditional Attire">
        <p>
          Kikuyu traditional clothing reflects their cultural identity and varies by gender, age, and ceremonial occasion.
        </p>
        <ul>
          <li><strong>Women's Attire:</strong> Muthuru (leather skirt) worn with decorative shawls (shuka or Kanga) over one shoulder, embellished with colorful bead necklaces, bracelets, anklets, and cowrie shells.</li>
          <li><strong>Men's Clothing:</strong> Nyambari cloth wraps (mathagu) tied around the waist. Elder men add fur or animal-skin cloaks to indicate status and ceremonial importance.</li>
          <li><strong>Ceremonial Wear:</strong> Animal skin garments from goats, impalas, or leopards used in dances and ceremonies, demonstrating wealth and cultural connection to traditional practices.</li>
          <li><strong>Cultural Significance:</strong> Traditional dress serves as identity markers, status symbols, and connections to ancestral traditions during important cultural events.</li>
        </ul>
        <div className="image-container">
          <img
            src="/assets/images/Kikuyu_women.png"
            alt="Kikuyu traditional attire"
            className="styled-image"
          />
          <p className="image-caption">Example of traditional Kikuyu women's attire with beadwork and leather garments.</p>
        </div>
        <div className="image-container">
          <img
            src="/assets/images/Kikuyu_men.png"
            alt="Kikuyu traditional attire"
            className="styled-image"
          />
          <p className="image-caption">Traditional Kikuyu men's clothing featuring cloth wraps and ceremonial accessories.</p>
        </div>
      </MorphingCard>

      <MorphingCard icon="🕊️" title="Beliefs & Spirituality">
        <p>
          <strong>Supreme Deity:</strong> The Kikuyu worship Ngai, the creator deity believed to dwell on Mount Kenya. Ngai governs all aspects of life and provides protection and guidance to the community.
        </p>
        <p>
          <strong>Spiritual Practices:</strong> Elders conduct rainmaking, healing, and fertility rituals at sacred sites including special trees and riverbanks. These ceremonies maintain harmony between the community and spiritual forces.
        </p>
        <p>
          <strong>Ancestral Reverence:</strong> Ancestral spirits are honored in every ceremony, with offerings and prayers that maintain connections between the living and deceased family members.
        </p>
        <p>
          <strong>Sacred Geography:</strong> Mount Kenya serves as the primary sacred site, while specific trees, rivers, and natural features throughout Kikuyu territory hold spiritual significance for prayers and offerings.
        </p>
        <div className="image-container">
          <img
            src="/assets/images/Kikuyu_beliefs.png"
            alt="Kikuyu spiritual practices"
            className="styled-image"
          />
          <p className="image-caption">Traditional Kikuyu spiritual practices and sacred sites.</p>
        </div>
        <div className="image-container">
          <img
            src="/assets/images/KikuyuGeo.png"
            alt="Kikuyu geographical homeland"
            className="styled-image"
          />
          <p className="image-caption">The fertile highlands around Mount Kenya - traditional Kikuyu homeland.</p>
        </div>
      </MorphingCard>
    </section>
  );
}