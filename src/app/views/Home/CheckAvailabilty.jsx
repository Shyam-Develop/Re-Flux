import { React, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Link,
  Card,
  CardMedia,
  CardContent,
  Accordion,
  InputBase,
  AccordionSummary,
  AccordionDetails,
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
  Stack,
  Chip,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import videoFile from "../../../assets/MicrosoftTeams-video.mp4"; // ✅ put your video file here

// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import serviceimg from "../../../assets/Repairservice.png";
import before from "../../../assets/beforecstudy.png";
import after from "../../../assets/aftercstudy.png";
import Electromagnetrepair from "../../../assets/EletromagnetRepair.png";
import ROIimage from "../../../assets/ROICalculator.jpg";
import Brand1 from "../../../assets/Brand1.png";
import Brand2crea from "../../../assets/Brand2crea.png";
import Blogs1 from "../../../assets/Blogs1.jpg";
import Blogs2 from "../../../assets/Blogs2.jpg";
import Blogs3 from "../../../assets/Blogs3.jpg";
import Blogs4 from "../../../assets/Blogs4.jpg";
import Roi1 from '../../../assets/Roi1.png';
import Roi2 from '../../../assets/Roi2.png';
import { typography } from "app/utils/constant";
import Footer from 'app/components/Card/Footer';
import Checkavailimage from "../../../assets/aftercstudy.png";
import Whyitworkcard from "app/components/Card/Whyitworkcard";
import HandshakeIcon from "@mui/icons-material/Handshake";
import handshake1 from "../../../assets/handshake3.jpg";
import WhatsincludedCard from "app/components/Card/WhatsincludedCard";
import Approach5 from "../../../assets/Approach5.jpg";



//specs
const specData = [
  {
    label: "Mechanical",
    properties: [
      "Diameter",
      "Overall height",
      "Net weight",
      "Face area",
      "IP rating",
      "Lifting eye/hanger",
    ],
  },
  {
    label: "Electrical",
    properties: ["Voltage", "Current", "Power consumption", "Control voltage"],
  },
  {
    label: "Performance",
    properties: [
      "Duty cycle",
      "Max temp",
      "Lifting force",
      "Magnetic field strength",
    ],
  },
];




//what's included
const includedItems = [
  {
    icon: <HandshakeIcon fontSize="large" />,
    title: 'Controller',
    desc: '{{controller_model}}',
    hasButton: true,
  },
  {
    icon: <HandshakeIcon fontSize="large" />,
    title: 'Cables & connectors',
    desc: '{{cable_length_m}} m, quick-connects, shackles',
    hasButton: false,
  },
  {
    icon: <HandshakeIcon fontSize="large" />,
    title: 'Pre-dispatch',
    desc: 'Load-test and functional checks',
    hasButton: false,
  },
];

const renderSpecGrid = (properties) => (
  <Grid container spacing={2}>
    {properties.map((prop, idx) => (
      <Grid item xs={12} sm={6} md={4} key={idx}>
        <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
          <Typography variant="subtitle2" fontWeight="bold">
            {prop}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sample value
          </Typography>
        </Paper>
      </Grid>
    ))}
  </Grid>
);

const CheckAvailabilty = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [mainImage, setMainImage] = useState(Checkavailimage);
  const thumbnailImages = [Roi1, Roi2, Roi2, Roi2, Roi2];
  const [BrowseDialogopen, setBrowseDialogOpen] = useState(false);

  const handleClickOpen = () => {
    setBrowseDialogOpen(true);
  };

  const handledialogClose = () => {
    setBrowseDialogOpen(false);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const specs = [
    { label: 'Diameter', value: 'Ø{{diameter_mm}} mm' },
    { label: 'Overall height', value: 'Ø{{diameter_mm}} mm' },
    { label: 'Net weight', value: 'Ø{{diameter_mm}} mm' },
    { label: 'Face area', value: 'Ø{{diameter_mm}} mm' },
    { label: 'IP rating', value: 'Ø{{diameter_mm}} mm' },
    { label: 'Lifting eye/hanger', value: 'Ø{{diameter_mm}} mm' },
  ];
  const features = [
    {
      title: "TAT you can plan around",
      desc: "Urgent 24–48h, Standard 72h, Overhaul 5–7 days—clear timelines with proactive updates.",
      image: Approach5,
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
        width: "100%",
        height: "100vh",
        // position: "relative",
        // overflow: "hidden",
      }}
    >
      {/* Blue bg header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#18294C", // Dark navy blue
          padding: "30px 60px",
          color: "#fff",
          borderBottomRightRadius: "40px",
          clipPath: "polygon(0 0, 100% 0, 100% 0%, 95% 100%, 0% 100%)",
        }}
      >
        {/* Left Text */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            ...typography.h3RBold,
          }}
        >
          Magnets For Rent
        </Typography>

        {/* Right Search Box */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #ccc",
            maxWidth: "300px",
            width: "100%",
            marginRight: '60px'
          }}
        >
          <InputBase
            placeholder="Search for a product"
            sx={{
              color: "#fff",
              flex: 1,
              px: 1,
              fontSize: "20px",
              fontWeight: 500,
              fontFamily: "Space Grotesk, Regular",
              lineHeight: "1.30",
              "&::placeholder": {
                color: "#ccc",
              },
            }}
            inputProps={{ "aria-label": "search" }}
          />
          <IconButton
            type="submit"
            sx={{ color: "#fff", p: "5px" }}
            aria-label="search"
          >
            <SearchIcon
              sx={{
                width: "40px",
                height: "40px",
              }}
            />
          </IconButton>
        </Box>
      </Box>

      {/* image and forms */}
      <Box sx={{ padding: "40px 60px" }}>
        {/* Title + Sub Info Section */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              ...typography.h3RBold,
              color: "#18294C",
            }}
          >
            Circular Lifting Magnet
          </Typography>

          <Box
            sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1, ml: 1 }}
          >
            <Typography
              sx={{
                color: "#4B5C76",
                ...typography.h4,
                fontSize: "24px",
                lineHeight: "1.30",
                fontWeight: 400,
              }}
            >
              Up to 250 Tons
            </Typography>
            <Typography
              sx={{
                color: "#4B5C76",
                ...typography.h4,
                fontSize: "24px",
                lineHeight: "1.30",
                fontWeight: 400,
              }}
            >
              •
            </Typography>
            <Typography
              sx={{
                color: "#4B5C76",
                ...typography.h4,
                fontSize: "24px",
                lineHeight: "1.30",
                fontWeight: 400,
              }}
            >
              Duty Cycle
            </Typography>
            <Typography
              sx={{
                color: "#4B5C76",
                ...typography.h4,
                fontSize: "24px",
                lineHeight: "1.30",
                fontWeight: 400,
              }}
            >
              •
            </Typography>
            <Typography
              sx={{
                color: "#4B5C76",
                ...typography.h4,
                fontSize: "24px",
                lineHeight: "1.30",
                fontWeight: 400,
              }}
            >
              Duty Cycle
            </Typography>
          </Box>
        </Box>

        {/* Image + Form Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "space-between",
            width: { xs: "100%", md: "1441px" },
            height: { xs: "auto", md: "644px" },
          }}
        >
          {/* Left Side: Thumbnails + Main Image */}
          <Box
            sx={{
              width: { xs: "100%", md: "60%" },
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Main Image */}
            <Box
              component="img"
              src={mainImage}
              alt="Main Lifting Magnet"
              sx={{
                width: { xs: "100%", md: "887px" },
                height: { xs: "auto", md: "500px" },
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />

            {/* Thumbnails Row */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: { xs: "nowrap", md: "wrap" },
                overflowX: { xs: "auto", md: "visible" },
              }}
            >
              {thumbnailImages.map((img, index) => (
                <Box
                  key={index}
                  component="img"
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setMainImage(img)}
                  sx={{
                    width: { xs: "100px", md: "148px" },
                    height: { xs: "80px", md: "124px" },
                    borderRadius: "6px",
                    objectFit: "cover",
                    border:
                      mainImage === img
                        ? "2px solid #E17A00"
                        : "2px solid transparent",
                    cursor: "pointer",
                    transition: "border 0.2s ease",
                    flex: "0 0 auto",
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Right Form */}
          <Box
            sx={{
              width: { xs: "100%", md: "452px" },
              height: "60%",
              border: "1px solid #E17A00",
              borderRadius: "12px",
              padding: "24px",
              marginTop: { xs: "20px", md: "40px" },
              marginRight: { xs: 0, md: "90px" },
              lineHeight: "2",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Row 1: Dates */}
            <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", md: "row" } }}>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ ...typography.h3medium, fontWeight: 500, mb: "4px" }}>
                  Start date
                </Typography>
                <Select
                  fullWidth
                  size="small"
                  defaultValue=""
                  sx={{
                    ...typography.bodyBasemedium,
                    fontWeight: 400,
                    border: "1px solid #E17A00",
                  }}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="option1">Option 1</MenuItem>
                </Select>
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography sx={{ ...typography.h3medium, fontWeight: 500, mb: "4px" }}>
                  End date
                </Typography>
                <Select
                  fullWidth
                  size="small"
                  defaultValue=""
                  sx={{
                    ...typography.bodyBasemedium,
                    fontWeight: 400,
                    border: "1px solid #E17A00",
                  }}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="option1">Option 1</MenuItem>
                </Select>
              </Box>
            </Box>

            {/* Row 2: Capacity and Duty Cycle */}
            <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", md: "row" } }}>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ ...typography.h3medium, fontWeight: 500, mb: "4px" }}>
                  Capacity
                </Typography>
                <Select
                  fullWidth
                  size="small"
                  defaultValue=""
                  sx={{
                    ...typography.bodyBasemedium,
                    fontWeight: 400,
                    border: "1px solid #E17A00",
                  }}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="option1">Option 1</MenuItem>
                </Select>
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography sx={{ ...typography.h3medium, fontWeight: 500, mb: "4px" }}>
                  Duty cycle
                </Typography>
                <Select
                  fullWidth
                  size="small"
                  defaultValue=""
                  sx={{
                    ...typography.bodyBasemedium,
                    fontWeight: 400,
                    border: "1px solid #E17A00",
                  }}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="option1">Option 1</MenuItem>
                </Select>
              </Box>
            </Box>

            {/* Row 3: Location Input */}
            <Box>
              <Typography sx={{ ...typography.h3medium, fontWeight: 500, mb: "4px" }}>
                Location
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #E17A00",
                  borderRadius: "4px",
                  px: 1,
                  py: 0.5,
                }}
              >
                <InputBase placeholder="Chennai" sx={{ flex: 1, fontSize: "14px" }} />
                <SearchIcon sx={{ color: "#777", fontSize: "24px" }} />
              </Box>
            </Box>

            {/* Button */}
            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                p: 2,
                backgroundColor: "#18294C",
                textTransform: "none",
                ...typography.buttonSBold,
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#0f1a32",
                },
              }}
            >
              Check Availability
            </Button>
          </Box>
        </Box>

      </Box>


      {/* Specs Accordion */}
      <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#f9fafb" }}>
        <Typography variant="h6" fontSize={"48px"} fontWeight="bold" gutterBottom>
          Specs
        </Typography>

        {specData.map((section, index) => (
          <Accordion
            key={index}
            defaultExpanded={index === 0}
            sx={{
              mb: 2,
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ backgroundColor: "#fff" }}
            >
              <Typography fontWeight="bold" fontSize="20px">
                {section.label}
              </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ p: 3, backgroundColor: "#fff" }}>
              <Grid container spacing={2}>
                {section.properties.map((prop, i) => (
                  <Grid item xs={6} sm={4} md={3} key={i}>
                    <Box
                      sx={{
                        borderRadius: "12px",
                        p: 2,
                        height: "100px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        backgroundColor: "#fff",
                        border: "1px solid #e5e7eb",
                        color: "#111827",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          backgroundColor: "#1C2D4B",
                          color: "#fff",
                          borderColor: "#1C2D4B",
                        },
                      }}
                    >
                      <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                        {prop}
                      </Typography>
                      <Typography sx={{ fontSize: "14px", color: "inherit", mt: 1 }}>
                        ∅ diameter_mm mm
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>


      {/* Section Heading */}
      <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#f9fafb" }}>
        <Typography
          sx={{
            textAlign: "left",
            mb: 4,
            color: "#1c2434",
            fontWeight: 600,
            fontFamily: "Space Grotesk, Regular",
            fontSize: "48px",
          }}
        >
          What's included
        </Typography>
        <WhatsincludedCard />

      </Box>


      {/* <Whyitworkcard /> */}

      {/*ElectroMagnet Repair Section */}
      <Box sx={{ px: isMobile ? 2 : 5, py: isMobile ? 4 : 8 }}>
        {/* Heading */}
         <Typography
                variant="h4"
                sx={{
                  color: "#1c2434",
                  ml: { xs: 2, md: 5 },
                  fontWeight: 600,
                  fontFamily: "Space Grotesk, Regular",
                  fontSize: { xs: "28px", md: "48px" },
                  mt: { xs: 3, md: 0 },
                }}
              >
                Symptoms & Faults
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
                width: "570px",
                height:'530px',
                maxWidth: isMobile ? "100%" : 600,
                objectFit: "cover",
                borderRadius: 3,
                transition: "0.5s",
              }}
            />
          </Box>
        </Box>
      </Box>



      {/* FAQs Section */}
      <Box
        sx={{
          mt: 3,
        }}
      >
        <Button
          disableElevation
          disableRipple
          sx={{
            ...typography.bodySmall,
            marginBottom: 2,
            ml: 8,
            textTransform: "none", // keep text as-is
            // fontSize: "0.8rem", // smaller font
            fontWeight: 400, // medium weight
            color: "#1a4dab", // dark blue text
            backgroundColor: "rgba(36,121,233,0.08)", // very light blue background
            borderRadius: "20px", // pill shape
            px: 2, // horizontal padding
            py: 0.5, // vertical padding
            boxShadow: "none", // remove shadow
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
            ...typography.h3RB,
            fontWeight: 700,
            ml: 8,
            // mt: 5
          }}
        //   variant="h3"
        //   fontWeight="bold"
        //   gutterBottom
        >
          FAQs
        </Typography>
        <Typography
          //   variant="h5"
          sx={{
            ...typography.h3B1,
            fontWeight: 400,
            mb: 4,
            color: "text.secondary",
            ml: 8,
          }}
        >
          Get powerful lifting magnets when you need them — without the upfront
          cost. Flexible rental plans, quick installation, and reliable
          performance for every project
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
                <Typography
                  sx={{
                    ...typography.h3B1,
                    fontWeight: 400,
                  }}
                //  fontWeight="bold"
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    ...typography.bodyBase,
                    fontWeight: 400,
                  }}
                  color="text.secondary"
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>

      {/* Footer Section */}
      <Box >
        <Footer />
      </Box>

    </Box>
  );
};

export default CheckAvailabilty;
