import React from "react";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { UserContext } from "../../../ContextProvider";
import { useContext } from "react";

export default function AddCategory() {

  const {host} = useContext(UserContext);
  const [category, setCategory] = useState({
    cname: "",
   cdescription: "",
  });

  const handleChange = (e) => {
    // ✅ Added (e)
    // Handle input changes here
    setCategory({ ...category, [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  };
  const handlesubmit = () => {
    // Handle form submission here
    console.log(category);
    axios
      .post(`${host}/api/category/addCategory`, category)
      .then((res) => {
        console.log("Category details", res.data);
        alert("Added successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Server error");
      });

       console.log(host);
  };
  return (
    <div>
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
            width: "400px", //  Smaller card width
            padding: "10px",
            margin: "30px",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <Typography variant="h5" sx={{ mb: 3 }} align="center" text="bold" color="green">
            Add Category
          </Typography>

          <TextField
            variant="outlined"
            label="Category Name"
            type="text"
            name="cname"
            fullWidth
            value={category.cname}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            label="Category Description"
            type="Description"
            name="cdescription"
            fullWidth
            value={category.cdescription}
            onChange={handleChange}
          />
          
              <Button
                      variant="contained"
                      onClick={handlesubmit}
                      color="primary"
                      sx={{
                        mt: 1,
                        width: "100px",
                        height: "40px",
                        minWidth: 0,
                        borderRadius: 0,
                        fontSize: "0.75rem",
                        alignSelf: "center",
                      }}
                    >
                      Add Category
                    </Button>

          
        </Paper>
      </Box>
    </div>
  );
}
