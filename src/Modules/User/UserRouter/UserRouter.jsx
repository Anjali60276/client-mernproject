import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../UserComponents/Home";
import Shop from "../UserComponents/Shop";
import ProductCard from "../UserComponents/ProductCard";
import Navbar from "../UserComponents/Navbar";
import Footer from "../UserComponents/Footer";
import About from "../UserComponents/About";
import Contact from "../UserComponents/Contact";
import Login from "../UserComponents/Login";
import Registration from "../UserComponents/Registration";
import URegister from "../UserComponents/URegister";
import ManageProfile from "../UserComponents/ManageProfile";
import ContextProvider from "../../../ContextProvider";

const UserRouter = () => {
  return (
    <>
     <ContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductCard />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* make these absolute so links and navigate() resolve correctly */}
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/registration" element={<Registration />} />
        <Route path="/user/uregister" element={<URegister />} />
        <Route path="/user/manageprofile" element={<ManageProfile />} />
      </Routes>
      </ContextProvider>
    </>
  );
};

export default UserRouter;
