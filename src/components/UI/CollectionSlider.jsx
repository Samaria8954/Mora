import { useState, useEffect } from "react";
import { Collection } from "./Collection";

export const CollectionSlider = ({ collections, isMobile }) => {
  const [activePage, setActivePage] = useState(0);

  const totalPages = isMobile ? 1 : 3;

  // Desktop → repeat 3 pages
  // Mobile → sirf ek page
  const repeatedPages = isMobile
    ? [collections]
    : Array.from({ length: totalPages }, () => collections);

  // Auto move pages (not inner scroll)
  useEffect(() => {
    if (totalPages <= 1) return;

    const auto = setInterval(() => {
      setActivePage((prev) => (prev + 1) % totalPages);
    }, 4000);

    return () => clearInterval(auto);
  }, [totalPages]);

  return (
    <div className="collection-slider">
      {/* Outer slider that moves whole pages */}
      <div
        className="collection-list-wrapper"
        style={{
          display: "flex",
          width: `${100 * totalPages}%`,
          transform: `translateX(-${activePage * (100 / totalPages)}%)`,
          transition: "transform 0.6s ease-in-out",
        }}
      >
        {repeatedPages.map((page, pageIndex) => (
          <div
            className="collection-page"
            key={pageIndex}
            style={{
              width: `${100 / totalPages}%`,
            }}
          >
            {/* Inner scrollable area */}
            <div className="collection-scroll">
              {page.map((col, idx) => (
                <div className="collection-item" key={`${col.id}-${idx}`}>
                  <Collection image={col.image} title={col.title} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Dots only for desktop */}
      {totalPages > 1 && (
        <ul className="collection-dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <li
              key={index}
              className={activePage === index ? "active" : ""}
              onClick={() => setActivePage(index)}
            ></li>
          ))}
        </ul>
      )}
    </div>
  );
};
