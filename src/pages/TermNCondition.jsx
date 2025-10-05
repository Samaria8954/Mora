import { ProductHeroSection } from "../components/UI/PoductHeroSection";
import { Footer } from "../components/UI/Footer";
import { TermNContent } from "../components/UI/TermContent";

export const TermNCondition = () => {
    return (
        <>
            <ProductHeroSection proTitle="Terms & Conditions" probgimg="/images/terms.jpg" />
            <TermNContent />
                {/* Footer */}
            <Footer bgImage="/images/product-footer.png" />
        </>
    );
}