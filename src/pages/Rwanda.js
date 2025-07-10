import React from "react";
import MorphingCard from "../components/MorphingCard";
import VideoEmbed from "../components/VideoEmbed";
import "../App.css";

export default function Rwanda() {
  return (
    <section className="section fade-in tribe-rwanda">
      <h2>Rwandan Culture</h2>

      <div className="morph-cards-container">
      <MorphingCard 
        icon="📜" 
        title="Key Cultural Practices"
        backgroundImage="/assets/images/Rwanda%20Dancing.png"
      >
        <p>
          <strong>Rites of Passage:</strong> Birth is celebrated as a blessing to the family and community; new mothers often receive communal support. Initiation rites traditionally marked the transition from childhood to adulthood, involving teachings about societal responsibilities and values.
        </p>
        <p>
          <strong>Marriage Customs:</strong> Marriage is an important social institution, accompanied by negotiations, dowry exchanges, and symbolic blessings. The payment of dowry, often in the form of cows, symbolizes wealth and respect for the bride's family.
        </p>
        <p>
          <strong>Clan Systems:</strong> Rwandan society is traditionally organized into clans (ubwoko), which serve as extended family networks offering social support. Age sets played a role in defining social responsibilities.
        </p>
        <p>
          <strong>Gender Roles:</strong> Historically, men were responsible for herding, defense, and external leadership roles, while women managed domestic tasks and agriculture. Women held significant respect as mothers and caretakers.
        </p>
        <p>
          <strong>Festivals and Ceremonies:</strong> Harvest festivals give thanks for agricultural abundance. Ceremonies for rain or fertility often involve dance, music, and offerings to ancestors. Ancestor veneration is observed through ritual gatherings.
        </p>
        <div className="image-container">
          <img
            src="/assets/images/Rwanda%20Dancing.png"
            alt="Traditional Rwandan dancing"
            className="styled-image"
          />
          <p className="image-caption">Traditional Rwandan dancers performing cultural ceremonies with intricate movements and vibrant attire.</p>
        </div>
      </MorphingCard>

      <MorphingCard 
        icon="👗" 
        title="Traditional Attire"
        backgroundImage="/assets/images/Rwanda%20Hairstyle.png"
      >
        <p>
          Traditional Rwandan clothing reflects cultural heritage and maintains significance in ceremonies and cultural identity.
        </p>
        <ul>
          <li><strong>Umushanana:</strong> Both men and women traditionally wore wraps known as umushanana, draped gracefully over the body. Originally made from animal skins and bark cloth before woven fabrics.</li>
          <li><strong>Materials Used:</strong> Animal skins, bark cloth, and later silk and cotton. Beads, shells, and decorative sashes added color and symbolism.</li>
          <li><strong>Ceremonial Wear:</strong> During ceremonies, the umushanana is adorned with beads and jewelry to signify status and celebration. Headbands and beaded necklaces are common accessories.</li>
          <li><strong>Cultural Meaning:</strong> White and cream colors symbolize purity and peace. Bright sashes or beads represent joy and festivity during celebrations.</li>
        </ul>
        <div className="image-container">
          <img
            src="/assets/images/Rwanda%20Hairstyle.png"
            alt="Traditional Rwandan hairstyles and attire"
            className="styled-image"
          />
          <p className="image-caption">Traditional Rwandan hairstyles and ceremonial attire showcasing cultural identity and artistry.</p>
        </div>
      </MorphingCard>

      <MorphingCard 
        icon="🍲" 
        title="Traditional Foods & Preparation"
        backgroundImage="/assets/images/Rwanda%20Farming.png"
      >
        <p>
          Rwandan cuisine reflects the country's agricultural heritage and emphasizes communal sharing during ceremonies and daily life.
        </p>
        <div className="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/T5fpKJltUY4"
            title="Traditional Rwandan Food"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <p className="video-caption">Traditional Rwandan culinary practices and food preparation methods that reflect the rich agricultural heritage.</p>
        </div>
        <ul>
          <li><strong>Staple Foods:</strong> Ugali (maize porridge), beans, sorghum, sweet potatoes, cassava, and bananas form the foundation of Rwandan diet.</li>
          <li><strong>Dairy Products:</strong> Milk is a cherished food, historically linked to cattle herding culture and considered sacred in many communities.</li>
          <li><strong>Traditional Beverages:</strong> Banana beer and sorghum beer are traditional drinks used in social gatherings, ceremonies, and cultural celebrations.</li>
          <li><strong>Cooking Methods:</strong> Food is often prepared on three-stone fires outside or in communal kitchens. Bananas and beans are boiled together in large clay or metal pots.</li>
          <li><strong>Traditional Tools:</strong> Wooden stirring sticks, woven baskets, earthenware pots, and gourds for milk and beer storage.</li>
        </ul>
        <p>
          <strong>Food Sharing:</strong> Food is central to ceremonies; communal sharing symbolizes unity and community ties. Guests are served generously to show hospitality and honor.
        </p>
        <div className="image-container">
          <img
            src="/assets/images/Rwanda%20Farming.png"
            alt="Traditional Rwandan farming practices"
            className="styled-image"
          />
          <p className="image-caption">Traditional Rwandan agricultural practices and farming methods passed down through generations.</p>
        </div>
      </MorphingCard>

      <MorphingCard 
        icon="💼" 
        title="Traditional Functions & Economic Practices"
        backgroundImage="/assets/images/Rwand%20artisal%20items.png"
      >
        <p>
          Rwanda's economy traditionally combined agriculture, pastoralism, and specialized crafts, creating diverse livelihood systems.
        </p>
        <ul>
          <li><strong>Agriculture:</strong> Primarily an agricultural society cultivating bananas, sorghum, and root crops widely. Farming provides both food and means for trade.</li>
          <li><strong>Cattle Keeping:</strong> Cattle keeping is a symbol of wealth and status, with complex social systems around livestock ownership and management.</li>
          <li><strong>Fishing:</strong> Practiced in lakes and rivers, providing additional protein and trade opportunities for communities near water sources.</li>
          <li><strong>Traditional Industries:</strong> Weaving (baskets and mats), pottery, ironworking, tanning, and beer brewing. These crafts serve both practical and ceremonial purposes.</li>
          <li><strong>Trade Systems:</strong> Traditional exchange of agricultural produce, livestock, and craft goods among families and neighboring communities.</li>
        </ul>
        <p>
          <strong>Main Ceremonies:</strong> Marriage ceremonies, initiation rites, harvest festivals, and birth celebrations that combine economic exchange with cultural expression.
        </p>
        <div className="image-container">
          <img
            src="/assets/images/Rwand%20artisal%20items.png"
            alt="Traditional Rwandan artisanal crafts"
            className="styled-image"
          />
          <p className="image-caption">Traditional Rwandan artisanal items including baskets, pottery, and handcrafted goods.</p>
        </div>
      </MorphingCard>

      <MorphingCard 
        icon="🎵" 
        title="Language, Music & Oral Traditions"
        backgroundImage="/assets/images/Rwanda%20Dancing.png"
      >
        <p>
          <strong>Language:</strong> Kinyarwanda serves as the unifying language that preserves cultural knowledge and traditional practices across all Rwandan communities.
        </p>
        <ul>
          <li><strong>Proverbs and Folktales:</strong> Oral literature is rich with proverbs emphasizing wisdom, patience, and community harmony. Folktales often involve animals and teach moral lessons.</li>
          <li><strong>Traditional Songs and Dances:</strong> Songs accompany nearly every social function — weddings, harvests, or warrior performances. Dances like Intore are iconic, involving impressive jumps and precise movements.</li>
          <li><strong>Musical Instruments:</strong> Drums (ingoma) are central and sacred. Horns (amahaba), rattles, and string instruments are also used in ceremonies and celebrations.</li>
          <li><strong>Storytellers:</strong> Storytellers (abacurabwenge) preserve history and entertain communities. Praise singers honor leaders and guests at gatherings, maintaining oral traditions.</li>
        </ul>
      </MorphingCard>

      <MorphingCard 
        icon="🙏" 
        title="Beliefs & Spirituality"
        backgroundImage="/assets/images/Rwanda%20Hairstyle.png"
      >
        <p>
          Rwandan spiritual practices center around a supreme creator and ancestral connections that guide daily life and community decisions.
        </p>
        <div className="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/z9H-YzfG-YQ"
            title="Traditional Rwandan Wedding Ceremony"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <ul>
          <li><strong>Supreme Creator:</strong> Belief in Imana, the supreme creator and source of all life, who influences daily events and provides protection.</li>
          <li><strong>Ancestral Spirits:</strong> Ancestors are honored and called upon for blessings and protection. Regular offerings maintain connections between living and deceased.</li>
          <li><strong>Spiritual Leaders:</strong> Specialists played crucial roles as healers, rainmakers, and mediators between the spiritual and physical worlds.</li>
          <li><strong>Sacred Sites:</strong> Mountains, certain trees, and rivers are regarded as sacred and visited for offerings and spiritual ceremonies.</li>
          <li><strong>Rituals and Offerings:</strong> Rituals maintain harmony with ancestors and nature. Offerings might include beer, milk, or symbolic items placed at shrines.</li>
        </ul>
      </MorphingCard>

      <MorphingCard 
        icon="📺" 
        title="Cultural Documentary: The Tutsi Tribe"
        backgroundImage="/assets/images/Rwanda%20Farming.png"
      >
        <p>
          <strong>Historical Perspective:</strong> The Tutsi are one of the three main ethnic groups in Rwanda, traditionally known for their pastoral lifestyle and cattle-herding culture. This documentary provides insights into their historical role in Rwandan society.
        </p>
        <VideoEmbed 
          videoId="PPeDcx21Z_o"
          title="Documentary Review: Understanding the Tutsi Tribe - Cultural Heritage and Historical Context"
        />
        <p>
          <strong>Cultural Significance:</strong> The Tutsi, along with the Hutu and Twa, form the diverse cultural tapestry of Rwanda. Understanding their traditions, social structures, and contributions to Rwandan culture provides valuable context for appreciating the nation's rich heritage.
        </p>
        <p>
          <strong>Modern Unity:</strong> Today, Rwanda emphasizes unity and shared identity over ethnic divisions, celebrating the common cultural elements that bind all Rwandans together while honoring the diverse traditions that each group has contributed to the national culture.
        </p>
      </MorphingCard>

      <MorphingCard 
        icon="🗺️" 
        title="Geography & Modern Influence"
        backgroundImage="/assets/images/EastAfrica.png"
      >
        <p>
          <strong>Traditional Homeland:</strong> Present-day Rwanda's fertile highlands provide ideal conditions for both agriculture and pastoralism.
        </p>
        <p>
          <strong>Modern Distribution:</strong> Throughout Rwanda, with Rwandan communities also in neighboring countries due to historical migrations and modern movements.
        </p>
        <p>
          <strong>Cultural Relationships:</strong> Close ties and cultural exchanges with neighboring groups in Uganda, Burundi, Tanzania, and the Democratic Republic of Congo.
        </p>
        <ul>
          <li><strong>Colonial Impact:</strong> European colonization introduced Christianity, Western education, and administrative systems that reshaped social structures.</li>
          <li><strong>Religious Integration:</strong> Many traditional spiritual practices blended with or were replaced by Christian beliefs, creating syncretic religious practices.</li>
          <li><strong>Urbanization and Education:</strong> Increased urbanization and higher literacy rates have introduced modern lifestyles, especially among the youth.</li>
          <li><strong>Cultural Preservation:</strong> Festivals, museums (e.g., the Ethnographic Museum in Huye), and cultural troupes keep traditional dance, crafts, and music alive.</li>
          <li><strong>Unity and Identity:</strong> Government and private organizations actively promote cultural heritage as part of national identity, emphasizing shared values over divisions.</li>
        </ul>
      </MorphingCard>
      </div>
    </section>
  );
}
