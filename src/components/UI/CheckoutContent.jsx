import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled } from "react-icons/tb";
import { RiCouponLine, RiEBike2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";

export const CheckoutContent = () => {
  // ---------- State Management ----------
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState("1");
  const [checked, setChecked] = React.useState(true);
//   const [quantity, setQuantity] = React.useState(1);
  const [Value, setValues] = React.useState("Pay by Card Credit");

  // ---------- Handlers ----------
  const handleChange = (event, newValue) => setValue(newValue);
  const OnhandleChange = (event) => setChecked(event.target.checked);
//   const handleIncrease = () => setQuantity((prev) => prev + 1);
//   const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleChanges = (event) => setValues(event.target.value);

  // ---------- Custom Theme ----------
  const theme = createTheme({
    palette: {
      primary: {
        main: "#6B0572",
      },
    },
    components: {
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            color: "#6B0572",
            "&.Mui-checked": {
              color: "#6B0572",
            },
            "&.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "#6B0572",
            },
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: "#6B0572",
            "&.Mui-checked": {
              color: "#6B0572",
            },
          },
        },
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            color: "#6B0572",
            "&.Mui-checked": {
              color: "#6B0572",
            },
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            color: "#3C2A5A",
            "&.Mui-selected": {
              color: "#6B0572",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="collection-section">
        <Box sx={{ width: "100%", typography: "body1", marginTop: "3%" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab
                  label={
                    <span className="checkout-tabs">
                      <TbCircleNumber1Filled style={{ fontSize: "30px", color: "#6B0572" }} />
                      Collecting Info
                    </span>
                  }
                  value="1"
                />

                <Tab
                  label={
                    <span className="checkout-tabs">
                      <TbCircleNumber2Filled style={{ fontSize: "30px", color: "#6B0572" }} />
                      Checkout Details
                    </span>
                  }
                  value="2"
                />

                <Tab
                  label={
                    <span className="checkout-tabs">
                      <TbCircleNumber3Filled style={{ fontSize: "30px", color: "#6B0572" }} />
                      Order Complete
                    </span>
                  }
                  value="3"
                />
              </TabList>
            </Box>

            {/* ---------- TAB 1 ---------- */}
            <TabPanel value="1">
              <div className="checkout-1">
                <div className="checkout-11">
                  <h5 className="mb-5">Billing & Shipping</h5>

                  <form>
                    <h3>Full Name *</h3>
                    <input type="text" name="fullName" required />

                    <h3>Phone Number *</h3>
                    <input type="tel" name="phone" required />

                    <h3>Email Address *</h3>
                    <input type="email" name="email" required />
                  </form>

                  <div className="switch">
                    <h5>This is Gift For you</h5>
                    <Switch defaultChecked />
                  </div>

                  <form>
                    <h3>Receiver Name *</h3>
                    <input type="text" name="fullName" required />

                    <h3>Receiver Phone *</h3>
                    <input type="tel" name="phone" required />

                    <h3>Receiver Area *</h3>
                    <div style={{ position: "relative", width: "100%", marginBottom: "4%" }}>
                      <textarea
                        style={{
                          width: "100%",
                          height: expanded ? "100px" : "40px",
                          padding: "10px 20px 10px 10px",
                          fontSize: "16px",
                          border: "1px solid #aaa",
                          borderRadius: "7px",
                          transition: "height 0.3s ease",
                          resize: "none",
                          outline: "none",
                          overflow: "hidden",
                        }}
                      ></textarea>

                      <span
                        onClick={() => setExpanded(!expanded)}
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "40%",
                          transform: expanded
                            ? "translateY(-50%) rotate(180deg)"
                            : "translateY(-50%) rotate(0deg)",
                          cursor: "pointer",
                          fontSize: "18px",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <IoIosArrowDown />
                      </span>
                    </div>

                    <h3>Receiver Address *</h3>
                    <input type="text" name="address" required />
                  </form>

                  <div className="identity mb-3">
                    <h6>Keep my Identity Secret</h6>
                    <Checkbox
                      checked={checked}
                      onChange={OnhandleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </div>

                  <div className="alert">
                    By checking this box, we will not share any of your personal details with the
                    recipient - even if they call to ask.
                  </div>

                  <div className="summary-icon mt-5" style={{ border: "0" }}>
                    <RiEBike2Fill style={{ color: "#3C2A5A", fontSize: "30px" }} />
                    <h4>Delivery Time </h4>
                  </div>

                  <div className="date-time mt-3">
                    <h5 className="mb-4">12 October</h5>
                    <h5 className="mb-2">Today</h5>
                    <h6>9:00 am - 12:00 pm</h6>
                  </div>
                </div>

                {/* --- Right Side --- */}
                <div className="checkout-12">
                  <div className="summary-icon">
                    <RiEBike2Fill style={{ color: "#3C2A5A", fontSize: "30px" }} />
                    <h4>Only 20 OMR left to unlock free standard delivery!</h4>
                  </div>
                </div>
              </div>
            </TabPanel>

            {/* ---------- TAB 2 ---------- */}
            <TabPanel value="2">
              <div className="checkout-2">
                <div className="checkout-21">
                  <h1>
                    Payment Options<span>*</span>
                  </h1>
                  <h6>All transactions are secure and encrypted</h6>

                  <div className="debit">
                    <FormControl style={{ width: "100%" }}>
                      <RadioGroup
                        style={{ width: "100%" }}
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={Value}
                        onChange={handleChanges}
                      >
                        <div className={`Label ${Value === "Pay by Card Credit" ? "selected" : ""}`}>
                          <FormControlLabel
                            value="Pay by Card Credit"
                            control={<Radio />}
                            label="Pay by Card Credit"
                          />
                          <FaRegCreditCard style={{ fontSize: "25px" }} />
                        </div>

                        <div className={`Labels ${Value === "Paypal" ? "selected" : ""}`}>
                          <FormControlLabel value="Paypal" control={<Radio />} label="Paypal" />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>

                  <div className="card-number">
                    <h4>Card Number</h4>
                    <input type="text" placeholder="1234 1234 1234" />
                    <div className="Expire">
                      <div className="expire">
                        <h4>Expiration date</h4>
                        <input type="month" />
                      </div>
                      <div className="cvc">
                        <h4>CVC</h4>
                        <input type="text" placeholder="CVC code" />
                      </div>
                    </div>

                    <h5>Note For Floward Team</h5>
                    <textarea
                      placeholder="Note For Floward Team"
                      rows={7}
                      style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "16px",
                        borderRadius: "10px",
                        border: "1px solid #ccc",
                        outline: "none",
                        color: "#3C2A5A",
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>
            </TabPanel>

            {/* ---------- TAB 3 ---------- */}
            <TabPanel value="3">
              <div
                className="complete"
                style={{
                  width: "55%",
                  margin: "auto",
                  border: "1px solid #1417183D",
                  padding: "2rem",
                  borderRadius: "10px",
                  boxShadow: "0 10px 25px rgba(107, 5, 114, 0.15)", // soft natural shadow
                }}
              >
                <h2>Thank you! 🎉</h2>
                <h1>Your order has been received</h1>
                <div
                  className="cart-box"
                  style={{
                    position: "relative",
                    width: "150px",
                    margin: "20px auto",
                  }}
                >
                  <div
                    className="cart-badge"
                    style={{
                      position: "absolute",
                      top: "-10px",
                      right: "-10px",
                      backgroundColor: "#6B0572",
                      color: "#fff",
                      borderRadius: "50%",
                      width: "35px",
                      height: "35px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    2
                  </div>
                  <img
                    src="images/3.png"
                    alt="Product"
                    className="cart-img"
                    style={{ width: "150px", borderRadius: "10px" }}
                  />
                </div>

                <div className="detailing mt-3">
                  <h6>Order code:</h6>
                  <h5>#0123_45678</h5>
                </div>

                <div className="detailing">
                  <h6>Date:</h6>
                  <h5>12 October 2025</h5>
                </div>

                <div className="detailing">
                  <h6>Total:</h6>
                  <h5>OMR-19</h5>
                </div>

                <div className="detailing">
                  <h6>Payment Method:</h6>
                  <h5>Credit Card</h5>
                </div>
              </div>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </ThemeProvider>
  );
};
