import React from "react";
import MorphingCard from "../components/MorphingCard";
import "../App.css";

export default function Hutu() {
  return (
    <section className="section fade-in tribe-hutu">
      <h2>Hutu Tribe (Rwanda)</h2>

      <MorphingCard icon="🍲" title="Traditional Foods">
        <p>
          The Hutu diet was traditionally high in vegetables and based on their agricultural lifestyle. Their cuisine reflects their deep connection to farming and community cooperation.
        </p>
        <ul>
          <li><strong>Isombe:</strong> Made from mashed cassava leaves mixed with dried fish, groundnuts, palm oil, and spices - one of Rwanda's most consumed dishes.</li>
          <li><strong>Ugali/Ubugali:</strong> A thick paste made from maize flour and water, forming a porridge-like consistency that serves as an accompaniment to stews.</li>
          <li><strong>Ibihaza:</strong> A hearty stew combining soaked dried beans with slow-cooked pumpkin.</li>
          <li><strong>Urwagwa:</strong> Traditional banana beer essential for ceremonies and marriage negotiations.</li>
          <li><strong>Staple crops:</strong> Bananas, plantains, sweet potatoes, beans, cassava, sorghum, and millet.</li>
        </ul>
        <p>
          Food preparation was often a communal activity using three-stone fires with earthenware pots and wooden utensils, especially during ceremonies and festivals.
        </p>
      </MorphingCard>

      <MorphingCard icon="💍" title="Marriage & Ceremonies">
        <p>
          <strong>Gusaba Ceremony:</strong> The groom's family formally asks the bride's family for her hand in marriage. Marriage becomes legal when the bride's family receives payment, usually cattle, goats, and beer.
        </p>
        <ul>
          <li><strong>Bride Price (Gukwa):</strong> Traditionally one heifer or cow (replaceable by about one dozen pots) and banana-beer jugs.</li>
          <li><strong>Marriage Age:</strong> Boys typically married around 17-18 years old, younger than other groups.</li>
          <li><strong>Wedding Ritual:</strong> During the ceremony, the bride is covered with milk and herbs.</li>
          <li><strong>Birth Ceremonies:</strong> Newborns remain home for seven days before emerging for a naming ceremony with community support.</li>
        </ul>
      </MorphingCard>

      <MorphingCard icon="🌾" title="Economic Practices">
        <p>
          As primarily subsistence farmers, the Hutu built their economy around agriculture and small-scale trading.
        </p>
        <ul>
          <li><strong>Agriculture:</strong> Cultivated beans, maize, sorghum, bananas, and other crops following the agricultural calendar.</li>
          <li><strong>Crop Storage:</strong> Used traditional granaries and large grain baskets for storing harvests.</li>
          <li><strong>Traditional Crafts:</strong> Pottery making, basket weaving, and metalwork for tools like hoes and axes.</li>
          <li><strong>Market Trading:</strong> Exchanged agricultural products for tools, weapons, and other necessities.</li>
        </ul>
      </MorphingCard>

      <MorphingCard icon="🎵" title="Music & Oral Traditions">
        <p>
          <strong>Language:</strong> Speak Kinyarwanda, a Bantu language shared with other Rwandan groups, crucial for maintaining cultural continuity.
        </p>
        <ul>
          <li><strong>Community Celebrations:</strong> Storytelling, dance, and strong community spirit mark life milestones like births, marriages, and harvests.</li>
          <li><strong>Agricultural Songs:</strong> Music accompanies farm work, celebrating planting, harvesting, and seasonal changes while preserving agricultural knowledge.</li>
          <li><strong>Oral Traditions:</strong> Folktales and proverbs teach moral lessons and preserve historical wisdom, emphasizing community cooperation.</li>
          <li><strong>Proverbs:</strong> Traditional sayings guide daily life, emphasizing hard work, community support, and respect for elders.</li>
        </ul>
      </MorphingCard>

      <MorphingCard icon="👗" title="Traditional Attire">
        <p>
          Hutu traditional clothing reflects their agricultural heritage and community spirit.
        </p>
        <ul>
          <li><strong>Women's Umushanana:</strong> Wrapped skirt bunched at hips and draped over one shoulder, worn over a tank top. Originally made from animal skins (impu), later silk and cotton.</li>
          <li><strong>Women's Ibitenge:</strong> Vibrant patterned fabrics worn during celebrations, representing agricultural heritage.</li>
          <li><strong>Men's Traditional Attire:</strong> Wrapped skirts both long and short, with headbands and ankle belts made with different colored beads.</li>
          <li><strong>Modern Adaptations:</strong> Rural men wear T-shirts with kitenge fabric wrapped around waists like ankle-length skirts.</li>
        </ul>
      </MorphingCard>

      <MorphingCard icon="🙏" title="Beliefs & Spirituality">
        <p>
          Despite widespread Christianity adoption, many Hutu still observe ancient customs and traditional spiritual practices.
        </p>
        <ul>
          <li><strong>Imana Worship:</strong> Traditional worship of Imana, the supreme creator deity, emphasizing divine providence and protection.</li>
          <li><strong>Ancestral Spirits:</strong> Respect for ancestors with offerings made to abazima (ancestral spirits) for guidance and protection.</li>
          <li><strong>Agricultural Rituals:</strong> Traditional ceremonies tied to agricultural cycles with prayers for good harvests and favorable weather.</li>
          <li><strong>Healing Practices:</strong> Traditional healers use plant-based remedies and spiritual practices for community well-being.</li>
          <li><strong>Death Rituals:</strong> Marked by purification rituals and work restrictions to maintain community bonds and respect for the deceased.</li>
        </ul>
      </MorphingCard>

      <MorphingCard icon="🏔️" title="Geography & Modern Influence">
        <p>
          <strong>Settlement:</strong> The Hutu settled in fertile valleys and hillsides throughout Rwanda, making up approximately 85% of Rwanda's population in agricultural regions.
        </p>
        <ul>
          <li><strong>Agricultural Regions:</strong> Settlements organized around agricultural potential in fertile areas.</li>
          <li><strong>Unity and Reconciliation:</strong> Following the 1994 genocide, Hutu communities participate in programs working to heal divisions and build unified Rwandan identity.</li>
          <li><strong>Cultural Preservation:</strong> Modern communities work to preserve traditional agricultural practices, crafts, and cultural expressions while adapting to contemporary life.</li>
          <li><strong>Educational Integration:</strong> Schools teach traditional agricultural knowledge and cultural practices alongside modern subjects for cultural continuity.</li>
        </ul>
      </MorphingCard>
    </section>
  );
}
