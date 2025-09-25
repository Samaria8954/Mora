import { useState, useEffect, useRef } from "react";
import { Collection } from "./Collection";

export const CollectionSlider = ({ collections }) => {
  const [active, setActive] = useState(0);
  const listRef = useRef(null);

  const totalDots = 3;

  // auto move
  useEffect(() => {
    const auto = setInterval(() => {
      setActive((prev) => (prev + 1) % collections.length);
      if (listRef.current) {
        const scrollAmount = listRef.current.scrollWidth / collections.length;
        listRef.current.scrollTo({
          left: ((active + 1) % collections.length) * scrollAmount,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(auto);
  }, [active, collections]);

  return (
    <div className="collection-slider">
      <div className="collection-list" ref={listRef}>
        {collections.map((col) => (
          <div className="collection-item" key={col.id}>
            <Collection image={col.image} title={col.title} />
          </div>
        ))}
      </div>

      <ul className="collection-dots">
        {Array.from({ length: totalDots }).map((_, index) => (
          <li
            key={index}
            className={Math.floor(active / 3) === index ? "active" : ""}
            onClick={() => {
              if (listRef.current) {
                const scrollAmount = listRef.current.scrollWidth / collections.length;
                listRef.current.scrollTo({
                  left: index * 3 * scrollAmount,
                  behavior: "smooth",
                });
                setActive(index * 3);
              }
            }}
          ></li>
        ))}
      </ul>
    </div>
  );
};
