import { React, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Link,
  Card,
  InputBase,
  CardMedia,
  CardContent,
  Accordion,
  Avatar,
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import HandshakeIcon from "@mui/icons-material/Handshake";
import handshake1 from "../../../assets/handshake3.jpg";
import Rentinstead from "../../../assets/Rentinstaed.jpg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import videoFile from "../../../assets/MicrosoftTeams-video.mp4"; // ✅ put your video file here
import WhatsApp from "../../../assets/whatsappimg.jpg";
import RepairsectionCard from "app/components/Card/RepairsectionCard";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
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
import useCase2 from "../../../assets/useCase2.png";
import useCase1 from "../../../assets/useCase1.png";
import Brand1 from "../../../assets/Brand1.png";
import Brand2crea from "../../../assets/Brand2crea.png";
import Blogs1 from "../../../assets/Blogs1.jpg";
import Blogs2 from "../../../assets/Blogs2.jpg";
import Blogs3 from "../../../assets/Blogs3.jpg";
import Blogs4 from "../../../assets/Blogs4.jpg";
import casestudy from "../../../assets/Case Study1.png";
import RepairServicesPageCard from "app/components/Card/RepairServicesPageCard";
import ProcessCards from "app/components/Card/HowweworkCard";
import ResalerefurbishedCard from "app/components/Card/Resalerefurbished";
import realisticillustration from "../../../assets/Realisticillustration.png";
import Approach1 from "../../../assets/Approach1.png";
import Approach2 from "../../../assets/Approach2.png";
import Approach3 from "../../../assets/Approach3.png";
import Approach4 from "../../../assets/Approach4.png";
import Approach5 from "../../../assets/Approach5.jpg";
import Roi1 from "../../../assets/Roi1.png";
import Roi2 from "../../../assets/Roi2.png";
import Whyitworkcard from "app/components/Card/Whyitworkcard";
import Whyitworkimg from "../../../assets/whyitworkimg.jpg";
import { typography } from "app/utils/constant";
import { grey } from "@mui/material/colors";
import SellRentServicesCard from "app/components/Card/SellRentServicesCard";
import Refurbishedmagnet from "../../../assets/topbarservice1.jpg";
import Checkavailimage from "../../../assets/aftercstudy.png";
import WhatsincludedCard from "app/components/Card/WhatsincludedCard";
import Refurbisheddetailimg from "../../../assets/Refurbishdetail.png";

const RefurbishedDetail = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [mainImage, setMainImage] = useState(Checkavailimage);

  const thumbnailImages = [Roi2, Roi1, Roi2, Roi1];

  const [BrowseDialogopen, setBrowseDialogOpen] = useState(false);

  const handleClickOpen = () => {
    setBrowseDialogOpen(true);
  };

  const handledialogClose = () => {
    setBrowseDialogOpen(false);
  };

  //Refurbished Magnet
  const Refurbished = [
    {
      id: 1,
      title: "Sell Us",
      type: "Coil",
      subtitile: "Per day",
      icon: HandshakeIcon,
      img: Refurbishedmagnet,
      price: 25,
      liftCapacity: "2.5 tons",
      powerSupply: "220V / 110V",
      sizes: "700mm / 890mm /120mm",
    },
    {
      id: 2,
      title: "Exchange",
      type: "Coil",
      subtitile: "Per day",
      icon: HandshakeIcon,
      img: Refurbishedmagnet,
      price: 25,
      liftCapacity: "2.5 tons",
      powerSupply: "220V / 110V",
      sizes: "700mm / 890mm /120mm",
    },
    {
      id: 3,
      title: "Exchange",
      type: "Coil",
      subtitile: "Per day",
      icon: HandshakeIcon,
      img: Refurbishedmagnet,
      price: 25,
      liftCapacity: "2.5 tons",
      powerSupply: "220V / 110V",
      sizes: "700mm / 890mm /120mm",
    },
    {
      id: 4,
      title: "Exchange",
      type: "Coil",
      subtitile: "Per day",
      icon: HandshakeIcon,
      img: Refurbishedmagnet,
      price: 25,
      liftCapacity: "2.5 tons",
      powerSupply: "220V / 110V",
      sizes: "700mm / 890mm /120mm",
    },
    {
      id: 5,
      title: "Exchange",
      type: "Coil",
      subtitile: "Per day",
      icon: HandshakeIcon,
      img: Refurbishedmagnet,
      price: 25,
      liftCapacity: "2.5 tons",
      powerSupply: "220V / 110V",
      sizes: "700mm / 890mm /120mm",
    },
    {
      id: 6,
      title: "Exchange",
      type: "Coil",
      subtitile: "Per day",
      icon: HandshakeIcon,
      img: Refurbishedmagnet,
      price: 25,
      liftCapacity: "2.5 tons",
      powerSupply: "220V / 110V",
      sizes: "700mm / 890mm /120mm",
    },
  ];
  //Rent Instead section services
  const services = [
    {
      id: 1,
      title: "Sell Us",
      type: "Coil",
      subtitile: "Per day",
      icon: HandshakeIcon,
      img: Rentinstead,
      price: 25,
      liftCapacity: "2.5 tons",
      powerSupply: "220V / 110V",
      sizes: "700mm / 890mm /120mm",
    },
    {
      id: 2,
      title: "Exchange",
      type: "Coil",
      subtitile: "Per day",
      icon: HandshakeIcon,
      img: Rentinstead,
      price: 25,
      liftCapacity: "2.5 tons",
      powerSupply: "220V / 110V",
      sizes: "700mm / 890mm /120mm",
    },
    {
      id: 3,
      title: "Exchange",
      type: "Coil",
      subtitile: "Per day",
      icon: HandshakeIcon,
      img: Rentinstead,
      price: 25,
      liftCapacity: "2.5 tons",
      powerSupply: "220V / 110V",
      sizes: "700mm / 890mm /120mm",
    },
    {
      id: 4,
      title: "Exchange",
      type: "Coil",
      subtitile: "Per day",
      icon: HandshakeIcon,
      img: Rentinstead,
      price: 25,
      liftCapacity: "2.5 tons",
      powerSupply: "220V / 110V",
      sizes: "700mm / 890mm /120mm",
    },
    {
      id: 5,
      title: "Exchange",
      type: "Coil",
      subtitile: "Per day",
      icon: HandshakeIcon,
      img: Rentinstead,
      price: 25,
      liftCapacity: "2.5 tons",
      powerSupply: "220V / 110V",
      sizes: "700mm / 890mm /120mm",
    },
    {
      id: 6,
      title: "Exchange",
      type: "Coil",
      subtitile: "Per day",
      icon: HandshakeIcon,
      img: Rentinstead,
      price: 25,
      liftCapacity: "2.5 tons",
      powerSupply: "220V / 110V",
      sizes: "700mm / 890mm /120mm",
    },
  ];

  const specs = [
    { label: "Diameter", value: "Ø{{diameter_mm}} mm" },
    { label: "Overall height", value: "Ø{{diameter_mm}} mm" },
    { label: "Net weight", value: "Ø{{diameter_mm}} mm" },
    { label: "Face area", value: "Ø{{diameter_mm}} mm" },
    { label: "IP rating", value: "Ø{{diameter_mm}} mm" },
    { label: "Lifting eye/hanger", value: "Ø{{diameter_mm}} mm" },
  ];

  //sell or exchange section
  const servicesnew = [
    {
      id: 1,
      title: "Sell Us",
      type: "Rental unit eliminated production loss",
      icon: HandshakeIcon,
      img: handshake1,
    },
    {
      id: 2,
      title: "Exchange",
      type: "Class-H insulation, terminals/ leads to OEM spec",
      icon: HandshakeIcon,
      img: handshake1,
    },
  ];
  const steps = [
    {
      number: "1",
      title: "Shortlist",
      desc: "Filter and pick a unit (or tell us your spec)",
    },
    {
      number: "2",
      title: "Assess",
      desc: "We share test data, photos, cert & warranty terms",
    },
    {
      number: "3",
      title: "Quote",
      desc: "Itemized quotation with logistics & timelines",
    },
    {
      number: "4",
      title: "Dispatch",
      desc: "24–48h after confirmation (subject to availability)",
    },
    {
      number: "5",
      title: "Install",
      desc: "Optional commissioning & operator briefing",
    },
  ];

  //useCase
  const useCase = [
    {
      title: "Repair vs Replace",
      description:
        "Estimate the cheapest path. We also compare renting during lead time vs paying downtime.",
      image: useCase1,
    },
    {
      title: "Repair vs Replace",
      description:
        "Estimate the cheapest path. We also compare renting during lead time vs paying downtime.",
      image: useCase2,
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

  const images = [
    Roi1, // Default large image
    Roi2,
    Roi1,
    Roi2,
    Roi1,
    Roi2,
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

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
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        bgcolor: "white",
        // textAlign: "center",
        p: 4,
      }}
    >
      {/* image and forms */}
      <Box sx={{ padding: "40px 60px" }}>
        {/* Image + Form Section */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "space-between",
          }}
        >
          {/* Left Side: Thumbnails + Main Image */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Main Image */}
            <Box
              component="img"
              src={Refurbisheddetailimg}
              alt="Main Lifting Magnet"
              sx={{
                width: "100%",
                borderRadius: "10px",
                objectFit: "cover",
                height: { xs: "auto", md: 400 },
              }}
            />
            {/* Thumbnails Row */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {thumbnailImages.map((img, index) => (
                <Box
                  key={index}
                  component="img"
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setMainImage(img)}
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "6px",
                    objectFit: "cover",
                    //   border: mainImage === img ? "2px solid #E17A00" : "2px solid transparent",
                    cursor: "pointer",
                    transition: "border 0.2s ease",
                  }}
                />
              ))}
            </Box>
          </Box>
          {/* Right Form */}
          {/* Right Form */}
          <Box
            sx={{
              width: { xs: "100%", md: "45%" },
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Title */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontSize: "49px",
                fontFamily: "SpaceGrotesk-Regular",
                lineHeight: 1.3,
                letterSpacing: "-0.56%",
                color: "#18294C",
              }}
            >
              Circular Lifting Magnet
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontWeight: 500,
                ...typography.h3medium,
                color: "#6B7280",
                maxWidth: "100%",
              }}
            >
              NISMO has become the embodiment of Nissan’s outstanding
              performance, inspired by the most unforgiving proving ground, the
              ”race track”.
            </Typography>

            {/* Spec Grid in Single Row */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                gap: 8,
              }}
            >
              {/* Column 1 */}
              <Box>
                <Typography
                  sx={{
                    color: "#9CA3AF",
                    fontWeight: 500,
                    ...typography.h3medium,
                  }}
                >
                  Diameter
                </Typography>
                <Typography
                  sx={{
                    color: "#9CA3AF",
                    fontWeight: 500,
                    ...typography.h3medium,
                    mt: 1,
                  }}
                >
                  Resistance
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    ...typography.h3B1,
                    color: "#1F2937",
                  }}
                >
                  1500
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    ...typography.h3B1,
                    color: "#1F2937",
                  }}
                >
                  1500
                </Typography>
              </Box>

              {/* Column 2 */}
              <Box>
                <Typography
                  sx={{
                    color: "#9CA3AF",
                    fontWeight: 500,
                    ...typography.h3medium,
                  }}
                >
                  Diameter
                </Typography>
                <Typography
                  sx={{
                    color: "#9CA3AF",
                    fontWeight: 500,
                    ...typography.h3medium,
                    mt: 1,
                  }}
                >
                  Resistance
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    ...typography.h3B1,
                    color: "#1F2937",
                  }}
                >
                  1500
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    ...typography.h3B1,
                    color: "#1F2937",
                  }}
                >
                  1500
                </Typography>
              </Box>
            </Box>

            {/* Final Row: Price + Button aligned */}
            <Box
              sx={{
                display: "flex",
                //   justifyContent: "space-between",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: "#60A5FA",
                    fontWeight: 500,
                    fontWeight: 500,
                    ...typography.h3medium,
                  }}
                >
                  Starting at
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    ...typography.h3B1,
                    color: "#1F2937",
                  }}
                >
                  5000/-
                </Typography>
              </Box>

              <Button
                variant="contained"
                sx={{
                  fontFamily: "Plus Jakarta Sans-Bold",
                  backgroundColor: "#3373f3ff",
                  color: "#ffffff",
                  px: 15,
                  ml: 15,
                  py: 1.5,
                  borderRadius: "6px",
                  fontWeight: 700,
                  textTransform: "none",
                  fontSize: "16px",
                  boxShadow: "0 4px 14px rgba(51, 115, 243, 0.3)",
                  "&:hover": {
                    backgroundColor: "#2563eb",
                  },
                }}
              >
                Buy now
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Specs section */}

      <Box sx={{ padding: "40px 60px", bgcolor: "#fff" }}>
        {/* Title */}
        <Typography
          sx={{
            ...typography.h3RBold,
            fontWeight: 600,
            mb: 2,
          }}
        >
          Specs
        </Typography>

        {/* Mechanical Accordion */}
        <Accordion
          sx={{
            boxShadow: "none",
            border: "1px solid #ddd",
            borderRadius: "6px",
            mb: 2,
            "&:before": { display: "none" },
          }}
          defaultExpanded
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              padding: "0 16px",
              minHeight: 48,
              "& .MuiAccordionSummary-content": { margin: 0 },
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontFamily: "SpaceGrotesk-Regular",
                fontSize: "32px",
                lineHeight: "1.2",
              }}
            >
              Mechanical
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "16px" }}>
            <Grid container spacing={2}>
              {specs.map(({ label, value }) => (
                <Grid item xs={12} sm={6} md={3} lg={2} key={label}>
                  <Box
                    sx={{
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      padding: 2,
                      minHeight: "80px",
                    }}
                  >
                    <Typography fontWeight={500} variant="body1" mb={0.5}>
                      {label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* Electrical Accordion */}
        <Accordion
          sx={{
            boxShadow: "none",
            border: "1px solid #ddd",
            borderRadius: "6px",
            mb: 2,
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              padding: "0 16px",
              minHeight: 48,
              "& .MuiAccordionSummary-content": { margin: 0 },
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontFamily: "SpaceGrotesk-Regular",
                fontSize: "32px",
                lineHeight: "1.2",
              }}
            >
              Electrical
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "16px" }}>
            <Grid container spacing={2}>
              {specs.map(({ label, value }) => (
                <Grid item xs={12} sm={6} md={3} lg={2} key={label}>
                  <Box
                    sx={{
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      padding: 2,
                      minHeight: "80px",
                    }}
                  >
                    <Typography fontWeight={500} variant="body1" mb={0.5}>
                      {label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* Performance Accordion */}
        <Accordion
          sx={{
            boxShadow: "none",
            border: "1px solid #ddd",
            borderRadius: "6px",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              padding: "0 16px",
              minHeight: 48,
              "& .MuiAccordionSummary-content": { margin: 0 },
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontFamily: "SpaceGrotesk-Regular",
                fontSize: "32px",
                lineHeight: "1.2",
              }}
            >
              Performance
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "16px" }}>
            <Grid container spacing={2}>
              {specs.map(({ label, value }) => (
                <Grid item xs={12} sm={6} md={3} lg={2} key={label}>
                  <Box
                    sx={{
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      padding: 2,
                      minHeight: "80px",
                    }}
                  >
                    <Typography fontWeight={500} variant="body1" mb={0.5}>
                      {label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
      {/* Section Heading */}
      <Typography
        // variant="h5"
        // fontWeight="bold"
        sx={{
          textAlign: "left",
          ml: 5,
          color: "#1c2434",
          fontWeight: 600,
          fontFamily: "Space Grotesk, Regular",
          fontSize: "48px",
          // lineHeight: "110px"
        }}
      >
        What's included
      </Typography>

      <WhatsincludedCard />

      <Box
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          // alignItems: "left"
        }}
      >
        {/* Subtext line */}
        <Typography
          sx={{
            mt: 2,
            ml: 5,
            fontFamily: "Space Grotesk, Regular",
            fontSize: "32px",
            fontWeight: 600,
            lineHeight: "120%",
            color: "#111827",
            textAlign: "left",
            // color: "gray",
          }}
        >
          Refurbishment scope
        </Typography>
        {/* Lighter subtext */}
        <Typography
          sx={{
            mt: 1,
            ml: 5,
            fontFamily: "Space Grotesk, Regular",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "130%",
            color: "#111827",
          }}
        >
          What was Replaced / reworked
        </Typography>
        {/* Chips Section */}
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={2}
          sx={{ mb: 3, mt: 2, ml: 5 }}
        >
          {[
            "Loose junctions",
            "Capacity drop",
            "Uneven flux",
            "Pole-shoe wear",
            "Loose junctions",
            "Pole-shoe wear",
          ].map((item, index) => (
            <Chip
              key={index}
              label={item}
              variant="outlined"
              sx={{
                fontSize: 14,
                borderRadius: "20px",
                px: 1.5,
                py: 0.5,
                "&:hover": {
                  bgcolor: "#1c2434",
                  color: "white",
                },
              }}
            />
          ))}
        </Stack>

        <Divider
          sx={{
            borderColor: "#a4a5a5ff", // light grey border
            // OR
            bgcolor: "#a4a5a5ff", // background color if vertical
          }}
        />

        <Typography
          // variant="h5"
          // fontWeight="bold"
          sx={{
            textAlign: "left",
            ml: 5,
            color: "#1c2434",
            fontWeight: 600,
            fontFamily: "Space Grotesk, Regular",
            fontSize: "48px",
            // lineHeight: "110px"
          }}
        >
          Fit & compatibility
        </Typography>

        <WhatsincludedCard />
      </Box>

      {/* Use Cases  */}
      <Box
        sx={{
          mt: 5,
        }}
      >
        <Typography
          sx={{
            ml: 10,
            ...typography.h3RB,
            fontWeight: 700,
            color: "#02102cff",
          }}
        >
          Use cases
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            color: "text.secondary",
            ...typography.h3B1,
            fontWeight: 400,
            ml: 10,
          }}
        >
          Get powerful lifting magnets when you need them — without the upfront
          cost. Flexible rental plans, quick installation, and reliable
          performance for every project!
        </Typography>

        <Box sx={{ maxWidth: 1200, mx: "auto", px: 2 }}>
          <Grid container spacing={4} justifyContent="center">
            {useCase.map((item, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Card
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: 3,
                    height: 320,
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
                    //   "&:hover": {
                    //     textAlign: "left",
                    //     bgcolor: "#0b2d55",
                    //     color: "white",
                    //     "& .MuiTypography-root": {
                    //       color: "white",
                    //       transform: "scale(1.05)",
                    //     },
                    //     "& .MuiDivider-root": {
                    //       borderColor: "rgba(255,255,255,0.3)",
                    //     },
                    //     "& .MuiIconButton-root": {
                    //       backgroundColor: "#6aa9ff", // 🔹 light blue only for icon button
                    //       color: "white", // icon turns white
                    //     },
                    //   },
                    }}
                  >
                    <Box
                      display="flex"
                      sx={{}}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography
                        sx={{
                          fontSize: "24px",
                          fontFamily: "SpaceGrotesk-Bold",
                          fontWeight: 700,
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
                        color: "#bdbdbd",
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

      {/* Footer Section */}
      <Box
        component="footer"
        sx={{
          mt: 5,
          backgroundColor: "#0b2d55",
          color: "#fff",
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          width: "100%",
          px: { xs: 4, md: 1 },
          py: { xs: 6, md: 2 },
        }}
      >
        <Grid container spacing={4}>
          {/* 1. Left Column: Brand and Unit Info */}
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Box mb={2}>
                <img src={Brand1} alt="ReFlux Magnets" style={{ height: 40 }} />
              </Box>
              <Box display="flex" alignItems="center" mt={2}>
                <Typography
                  //  variant="body2"
                  sx={{
                    fontFamily: "Space Grotesk, Regular",
                    fontWeight: 700,
                    fontSize: "28px",
                    lineHeight: "120%",
                    mr: 1,
                  }}
                >
                  A unit of
                </Typography>
                <Box component="span">
                  <img src={Brand1} alt="Electro Flux" style={{ height: 40 }} />
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* 2. Middle Column: Contact Info */}
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  fontFamily: "Space Grotesk, Regular",
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

              <Typography
                //  variant="body2"
                sx={{
                  lineHeight: "130%",
                  fontWeight: 500,
                  fontSize: "20px",
                  fontFamily: "Space Grotesk, Regular",
                  textAlign: "left",
                }}
              >
                Xilliams Corner Wine © 2017. <br />
                1112 A Market St # Ste B22,
                <br />
                Charlottesville, CA 45565
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  lineHeight: "130%",
                  fontWeight: 500,
                  fontSize: "20px",
                  fontFamily: "Space Grotesk, Regular",
                  borderBottom: "2px solid #1976d2",
                }}
              >
                (123) 456-7890
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  display: "inline-block",
                  borderBottom: "2px solid #1976d2",
                  pb: "2px",
                  lineHeight: "130%",
                  fontWeight: 500,
                  fontSize: "20px",
                  fontFamily: "Space Grotesk, Regular",
                }}
              >
                contact@lift.agency
              </Typography>
            </Box>
          </Grid>

          {/* 3. Right Column: Links + Scroll Icon + Copyright */}
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  fontFamily: "Space Grotesk, Regular",
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
                <Typography
                  key={item}
                  sx={{
                    mb: 1,
                    lineHeight: "130%",
                    fontWeight: 500,
                    fontSize: "20px",
                    fontFamily: "Space Grotesk, Regular",
                  }}
                >
                  {item}
                </Typography>
              ))}

              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "24px",
                  fontFamily: "Space Grotesk, Bold",
                  mt: 2,
                  lineHeight: "130%",
                }}
              >
                Wall of Love ❤️
              </Typography>

              {/* Divider under Wall of Love */}
              <Box
                sx={{
                  width: 30,
                  height: 2,
                  backgroundColor: "#fff",
                  my: 1,
                }}
              />

              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "24px",
                  fontFamily: "Space Grotesk, Bold",
                  mt: 3,
                  lineHeight: "130%",
                }}
              >
                Sitemap
              </Typography>

              {/* Scroll to Top Icon */}
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
                  ml: 20,
                }}
              >
                <ArrowUpwardIcon sx={{ color: "#fff" }} />
              </Box>

              <Typography variant="caption" sx={{ color: "#ccc" }}>
                © 2020 Lift Media All rights reserved.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default RefurbishedDetail;
