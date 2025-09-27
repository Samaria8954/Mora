import { useState } from "react";
import { IoIosMenu, IoIosSearch } from "react-icons/io";
import { PiCourtBasketballDuotone } from "react-icons/pi";
import { IoIosClose } from "react-icons/io";


export const LoginNav = () => {
    const [showSearch, setShowSearch] = useState(false);

    return (
           <>
               <div className="container">
                   <div className="logo">
                       <h1>Mora</h1>
                   </div>
                   <div className="menu2">
                       <div className="m1" onClick={() => setShowSearch(true)}>
                           <IoIosSearch className="icon-nav1" />
                       </div>
                       <div className="m1">
                           <PiCourtBasketballDuotone className="icon-nav1" />
                       </div>
                       <div
                           className="m1"
                           data-bs-toggle="offcanvas"
                           data-bs-target="#offcanvasRight"
                           aria-controls="offcanvasRight"
                       >
                           <IoIosMenu className="icon-nav1" />
                       </div>
                   </div>
               </div>
   
               {/* Search Overlay */}
               {showSearch && (
                   <div
                       className="search-overlay"
                       onClick={() => setShowSearch(false)}
                   >
                       <div
                           className="search-box"
                           onClick={(e) => e.stopPropagation()}
                       >
                           <label htmlFor="searchInput">Search</label>
                           <div className="input-wrapper">
                               <input
                                   id="searchInput"
                                   type="text"
                                   placeholder="Graduation Collection"
                               />
                               <IoIosSearch
                                   className="search-icon"
                                   onClick={() => setShowSearch(false)}
                               />
                           </div>
                       </div>
                   </div>
               )}
   
               {/* Bootstrap Offcanvas Sidebar */}
               <div
                   className="offcanvas offcanvas-end"
                   tabIndex="-1"
                   id="offcanvasRight"
                   aria-labelledby="offcanvasRightLabel"
               >
                   <div className="offcanvas-header d-flex justify-content-end">
                       <button
                           type="button"
                           className="custom-close-btn"
                           data-bs-dismiss="offcanvas"
                           aria-label="Close"
                       >
                           <IoIosClose className="close-icon" />
                       </button>
                   </div>
   
                   <div className="offcanvas-body">
                       <div className="cards-heading">
                           <h1 className="my-auto">Explore</h1>
                           <button type="button">View All</button>
                       </div>
                       <div className="menu-cards">
                           <div className="card-menu">
                               <img src="images/2.png" alt="" />
                               <h6>Mother's Day</h6>
                           </div>
                           <div className="card-menu">
                               <img src="images/menu-card.png" alt="" />
                               <h6>By Catogery</h6>
                           </div>
                       </div>
                       <div className="flower-cards">
                           <div className="flower-title">
                               <h4>Flowers</h4>
                           </div>
                           <div className="flower-img">
                               <img src="images/6.png" alt="" />
                           </div>
                           <div className="flower-icon">
                               <button><i class="fa-solid fa-circle-arrow-right"></i></button>
                           </div>
                       </div>
                       <div className="flower-cards">
                           <div className="flower-title">
                               <h4>Vases</h4>
                           </div>
                           <div className="flower-img2">
                               <img src="images/4.png" alt="" />
                           </div>
                           <div className="flower-icon">
                               <button><i class="fa-solid fa-circle-arrow-right"></i></button>
                           </div>
                       </div>
                       <div className="menu-cards2">
                           <div className="card2-menu">
                               <div className="card-menu2">
                                   <img src="images/card-3.png" alt="" />
                               </div>
                               <h6>Express Delivery</h6>
                           </div>
                           <div className="card2-menu">
                               <div className="card-menu2">
                                   <img src="images/card-4.png" alt="" />
                               </div>
                               <h6>Same Day Delivery</h6>
                           </div>
                       </div>
                       <div className="menu-vases">
                           <h1>Flower & Vases You Love</h1>
                           <div className="menu-slider">
                               <div className="slider-box">
                                   <img src="images/flower4.png" alt="" />
                               </div>
                               <div className="slider-box">
                                   <img src="images/sculpted1.jpg" alt="" />
                               </div>
                               <div className="slider-box">
                                   <img src="images/flower1.png" alt="" />
                               </div>
                               <div className="slider-box">
                                   <img src="images/sculpted2.jpg" alt="" />
                               </div>
                               <div className="slider-box">
                                   <img src="images/sculpted1.jpg" alt="" />
                               </div>
                               <div className="slider-box">
                                   <img src="images/flower2.png" alt="" />
                               </div>
                               <div className="slider-box">
                                   <img src="images/flower3.png" alt="" />
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </>
       );
       
};
