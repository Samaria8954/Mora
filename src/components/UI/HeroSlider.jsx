import { useState, useEffect, useCallback } from "react";
import { BsStars } from "react-icons/bs";
import { Navbar } from "./navbar";

export const HeroSlider = () => {
    const slides = [
        {
            id: 1,
            content: (
                <div className="image-container bg1">
                    <Navbar />
                    <div className="hero-text">
                        <h1>Send Love In Every Petal</h1>
                        <h6>
                            Brighten someone’s day with fresh, handpicked flowers delivered to their doorstep.
                            From romantic roses to cheerful sunflowers, find the perfect bloom for every moment.
                        </h6>
                        <button type="button" className="btn-desktop" >
                            Deliver a Little Magic Today
                            <BsStars style={{ color: "goldenrod", fontSize: "20px", marginLeft: "5px" }} />
                        </button>
                        <button type="button" className="btn-mobile">
                           Gift Now
                            <BsStars style={{ color: "goldenrod", fontSize: "20px", marginLeft: "5px" }} />
                        </button>
                    </div>
                </div>
            ),
        },
        {
            id: 2,
            content: (
                <div className="image-container bg2">
                    <Navbar />
                    <div className="hero-text">
                        <h1>Send Love In Every Petal</h1>
                        <h6>
                            Brighten someone’s day with fresh, handpicked flowers delivered to their doorstep.
                            From romantic roses to cheerful sunflowers, find the perfect bloom for every moment.
                        </h6>
                       <button type="button" className="btn-desktop" >
                            Deliver a Little Magic Today
                            <BsStars style={{ color: "goldenrod", fontSize: "20px", marginLeft: "5px" }} />
                        </button>
                        <button type="button" className="btn-mobile">
                           Gift Now
                            <BsStars style={{ color: "goldenrod", fontSize: "20px", marginLeft: "5px" }} />
                        </button>
                    </div>
                </div>
            ),
        },
        {
            id: 3,
            content: (
                <div className="image-container bg3">
                    <Navbar />
                    <div className="hero-text">
                        <h1>Send Love In Every Petal</h1>
                        <h6>
                            Brighten someone’s day with fresh, handpicked flowers delivered to their doorstep.
                            From romantic roses to cheerful sunflowers, find the perfect bloom for every moment.
                        </h6>
                        <button type="button" className="btn-desktop" >
                            Deliver a Little Magic Today
                            <BsStars style={{ color: "goldenrod", fontSize: "20px", marginLeft: "5px" }} />
                        </button>
                        <button type="button" className="btn-mobile">
                           Gift Now
                            <BsStars style={{ color: "goldenrod", fontSize: "20px", marginLeft: "5px" }} />
                        </button>
                    </div>
                </div>
            ),
        },
    ];

    const [active, setActive] = useState(0);
    const length = slides.length - 1;

    //  nextSlide function stable banane ke liye useCallback
    const nextSlide = useCallback(() => {
        setActive((prev) => (prev === length ? 0 : prev + 1));
    }, [length]);


    //  auto slide
    useEffect(() => {
        const auto = setInterval(nextSlide, 4000);
        return () => clearInterval(auto);
    }, [nextSlide]);

    return (
        <div className="slider">
            <div className="list" style={{ left: `-${active * 100}%` }}>
                {slides.map((slide) => (
                    <div className="item" key={slide.id}>
                        {slide.content}
                    </div>
                ))}
            </div>

           

            {/* dots */}
            <ul className="dots">
                {slides.map((_, index) => (
                    <li
                        key={index}
                        className={active === index ? "active" : ""}
                        onClick={() => setActive(index)}
                    ></li>
                ))}
            </ul>
        </div>
    );
};
