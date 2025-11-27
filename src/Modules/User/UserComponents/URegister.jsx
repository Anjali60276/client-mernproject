import React from "react";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function URegister() {
  const [user, setUser] = useState({
    uname: "",
    uemail: "",
    upassword: "",
    uphoneno: "",
    uaddress: "",
  });

  const handleChange = (e) => {
    // ✅ Added (e)
    // Handle input changes here
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  };
  const handlesubmit = () => {
    // Handle form submission here
    console.log(user);
    axios
      .post("http://localhost:7000/api/user/Adduser", user)
      .then((res) => {
        console.log("User details", res.data);
        alert("user registered successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Server error");
      });
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
          <Typography variant="h5" sx={{ mb: 3 }} align="center">
            Registration Form
          </Typography>

          <TextField
            variant="outlined"
            label="Name"
            type="text"
            name="uname"
            fullWidth
            value={user.uname}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            name="uemail"
            fullWidth
            value={user.uemail}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            name="upassword"
            fullWidth
            value={user.upassword}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            label="Phone"
            type="text"
            name="uphoneno"
            fullWidth
            value={user.uphoneno}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            label="Address"
            type="text"
            name="uaddress"
            fullWidth
            value={user.uaddress}
            onChange={handleChange}
          />

          <Button
            variant="contained"
            onClick={handlesubmit}
            color="error"
            sx={{
              mt: 1,
              width: "100px",
              height: "40px",
              minWidth: 0,
              borderRadius: 0,
              fontSize: "0.75rem",
            }}
          >
            Register
          </Button>
        </Paper>
      </Box>
    </div>
  );
}
