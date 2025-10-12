import { useNavigate } from "react-router-dom";

export const VaseHeading = () => {
    const navigate = useNavigate();
    return (
            <div className="cards-heading">
                <h1 className="my-auto">Timeless Vase Collection</h1>
                <button type="button" onClick={() => { navigate("/collection"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>View All</button>
            </div>
    );
};