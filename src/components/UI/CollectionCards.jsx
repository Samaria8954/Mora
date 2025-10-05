import { DynamicPerfect } from "./DynamicPerfect";

export const CollectionCards = ({ discount, title, flowering, catogery, Perfectgift }) => {
    return (
        <div className="collection-cards">

            <div className="off">
                <button type="button">{discount}% Off</button>
            </div>
            <img src={flowering} alt="" />
            <h4 className="me-5">{title}</h4>
            <div className="price mt-3 mt-sm-1">
                <h6>OMR</h6>
                <h5>40</h5>
                <span>60</span>
            </div>
            <DynamicPerfect
                catogery={catogery}
                Perfectgift={Perfectgift}
            />

        </div>
    );
};
