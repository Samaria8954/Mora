import { useEffect, useState } from "react";

export const AboutMora = () => {
    const images = [
        "images/aboutpic.jpg",
        "images/aboutpic2.jpg",
        "images/aboutpic3.jpg"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto slide every 4 sec
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="about">
            <div className="collection-section">
               <div className="img-text">
                 <div className="about-img">

                    <div className="about-img-slider">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt=""
                                className={`slide ${index === currentIndex ? "active" : ""}`}
                            />
                        ))}

                        {/* Dots */}
                        <div className="slider-dots">
                            {images.map((_, index) => (
                                <span
                                    key={index}
                                    className={`dot ${index === currentIndex ? "active" : ""}`}
                                    onClick={() => setCurrentIndex(index)}
                                ></span>
                            ))}
                        </div>
                    </div>

                </div>
                <div className="about-text">
                    <button type="button">About Mora</button>
                    <h1>
                        Mora is a flower brand rooted in elegance, emotion, and nature.
                        Inspired by the quiet beauty of blooms, we craft thoughtful
                        arrangements that speak from the heart.
                    </h1>
                    <h1>
                        Every stem is carefully chosen, every bouquet a story —
                        simple, meaningful, and timeless.
                    </h1>
                </div>
               </div>
            </div>
        </div>
    );
};
