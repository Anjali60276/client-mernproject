
import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Avatar,
  Divider,
  Container,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Box component="main" sx={{ bgcolor: "#fffaf0", py: { xs: 4, md: 8 } }}>
      {/* Hero */}
      <Container maxWidth="lg">
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "center",
            p: { xs: 3, md: 5 },
            borderRadius: 3,
            background:
              "linear-gradient(180deg, rgba(255,250,240,1) 0%, rgba(255,245,235,1) 100%)",
          }}
        >
          <Box
            component="img"
            src="https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fHww"
            alt="Steaming cup of coffee on a wooden table"
            sx={{
              width: { xs: "120px", md: "220px" },
              height: { xs: "120px", md: "220px" },
              objectFit: "cover",
              borderRadius: 2,
              flexShrink: 0,
            }}
          />

          <Box>
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontWeight: 700, mb: 1 }}
            >
              Brewed Awakenings
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 2, color: "text.secondary" }}>
              Small-batch roasted. Big-hearted service. Come for the coffee — stay for the vibe.
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                component={Link}
                to="/menu"
                variant="contained"
                startIcon={<MenuBookIcon />}
                sx={{ textTransform: "none" }}
              >
                View Menu
              </Button>

              <Button
                component={Link}
                to="/order"
                variant="outlined"
                startIcon={<LocalCafeIcon />}
                sx={{ textTransform: "none" }}
              >
                Order Online
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>

      {/* Story & Values */}
      <Container maxWidth="lg" sx={{ mt: { xs: 3, md: 6 } }}>
        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3, height: "100%", borderRadius: 2 }}>
              <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                Our Story
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
                What started as a tiny cart outside a late-night studio has grown into a cozy
                neighborhood spot. We roast beans with care, source ethically, and treat every
                cup like a craft. Our founder wanted a place where people pause, connect, and
                enjoy the little things.
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                Roast & Sourcing
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                We partner with small farmers and roast in small batches to highlight unique
                origin flavors — bright, chocolatey, fruity, or nutty depending on the lot.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3, height: "100%", borderRadius: 2 }}>
              <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                Our Values
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexDirection: "column", mt: 1 }}>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <FavoriteIcon />{" "}
                  <Typography variant="body1" sx={{ ml: 0.5 }}>
                    Community first — supporting local creatives and neighbors.
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <LocalCafeIcon />{" "}
                  <Typography variant="body1" sx={{ ml: 0.5 }}>
                    Quality over quantity — careful roasting and precise brewing.
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <MenuBookIcon />{" "}
                  <Typography variant="body1" sx={{ ml: 0.5 }}>
                    Transparency — we share origin, roast profiles, and tasting notes.
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Highlights */}
      <Container maxWidth="lg" sx={{ mt: { xs: 3, md: 6 } }}>
        <Typography variant="h5" sx={{ mb: 2, textAlign: "center", fontWeight: 700 }}>
          What Makes Us Different
        </Typography>

        <Grid container spacing={3}>
          {[
            {
              title: "Single Origin Rotations",
              desc: "Seasonal beans from trusted farms, roasted weekly.",
            },
            {
              title: "Expert Baristas",
              desc: "Friendly, trained baristas who dial in each shot.",
            },
            {
              title: "Cozy Space",
              desc: "Warm lights, comfy chairs, and free Wi-Fi — work friendly.",
            },
          ].map((item, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Paper sx={{ p: 3, height: "100%", borderRadius: 2 }} elevation={0}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Divider sx={{ my: { xs: 3, md: 6 } }} />

      {/* Team / Founders */}
      <Container maxWidth="lg">
        <Typography variant="h5" sx={{ mb: 3, textAlign: "center", fontWeight: 700 }}>
          Meet the Team
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 3, borderRadius: 2, textAlign: "center" }} elevation={1}>
              <Avatar
                alt="Founder photo"
                src="/images/founder.jpg"
                sx={{ width: 84, height: 84, margin: "0 auto 12px" }}
              />
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                Maya Thompson
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                Founder & Head Roaster
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                Maya studied coffee science and spends mornings cupping and afternoons designing
                new blends.
              </Typography>
              <Button size="small" variant="outlined" component={Link} to="/team">
                Our full team
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Call to action */}
      <Container maxWidth="lg" sx={{ mt: { xs: 3, md: 6 }, mb: { xs: 4, md: 8 } }}>
        <Paper
          elevation={2}
          sx={{
            p: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            borderRadius: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Ready for a better cup?
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Swing by the shop or order a bag of our current roast to enjoy at home.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Button component={Link} to="/menu" variant="contained">
              See Menu
            </Button>
            <Button component={Link} to="/shop" variant="outlined">
              Buy Beans
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
