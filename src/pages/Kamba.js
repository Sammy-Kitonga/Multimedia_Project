import React from "react";
import MorphingCard from "../components/MorphingCard";
import AudioNotification from "../components/AudioNotification";
import AudioControl from "../components/AudioControl";
import useBackgroundAudio from "../hooks/useBackgroundAudio";
import "../App.css";

export default function Kamba() {
  const { 
    audioRef, 
    audioBlocked, 
    isPlaying, 
    volume, 
    manualPlay, 
    togglePlayPause, 
    changeVolume 
  } = useBackgroundAudio("/assets/audio/Kamba_pewa.mp3", 0.3);

  return (
    <section className="section fade-in tribe-kamba">
      <h2>Kamba Tribe (Kenya)</h2>
      
      <div className="morph-cards-container">
      <AudioNotification 
        isVisible={audioBlocked} 
        onClick={manualPlay}
      />

      <AudioControl
        audioRef={audioRef}
        isPlaying={isPlaying}
        onToggle={togglePlayPause}
        volume={volume}
        onVolumeChange={changeVolume}
      />
      <MorphingCard 
        icon="🍲" 
        title="Traditional Foods"
        backgroundImage="/assets/images/muthokoi1.png"
      >
        <p>
          <strong>Muthokoi:</strong> Muthokoi is the most common dish eaten by the Kamba. It consists of dehulled maize kernels cooked with pigeon peas (mbaazi), onions, tomatoes, and salt. Traditionally prepared over fire in clay pots or metal pans.
        </p>
        <p><strong>Ingredients for Traditional Muthokoi:</strong></p>
        <ul>
          <li>2 cups dehulled maize</li>
          <li>1½ cups pigeon peas</li>
          <li>1 large onion</li>
          <li>2 chopped tomatoes</li>
          <li>Salt and water to boil until soft</li>
        </ul>
        <div className="image-container">
          <img
            src="/assets/images/Muthokoi2.png"
            alt="Muthokoi dish"
            className="styled-image"
          />
          <p>Muthokoi - the staple dish of the Kamba people</p>
        </div>
        <div className="image-container">
          <img
            src="/assets/images/muthokoi1.png"
            alt="Muthokoi preparation"
            className="styled-image"
          />
          <p>Traditional preparation of Muthokoi</p>
        </div>
        <div className="video-container">
          <video 
            controls 
            width="100%" 
            style={{ maxWidth: '800px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
          >
            <source src="/assets/video/Kamba%20Interview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="video-caption">Kamba Cultural Interview - Traditional practices and food preparation insights.</p>
        </div>
      </MorphingCard>

      <MorphingCard 
        icon="💍" 
        title="Marriage & Cultural Practices"
        backgroundImage="/assets/images/Muthokoi2.png"
      >
        <p>
          <strong>Ntheo Marriage Rite:</strong> One of the central customs is Ntheo, where the groom's family slaughters an animal at the bride's home. This ritual symbolizes a covenant between the two families and formally seals the marriage agreement.
        </p>
        <div className="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/IgYsWBBY-5s"
            title="Ntheo Marriage Rite"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <p>
          <strong>Spiritual Beliefs:</strong> Kamba elders honor ancestors by pouring a small amount of traditional beer on the ground while invoking their names (e.g. "akundie vau") before communal drinking. This shows respect and spiritual connection with the departed.
        </p>
      </MorphingCard>

      <MorphingCard 
        icon="👗" 
        title="Traditional Attire"
        backgroundImage="/assets/images/Kikuyu_women.png"
      >
        <p>
          Traditional Kamba attire reflects their cultural heritage and remains an important part of ceremonial occasions.
        </p>
        <ul>
          <li><strong>Women:</strong> Beaded headbands, necklaces, and leather skirts. Intricate beadwork is a hallmark of Kamba women's traditional dress.</li>
          <li><strong>Men:</strong> Leather kilts with brass and iron adornments. These metals signify status and craftsmanship.</li>
          <li><strong>Modern Usage:</strong> Traditional dress is still worn in ceremonies, and beadwork remains popular in crafts and trade.</li>
        </ul>
        <div className="image-container">
          <img
            src="/assets/images/Kamba%20women%20attire.jpeg"
            alt="Kamba women traditional attire"
            className="styled-image"
          />
          <p className="image-caption">Traditional Kamba women's attire featuring intricate beadwork and leather garments.</p>
        </div>
        <div className="image-container">
          <img
            src="/assets/images/Kamba%20Men%20attire.jpeg"
            alt="Kamba men traditional attire"
            className="styled-image"
          />
          <p className="image-caption">Traditional Kamba men's clothing with leather kilts and metal adornments.</p>
        </div>
      </MorphingCard>

      <MorphingCard 
        icon="🎶" 
        title="Music & Dance"
        backgroundImage="/assets/images/Kikuyu_men.png"
      >
        <p>
          <strong>Kilumi dance:</strong> A spiritual rainmaking and celebratory dance led by women in metallic-accented attire. Men drum as women chant and dance rhythmically.
        </p>
        <div className="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/HMM7CTUNn8c?enablejsapi=1"
            title="Kamba Dance"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </MorphingCard>
      <MorphingCard 
        icon="💼" 
        title="Economic Practices"
        backgroundImage="/assets/images/Hives.png"
      >
        
        <ul>
          <li><strong>Farming:</strong> Farming of cereals such as maize and millet and legumes such as beans.</li>
          <li><strong>Beekeeping:</strong> Traditional bee hives are created by hollowing tree logs and hanging them on trees.</li>
        </ul>
        <div className="image-container">
          <img
            src="/assets/images/Hives.png"
            alt="Kamba beekeeping"
            className="styled-image"
          />
          <p className="image-caption">Traditional bee hives made from hollowed out tree logs</p>
        </div>
      </MorphingCard>
      </div>

      <audio 
        ref={audioRef}
        loop 
        preload="auto"
        style={{ display: 'none' }}
      >
        <source src="/assets/audio/Kamba_pewa.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
}