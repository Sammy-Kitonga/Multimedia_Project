import React from "react";
import MorphingCard from "../components/MorphingCard";
import "../App.css";

export default function Nyamwezi() {
  return (
    <section className="section fade-in tribe-nyamwezi">
      <h2>Nyamwezi Tribe (Tanzania)</h2>

      <MorphingCard icon="💍" title="Marriage & Family Structure">
        <p>
          <strong>Courtship and Marriage:</strong> Traditional courtship involves extensive bridewealth negotiations between families, followed by multi-day celebrations that showcase the community's unity and cultural richness.
        </p>
        <p>
          <strong>Wedding Celebrations:</strong> Marriage ceremonies feature vibrant music, traditional dance performances, and shared communal meals that strengthen bonds between families and clans.
        </p>
        <p>
          <strong>Family Structure:</strong> Strong emphasis on extended family networks and clan relationships that provide social support and cultural continuity.
        </p>
      </MorphingCard>

      <MorphingCard icon="🍲" title="Traditional Foods">
        <p>
          The Nyamwezi diet reflects their agricultural lifestyle and trading connections with other East African communities.
        </p>
        <ul>
          <li><strong>Ugali:</strong> Stiff maize porridge served with stewed meats and vegetables such as pumpkin leaves or okra - the foundation of most meals.</li>
          <li><strong>Traditional Beer:</strong> Brewed from fermented millet, corn, or sorghum; essential for ceremonies, communal gatherings, and social bonding.</li>
          <li><strong>Vegetables and Stews:</strong> Various leafy greens, root vegetables, and legumes prepared in traditional clay pots.</li>
          <li><strong>Ceremonial Foods:</strong> Special dishes prepared for festivals, initiation ceremonies, and religious observances.</li>
        </ul>
      </MorphingCard>

      <MorphingCard icon="💰" title="Economic Practices">
        <p>
          The Nyamwezi developed sophisticated economic systems that made them influential traders in 19th-century East Africa.
        </p>
        <ul>
          <li><strong>Ivory Trade and Elephant Hunting:</strong> The Nyamwezi organized sacred hunting guilds and developed expertise in elephant hunting, trading tusks regionally for manufactured goods, weapons, and other valuable items.</li>
          <li><strong>Long-Distance Trade Networks:</strong> Served as caravan porters and middlemen in the 19th-century East African trade networks, connecting the interior with coastal markets.</li>
          <li><strong>Agricultural Production:</strong> Cultivated crops for both subsistence and trade, including grains, vegetables, and cash crops.</li>
          <li><strong>Craft Industries:</strong> Developed skills in metalworking, pottery, and textile production for both local use and regional trade.</li>
        </ul>
      </MorphingCard>

      <MorphingCard icon="🎶" title="Music & Dance">
        <p>
          <strong>Hiari ya Moyo ("Desire of the Heart"):</strong> A renowned cultural troupe founded in 1953 in Tabora that showcases Nyamwezi heritage through vibrant group dance, complex rhythmic patterns, and traditional attire that tells stories of their history and values.
        </p>
        <div className="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/5_C-RW4IqrA"
            title="Nyamwezi Dance"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <p>
          <strong>Musical Traditions:</strong> Traditional songs accompany work activities, ceremonies, and social gatherings, preserving historical narratives and cultural values through oral performance.
        </p>
      </MorphingCard>

      <MorphingCard icon="👗" title="Traditional Attire">
        <p>
          Nyamwezi clothing has evolved over time while maintaining cultural significance and identity markers.
        </p>
        <ul>
          <li><strong>Women's Historical Attire:</strong> Traditionally wore bark cloth garments crafted from local tree bark, demonstrating sophisticated textile techniques.</li>
          <li><strong>Modern Women's Clothing:</strong> Adopted colorful khangas and vitenge fabrics featuring traditional proverbs and cultural symbols that convey messages and values.</li>
          <li><strong>Men's Traditional Attire:</strong> Wore kanzu robes, decorative caps (kofia), and ceremonial cloaks for formal occasions and cultural ceremonies.</li>
          <li><strong>Distinctive Features:</strong> Early anthropologists noted elaborate tribal hairstyles and distinctive clothing patterns that identified clan and social status.</li>
        </ul>
      </MorphingCard>

      <MorphingCard icon="🙏" title="Beliefs & Spirituality">
        <p>
          <strong>Supreme Deity:</strong> The Nyamwezi honor Likube (God) as the supreme creator and source of all life, while maintaining deep connections to ancestral spirits who guide daily life.
        </p>
        <ul>
          <li><strong>Ancestral Worship:</strong> Regular offerings and libations to honor deceased family members and clan ancestors who continue to influence the living.</li>
          <li><strong>Spiritual Leadership:</strong> Chiefs and diviners (mfumu) serve as intermediaries between the spiritual and physical worlds, conducting important ceremonies.</li>
          <li><strong>Rainmaking Rituals:</strong> Specialized ceremonies led by spiritual leaders to ensure adequate rainfall for agricultural success.</li>
          <li><strong>Healing Practices:</strong> Traditional medicine and spiritual healing that addresses both physical ailments and spiritual imbalances.</li>
          <li><strong>Sacred Sites:</strong> Designated places in nature where important rituals and offerings are made to maintain harmony with spiritual forces.</li>
        </ul>
      </MorphingCard>

      <MorphingCard icon="🗺️" title="Geography & Cultural Legacy">
        <p>
          <strong>Traditional Territory:</strong> The Nyamwezi occupy central Tanzania, with Tabora serving as a historical center of their culture and trade activities.
        </p>
        <p>
          <strong>Historical Significance:</strong> Their strategic location made them crucial players in East African trade routes, connecting distant regions and facilitating cultural exchange.
        </p>
        <p>
          <strong>Modern Presence:</strong> Today, Nyamwezi communities continue to preserve their cultural heritage while adapting to contemporary Tanzanian society and global influences.
        </p>
      </MorphingCard>
    </section>
  );
}