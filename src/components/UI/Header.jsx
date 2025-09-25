import { FaLocationDot } from "react-icons/fa6";
import { IoMdGift } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

export const Header = () => {
    return (
        <header className="Header" style={{backgroundColor:"#EAB8E4"}}>
            <div className="container">
                <div className="header1">
                    <div className="one">
                        <TbTruckDelivery className="icon-nav" />
                        Same Day Express Delievery
                    </div>
                    <div className="two">
                        <FaLocationDot className="icon-nav" />
                        No Address hasle
                    </div>
                    <div className="three">
                        <IoMdGift className="icon-nav" />
                        Premium Flowers
                    </div>
                </div>
                <div className="header2">
                    Delivery to <b className="ms-1">Muscat</b>
                    <button type="button"><MdKeyboardArrowDown /></button>
                </div>
            </div>
        </header>
    );
};