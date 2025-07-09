import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: "50%", left: "50%" });
  const navigate = useNavigate();

  const handleCountryClick = (country, event) => {
    // Get the click position
    const { clientX, clientY } = event;
    setModalPosition({ top: `${clientY}px`, left: `${clientX}px` });
    setSelectedCountry(country);
  };

  const handleTribeSelection = (tribe) => {
    navigate(`/${tribe}`);
    setSelectedCountry(null);
  };

  return (
    <section className="section fade-in home-intro">
      <h2>Discover the Heart of East African Heritage</h2>

      <div className="map-banner">
        <img
          src="./assets/images/EastAfrica.png"
          alt="Map of East Africa"
          className="animated-map"
        />
        <div
          className="map-region kenya-region"
          onClick={(event) => handleCountryClick("Kenya", event)}
          title="Kenya"
        ></div>
        <div
          className="map-region uganda-region"
          onClick={(event) => handleCountryClick("Uganda", event)}
          title="Uganda"
        ></div>
        <div
          className="map-region tanzania-region"
          onClick={(event) => handleCountryClick("Tanzania", event)}
          title="Tanzania"
        ></div>
        <div
          className="map-region rwanda-region"
          onClick={(event) => handleCountryClick("Rwanda", event)}
          title="Rwanda"
        ></div>
      </div>

      {selectedCountry && (
        <div
          className="country-modal"
          style={{
            top: modalPosition.top,
            left: modalPosition.left,
            transform: "translate(-50%, -50%)",
          }}
        >
          <h3>{selectedCountry} Tribes</h3>
          <div className="tribe-options">
            {selectedCountry === "Kenya" && (
              <>
                <div
                  className="tribe-option"
                  onClick={() => handleTribeSelection("kamba")}
                >
                  Kamba
                </div>
                <div
                  className="tribe-option"
                  onClick={() => handleTribeSelection("kikuyu")}
                >
                  Kikuyu
                </div>
              </>
            )}
            {selectedCountry === "Uganda" && (
              <>
                <div
                  className="tribe-option"
                  onClick={() => handleTribeSelection("banyakole")}
                >
                  Banyakole
                </div>
                <div
                  className="tribe-option"
                  onClick={() => handleTribeSelection("buganda")}
                >
                  Buganda
                </div>
              </>
            )}
            {selectedCountry === "Tanzania" && (
              <>
                <div
                  className="tribe-option"
                  onClick={() => handleTribeSelection("nyamwezi")}
                >
                  Nyamwezi
                </div>
                <div
                  className="tribe-option"
                  onClick={() => handleTribeSelection("sukuma")}
                >
                  Sukuma
                </div>
              </>
            )}
            {selectedCountry === "Rwanda" && (
              <>
                <div
                  className="tribe-option"
                  onClick={() => handleTribeSelection("rwanda")}
                >
                  Rwandan Culture
                </div>
              </>
            )}
          </div>
          <button onClick={() => setSelectedCountry(null)}>Close</button>
        </div>
      )}

      <p>
        East Africa is home to some of the most vibrant, diverse, and culturally rich communities on the continent. From the pastoral rhythms of the Kamba, to the royal heritage of the Buganda, the highland farming of the Sukuma, and the unified cultural heritage of Rwanda, every community carries generations of wisdom, art, and identity.
      </p>

      <p>
        This project highlights seven of East Africa's traditional cultures — each with unique practices in food, dance, beliefs, and craftsmanship. Through detailed cultural information and historical context, we invite you to experience the traditions that continue to shape daily life across Kenya, Uganda, Tanzania, and Rwanda.
      </p>

      <p className="signature">
        — The East African Cultural Heritage Team
      </p>
    </section>
  );
}