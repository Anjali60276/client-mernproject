import React, { useEffect, useState } from "react";
import { Box, Paper, TextField, Typography, Button, Toolbar } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../../ContextProvider";
import { useContext } from "react";

export default function UpdateProduct() {
  const { host } = useContext(UserContext);
  const { pid } = useParams(); // get product id from URL
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    pname: "",
    pdesc: "",
    pprice: "",
    pqty: "",
    catid: "",
    pimage: null, // file object
    oldImage: "", // store existing image name
  });

  const [categories, setCategories] = useState([]);

  // Fetch categories
  useEffect(() => {
    axios
      .get(`${host}/api/category/Getcategory`)
      .then((res) => setCategories(res.data.getcategory || []))
      .catch(() => setCategories([]));
  }, [host]);

  // Fetch existing product details
  useEffect(() => {
    axios
      .get(`${host}/api/product/Getproduct/${pid}`)
      .then((res) => {
        const data = res.data.product;
        setProduct({
          pname: data.product_name,
          pdesc: data.product_desc,
          pprice: data.product_price,
          pqty: data.product_qty,
          catid: data.categoryId,
          pimage: null,
          oldImage: data.product_image,
        });
      })
      .catch((err) => console.log(err));
  }, [pid, host]);

  const handleChange = (e) => {
    if (e.target.name === "pimage") {
      setProduct({ ...product, pimage: e.target.files[0] });
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append("pname", product.pname);
    formData.append("pdesc", product.pdesc);
    formData.append("pprice", product.pprice);
    formData.append("pqty", product.pqty);
    formData.append("catid", product.catid);

    if (product.pimage) {
      formData.append("pimage", product.pimage);
    }
    formData.append("oldImage", product.oldImage);

    axios
      .put(`${host}/api/product/Updateproduct/${pid}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        alert("Product Updated Successfully");
        navigate("/Admin/ViewProduct");
      })
      .catch((err) => {
        console.log(err);
        alert("Update Failed");
      });
    console.log(host);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, p: 1, ml: "150px", mb: "90px" }}>
        <Toolbar />
        <Box style={{ display: "flex", justifyContent: "center", margin: "30px" }}>
          <Paper elevation={4} style={{ width: "600px", padding: "20px" }}>
            <Typography
              variant="h4"
              textAlign="center"
              sx={{ mb: 4, fontFamily: "fantasy", color: "darkslategray" }}
            >
              Update Product
            </Typography>

            <TextField
              variant="outlined"
              label="Product Name"
              type="text"
              name="pname"
              value={product.pname}
              fullWidth
              sx={{ mb: 3 }}
              onChange={handleChange}
            />

            <TextField
              variant="outlined"
              label="Product Description"
              type="text"
              name="pdesc"
              value={product.pdesc}
              fullWidth
              sx={{ mb: 3 }}
              onChange={handleChange}
            />

            <TextField
              variant="outlined"
              label="Product Price"
              type="number"
              name="pprice"
              value={product.pprice}
              fullWidth
              sx={{ mb: 3 }}
              onChange={handleChange}
            />

            {/* Image Upload */}
            <div style={{ marginBottom: 16 }}>
              <label>Choose New Image (optional)</label>
              <input
                type="file"
                accept="image/*"
                name="pimage"
                onChange={handleChange}
                style={{ display: "block", width: "100%" }}
              />
            </div>

            {/* Show current image */}
            {product.oldImage && (
              <img
                src={`http://localhost:7000/Uploads/${product.oldImage}`}
                alt="product"
                style={{ width: "120px", marginBottom: "20px", borderRadius: "8px" }}
              />
            )}

            <TextField
              variant="outlined"
              label="Quantity"
              type="number"
              name="pqty"
              value={product.pqty}
              fullWidth
              sx={{ mb: 3 }}
              onChange={handleChange}
            />

            {/* Category Select */}
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Category</InputLabel>
              <Select name="catid" value={product.catid} onChange={handleChange}>
                {categories.map((cat) => (
                  <MenuItem key={cat._id} value={cat._id}>
                    {cat.category_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "200px" }}
              onClick={handleUpdate}
            >
              Update Product
            </Button>
          </Paper>
        </Box>
      </Box>
    </div>
  );
}
