import { useState } from "react";
import { IoIosMenu, IoIosSearch } from "react-icons/io";
import { PiCourtBasketballDuotone } from "react-icons/pi";

export const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <>
            <div className="container">
                <div className="logo">
                    <h1>Mora</h1>
                </div>
                <div className="menu">
                    <div className="m1">
                        <IoIosMenu className="icon-nav" />
                        Menu
                    </div>
                    <div className="m1" onClick={() => setShowSearch(true)}>
                        <IoIosSearch className="icon-nav" />
                        Search
                    </div>
                    <div className="m1">
                        <PiCourtBasketballDuotone className="icon-nav" />
                        Basket
                    </div>
                </div>
                <div className="menu2">
                    <div className="m1" onClick={() => setShowSearch(true)}>
                        <IoIosSearch className="icon-nav1" />
                    </div>
                    <div className="m1" >
                        <PiCourtBasketballDuotone className="icon-nav1" />
                    </div>
                    <div className="m1">
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
        </>
    );
};
