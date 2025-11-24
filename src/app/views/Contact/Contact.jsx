import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
  Paper,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import { typography } from "app/utils/constant";
import Footer from "app/components/Card/Footer";
import ServicesSection from "app/components/Card/AboutUS/Section1";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { PostContactUS } from "app/redux/slice/postSlice";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Inquiry subject is required"),
  message: Yup.string().required("Message is required"),
});

export default function ContactUs() {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // ✅ Fetch content from API
  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}?contentId=C004`)
      .then((res) => res.json())
      .then((data) => setContent(data))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  // ✅ Check admin
  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  // ✅ Edit button
  const handleEdit = (id, type = "T") => {
    navigate(`/CmsEditor?contentId=C004&contentTextID=${id}&contentType=${type}`);
  };
  const EditIconButton = ({ id, type = "T" }) =>
    isAdmin ? (
      <IconButton
        size="small"
        onClick={() => handleEdit(id, type)}
       sx={{
          ml: 1,
          p: 0.5,
          borderRadius: "50%",
          backgroundColor: "#f0f0f0",
          color: "#1C2D4B",
          border: "1px solid #ccc",
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "#e0e0e0",
            color: "#070808ff",
            //borderColor: "#214870",
          },
          verticalAlign: "middle",
        }}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    ) : null;

  const handleSubmit = async (values) => {
    try {
      const idata = {
        Name: values.name,
        Email: values.email,
        Subject: values.subject,
        Message: values.message,
      };

      const response = await dispatch(PostContactUS({ idata }));
      alert(response.payload.Message);
    } catch (error) {
      console.error("❌ Error submitting form:", error);
    }
  };

  if (!content) return null;

  const googleMapsLink = "https://www.google.com/maps/search/?api=1&query=13.104444,80.173889";
  const googleMapsEmbed =
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15571.234567!2d80.173889!3d13.104444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4vXXXXXXXXXX";

  return (
    <Box
      display="grid"
      gap="20px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
        padding: "10px",
      }}
    >
      <Box sx={{ gridColumn: "span 4", p: 2 }}>
        {/* Heading */}
        <Typography sx={{ ...typography.displayM, color: "#0C0F13", textAlign: "center", mb: 6 }}>
          {content.CON400101}
          <EditIconButton id="CON400101" />
        </Typography>

        {/* Contact Info & Form */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1280px",
            minHeight: "590px",
            px: { xs: 2, sm: 4 },
            gap: { xs: 3, md: 6 },
            margin: "0 auto",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: { xs: "center", md: "stretch" },
          }}
        >
          {/* Left Contact Info */}
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "#eaf0f8",
              flex: "1 1 100%",
              maxWidth: { xs: "100%", md: "576px" },
              minHeight: "590px",
              borderRadius: "16px",
              p: { xs: 4, md: 6 },
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Box>
              <Typography sx={{ ...typography.h1, fontWeight: 600, color: "#0E1109" }} gutterBottom>
                {content.CON400102}
                <EditIconButton id="CON400102" />
              </Typography>
              <Typography sx={{ ...typography.bodyBase, color: "#0E1109" }}>
                {content.CON400103}
                <EditIconButton id="CON400103" />
              </Typography>
            </Box>

            {/* Info blocks */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box>
                <Typography sx={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600, fontSize: '18px', color: "#0E1109" }}>
                  {content.CON400104}
                  <EditIconButton id="CON400104" />
                </Typography>
                <Typography sx={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 400, fontSize: '18px', color: "#0E1109" }}>{content.CON400105}
                  <EditIconButton id="CON400105" />
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600, fontSize: '18px', color: "#0E1109" }}>{content.CON400106}
                  <EditIconButton id="CON400106" />
                </Typography>
                <Typography sx={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 400, fontSize: '18px', color: "#0E1109" }}>{content.CON400107}
                  <EditIconButton id="CON400107" />
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600, fontSize: '18px', color: "#0E1109" }}>{content.CON400108}
                  <EditIconButton id="CON400108" />
                </Typography>
                <Typography sx={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 400, fontSize: '18px', color: "#0E1109" }}>{content.CON400109}
                  <EditIconButton id="CON400109" />
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600, fontSize: '18px', color: "#0E1109" }}>{content.CON400110}
                  <EditIconButton id="CON400110" />
                </Typography>
                <Typography sx={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 400, fontSize: '18px', color: "#0E1109" }}>{content.CON400111}
                  <EditIconButton id="CON400111" />
                </Typography>

              </Box>
            </Box>
          </Paper>

          {/* Right Form */}
          <Box
            sx={{
              flex: "1 1 100%",
              maxWidth: { xs: "100%", md: "576px" },
              minHeight: "590px",
              borderRadius: "16px",
              border: "1px solid #ccc",
              p: { xs: 2, md: 3 },
              backgroundColor: "white",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
              mt: { xs: 3, md: 0 },
            }}
          >
            <Formik
              initialValues={{
                name: "Arnav Sharma",
                email: "",
                subject: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                console.log("Form Submitted:", values);
                handleSubmit(values)
                resetForm();
              }}
            >
              {({ errors, touched, handleChange, values }) => (
                <Form>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    {/* Name */}
                    <Typography sx={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 500, fontSize: '16px', }}>{content.CON400112}
                      <EditIconButton id="CON400112" />
                    </Typography>
                    <TextField
                      fullWidth
                      label="Your name"
                      name="name"
                      placeholder="Enter your name"
                      value={values.name}
                      onChange={handleChange}
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                    />
                    {/* Email */}
                    <Typography sx={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 500, fontSize: '16px', }}>{content.CON400114}
                      <EditIconButton id="CON400114" />
                    </Typography>

                    <TextField
                      fullWidth
                      type="email"
                      label="Your email"
                      name="email"
                      placeholder="example@mail.com"
                      value={values.email}
                      onChange={handleChange}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                    {/* Subject */}
                    <Typography sx={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 500, fontSize: '16px', }}>{content.CON400116}
                      <EditIconButton id="CON400116" />
                    </Typography>

                    <TextField
                      fullWidth
                      select
                      label="Inquiry subject"
                      name="subject"
                      value={values.subject}
                      onChange={handleChange}
                      error={touched.subject && Boolean(errors.subject)}
                      helperText={touched.subject && errors.subject}
                    >
                      <MenuItem value="">{content.CON400117}</MenuItem>
                      <MenuItem value="support">{content.CON400118}</MenuItem>
                      <MenuItem value="sales">{content.CON400119}</MenuItem>
                      <MenuItem value="feedback">{content.CON400120}</MenuItem>
                    </TextField>

                    {/* Message */}
                    <Typography sx={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 500, fontSize: '16px', }}>{content.CON400121}
                      <EditIconButton id="CON400121" />
                    </Typography>

                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Your message"
                      name="message"
                      placeholder="Type your message here..."
                      value={values.message}
                      onChange={handleChange}
                      error={touched.message && Boolean(errors.message)}
                      helperText={touched.message && errors.message}
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        fontWeight: 600,
                        fontSize: '16px',
                        backgroundColor: "#facc15",
                        color: "black",
                        fontWeight: "bold",
                        borderRadius: "25px",
                        py: 1,
                        "&:hover": { backgroundColor: "#fbbf24" },
                      }}
                    >
                      {content.CON400123}
                      <EditIconButton id="CON400123" />
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>

        {/* --- Map Section --- */}
        <Box sx={{
          maxWidth: "1280px", // container max width
          width: "100%",      // full width on smaller screens
          gap: 4,
          pl: 5,
          transform: "rotate(0deg)",
          opacity: 1,
          boxSizing: "border-box",
          mt: 2,
          mx: "auto", // center horizontally
        }}>
          <Typography sx={{
            ...typography.h2,
            fontWeight: 600,
            fontSize: '32px',
            color: "#0C0F13",
            mb: 4,
            textAlign: { xs: "center", md: "left" }, // center on small, left on md+
          }}>
            {content.CON400124}
            <EditIconButton id="CON400124" />
          </Typography>

          {[1, 2, 3].map((item) => (
            <Box
              key={item}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
                alignItems: "center",
                width: "100%",
                mb: 4,
                justifyContent: "center",
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  height: "300px",
                  flex: { xs: "1 1 100%", md: "1 1 17%" },
                }}
              >
                <Box
                  component="a"
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: "block", width: "400px", height: "300px" }}
                >
                  <iframe
                    title={`location-map-${item}`}
                    src={googleMapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </Box>
              </Paper>

              <Box
                sx={{
                  flex: { xs: "1 1 100%", md: "1 1 50%" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: { xs: "center", md: "flex-start" },
                  width: { xs: "100%", md: "302px" },
                  height: "136px",
                  gap: "20px",
                  textAlign: { xs: "center", md: "left" },
                  pl: { xs: 0, md: 10 }, // padding-left on desktop only
                }}
              >
                <Typography sx={{ ...typography.h2, fontWeight: 600, fontSize: '32px', color: "#0A142F", mb: 1 }}>
                  {content.CON400125}
                  <EditIconButton id="CON400125" />
                </Typography>
                <Typography sx={{ ...typography.h5, fontWeight: 500, fontSize: '20px', color: "#0A142F" }}>
                  {content.CON400126}
                  <EditIconButton id="CON400126" /><br />
                  {content.CON400127}
                   <EditIconButton id="CON400127" /><br />
                  {content.CON400128}
                   <EditIconButton id="CON400128" />
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <ServicesSection />
        <Footer />
      </Box>
    </Box>
  );
}
