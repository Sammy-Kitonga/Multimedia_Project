import React,{useEffect} from "react";
// import "./tribeTheme.css";
import "../App.css"

export default function Kamba() {
  useEffect(() => {
    const audio = document.getElementById("background-audio");
    if (audio) {
      audio.play().catch((error) => {
        console.warn("Autoplay failed due to browser restrictions:", error);
      });
    }
  }, []);
  return (
    <section className="section fade-in tribe-kamba">
      <h2>Kamba Tribe (Kenya)</h2>

      <h3>Traditional Foods</h3>
      <p><strong>Muthokoi:</strong> Muthokoi is the most common dish eaten by the Kamba. It consists of dehulled maize kernels cooked with pigeon peas(mbaazi), onions, tomatoes and salt. Traditionally prepared over fire in clay pots or metal pans. </p>

      <h3>Music & Dance</h3>
      <p><strong>Kilumi dance:</strong> A spiritual rainmaking and celebratory dance led by women in metallic-accented attire. Men drum as women chant and dance rhythmically.</p>

      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/HMM7CTUNn8c?enablejsapi=1"
        title="Kamba Dance"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

      <audio id="background-audio" loop  hidden preload="auto" autoplay>
        <source src="/assets/audio/Kamba_Pewa.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
}
