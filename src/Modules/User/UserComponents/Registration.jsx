import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material"; // 👁️ import icons

const Registration = () => {
  const [formData, setFormData] = useState({
    uname: "",
    uemail: "",
    upassword: "",
    uaddress: "",
    uphone: "",
  });

  const [showPassword, setShowPassword] = useState(false); // 👁️ toggle state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Registration Successful!");
  };

  // ☕ Background (page) image
  const backgroundImage =
    "https://cdn.viva.org.uk/wp-content/uploads/2021/03/coffee-cup-and-beans-590x332.jpg";

  // ☕ Card background (coffee texture)
  const cardBackground =
    "https://justcook.butcherbox.com/wp-content/uploads/2019/12/janko-ferlic-specialdaddy-h9Iq22JJlGk-unsplash-800x450.jpg";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        p: 2,
      }}
    >
      <Card
        sx={{
          width: 320,
          p: 0,
          borderRadius: 3,
          boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.25)",
          backgroundImage: `url(${cardBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.3s ease",
          opacity: 0.9, // ✨ make card image slightly transparent
          "&:hover": {
            transform: "scale(1.02)",
            opacity: 0.95,
          },
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 0,
          },
        }}
      >
        <CardContent sx={{ px: 3, py: 2, position: "relative", zIndex: 1 }}>
          <Typography
            variant="h6"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#ffebcd",
              mb: 2,
              letterSpacing: 0.5,
            }}
          >
            ☕ Sign up
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="uname"
              fullWidth
              size="small"
              margin="dense"
              value={formData.uname}
              onChange={handleChange}
              InputLabelProps={{ style: { color: "#f5deb3" } }}
              InputProps={{ style: { color: "#fff" } }}
            />

            <TextField
              label="Email"
              name="uemail"
              type="email"
              fullWidth
              size="small"
              margin="dense"
              value={formData.uemail}
              onChange={handleChange}
              InputLabelProps={{ style: { color: "#f5deb3" } }}
              InputProps={{ style: { color: "#fff" } }}
            />

            {/* 👁️ Password field with toggle */}
            <TextField
              label="Password"
              name="upassword"
              type={showPassword ? "text" : "password"}
              fullWidth
              size="small"
              margin="dense"
              value={formData.upassword}
              onChange={handleChange}
              InputLabelProps={{ style: { color: "#f5deb3" } }}
              InputProps={{
                style: { color: "#fff" },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      sx={{ color: "#f5deb3" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Address"
              name="uaddress"
              fullWidth
              size="small"
              margin="dense"
              value={formData.uaddress}
              onChange={handleChange}
              InputLabelProps={{ style: { color: "#f5deb3" } }}
              InputProps={{ style: { color: "#fff" } }}
            />

            {/* 📱 Phone number field (number type for selecting and numeric input) */}
            <TextField
              label="Phone Number"
              name="uphone"
              type="tel"
              fullWidth
              size="small"
              margin="dense"
              value={formData.uphone}
              onChange={handleChange}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              InputLabelProps={{ style: { color: "#f5deb3" } }}
              InputProps={{ style: { color: "#fff" } }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                background: "linear-gradient(90deg, #6F4E37, #A0522D)",
                color: "#fff",
                fontWeight: "bold",
                py: 1,
                borderRadius: "8px",
                fontSize: "0.85rem",
                "&:hover": {
                  background: "linear-gradient(90deg, #A0522D, #6F4E37)",
                  boxShadow: "0 0 10px rgba(165, 105, 79, 0.6)",
                },
              }}
            >
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Registration;
