import React from "react";
import MorphingCard from "../components/MorphingCard";
import "../App.css";

export default function Banyakole() {
  return (
    <section className="section fade-in tribe-banyakole">
      <h2>Banyakole Tribe (Uganda)</h2>

      <div className="morph-cards-container">
        <MorphingCard 
        icon="📜" 
        title="Key Cultural Practices"
        backgroundImage="/assets/images/Banyakolemen.png"
      >
        <p>
          <strong>Rites of Passage:</strong> Birth rituals involve presenting gifts to the mother and child. Boys were initiated into manhood through cattle-keeping responsibilities rather than formal circumcision, learning milking and grazing responsibilities.
        </p>
        <p>
          <strong>Clan System:</strong> Strong clan system that guides marriage rules - you cannot marry from your own clan, ensuring genetic diversity and social structure.
        </p>
        <p>
          <strong>Gender Roles:</strong> Men traditionally herded cattle and protected the family, while women handled domestic chores, milking cows, and food preparation. The king (Omugabe) was a highly respected figure.
        </p>
        <p>
          <strong>Marriage Customs:</strong> Dowry (bride price) is paid mainly in cattle. The milk pot (ebyanzi) is symbolic, as milk is sacred among Banyankole. The mother of the bride is given a beautiful kyitambi (mushana).
        </p>
        <p>
          <strong>Festivals and Ceremonies:</strong> Rituals tied to cattle and harvest. Cattle blessing ceremonies are common and central to their cultural identity.
        </p>
      </MorphingCard>

      <MorphingCard 
        icon="👗" 
        title="Traditional Attire"
        backgroundImage="/assets/images/Banyakolewomen.png"
      >
        <p>
          Traditional Banyakole clothing reflects their cattle-keeping culture and emphasizes status through materials.
        </p>
        <ul>
          <li><strong>Men:</strong> Animal skin wrappers (or omushanana among some), later transitioning to bark cloth for more formal occasions.</li>
          <li><strong>Women:</strong> Ekitambi/Mushana (wrapper dress) with decorative sashes, showcasing their weaving and textile skills.</li>
          <li><strong>Materials:</strong> Animal skins, cowhide, and beads. These materials directly connected to their cattle-keeping lifestyle.</li>
          <li><strong>Ceremonial Wear:</strong> Elaborate beaded ornaments during marriage and royal ceremonies, signifying wealth and status.</li>
          <li><strong>Cultural Meaning:</strong> Skins symbolized wealth (cattle), while beads often indicated social status and ceremonial importance.</li>
        </ul>
        <div className="image-container">
          <img
            src="/assets/images/Banyakolemen.png"
            alt="Banyakole men"
            className="styled-image"
          />
          <p className="image-caption">Banyakole men in traditional attire.</p>
        </div>
        <div className="image-container">
          <img
            src="/assets/images/Banyakolewomen.png"
            alt="Banyakole women"
            className="styled-image"
          />
          <p className="image-caption">Banyakole women in traditional dress.</p>
        </div>
      </MorphingCard>

      <MorphingCard 
        icon="🍲" 
        title="Traditional Foods & Preparation"
        backgroundImage="/assets/images/Banyakole_milk.png"
      >
        <p>
          The Banyakole diet centers around dairy products, reflecting their pastoral lifestyle and deep connection to cattle.
        </p>
        <div className="image-container">
          <img
            src="/assets/images/Banyakole_milk.png"
            alt="Banyakole milk preparation"
            className="styled-image"
          />
          <p className="image-caption">Traditional milk preparation - central to Banyakole culture.</p>
        </div>
        <ul>
          <li><strong>Milk (amate):</strong> Fresh milk is the cornerstone of Banyakole nutrition and cultural practices.</li>
          <li><strong>Millet bread (karo):</strong> Traditional bread made from millet, a staple grain in their diet.</li>
          <li><strong>Ghee:</strong> Made from milk through traditional churning methods, used for cooking and ceremonial purposes.</li>
          <li><strong>Eshabwe:</strong> A delicacy made from ghee and rock salt (Ekyihonde), representing culinary sophistication.</li>
          <li><strong>Matoke:</strong> Steamed bananas, often served alongside dairy products.</li>
        </ul>
        <p>
          <strong>Cooking Methods:</strong> Traditional cooking over three-stone fires, using gourds for fermenting milk and earthen pots with wooden stirring sticks.
        </p>
        <p>
          <strong>Food Sharing:</strong> Food, especially milk and meat, is shared during ceremonies like weddings, symbolizing community unity and abundance.
        </p>
        <div className="image-container">
          <img
            src="/assets/images/Matoke.png"
            alt="Matoke preparation"
            className="styled-image"
          />
          <p className="image-caption">Matoke - steamed bananas, a staple food.</p>
        </div>
        <div className="image-container">
          <img
            src="/assets/images/Matoke1.png"
            alt="Matoke dishes"
            className="styled-image"
          />
          <p className="image-caption">Various matoke preparations.</p>
        </div>
        <div className="image-container">
          <img
            src="/assets/images/Matoke2.png"
            alt="Matoke cooking"
            className="styled-image"
          />
          <p className="image-caption">Traditional matoke cooking methods.</p>
        </div>
      </MorphingCard>

      <MorphingCard 
        icon="🏭" 
        title="Economic Practices"
        backgroundImage="/assets/images/Banyakolemen.png"
      >
        <p>
          The Banyakole economy is traditionally centered around cattle keeping, with complementary agricultural activities.
        </p>
        <ul>
          <li><strong>Cattle Keeping:</strong> Dominant occupation involving herding, breeding, and managing large cattle herds for milk, meat, and social status.</li>
          <li><strong>Agriculture:</strong> Cultivation of millet, bananas, and other crops to supplement the pastoral diet.</li>
          <li><strong>Milk Processing:</strong> Traditional industries include making ghee, fermenting milk, and producing various dairy products.</li>
          <li><strong>Hide Tanning:</strong> Processing cattle hides for clothing, storage containers, and trade goods.</li>
          <li><strong>Trade Networks:</strong> Bartering cattle for grains, iron tools, and other necessities with neighboring communities.</li>
        </ul>
        <p>
          <strong>Ceremonial Economics:</strong> Marriage, cattle blessing, and harvest thanksgiving ceremonies that reinforce social bonds and economic relationships.
        </p>
      </MorphingCard>

      <MorphingCard 
        icon="🎵" 
        title="Language, Music & Oral Traditions"
        backgroundImage="/assets/images/Banyakolewomen.png"
      >
        <p>
          <strong>Language:</strong> Runyankore, which preserves cultural knowledge and traditional practices through oral transmission.
        </p>
        <div className="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/1YfcfL5HpSU"
            title="Traditional Banyakole Dance"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <ul>
          <li><strong>Proverbs & Folktales:</strong> Rich oral literature emphasizing cattle, respect for elders, and community wisdom.</li>
          <li><strong>Music & Dance:</strong> Ekizino/Ekitaguro dance performed during weddings and celebrations, featuring rhythmic movements and community participation.</li>
          <li><strong>Musical Instruments:</strong> Traditional drums and flutes that accompany ceremonial events and storytelling.</li>
          <li><strong>Storytelling Tradition:</strong> Elders narrate cattle-related heroism and cultural values, often performed in rap-like rhythmic form.</li>
          <li><strong>Cultural Transmission:</strong> Oral traditions pass down knowledge about cattle care, weather patterns, and ancestral wisdom.</li>
        </ul>
      </MorphingCard>

      <MorphingCard 
        icon="🙏" 
        title="Beliefs & Spirituality"
        backgroundImage="/assets/images/Banyakole_milk.png"
      >
        <p>
          Banyakole spiritual practices center around cattle, ancestors, and natural forces that affect their pastoral lifestyle.
        </p>
        <ul>
          <li><strong>Supreme Creator:</strong> Worship of Ruhanga, the supreme creator God who governs all aspects of life.</li>
          <li><strong>Ancestral Spirits:</strong> Deep reverence for ancestral spirits who guide and protect the community and cattle.</li>
          <li><strong>Spiritual Leaders:</strong> Bahereza (priests) and rainmakers who conduct ceremonies and intercede with spiritual forces.</li>
          <li><strong>Sacred Sites:</strong> Certain hills and rivers considered sacred, used for prayers and offerings.</li>
          <li><strong>Cattle Rituals:</strong> Sacrifices and ceremonies to ensure cattle fertility, health, and protection from diseases.</li>
        </ul>
      </MorphingCard>

      <MorphingCard 
        icon="🗺️" 
        title="Geographical Location & Modern Influence"
        backgroundImage="/assets/images/EastAfrica.png"
      >
        <p>
          <strong>Traditional Homeland:</strong> South-western Uganda in the Ankole region, an area well-suited for cattle keeping.
        </p>
        <p>
          <strong>Modern Distribution:</strong> Today found in Mbarara, Shema, Bushenyi, and Ntungamo districts.
        </p>
        <p>
          <strong>Historical Integration:</strong> Mixed with Bahima (cattle keepers) and Bairu (cultivators), creating a complex social structure.
        </p>
        <p>
          <strong>Regional Relations:</strong> Maintained trade links with Banyarwanda, Batooro, and other neighboring groups.
        </p>
        <ul>
          <li><strong>Colonial Impact:</strong> Kingdom structures were weakened, and the Omugabe's role was reduced during colonial rule.</li>
          <li><strong>Religious Changes:</strong> Christianity is now widespread, though some traditional beliefs remain integrated.</li>
          <li><strong>Cultural Evolution:</strong> Practices like virginity testing are rare today; the gomesi was adopted from Buganda culture.</li>
          <li><strong>Cultural Preservation:</strong> Modern efforts include cultural festivals, traditional milk processing rituals, and maintaining cattle-keeping traditions.</li>
        </ul>
      </MorphingCard>
      </div>
    </section>
  );
}
