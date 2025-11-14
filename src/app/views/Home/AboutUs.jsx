import {
    Box, Button, Divider, Grid, Link, Modal, Typography, useMediaQuery, useTheme, Paper, TextField,
    MenuItem, IconButton
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
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";





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


    const navigate = useNavigate();
    const [content, setContent] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const apiUrl =
            `${process.env.REACT_APP_CMS_URL}?contentId=Aboutus`;
        fetch(apiUrl)
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((data) => setContent(data))
            .catch((err) => console.error("Error loading content:", err));
    }, []);

    //  Check admin role
    useEffect(() => {
        const role = localStorage.getItem("role");
        setIsAdmin(role === "admin");
    }, []);

    //  Edit function
    const handleEdit = (contentTextID, type = "T") => {
        navigate(
            `/CmsEditor?contentId=Aboutus&contentTextID=${contentTextID}&contentType=${type}`
        );
    };


    //  Edit icon button
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
                    },
                    verticalAlign: "middle",
                }}
            >
                <EditIcon fontSize="small" />
            </IconButton>
        ) : null;

    if (!content) return null;


    const leftHeading = "Why Choose Reflux?";
    const leftSubtext = "We handle service and upkeep — you focus on getting the job done.";

    // Content cards (updated from image)
    const leftCards = [
        { title: content.AU1007, desc: content.AU1008 },
        { title: content.AU1008, desc: content.AU1010 },
        { title: content.AU1011, desc: content.AU1012 },
    ];

    const rightCards = [
        { title: content.AU1013, desc: content.AU1014 },
        { title: content.AU1015, desc: content.AU1016 },
        { title: content.AU1017, desc: content.AU1018 },
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
                        mx: "auto",
                        py: { xs: 6, md: 10 },
                        px: { xs: 2, md: 10 },
                        backgroundColor: "#fff",
                    }}
                >
                    <Grid
                        container
                        spacing={{ xs: 4, md: 6 }}
                        alignItems="flex-start"
                        justifyContent="center"
                    >
                        {/* LEFT SIDE */}
                        <Grid
                            item
                            xs={1}
                            md={4}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: { xs: "center", md: "flex-start" },
                                justifyContent: { xs: "center", md: "center" },
                                textAlign: { xs: "center", md: "left" },
                                mt: { xs: 0, md: 25 }, // ✅ push left content slightly down
                                paddingRight: "40px",
                                position: "relative",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    fontSize: { xs: "28px", md: "32px" },
                                    fontWeight: 700,
                                    color: "#061D47",
                                    mb: 1.5,
                                }}
                            >
                                {content.AU1005}
                                <EditIconButton id="AU1005" />
                            </Typography>

                            <Typography
                                sx={{
                                    fontFamily: "Fira Sans",
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    color: "#4b5563",
                                    mb: 3,
                                    maxWidth: 280,
                                }}
                            >
                                {content.AU1006}
                                <EditIconButton id="AU1006" />
                            </Typography>

                            <Button
                                disableRipple
                                sx={{
                                    backgroundColor: "#00A99D",
                                    color: "#fff",
                                    textTransform: "none",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    borderRadius: "20px",
                                    px: 3,
                                    py: 1,
                                    "&:hover": { backgroundColor: "#009688" },
                                }}
                            >
                                About Us
                            </Button>

                            {/* Arrow */}
                            <Box
                                component="img"
                                src={about}
                                alt="arrow"
                                sx={{
                                    width: 150,
                                    position: "absolute",
                                    bottom: -80,
                                    right: { xs: "5%", md: "5%" },
                                    display: { xs: "none", md: "block" },
                                }}
                            />
                        </Grid>

                        {/* RIGHT SIDE (CARDS) */}
                        <Grid item xs={12} md={6}>
                            <Grid
                                container
                                spacing={{ xs: 4, md: 2 }}
                                sx={{ mt: { xs: 4, md: 2 } }} // ✅ moves cards slightly down
                            >
                                {/* LEFT COLUMN of cards */}
                                <Grid item xs={12} md={6} >
                                    <Box sx={{ display: "flex", width: "242px", height: "746px", flexDirection: "column", gap: 3 }}>
                                        {/* Card 1 */}
                                        <Box sx={{ width: "242px", height: "220px" }}>
                                            <Typography sx={{ ...typography.h5, fontWeight: 500, fontSize: "18px", color: "#061D47" }}>
                                                {content.AU1007}
                                                <EditIconButton id="AU1007" />
                                            </Typography>
                                            <Typography sx={{ ...typography.bodyBase, fontFamily: "Fira Sans", fontWeight: 400, fontSize: "15px", color: "#4b5563" }}>
                                                {content.AU1008}
                                                <EditIconButton id="AU1008" />
                                            </Typography>
                                            <Divider sx={{ mt: 3, border: "2px solid", borderColor: "#00A99D", width: "100%" }} />
                                        </Box>

                                        {/* Card 2 */}
                                        <Box sx={{ width: "242px", height: "220px" }}>
                                            <Typography sx={{ fontSize: "18px", ...typography.h5, fontWeight: 500, color: "#061D47" }}>
                                                {content.AU1009}
                                                <EditIconButton id="AU1009" />
                                            </Typography>
                                            <Typography sx={{ ...typography.bodyBase, fontFamily: "Fira Sans", fontWeight: 400, fontSize: "15px", color: "#4b5563" }}>
                                                {content.AU1010}
                                                <EditIconButton id="AU1010" />
                                            </Typography>
                                            <Divider sx={{ mt: 3, border: "2px solid", borderColor: "#00A99D", width: "100%" }} />
                                        </Box>

                                        {/* Card 3 */}
                                        <Box sx={{ width: "242px", height: "220px", }}>
                                            <Typography sx={{ fontSize: "18px", ...typography.h5, fontWeight: 500, color: "#061D47" }}>
                                                {content.AU1011}
                                                <EditIconButton id="AU1011" />
                                            </Typography>
                                            <Typography sx={{ ...typography.bodyBase, fontFamily: "Fira Sans", fontWeight: 400, fontSize: "15px", color: "#4b5563" }}>
                                                {content.AU1012}
                                                <EditIconButton id="AU1012" />
                                            </Typography>
                                            <Divider sx={{ mt: 3, border: "2px solid", borderColor: "#00A99D", width: "100%" }} />
                                        </Box>
                                    </Box>
                                </Grid>

                                {/* RIGHT COLUMN of cards */}
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: { xs: 0, md: 15 } }}>
                                        {/* Card 4 */}
                                        <Box sx={{ width: "242px", height: "220px" }}>
                                            <Typography sx={{ fontSize: "18px", ...typography.h5, fontWeight: 500, color: "#061D47" }}>
                                                {content.AU1013}
                                                <EditIconButton id="AU1013" />
                                            </Typography>
                                            <Typography sx={{ ...typography.bodyBase, fontFamily: "Fira Sans", fontWeight: 400, fontSize: "15px", color: "#4b5563" }}>
                                                {content.AU1014}
                                                <EditIconButton id="AU1014" />
                                            </Typography>
                                            <Divider sx={{ mt: 3, border: "2px solid", borderColor: "#00A99D", width: "100%" }} />
                                        </Box>

                                        {/* Card 5 */}
                                        <Box sx={{ width: "242px", height: "220px" }}>
                                            <Typography sx={{ fontSize: "18px", ...typography.h5, fontWeight: 500, color: "#061D47" }}>
                                                {content.AU1015}
                                                <EditIconButton id="AU1015" />
                                            </Typography>
                                            <Typography sx={{ ...typography.bodyBase, fontFamily: "Fira Sans", fontWeight: 400, fontSize: "15px", color: "#4b5563" }}>
                                                {content.AU1016}
                                                <EditIconButton id="AU1016" />
                                            </Typography>
                                            <Divider sx={{ mt: 3, border: "2px solid", borderColor: "#00A99D", width: "100%" }} />
                                        </Box>

                                        {/* Card 6 */}
                                        <Box sx={{ width: "242px", height: "220px" }}>
                                            <Typography sx={{ fontSize: "18px", ...typography.h5, fontWeight: 500, color: "#061D47" }}>
                                                {content.AU1017}
                                                <EditIconButton id="AU1017" />
                                            </Typography>
                                            <Typography sx={{ ...typography.bodyBase, fontFamily: "Fira Sans", fontWeight: 400, fontSize: "15px", color: "#4b5563" }}>
                                                {content.AU1018}
                                                <EditIconButton id="AU1018" />
                                            </Typography>
                                            <Divider sx={{ mt: 3, border: "2px solid", borderColor: "#00A99D", width: "100%" }} />
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

                <HowWeWork />
                {/* OUR CAPABILITIES SECTiON */}

                <AboutUsRepairServicesPageCard />
                {/* Industry SECTiON */}

                {/* //Industries we serve */}
                <IndustriesSwiper />


                {/* Our Brands Section */}

                <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
                    {/* 🔹 Heading */}
                    <Typography
                        sx={{
                            ...typography.displayL,
                            fontSize: { xs: "36px", md: "56px" },
                            fontWeight: 700,
                            color: "#1C2D4B",
                            mb: 1,
                        }}
                    >
                        {content.AU1079}
                        <EditIconButton id="AU1079" />
                    </Typography>

                    {/* 🔹 Subheading */}
                    <Typography
                        sx={{
                            ...typography.h4,
                            fontWeight: 400,
                            fontSize: { xs: "18px", md: "24px" },
                            color: "#99A0AE",
                            mb: 6,
                        }}
                    >
                        {content.AU1080}
                        <EditIconButton id="AU1080" />
                    </Typography>

                    {/* 🔹 Two Brands */}
                    <Grid container spacing={4}>
                        {/* Left Brand */}
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{
                                borderRight: { md: "1px solid #E0E0E0" },
                                pr: { md: 4 },
                            }}
                        >
                            <Box display="flex" flexDirection="column" alignItems="flex-start">
                                {/* Brand 1 Image */}
                                <Box sx={{ position: "relative", marginLeft: "30%" }}>
                                    <Box
                                        component="img"
                                        src={`https://cmsreflux.bexatm.com${content.AU1081}`}
                                        alt="Electro Flux Logo"
                                        sx={{ width: "151px", height: "158px", mb: 2 }}
                                    />
                                    <Box sx={{ position: "absolute", top: 0, right: -30 }}>
                                        <EditIconButton id="AU1081" type="I" />
                                    </Box>
                                </Box>

                                {/* Brand 1 Descriptions */}
                                <Typography
                                    sx={{
                                        ...typography.bodyBase,
                                        fontFamily: "'Fira Sans', sans-serif",
                                        fontWeight: 400,
                                        fontSize: "18px",
                                        color: "#000000",
                                        mb: 1,
                                    }}
                                >
                                    {content.AU1082}
                                    <EditIconButton id="AU1082" />
                                </Typography>
                                <Typography
                                    sx={{
                                        ...typography.bodyBase,
                                        fontFamily: "'Fira Sans', sans-serif",
                                        fontWeight: 400,
                                        fontSize: "18px",
                                        color: "#000000",
                                        mb: 1,
                                    }}
                                >
                                    {content.AU1083}
                                    <EditIconButton id="AU1083" />
                                </Typography>

                                {/* Learn More */}
                                <Box display="flex" alignItems="center">
                                    <Link
                                        href={content.AU1085 || "#"}
                                        underline="none"
                                        sx={{ color: "#2F6FBA", fontWeight: 600 }}
                                    >
                                        {content.AU1084}
                                    </Link>
                                    <ArrowRightAltIcon sx={{ ml: 0.5, color: "#2F6FBA" }} />
                                    <EditIconButton id="AU1084" />
                                </Box>
                            </Box>
                        </Grid>

                        {/* Right Brand */}
                        <Grid item xs={12} md={6} sx={{ pl: { md: 4 } }}>
                            <Box display="flex" flexDirection="column" alignItems="flex-start">
                                {/* ReFlux Logo & Text */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 2,
                                        justifyContent: "center",
                                        py: 7,
                                        marginLeft: "30%",
                                        position: "relative",
                                    }}
                                >
                                    {/* SVG Icon or Image */}
                                    <Box>
                                        <RefluxSvg width={60} height={60} color="#00374C" />
                                        <Box sx={{ position: "absolute", top: 20, right: -30 }}>
                                            <EditIconButton id="AU1085" type="I" />
                                        </Box>
                                    </Box>

                                    {/* Text */}
                                    <Box sx={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
                                        <Typography
                                            sx={{
                                                fontFamily: "Fira Sans, sans-serif",
                                                fontWeight: 700,
                                                fontSize: "30px",
                                                color: "#00374C",
                                                lineHeight: 1,
                                            }}
                                        >
                                            ReFlux
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: "Fira Sans, sans-serif",
                                                fontWeight: 400,
                                                fontSize: "14px",
                                                letterSpacing: "6px",
                                                color: "#00374C",
                                                mt: 0.5,
                                            }}
                                        >
                                            MAGNETS
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* ReFlux Descriptions */}
                                <Typography
                                    sx={{
                                        ...typography.bodyBase,
                                        fontFamily: "'Fira Sans', sans-serif",
                                        fontWeight: 400,
                                        fontSize: "18px",
                                        color: "#000000",
                                        mb: 1,
                                    }}
                                >
                                    {content.AU1086}
                                    <EditIconButton id="AU1086" />
                                </Typography>
                                <Typography
                                    sx={{
                                        ...typography.bodyBase,
                                        fontFamily: "'Fira Sans', sans-serif",
                                        fontWeight: 400,
                                        fontSize: "18px",
                                        color: "#000000",
                                        mb: 1,
                                    }}
                                >
                                    {content.AU1087}
                                    <EditIconButton id="AU1087" />
                                </Typography>

                                {/* Learn More */}
                                <Box display="flex" alignItems="center">
                                    <Link
                                        href={content.AU1092 || "#"}
                                        underline="none"
                                        sx={{ color: "#2F6FBA", fontWeight: 600 }}
                                    >
                                        {content.AU1088}
                                    </Link>
                                    <ArrowRightAltIcon sx={{ ml: 0.5, color: "#2F6FBA" }} />
                                    <EditIconButton id="AU1088" />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>


                {/*CONTACT SECTION */}
                <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#f9fafb", width: "95%", mx: "auto" }}>
                    {/* 🔹 Heading */}
                    <Typography
                        sx={{
                            ...typography.displayM,
                            color: "#0C0F13",
                            ml: { xs: 0, md: 8 },
                            mt: { xs: 2, md: 5 },
                            fontSize: { xs: "24px", md: typography.displayM.fontSize },
                        }}
                        variant="h3"
                        fontWeight="bold"
                        gutterBottom
                    >
                        {content.AU1093}
                        <EditIconButton id="AU1093" />
                    </Typography>

                    <Grid container spacing={4} sx={{ ml: { xs: 0, md: 7 } }}>
                        {/* 🔸 Left Section */}
                        <Grid item xs={12} md={5}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 2, sm: 3 },
                                    borderRadius: 2,
                                    backgroundColor: "#eaf0f8",
                                }}
                            >
                                <Typography
                                    sx={{
                                        ...typography.h1,
                                        fontSize: { xs: "20px", md: typography.h1.fontSize },
                                        color: "#0E1109",
                                    }}
                                    gutterBottom
                                >
                                    {content.AU1094}
                                    <EditIconButton id="AU1094" />
                                </Typography>

                                <Typography sx={{ ...typography.bodyBase, color: "#0E1109" }} gutterBottom>
                                    {content.AU1095}
                                    <EditIconButton id="AU1095" />
                                </Typography>

                                {/* Contact Info */}
                                <Box mt={2}>
                                    <Typography sx={{ ...typography.bodyBasemedium, color: "#0E1109" }}>
                                        {content.AU1096}
                                        <EditIconButton id="AU1096" />
                                    </Typography>
                                    <Typography sx={{ ...typography.bodySmall, color: "#0E1109" }}>
                                        {content.AU1097}
                                        <EditIconButton id="AU1097" />
                                    </Typography>
                                </Box>

                                <Box mt={2}>
                                    <Typography sx={{ ...typography.bodyBasemedium, color: "#0E1109" }}>
                                        {content.AU1098}
                                        <EditIconButton id="AU1098" />
                                    </Typography>
                                    <Typography sx={{ ...typography.bodySmall, color: "#0E1109" }}>
                                        {content.AU1099}
                                        <EditIconButton id="AU1099" />
                                    </Typography>
                                </Box>

                                <Box mt={2}>
                                    <Typography sx={{ ...typography.bodyBasemedium, color: "#0E1109" }}>
                                        {content.AU1100}
                                        <EditIconButton id="AU1100" />
                                    </Typography>
                                    <Typography sx={{ ...typography.bodySmall, color: "#0E1109" }}>
                                        {content.AU1101}
                                        <EditIconButton id="AU1101" />
                                    </Typography>
                                </Box>

                                <Box mt={2}>
                                    <Typography sx={{ ...typography.bodyBasemedium, color: "#0E1109" }}>
                                        {content.AU1102}
                                        <EditIconButton id="AU1102" />
                                    </Typography>
                                    <Typography sx={{ ...typography.bodySmall, color: "#0E1109" }}>
                                        {content.AU1103}
                                        <EditIconButton id="AU1103" />
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>

                        {/* 🔸 Right Section - Form */}
                        <Grid item xs={12} md={5}>
                            <Paper elevation={2} sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
                                <Typography variant="h6" fontWeight={600} sx={{ fontSize: { xs: "18px", sm: "20px" } }}>
                                    {content.AU1104}
                                    <EditIconButton id="AU1104" />
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
                                        sx={{ fontSize: { xs: "12px", sm: "14px" } }}
                                    >
                                        {content.AU1105}
                                        <EditIconButton id="AU1105" />
                                        {" "}
                                        <Button variant="text" sx={{ fontSize: "inherit" }}>
                                            Browse
                                        </Button>
                                        <Typography variant="caption" display="block">
                                            {content.AU1106}
                                            <EditIconButton id="AU1106" />
                                        </Typography>
                                    </Box>

                                    {/* Buttons */}
                                    <Box mt={2}>
                                        <Button
                                            fullWidth
                                            sx={{
                                                color: "#111B2D",
                                                justifyContent: "center",
                                            }}
                                            startIcon={
                                                <WhatsAppIcon
                                                    sx={{ borderRadius: "10px", backgroundColor: "#25D366", color: "#fff" }}
                                                />
                                            }
                                        >
                                            {content.AU1107}
                                            <EditIconButton id="AU1107" />
                                        </Button>
                                    </Box>

                                    <Box mt={2} sx={{ backgroundColor: "#2e8e7e3b", borderRadius: 20 }}>
                                        <Button
                                            fullWidth
                                            sx={{
                                                color: "#F7F9FC",
                                                textTransform: "none",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {content.AU1108}
                                            <EditIconButton id="AU1108" />
                                        </Button>
                                    </Box>

                                    <Box mt={2}>
                                        <Button
                                            fullWidth
                                            variant="outlined"
                                            sx={{
                                                borderRadius: 20,
                                                color: "#111B2D",
                                                textTransform: "none",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {content.AU1109}
                                            <EditIconButton id="AU1109" />
                                        </Button>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>

                {/*Location Section*/}
                <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#fff" }}>
                    {/* 🔹 Section Title */}
                    <Typography sx={{ ...typography.h2, fontWeight: 600, fontSize: "32px" }} gutterBottom>
                        {content.AU1110}
                        <EditIconButton id="AU1110" />
                    </Typography>

                    <Grid container spacing={4} alignItems="center">
                        {/* 🔸 Map Section */}
                        <Grid item xs={12} md={5}>
                            <Paper elevation={3} sx={{ borderRadius: 2, overflow: "hidden", height: "300px" }} >
                                <Box component="a" href={googleMapsUrl} target="_blank" rel="noopener noreferrer" sx={{ display: "block", width: "100%", height: "100%" }} >
                                    <iframe title="location-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.251785352883!2d-78.4766789!3d38.0293056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b38656c1bba22f%3A0xd8bda1d3b2f6613d!2s1112%20A%20Market%20St%20%23%20Ste%20B22%2C%20Charlottesville%2C%20VA%2022902!5e0!3m2!1sen!2sus!4v1633043300000!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" >
                                    </iframe>
                                </Box>
                            </Paper>
                        </Grid>

                        {/* 🔸 Address Section */}
                        <Grid item xs={12} md={5}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    height: "100%",
                                }}
                            >
                                <Box sx={{ textAlign: "left" }}>
                                    <Typography
                                        sx={{
                                            ...typography.h2,
                                            fontWeight: 600,
                                            fontSize: "32px",
                                            color: "#0A142F",
                                            mb: 1,
                                            textAlign: "center",
                                        }}
                                    >
                                        {content.AU1111}
                                        <EditIconButton id="AU1111" />
                                    </Typography>

                                    <Typography
                                        sx={{
                                            ...typography.h5,
                                            fontWeight: 500,
                                            fontSize: "20px",
                                            color: "#0A142F",
                                            marginLeft: "33%",
                                        }}
                                    >
                                        {content.AU1112}
                                        <EditIconButton id="AU1112" />
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

const RefluxSvg = ({ color = "#111B2D", width = 20, height = 20 }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 114 114"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M57.1457 0.0644531C25.9403 0.0644531 0.634766 25.3821 0.634766 56.62C0.634766 87.8579 25.9403 113.181 57.1457 113.181C88.3511 113.181 113.657 87.8528 113.657 56.62C113.657 25.3871 88.3511 0.0644531 57.1457 0.0644531ZM49.4187 104.452L54.0115 93.0608H48.7172L58.2358 81.7356L55.8536 89.6461L61.6829 89.6764L49.4187 104.447V104.452ZM57.6958 81.7507C57.5191 81.7608 57.3273 81.7709 57.1457 81.7709C56.964 81.7709 56.7772 81.7608 56.5955 81.7507C49.9739 81.4123 44.715 75.9416 44.715 69.2333C44.715 62.5251 50.2717 56.7564 57.1457 56.7109C64.0196 56.7614 69.5763 62.3483 69.5763 69.2333C69.5763 76.1184 64.3174 81.4123 57.6958 81.7507ZM69.5763 83.5793C73.2354 80.1848 75.7134 74.6838 75.7134 69.3041C75.7134 59.0346 67.4011 50.7149 57.1507 50.7149C46.9003 50.7149 38.588 59.0396 38.588 69.3041C38.588 74.6838 41.066 80.1848 44.7251 83.5793C39.6529 79.6594 35.7566 73.3654 35.7566 66.4652C35.7566 54.6348 45.3408 45.0422 57.1557 45.0422C68.9707 45.0422 78.5549 54.6348 78.5549 66.4652C78.5549 73.3654 74.6536 79.6594 69.5864 83.5793H69.5763ZM85.1967 66.349C85.1967 50.8412 72.6398 38.2682 57.1457 38.2682C41.6515 38.2682 29.0997 50.8412 29.0997 66.349C29.0997 75.5021 33.8186 83.1348 40.5916 88.2519C32.1581 82.6751 26.0008 74.1231 26.0008 63.2474C26.0008 46.0322 39.9456 32.0752 57.1457 32.0752C74.3457 32.0752 88.2905 46.0272 88.2905 63.2474C88.2905 74.1231 82.1332 82.6751 73.6997 88.2519C80.4727 83.1348 85.1967 75.4971 85.1967 66.349ZM94.1904 63.207C94.1904 42.7286 77.601 26.1247 57.1457 26.1247C36.6903 26.1247 20.1009 42.7337 20.1009 63.207C20.1009 75.7648 26.9295 86.2263 36.4682 92.9396C25.0671 85.7868 16.7295 74.2949 16.7295 59.8276C16.7295 37.4853 34.8229 19.376 57.1457 19.376C79.4684 19.376 97.5618 37.4853 97.5618 59.8276C97.5618 74.2898 89.2191 85.7868 77.8231 92.9396C87.3618 86.2263 94.1904 75.7648 94.1904 63.207ZM81.9414 97.6172C94.8566 89.1914 104.34 76.6842 104.34 60.0954C104.34 34.0048 83.2031 12.8597 57.1457 12.8597C31.0882 12.8597 9.95147 34.0048 9.95147 60.0954C9.95147 76.6842 19.4398 89.1864 32.3549 97.6172C17.5825 88.8126 6.67599 75.2748 6.67599 56.8069C6.67599 28.9029 29.2763 6.29284 57.1457 6.29284C85.015 6.29284 107.615 28.908 107.615 56.8069C107.615 75.2748 96.7139 88.8126 81.9363 97.6172H81.9414Z"
            fill={color}
        />
    </svg>
);

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