export const Sculpted = ({ vases , imgSrc}) => {
    return (
        <div className="flow">
            <div className="flow1">
                <button type="button">48% Off</button>
                <img src={imgSrc} alt="" />
            </div>
            <div className="flow2">
                <h2>Sculpted Flow – Designer Vase</h2>
                <div className="price">
                    <h6>OMR</h6>
                    <h5>40</h5>
                    <span>60</span>
                </div>
                <div className="discription my-1 my-sm-3">
                    <button className="collection-name">
                        🎨 {vases}
                    </button>
                    <button className="collection-gift" style={{color:"black"}}>
                        🎁 Gift Ready
                    </button>
                </div>
               <div className="addtocart">
                 <button type="button">
                    Add To Cart
                </button>
               </div>
            </div>
        </div>
    );
};
