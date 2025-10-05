import { useEffect, useState } from "react";
import { ProductHeroSection } from "../components/UI/PoductHeroSection";
import { Footer } from "../components/UI/Footer";
import { CartContent } from "../components/UI/CartContent";

export const CartPage = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < 576);
        checkScreen();

        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <>
            <ProductHeroSection proTitle="Your Basket" probgimg="/images/valentines.jpg" />
            <CartContent />
            {/* Footer */}
            {isMobile ? (
                <Footer bgImage="/images/footer-img.png" />
            ) : (
                <Footer bgImage="/images/product-footer.png" />
            )}

        </>
    );
};