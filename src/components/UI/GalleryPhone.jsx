import { useState, useEffect } from "react";
import { GalleryCardsSection2 } from "./GalleryCardsSection2";
import { PerfectGift } from "./PerfectGift";

export const GalleryPhone = () => {
  const images = [
    "images/gallery2.jpg",
    "images/gallery1.jpg",
    "images/gallery3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  // ✅ Auto play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3s per slide

    return () => clearInterval(interval); // cleanup on unmount
  }, [images.length]);

  // Slider pages (3 slides only, as per your requirement)
  const sliderPages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
  ];

  return (
    <>
      <div className="product-detail">
        <div className="product-img">
          <div className="gallery-slider">
            {/* Slider container */}
            <div
              className="slides"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {sliderPages.map((img, idx) => (
                <div className="slide" key={idx}>
                  <img src={img} alt={`slide-${idx}`} />
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button>🤍</button>
              <button>➤</button>
              <button onClick={() => setFullscreen(true)}>⛶</button>
            </div>

            {/* Fullscreen Overlay */}
            {fullscreen && (
              <div className="fullscreen-overlay">
                <span onClick={() => setFullscreen(false)}>&times;</span>
                <img src={images[currentIndex]} alt="Fullscreen" />
              </div>
            )}

            {/* Slider Dots */}
            <div className="slider-dots">
              {sliderPages.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === 0 ? "active" : ""}`} // dot always for 3 visible pages
                  onClick={() => setCurrentIndex(idx)}
                ></span>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- Product Text Section ---------- */}
        <div className="product-text">
          <div className="pro-head">
            <h6>OMR</h6>
            <h5>40</h5>
            <span>60</span>
          </div>
          <h6>Blush Elegance – Pink Roses Bouquet</h6>
           <PerfectGift />
        </div>
      </div>

      <div className="product-discription">
        <h2>About Product</h2>
        <h6>
          Discover the joy of floral artistry with our premium DIY letterbox
          bouquet. Designed for those who appreciate the beauty of a hands-on
          experience, this thoughtfully curated arrangement features a harmonious
          blend of seasonal blooms in soft pink tones.
          <br />
          <br />
          From elegant lilies to delicate carnations and accent filler flowers,
          every stem is selected for its freshness and charm. Whether it’s a gift
          or a treat for yourself, this bouquet brings an air of grace and
          personal touch to any home.
          <br />
          <br />
          Enjoy the slow unfolding of blooms as they open naturally, reminding
          you that beauty often lies in the process.
        </h6>
      </div>

      <div className="gallery-payment">
        <button type="button">
          <img src="images/CARD&1.png" alt="" />
        </button>
        <button type="button">
          <img src="images/CARD&2.png" alt="" />
        </button>
        <button type="button">
          <img src="images/CARD&3.png" alt="" />
        </button>
      </div>

      <GalleryCardsSection2 />
    </>
  );
};
