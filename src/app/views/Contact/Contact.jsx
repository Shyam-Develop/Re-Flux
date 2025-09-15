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
const ContactUs = () => {
    const theme = useTheme();
    const isNonMobile = useMediaQuery("(min-width:600px)");


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
                        color:"#0C0F13",
                        textAlign: "center",  mb: 6 }}
                >
                    Contact Us
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {/* Left Contact Info */}
                     <Grid item xs={12} md={4}>
                                                <Paper elevation={0} sx={{ p: 3, borderRadius: 2, backgroundColor: "#eaf0f8" }}>
                                                    <Typography sx={{
                                                          ...typography.h1,
                                                color:"#0E1109",
                                                    }} gutterBottom>
                                                        Contact Information
                                                    </Typography>
                                                    <Typography sx={{
                                                          ...typography.bodyBase,
                                                color:"#0E1109",
                                                    }} gutterBottom>
                                                        Get in touch with our approachable team using your preferred method—be it a quick message, a phone call, or a form submission.
                                                    </Typography>
                    
                                                    <Box mt={2}>
                                                        <Typography sx={{
                                                          ...typography.bodyBasemedium,
                                                color:"#0E1109",
                                                    }}>Email Address</Typography>
                                                        <Typography sx={{
                                                          ...typography.bodySmall,
                                                color:"#0E1109",
                                                    }}>contact@magnetsindia.com</Typography>
                                                    </Box>
                    
                                                    <Box mt={2}>
                                                        <Typography  sx={{
                                                          ...typography.bodyBasemedium,
                                                color:"#0E1109",
                                                    }}>Phone Number</Typography>
                                                        <Typography sx={{
                                                          ...typography.bodySmall,
                                                color:"#0E1109",
                                                    }}>+91 98765-43210</Typography>
                                                    </Box>
                    
                                                    <Box mt={2}>
                                                        <Typography  sx={{
                                                          ...typography.bodyBasemedium,
                                                color:"#0E1109",
                                                    }}>Office Location</Typography>
                                                        <Typography sx={{
                                                          ...typography.bodySmall,
                                                color:"#0E1109",
                                                    }}>
                                                            Magnets India, 123 Magnet Lane, Chennai, India
                                                        </Typography>
                                                    </Box>
                    
                                                    <Box mt={2}>
                                                        <Typography  
                                                        sx={{
                                                          ...typography.bodyBasemedium,
                                                color:"#0E1109",
                                                    }}
                                                    >Business Hours</Typography>
                                                        <Typography sx={{
                                                          ...typography.bodySmall,
                                                color:"#0E1109",
                                                    }}>Monday – Saturday | 09:00 AM – 07:00 PM</Typography>
                                                    </Box>
                                                </Paper>
                                            </Grid>
                    {/* <Grid item xs={12} md={5}>
                        <Card
                            sx={{
                                p: 4,
                                borderRadius: 3,
                                backgroundColor: "#eaf3fb",
                                height: "100%",
                            }}
                        >
                            <Typography sx={{ ...typography.h1,
                        color:"#0E1109",fontWeight: "bold", mb: 2 }}>
                                Contact Information
                            </Typography>
                            <Typography  sx={{ 
                                ...typography.bodyStrong,
                                color:"#0E1109",
                                mb: 3 }}>
                                Get in touch with our approachable team using your preferred method—be it a quick message, a phone call, or a form submission.
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 1 }}>
                                <strong>Email Address</strong> <br />
                                contact@magnetsindia.com
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                <strong>Phone Number</strong> <br />
                                +91 98765-43210
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                <strong>Office Location</strong> <br />
                                Magnets India, 123 Magnet Lane, Chennai, India
                            </Typography>
                            <Typography variant="body2">
                                <strong>Business Hours</strong> <br />
                                Monday - Saturday | 09:00 AM – 07:00 PM
                            </Typography>
                        </Card>
                    </Grid> */}

                    {/* Right Form */}
                    <Grid item xs={12} md={7}>
                        <Card sx={{ p: 4, borderRadius: 3 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Your Name"
                                        placeholder="Enter your name"
                                        defaultValue="Arnav Sharma"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="email"
                                        label="Your Email"
                                        placeholder="example@mail.com"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        select
                                        label="Inquiry Subject"
                                        defaultValue=""
                                    >
                                        <MenuItem value="">Choose Your Inquiry Subject</MenuItem>
                                        <MenuItem value="support">Support</MenuItem>
                                        <MenuItem value="sales">Sales</MenuItem>
                                        <MenuItem value="feedback">Feedback</MenuItem>
                                    </TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={4}
                                        label="Your Message"
                                        placeholder="Type your message here..."
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
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
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
                {/* Map Section */}

                {/* Heading */}
                <Typography
                    sx={{ ...typography.h2,
                                color:"#0C0F13", mb: 4 }}
                >
                    Our Location
                </Typography>

                <Grid container spacing={4} alignItems="center">
                    {/* Map Section */}
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={3}
                            sx={{ borderRadius: 2, overflow: "hidden", height: "300px" }}
                        >
                            <Box
                                component="a"
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ display: "block", width: "100%", height: "100%" }}
                            >
                                <iframe
                                    title="location-map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.251785352883!2d-78.4766789!3d38.0293056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b38656c1bba22f%3A0xd8bda1d3b2f6613d!2s1112%20A%20Market%20St%20%23%20Ste%20B22%2C%20Charlottesville%2C%20VA%2022902!5e0!3m2!1sen!2sus!4v1633043300000!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Address Section */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center", // 👈 keeps block centered
                                height: "100%",
                            }}
                        >
                            <Box sx={{ textAlign: "left" }}> {/* 👈 ensures text lines align equally */}
                                <Typography  sx={{ ...typography.h2,
                                color:"#0A142F", mb: 1 }}>
                                    Head Office
                                </Typography>
                                <Typography sx={{
                                    ...typography.h5,
                                    color:"#0A142F"
                                }}>
                                    Xilliams Corner Wine © 2017. <br />
                                    1112 A Market St # Ste B22, <br />
                                    Charlottesville, CA 45565
                                </Typography>
                            </Box>
                        </Box>

                    </Grid>
                </Grid>




                <Grid container spacing={4} alignItems="center" mt={2}>
                    {/* Map Section */}
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={3}
                            sx={{ borderRadius: 2, overflow: "hidden", height: "300px" }}
                        >
                            <Box
                                component="a"
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ display: "block", width: "100%", height: "100%" }}
                            >
                                <iframe
                                    title="location-map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.251785352883!2d-78.4766789!3d38.0293056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b38656c1bba22f%3A0xd8bda1d3b2f6613d!2s1112%20A%20Market%20St%20%23%20Ste%20B22%2C%20Charlottesville%2C%20VA%2022902!5e0!3m2!1sen!2sus!4v1633043300000!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Address Section */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center", // 👈 keeps block centered
                                height: "100%",
                            }}
                        >
                            <Box sx={{ textAlign: "left" }}> {/* 👈 ensures text lines align equally */}
                               <Typography  sx={{ ...typography.h2,
                                color:"#0A142F", mb: 1 }}>
                                    Head Office
                                </Typography>
                                <Typography sx={{
                                    ...typography.h5,
                                    color:"#0A142F"
                                }}>
                                    Xilliams Corner Wine © 2017. <br />
                                    1112 A Market St # Ste B22, <br />
                                    Charlottesville, CA 45565
                                </Typography>
                            </Box>
                        </Box>

                    </Grid>
                </Grid>

                <Grid container spacing={4} alignItems="center" mt={2}>
                    {/* Map Section */}
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={3}
                            sx={{ borderRadius: 2, overflow: "hidden", height: "300px" }}
                        >
                            <Box
                                component="a"
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ display: "block", width: "100%", height: "100%" }}
                            >
                                <iframe
                                    title="location-map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.251785352883!2d-78.4766789!3d38.0293056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b38656c1bba22f%3A0xd8bda1d3b2f6613d!2s1112%20A%20Market%20St%20%23%20Ste%20B22%2C%20Charlottesville%2C%20VA%2022902!5e0!3m2!1sen!2sus!4v1633043300000!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Address Section */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center", // 👈 keeps block centered
                                height: "100%",
                            }}
                        >
                            <Box sx={{ textAlign: "left" }}> {/* 👈 ensures text lines align equally */}
                               <Typography  sx={{ ...typography.h2,
                                color:"#0A142F", mb: 1 }}>
                                    Head Office
                                </Typography>
                                <Typography sx={{
                                    ...typography.h5,
                                    color:"#0A142F"
                                }}>
                                    Xilliams Corner Wine © 2017. <br />
                                    1112 A Market St # Ste B22, <br />
                                    Charlottesville, CA 45565
                                </Typography>
                            </Box>
                        </Box>

                    </Grid>
                </Grid>

<ServicesSection/>
    {/* Footer Section */}
<Box
  component="footer"
  sx={{
    backgroundColor: "#0b2d55",
    color: "#fff",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    width: "100%",
    px: { xs: 4, md: 12 },
    py: { xs: 6, md: 10 },
  }}
>
  <Grid container spacing={4} alignItems="flex-start">
    {/* 1. Left: Logo + Sub-brand */}
    <Grid item xs={12} md={4}>
      <Box mb={3}>
        <img src={Brand1} alt="ReFlux Magnets" style={{ height: 60 }} />
      </Box>
      <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
        A unit of
      </Typography>
      <Box>
        <img src={Brand1} alt="Electro Flux" style={{ height: 60 }} />
      </Box>
    </Grid>

    {/* 2. Middle: Contact Info */}
    <Grid item xs={12} md={4}>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "14px",
          border: "1px solid #fff",
          borderRadius: "16px",
          px: 2,
          py: 0.5,
          display: "inline-block",
          mb: 2,
        }}
      >
        Contact
      </Typography>

      <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
        Xilliams Corner Wine © 2017. <br />
        1112 A Market St # Ste B22,<br />
        Charlottesville, CA 45565
      </Typography>

      <Typography sx={{ mt: 2 }}>(123) 456-7890</Typography>
      <Typography
        sx={{
          mt: 1,
          display: "inline-block",
          borderBottom: "2px solid #1976d2",
          pb: "2px",
        }}
      >
        contact@lift.agency
      </Typography>
    </Grid>

    {/* 3. Right: Links + Arrow + Copyright */}
    <Grid item xs={12} md={4}>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "14px",
          border: "1px solid #fff",
          borderRadius: "16px",
          px: 2,
          py: 0.5,
          display: "inline-block",
          mb: 2,
        }}
      >
        Links
      </Typography>

      {["Facebook", "Instagram", "Youtube"].map((item) => (
        <Typography key={item} sx={{ mb: 1 }}>
          {item}
        </Typography>
      ))}

      <Typography sx={{ fontWeight: 700, mt: 2 }}>Wall of Love ❤️</Typography>
      <Box
        sx={{
          width: 30,
          height: 2,
          backgroundColor: "#fff",
          my: 1,
        }}
      />
      <Typography sx={{ fontWeight: 700, mb: 3 }}>Sitemap</Typography>

      {/* Scroll to top icon */}
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1px solid #fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          mb: 2,
        }}
      >
        <ArrowUpwardIcon sx={{ color: "#fff" }} />
      </Box>

      <Typography variant="caption" sx={{ color: "#ccc" }}>
        © 2020 Lift Media All rights reserved.
      </Typography>
    </Grid>
  </Grid>
</Box>
            </Box>
        </Box>
    );
}


export default ContactUs;
