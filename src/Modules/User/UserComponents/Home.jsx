// Home.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box, Container, Typography } from "@mui/material";

// Coffee Equipment Products
const PRODUCTS = [
  { id: 1, title: "Espresso Machine", img: "https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202538/0433/img1o.jpg", description: "Brew rich and aromatic espresso shots at home." },
  { id: 2, title: "Coffee Grinder", img: "https://media.istockphoto.com/id/618340264/photo/coffee-beans-in-a-portafilter-by-the-coffee-grinder.jpg?s=612x612&w=0&k=20&c=ZXqYdnVFx6h0pPFd4UJIj6XQbK28HtDAw4sa0OhGaB0=", description: "Grind your beans to the perfect consistency for every brew." },
  { id: 3, title: "French Press", img: "https://axilcoffee.com.au/cdn/shop/articles/French-press_1440x.jpg?v=1715056998", description: "Classic French press for bold, flavorful coffee." },
  { id: 4, title: "Pour Over Set", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTQPqT3Ct9mA1oyg8RPNGmI4xdLg_vj1qGtZgueKJmoOZyEyNIVRji2qNrvy6g2qh70HClBLet7YB_cplkkBpAocPFdmtlOIV4c0MvrhoiHlAM6gG5J1tKr", description: "Control your brewing with precision pour-over technique." },
  { id: 5, title: "Milk Frother", img: "https://m.media-amazon.com/images/I/61IF4Pqb7BL.jpg", description: "Create creamy frothed milk for lattes and cappuccinos." },
  { id: 6, title: "Coffee Scale", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR2DtTiGSpb6zFkdJZCU9YY6hJ0wWiLWc4n5wlpvmb5eJdTrdPZzkKSyronqk83TiqB9T6M8hxBMtT2cjyX_6RLeeQJnVY9yLDe94GNjsYLjPLldPCqV8N2", description: "Measure coffee and water accurately for the perfect brew." },
];

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "#6f4e37", // Coffee brown background
        minHeight: "100vh",
        backgroundImage: "url('https://media.istockphoto.com/id/1467739359/photo/cup-of-coffee-with-smoke-and-coffee-beans-on-old-wooden-background.jpg?s=612x612&w=0&k=20&c=tE80r7iDn7S9YwIJVuKAm5KmpJPVz5HbRDc975IlKVo=')", // subtle coffee-themed image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />

      <Container sx={{ py: 6, backgroundColor: "rgba(255,255,255,0.85)", borderRadius: 3 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, mb: 4, color: "#4b2e2e" }}
        >
          Coffee Equipment
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
            gap: 4,
          }}
        >
          {PRODUCTS.map((product) => (
            <Box
              key={product.id}
              sx={{
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": { transform: "scale(1.05)", boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" },
                borderRadius: 2,
                overflow: "hidden",
                backgroundColor: "#fff",
              }}
            >
              <img
                src={product.img}
                alt={product.title}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <Typography variant="h6" sx={{ mt: 1, fontWeight: 600, px: 1 }}>
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ px: 1, pb: 2 }}>
                {product.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
