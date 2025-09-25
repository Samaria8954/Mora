import { Sculpted } from "./Sculpted";
import { VaseHeading } from "./VaseHeading";

export const VaseCollection = () => {
    return (
        <div className="collection-section">
            <VaseHeading />
            <div className="Vase">
                <div className="vase-img">
                    <div className="vase-btns">
                        <button type="button">Shop Now</button>
                        <div className="expo">
                            <button type="button">Explore more</button>
                        </div>
                    </div>
                </div>
                <div className="vase-detail">
                    <Sculpted imgSrc="images/sculpted3.jpg" vases="Vases" />
                    <Sculpted imgSrc="images/sculpted2.jpg" vases="Artisanal" />
                    <Sculpted imgSrc="images/sculpted1.jpg" vases="Artisanal" />
                </div>
            </div>
        </div>
    );
};
