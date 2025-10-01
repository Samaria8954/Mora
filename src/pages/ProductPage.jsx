import { Navbar } from "../components/UI/navbar";
import { Footer } from "../components/UI/Footer";
import { Gallery } from "../components/UI/GalleryImage";

export const ProductPage = () => {
    return (
      <>
      <Navbar />
      <Gallery />
    <Footer bgImage="/images/product-footer.png" />
      </>
    );
};