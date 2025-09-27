import { CollectionSlider } from "./CollectionSlider";


export const CollectionFilters = () => {
    const collections = [
        { id: 1, image: "images/moon.png", title: "Eid Collection" },
        { id: 2, image: "images/2.png", title: "Mother's Day" },
        { id: 3, image: "images/ramadan.png", title: "Ramadan Collection" },
        { id: 4, image: "images/3.png", title: "All" },
        { id: 5, image: "images/teacher.png", title: "Teacher's Day" },
        { id: 6, image: "images/6.png", title: "Premium Collection" },
        { id: 7, image: "images/flower3.png", title: "Bouquet" },
        { id: 8, image: "images/4.png", title: "Graduation" },
        { id: 9, image: "images/menu-card.png", title: "Birthday Gifts" },
      { id: 2, image: "images/2.png", title: "Mother's Day" },
        { id: 11, image: "images/flower2.png", title: "Flower Box" },
        { id: 12, image: "images/5.png", title: "Seasonal Flowers" },
    ];

    return (
        <div className="collection-section ">
            <CollectionSlider collections={collections} />
        </div>
    );
};
