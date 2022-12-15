import React from "react";
import "./App.css";
import "./Pages/Commoncsspart.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Allfruits from "./Pages/Allfruits";
import Freshcuts from "./Pages/Freshcuts";
import Giftsbykimaye from "./Pages/Giftsbykimaye";
import Fruitcombos from "./Pages/Fruitcombos";
import Productdetail from "./Pages/Productdetail";
import Grapefamilybykimaye from "./Pages/Grapefamilybykimaye";
import Cart from "./Pages/Cart/Cart"
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Authentication/Login";
import Signup from "./Pages/Authentication/Signup";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="allfruits" element={<Allfruits />} />
        <Route path="freshcuts" element={<Freshcuts />} />
        <Route path="fruitcombos" element={<Fruitcombos />} />
        <Route path="giftsbykimaye" element={<Giftsbykimaye />} />
        <Route path="grapefamilybykimaye" element={<Grapefamilybykimaye/>} />
        <Route path="/:id" element={<Productdetail/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
