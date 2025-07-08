import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section className="section fade-in home-intro">
      <h2>Discover the Heart of East African Heritage</h2>

      <div className="map-banner">
        <img
          src="./assets/images/EastAfrica.png"
          alt="Map of East Africa"
          className="animated-map"
        />
      </div>

      <p>
        East Africa is home to some of the most vibrant, diverse, and culturally rich communities on the continent. From the pastoral rhythms of the Kamba, to the royal heritage of the Buganda, and the highland farming of the Chagga, every tribe carries generations of wisdom, art, and identity.
      </p>

      <p>
        This project highlights six of East Africa's traditional tribes — each with unique practices in food, dance, beliefs, and craftsmanship. Through audio, video, and historical context, we invite you to experience the traditions that continue to shape daily life across the region.
      </p>

      <p className="signature">
        — The East African Cultural Heritage Team
      </p>
    </section>
  );
}
