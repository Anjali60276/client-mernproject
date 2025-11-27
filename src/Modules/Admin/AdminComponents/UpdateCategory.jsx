import React, { useState, useEffect } from "react";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../ContextProvider";
import { useContext } from "react";

export default function UpdateCategory() {
  const { host } = useContext(UserContext);
  const { cid } = useParams(); // ✅ Get the category ID from URL

  const [category, setCategory] = useState({
    cname: "",
    cdescription: "",
  });

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (!cid) return; // ✅ Prevent request when cid is undefined
    axios
      .get(`${host}/api/category/GetCategoryById/${cid}`)
      .then((res) => {
        const one = res.data.onecategory || {}; // ✅ safer variable
        setCategory({
          cname: one.category_name || "",
          cdescription: one.category_description || "",
        });
      })
      .catch((error) => {
        console.error("Error fetching category:", error);
      });
  }, [cid , host]); // Add cid as dependency

  const HandleUpdate = () => {
    const payload = {
      category_name: category.cname,
      category_description: category.cdescription,
    }; // ✅ matches backend field names

    axios
      .put(`${host}/api/category/UpdateCategory/${cid}`, payload)
      .then(() => {
        alert("category updated");
      })
      .catch((error) => {
        console.log("Error while updating category:", error);
      });
    console.log(host);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "400px",
          padding: "10px",
          margin: "30px",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Typography variant="h5" sx={{ mb: 3 }} align="center" color="green">
          Update Category
        </Typography>

        <TextField
          variant="outlined"
          label="Category Name"
          name="cname"
          fullWidth
          value={category.cname}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          label="Category Description"
          name="cdescription"
          fullWidth
          value={category.cdescription}
          onChange={handleChange}
        />

        <Button
          onClick={HandleUpdate}
          variant="contained"
          color="primary"
          sx={{
            mt: 1,
            width: "100px",
            height: "40px",
            borderRadius: 0,
            fontSize: "0.75rem",
            alignSelf: "center",
          }}
        >
          Update Category
        </Button>
      </Paper>
    </Box>
  );
}
