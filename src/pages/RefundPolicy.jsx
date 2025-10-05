import { ProductHeroSection } from "../components/UI/PoductHeroSection";
import { Footer } from "../components/UI/Footer";
import { RefundContent } from "../components/UI/RefundContent";


export const RefundPolicy = () => {
    return (
        <>
            <ProductHeroSection proTitle="Refund Policy" probgimg="/images/terms.jpg" />
            <RefundContent />
                {/* Footer */}
            <Footer bgImage="/images/product-footer.png" />
        </>
    );
}