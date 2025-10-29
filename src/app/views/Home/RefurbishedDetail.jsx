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

  Stack,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ind1 from "../../../assets/industry1.png";
import ind2 from "../../../assets/industry2.png";
import ind3 from "../../../assets/industry3.png";
import Footer from 'app/components/Card/Footer';

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


const industries = [
  {
    id: 1,
    title: "Food Processing Industry",
    description: "Maintain a clean and inviting environment by regularly dusting.",
    img: ind1,
  },
  {
    id: 2,
    title: "Warehouse Operations",
    description: "Maintain a fresh and organized space with consistent dusting, mopping, and surface care.",
    img: ind2
  },
  {
    id: 3,
    title: "Metal Industries",
    description: "Keep your facility clean and safe with professional upkeep.",
    img: ind3,
  },
  {
    id: 4,
    title: "Healthcare Facilities",
    description: "Ensure hygiene and cleanliness for patient safety.",
    img: ind1,
  },
];

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
        backgroundColor: "#f9fafb",
        // textAlign: "center",
        p: 4,
      }}
    >
      {/* image and forms */}
      <Box
  sx={{
    padding: '40px 60px',
    width: '1441px',
    height: '796px',
    '@media (max-width: 600px)': {
      padding: '20px',
      width: '100%',
      height: 'auto',
    },
  }}
>
  {/* Image + Form Section */}
  <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 4,
      justifyContent: 'space-between',
      '@media (max-width: 600px)': {
        flexDirection: 'column',
      },
    }}
  >
    {/* Left Side: Thumbnails + Main Image */}
    <Box
      sx={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        '@media (max-width: 600px)': {
          width: '100%',
        },
      }}
    >
      {/* Main Image */}
      <Box
        component="img"
        src={Refurbisheddetailimg}
        alt="Main Lifting Magnet"
        sx={{
          width: '664px',
          height: '432px',
          borderRadius: '10px',
          objectFit: 'cover',
          '@media (max-width: 600px)': {
            width: '100%',
            height: 'auto',
          },
        }}
      />

      {/* Thumbnails */}
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
          '@media (max-width: 600px)': {
            justifyContent: 'center',
          },
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
              width: '148px',
              height: '124px',
              borderRadius: '6px',
              objectFit: 'cover',
              cursor: 'pointer',
              transition: 'border 0.2s ease',
              '@media (max-width: 600px)': {
                width: '30%',
                height: 'auto',
              },
            }}
          />
        ))}
      </Box>
    </Box>

    {/* Right Form */}
    <Box
      sx={{
        width: '600px',
        height: '394px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        '@media (max-width: 600px)': {
          width: '100%',
          height: 'auto',
        },
      }}
    >
      {/* Title */}
      <Box
        sx={{
          width: '619px',
          height: '164px',
          '@media (max-width: 600px)': {
            width: '100%',
            height: 'auto',
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            // width: '619px',
            // height: '62px',
            ...typography.displayL,
            fontWeight:700,
            color: '#18294C',
            '@media (max-width: 600px)': {
              fontSize: '56px',
              width: '100%',
            },
          }}
        >
          Circular Lifting Magnet
        </Typography>

        <Typography
          sx={{
            width: '619px',
            height: '78px',
            ...typography.h5,
            color: '#6B7280',
            maxWidth: '100%',
            marginTop: '20px',
            '@media (max-width: 600px)': {
              fontSize: '14px',
              width: '100%',
            },
          }}
        >
          NISMO has become the embodiment of Nissan’s outstanding performance,
          inspired by the most unforgiving proving ground, the ”race track”.
        </Typography>
      </Box>

      {/* Spec Grid */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          '@media (max-width: 600px)': {
            flexDirection: 'column',
            gap: 2,
          },
        }}
      >
        {/* Column 1 */}
        <Box>
          <Typography
            sx={{
              color: '#9CA3AF',
              fontWeight: 500,
              ...typography.h5,
            }}
          >
            Diameter
          </Typography>
          <Typography
            sx={{
              color: '#9CA3AF',
              fontWeight: 500,
              ...typography.h5,
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
              ...typography.h4,
              color: '#596780',
            }}
          >
            1500
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              ...typography.h4,
              color: '#596780',
            }}
          >
            1500
          </Typography>
        </Box>

        {/* Column 2 */}
        <Box>
          <Typography
            sx={{
              color: '#9CA3AF',
              fontWeight: 500,
              ...typography.h3medium,
            }}
          >
            Diameter
          </Typography>
          <Typography
            sx={{
              color: '#9CA3AF',
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
              color: '#1F2937',
            }}
          >
            1500
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              ...typography.h3B1,
              color: '#1F2937',
            }}
          >
            1500
          </Typography>
        </Box>
      </Box>

      {/* Price + Button */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mt: 2,
          '@media (max-width: 600px)': {
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 2,
          },
        }}
      >
        <Box>
          <Typography
            sx={{
              color: '#60A5FA',
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
              color: '#1F2937',
            }}
          >
            5000/-
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            fontFamily: 'Plus Jakarta Sans-Bold',
            backgroundColor: '#3373f3ff',
            color: '#ffffff',
            px: 15,
            ml: 15,
            py: 1.5,
            fontWeight: 700,
            textTransform: 'none',
            fontSize: '16px',
            boxShadow: '0 4px 14px rgba(51, 115, 243, 0.3)',
            '&:hover': {
              backgroundColor: '#2563eb',
            },
            '@media (max-width: 600px)': {
              width: '100%',
              ml: 0,
              px: 0,
              justifyContent: 'center',
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
            "Coil rewind",
            "terminals/leads",
            "Repaint",
            // "Pole-shoe wear",
            // "Loose junctions",
            // "Pole-shoe wear",
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


      </Box>


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
          Fit & Compatibility
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
            color: "#1c2434",
            fontWeight: 600,
            fontFamily: "Space Grotesk, Regular",
            fontSize: "48px",
          }}
        >
          Use Cases
        </Typography>

        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={3} // show 3 at a time
          pagination={{
            clickable: true,
          }}
          style={{
            paddingBottom: "40px", // space for pagination line
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            960: { slidesPerView: 3 },
          }}
        >
          {industries.map((industry) => (
            <SwiperSlide key={industry.id}>
              <Card
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  position: "relative",
                  height: 260,
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                {/* Background Image */}
                <CardMedia
                  component="img"
                  image={industry.img}
                  alt={industry.title}
                  sx={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* Floating Overlay Box */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 16,          // lift the box a bit above the bottom
                    left: 16,
                    right: 16,
                    bgcolor: "white",
                    p: 2,
                    borderRadius: 2,
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.15)", // floating effect
                  }}
                >
                  <Typography sx={{
                    ...typography.h4,
                    color: "#0B121E",
                    mt: 0.5
                  }}>
                    {industry.title}
                  </Typography>
                  <Typography
                    sx={{
                      ...typography.bodyBase,
                      color: "#99A0AE",
                      mt: 0.5
                    }}
                  >
                    {industry.description}
                  </Typography>
                </Box>
              </Card>

            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Progressbar Style */}
        <style>
          {`
          .swiper-pagination {
            bottom: 0 !important;
          }
          .swiper-pagination-bullet {
            width: 30px;
            height: 3px;
            border-radius: 2px;
            background: #d1d5db; /* gray */
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background: #2563eb !important; /* blue active */
          }
        `}
        </style>
      </Box>

      {/* Footer Section */}
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default RefurbishedDetail;
