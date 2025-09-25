
import { useEffect, useState } from "react";
import { CollectionSlider } from "./CollectionSlider";

export const CollectionSection2 = () => {
    const OnlyMobile = [
        { id: 1, image: "images/1.png", title: "Eid Collection" },
        { id: 2, image: "images/6.png", title: "Mother's Day" },
        { id: 3, image: "images/4.png", title: "Ramadan Collection" },
        { id: 4, image: "images/3.png", title: "All" },
        { id: 5, image: "images/5.png", title: "Teacher's Day" },
        { id: 6, image: "images/2.png", title: "Premium Collection" },
        { id: 7, image: "images/7.png", title: "Bouquet" },
    ];

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 576);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!isMobile) return null; // sirf mobile view pr show hoga

    return (
        <div className="collection-section">
            <h1>Gift For Every Collection</h1>
            <CollectionSlider collections={OnlyMobile} />
        </div>
    );
};
