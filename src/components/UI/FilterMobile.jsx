import { useState, useRef, useEffect } from "react";
import {
  CFormCheck,
  COffcanvas,
  COffcanvasBody,
} from "@coreui/react";
import { IoIosClose } from "react-icons/io";
import $ from "jquery";
import "ion-rangeslider";
import "ion-rangeslider/css/ion.rangeSlider.min.css";
import { CollectionCards } from "./CollectionCards";
import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";
import { FaFilter } from "react-icons/fa6";

export const FilterMobile = ({ repeatPages = 1 }) => {
  const rangeRef = useRef(null);
  const [from, setFrom] = useState(700);
  const [to, setTo] = useState(3000);
  const min = 0;
  const max = 4000;
  const sliderInstance = useRef(null);
  const [offcanvasVisible, setOffcanvasVisible] = useState(false);

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
      sliderInstance.current.update({ from, to });
    }
  }, [from, to]);

  // ---------------- Original Cards ----------------
  const baseCards = [
    { id: 1, flowering: "images/flower4.png", title: "Blush Elegance – Pink Roses Bouquet", catogery: "💖Romantic Choice", discount: "48", Perfectgift: "💐 Perfect gift" },
    { id: 2, flowering: "images/flower3.png", title: "Blush Elegance – Pink Roses Bouquet", catogery: "💖Romantic Choice", discount: "50", Perfectgift: "💐 Perfect gift" },
    { id: 3, flowering: "images/flower4.png", title: "Blush Elegance – Pink Roses Bouquet", catogery: "💖Romantic Choice", discount: "48", Perfectgift: "💐 Perfect gift" },
    { id: 4, flowering: "images/flower3.png", title: "Blush Elegance – Pink Roses Bouquet", catogery: "💖Romantic Choice", discount: "48", Perfectgift: "💐 Perfect gift" },
    { id: 5, flowering: "images/flower4.png", title: "Blush Elegance – Pink Roses Bouquet", catogery: "💖Romantic Choice", discount: "50", Perfectgift: "💐 Perfect gift" },
    { id: 6, flowering: "images/flower3.png", title: "Blush Elegance – Pink Roses Bouquet", catogery: "💖Romantic Choice", discount: "48", Perfectgift: "💐 Perfect gift" },
    { id: 7, flowering: "images/flower4.png", title: "Blush Elegance – Pink Roses Bouquet", catogery: "💖Romantic Choice", discount: "48", Perfectgift: "💐 Perfect gift" },
    { id: 8, flowering: "images/flower3.png", title: "Blush Elegance – Pink Roses Bouquet", catogery: "💖Romantic Choice", discount: "50", Perfectgift: "💐 Perfect gift" },
    { id: 9, flowering: "images/flower4.png", title: "Blush Elegance – Pink Roses Bouquet", catogery: "💖Romantic Choice", discount: "48", Perfectgift: "💐 Perfect gift" },
  ];

  // 🔁 Repeat Data
  const cardsData = Array.from({ length: repeatPages }, (_, idx) =>
    baseCards.map(card => ({ ...card, id: `${idx + 1}-${card.id}` }))
  ).flat();

  // ---------------- Pagination ----------------
  const [page, setPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(8); // Default 8 cards per page

  // Responsive cards per page for 0–767px
  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;
      if (width <= 767) {
        setCardsPerPage(8);
      } else {
        setCardsPerPage(8); // You can adjust for desktop if needed
      }
    };
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const totalPages = Math.min(Math.ceil(cardsData.length / cardsPerPage), 5); // Limit to 5 pages

  const handlePageChange = (event, value) => {
    setPage(value);
    const section = document.querySelector(".filter-cards");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const startIndex = (page - 1) * cardsPerPage;
  const currentCards = cardsData.slice(startIndex, startIndex + cardsPerPage);

  // ---------------- Custom Pagination Style ----------------
  const CustomPagination = styled(Pagination)({
    "& .MuiPaginationItem-root": {
      color: "purple",
      backgroundColor: "white",
      border: "1px solid purple",
      "&:hover": { backgroundColor: "#f3e5f5" },
    },
    "& .Mui-selected": {
      backgroundColor: "purple !important",
      color: "white !important",
      border: "1px solid purple",
    },
  });

  return (
    <div className="collection-section">
      <div className="cards-heading mt-5">
        <h1 className="my-auto">Mother's Day Collection</h1>
        <button
          type="button"
          style={{ border: "0", fontSize: "25px" }}
          onClick={() => setOffcanvasVisible(true)}
        >
          <FaFilter style={{ color: "#6B0572" }} />
        </button>
      </div>

      <COffcanvas
        backdrop={false}
        placement="end"
        scroll
        visible={offcanvasVisible}
        onHide={() => setOffcanvasVisible(false)}
        className="canvas2"
      >
        <COffcanvasBody>
          <div className="filter-list2">
            <div className="custom-header">
              <span className="header-text">Select Your Style</span>
              <button
                type="button"
                className="custom-close-btn"
                onClick={() => setOffcanvasVisible(false)}
              >
                <IoIosClose className="close-icon" />
              </button>
            </div>

            <div className="custom-body">
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
            </div>

            <div className="price-range">
              <span className="header-text">Price Range Slider</span>
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
                      let val = parseInt(e.target.value.replace(/\D/g, ""), 10);
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
                      let val = parseInt(e.target.value.replace(/\D/g, ""), 10);
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
          </div>
        </COffcanvasBody>
      </COffcanvas>

      <div className="filter-section">
        <div className="filter-cards2">
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
  );
};
