import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { IoMdCloseCircle } from "react-icons/io";
import { MdCelebration } from "react-icons/md";

import { ModelVase } from './ModelVase';
import { ModelPerfect } from './ModelPerfect';


export const DynamicPerfect = ({catogery,Perfectgift}) => {
    
  const [isMobile, setIsMobile] = useState(false);
    const [showPerfect, setShowPerfect] = useState(false);

    const cardsData = [
        { id: 1, flowering: "images/sculpted2.jpg", title: "Modern Minimal – Ceramic Vase" },
        { id: 2, flowering: "images/flower2.png", title: "Modern Minimal – Ceramic Vase" },
        { id: 3, flowering: "images/sculpted3.jpg", title: "Modern Minimal – Ceramic Vase" },
        { id: 4, flowering: "images/flower1.png", title: "Modern Minimal – Ceramic Vase" },
    ];

    const orderedCards = isMobile
        ? [cardsData[0], cardsData[2], cardsData[1], cardsData[3]]
        : cardsData;

    const [tabValue, setTabValue] = useState("one");
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

  
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setShowPerfect(false);
    };


    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth <= 576);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <>
            <div className="discription my-1 my-sm-3" >
                <button className="collection-name">
                    {catogery}
                </button>
                <button className="collection-gift" onClick={handleOpen}>
                    {Perfectgift}
                </button>
            </div>
            {/* Modal */}
            <Modal open={open} onClose={handleClose} >
                <Box className="custom-modal-box" >
                    <Typography className="model-heading">
                        <h1>You added items to your basket</h1>
                        <button type="button">
                            <IoMdCloseCircle
                                style={{ color: "#3C2A5A", fontSize: "38px" }}
                                onClick={handleClose}
                            />
                        </button>
                    </Typography>

                    <Typography className="model-body" sx={{ mt: 2 }}>
                        <h2>Cart Subtotal Omr <span>40</span></h2>

                        <div className="white-cut-box">
                            <div className="grey-btn">
                                <button type="button" onClick={() => setShowPerfect(true)}>
                                    <MdCelebration /> Make it Perfect
                                </button>
                            </div>

                            <h2>Suggested</h2>
                            <div className="model-vase">
                                {orderedCards.map((card, index) => (
                                    <ModelVase
                                        key={index}
                                        flowering={card.flowering}
                                        title={card.title}
                                        catogery={isMobile ? "🩷 Romantic Choice" : "🎁 Great Gift"}
                                        discount={index % 2 === 0 ? "50" : "48"}
                                        Perfectgift="🌿 Flower-Ready"
                                    />
                                ))}
                            </div>

                            {showPerfect && (
                                <div className="make-it-perfect">
                                    <h2>Make it Perfect</h2>
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
                            )}
                        </div>

                        <div className="model-btn">
                            <button
                                type="button"
                                style={{ color: "#6B0572" }}
                                onClick={() => setShowPerfect(true)}
                            >
                                Explore more
                            </button>
                            <button
                                type="button"
                                style={{ backgroundColor: "#6B0572", color: "white" }}
                            >
                                View Basket
                            </button>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </>
    );
}