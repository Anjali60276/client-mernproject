// src/Modules/Public/Contact.jsx
import React, { useState, useContext } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import { UserContext } from "../../../ContextProvider";
import axios from "axios";

export default function Contact() {
  const { host } = useContext(UserContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [snack, setSnack] = useState({ open: false, severity: "success", msg: "" });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    setErrors((p) => ({ ...p, [e.target.name]: undefined }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    try {
      // Endpoint: POST `${host}/api/contact`
      // payload keys: name, email, subject, message
      await axios.post(`${host}/api/contact`, {
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      });

      setSnack({ open: true, severity: "success", msg: "Message sent — thank you!" });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Contact send error:", err);
      setSnack({
        open: true,
        severity: "error",
        msg: "Something went wrong. Please try again later.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Box component="main" sx={{ bgcolor: "#fffaf0", py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 700, textAlign: "center" }}>
          Get in touch
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
                Brewed Awakenings
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                Have a question about our beans, catering, or events? Drop us a line — we reply
                within 24–48 hours.
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 1 }}>
                <RoomIcon />
                <Box>
                  <Typography variant="subtitle2">Address</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    123 Roast Lane, Coffeeville, CA 90210
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 1 }}>
                <PhoneIcon />
                <Box>
                  <Typography variant="subtitle2">Phone</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    +1 (555) 123-4567
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 1 }}>
                <EmailIcon />
                <Box>
                  <Typography variant="subtitle2">Email</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    hello@brewedawakenings.example
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 1 }}>
                <AccessTimeIcon />
                <Box>
                  <Typography variant="subtitle2">Hours</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Mon–Fri: 7am — 6pm · Sat–Sun: 8am — 4pm
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Map embed (replace src with your Google Maps embed url) */}
              <Box
                component="iframe"
                title="Our location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019123456789!2d-122.41941548468113!3d37.77492977975992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b0a9e1f%3A0xabcdef1234567890!2sCoffee+Shop!5e0!3m2!1sen!2sus!4v0000000000000"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: 8 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
                Send us a message
              </Typography>

              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="name"
                      name="name"
                      label="Your name"
                      value={form.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      autoComplete="name"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      name="email"
                      label="Email address"
                      value={form.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      autoComplete="email"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="subject"
                      name="subject"
                      label="Subject"
                      value={form.subject}
                      onChange={handleChange}
                      error={!!errors.subject}
                      helperText={errors.subject}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      multiline
                      minRows={4}
                      id="message"
                      name="message"
                      label="Message"
                      value={form.message}
                      onChange={handleChange}
                      error={!!errors.message}
                      helperText={errors.message}
                    />
                  </Grid>

                  <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={<SendIcon />}
                      disabled={sending}
                      sx={{ textTransform: "none" }}
                    >
                      {sending ? "Sending..." : "Send message"}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Snackbar for feedback */}
      <Snackbar
        open={snack.open}
        autoHideDuration={5000}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnack((s) => ({ ...s, open: false }))}
          severity={snack.severity}
          sx={{ width: "100%" }}
        >
          {snack.msg}
        </Alert>
      </Snackbar>
    </Box>
  );
}
