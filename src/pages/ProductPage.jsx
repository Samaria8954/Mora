import { Navbar } from "../components/UI/navbar";
import { Footer } from "../components/UI/Footer";
import { Gallery } from "../components/UI/GalleryImage";
import { useEffect, useState } from "react";
import { GalleryPhone } from "../components/UI/GalleryPhone";
import { ProductHeroSection } from "../components/UI/PoductHeroSection";


export const ProductPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 576);
    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
     <ProductHeroSection proTitle="Valentines Special" probgimg="/images/valentines.jpg"/>

      {/* Gallery */}
      {isMobile ? <GalleryPhone /> : <Gallery />}
 
      {/* Footer */}
      {isMobile ? (
        <Footer bgImage="/images/footer-img.png" />
      ) : (
        <Footer bgImage="/images/product-footer.png" />
      )}


      {isMobile && (
        <div className="addbasket">
          <button type="button">Add To Basket</button>
        </div>
      )}
    </>
  );
};
