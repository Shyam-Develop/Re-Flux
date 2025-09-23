import React, { useEffect, useRef } from "react";
import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    MenuItem,
    Card,
    useMediaQuery, Paper,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import ServicesSection from "app/components/Card/AboutUS/Section1";
import Brand1 from '../../../assets/Brand1.png';
import Brand2crea from "../../../assets/Brand2crea.png";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { typography } from "app/utils/constant";
import Footer from "app/components/Card/Footer";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { PostContactUS } from "app/redux/slice/postSlice";

import { useDispatch } from "react-redux";
// ✅ Validation Schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Inquiry subject is required"),
  message: Yup.string().required("Message is required"),
});

const ContactUs = () => {
    const theme = useTheme();
    const isNonMobile = useMediaQuery("(min-width:600px)");
const dispatch=useDispatch();

    //=================MAP=====================//
    const googleMapsUrl =
        "https://www.google.com/maps/place/1112+A+Market+St+%23+Ste+B22,+Charlottesville,+CA+45565";
    const mapRef = useRef(null);

    // useEffect(() => {
    //     // Load Google Maps script
    //     const script = document.createElement("script");
    //     script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    //     script.async = true;
    //     document.body.appendChild(script);

    //     // Attach map init function to window
    //     window.initMap = () => {
    //         fetch(
    //             "https://maps.googleapis.com/maps/api/js/examples/styles/minimal_hosting.json"
    //         )
    //             .then((res) => res.json())
    //             .then((mapStyle) => {
    //                 const map = new window.google.maps.Map(mapRef.current, {
    //                     center: { lat: 38.0293, lng: -78.4767 }, // Charlottesville, VA
    //                     zoom: 14,
    //                     styles: mapStyle,
    //                 });

    //                 new window.google.maps.Marker({
    //                     position: { lat: 38.0293, lng: -78.4767 },
    //                     map,
    //                     title: "Head Office",
    //                 });
    //             });
    //     };
    // }, []);
    
    
const handleSubmit = async(values) => {
  try {
    const idata = {
      Name: values.name,
      Email: values.email,
      Subject: values.subject,
      Message: values.message,
    };

    console.log("🚀 ~ handleSubmit ~ idata:", idata);

    const response = await dispatch(PostContactUS({ idata }));
if(response.payload.Status === "Y"){
  // ✅ success popup
     alert(`${response.payload.Message}`) 
  
}else{
  
   alert(`${response.payload.Message}`)
}
  
  } catch (error) {
    console.error("❌ Error submitting form:", error);


  }
};
    return (
        <Box
            display="grid"
            gap="20px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
                "& > div": {
                    gridColumn: isNonMobile ? undefined : "span 4",
                },
                padding: "10px",
            }}
        >
            <Box sx={{ gridColumn: "span 4", p: 2 }}>

                {/* Heading */}
                <Typography

                    sx={{
                        ...typography.displayM,
                        color: "#0C0F13",
                        textAlign: "center", mb: 6
                    }}
                >
                    Contact Us
                </Typography>
                {/* Responsive Flex Layout */}
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
                            boxSizing: "border-box",
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                        }}
                    >
                        <Box>
                            <Typography sx={{ ...typography.h1, color: "#0E1109" }} gutterBottom>
                                Contact Information
                            </Typography>
                            <Typography sx={{ ...typography.bodyBase, color: "#0E1109" }}>
                                Get in touch with our approachable team using your preferred method—be it a quick message, a phone call, or a form submission.
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <Box>
                                <Typography sx={{ ...typography.bodyBasemedium, color: "#0E1109" }}>Email Address</Typography>
                                <Typography sx={{ ...typography.bodySmall, color: "#0E1109" }}>contact@magnetsindia.com</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ ...typography.bodyBasemedium, color: "#0E1109" }}>Phone Number</Typography>
                                <Typography sx={{ ...typography.bodySmall, color: "#0E1109" }}>+91 98765-43210</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ ...typography.bodyBasemedium, color: "#0E1109" }}>Office Location</Typography>
                                <Typography sx={{ ...typography.bodySmall, color: "#0E1109" }}>Magnets India, 123 Magnet Lane, Chennai, India</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ ...typography.bodyBasemedium, color: "#0E1109" }}>Business Hours</Typography>
                                <Typography sx={{ ...typography.bodySmall, color: "#0E1109" }}>Monday – Saturday | 09:00 AM – 07:00 PM</Typography>
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
              <Typography>Your Name</Typography>
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                placeholder="Enter your name"
                value={values.name}
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />

              {/* Email */}
              <Typography>Your Email</Typography>
              <TextField
                fullWidth
                type="email"
                label="Your Email"
                name="email"
                placeholder="example@mail.com"
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />

              {/* Subject */}
              <Typography>Inquiry Subject</Typography>
              <TextField
                fullWidth
                select
                label="Inquiry Subject"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                error={touched.subject && Boolean(errors.subject)}
                helperText={touched.subject && errors.subject}
              >
                <MenuItem value="">Choose Your Inquiry Subject</MenuItem>
                <MenuItem value="support">Support</MenuItem>
                <MenuItem value="sales">Sales</MenuItem>
                <MenuItem value="feedback">Feedback</MenuItem>
              </TextField>

              {/* Message */}
              <Typography>Your Message</Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Your Message"
                name="message"
                placeholder="Type your message here..."
                value={values.message}
                onChange={handleChange}
                error={touched.message && Boolean(errors.message)}
                helperText={touched.message && errors.message}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#facc15",
                  color: "black",
                  fontWeight: "bold",
                  borderRadius: "25px",
                  py: 1.5,
                  "&:hover": { backgroundColor: "#fbbf24" },
                }}
              >
                Submit Message
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
                </Box>


                {/* Map Section */}

                {/* Heading */}
                <Box
                    sx={{
                        maxWidth: "1280px", // container max width
                        width: "100%",      // full width on smaller screens
                        gap: 4,
                        transform: "rotate(0deg)",
                        opacity: 1,
                        boxSizing: "border-box",
                        mt: 2,
                        mx: "auto", // center horizontally
                    }}
                >
                    <Typography
                        sx={{
                            ...typography.h2,
                            color: "#0C0F13",
                            mb: 4,
                            textAlign: { xs: "center", md: "left" }, // center on small, left on md+
                        }}
                    >
                        Our Location
                    </Typography>


                    {/* MAP ROWS */}
                    {[1, 2, 3].map((item) => (
                        <Box
                            key={item}
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                gap: 4,
                                alignItems: "center",
                                width: "100%",
                                mb: 4, // vertical spacing between rows
                                justifyContent: "center", // center the row on large screens
                            }}
                        >
                            {/* Map Section */}
                            <Paper
                                elevation={3}
                                sx={{
                                    borderRadius: 2,
                                    overflow: "hidden",
                                    height: "300px",
                                    flex: { xs: "1 1 100%", md: "1 1 50%" },
                                }}
                            >
                                <Box
                                    component="a"
                                    href={googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ display: "block", width: "100%", height: "100%" }}
                                >
                                    <iframe
                                        title={`location-map-${item}`}
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.251785352883!2d-78.4766789!3d38.0293056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b38656c1bba22f%3A0xd8bda1d3b2f6613d!2s1112%20A%20Market%20St%20%23%20Ste%20B22%2C%20Charlottesville%2C%20VA%2022902!5e0!3m2!1sen!2sus!4v1633043300000!5m2!1sen!2sus"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                    ></iframe>
                                </Box>
                            </Paper>

                            {/* Address Section */}
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
                                <Typography sx={{ ...typography.h2, color: "#0A142F", mb: 1 }}>
                                    Head Office
                                </Typography>
                                <Typography sx={{ ...typography.h5, color: "#0A142F" }}>
                                    Xilliams Corner Wine © 2017. <br />
                                    1112 A Market St # Ste B22, <br />
                                    Charlottesville, CA 45565
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>




                <ServicesSection />


                {/* Footer Section */}
                <Footer />
            </Box>
        </Box>
    );
}


export default ContactUs;

