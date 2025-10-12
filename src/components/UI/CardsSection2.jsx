import { useEffect, useState } from "react";
import { CollectionCards } from "./CollectionCards";
import { useNavigate } from "react-router-dom";

export const CardsSection2 = () => {
  const [isMobile, setIsMobile] = useState(false);
const navigate = useNavigate();

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 576);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const cardsData = [
    { id: 1, flowering:"images/sculpted2.jpg", title: "Modern Minimal – Ceramic Vase" },
    { id: 2, flowering: "images/flower2.png", title: "Modern Minimal – Ceramic Vase" },
    { id: 3, flowering: "images/sculpted3.jpg", title: "Modern Minimal – Ceramic Vase" },
    { id: 4, flowering: "images/flower1.png", title: "Modern Minimal – Ceramic Vase" },
  ];

  // Mobile order: 1 → 3 → 2 → 4
  const orderedCards = isMobile
    ? [cardsData[0], cardsData[2], cardsData[1], cardsData[3]]
    : cardsData;

  return (
    <div className="collection-section">
      <div className="cards-heading">
        <h1 className="my-auto">Timeless Vase Collection</h1>
        <button
          type="button"
          style={{ backgroundColor: "#6B05723D", color: "black" }} onClick={() => { navigate("/collection"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          See All
        </button>
      </div>

      <div className="cards">
        {orderedCards.map((card, index) => (
          <CollectionCards
            key={index}
            flowering={card.flowering}
            title={card.title}
            catogery={isMobile ? "🩷 Romantic Choice" : "🎁 Great Gift"}
            discount={index % 2 === 0 ? "50" : "48"}
            Perfectgift="🌿 Flower-Ready"
          />
        ))}
      </div>
    </div>
  );
};
