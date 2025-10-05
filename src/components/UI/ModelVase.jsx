export const ModelVase = ({ catogery, discount, title, Perfectgift, flowering }) => {
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
            <div className="discription my-1 my-sm-3" >
                <button className="collection-name">
                    {catogery}
                </button>
                <button className="collection-gift">
                    {Perfectgift}
                </button>
            </div>
            <div className="addtocart">
                <button type="button">
                    Add To Cart
                </button>
            </div>

        </div>
    );
};
