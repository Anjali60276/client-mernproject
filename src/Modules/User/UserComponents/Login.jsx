import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../../ContextProvider";
import { useContext } from "react";



const Login = () => {
  const { host } = useContext(UserContext);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault(); // keep this — form submit event


    axios
      .post(`${host}api/user/Login`, login)
      .then((res) => {
        console.log("login details", res.data);
        alert("login successful");
        if(res.data.success){
          localStorage.setItem("UserToken",res.data.Token)

        }
      })
      .catch((error) => {
        console.log(error)
      });

      console.log(host);

    const users = JSON.parse(localStorage.getItem("Users")) || [];
    const matchedUser = users.find(
      (user) => user.email === login.email && user.password === login.password
    );

    if (matchedUser) {
      localStorage.setItem("loggedinuser", JSON.stringify(matchedUser));
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid email or password!");
    }
  };

 

  // ☕ Background and Card Images
  const backgroundImage =
    "https://justcook.butcherbox.com/wp-content/uploads/2019/12/janko-ferlic-specialdaddy-h9Iq22JJlGk-unsplash-800x450.jpg";
  const cardBackground =
    "https://img.freepik.com/free-photo/tool-used-coffee-press_23-2149878078.jpg?semt=ais_hybrid&w=740&q=80";

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        <CardContent sx={{ position: "relative", zIndex: 1, px: 3, py: 2 }}>
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
            ☕ Login for Coffee
          </Typography>

          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              size="small"
              margin="dense"
              value={login.email}
              onChange={handleChange}
              required
              InputLabelProps={{ style: { color: "#f5deb3" } }}
              InputProps={{ style: { color: "#fff" } }}
            />

            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              size="small"
              margin="dense"
              value={login.password}
              onChange={handleChange}
              required
              InputLabelProps={{ style: { color: "#f5deb3" } }}
              InputProps={{ style: { color: "#fff" } }}
            />

            <FormControlLabel
              control={<Checkbox sx={{ color: "#f5deb3" }} />}
              label={
                <Typography variant="body2" sx={{ color: "#f5deb3" }}>
                  Remember me
                </Typography>
              }
              sx={{ mt: 1 }}
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
              Login
            </Button>
          </form>

          <Typography
            variant="body2"
            align="center"
            sx={{
              mt: 2,
              color: "#f5deb3",
            }}
          >
            Don’t have an account?{" "}
            <Link
              to="/user/URegister"
              style={{
                color: "#ffebcd",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              Registration
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
