import React from "react";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { getData } from "../Redux/app/action";
import axios from "axios";
import { useState } from "react";

import HashLoader from "react-spinners/HashLoader";
import { Box } from "@chakra-ui/react";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "437111",
};

const Freshcuts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [appdata, setAppdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#437111");

  // const appdata =useSelector((store)=>store.AppReducer.appdata);

  // console.log(appdata);

  useEffect(() => {
    //  dispatch(getData())
    setLoading(true);
    axios
      .get("https://databasekemay.onrender.com/appdata?category=freshcuts")
      .then((r) => (setAppdata(r.data), setLoading(false)));
  }, [dispatch]);

  if (loading) {
    return (
      <div
        style={{
          justifyContent: "center",
          marginTop: "30vh",
          marginBottom: "40vh",
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <HashLoader
          color={color}
          cssOverride={override}
          loading={loading}
          size={150}
          display="flex"
          justifyContent="center"
          alignItenms="center"
        />
      </div>
    );
  }

  return (
    <div style={{ marginTop: "50px" }}>
      <div>
      <Box
          display={{ base: "none", md: "none", lg: "inline-flex" }}
          //   border: "1px solid",
          width="100%"
          gap="20px"
          margin="auto"
          justifyContent="center"
          alignItems="center"
          marginTop="25px"
        >
          <p onClick={() => navigate("../allfruits")}>ALL FRUITS</p>
          <p onClick={() => navigate("../freshcuts")}>
            {" "}
            FRESH CUTS{" "}
            <div
              style={{ width: "30px", background: "green", height: "3px" }}
            ></div>
          </p>
          <p onClick={() => navigate("../fruitcombos")}> FRUIT COMBOS</p>
          <p onClick={() => navigate("../giftsbykimaye")}>GIFTS BY KIMAYE</p>
          <p onClick={() => navigate("../grapefamilybykimaye")}>
            GRAPES FAMILY BY KIMAYE
          </p>
        </Box>
        <div className="MapBox">
          {appdata.map((el, idx) => (
            <div key={el.id} onClick={(e) => navigate(`/${el.id}`)}>
              <img
                className="Img"
                style={{ width: "100%", borderRadius: "30px", height: "80%" }}
                src={el.image}
                alt="broken"
              />
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "20px",

                  marginTop: "15px",
                }}
              >
                {el.title}
              </h1>
              <h3
                style={{
                  textAlign: "center",
                  color: "brown",
                  fontSize: "25px",
                  marginTop: "10px",
                }}
              >
                ₹{el.price}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Freshcuts;
