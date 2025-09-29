import { useState, useRef, useEffect } from "react";
import {
    CAccordion,
    CAccordionBody,
    CAccordionHeader,
    CAccordionItem,
    CFormCheck,
} from "@coreui/react";

import { IoIosArrowDropdownCircle } from "react-icons/io";
import { LuArrowUpDown } from "react-icons/lu";
import $ from "jquery";
import "ion-rangeslider";
import "ion-rangeslider/css/ion.rangeSlider.min.css";
import { CollectionCards } from "./CollectionCards";
import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";

export const Filter = ({ repeatPages = 1 }) => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const rangeRef = useRef(null);
    const [from, setFrom] = useState(700);
    const [to, setTo] = useState(3000);
    const min = 0;
    const max = 4000;
    const sliderInstance = useRef(null);

    useEffect(() => {
        $(rangeRef.current).ionRangeSlider({
            skin: "round",
            type: "double",
            min: min,
            max: max,
            from: from,
            to: to,
            grid: false,
            postfix: " OMR",
            onChange: function (data) {
                setFrom(data.from);
                setTo(data.to);
            },
        });

        sliderInstance.current = $(rangeRef.current).data("ionRangeSlider");

        return () => {
            if (sliderInstance.current) {
                sliderInstance.current.destroy();
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (sliderInstance.current) {
            sliderInstance.current.update({
                from: from,
                to: to,
            });
        }
    }, [from, to]);

    // ---------------- Original Cards ----------------
    const baseCards = [
        {
            id: 1,
            flowering: "images/flower1.png",
            title: "Blush Elegance – Pink Roses Bouquet",
            catogery: "💖 Mother's Day",
            discount: "48",
            Perfectgift: "💐 Perfect gift",
        },
        {
            id: 2,
            flowering: "images/flower4.png",
            title: "Blush Elegance – Pink Roses Bouquet",
            catogery: "💖 Mother's Day",
            discount: "50",
            Perfectgift: "💐 Perfect gift",
        },
        {
            id: 3,
            flowering: "images/flower3.png",
            title: "Blush Elegance – Pink Roses Bouquet",
            catogery: "💖 Mother's Day",
            discount: "48",
            Perfectgift: "💐 Perfect gift",
        },
        {
            id: 4,
            flowering: "images/flower1.png",
            title: "Blush Elegance – Pink Roses Bouquet",
            catogery: "💖 Mother's Day",
            discount: "48",
            Perfectgift: "💐 Perfect gift",
        },
        {
            id: 5,
            flowering: "images/flower4.png",
            title: "Blush Elegance – Pink Roses Bouquet",
            catogery: "💖 Mother's Day",
            discount: "50",
            Perfectgift: "💐 Perfect gift",
        },
        {
            id: 6,
            flowering: "images/flower3.png",
            title: "Blush Elegance – Pink Roses Bouquet",
            catogery: "💖 Mother's Day",
            discount: "48",
            Perfectgift: "💐 Perfect gift",
        },
        {
            id: 7,
            flowering: "images/flower1.png",
            title: "Blush Elegance – Pink Roses Bouquet",
            catogery: "💖 Mother's Day",
            discount: "48",
            Perfectgift: "💐 Perfect gift",
        },
        {
            id: 8,
            flowering: "images/flower4.png",
            title: "Blush Elegance – Pink Roses Bouquet",
            catogery: "💖 Mother's Day",
            discount: "50",
            Perfectgift: "💐 Perfect gift",
        },
        {
            id: 9,
            flowering: "images/flower3.png",
            title: "Blush Elegance – Pink Roses Bouquet",
            catogery: "💖 Mother's Day",
            discount: "48",
            Perfectgift: "💐 Perfect gift",
        },
    ];

    // 🔁 Repeat Data (10 pages ka data banane ke liye)
    const cardsData = Array.from({ length: repeatPages }, (_, idx) =>
        baseCards.map((card) => ({
            ...card,
            id: `${idx + 1}-${card.id}`, // unique id
        }))
    ).flat();

    // ---------------- Pagination ----------------
    const [page, setPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(9);

    // Responsive cards per page
    useEffect(() => {
        const updateCardsPerPage = () => {
            const width = window.innerWidth;
            if (width >= 992) {
                setCardsPerPage(9); // Desktop
            } else if (width >= 767 && width <= 991) {
                setCardsPerPage(6); // Tablet
            } else {
                setCardsPerPage(3); // Mobile
            }
        };

        updateCardsPerPage(); // initial call
        window.addEventListener("resize", updateCardsPerPage);

        return () => window.removeEventListener("resize", updateCardsPerPage);
    }, []);

    const totalPages = Math.ceil(cardsData.length / cardsPerPage);

    const handlePageChange = (event, value) => {
        setPage(value);
        const section = document.querySelector(".filter-cards");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const startIndex = (page - 1) * cardsPerPage;
    const currentCards = cardsData.slice(startIndex, startIndex + cardsPerPage);

    // ---------------- Custom Pagination Style ----------------
    const CustomPagination = styled(Pagination)({
        "& .MuiPaginationItem-root": {
            color: "purple",
            backgroundColor: "white",
            border: "1px solid purple",
            "&:hover": {
                backgroundColor: "#f3e5f5",
            },
        },
        "& .Mui-selected": {
            backgroundColor: "purple !important",
            color: "white !important",
            border: "1px solid purple",
        },
    });

    return (
        <>
            <div className="collection-section">
                <div className="cards-heading mt-5">
                    <h1 className="my-auto">Mother's Day Collection</h1>
                    <div className="sorted">
                        <h6>Sort By</h6>
                        <button
                            type="button"
                            style={{ backgroundColor: "#E2D6E4", height: "40px" }}
                        >
                            Low-High <LuArrowUpDown className="low-high" />
                        </button>
                    </div>
                </div>
                <div className="filter-section">
                    <div className="filter-list">
                        {/* Accordion 1 */}
                        <CAccordion alwaysOpen activeItemKey={1}>
                            <CAccordionItem itemKey={1}>
                                <CAccordionHeader
                                    className="custom-header header-1"
                                    onClick={() => setOpen1(!open1)}
                                >
                                    <span className="header-text">Select Your Style</span>
                                    <IoIosArrowDropdownCircle
                                        className={`custom-icon ${open1 ? "rotate-up" : "rotate-down"
                                            }`}
                                    />
                                </CAccordionHeader>
                                <CAccordionBody className="custom-body">
                                    <h1>By Collection</h1>
                                     <CFormCheck
                                        id="eid2"
                                        defaultChecked
                                        disabled
                                        label={
                                            <div className="label-flex">
                                                <span>Eid Collection</span>
                                                <span className="count">(40)</span>
                                            </div>
                                        }
                                    />

                                    <CFormCheck
                                        id="eid2"
                                        defaultChecked
                                        label={
                                            <div className="label-flex">
                                                <span>Mother's Day Collection</span>
                                                <span className="count">(26)</span>
                                            </div>
                                        }
                                    />
                                    <CFormCheck id="eid3" defaultChecked disabled label={<div className="label-flex"> <span>Bouquet</span> <span className="count">(14)</span> </div>} />

                                    <CFormCheck id="eid4" defaultChecked disabled label={<div className="label-flex"> <span>Premium Collection</span> <span className="count">(18)</span> </div>} />

                                    <CFormCheck id="eid5" defaultChecked disabled label={<div className="label-flex"> <span>All</span> <span className="count">(18)</span> </div>} />

                                    <CFormCheck id="eid6" defaultChecked disabled label={<div className="label-flex"> <span>Ramadan Collection</span> <span className="count">(18)</span> </div>} />

                                    <CFormCheck id="eid7" defaultChecked disabled label={<div className="label-flex"> <span>Teacher's Day Collection</span> <span className="count">(12)</span> </div>} />

                                </CAccordionBody>
                            </CAccordionItem>
                        </CAccordion>

                        {/* Accordion 2 (Price Slider) */}
                        <CAccordion alwaysOpen activeItemKey={2}>
                            <CAccordionItem itemKey={2}>
                                <CAccordionHeader
                                    className="custom-header header-2"
                                    onClick={() => setOpen2(!open2)}
                                >
                                    <span className="header-text">Price Range Slider</span>
                                    <IoIosArrowDropdownCircle
                                        className={`custom-icon ${open2 ? "rotate-up" : "rotate-down"
                                            }`}
                                    />
                                </CAccordionHeader>
                                <CAccordionBody className="custom-body">
                                    <div className="price-range">
                                        <input
                                            type="text"
                                            ref={rangeRef}
                                            className="js-range-slider"
                                            name="my_range"
                                            defaultValue=""
                                        />
                                        <div className="inputs">
                                            <div className="input-wrapper">
                                                <input
                                                    type="text"
                                                    value={`${from} OMR`}
                                                    onChange={(e) => {
                                                        let val = parseInt(
                                                            e.target.value.replace(/\D/g, ""),
                                                            10
                                                        );
                                                        if (isNaN(val)) val = min;
                                                        if (val < min) val = min;
                                                        if (val > to) val = to;
                                                        setFrom(val);
                                                    }}
                                                    className="from"
                                                    maxLength={10}
                                                />
                                            </div>

                                            <div className="input-wrapper d-flex justify-content-end">
                                                <input
                                                    type="text"
                                                    value={`${to} OMR`}
                                                    onChange={(e) => {
                                                        let val = parseInt(
                                                            e.target.value.replace(/\D/g, ""),
                                                            10
                                                        );
                                                        if (isNaN(val)) val = max;
                                                        if (val > max) val = max;
                                                        if (val < from) val = from;
                                                        setTo(val);
                                                    }}
                                                    className="to"
                                                    maxLength={10}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </CAccordionBody>
                            </CAccordionItem>
                        </CAccordion>
                    </div>

                    {/* Cards + Pagination */}
                    <div className="filter-cards">
                        <div className="filter-card1">
                            {currentCards.map((card) => (
                                <CollectionCards key={card.id} {...card} />
                            ))}
                        </div>

                        <div className="d-flex justify-content-center my-4">
                            <CustomPagination
                                count={totalPages}
                                page={page}
                                shape="rounded"
                                onChange={handlePageChange}
                                boundaryCount={1}
                                siblingCount={2}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
