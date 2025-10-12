import { ReviewCard } from "./ReviewCard";
import { useNavigate } from "react-router-dom";

export const CustomerServices = () => {
    const navigate = useNavigate();
    return (
        <div className="collection-section">
            <div className="cards-heading">
                <h1 className="my-auto">Our Customer Reviews</h1>
                <button type="button" onClick={() => { navigate("/review"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>View All</button>
            </div>
            <div className="review-cards">
                <ReviewCard />
            </div>
        </div>
    );
};
