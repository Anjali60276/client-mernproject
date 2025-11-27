import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../AdminComponents/Dashboard";
import ClippedDrawer from "../AdminComponents/Clippeddrawer";

import Product from "../AdminComponents/Product";
import Viewuser from "../AdminComponents/Viewuser";
import AddCategory from "../AdminComponents/AddCategory";
import ViewCategory from "../AdminComponents/ViewCategory";
import UpdateCategory from "../AdminComponents/UpdateCategory";
import ViewProduct from "../AdminComponents/ViewProduct";
import UpdateProduct from "../AdminComponents/UpdateProduct"; // <-- ADD THIS IMPORT
import ContextProvider from "../../../ContextProvider";

const AdminRouter = () => {
  return (
    <div>
    <ClippedDrawer/>
      <Routes>
            <Route path="/" element={<Dashboard />} />
      </Routes>

      <ContextProvider>
      <Routes>
      
        <Route path="/product" element={<Product />} />
        <Route path="/Viewuser" element={<Viewuser />} />
        <Route path="/AddCategory" element={<AddCategory />} />
        <Route path="/ViewCategory" element={<ViewCategory />} />
        <Route path="/UpdateCategory/:cid" element={<UpdateCategory />} />
        <Route path="/ViewProduct" element={<ViewProduct />} />

        {/* ADD the UpdateProduct route so /Admin/Updateproduct/:pid works */}
        <Route path="/Updateproduct/:pid" element={<UpdateProduct />} />
      </Routes>
      </ContextProvider>
      </div>
   
  );
};

export default AdminRouter;
