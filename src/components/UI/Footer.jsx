import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Footer = ({bgImage}) => {
    return (
        <>
            <div
                className="footer"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    padding: "2rem",
                    color: "white",
                }}
            >
                <div className="footer-text">
                    <h1>Bestseller of the Season</h1>
                    <h6>Mora is a flower brand rooted in elegance, </h6>
                    <div className="footer-btn">
                        <button type="button">Shop Now</button>
                        <div className="insta">
                            <button type="button">Check Our Instagram</button>
                        </div>
                    </div>
                </div>
                <div className="Mora-footer">
                    <div className="container">
                        <div className="Mora-section">
                            <div className="footer1">
                                <h1>Mora</h1>
                                <h6>Mora is a flower brand rooted in elegance, emotion, and nature. Inspired by the quiet beauty of blooms.</h6>
                                <div className="insta-icon">
                                    <FontAwesomeIcon icon={faInstagram} className="icon-size" />
                                </div>
                            </div>
                            <div className="footer2">
                                <div className="footer21">
                                    <ul>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">FAQs</a></li>
                                        <li><a href="#">Shipping & Delivery</a></li>
                                        <li><a href="#">Returns & Refunds</a></li>
                                        <li><a href="#">Order Tracking</a></li>
                                    </ul>
                                </div>
                                <div className="footer22">
                                    <ul>
                                        <li><a href="#">Payment Options</a></li>
                                        <li><a href="#">How to Order</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Refund Policy</a></li>
                                        <li>
                                            <div className="pay-cards">
                                                <img src="images/card1.png" alt="" />
                                                <img src="images/card2.png" alt="" />
                                                <img src="images/card3.png" alt="" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="MORA-img">
                        <img src="images/MORA.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};