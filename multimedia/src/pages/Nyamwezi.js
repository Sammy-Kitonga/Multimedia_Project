import React from "react";

export default function Nyamwezi() {
  return (
    <section className="section fade-in tribe-nyamwezi">
      <h2>Nyamwezi Tribe (Tanzania)</h2>

      <h3>Traditional Foods</h3>
      <p><strong>Ugali:</strong> Maize porridge with meat and greens (e.g., okra, pumpkin leaves).</p>
      <p><strong>Beer:</strong> Made from fermented millet, sorghum, or corn.</p>

      <h3>Economic Practices</h3>
      <ul>
        <li>Ivory trade and elephant hunting</li>
        <li>Farming and long-distance trade</li>
      </ul>

      <h3>Music & Dance</h3>
      <p>Hiari ya Moyo – storytelling dance troupe from Tabora.</p>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/5_C-RW4IqrA"
        title="Nyamwezi Dance"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <h3>Traditional Attire</h3>
      <ul>
        <li>Women: Bark cloth (historical), khangas/vitenge (modern)</li>
        <li>Men: Kanzu robes and kofia caps</li>
      </ul>

      <h3>Beliefs</h3>
      <p>Likube (God) and ancestor worship. Rainmaking rituals led by diviners.</p>

      {/* <audio controls>
        <source src="/audio/nyamwezi-beliefs.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio> */}
    </section>
  );
}
