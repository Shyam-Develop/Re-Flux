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
import Footer from 'app/components/Card/Footer';
import about from '../../../assets/homeAbout.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';




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


    const leftHeading = "Why Choose Reflux?";
    const leftSubtext = "We handle service and upkeep — you focus on getting the job done.";

    // Content cards (updated from image)
    const leftCards = [
        {
            title: "Planned TAT, zero guesswork",
            desc: "Urgent 24–48h, Standard 72h, Overhaul 5–7 days—clear SLAs so you can schedule crews and cranes.",
        },
        {
            title: "Certified safe, every time",
            desc: "ASME B30.20–aligned process with documented inspection and a load-test certificate (kN) on job closeout.",
        },
        {
            title: "Repair vs Replace ROI Instantly",
            desc: "Our ROI Calculator shows payback and TCO (repair vs rental vs replace) in seconds—make data-backed decisions.",
        },
    ];

    const rightCards = [
        {
            title: "Pan-India, field-ready support",
            desc: "On-site diagnosis, pickup/dispatch, reinstall & commissioning—single WhatsApp line for rapid photo/video troubleshooting.",
        },
        {
            title: "Full lifecycle coverage",
            desc: "Repair, Rental (circular magnets), and Refurbished resale with warranty—keep operations running while assets are serviced.",
        },
        {
            title: "Transparent tracking & proofs",
            desc: "Track My Job portal + proactive updates; download certificates, before/after photos, and service reports anytime.",
        },
    ];


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


                {/* //About */}
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: "1440px",
                        mx: "auto",
                        py: { xs: 6, md: 10 },
                        px: { xs: 2, md: 6 },
                        backgroundColor: "#fff",
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: "100%", md: "904px" },
                            height: { xs: "auto", md: "809px" },
                            position: { xs: "static", md: "relative" },
                            top: { md: "67px" },
                            left: { md: "268px" },
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            alignItems: "center",
                            justifyContent: "center",
                            gap: { xs: 6, md: "128px" },
                            boxSizing: "border-box",
                        }}
                    >
                        <Grid container spacing={4} alignItems="flex-start">
                            {/* Left Column */}
                            <Grid item xs={12} md={4}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: { xs: "center", md: "flex-start" },
                                        textAlign: { xs: "center", md: "left" },
                                        mt: { xs: 3, md: 20 },
                                        position: "relative",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: "SpaceGrotesk-Regular",
                                            fontSize: { xs: "28px", md: "32px" },
                                            fontWeight: 600,
                                            lineHeight: 1.2,
                                            mb: 2,
                                        }}
                                    >
                                        {leftHeading}
                                    </Typography>

                                    <Typography
                                        color="text.secondary"
                                        mb={3}
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                            maxWidth: "320px",
                                        }}
                                    >
                                        {leftSubtext}
                                    </Typography>

                                    {/* Arrow */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            bottom: -90,
                                            right: { xs: "5%", md: "20%" },
                                            display: { xs: "none", md: "block" }, // Hide arrow on mobile
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={about}
                                            alt="Arrow"
                                            sx={{ width: 140 }}
                                        />
                                    </Box>
                                </Box>
                            </Grid>

                            {/* Middle Column */}
                            <Grid item xs={12} md={4}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        mt: { xs: 0, md: 5 },
                                        gap: 2,
                                        alignItems: "center",
                                    }}
                                >
                                    {leftCards.map((item, i) => (
                                        <Box
                                            key={i}
                                            sx={{
                                                height: "auto",
                                                width: { xs: "100%", sm: "90%", md: "243px" },
                                                transition: "transform 0.3s ease",
                                                "&:hover": { transform: "scale(1.05)" },
                                            }}
                                        >
                                            <Typography sx={{ fontSize: "20px", fontWeight: 500, mb: 1 }}>
                                                {item.title}
                                            </Typography>
                                            <Link
                                                color="text.secondary"
                                                underline="hover"
                                                onClick={handleOpen}
                                                sx={{ fontSize: "16px", fontWeight: 400, cursor: "pointer" }}
                                            >
                                                {item.desc}
                                            </Link>
                                            <Divider sx={{ mt: 1, borderColor: "#00A99D", width: "100%" }} />
                                        </Box>
                                    ))}
                                </Box>
                            </Grid>

                            {/* Right Column */}
                            <Grid item xs={12} md={4}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 2,
                                        alignItems: "center",
                                    }}
                                >
                                    {rightCards.map((item, i) => (
                                        <Box
                                            key={i}
                                            sx={{
                                                height: "auto",
                                                width: { xs: "100%", sm: "90%", md: "243px" },
                                                transition: "transform 0.3s ease",
                                                "&:hover": { transform: "scale(1.05)" },
                                            }}
                                        >
                                            <Typography sx={{ fontSize: "20px", fontWeight: 500, mb: 1 }}>
                                                {item.title}
                                            </Typography>
                                            <Link
                                                color="text.secondary"
                                                underline="hover"
                                                onClick={handleOpen}
                                                sx={{ fontSize: "16px", fontWeight: 400, cursor: "pointer" }}
                                            >
                                                {item.desc}
                                            </Link>
                                            <Divider sx={{ mt: 1, borderColor: "#00A99D", width: "100%" }} />
                                        </Box>
                                    ))}
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>



                <HowWeWork />
                {/* OUR CAPABILITIES SECTiON */}

                <AboutUsRepairServicesPageCard />
                {/* Industry SECTiON */}

                {/* //Industries we serve */}
                <IndustriesSwiper />


                {/* Our Brands Section */}
                <Typography
                    sx={{
                        ...typography.displayL,
                        color: "#1C2D4B",
                        ml: 8,
                        mt: 5
                    }}
                    gutterBottom>
                    Our Brands
                </Typography>
                <Typography
                    variant="h5" sx={{
                        ...typography.h5,
                        color: "#99A0AE",
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
                                        color: "#000000",
                                        mb: 2
                                    }}
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
                                        color: "#2F6FBA"
                                    }}>
                                        Learn more
                                    </Link>
                                    <ArrowRightAltIcon sx={{ ml: 0.5, color: "#2F6FBA" }} />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/*CONTACT SECTION */}
                <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#f9fafb", width:'95%' }}>
                    <Typography
                        sx={{
                            ...typography.displayM,
                            color: "#0C0F13",
                            ml: { xs: 0, md: 8 },
                            mt: { xs: 2, md: 5 },
                            fontSize: { xs: "24px", md: typography.displayM.fontSize }
                        }}
                        variant="h3"
                        fontWeight="bold"
                        gutterBottom
                    >
                        Contact Us
                    </Typography>

                    <Grid container spacing={4} sx={{ ml: { xs: 0, md: 7 } }}>
                        {/* Left Section - Contact Info */}
                        <Grid item xs={12} md={5}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 2, sm: 3 },
                                    borderRadius: 2,
                                    backgroundColor: "#eaf0f8"
                                }}
                            >
                                <Typography
                                    sx={{
                                        ...typography.h1,
                                        fontSize: { xs: "20px", md: typography.h1.fontSize },
                                        color: "#0E1109"
                                    }}
                                    gutterBottom
                                >
                                    Contact Information
                                </Typography>
                                <Typography
                                    sx={{
                                        ...typography.bodyBase,
                                        color: "#0E1109"
                                    }}
                                    gutterBottom
                                >
                                    Get in touch with our approachable team using your preferred method—be it a quick message, a phone call, or a form submission.
                                </Typography>

                                {[
                                    { label: "Email Address", value: "contact@magnetsindia.com" },
                                    { label: "Phone Number", value: "+91 98765-43210" },
                                    { label: "Office Location", value: "Magnets India, 123 Magnet Lane, Chennai, India" },
                                    { label: "Business Hours", value: "Monday – Saturday | 09:00 AM – 07:00 PM" }
                                ].map((info, i) => (
                                    <Box key={i} mt={2}>
                                        <Typography sx={{ ...typography.bodyBasemedium, color: "#0E1109" }}>
                                            {info.label}
                                        </Typography>
                                        <Typography sx={{ ...typography.bodySmall, color: "#0E1109" }}>
                                            {info.value}
                                        </Typography>
                                    </Box>
                                ))}
                            </Paper>
                        </Grid>

                        {/* Right Section - Form */}
                        <Grid item xs={12} md={5}>
                            <Paper elevation={2} sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
                                <Typography
                                    variant="h6"
                                    fontWeight={600}
                                    sx={{
                                        fontSize: { xs: "18px", sm: "20px" }
                                    }}
                                >
                                    Tell us what you need
                                </Typography>

                                <Box component="form" noValidate autoComplete="off">
                                    <TextField fullWidth label="Company Name *" margin="normal" />
                                    <TextField fullWidth label="Contact Person *" margin="normal" />
                                    <TextField fullWidth label="Phone *" margin="normal" />
                                    <TextField fullWidth label="Email" margin="normal" />

                                    <TextField select fullWidth label="Enquiry For" margin="normal" defaultValue="">
                                        <MenuItem value="Product">Product</MenuItem>
                                        <MenuItem value="Service">Service</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </TextField>

                                    <TextField fullWidth multiline rows={4} label="Message" margin="normal" />

                                    {/* File Upload Box */}
                                    <Box
                                        mt={2}
                                        p={3}
                                        border="2px dashed #ccc"
                                        borderRadius={2}
                                        textAlign="center"
                                        color="text.secondary"
                                        sx={{
                                            fontSize: { xs: "12px", sm: "14px" }
                                        }}
                                    >
                                        Drag and drop files, or{" "}
                                        <Button variant="text" sx={{ fontSize: "inherit" }}>
                                            Browse
                                        </Button>
                                        <Typography variant="caption" display="block">
                                            Nameplate, terminals, underside / pole face, controller, site hook.
                                            Max 10 files, up to 50 MB each.
                                        </Typography>
                                    </Box>

                                    {/* Buttons */}
                                    <Box mt={2}>
                                        <Button
                                            fullWidth
                                            sx={{
                                                color: '#111B2D',
                                                justifyContent: 'flex-start'
                                            }}
                                            startIcon={<WhatsAppIcon />}
                                        >
                                            Send on WhatsApp
                                        </Button>
                                    </Box>

                                    <Box
                                        mt={2}
                                        sx={{
                                            backgroundColor: '#2E8E7E',
                                            borderRadius: 20
                                        }}
                                    >
                                        <Button
                                            fullWidth
                                            sx={{
                                                color: '#F7F9FC',
                                                textTransform: 'none',
                                                fontWeight: 500
                                            }}
                                        >
                                            Submit Message
                                        </Button>
                                    </Box>

                                    <Box mt={2}>
                                        <Button
                                            fullWidth
                                            variant="outlined"
                                            sx={{
                                                borderRadius: 20,
                                                color: '#111B2D',
                                                textTransform: 'none',
                                                fontWeight: 500
                                            }}
                                        >
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
                        <Grid item xs={12} md={5}>
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
                        <Grid item xs={12} md={5}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center", // 👈 keeps block centered
                                    height: "100%",
                                }}
                            >
                                <Box sx={{ textAlign: "left" }}> {/* 👈 ensures text lines align equally */}
                                    <Typography sx={{
                                        ...typography.h2,
                                        color: "#0A142F", mb: 1
                                    }}>
                                        Head Office
                                    </Typography>
                                    <Typography sx={{
                                        ...typography.h5,
                                        color: "#0A142F"
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
                <Box >
                    <Footer />
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