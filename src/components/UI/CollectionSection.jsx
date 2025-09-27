import { useState, useEffect } from "react";
import { CollectionSlider } from "./CollectionSlider";

export const CollectionSection = () => {
    const desktopData = [
        { id: 1, image: "images/1.png", title: "Eid Collection" },
        { id: 2, image: "images/2.png", title: "Mother's Day" },
        { id: 3, image: "images/3.png", title: "Ramadan Collection" },
        { id: 4, image: "images/4.png", title: "All" },
        { id: 5, image: "images/5.png", title: "Teacher's Day" },
        { id: 6, image: "images/6.png", title: "Premium Collection" },
        { id: 7, image: "images/7.png", title: "Bouquet" },
    ];

    const mobileData = [
        { id: 1, image: "images/moon.png", title: "Eid Collection" },
        { id: 2, image: "images/2.png", title: "Mother's Day" },
        { id: 3, image: "images/ramadan.png", title: "Ramadan Collection" },
        { id: 4, image: "images/teacher.png", title: "Teacher's Day" },
        { id: 5, image: "images/4.png", title: "All" },
        { id: 6, image: "images/6.png", title: "Premium Collection" },
        { id: 7, image: "images/7.png", title: "Bouquet" },
    ];

     
    const [collections, setCollections] = useState(desktopData);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 576) {
                setCollections(mobileData);
            } else {
                setCollections(desktopData);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="collection-section">
            <h1>Flowers For Every Moment</h1>
            <CollectionSlider collections={collections}  />
        </div>
    );
};
