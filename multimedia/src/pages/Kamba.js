import React from "react";

export default function Kamba() {
  return (
    <section className="section fade-in tribe-kamba">
      <h2>Kamba Tribe (Kenya)</h2>

      <h3>Traditional Foods</h3>
      <p><strong>Muthokoi:</strong> Maize kernels and pigeon peas cooked with onions and tomatoes over fire.</p>

      <h3>Economic Practices</h3>
      <ul>
        <li>Agriculture: Maize, millet, beans</li>
        <li>Beekeeping with hollowed tree hives</li>
      </ul>

      <h3>Music & Dance</h3>
      <p>Kilumi dance during weddings and rain prayers.</p>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/HMM7CTUNn8c"
        title="Kamba Dance"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <h3>Beliefs</h3>
      <p>Honoring ancestors by pouring beer on the ground before drinking.</p>

      <h3>Traditional Practices</h3>
      <p><strong>Ntheo:</strong> A marriage rite involving slaughter at the bride’s home.</p>

      <audio controls>
        <source src="/audio/kamba-intro.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
}
