import { useEffect, useState } from "react";
import { CollectionFilters } from "../components/UI/CollectionFilters";
import { CollectionHeroSection } from "../components/UI/CollectionHeroSection";
import { Filter } from "../components/UI/Filter";
import { FilterMobile } from "../components/UI/FilterMobile";
import { Footer } from "../components/UI/Footer";

export const CollectionPage = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);



    return (
        <>
            <CollectionHeroSection />
            <CollectionFilters />
            {isMobile ? (
                <FilterMobile repeatPages={10} />
            ) : (
                <Filter repeatPages={10} />
            )}
            <Footer bgImage="images/filter-footer-img.png" />
        </>
    );
}; 