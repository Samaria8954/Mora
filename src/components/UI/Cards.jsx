import { useEffect, useState } from "react";
import { CollectionCards } from "./CollectionCards";
import { useNavigate } from "react-router-dom";

export const Cards = () => {
  const [isMobile, setIsMobile] = useState(false);
 const navigate = useNavigate();

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 576);
    checkScreen(); // initial check
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="collection-section">
      <div className="cards-heading">
        <h1 className="my-auto">Bestsellers of the Season</h1>
        <button type="button" onClick={() => { navigate("/collection"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>View All</button>
      </div>
      <div className="cards">
        <CollectionCards
          flowering="images/flower1.png"
          title="Blush Elegance – Pink Roses Bouquet"
          catogery={isMobile ? "💖 Romantic Choice" : "🩷 Eid Collection"}
          discount="50"
          Perfectgift="💐 Perfect gift"
        />
        <CollectionCards
          flowering={isMobile ? "images/flower3.png" :"images/flower2.png"}
          title="Blush Elegance – Pink Roses Bouquet"
          catogery={isMobile ? "💖 Romantic Choice" : "🩷 Mother's Day"}
          discount={isMobile ? "50" : "48"}
          Perfectgift="💐 Perfect gift"
        />
        <CollectionCards
           flowering={isMobile ? "images/flower2.png" :"images/flower3.png"}
          title="Blush Elegance – Pink Roses Bouquet"
          catogery={isMobile ? "💖 Romantic Choice" : "🩷 Premium Collection"}
          discount="50"
          Perfectgift="💐 Perfect gift"
        />
        <CollectionCards
          flowering="images/flower4.png"
          title="Blush Elegance – Pink Roses Bouquet"
          catogery={isMobile ? "💖 Romantic Choice" : "🩷 Bouquet"}
          discount="48"
          Perfectgift="💐 Perfect gift"
        />
      </div>
    </div>
  );
};
