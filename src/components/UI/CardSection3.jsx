import { useEffect, useState } from "react";
import { CollectionCards } from "./CollectionCards";
import { useNavigate } from "react-router-dom";

export const CardSection3 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

const navigate = useNavigate();


  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 576);
    checkScreen(); // initial check
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // ❌ Agar mobile nahi hai to render hi mat karo
  if (!isMobile) return null;

  return (
    <div className="collection-section">
      <div className="cards-heading">
        <h1 className="my-auto">Mark The Moment</h1>
        <button type="button" onClick={() => { navigate("/collection"); window.scrollTo({ top: 0, behavior: "smooth" }); }} >View All</button>
      </div>
      <div className="cards">
        <CollectionCards
          flowering="images/flower1.png"
          title="Blush Elegance – Pink Roses Bouquet"
          catogery="💖 Romantic Choice"
          discount="50"
          Perfectgift="💐 Perfect gift"
        />
        <CollectionCards
          flowering="images/flower3.png"
          title="Blush Elegance – Pink Roses Bouquet"
          catogery="💖 Romantic Choice"
          discount="50"
          Perfectgift="💐 Perfect gift"
        />
        <CollectionCards
          flowering="images/flower2.png"
          title="Blush Elegance – Pink Roses Bouquet"
          catogery="💖 Romantic Choice"
          discount="50"
          Perfectgift="💐 Perfect gift"
        />
        <CollectionCards
          flowering="images/flower4.png"
          title="Blush Elegance – Pink Roses Bouquet"
          catogery="💖 Romantic Choice"
          discount="48"
          Perfectgift="💐 Perfect gift"
        />
      </div>
    </div>
  );
};
