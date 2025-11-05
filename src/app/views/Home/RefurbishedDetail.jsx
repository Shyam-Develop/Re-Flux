import { React, useState, useEffect } from "react";
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
  useMediaQuery,
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
import EditIcon from "@mui/icons-material/Edit";
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

  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  // ✅ Fetch content from API
  useEffect(() => {
    fetch("https://skillglow.bexatm.com/ATM/ContentManageSysV1.php?contentId=C011")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setContent(data))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  // ✅ Check login role
  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  // ✅ Navigate to CMS editor
  const handleEdit = (contentTextID, type = "T") => {
    window.location.href = `/CmsEditor?contentId=C011&contentTextID=${contentTextID}&contentType=${type}`;
  };

  // ✅ Reusable Edit button
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

  if (!content) return null;

  const chipIds = ["CON120003", "CON120004", "CON120005"];

  // ✅ Dynamic industries data from JSON (C011)
  const industries = [
    {
      id: 1,
      title: content.CON110001,
      description: content.CON110002,
      img: `https://skillglow.bexatm.com${content.CON110003}`,
    },
    {
      id: 2,
      title: content.CON110004,
      description: content.CON110005,
      img: `https://skillglow.bexatm.com${content.CON110006}`,
    },
    {
      id: 3,
      title: content.CON110007,
      description: content.CON110008,
      img: `https://skillglow.bexatm.com${content.CON110009}`,
    },
    {
      id: 4,
      title: content.CON110010,
      description: content.CON110011,
      img: `https://skillglow.bexatm.com${content.CON110012}`,
    },
  ];

  const specData = [
    {
      label: content.CON130001, // Mechanical
      id: "CON130001",
      properties: [
        { id: "CON130002", text: content.CON130002 },
        { id: "CON130003", text: content.CON130003 },
        { id: "CON130004", text: content.CON130004 },
        { id: "CON130005", text: content.CON130005 },
        { id: "CON130006", text: content.CON130006 },
        { id: "CON130007", text: content.CON130007 },
      ],
    },
    {
      label: content.CON130008, // Electrical
      id: "CON130008",
      properties: [
        { id: "CON130009", text: content.CON130009 },
        { id: "CON130010", text: content.CON130010 },
        { id: "CON130011", text: content.CON130011 },
        { id: "CON130012", text: content.CON130012 },
      ],
    },
    {
      label: content.CON130013, // Performance
      id: "CON130013",
      properties: [
        { id: "CON130014", text: content.CON130014 },
        { id: "CON130015", text: content.CON130015 },
        { id: "CON130016", text: content.CON130016 },
        { id: "CON130017", text: content.CON130017 },
      ],
    },
  ];
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
              sx={{
                position: "relative",
                display: "inline-block",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              {/* 🖼️ Image */}
              <Box
                component="img"
                src={`https://skillglow.bexatm.com${content.CON120019}`}
                alt="Main Lifting Magnet"
                sx={{
                  width: "664px",
                  height: "432px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  "@media (max-width: 600px)": {
                    width: "100%",
                    height: "auto",
                  },
                }}
              />

              {/* ✏️ Edit Button Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  borderRadius: "50%",
                }}
              >
                <EditIconButton
                  id="CON120019"
                  type="I"
                  isAdmin={isAdmin}
                  onEdit={handleEdit}
                />
              </Box>
            </Box>


            {/* Thumbnails */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                "@media (max-width: 600px)": {
                  justifyContent: "center",
                },
              }}
            >
              {[
                { id: "CON120020", src: content.CON120020 },
                { id: "CON120021", src: content.CON120021 },
                { id: "CON120022", src: content.CON120022 },
                { id: "CON120023", src: content.CON120023 },
              ].map((thumb, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    borderRadius: "6px",
                    overflow: "hidden",
                  }}
                >
                  {/* 🖼️ Thumbnail Image */}
                  <Box
                    component="img"
                    src={`https://skillglow.bexatm.com${thumb.src}`}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() =>
                      setMainImage(`https://skillglow.bexatm.com${thumb.src}`)
                    }
                    sx={{
                      width: "148px",
                      height: "124px",
                      borderRadius: "6px",
                      objectFit: "cover",
                      cursor: "pointer",
                      transition: "border 0.2s ease",
                      "@media (max-width: 600px)": {
                        width: "30%",
                        height: "auto",
                      },
                    }}
                  />

                  {/* ✏️ Edit Button for Admin */}
                  {isAdmin && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 6,
                        right: 6,
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        borderRadius: "50%",                      
                      }}
                    >
                      <EditIconButton id={thumb.id} isAdmin={isAdmin} onEdit={handleEdit} type="I"/>
                    </Box>
                  )}
                </Box>
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
                width: "619px",
                height: "164px",
                "@media (max-width: 600px)": {
                  width: "100%",
                  height: "auto",
                },
              }}
            >
              {/* --- Title + Edit button in same line --- */}
              <Typography
                variant="h4"
                sx={{
                  ...typography.displayL,
                  fontWeight: 700,
                  color: "#18294C",
                  "@media (max-width: 600px)": {
                    fontSize: "56px",
                    width: "100%",
                  },
                }}
              >
                {content.CON120006}
              </Typography>
              <EditIconButton id="CON120006" />

              {/* --- Subtitle / Description --- */}
              <Typography
                sx={{
                  width: "619px",
                  height: "78px",
                  ...typography.h5,
                  color: "#6B7280",
                  maxWidth: "100%",
                  marginTop: "20px",
                  "@media (max-width: 600px)": {
                    fontSize: "14px",
                    width: "100%",
                  },
                }}
              >
                {content.CON120007}
                <EditIconButton id="CON120007" />
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
                  {content.CON120008}
                  <EditIconButton id="CON120008" />

                </Typography>
                <Typography
                  sx={{
                    color: '#9CA3AF',
                    fontWeight: 500,
                    ...typography.h5,
                    mt: 1,
                  }}
                >
                  {content.CON120009}
                  <EditIconButton id="CON120009" />

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
                  {content.CON120010}
                  <EditIconButton id="CON120010" />

                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    ...typography.h4,
                    color: '#596780',
                  }}
                >
                  {content.CON120011}
                  <EditIconButton id="CON120011" />

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
                  {content.CON120012}
                  <EditIconButton id="CON120012" />

                </Typography>
                <Typography
                  sx={{
                    color: '#9CA3AF',
                    fontWeight: 500,
                    ...typography.h3medium,
                    mt: 1,
                  }}
                >
                  {content.CON120013}
                  <EditIconButton id="CON120013" />

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
                  {content.CON120014}
                  <EditIconButton id="CON120014" />

                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    ...typography.h3B1,
                    color: '#1F2937',
                  }}
                >
                  {content.CON120015}
                  <EditIconButton id="CON120015" />

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
                  {content.CON120016}
                  <EditIconButton id="CON120016" />

                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    ...typography.h3B1,
                    color: '#1F2937',
                  }}
                >
                  {content.CON120017}
                  <EditIconButton id="CON120017" />

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
                {content.CON120018}
                <EditIconButton id="CON120018" />

              </Button>
            </Box>
          </Box>
        </Box>
      </Box>




      {/* Specs section */}
      <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#f9fafb" }}>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="h6" fontSize="48px" fontWeight="bold" gutterBottom>
            {content.CON130000}
          </Typography>
          <EditIconButton id="CON130000" isAdmin={isAdmin} onEdit={handleEdit} />
        </Box>

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
              <Box display="flex" alignItems="center" gap={1}>
                <Typography fontWeight="bold" fontSize="20px">
                  {section.label}
                </Typography>
                <EditIconButton
                  id={section.id}
                  isAdmin={isAdmin}
                  onEdit={handleEdit}
                />
              </Box>
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
                      <Box display="flex" alignItems="center" gap={1}>
                        <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                          {prop.text}
                        </Typography>
                        <EditIconButton
                          id={prop.id}
                          isAdmin={isAdmin}
                          onEdit={handleEdit}
                        />
                      </Box>

                      <Typography
                        sx={{ fontSize: "14px", color: "inherit", mt: 1 }}
                      >
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
          {content.CON110014}
          <EditIconButton id="CON110014" />

        </Typography>
        <WhatsincludedCard />
      </Box>


      <Box sx={{ flexDirection: "column", alignItems: "flex-start" }}>
        {/* --- Title --- */}
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
          }}
        >
          {content.CON120001}
          <EditIconButton id="CON120001" />
        </Typography>

        {/* --- Subtitle --- */}
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
          {content.CON120002}
          <EditIconButton id="CON120002" />
        </Typography>

        {/* --- Chips Section --- */}
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={2}
          sx={{ mb: 3, mt: 2, ml: 5 }}
        >
          {chipIds.map((id) => (
            <Box
              key={id}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <Chip
                label={content[id]}
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
              <EditIconButton id={id} />
            </Box>
          ))}
        </Stack>

        <Divider sx={{ borderColor: "#a4a5a5ff", bgcolor: "#a4a5a5ff" }} />
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
          {content.CON110013}
          <EditIconButton id="CON110013" />
        </Typography>

        <WhatsincludedCard />

      </Box>

      {/* Use Cases  */}
      <Box sx={{ mt: 5 }}>
        {/* --- Title --- */}
        <Typography
          sx={{
            color: "#1c2434",
            fontWeight: 600,
            fontFamily: "Space Grotesk, Regular",
            fontSize: "48px",
            textAlign: isNonMobile ? "left" : "center",
          }}
        >
          {content.CON110000}
          <EditIconButton id="CON110000" />
        </Typography>

        {/* --- Swiper --- */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          style={{ paddingBottom: "40px" }}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            960: { slidesPerView: 3 },
          }}
        >
          {industries.map((industry, index) => (
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
                <Box sx={{ position: "relative", height: "100%" }}>
                  <CardMedia
                    component="img"
                    image={industry.img}
                    alt={industry.title}
                    sx={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: 3,
                    }}
                  />

                  {/* 🖊️ Edit Icon Inside Top-Right of Image */}
                  {isAdmin && (
                    <IconButton
                      size="small"
                      onClick={() => handleEdit(`CON11000${index * 3 + 3}`, "I")}
                      sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        bgcolor: "rgba(255,255,255,0.7)",
                        "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
                      }}
                    >
                      <EditIcon fontSize="small" sx={{ color: "#007bff" }} />
                    </IconButton>
                  )}
                </Box>

                {/* Floating Overlay Box */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    right: 16,
                    bgcolor: "white",
                    p: 2,
                    borderRadius: 2,
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
                  }}
                >
                  <Typography
                    sx={{
                      ...typography.h4,
                      color: "#0B121E",
                      mt: 0.5,
                    }}
                  >
                    {industry.title}
                    <EditIconButton id={`CON11000${index * 3 + 1}`} />
                  </Typography>

                  <Typography
                    sx={{
                      ...typography.bodyBase,
                      color: "#99A0AE",
                      mt: 0.5,
                    }}
                  >
                    {industry.description}
                    <EditIconButton id={`CON11000${index * 3 + 2}`} />
                  </Typography>
                </Box>
              </Card>

            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Swiper Pagination Style */}
        <style>
          {`
          .swiper-pagination {
            bottom: 0 !important;
          }
          .swiper-pagination-bullet {
            width: 30px;
            height: 3px;
            border-radius: 2px;
            background: #d1d5db;
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background: #2563eb !important;
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
