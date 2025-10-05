
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ModelPerfect } from './ModelPerfect';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';


export const CartContent = () => {

    const [tabValue, setTabValue] = useState("one");
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <>
            <div className="collection-section">
                <div className="cart-content mb-5">
                    <div className="cart-basket">
                        <h1>Basket</h1>
                        <div className="your-picks">
                            <h4>Your Picks</h4>
                        </div>
                        <div className="heart-message">
                            <div className="heart-btn">
                                <button>🤍</button>
                                <h5>Message from the Heart</h5>
                            </div>
                            <h6>Express your felling and share your love to loved ones </h6>
                            <textarea name="" id="" className='heart-text mt-5' placeholder='Type your message here to deliver your thoughts with love'></textarea>
                        </div>
                    </div>

                    <div className="order-summary">
                        <h1>Order-Summary</h1>
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
        </>
    );
}