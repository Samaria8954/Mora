import { BsStars } from "react-icons/bs";
import { CollectionNavbar } from "./CollectionNavbar";
import { LoginNav } from "./LoginNav";


export const CollectionHeroSection = () => {
    return (
        <>
            <div className="purple-box">
                <div className="container-section">
                        <CollectionNavbar />
                    <div className="hero-text2">
                        <h1>Flowers Collection</h1>
                        <h6>
                            Brighten someone’s day with fresh, handpicked flowers delivered to their doorstep.
                            From romantic roses to cheerful sunflowers, find the perfect bloom for every moment.
                        </h6>
                        <button type="button" className="btn-desktop" >
                            Deliver a Little Magic Today
                            <BsStars style={{ color: "goldenrod", fontSize: "20px", marginLeft: "5px" }} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="login-nav">
                <LoginNav />
            </div>
        </>
    );
};