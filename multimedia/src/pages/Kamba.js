import React, { useEffect, useRef, useState } from "react";
import MorphingCard from "../components/MorphingCard";
import "../App.css";

export default function Kamba() {
  const audioRef = useRef(null);
  const [audioBlocked, setAudioBlocked] = useState(false);

  useEffect(() => {
    const attemptAutoplay = async () => {
      const audio = audioRef.current;
      if (audio) {
        try {
          // Set volume to a reasonable level
          audio.volume = 0.3;
          
          // Try to play immediately
          await audio.play();
          console.log("Audio started successfully");
          setAudioBlocked(false);
        } catch (error) {
          console.warn("Autoplay failed:", error);
          setAudioBlocked(true);
          
          // Try alternative approaches
          attemptDelayedPlay();
        }
      }
    };

    const attemptDelayedPlay = () => {
      // Try again after a short delay
      setTimeout(async () => {
        try {
          await audioRef.current?.play();
          setAudioBlocked(false);
        } catch (error) {
          // Set up click listener as fallback
          setupClickListener();
        }
      }, 100);
    };

    const setupClickListener = () => {
      const handleFirstClick = async () => {
        try {
          await audioRef.current?.play();
          setAudioBlocked(false);
          document.removeEventListener('click', handleFirstClick);
          document.removeEventListener('keydown', handleFirstClick);
          document.removeEventListener('touchstart', handleFirstClick);
        } catch (error) {
          console.warn("Click-triggered play failed:", error);
        }
      };

      document.addEventListener('click', handleFirstClick);
      document.addEventListener('keydown', handleFirstClick);
      document.addEventListener('touchstart', handleFirstClick);
    };

    // Start the autoplay attempt
    attemptAutoplay();

    // Cleanup function
    return () => {
      const audio = audioRef.current;
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  return (
    <section className="section fade-in tribe-kamba">
      <h2>Kamba Tribe (Kenya)</h2>
      
      {audioBlocked && (
        <div style={{
          background: '#fef3c7',
          border: '1px solid #f59e0b',
          borderRadius: '8px',
          padding: '10px',
          margin: '10px 0',
          textAlign: 'center',
          fontSize: '0.9rem',
          color: '#92400e'
        }}>
          🎵 Background music is available - click anywhere to enable it
        </div>
      )}

      <MorphingCard icon="🍲" title="Traditional Foods">
        <p>
          <strong>Muthokoi:</strong> Muthokoi is the most common dish eaten by the Kamba. It consists of dehulled maize kernels cooked with pigeon peas (mbaazi), onions, tomatoes, and salt. Traditionally prepared over fire in clay pots or metal pans.
        </p>
      </MorphingCard>

      <MorphingCard icon="🎶" title="Music & Dance">
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

      <audio 
        ref={audioRef}
        loop 
        preload="auto"
        style={{ display: 'none' }}
      >
        <source src="/assets/audio/Kamba_Pewa.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
}