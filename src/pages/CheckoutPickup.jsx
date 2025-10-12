import { ProductHeroSection } from "../components/UI/PoductHeroSection";
import { Footer } from "../components/UI/Footer";
import { PickupCheckout } from "../components/UI/PickupCheckout";


export const CheckoutPickup = () => {

    return (
        <>
            <ProductHeroSection proTitle="Checkout" probgimg="/images/checkout.png" />

            <PickupCheckout />
            
            {/* Footer */}
            <Footer bgImage="/images/filter-footer-img.png" />
        </>
    );
};