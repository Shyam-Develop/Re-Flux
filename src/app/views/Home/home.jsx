import { React, useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Button,
  // Link,
  Card,
  CardMedia,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
  Divider,
  IconButton,
  Grid,
  Modal,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  InputAdornment,
  Dialog,
  DialogContent,
  FormControl,
  Select,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import rentserviceimg from "../../../assets/RentService.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import videoFile from "../../../assets/Electroflux_basic_ edit.mp4"; // ✅ put your video file here
import WhatsApp from "../../../assets/whatsappimg.jpg";
import RepairsectionCard from "app/components/Card/RepairsectionCard";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import serviceimg from "../../../assets/Repairservice.png";
import before from "../../../assets/beforecstudy.png";
import after from "../../../assets/aftercstudy.png";
import Electromagnetrepair from "../../../assets/EletromagnetRepair.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RentServicesCard from "app/components/Card/RentServicesCard";
import RentingMagnet from "../../../assets/RentingMagnet.png";
import ResaleServices from "app/components/Card/ResaleServices";
import ROIimage from "../../../assets/ROICalculator.jpg";
import Brand1 from "../../../assets/Brand1.png";
import Brand2crea from "../../../assets/Brand2crea.png";
import Blogs1 from "../../../assets/Blogs1.jpg";
import Blogs2 from "../../../assets/Blogs2.jpg";
import Blogs3 from "../../../assets/Blogs3.jpg";
import Blogs4 from "../../../assets/Blogs4.jpg";
import { Link, useNavigate } from "react-router-dom";
import RepairServicesPage from "app/views/Home/RepairServicesPage";
import { typography } from "app/utils/constant";
import about from '../../../assets/homeAbout.png';
import Testimonials from "app/components/Card/OurCustomerCard";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import HomeVideoCard from "app/components/Card/HomeVideoCard";
import Footer from 'app/components/Card/Footer';
import TopbarWithMegaMenu from "app/components/appLayout/Layout1/Layout1Topbar";
import { DisplayL, displayL, H4 } from "app/components/Typography";

const UploadBox = ({ label }) => {
  return (
    <Box sx={{ my: 3 }}>
      <Typography variant="h6" gutterBottom>{label}</Typography>
      <label htmlFor="upload-input">
        <Box
          sx={{
            border: '2px dashed #ccc',
            borderRadius: 2,
            p: 4,
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'border-color 0.3s ease',
            '&:hover': { borderColor: 'primary.main' },
          }}
        >
          <IconButton component="span" size="large">
            <UploadFileIcon sx={{ fontSize: 40, color: 'text.secondary' }} />
          </IconButton>
          <Typography>
            <strong style={{ color: '#1976d2' }}>Choose</strong> file to upload
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Select image in jpeg, PNG
          </Typography>
        </Box>
      </label>
      <input
        id="upload-input"
        type="file"
        accept="image/jpeg, image/png"
        style={{ display: 'none' }}
      />
    </Box>
  );
};

const HomePage = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();
  //=================VIDEO-Loading===============================//
  const [selected, setSelected] = useState(null);
  const [loadingId, setLoadingId] = useState(null);
  const items = [
    { id: "01", title: "Repair", head: "Magnet down? We’ll get your lift back fast.", text: " Coil rewinds (Class F/H), terminals/leads, junction boxes & controllers—returned to spec with a load-test certificate. Clear Turn Around Time bands and Pan-India pickup/install.", button: "Request a Repair Quote" },
    { id: "02", title: "Rent", head: "Rent electro-lifting magnets, ready when you are", text: "Circular, rectangular, and suspension (oil/air-cooled) magnets with controllers and cables. Pan-India logistics, load-tested before dispatch.", button: "Check Availability" },
    { id: "03", title: "Buy", head: "Certified refurbished magnets—ready to work, warranty included.", text: "Each unit is tested, load-certified and documented. Warranty 3–12 months. Pan-India dispatch and install support.", button: "Browse Inventory" },
    { id: "04", title: "Sell/exchange", head: "Sell or exchange your magnet—quick valuation, easy logistics.", text: "Share a few photos and specs. We’ll reply with a buyback range or exchange offer and arrange Pan-India pickup.", button: "Start Sell / Exchange" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(0);

  const [BrowseDialogopen, setBrowseDialogOpen] = useState(false);

  const handleClickOpen = () => {
    setBrowseDialogOpen(true);
  };

  const handledialogClose = () => {
    setBrowseDialogOpen(false);
  };
  //==============================ELECTROMAGNET -REPAIR==================================//
  //  const [hoveredIndex, setHoveredIndex] = useState(0);

  const features = [
    {
      title: "TAT you can plan around",
      desc: "Urgent 24–48h, Standard 72h, Overhaul 5–7 days—clear timelines with proactive updates.",
      image: Electromagnetrepair,
    },
    {
      title: "Certified safe, ASME-aligned",
      desc: "Every job closes with a load-test certificate (kN), inspection checklist, and up to 12-month service warranty.",
      image: serviceimg,
    },
    {
      title: "All magnet types, all faults",
      desc: "Circular, rectangular, suspension (oil/air); coils, leads, pole shoes, insulation class F/H plus controller/PSU repairs.",
      image: before,
    },
    {
      title: "Field-ready support, nationwide",
      desc: "On-site diagnosis, pickup & drop, reinstall/commissioning Pan-India coverage with WhatsApp photo reports.",
      image: after,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const intervalRef = useRef(null);

  // Auto play effect
  useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % features.length);
        setHoveredIndex((prev) => (prev + 1) % features.length);
      }, 2000);
    }

    return () => clearInterval(intervalRef.current);
  }, [autoPlay, features.length]);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    setAutoPlay(false); // stop auto rotation when clicked
    clearInterval(intervalRef.current);
  };
  //----------------------------------------------------------------------------------------//
  const benefits = [
    {
      title: "Lower Upfront Cost",
      description:
        "Skip the heavy investment. Pay only for the time you use the magnet.",
    },
    {
      title: "Flexibility for Projects",
      description:
        "Rent different sizes or types as per project needs, without long-term commitments.",
    },
    {
      title: "Zero Maintenance Hassle",
      description:
        "We handle service and upkeep — you focus on getting the job done.",
    },
    {
      title: "Quick Availability",
      description:
        "Get magnets delivered and installed fast, exactly when your project demands it.",
    },
  ];

  //ROI Calcultor
  const roiData = [
    {
      title: "Repair vs Replace",
      description:
        "Estimate the cheapest path. We also compare renting during lead time vs paying downtime.",
      image: ROIimage,
    },
    {
      title: "Repair vs Replace",
      description:
        "Estimate the cheapest path. We also compare renting during lead time vs paying downtime.",
      image: ROIimage,
    },
    {
      title: "Repair vs Replace",
      description:
        "Estimate the cheapest path. We also compare renting during lead time vs paying downtime.",
      image: ROIimage,
    },
    // Add more as needed...
  ];

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

  const faqData = [
    {
      question: "Do I need to be home during the cleaning?",
      answer: "No, as long as we have access, you can carry on with your day.",
    },
    {
      question: "Are your restoration services?",
      answer: "Yes, we offer full restoration in select areas.",
    },
    {
      question: "What happens if I’m not satisfied with the Magnet?",
      answer: "We offer a satisfaction guarantee and support options.",
    },
    {
      question: "Can I schedule recurring services?",
      answer: "Yes, you can set weekly or monthly recurring schedules.",
    },
    {
      question: "Is there a cancellation fee?",
      answer: "Nope — cancel any time before 24 hours of service.",
    },
  ];

  const blogData = [
    {
      title: "7 Essential Tips For Efficient Electromagnet Servicing",
      author: "Hannah Cole",
      date: "March 5, 2035",
      image: Blogs1,
      featured: true,
    },
    {
      title: "The Advantages of Using Electromagnets in Repairs",
      author: "Lucas Wei",
      date: "March 18, 2035",
      image: Blogs2,
    },
    {
      title: "Electromagnet Maintenance Checklist for Technicians",
      author: "Mia Langston",
      date: "April 1, 2035",
      image: Blogs3,
    },
    {
      title: "How Frequently Should You Service Electromagnets?",
      author: "Julian Snow",
      date: "April 25, 2035",
      image: Blogs4,
    },
  ];

  const cards = [
    {
      title: "Repair vs Replace ROI Instantly",
      desc: "Our ROI Calculator shows payback and TCO (repair vs rental vs replace) in seconds — make data-backed decisions.",
    },
  ];

  const [expanded, setExpanded] = useState(null);

  const handleChange = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (

    <Box
      sx={{
        // width: "1440px",

      }}
    >
      {/* <TopbarWithMegaMenu/> */}
      {/* 🔹 Background Video */}
      {/* <Box
        component="video"
        // src="https://youtu.be/wDchsz8nmbo"
        src={videoFile}
        autoPlay
        loop
        muted
        playsInline
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      /> */}
      <HomeVideoCard
        videoFile={videoFile}
        items={items}
        WhatsApp={WhatsApp}
      />

      <Box sx={{ paddingLeft: { xs: 2, sm: "6%" }, paddingRight: 2, mt: 4 }}>
        <Button
          disableElevation
          disableRipple
          sx={{
            mb: 2,
            textTransform: "none",
            fontSize: "0.8rem",
            fontWeight: 500,
            color: "#1a4dab",
            backgroundColor: "rgba(36,121,233,0.08)",
            borderRadius: "20px",
            px: 2,
            py: 0.5,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "rgba(36,121,233,0.15)",
              boxShadow: "none",
            },
            ...theme.typography.bodySmall,
          }}
        >
          Repair Services
        </Button>

        <Typography
          sx={{
            ...theme.typography.displayL,
            fontFamily: "'Space Grotesk', sans-serif", 
            fontWeight:700,
            fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
            textAlign: "left",
          }}
          gutterBottom
        >
          Our Repair Services
        </Typography>

        <Typography
          sx={{
            mb: 4,
            ...theme.typography.h4,
            color: "#6B768A",
            fontSize: '24px',
            textAlign: "left",
            fontFamily: "'Space Grotesk', sans-serif", 
            fontWeight:400
          }}
        >
          Get powerful lifting magnets when you need them — without the upfront
          cost. Flexible rental plans, quick installation, and reliable
          performance for every project!
        </Typography>

        <RepairsectionCard />
      </Box>


      <Box sx={{ textAlign: "center", mt: 10 }}>
        {/* Top Button */}
        <Button
          onClick={handleClickOpen}
          variant="contained"
          sx={{
            fontFamily: "Inter-Medium",
            bgcolor: "#b3570d", // orange/brown shade
            borderRadius: "25px",
            px: 3,
            py: 1,
            // fontWeight: "bold",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "1.5",
            "&:hover": {
              bgcolor: "#944708",
            },
          }}
        >
          Request a Repair Quote
        </Button>

        {/* Links */}
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
            gap: 4,
            ...typography.buttonLink,
            textDecoration: "underline",
            fontWeight: 600,
            color: "#0e8bf1ff",
          }}>
          <Link
            href="#"
            // underline="none"
            sx={{
              color: "#0e8bf1ff",
              display: "flex",
              alignItems: "center",
              ...typography.buttonLink,
              textDecoration: "underline",
              fontWeight: 600,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            WhatsApp Photos <ArrowRightAltIcon
              sx={{
                ml: 0.5,
                fontSize: 20,
                mt: '2px',
                position: 'relative',
                top: '5px',
              }}
            />
          </Link>
          <Link
            href="#"
            // underline="none"
            sx={{
              color: "#0e8bf1ff",
              display: "flex",
              alignItems: "center",
              fontWeight: 500,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Book Site Visit <ArrowRightAltIcon
              sx={{
                ml: 0.5,
                fontSize: 20,
                mt: '2px',
                position: 'relative',
                top: '5px',
              }}
            />
          </Link>
        </Box>
      </Box>



      {/* Before and After Case Studies */}

      <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 4, md: 8 }, backgroundColor: "#fff" }}>
        {/* Title Section */}
        <Typography
          variant="h4"
          sx={{
            ...typography.displayM,
            fontWeight: 600,
            fontSize: { xs: "1.5rem", md: "2rem" },
            color: "#1c2434",
            mb: 1,
          }}
        >
          Before and after case studies
        </Typography>

        <Typography
          variant="h6"
          sx={{
            ...typography.h2,
            fontWeight: 600,
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            color: "#1c2434",
            mb: 1,
          }}
        >
          Circular Lifting Magnet
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "#99A0AE", mb: 4, ...typography.bodyBase }}
        >
          Understanding growing demand and exceeding expectations from our customers in repairing
        </Typography>

        {/* Images and Arrows */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
            position: "relative",
          }}
        >
          {/* Left Arrow */}
          <IconButton
            sx={{
              position: "absolute",
              left: isMobile ? "calc(50% - 20px)" : "115px",
              top: isMobile ? "35px" : "50%",
              transform: isMobile ? "none" : "translateY(-50%)",
              bgcolor: "#1c2434",
              color: "#fff",
              zIndex: 2,
              "&:hover": { bgcolor: "#344050" },
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          {/* Before Image */}
          <Box
            component="img"
            src={before}
            alt="Before"
            sx={{
              width: isMobile ? "100%" : "500px",
              height: "auto",
              mt: 7,
              objectFit: "cover",
            }}
          />

          {/* After Image */}
          <Box
            component="img"
            src={after}
            alt="After"
            sx={{
              width: isMobile ? "100%" : "500px",
              height: "auto",
              objectFit: "cover",
            }}
          />

          {/* Right Arrow */}
          <IconButton
            sx={{
              position: "absolute",
              right: isMobile ? "calc(50% - 20px)" : "115px",
              top: isMobile ? "95%" : '55%',

              transform: isMobile ? "none" : "translateY(-50%)",
              bgcolor: "#1c2434",
              color: "#fff",
              zIndex: 2,
              "&:hover": { bgcolor: "#344050" },
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>

        {/* Button */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            onClick={() => navigate("/home/ViewCaseStudy")}
            variant="contained"
            sx={{
              backgroundColor: "#b3570d",
              borderRadius: "24px",
              textTransform: "none",
              fontWeight: 500,
              px: 3,
              py: 1,
              fontSize: "14px",
              "&:hover": {
                backgroundColor: "#944708",
              },
            }}
          >
            View Case Study
          </Button>
        </Box>
      </Box>


      {/*ElectroMagnet Repair Section */}
      <Box sx={{ px: isMobile ? 2 : 5, py: isMobile ? 4 : 8 }}>
        {/* Heading */}
        <Typography
          sx={{
            ...typography.displayM,
            lineHeight: "1.2",
            color: "#1c2434",
            mb: 2,
            ml: isMobile ? 0 : 5,
            fontFamily: "Space Grotesk, Regular",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          ElectroMagnet Repair
        </Typography>

        {/* Subheading */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            color: "#1c2434",
            mb: 4,
            ml: isMobile ? 0 : 5,
            fontFamily: "Inter, sans-serif",
            textAlign: isMobile ? "center" : "left",
            px: isMobile ? 2 : 0,
          }}
        >
          Coil rewinds, terminal rebuilds, housing & controllers — restored to
          spec with certified load testing
        </Typography>

        {/* Main Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            border: "1px solid #ddd",
            borderRadius: 3,
            px: isMobile ? 2 : 4,
            py: isMobile ? 3 : 4,
            gap: 6,
            width: "100%",
            bgcolor: "white",
          }}
        >
          {/* Left - Timeline */}
          <Box sx={{ flex: 1, position: "relative", width: "100%" }}>
            {/* Vertical Line */}
            {!isMobile && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: "10px",
                  width: "2px",
                  bgcolor: "#ccc",
                  borderRadius: 1,
                }}
              />
            )}

            {features.map((item, index) => {
              const isActive = hoveredIndex === index;

              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    mb: 4,
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onMouseEnter={() => !isMobile && setHoveredIndex(index)} // only hover on desktop
                  onClick={() => isMobile && setHoveredIndex(index)} // click on mobile
                >
                  {/* Active Line */}
                  {!isMobile && isActive && (
                    <Box
                      sx={{
                        position: "absolute",
                        left: "10px",
                        width: "2px",
                        bgcolor: "#1976d2",
                        height: "100%",
                        borderRadius: 1,
                      }}
                    />
                  )}

                  {/* Icon + Text */}
                  <Box sx={{ ml: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <CalendarMonthIcon
                        sx={{
                          fontSize: 20,
                          color: isActive ? "#1976d2" : "#666",
                          mr: 1,
                          transition: "0.3s",
                        }}
                      />
                      <Typography
                        variant="subtitle1"
                        sx={{
                          ...typography.h3B1,
                          fontWeight: 400,
                          color: isActive ? "#1976d2" : "#1c2434",
                          transition: "0.3s",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{
                        ...typography.bodyBasemedium,
                        fontWeight: 400,
                        transition: "0.3s",
                        ml: 4,
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>

          {/* Right - Image */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mt: isMobile ? 2 : 0,
            }}
          >
            <Box
              component="img"
              src={features[hoveredIndex].image}
              alt="ElectroMagnet Repair"
              sx={{
                width: "100%",
                maxWidth: isMobile ? "100%" : 600,
                objectFit: "cover",
                borderRadius: 3,
                transition: "0.5s",
              }}
            />
          </Box>
        </Box>
      </Box>


      {/* Why Choose Reflux Section */}

      <Box
        sx={{
          width: "100%",
          maxWidth: "1440px",
          mx: "auto",
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 6 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="flex-start"
        >
          {/* Left Section */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
                mt: { xs: 0, md: 18 },
                ml: 23
              }}
            >
              <Typography
                sx={{
                  fontFamily: "SpaceGrotesk-Regular",
                  ...typography.h2,
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Why Choose <br /> Reflux?
              </Typography>

              <Typography
                sx={{
                  color: "text.secondary",
                  mb: 3,
                  fontSize: "16px",
                  fontWeight: 400,
                  maxWidth: "320px",
                  ...typography.bodySmall
                }}
              >
                We handle service and upkeep — you focus on getting the job done.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  fontFamily: "SpaceGrotesk-Regular",
                  fontSize: "16px",
                  fontWeight: 600,
                  borderRadius: "10px",
                  px: 3,
                  backgroundColor: "#00A99D",
                  "&:hover": { backgroundColor: "#00897B" },
                }}
              >
                About Us
              </Button>

              {/* Arrow */}
              <Box
                sx={{
                  // position: "absolute",
                  // bottom: -90,
                  ml: 30,
                  right: { xs: "5%", md: "20%" },
                  textAlign: "right",
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

          {/* Right Section */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: { xs: 0, md: 6 },
                flexDirection: { xs: "column", md: "row" },
                mt: { xs: 6, md: 0 },
              }}
            >
              {/* Left Column of Cards */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  mt: 0, // first column slightly higher
                }}
              >
                {cards.concat(cards, cards).map((card, i) => (
                  <Box
                    key={i}
                    sx={{
                      width: { xs: "100%", md: "240px" },
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: 500,
                        mb: 1,
                        color: "#1A1A1A",
                        ...typography.h5,
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Link
                      underline="hover"
                      sx={{
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#555",
                        cursor: "pointer",
                        lineHeight: 1.5,
                        ...typography.bodyBase
                      }}
                    >
                      {card.desc}
                    </Link>
                    <Divider
                      sx={{
                        mt: 1,
                        borderColor: "#00A99D",
                        width: "100%",
                      }}
                    />
                  </Box>
                ))}
              </Box>

              {/* Right Column of Cards (lowered) */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  mt: { xs: 0, md: 10 }, // shifted down for staggered look
                }}
              >
                {cards.concat(cards, cards).map((card, i) => (
                  <Box
                    key={i}
                    sx={{
                      width: { xs: "100%", md: "240px" },
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: 500,
                        mb: 1,
                        color: "#1A1A1A",
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Link
                      underline="hover"
                      sx={{
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#555",
                        cursor: "pointer",
                        lineHeight: 1.5,
                      }}
                    >
                      {card.desc}
                    </Link>
                    <Divider
                      sx={{
                        mt: 1,
                        borderColor: "#00A99D",
                        width: "100%",
                      }}
                    />
                  </Box>
                ))}
              </Box>
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
            <Typography sx={{ fontSize: "20px", fontWeight: 500, mb: 2 }}>
              ROI Calculator Info
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This modal opens when you click the subtitle link. Replace with your
              own content.
            </Typography>
            <Button
              onClick={handleClose}
              sx={{
                mt: 3,
                backgroundColor: "#00A99D",
                color: "white",
                "&:hover": { backgroundColor: "#00897B" },
              }}
            >
              Close
            </Button>
          </Box>
        </Modal>
      </Box>



      {/* Rent Services section */}

      <RentServicesCard services={services} />

      {/* View all magnets for rent Section*/}
      <Box>
        <Typography
          component={Link}
          to="/home/Rentals"
          sx={{
            ...typography.h3R,
            // fontSize: "1.5rem", 
            color: "#1a4dab",
            fontWeight: 600,
            ml: 110,
          }}
        >
          View All Magnets for Rent
          <ArrowRightAltIcon
            sx={{
              color: "#1a4dab",
              fontWeight: "bold",
              verticalAlign: "middle",
              ml: 1,
              fontSize: "3rem",
            }}
          />
        </Typography>
        <Box sx={{ flexGrow: 1, padding: 4 }}>
          <Grid container spacing={4} alignItems="center">
            {/* Left Side - Image */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={RentingMagnet} // <- replace this with your actual path
                alt="Magnet Excavator"
                sx={{ width: "100%", borderRadius: 2 }}
              />
            </Grid>

            {/* Right Side - Text */}
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  ...typography.displayM,
                  fontWeight: 600,
                  color: "#092f7aff",
                }}

              >
                Why Renting Magnets is Smarter
              </Typography>
              <List>
                {benefits.map((item, index) => (
                  <ListItem alignItems="flex-start" key={index} sx={{ pl: 0 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          width: 30,
                          height: 30,
                          bgcolor: "#092f7a",
                          color: "white",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "SpaceGrotesk-Bold",
                          fontWeight: 700,
                          fontSize: "24px",
                        }}

                      >
                        {index + 1}
                      </Typography>
                    </ListItemIcon>
                    <ListItemText
                      sx={{

                        ml: 2,
                      }}
                      primary={
                        <Typography

                          sx={{
                            fontFamily: "SpaceGrotesk-Bold",
                            fontWeight: 700,
                            fontSize: "24px",
                          }}
                        >
                          {item.title}
                        </Typography>
                      }
                      secondary={
                        <Typography
                          sx={{
                            ...typography.h3medium,
                            fontWeight: 500
                          }}
                          color="textSecondary"
                        >
                          {item.description}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Box>



      {/* Resale Services */}
      <Box>
        <ResaleServices />
        <Box sx={{ textAlign: "center", py: 6 }}>
          {/* Top Button */}
          <Button
            variant="contained"
            sx={{
              bgcolor: "#b3570d", // orange/brown shade
              borderRadius: "25px",
              px: 3,
              py: 1,
              // fontWeight: "bold",
              fontSize: "16px",
              "&:hover": {
                bgcolor: "#944708",
              },
            }}
          >
            Request a Quote
          </Button>
        </Box>
      </Box>

      <Testimonials />


      {/* ROI Calculator */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1440px",
          mx: "auto",
          px: { xs: 2, sm: 4, md: 8 },
          py: { xs: 6, md: 10 },
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            ...typography.h3RB,
            fontWeight: 700,
            fontSize: { xs: "28px", md: "36px" },
            textAlign: { xs: "center", md: "left" },
            mb: 2,
          }}
        >
          ROI Calculator
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            ...typography.h3B1,
            fontWeight: 400,
            mb: 4,
            color: "text.secondary",
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "16px", md: "18px" },
            maxWidth: { xs: "100%", md: "70%" },
            mx: { xs: "auto", md: 0 },
          }}
        >
          Get powerful lifting magnets when you need them — without the upfront cost.
          Flexible rental plans, quick installation, and reliable performance for every project!
        </Typography>

        {/* View All Link */}
        <Typography
          sx={{
            ...typography.h3R,
            textDecoration: "underline",
            color: "#1a4dab",
            fontWeight: 600,
            cursor: "pointer",
            textAlign: { xs: "center", md: "right" },
            mb: { xs: 3, md: 6 },
          }}
          onClick={() => navigate("/repair-replace/roi-cal")}
        >
          View All ROI Calculators
          <ArrowRightAltIcon
            sx={{
              color: "#1a4dab",
              verticalAlign: "middle",
              ml: 1,
              fontSize: { xs: "1.8rem", md: "2.4rem" },
            }}
          />
        </Typography>

        {/* Cards Section */}
        <Box sx={{ width: "100%", mx: "auto" }}>
          <Grid container spacing={4} justifyContent="center">
            {roiData.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  onClick={() => navigate("/repair-replace")}
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: 3,
                    height: { xs: 280, sm: 300, md: 320 },
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "scale(1.03)" },
                  }}
                >
                  {/* Background Image */}
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    sx={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {/* Overlay White Card */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      left: 16,
                      right: 16,
                      backgroundColor: "white",
                      borderRadius: 2,
                      boxShadow: 1,
                      px: 2,
                      py: 1.5,
                      display: "flex",
                      flexDirection: "column",
                      gap: 0.5,
                      "&:hover": {
                        bgcolor: "#0b2d55",
                        color: "white",
                        "& .MuiTypography-root": {
                          color: "white",
                          transform: "scale(1.05)",
                        },
                        "& .MuiDivider-root": {
                          borderColor: "rgba(255,255,255,0.3)",
                        },
                        "& .MuiIconButton-root": {
                          backgroundColor: "#6aa9ff",
                          color: "white",
                        },
                      },
                    }}
                  >
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography
                        sx={{
                          ...typography.h3B1,
                          fontWeight: 700,
                          fontSize: { xs: "16px", md: "18px" },
                        }}
                      >
                        {item.title}
                      </Typography>
                      <IconButton
                        size="small"
                        sx={{
                          backgroundColor: "#f0f0f0",
                        }}
                      >
                        <ArrowForwardIosIcon fontSize="small" />
                      </IconButton>
                    </Box>

                    <Typography
                      sx={{
                        ...typography.bodyBase,
                        fontWeight: 400,
                        color: "text.secondary",
                        fontSize: { xs: "14px", md: "16px" },
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>




      {/* Our Brands Section */}
      <Typography
        sx={{
          ...typography.h3RB,
          fontWeight: 700,
          ml: 8,
          mt: 5,
        }}
        variant="h3"
        fontWeight="bold"
        gutterBottom
      >
        Our Brands
      </Typography>
      <Typography
        variant="h5"
        sx={{
          ...typography.h3B1,
          fontWeight: 400,
          mb: 4,
          color: "text.secondary",
          ml: 8,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
        nisl turpis. Mauris vitae commodo elit, Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Praesent ut nisl turpis. Mauris vitae
        commodo elit,!
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
                  index < partnerData.length - 1 ? "1px solid #ccc" : "none",
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
                variant="body2"
                color="text.primary"
                sx={{
                  ...typography.bodyBase,
                  fontWeight: 400,
                  mb: 2,
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
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    ...typography.bodyStrongB,
                    fontWeight: 600,
                  }}
                >
                  Learn more
                </Link>
                <ArrowRightAltIcon
                  sx={{ ml: 0.5, ...typography.bodyStrongB, fontWeight: 600 }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>



      {/* FAQs Section */}
      <Button
        disableElevation
        disableRipple
        sx={{
          marginBottom: 2,
          ml: 9,
          textTransform: "none",           // keep text as-is
          fontSize: "0.8rem",              // smaller font
          fontWeight: 500,                 // medium weight
          color: "#1a4dab",                // dark blue text
          backgroundColor: "rgba(36,121,233,0.08)", // very light blue background
          borderRadius: "20px",            // pill shape
          px: 2,                           // horizontal padding
          py: 0.5,                         // vertical padding
          boxShadow: "none",               // remove shadow
          "&:hover": {
            backgroundColor: "rgba(36,121,233,0.15)", // slightly darker on hover
            boxShadow: "none",
          },
        }}
      >
        FAQs
      </Button>
      <Typography
        sx={{
          ml: 8,
          // mt: 5
          ...typography.displayL,
          color: '#1C2D4B'
        }}
        variant="h3" fontWeight="bold" gutterBottom>
        FAQs
      </Typography>
      <Typography
        variant="h5" sx={{
          mb: 4,
          color: '#1C2D4B',
          ...typography.h4,
          ml: 8
        }}>
        Get powerful lifting magnets when you need them — without the upfront
        cost. Flexible rental plans, quick installation, and reliable
        performance for every project!
      </Typography>
      <Box sx={{ px: 8, py: 6 }}>
        {faqData.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={() => handleChange(index)}
            disableGutters
            elevation={0}
            sx={{
              backgroundColor: expanded === index ? "#eaf3fb" : "#fdfdfd",
              borderRadius: 2,
              mb: 1,
              px: 2,
            }}
          >
            <AccordionSummary
              expandIcon={
                <IconButton>
                  {expanded === index ? (
                    <RemoveIcon sx={{ color: "#1976d2" }} />
                  ) : (
                    <AddIcon sx={{ color: "#1976d2" }} />
                  )}
                </IconButton>
              }
            >
              <Typography sx={{ ...typography.h4, color: '#0E1109' }}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ ...typography.bodyBase, color: '#0E1109' }}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>



      {/* Blogs Section */}
      <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 3, md: 6 } }}>
        {/* Section Header */}
        <Button
          disableElevation
          disableRipple
          sx={{
            marginBottom: 2,
            // ml: 8,
            textTransform: "none",           // keep text as-is
            fontSize: "0.8rem",              // smaller font
            fontWeight: 500,                 // medium weight
            color: "#1a4dab",                // dark blue text
            backgroundColor: "rgba(36,121,233,0.08)", // very light blue background
            borderRadius: "20px",            // pill shape
            px: 2,                           // horizontal padding
            py: 0.5,                         // vertical padding
            boxShadow: "none",               // remove shadow
            "&:hover": {
              backgroundColor: "rgba(36,121,233,0.15)", // slightly darker on hover
              boxShadow: "none",
            },
          }}
        >
          Blogs
        </Button>
        <Typography
          sx={{
            
            ...typography.displayL,
            color: '#1C2D4B'
          }}
          variant="h3" fontWeight="bold" gutterBottom>
          Blogs
        </Typography>
        <Typography
          variant="h5" sx={{
            mb: 4,
            color: '#1C2D4B',
            ...typography.h4,
            
          }}>
          Get powerful lifting magnets when you need them — without the upfront
          cost. Flexible rental plans, quick installation, and reliable
          performance for every project!
        </Typography>


        {/* Blog Section */}
        <Grid container spacing={3}>
          {/* Featured Post */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                boxShadow: 0,
                bgcolor: "#fafafa",
                cursor: "pointer",
              }}
              onClick={() => navigate("/home/BlogDetails")}
            >
              <CardMedia
                component="img"
                image={blogData[0].image}
                alt={blogData[0].title}
                sx={{
                  borderRadius: 3,
                  width: "100%",
                  height: { xs: 240, sm: 280, md: 300 },
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography
                  sx={{
                    ...typography?.h5,
                    color: "#0E1109",
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                  }}
                  gutterBottom
                >
                  {blogData[0].title}
                </Typography>
                <Typography sx={{ ...typography?.bodyBase, color: "#677489" }}>
                  {blogData[0].author} • {blogData[0].date}
                </Typography>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: "#1F77D6",
                    ...typography?.bodyBasemedium,
                    mt: 1,
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  Discover More{" "}
                  <ArrowForwardIosIcon
                    sx={{ ml: 0.5, color: "#1F77D6", fontSize: "0.9rem" }}
                  />
                </Link>
              </CardContent>
            </Card>
          </Grid>

          {/* Other Posts */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2} direction="column">
              {blogData.slice(1).map((item, idx) => (
                <Grid item key={idx}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "row", sm: "row" },
                      alignItems: "center",
                      borderRadius: 3,
                      px: { xs: 1, md: 2 },
                      py: { xs: 1, md: 1.5 },
                      bgcolor: "#fdfdfd",
                      boxShadow: 0,
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/home/Blogpost")}
                  >
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.title}
                      sx={{
                        width: { xs: 100, sm: 120, md: 130 },
                        height: { xs: 100, sm: 120, md: 141 },
                        borderRadius: 2,
                        objectFit: "cover",
                        mr: 2,
                      }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        sx={{
                          ...typography?.h4,
                          color: "#0E1109",
                          fontSize: { xs: "0.95rem", sm: "1.1rem" },
                          mb: 0.5,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          ...typography?.bodyBase,
                          color: "#677489",
                          fontSize: { xs: "0.75rem", sm: "0.85rem" },
                        }}
                      >
                        {item.author} • {item.date}
                      </Typography>
                      <Link
                        href="#"
                        underline="none"
                        sx={{
                          color: "#1F77D6",
                          ...typography?.bodyBasemedium,
                          mt: 0.5,
                          fontSize: { xs: "0.75rem", sm: "0.85rem" },
                          display: "inline-flex",
                          alignItems: "center",
                        }}
                      >
                        Discover More{" "}
                        <ArrowForwardIosIcon
                          sx={{ ml: 0.5, color: "#1F77D6", fontSize: "0.8rem" }}
                        />
                      </Link>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Footer Section */}
      <Box >
        <Footer />
      </Box>

      {/* Dialog */}
      <Dialog
        open={BrowseDialogopen}
        onClose={handledialogClose}
        maxWidth="sm"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "16px",
            height: "100vh", // 👈 fixed height
            maxHeight: "100vh", // 👈 prevent overflow beyond screen
          },
        }}
      >
        <DialogContent>
          {/* <Card sx={{ textAlign: "center", p: 3 }}> */}
          <CardContent>
            <Typography
              sx={{
                textAlign: "left",
              }}
              variant="h6"
              gutterBottom
            >
              Tell us what you need
            </Typography>
            <Typography
              //  variant="h6"
              sx={{
                textAlign: "left",
                fontSize: "15px",
                color: "#111",
              }}
            >
              Company Name *
            </Typography>
            <TextField
              placeholder="Ex: John"
              variant="outlined"
              fullWidth
              name="name"
              id="name"

            />

            <Typography
              sx={{
                textAlign: "left",
                fontSize: "15px",
                // ...typography.h6,
                // fontWeight: 500,
                color: "#111",
                // color: theme.palette.primary.contrastText
                marginTop: 2,
              }}
            >
              Contact Person *
            </Typography>
            <TextField
              placeholder="example@gmail.com"
              variant="outlined"
              fullWidth
              name="name"
              id="name"

            />

            <Typography
              sx={{
                textAlign: "left",
                fontSize: "15px",
                // ...typography.h6,
                // fontWeight: 500,
                color: "#111",
                // color: theme.palette.primary.contrastText
                marginTop: 2,
              }}
            >
              Phone *
            </Typography>
            <TextField
              placeholder="example@gmail.com"
              variant="outlined"
              fullWidth
              name="name"
              id="name"

            />
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "15px",

                color: "#111",
                marginTop: 2,
              }}
            >
              Email *
            </Typography>
            <TextField
              placeholder="example@gmail.com"
              variant="outlined"
              fullWidth
              name="name"
              id="name"

            />
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "15px",
                // ...typography.h6,
                // fontWeight: 500,
                color: "#111",
                // color: theme.palette.primary.contrastText
                marginTop: 2,
              }}
            >
              Enquiry for *
            </Typography>
            <FormControl fullWidth>
              {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
              <Select

                labelId="demo-simple-select-label"
                id="demo-simple-select"

              >
                <MenuItem
                  value={10}
                >
                  1-5
                </MenuItem>
                <MenuItem
                  value={20}
                >
                  6-10
                </MenuItem>
                <MenuItem
                  value={30}
                >
                  10-20
                </MenuItem>
                <MenuItem
                  //  sx={{
                  //   color: theme.palette.primary.contrastText
                  // }}
                  value={30}
                >
                  20+
                </MenuItem>
              </Select>
            </FormControl>

            <Typography
              sx={{
                textAlign: "left",
                fontSize: "15px",
                // ...typography.h6,
                // fontWeight: 500,
                color: "#111",
                // color: theme.palette.primary.contrastText
                // marginTop: 5,
              }}
            >
              Message
            </Typography>
            <TextField
              placeholder="example@gmail.com"
              variant="outlined"
              fullWidth
              multiline
              minRows={3}
              name="name"
              id="name"

            />
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "15px",
                // ...typography.h6,
                // fontWeight: 500,
                color: "#111",
                // color: theme.palette.primary.contrastText
                // marginTop: 5,
              }}
            >
              Photos/Videos
            </Typography>
            <UploadBox />

          </CardContent>
          {/* Buttons */}
          <Box mt={3} display="flex" flexDirection={"column"} gap={2}>
            <Button
              variant="text"
              startIcon={<WhatsAppIcon sx={{ color: "#25D366" }} />}
              sx={{
                color: "black", // text color
                textTransform: "none", // keep normal text
                fontWeight: 500,
                fontSize: "14px",
                "&:hover": {
                  backgroundColor: "transparent", // no hover background
                },
              }}
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
          {/* </Card> */}
        </DialogContent>
      </Dialog>
      {/* <BrowseDialog open={open} onClose={close}/> */}
    </Box>
  );
};

export default HomePage;
const services = [
  {
    id: 1,
    title: "Rectangular Lifting Magnet",
    type: "Permanent Magnet",
    liftCapacity: "3 Tons",
    powerSupply: "None Required",
    sizes: "500mm / 800mm / 1000mm",
    price: 30,
    img: rentserviceimg,
  },
  {
    id: 2,
    title: "Bespoke Lifting Magnet",
    type: "Custom Coil",
    liftCapacity: "Varied",
    powerSupply: "Custom",
    sizes: "Custom Sizes Available",
    price: 100,
    img: rentserviceimg,
  },
  {
    id: 3,
    title: "Mini Lifting Magnet",
    type: "Coil",
    liftCapacity: "1 Ton",
    powerSupply: "220V",
    sizes: "300mm / 500mm",
    price: 20,
    img: rentserviceimg,
  },
  {
    id: 4,
    title: "Rectangular Lifting Magnet",
    type: "Permanent Magnet",
    liftCapacity: "3 Tons",
    powerSupply: "None Required",
    sizes: "500mm / 800mm / 1000mm",
    price: 30,
    img: rentserviceimg,
  },
  {
    id: 5,
    title: "Bespoke Lifting Magnet",
    type: "Custom Coil",
    liftCapacity: "Varied",
    powerSupply: "Custom",
    sizes: "Custom Sizes Available",
    price: 100,
    img: rentserviceimg,
  },
  {
    id: 6,
    title: "Mini Lifting Magnet",
    type: "Coil",
    liftCapacity: "1 Ton",
    powerSupply: "220V",
    sizes: "300mm / 500mm",
    price: 20,
    img: rentserviceimg,
  },
];
{/* <Box sx={{ display: "flex", gap: 2, mb: 3, mt: 3 }}>
          {[
            { id: "01", title: "Repair" },
            { id: "02", title: "Rent" },
            { id: "03", title: "Buy" },
            { id: "04", title: "Sell/exchange" },
          ].map((item) => (
            <Card
              key={item.id}
              sx={{
                width: 110,
                height: 80,
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                color: "black",
                fontWeight: "bold",
                cursor: "pointer",
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", fontWeight: 600 }}
              >
                {item.id}
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                {item.title}
              </Typography>
            </Card>
          ))}
        </Box> */}
{/* </Box> */ }

{/* <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "10px", // adjust to align with icons
              width: "2px",
              bgcolor: "#ccc",
              borderRadius: 1,

            }}
          /> */}