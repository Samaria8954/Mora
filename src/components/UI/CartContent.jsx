
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ModelPerfect } from './ModelPerfect';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';
import { RiEBike2Fill } from "react-icons/ri";
import { RiCouponLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa";

export const CartContent = () => {

    const [tabValue, setTabValue] = useState("one");
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
    const [quantity, setQuantity] = useState(1);
    const handleIncrease = () => setQuantity(prev => prev + 1);
    const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    return (
        <>
            <div className="collection-section">
                <div className="cart-content mb-5">
                    <div className="cart-basket">
                        <h1>Basket</h1>
                        <div className="your-picks">
                            <div className="picks d-flex ">
                                <h4>Your Picks</h4>
                                <h5 className='d-sm-none ms-auto pick-price'>OMR-19</h5>
                            </div>
                            <div className="bunch">
                                <div className="b-flower">
                                    <div className="b-img">
                                        <img src="images/3.png" alt="" />
                                    </div>
                                    <div className="b-heading">
                                        <h5>Bunch Flower</h5>
                                        <button type='button'><IoClose style={{ fontSize: "20px", color: "#6C7275" }} />Remove</button>
                                    </div>
                                </div>
                                <div className="b-count">
                                    <button onClick={handleDecrease} className="qty-btn">
                                        <FaMinus />
                                    </button>
                                    <span className="qty-value">{quantity}</span>
                                    <button onClick={handleIncrease} className="qty-btn">
                                        <FaPlus />
                                    </button>
                                </div>
                                <div className="b-price">
                                    <h5>OMR-19</h5>
                                </div>
                            </div>
                            <div className="bunch">
                                <div className="b-flower">
                                    <div className="b-img">
                                        <img src="images/3.png" alt="" />
                                    </div>
                                    <div className="b-heading">
                                        <h5>Bunch Flower</h5>
                                        <button type='button'><IoClose style={{ fontSize: "20px", color: "#6C7275" }} />Remove</button>
                                    </div>
                                </div>
                                <div className="b-count">
                                    <button onClick={handleDecrease} className="qty-btn">
                                        <FaMinus />
                                    </button>
                                    <span className="qty-value">{quantity}</span>
                                    <button onClick={handleIncrease} className="qty-btn">
                                        <FaPlus />
                                    </button>
                                </div>
                                <div className="b-price">
                                    <h5>OMR-19</h5>
                                </div>
                            </div>
                        </div>
                        <div className="heart-message">
                            <div className="heart-btn">
                                <button>🤍</button>
                                <h5>Message from the Heart</h5>
                            </div>
                            <h6>Express your felling and share your love to loved ones </h6>
                            <textarea name="" id="" className='heart-text mt-5' placeholder='Type your message here to deliver your thoughts with love'></textarea>

                            <div className="order-now mt-2 d-sm-none">
                                    <button type="button">Message from the Heart</button>
                                </div>
                        </div>
                    </div>

                    <div className="order-summary">
                        <h1>Order-Summary</h1>
                        <div className="summary">
                            <div className="summary-icon">
                                <RiEBike2Fill style={{ color: "#3C2A5A", fontSize: "30px" }} />
                                <h4>Only 20 OMR left to unlock free standard delivery! </h4>
                            </div>
                            <div className="summary-icon2">
                                <h3>Order-Summary</h3>
                                <div className="subtotal">
                                    <h5>Subtotal</h5>
                                    <h5>OMR-19</h5>
                                </div>
                                <div className="subtotal">
                                    <h5>Delivery Charges</h5>
                                    <h5>OMR-2</h5>
                                </div>
                                <h6>Please note that specific regions and express delivery may incur extra delivery fees</h6>

                                <div className="subtotal">
                                    <h5>Total</h5>
                                    <h5>OMR-21</h5>
                                </div>

                                <div className="order-now mt-2">
                                    <button type="button">Proceed to Checkout</button>
                                </div>
                            </div>
                        </div>
                        <div className="summary2">
                            <h3>Have a Coupon?</h3>
                            <h6>Add your code for an instant cart discount</h6>
                            <div className="coupon">
                                <RiCouponLine style={{ fontSize: "30px", color: "#6C7275" }} />
                                <input type="text" placeholder='Coupon Code' />
                                <button className='ms-auto'>Apply</button>
                            </div>
                        </div>
                    </div>


                     <div className="shiping">
                    <h1>Shiping</h1>
                    <RadioGroup className="delivery-options" defaultValue="Delivery:OMR 4.00">
                        <FormControlLabel
                            value="pickup"
                            control={<Radio className="custom-radio" />}
                            label="Pickup From Shop"
                            className="delivery-btn"
                        />
                        <FormControlLabel
                            value="delivery"
                            control={<Radio className="custom-radio" />}
                            label={
                                <>
                                    Delivery: <span>OMR 4.00</span>
                                </>
                            }
                            className="delivery-btn"
                        />
                    </RadioGroup>
                    <div className="make-it-perfect">
                        <h1>Make it Perfect</h1>
                        <Box sx={{ width: "100%" }}>
                            <Tabs
                                className="model-tab"
                                value={tabValue}
                                onChange={handleTabChange}
                                textColor="secondary"
                                indicatorColor="secondary"
                            >
                                <Tab value="one" label="Ribbons" className="model-item" />
                                <Tab value="two" label="Fragrances" className="model-item" />
                            </Tabs>

                            {tabValue === "one" && (
                                <div className="tab-content">
                                    <ModelPerfect tabImg="images/tab1.jpg" />
                                    <ModelPerfect tabImg="images/tab2.jpg" />
                                    <ModelPerfect tabImg="images/tab3.jpg" />
                                    <ModelPerfect tabImg="images/tab4.jpg" />
                                </div>
                            )}
                            {tabValue === "two" && (
                                <div className="tab-content">
                                    <ModelPerfect tabImg="images/tab2.jpg" />
                                    <ModelPerfect tabImg="images/tab4.jpg" />
                                    <ModelPerfect tabImg="images/tab3.jpg" />
                                    <ModelPerfect tabImg="images/tab1.jpg" />
                                </div>
                            )}
                        </Box>
                    </div>
                </div>
                </div>
               

            </div>
        </>
    );
}