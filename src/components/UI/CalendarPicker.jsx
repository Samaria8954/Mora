import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";


export const CalendarPicker = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [tempDate, setTempDate] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleApply = () => {
        setSelectedDate(tempDate);
        setIsOpen(false);
    };

    const handleCancel = () => {
        setTempDate(selectedDate);
        setIsOpen(false);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "15px" }}>

            <div
                style={{
                    borderRadius: "10px",
                    padding: "10px",
                    margin: "auto",
                    background: "#fff",
                    boxShadow: "0 3px 15px rgba(0,0,0,0.1)",
                }}
            >
                {/* Button to open calendar */}
                <div style={{
                    cursor: "pointer",
                    color: "#4B006E",
                    fontWeight: "500",
                    fontSize: "18px",
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    gap:"10px",
                    marginBottom: "8px",
                }} onClick={() => setIsOpen(!isOpen)}>
                    <FaRegCalendarAlt style={{
                    color: "#4B006E",
                    fontWeight: "500",
                    fontSize: "30px",
                 
                }}/>
                    <span>Choose another Date</span>
                </div>

                {/* Show selected date inside same box */}
                {selectedDate && (
                    <div
                        style={{
                            fontSize: "14px",
                            color: "#333",
                            marginBottom: "10px",
                            transition: "0.3s",
                        }}
                    >
                        {selectedDate.toDateString()}
                    </div>
                )}

                {/* Calendar appears right below in same box */}
                {isOpen && (
                    <div
                        style={{
                            marginTop: "10px",
                            paddingTop: "10px",
                            animation: "fadeIn 0.3s ease-in-out",
                        }}
                    >
                        <DatePicker
                            selected={tempDate}
                            onChange={(date) => setTempDate(date)}
                            inline
                        />

                        {/* Footer buttons */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "10px",
                            }}
                        >
                            <button
                                onClick={handleCancel}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    color: "#4B006E",
                                    cursor: "pointer",
                                    fontWeight: "500",
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleApply}
                                style={{
                                    background: "#4B006E",
                                    border: "none",
                                    color: "white",
                                    padding: "6px 16px",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                }}
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
