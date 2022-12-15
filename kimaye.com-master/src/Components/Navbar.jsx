import React, { useEffect } from "react";
import styles from "./Navbar.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem, Box } from "@chakra-ui/react";
import axios from "axios";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { getCartData } from "../Redux/cart/action";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  // const [cartData, setCartData] = useState([]);

  const cartData = useSelector((store) => store.CartReducer.cart);

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch, cartData.length]);

  return (
    <Box
      display="flex"
      position="sticky"
      top="0px"
      flexDirection="column"
      zIndex="999"
      width="100%"
    >
      <div className={styles.uppernotification}>
        <p>Delivering in Mumbai and Delhi | Same day delivery!</p>
      </div>
      {/* <div className={styles.bottomnavbar}> */}

      <Box
        display="flex"
        position={{ base: "sticky", md: "sticky", lg: "sticky" }}
        top={{ base: "0px", md: "0px", lg: "0px" }}
      >
        <div
          style={{
            height: "70px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "#f3f4ed",
            padding: "20px",
            position: "sticky",
            width: "100%",
            top: "0px",
          }}
        >
          <Box display="flex" gap="35px">
            <Menu>
              <MenuButton>
                SHOP
                <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => {
                    navigate("allfruits");
                  }}
                >
                  ALL FRUITS
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("freshcuts");
                  }}
                >
                  FRESH CUTS
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("fruitcombos");
                  }}
                >
                  FRUIT COMBOS
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("giftsbykimaye");
                  }}
                >
                  GIFTS BY KIMAYE
                </MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("grapefamilybykimaye");
                  }}
                >
                  GRAPE FAMILY BY KIMAYE
                </MenuItem>
                <MenuItem>RETURN AND REPLACEMENT</MenuItem>
                <MenuItem style={{ color: "lightgray" }}>
                  FRUITS X SUBSCRIPTION
                </MenuItem>
                <MenuItem>COMMUNITY BUYYING</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                display={{ base: "none", md: "none", lg: "inline-flex" }}
              >
                LEARN
                <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem>OUR STORY</MenuItem>
                <MenuItem>WHY KIMAYE</MenuItem>
                <MenuItem>TRACEABILITY</MenuItem>
                <MenuItem>BEYOND FRUITS</MenuItem>
              </MenuList>
            </Menu>
            <Menu display={{ base: "none", md: "none", lg: "inline-flex" }}>
              <MenuButton
                display={{ base: "none", md: "none", lg: "inline-flex" }}
              >
                GROW
                <ChevronDownIcon />
              </MenuButton>
            </Menu>
          </Box>
          {/* </div> */}
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204"
              alt="logo"
              width={"135px"}
              height={"35px"}
              onClick={() => navigate("../")}
            />
          </div>
          <div style={{ display: "flex", gap: "20px" , cursor:"pointer"}}>
            <Box display={{ base: "none", md: "none", lg: "inline-flex" }}>
              <img
                src="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_map_location_logo_icon_159350.png"
                alt="location"
                width={"25px"}
              />

              <span>Mumbai</span>
              <span className="material-symbols-outlined">search</span>
            </Box>

            <span
              className="material-symbols-outlined"
              onClick={() => navigate("/signup")}
            >
              person
            </span>
            <div style={{ position: "fix", display: "flex", width: "40px" }}>
              {" "}
              <span
                className="material-symbols-outlined"
                onClick={() => navigate("/cart")}
              >
                local_mall
              </span>
              <div
                style={{
                  color: "white",
                  padding: "5px",
                  fontSize: "10px",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: "50px",
                  background: "#7d9c5b",
                  position: "relative",
                  top: "-10px",
                  left: "0px",
                }}
              >
                <p>{cartData.length}</p>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Navbar;
