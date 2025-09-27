
import { AboutMora } from "../components/UI/AboutMora";
import { Cards } from "../components/UI/Cards";
import { CardsSection2 } from "../components/UI/CardsSection2";
import { CollectionSection } from "../components/UI/CollectionSection";
import { CollectionSection2 } from "../components/UI/CollectionSection2";
import { CustomerServices } from "../components/UI/CustomerServices";
import { Footer } from "../components/UI/Footer";
import { HeroSection } from "../components/UI/HeroSection";
import { VaseCollection } from "../components/UI/VaseCollection";
import {CardSection3} from "../components/UI/CardSection3";

export const Home = () => {
    return (
        <>
            <HeroSection />
            <CollectionSection  />
            <Cards />
            <CollectionSection2 />
            <CardSection3 />
            <AboutMora />
            <VaseCollection />
            <CardsSection2 />
            <CustomerServices />
            <Footer bgImage="/images/footer-img.png"/>
        </>
    );
};