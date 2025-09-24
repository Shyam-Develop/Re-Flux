import {
    Box, Button, Divider, Grid, Link, Modal, Typography, useMediaQuery, useTheme, Paper, TextField,
    MenuItem,
} from "@mui/material";
import ServicesSection from "app/components/Card/AboutUS/Section1";
import HowWeWork from "app/components/Card/AboutUS/Section2";
import AboutUsCard from "app/components/Card/AboutUS/TitleCard";
import React, { useState, useEffect, useRef } from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Brand1 from '../../../assets/Brand1.png';
import Brand2crea from "../../../assets/Brand2crea.png";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AboutUsRepairServicesPageCard from "app/components/Card/AboutUS/Section3";
import { typography } from "app/utils/constant";
import IndustriesSwiper from "app/components/Card/AboutUS/Section4";



const AboutUS = () => {

    const theme = useTheme();
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const mapRef = useRef(null);
    const googleMapsUrl =
        "https://www.google.com/maps/place/1112+A+Market+St+%23+Ste+B22,+Charlottesville,+CA+45565";
  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    document.body.appendChild(script);

    // Attach map init function to window
    window.initMap = () => {
      fetch(
        "https://maps.googleapis.com/maps/api/js/examples/styles/minimal_hosting.json"
      )
        .then((res) => res.json())
        .then((mapStyle) => {
          const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: 38.0293, lng: -78.4767 }, // Charlottesville, VA
            zoom: 14,
            styles: mapStyle,
          });

          new window.google.maps.Marker({
            position: { lat: 38.0293, lng: -78.4767 },
            map,
            title: "Head Office",
          });
        });
    };
  }, []);
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
            <Box sx={{ gridColumn: "span 4" }}
            // gap={"20px"}
            // direction={"column"}
            >
                <AboutUsCard />
                
                <ServicesSection />
                <Box
                    sx={{
                        width: "100%",
                        py: 10,
                        px: { xs: 2, md: 6 },
                        backgroundColor: "#fff",
                    }}
                >
                    <Grid container spacing={6} alignItems="flex-start">
                        {/* Column 1 - Left Text */}
                        <Grid item xs={12} md={4}>
                            <Box
                                sx={{
                                    display: "flex",
                                    mt: 10,
                                    ml: 5,
                                    flexDirection: "column",
                                    alignItems: { xs: "center", md: "flex-start" },
                                    textAlign: { xs: "center", md: "left" },
                                }}
                            >
                                <Typography variant="h4" fontWeight={700} gutterBottom>
                                    Why Choose <br /> Reflux?
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    mb={3}
                                    sx={{ maxWidth: "320px" }}
                                >
                                    We handle service and upkeep — you focus on getting the job done.
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        borderRadius: "25px",
                                        px: 3,
                                        backgroundColor: "#00A99D",
                                        "&:hover": { backgroundColor: "#00897B" },
                                    }}
                                >
                                    About Us
                                </Button>
                            </Box>
                        </Grid>

                        {/* Column 2 - Middle Content */}
                        <Grid item xs={12} md={4}>
                            {[...Array(3)].map((_, i) => (
                                <Box

                                    key={i} sx={{
                                        mb: 6,
                                        transition: "transform 0.3s ease",
                                        "&:hover": {
                                            transform: "scale(1.05)", // 🔹 Zoom out full section
                                        },
                                    }}>
                                    <Typography
                                        variant="h6" fontWeight={600} gutterBottom>
                                        Repair vs Replace ROI Instantly
                                    </Typography>
                                    <Link
                                        component="button"
                                        variant="body2"
                                        color="text.secondary"
                                        underline="hover"
                                        onClick={handleOpen}
                                        sx={{
                                            cursor: "pointer",
                                        }}
                                    >
                                        Our ROI Calculator shows payback and TCO (repair vs rental vs
                                        replace) in seconds — make data-backed decisions.
                                    </Link>
                                    <Divider sx={{ mt: 1, borderColor: "#00A99D", width: "400px" }} />
                                </Box>
                            ))}
                        </Grid>

                        {/* Column 3 - Right Content with marginTop */}
                        <Grid item xs={12} md={4}>
                            <Box sx={{
                                mt: { xs: 0, md: 8 },
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.05)", // 🔹 Zoom out full section
                                },
                            }}>
                                {[...Array(3)].map((_, i) => (
                                    <Box key={i} sx={{ mb: 6 }}>
                                        <Typography variant="h6" fontWeight={600} gutterBottom>
                                            Repair vs Replace ROI Instantly
                                        </Typography>
                                        <Link
                                            component="button"
                                            variant="body2"
                                            color="text.secondary"
                                            underline="hover"
                                            onClick={handleOpen}
                                            sx={{
                                                cursor: "pointer",
                                            }}
                                        >
                                            Our ROI Calculator shows payback and TCO (repair vs rental vs
                                            replace) in seconds — make data-backed decisions.
                                        </Link>
                                        <Divider
                                            sx={{ mt: 1, borderColor: "#00A99D", width: "400px" }}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>

                    {/* Modal */}
                    <Modal open={open} onClose={handleClose}>
                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                width: 400,
                                bgcolor: "background.paper",
                                boxShadow: 24,
                                borderRadius: 2,
                                p: 4,
                            }}
                        >
                            <Typography variant="h6" fontWeight={600} gutterBottom>
                                ROI Calculator Info
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This modal opens when you click the subtitle link. You can replace
                                this with more details, links, or actions.
                            </Typography>
                            <Button
                                onClick={handleClose}
                                sx={{ mt: 2, backgroundColor: "#00A99D", color: "white" }}
                            >
                                Close
                            </Button>
                        </Box>
                    </Modal>
                </Box>
                <HowWeWork />
                {/* OUR CAPABILITIES SECTiON */}
                 
<       AboutUsRepairServicesPageCard/>
         {/* Industry SECTiON */}
                 
            <IndustriesSwiper/>
                {/* Our Brands Section */}
                <Typography
                    sx={{
                        ...typography.displayL,
                        color:"#1C2D4B",
                        ml: 8,
                        mt: 5
                    }}
                    gutterBottom>
                    Our Brands
                </Typography>
                <Typography
                    variant="h5" sx={{
                         ...typography.h5,
                        color:"#99A0AE",
                        mb: 4,
                        ml: 8
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut nisl turpis. Mauris vitae commodo elit,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut nisl turpis. Mauris vitae commodo elit,!
                </Typography>
                <Box sx={{ px: 8, py: 6 }}>
                    <Grid container spacing={0}>
                        {partnerData.map((partner, index) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={3}
                                key={partner.id}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                    px: 2,
                                    borderRight:
                                        index < partnerData.length - 1
                                            ? "1px solid #ccc"
                                            : "none",
                                }}
                            >
                                {/* Logo */}
                                <Box
                                    component="img"
                                    src={partner.logo}
                                    alt="Logo"
                                    sx={{
                                        height: 80,
                                        mb: 2,
                                        objectFit: "contain",
                                    }}
                                />

                                {/* Description */}
                                <Typography
                                    sx={{ 
                                        ...typography.bodyBase,
                                        color:"#000000",
                                        mb: 2 }}
                                >
                                    {partner.text}
                                </Typography>

                                {/* Learn more link */}
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    sx={{ mt: "auto", justifyContent: "flex-start" }}
                                >
                                    <Link href="#" underline="none" sx={{
                                        ...typography.bodyStrong,
                                        color:"#2F6FBA"
                                    }}>
                                        Learn more
                                    </Link>
                                    <ArrowRightAltIcon sx={{ ml: 0.5,color:"#2F6FBA" }} />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/*CONTACT SECTION */}
                <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#f9fafb" }}>
                    <Typography
                        sx={{
                            ...typography.displayM,
                            color:"#0C0F13",
                            ml: 8,
                            mt: 5
                        }}
                        variant="h3" fontWeight="bold" gutterBottom>
                        Contact Us
                    </Typography>
                    <Grid container spacing={4}>
                        {/* Left Section - Contact Info */}
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

                        {/* Right Section - Form */}
                        <Grid item xs={12} md={8}>
                            <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                                <Typography variant="h6" fontWeight={600}   >
                                    Tell us what you need
                                </Typography>

                                <Box component="form" noValidate autoComplete="off">
                                    <TextField fullWidth label="Company Name *" margin="normal" />
                                    <TextField fullWidth label="Contact Person *" margin="normal" />
                                    <TextField fullWidth label="Phone *" margin="normal" />
                                    <TextField fullWidth label="Email" margin="normal" />

                                    <TextField
                                        select
                                        fullWidth
                                        label="Enquiry For"
                                        margin="normal"
                                        defaultValue=""
                                    >
                                        <MenuItem value="Product">Product</MenuItem>
                                        <MenuItem value="Service">Service</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </TextField>

                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={4}
                                        label="Message"
                                        margin="normal"
                                    />

                                    {/* File Upload (Placeholder style) */}
                                    <Box
                                        mt={2}
                                        p={3}
                                        border="2px dashed #ccc"
                                        borderRadius={2}
                                        textAlign="center"
                                        color="text.secondary"
                                    >
                                        Drag and drop files, or <Button variant="text">Browse</Button>
                                        <Typography variant="caption" display="block">
                                            Max 10 files, up to 50 MB each.
                                        </Typography>
                                    </Box>

                                    {/* Buttons */}
                                    <Box mt={3} display="flex" gap={2}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            sx={{ backgroundColor: "#25D366", "&:hover": { backgroundColor: "#1EBE57" } }}
                                        >
                                            Send on WhatsApp
                                        </Button>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                        >
                                            Submit Message
                                        </Button>
                                    </Box>

                                    <Box mt={2}>
                                        <Button fullWidth variant="outlined">
                                            Continue to details
                                        </Button>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
                {/*Location Section*/}
              <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#fff" }}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
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
    </Box>

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




};
export default AboutUS;

const partnerData = [
    {
        id: 1,
        logo: Brand1, // Replace with actual path
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut nisl turpis. Mauris vitae commodo elit,",
    },
    {
        id: 2,
        logo: Brand2crea,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut nisl turpis. Mauris vitae commodo elit,",
    },
    {
        id: 3,
        logo: Brand2crea,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut nisl turpis. Mauris vitae commodo elit,",
    },
    {
        id: 4,
        logo: Brand1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut nisl turpis. Mauris vitae commodo elit,",
    },
];