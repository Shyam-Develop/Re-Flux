import { React, useState, useEffect } from "react";
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
import EditIcon from "@mui/icons-material/Edit";
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
  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  // ✅ Fetch content from API
  useEffect(() => {
    fetch("https://skillglow.bexatm.com/ATM/ContentManageSysV1.php?contentId=C012")
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
    window.location.href = `/CmsEditor?contentId=C012&contentTextID=${contentTextID}&contentType=${type}`;
  };

  // ✅ Reusable Edit button
  const EditIconButton = ({ id, type = "T" }) =>
    isAdmin ? (
      <IconButton
        size="small"
        onClick={() => handleEdit(id, type)}
        sx={{
          ml: 1,
          p: 0.3,
          "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
          bgcolor: "rgba(255,255,255,0.7)",
          verticalAlign: "middle",
        }}
      >
        <EditIcon fontSize="small" sx={{ color: "#007bff" }} />
      </IconButton>
    ) : null;

  if (!content) return null;

  //specs
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

  const features = [
    {
      title: content.CON140001,
      desc: content.CON140002,
      image: content.CON140003,
      ids: { title: "CON140001", desc: "CON140002", image: "CON140003" },
    },
    {
      title: content.CON140004,
      desc: content.CON140005,
      image: content.CON140006,
      ids: { title: "CON140004", desc: "CON140005", image: "CON140006" },
    },
    {
      title: content.CON140007,
      desc: content.CON140008,
      image: content.CON140009,
      ids: { title: "CON140007", desc: "CON140008", image: "CON140009" },
    },
    {
      title: content.CON140010,
      desc: content.CON140011,
      image: content.CON140012,
      ids: { title: "CON140010", desc: "CON140011", image: "CON140012" },
    },
  ];

  const faqData = [
    { question: content.CON150001, answer: content.CON150002 },
    { question: content.CON150003, answer: content.CON150004 },
    { question: content.CON150005, answer: content.CON150006 },
    { question: content.CON150007, answer: content.CON150008 },
    { question: content.CON150009, answer: content.CON150010 },
  ];

  const thumbnailImages = [
    { id: "CON160001", src: content.CON160001 },
    { id: "CON160002", src: content.CON160002 },
    { id: "CON160003", src: content.CON160003 },
    { id: "CON160004", src: content.CON160004 },
    { id: "CON160005", src: content.CON160005 },
  ];

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
          {content.CON110006}
          <EditIconButton id="CON110006" />

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
            {content.CON110000}
            <EditIconButton id="CON110000" />

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
              {content.CON110001}
              <EditIconButton id="CON110001" />

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
              {content.CON110002}
              <EditIconButton id="CON110002" />

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
              {content.CON110003}
              <EditIconButton id="CON110003" />

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
              {content.CON110004}
              <EditIconButton id="CON110004" />

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
              {content.CON110005}
              <EditIconButton id="CON110005" />

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
              position: "relative",
            }}
          >
            {/* Main Image */}
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src={`https://skillglow.bexatm.com${content.CON160000}`}
                alt="Main Lifting Magnet"
                sx={{
                  width: { xs: "100%", md: "887px" },
                  height: { xs: "auto", md: "500px" },
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
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
                  id="CON160000"
                  type="I"
                  isAdmin={isAdmin}
                  onEdit={handleEdit}
                />
              </Box>
            </Box>
            {/* Thumbnails Row */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: { xs: "nowrap", md: "wrap" },
                overflowX: { xs: "auto", md: "visible" },
                position: "relative",
              }}
            >
              {thumbnailImages.map((img, index) => (
                <Box key={img.id} sx={{ position: "relative" }}>
                  <Box
                    component="img"
                    src={`https://skillglow.bexatm.com${img.src}`}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setMainImage(`https://skillglow.bexatm.com${img.src}`)}
                    sx={{
                      width: { xs: "100px", md: "148px" },
                      height: { xs: "80px", md: "124px" },
                      borderRadius: "6px",
                      objectFit: "cover",
                      border:
                        mainImage === img.src
                          ? "2px solid #E17A00"
                          : "2px solid transparent",
                      cursor: "pointer",
                      transition: "border 0.2s ease",
                      flex: "0 0 auto",
                    }}
                  />

                  {/* ✅ Edit Icon for Each Thumbnail */}
                  {isAdmin && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 6,
                        right: 6,
                      }}
                    >
                      <EditIconButton id={img.id} type="I" />
                    </Box>
                  )}
                </Box>
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
              position: "relative",
            }}
          >
            {/* Row 1: Dates */}
            <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", md: "row" } }}>
              <Box sx={{ flex: 1, position: "relative" }}>
                <Typography sx={{ ...typography.h3medium, fontWeight: 500, mb: "4px" }}>
                  {content.CON160006}
                  {isAdmin && <EditIconButton id="CON160006" />}
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

              <Box sx={{ flex: 1, position: "relative" }}>
                <Typography sx={{ ...typography.h3medium, fontWeight: 500, mb: "4px" }}>
                  {content.CON160007}
                  {isAdmin && <EditIconButton id="CON160007" />}
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
              <Box sx={{ flex: 1, position: "relative" }}>
                <Typography sx={{ ...typography.h3medium, fontWeight: 500, mb: "4px" }}>
                  {content.CON160008}
                  {isAdmin && <EditIconButton id="CON160008" />}
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

              <Box sx={{ flex: 1, position: "relative" }}>
                <Typography sx={{ ...typography.h3medium, fontWeight: 500, mb: "4px" }}>
                  {content.CON160009}
                  {isAdmin && <EditIconButton id="CON160009" />}
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
            <Box sx={{ position: "relative" }}>
              <Typography sx={{ ...typography.h3medium, fontWeight: 500, mb: "4px" }}>
                {content.CON160010}
                {isAdmin && <EditIconButton id="CON160010" />}
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
            <Box sx={{ position: "relative" }}>
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
                {content.CON160011}
                {isAdmin && <EditIconButton id="CON160011" />}
              </Button>

            </Box>
          </Box>
        </Box>

      </Box>


      {/* Specs Accordion */}
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


      {/* <Whyitworkcard /> */}

      {/*ElectroMagnet Repair Section */}
      <Box sx={{ px: isMobile ? 2 : 5, py: isMobile ? 4 : 8 }}>
        {/* Heading */}
        <Box display="flex" alignItems="center" gap={1} ml={{ xs: 2, md: 5 }}>
          <Typography
            variant="h4"
            sx={{
              color: "#1c2434",
              fontWeight: 600,
              fontFamily: "Space Grotesk, Regular",
              fontSize: { xs: "28px", md: "48px" },
              mt: { xs: 3, md: 0 },
            }}
          >
            {content.CON140000}
          </Typography>
          {isAdmin && <EditIconButton id="CON140000" />}
        </Box>

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
                  onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                  onClick={() => isMobile && setHoveredIndex(index)}
                >
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

                  {/* Text Section */}
                  <Box sx={{ ml: 4 }}>
                    <Box display="flex" alignItems="center" mb={1}>
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
                      {isAdmin && <EditIconButton id={item.ids.title} />}
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
                      {isAdmin && <EditIconButton id={item.ids.desc} />}
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
              sx={{ position: "relative" }}
            >
              <Box
                component="img"
                src={`https://skillglow.bexatm.com${features[hoveredIndex].image}`}
                alt="ElectroMagnet Repair"
                sx={{
                  width: "570px",
                  height: "530px",
                  maxWidth: isMobile ? "100%" : 600,
                  objectFit: "cover",
                  borderRadius: 3,
                  transition: "0.5s",
                }}
              />
              {isAdmin && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderRadius: "50%",
                  }}
                >
                  <EditIconButton id={features[hoveredIndex].ids.image} type="I" />
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>



      {/* FAQs Section */}
      <Box sx={{ mt: 3 }}>
        {/* --- Header Button --- */}
        <Button
          disableElevation
          disableRipple
          sx={{
            ...typography.bodySmall,
            marginBottom: 2,
            ml: 8,
            textTransform: "none",
            fontWeight: 400,
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
          }}
        >
          {content.CON150000}
          {isAdmin && <EditIconButton id="CON150000" />}
        </Button>

        {/* --- Title --- */}
        <Typography
          sx={{
            ...typography.h3RB,
            fontWeight: 700,
            ml: 8,
          }}
        >
          {content.CON150012}
          {isAdmin && <EditIconButton id="CON150012" />}
        </Typography>

        {/* --- Subtitle --- */}
        <Typography
          sx={{
            ...typography.h3B1,
            fontWeight: 400,
            mb: 4,
            color: "text.secondary",
            ml: 8,
          }}
        >
          {content.CON150011}
          {isAdmin && <EditIconButton id="CON150011" />}
        </Typography>

        {/* --- FAQ Accordions --- */}
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
                >
                  {item.question}
                  {isAdmin && (
                    <EditIconButton
                      id={`CON15000${index * 2 + 1}`}
                    />
                  )}
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
                  {isAdmin && (
                    <EditIconButton
                      id={`CON15000${index * 2 + 2}`}
                    />
                  )}
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
