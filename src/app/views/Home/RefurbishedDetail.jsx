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
import AddIcon from '@mui/icons-material/Add';


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Footer from 'app/components/Card/Footer';
import EditIcon from "@mui/icons-material/Edit";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import HandshakeIcon from "@mui/icons-material/Handshake";
import handshake1 from "../../../assets/handshake3.jpg";
import Rentinstead from "../../../assets/Rentinstaed.jpg";

// import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import useCase2 from "../../../assets/useCase2.png";
import useCase1 from "../../../assets/useCase1.png";

import Blogs1 from "../../../assets/Blogs1.jpg";
import Blogs2 from "../../../assets/Blogs2.jpg";
import Blogs3 from "../../../assets/Blogs3.jpg";
import Blogs4 from "../../../assets/Blogs4.jpg";

import Roi1 from "../../../assets/Roi1.png";
import Roi2 from "../../../assets/Roi2.png";

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


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  // ✅ Fetch content from API
  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}?contentId=C011`)
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


  const chipIds = ["CON120003", "CON120004", "CON120005"];

  // ✅ Dynamic industries data from JSON (C011)
  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    if (!content) return;

    setIndustries([
      {
        id: 1,
        title: content.CON110001,
        description: content.CON110002,
        img: `https://refluxmagnets.com${content.CON110003}`,
      },
      {
        id: 2,
        title: content.CON110004,
        description: content.CON110005,
        img: `https://refluxmagnets.com${content.CON110006}`,
      },
      {
        id: 3,
        title: content.CON110007,
        description: content.CON110008,
        img: `https://refluxmagnets.com${content.CON110009}`,
      },
      {
        id: 4,
        title: content.CON110010,
        description: content.CON110011,
        img: `https://refluxmagnets.com${content.CON110012}`,
      },
    ]);
  }, [content]);


  const [open, setOpen] = useState(false);

  const [specData, setSpecData] = useState([]);

  useEffect(() => {
    if (!content) return;

    setSpecData([
      {
        label: content.CON130001,
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
        label: content.CON130008,
        id: "CON130008",
        properties: [
          { id: "CON130009", text: content.CON130009 },
          { id: "CON130010", text: content.CON130010 },
          { id: "CON130011", text: content.CON130011 },
          { id: "CON130012", text: content.CON130012 },
        ],
      },
      {
        label: content.CON130013,
        id: "CON130013",
        properties: [
          { id: "CON130014", text: content.CON130014 },
          { id: "CON130015", text: content.CON130015 },
          { id: "CON130016", text: content.CON130016 },
          { id: "CON130017", text: content.CON130017 },
        ],
      },
    ]);
  }, [content]);




  // --------------------------------------------
  // ADD NEW SECTION
  // --------------------------------------------
  const handleAddSection = () => {
    const newIndex = specData.length + 1;
    const newId = `CON130${100 + newIndex}`;

    const newSection = {
      label: `New Section ${newIndex}`,
      id: newId,
      properties: [],
    };

    setSpecData((prev) => [...prev, newSection]);
  };

  // --------------------------------------------
  // ADD NEW CARD INSIDE A SECTION
  // --------------------------------------------
  const handleAddCard = (sectionIndex) => {
    setSpecData((prev) => {
      const updated = [...prev];
      const newPropId = `CON130${200 + updated[sectionIndex].properties.length}`;

      updated[sectionIndex].properties.push({
        id: newPropId,
        text: "New Property",
      });

      return updated;
    });
  };

  if (!content) return null;



  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
          // height: "100vh",
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
            px: { xs: 2, md: 8 },
            py: { xs: 4, md: 7 },
            width: "100%",
            bgcolor: "#fff",
          }}
        >
          {/* Image + Content Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            {/* Left Side: Main Image + Thumbnails */}
            <Box
              sx={{
                flex: { xs: "1 1 100%", md: "1 1 50%" },
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {/* Main Image */}
              <Box sx={{ position: "relative", borderRadius: 2, overflow: "hidden" }}>
                <Box
                  component="img"
                  src={`https://refluxmagnets.com${content.CON120019}`}
                  alt={content?.CON120019_ALT || "Main Lifting Magnet"}
                  sx={{
                    width: "100%",
                    height: { xs: "auto", md: 432 },
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />
                {isAdmin && (
                  <Box sx={{ position: "absolute", top: 8, right: 8 }}>
                    <EditIconButton id="CON120019" type="I" isAdmin={isAdmin} onEdit={handleEdit} />
                  </Box>
                )}
              </Box>

              {/* Thumbnails Row */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "nowrap",
                  overflowX: { xs: "auto", md: "visible" },
                  py: 1,
                }}
              >
                {[content.CON120020, content.CON120021, content.CON120022, content.CON120023].map(
                  (thumb, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        flex: "0 0 auto",
                        position: "relative",
                        borderRadius: 1,
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        component="img"
                        src={`https://refluxmagnets.com${thumb}`}
                        alt={
                          content?.[`CON1200${20 + idx}_ALT`] ||
                          `Product gallery thumbnail ${idx + 1}`
                        }
                        onClick={() => setMainImage(`https://refluxmagnets.com${thumb}`)}
                        sx={{
                          width: { xs: 100, sm: 120, md: 148 },
                          height: { xs: 80, sm: 100, md: 124 },
                          objectFit: "cover",
                          cursor: "pointer",
                          borderRadius: 1,
                        }}
                      />
                      {isAdmin && (
                        <Box sx={{ position: "absolute", top: 4, right: 4 }}>
                          <EditIconButton id={`CON1200${20 + idx}`} type="I" isAdmin={isAdmin} onEdit={handleEdit} />
                        </Box>
                      )}
                    </Box>
                  )
                )}
              </Box>
            </Box>

            {/* Right Side: Form / Content */}
            <Box
              sx={{
                flex: { xs: "1 1 100%", md: "1 1 45%" },
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {/* Title + Subtitle */}
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: "#18294C",
                    fontSize: { xs: "28px", sm: "36px", md: "48px" },
                    lineHeight: 1.2,
                  }}
                >
                  {content.CON120006}
                  <EditIconButton id="CON120006" />
                </Typography>
                <Typography
                  sx={{
                    color: "#6B7280",
                    mt: 2,
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                  }}
                >
                  {content.CON120007}
                  <EditIconButton id="CON120007" />
                </Typography>
              </Box>

              {/* Specs Grid */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                {[content.CON120008, content.CON120010, content.CON120012, content.CON120014].map(
                  (item, idx) => (
                    <Box key={idx} sx={{ flex: { xs: "1 1 45%", md: "1 1 auto" } }}>
                      <Typography sx={{ color: "#9CA3AF", fontWeight: 500 }}>
                        {item}
                        <EditIconButton id={`CON1200${8 + idx * 2}`} />
                      </Typography>
                      <Typography sx={{ fontWeight: 700, mt: 1 }}>
                        {[content.CON120009, content.CON120011, content.CON120013, content.CON120015][idx]}
                        <EditIconButton id={`CON1200${9 + idx * 2}`} />
                      </Typography>
                    </Box>
                  )
                )}
              </Box>

              {/* Price + Button */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mt: 2,
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                {/* Price */}
                <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 40%" } }}>
                  <Typography sx={{ color: "#60A5FA", fontWeight: 500 }}>
                    {content.CON120016}
                    <EditIconButton id="CON120016" />
                  </Typography>
                  <Typography sx={{ fontWeight: 700, mt: 1 }}>
                    {content.CON120017}
                    <EditIconButton id="CON120017" />
                  </Typography>
                </Box>

                {/* Buy Now Button */}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#3373f3",
                    color: "#fff",
                    px: 6,
                    py: 1.5,
                    fontWeight: 700,
                    textTransform: "none",
                    fontSize: { xs: "14px", md: "16px" },
                    width: { xs: "100%", md: "60%" }, // <-- match button width with price box
                    justifyContent: "center",
                    "&:hover": { backgroundColor: "#2563eb" },
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
            <Typography variant="h6" fontSize="48px" fontWeight="bold">
              {content.CON130000}
            </Typography>
            <EditIconButton id="CON130000" isAdmin={isAdmin} onEdit={handleEdit} />

            {/* ADD NEW LABEL SECTION */}
            {isAdmin && (
              <IconButton onClick={handleAddSection}>
                <AddIcon />
              </IconButton>
            )}
          </Box>

          {specData.map((section, index) => (
            <Accordion
              key={section.id}
              defaultExpanded={index === 0}
              sx={{
                mb: 2,
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
                boxShadow: "none",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box display="flex" alignItems="center" gap={1}>
                  <Typography fontWeight="bold" fontSize="20px">
                    {section.label}
                  </Typography>

                  <EditIconButton
                    id={section.id}
                    isAdmin={isAdmin}
                    onEdit={handleEdit}
                  />

                  {/* ADD NEW CARD INSIDE THIS LABEL */}
                  {isAdmin && (
                    <IconButton onClick={() => handleAddCard(index)}>
                      <AddIcon />
                    </IconButton>
                  )}
                </Box>
              </AccordionSummary>

              <AccordionDetails sx={{ p: 3 }}>
                <Grid container spacing={2}>
                  {section.properties.map((prop) => (
                    <Grid item xs={6} sm={4} md={3} key={prop.id}>
                      <Box
                        sx={{
                          borderRadius: "12px",
                          p: 2,
                          height: "100px",
                          border: "1px solid #e5e7eb",
                          transition: "0.2s",
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

                        <Typography sx={{ fontSize: "14px", mt: 1 }}>
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
                      alt={
                        content?.[`CON11000${index * 3 + 3}_ALT`] ||
                        `${industry.title} industry application image`
                      }
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


      </Box>
      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default RefurbishedDetail;
