import { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { TbTruckDelivery } from 'react-icons/tb';
import { RiFlowerFill } from "react-icons/ri";
import { PerfectGift } from './PerfectGift';




export const Gallery = () => {
    const images = [
        "images/gallery1.jpg",
        "images/gallery2.jpg",
        "images/gallery3.jpg",
        "images/gallery4.jpg",
        "images/gallery5.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(1);
    const [fullscreen, setFullscreen] = useState(false);


    return (
        <>

            <div className="collection-section">
                {/* Product Section */}
                <div className="product-detail">
                    <div className="product-img">
                        <div className="gallery-wrapper">
                            <div className="gallery-container">
                                <div className="main-image">
                                    <img
                                        src={images[currentIndex]}
                                        alt="Main"
                                        onClick={() => setFullscreen(true)}
                                    />
                                    <div className="action-buttons">
                                        <button>🤍</button>
                                        <button>➤</button>
                                        <button onClick={() => setFullscreen(true)}>⛶</button>
                                    </div>
                                </div>

                                <div className="thumbnails">
                                    {images.map((img, idx) => (
                                        <img
                                            key={idx}
                                            src={img}
                                            alt={`thumb-${idx}`}
                                            className={currentIndex === idx ? "active" : ""}
                                            onClick={() => setCurrentIndex(idx)}
                                        />
                                    ))}
                                </div>
                            </div>

                            {fullscreen && (
                                <div className="fullscreen-overlay">
                                    <span onClick={() => setFullscreen(false)}>&times;</span>
                                    <img src={images[currentIndex]} alt="Fullscreen" />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="product-text">
                        <div className="pro-head">
                            <h6>OMR</h6>
                            <h5>40</h5>
                        </div>
                        <h6>Blush Elegance – Pink Roses Bouquet</h6>
                        <div className="order-now">
                            <button type="button">Order Now</button>
                        </div>
                        <div className="basket">
                            <button type="button">Basket</button>
                        </div>
                        <PerfectGift />

                        <div className="features-gallery">
                            <div className="feature1">
                                <div className="feature-icon">
                                    <FaLocationDot className="icon-nav" />
                                </div>
                                <div className="feature-text">
                                    <h5>No Address hassle</h5>
                                    <h6>We will collect the address for you</h6>
                                </div>
                            </div>

                            <div className="feature2">
                                <div className="feature-icon">
                                    <RiFlowerFill className="icon-nav" />
                                </div>
                                <div className="feature-text">
                                    <h5>Premium Flowers</h5>
                                    <h6>Sourced from the best farm</h6>
                                </div>
                            </div>

                            <div className="feature3">
                                <div className="feature-icon">
                                    <TbTruckDelivery className="icon-nav" />
                                </div>
                                <div className="feature-text">
                                    <h5>Free Delivery</h5>
                                    <h6>on order over OMR 32</h6>
                                </div>
                            </div>
                        </div>

                        <div className="gallery-payment">
                            <h6 className="ps-1 pe-4">Way To Proceed</h6>
                            <button type="button"><img src="images/CARD&1.png" alt="" /></button>
                            <button type="button"><img src="images/CARD&2.png" alt="" /></button>
                            <button type="button"><img src="images/CARD&3.png" alt="" /></button>
                        </div>
                    </div>
                </div>

                <div className="product-discription">
                    <h2>About Product</h2>
                    <h6>
                        Discover the joy of floral artistry with our premium DIY letterbox bouquet.
                        Designed for those who appreciate the beauty of a hands-on experience...
                    </h6>
                </div>
            </div>
        </>
    );
};
