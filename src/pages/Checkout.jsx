
import { ProductHeroSection } from "../components/UI/PoductHeroSection";
import { Footer } from "../components/UI/Footer";
import { CheckoutContent } from "../components/UI/CheckoutContent";


export const Checkout = () => {

    return (
        <>
            <ProductHeroSection proTitle="Checkout" probgimg="/images/checkout.png" />

            <CheckoutContent />
            
            {/* Footer */}
            <Footer bgImage="/images/filter-footer-img.png" />
        </>
    );
};