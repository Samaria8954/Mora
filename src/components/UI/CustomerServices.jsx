import { ReviewCard } from "./ReviewCard";

export const CustomerServices = () => {
    return (
        <div className="collection-section">
            <div className="cards-heading">
                <h1 className="my-auto">Our Customer Reviews</h1>
                <button type="button" >View All</button>
            </div>
            <div className="review-cards">
                <ReviewCard />
            </div>
        </div>
    );
};
