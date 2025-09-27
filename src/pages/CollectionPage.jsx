import { CollectionFilters } from "../components/UI/CollectionFilters";
import { CollectionHeroSection } from "../components/UI/CollectionHeroSection";
import { Footer } from "../components/UI/Footer";

export const CollectionPage = () => {
    return (
        <>
           <CollectionHeroSection />
           <CollectionFilters />
           <Footer bgImage="images/filter-footer-img.png"/>
        </>
    );
}; 