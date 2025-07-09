import React from "react";
import MorphingCard from "../components/MorphingCard";
import "../App.css";

export default function Tutsi() {
  return (
    <section className="section fade-in tribe-tutsi">
      <h2>Tutsi Tribe (Rwanda)</h2>

      <MorphingCard icon="🥛" title="Traditional Foods">
        <p>
          As traditional pastoralists, the Tutsi consumed a diet rich in dairy products, reflecting their cattle-owning culture and higher social status.
        </p>
        <ul>
          <li><strong>Milk and Dairy Products:</strong> Primary nutrition source including fresh milk, butter used as cooking fat, and various fermented dairy products.</li>
          <li><strong>Cattle Meat:</strong> Consumed on special occasions and ceremonial events, as cattle were considered sacred.</li>
          <li><strong>Pure Diet Tradition:</strong> Elite Tutsi ideal was a pure diet of milk products supplemented by beer made from fermented plantains or sorghum grain.</li>
          <li><strong>Fermented Beverages:</strong> Traditional beer brewing from sorghum or plantains for ceremonies and social gatherings.</li>
          <li><strong>Dietary Restrictions:</strong> Goat meat and goat milk were taboo for elite Tutsi, reflecting social hierarchy.</li>
        </ul>
        <p>
          The Tutsi rarely butchered cattle without ritual justification, as cattle were central to their cultural and economic identity.
        </p>
      </MorphingCard>

      <MorphingCard icon="👑" title="Marriage & Social Hierarchy">
        <p>
          <strong>Divine Kingship:</strong> The Tutsi formed the traditional aristocratic minority (14% of population) with the Mwami (king) at the head, considered of divine origin.
        </p>
        <ul>
          <li><strong>Polygamy:</strong> Unlike Hutu and Twa, Tutsi traditionally practiced polygamy, reflecting their higher social status.</li>
          <li><strong>Marriage Age:</strong> Tutsi boys married around 25 years old, later than other groups, reflecting extended education and leadership preparation.</li>
          <li><strong>Bride Wealth:</strong> Usually one cow plus beverages and one hoe, with the cow being the formal payment.</li>
          <li><strong>Birth Ceremonies:</strong> Newborns were kept indoors for at least eight days with their mothers for bonding and spiritual preparation.</li>
          <li><strong>Social Structure:</strong> Complex hierarchical political structure with administrative appointments across the country.</li>
        </ul>
      </MorphingCard>

      <MorphingCard icon="🐄" title="Economic Practices">
        <p>
          The Tutsi economy was built around cattle ownership and the ubuhake feudal system, which maintained their social dominance.
        </p>
        <ul>
          <li><strong>Pastoralism:</strong> Made their living by owning and dealing in cattle, considering agricultural work demeaning.</li>
          <li><strong>Ubuhake System:</strong> Feudal relationship providing cattle to Hutu clients in exchange for labor, military service, and tributes.</li>
          <li><strong>Economic Control:</strong> Controlled large cattle herds, distributing them strategically to cement loyalty and dependency.</li>
          <li><strong>Ultra-fine Basket Weaving:</strong> Aristocratic women renowned for coil-sewn baskets (agaseki) with intricate patterns.</li>
          <li><strong>High Arts:</strong> Privileged status allowed leisure time for poetry, weaving, music, metalwork, and jewelry making.</li>
        </ul>
      </MorphingCard>

      <MorphingCard icon="💃" title="Music & Oral Traditions">
        <p>
          <strong>Intore Dance:</strong> The most famous traditional dance, a highly choreographed routine originally performed by Tutsi warriors, now UNESCO-recognized.
        </p>
        <ul>
          <li><strong>Dance Components:</strong> Three parts - ballet performed by women, dance of heroes by men, and drums.</li>
          <li><strong>Performance Style:</strong> Men wear grass wigs and carry spears, moving with grace and complex choreography combined with raw aggression.</li>
          <li><strong>Battle Cries:</strong> Individual blood-curdling cries representing warriors' victories during performances.</li>
          <li><strong>Musical Instruments:</strong> Drums, horns, and lulunga (8-string harp-like instrument) provide rhythm and melody.</li>
          <li><strong>Epic Poetry:</strong> Oral traditions include epic songs chronicling origins of ruling class, emphasizing leadership and governance.</li>
          <li><strong>Language:</strong> Adopted Kinyarwanda (originally Hutu language) facilitating cultural integration while maintaining social distinctions.</li>
        </ul>
      </MorphingCard>

      <MorphingCard icon="👘" title="Traditional Attire">
        <p>
          Tutsi traditional clothing reflects their aristocratic status and cultural sophistication.
        </p>
        <ul>
          <li><strong>Women's Umushanana:</strong> Elegant long skirt gathered at hips, bodice, and sash draped over one shoulder, made from silk or lightweight cotton for flowing effect.</li>
          <li><strong>Ceremonial Dress:</strong> Plain white robes with geometric designs and white headbands for special occasions.</li>
          <li><strong>Amageza (Beaded Veils):</strong> Elaborate veils made of red and white glass beads suspended from beaded bands, creating trance-like swaying effect.</li>
          <li><strong>Men's Traditional Attire:</strong> Gowns and robes imported from African coast, wrapped-around skirts and top pieces tied at shoulder.</li>
          <li><strong>Modern Dress:</strong> Western-style clothing for daily wear, traditional garments reserved for cultural ceremonies.</li>
        </ul>
      </MorphingCard>

      <MorphingCard icon="⛰️" title="Beliefs & Spirituality">
        <p>
          Tutsi spiritual beliefs centered around divine kingship and their special relationship with Imana, the creator deity.
        </p>
        <ul>
          <li><strong>Imana Worship:</strong> Creator deity believed to dwell at Mount Kenya, considered omnipresent and omnipotent.</li>
          <li><strong>Divine Kingship:</strong> Mwami (king) considered to have divine origin, serving as intermediary between Imana and people.</li>
          <li><strong>Royal Rituals:</strong> King demonstrated divine power through sacred fire, royal drums, and royal agricultural rites.</li>
          <li><strong>Ancestral Veneration:</strong> Honor ancestral spirits and perform rituals maintaining connection with deceased leaders.</li>
          <li><strong>Religious Integration:</strong> Most modern Tutsi are Christians, particularly Catholics, with some converting to Islam post-1994.</li>
        </ul>
      </MorphingCard>

      <MorphingCard icon="🗺️" title="Geography & Modern Influence">
        <p>
          <strong>Migration History:</strong> First penetrated the area in the 14th-15th century from the northeast, seeking new rangelands through largely peaceful infiltration.
        </p>
        <ul>
          <li><strong>Geographic Distribution:</strong> Live primarily in Rwanda and Burundi, with populations in DR Congo (Banyamulenge), Uganda (Bafumbira), and Tanzania.</li>
          <li><strong>Mobile Lifestyle:</strong> As pastoralists, traveled frequently to royal courts and held administrative positions across regions.</li>
          <li><strong>Post-Genocide Recovery:</strong> Following 1994 genocide, communities work to rebuild while preserving cultural heritage and participating in unity programs.</li>
          <li><strong>Cultural Preservation:</strong> Actively preserve Intore dance, basket weaving, and cattle-keeping traditions while adapting to modern life.</li>
          <li><strong>UNESCO Recognition:</strong> Intore dance inscribed on UNESCO's Intangible Cultural Heritage List for global cultural significance.</li>
          <li><strong>Modern Integration:</strong> Blend traditional values with contemporary opportunities while maintaining cultural identity in Rwanda's development.</li>
        </ul>
      </MorphingCard>
    </section>
  );
}
