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
  Stack
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
import EditIcon from "@mui/icons-material/Edit";
import TopbarWithMegaMenu from "app/components/appLayout/Layout1/Layout1Topbar";
import { DisplayL, displayL, H4 } from "app/components/Typography";



const username = localStorage.getItem("username");



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



  const [expanded, setExpanded] = useState(null);

  const handleChange = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [active, setActive] = useState("01");
  const activeItem = items.find((item) => item.id === active);

  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // ✅ Fetch content JSON
  useEffect(() => {
    fetch("https://skillglow.bexatm.com/ATM/ContentManageSysV1.php?contentId=Home")
      .then((res) => res.json())
      .then((data) => setContent(data))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  // ✅ Check admin role
  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  // ✅ Navigate to CMS editor
  const handleEdit = (contentTextID, type = "T") => {
     const currentScroll = window.scrollY;
   localStorage.setItem("scrollPos", currentScroll);
    navigate(`/CmsEditor?contentId=Home&contentTextID=${contentTextID}&contentType=${type}`);
  };

  // ✅ Admin edit icon button
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
          "&:hover": { backgroundColor: "#e0e0e0", color: "#070808ff" },
          verticalAlign: "middle",
        }}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    ) : null;

  if (!content) return null;


  const cards = [
    { title: content.HM1050, desc: content.HM1051, idT: "HM1050", idD: "HM1051" },
    { title: content.HM1052, desc: content.HM1053, idT: "HM1052", idD: "HM1053" },
    { title: content.HM1054, desc: content.HM1055, idT: "HM1054", idD: "HM1055" },
    { title: content.HM1056, desc: content.HM1057, idT: "HM1056", idD: "HM1057" },
    { title: content.HM1058, desc: content.HM1059, idT: "HM1058", idD: "HM1059" },
    { title: content.HM1060, desc: content.HM1061, idT: "HM1060", idD: "HM1061" },
  ];




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
      <Box sx={{ width: "100%", }}>
        {/* === DESKTOP VIEW === */}
        <Box
          sx={{
            display: { xs: "none", md: "block" }, // 👈 hide on mobile
            position: "relative",
            width: "100%",

          }}
        >
          <HomeVideoCard
            videoFile={videoFile}
            items={items}
            WhatsApp={WhatsApp}
          />
        </Box>


        <Box
          sx={{
            display: { xs: "flex", md: "none" }, // 👈 mobile only
            flexDirection: "column",
            gap: 2,
            px: 2,
            py: 3,
          }}
        >
          <Box
            sx={{
              position: "relative",
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: "100%",
                height: "75vh",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            >
              <source src={videoFile} type="video/mp4" />
            </video>

            {/* Overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.85))",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                p: 3,
              }}
            >
              {/* Dynamic heading */}
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {activeItem.head}
              </Typography>

              {/* Dynamic text */}
              <Typography
                variant="body2"
                sx={{ opacity: 0.85, lineHeight: 1.5, mb: 2 }}
              >
                {activeItem.text}
              </Typography>

              {/* Dynamic button */}
              <Button
                variant="contained"
                sx={{
                  bgcolor: "orange",
                  mb: 2,
                  "&:hover": { bgcolor: "#e69500" },
                }}
              >
                {activeItem.button}
              </Button>

              {/* Tabs for switching items */}
              <Stack
                direction="row"
                spacing={2}
                justifyContent="space-between"
                sx={{
                  bgcolor: "rgba(0,0,0,0.4)",
                  borderRadius: 2,
                  p: 1,
                }}
              >
                {items.map((item) => (
                  <Box
                    key={item.id}
                    onClick={() => setActive(item.id)}
                    sx={{
                      cursor: "pointer",
                      flex: 1,
                      textAlign: "center",
                      py: 1,
                      borderRadius: 2,
                      bgcolor:
                        active === item.id
                          ? "rgba(255,255,255,0.15)"
                          : "transparent",
                      transition: "0.3s",
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{ display: "block", opacity: 0.8 }}
                    >
                      {item.id}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: active === item.id ? "orange" : "white",
                        fontWeight: active === item.id ? 600 : 400,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>

      </Box>


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
          {content.HM1001}
          <EditIconButton id="HM1001" />
        </Button>

        <Typography
          sx={{
            ...theme.typography.displayL,
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
            textAlign: "left",
          }}
          gutterBottom
        >
          {content.HM1002}
          <EditIconButton id="HM1002" />
        </Typography>

        <Typography
          sx={{
            mb: 4,
            ...theme.typography.h4,
            color: "#6B768A",
            fontSize: '24px',
            textAlign: "left",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 400
          }}
        >
          {content.HM1003}
          <EditIconButton id="HM1003" />
        </Typography>

        <RepairsectionCard />
      </Box>


      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          mt: 6,
          flexWrap: "wrap", // mobile-friendly
        }}
      >
        {/* 🔸 Request Quote Button */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button
            onClick={handleClickOpen}
            variant="contained"
            sx={{
              fontFamily: "Inter-Medium",
              bgcolor: "#b3570d",
              borderRadius: "25px",
              px: 3,
              py: 1,
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "1.5",
              textTransform: "none",
              "&:hover": { bgcolor: "#944708" },
            }}
          >
            {content.HM1025}
          </Button>
          <EditIconButton id="HM1025" />
        </Box>

        {/* 🔹 WhatsApp an Engineer Link */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
          <WhatsAppIcon sx={{ color: "#25D366", fontSize: 26 }} />
          <Link
            href="#"
            underline="hover"
            sx={{
              color: "#0e8bf1ff",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              fontSize: "15px",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {content.HM1026}
            <ArrowRightAltIcon
              sx={{ fontSize: 20, ml: 0.3, mt: "2px", position: "relative", top: "2px" }}
            />
          </Link>
          <EditIconButton id="HM1026" />
        </Box>
      </Box>



      {/* Before and After Case Studies */}

      <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 4, md: 8 }, backgroundColor: "#fff" }}>
        {/* Title Section */}
        <Typography
          variant="h4"
          sx={{
            ...theme.typography.displayM,
            fontWeight: 600,
            fontSize: '48px',
            color: "#1c2434",
            mb: 1,
          }}
        >
          {content.HM1027}
          <EditIconButton id="HM1027" type="T" />
        </Typography>

        <Box sx={{ ml: 15, mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              ...theme.typography.h2,
              fontWeight: 600,
              fontSize: '32px',
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              color: "#1c2434",
              mb: 1,
            }}
          >
            {content.HM1028}
            <EditIconButton id="HM1028" type="T" />
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#99A0AE", mb: 4, ...theme.typography.bodyBase }}
          >
            {content.HM1029}
            <EditIconButton id="HM1029" type="T" />
          </Typography>
        </Box>

        {/* Images and Arrows */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: 3,
            mt: 5,
            flexWrap: "wrap",
          }}
        >
          {/* BEFORE IMAGE */}
          <Box
            sx={{
              position: "relative",
              width: isMobile ? "100%" : "600px", // was 500px → increased width
              mt: isMobile ? 2 : 8, // slightly reduced margin-top for balance
              overflow: "visible",
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                left: isMobile ? "-15px" : "-25px",
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "#1c2434",
                color: "#fff",
                zIndex: 2,
                "&:hover": { bgcolor: "#344050" },
              }}
            >
              <ArrowBackIcon />
            </IconButton>

            <Box
              component="img"
              src={`https://skillglow.bexatm.com${content.HM1030}`}
              alt="Before"
              sx={{
                width: "100%",
                height: { xs: 250, md: 380 }, // fixed larger height while keeping ratio
                borderRadius: "1px",
                objectFit: "cover",
                display: "block",
              }}
            />
            <Box sx={{ position: 'absolute', top: 8, right: 8, zIndex: 3 }}>
              <EditIconButton id="HM1030" type="I" />
            </Box>
          </Box>

          {/* AFTER IMAGE */}
          <Box
            sx={{
              position: "relative",
              width: isMobile ? "100%" : "600px", // was 500px
              mt: isMobile ? 2 : 0,
              overflow: "visible",
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                right: isMobile ? "-15px" : "-25px",
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "#1c2434",
                color: "#fff",
                zIndex: 2,
                "&:hover": { bgcolor: "#344050" },
              }}
            >
              <ArrowForwardIcon />
            </IconButton>

            <Box
              component="img"
              src={`https://skillglow.bexatm.com${content.HM1031}`}
              alt="After"
              sx={{
                width: "100%",
                height: { xs: 250, md: 380 }, // same height for visual balance
                borderRadius: "1px",
                objectFit: "cover",
                display: "block",
              }}
            />
            <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
              <EditIconButton id="HM1031" type="I" />
            </Box>
          </Box>

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
            {content.HM1032}
          </Button>
          <EditIconButton id="HM1032" />
        </Box>
      </Box>



      {/*ElectroMagnet Repair Section */}
      <Box sx={{ px: isMobile ? 2 : 5, py: isMobile ? 4 : 8 }}>
        {/* Heading */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: isMobile ? 0 : 5 }}>
          <Typography
            sx={{
              ...theme.typography.displayM,
              lineHeight: "1.2",
              color: "#1c2434",
              mb: 2,
              fontFamily: "Space Grotesk, Regular",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            {content.HM1033}
          </Typography>
          <EditIconButton id="HM1033" />
        </Box>

        {/* Subheading */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: isMobile ? 0 : 5 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              color: "#1c2434",
              mb: 4,
              fontFamily: "Inter, sans-serif",
              textAlign: isMobile ? "center" : "left",
              px: isMobile ? 2 : 0,
            }}
          >
            {content.HM1034}
          </Typography>
          <EditIconButton id="HM1034" />
        </Box>

        {/* Features Array */}
        {(() => {
          const features = [
            {
              title: content.HM1035,
              desc: content.HM1036,
              image: content.HM1037,
            },
            {
              title: content.HM1038,
              desc: content.HM1039,
              image: content.HM1040,
            },
            {
              title: content.HM1041,
              desc: content.HM1042,
              image: content.HM1043,
            },
            {
              title: content.HM1044,
              desc: content.HM1045,
              image: content.HM1046,
            },
          ];

          return (
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
              {/* Left Section */}
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
                              ...theme.typography.h3B1,
                              fontWeight: 400,
                              color: isActive ? "#1976d2" : "#1c2434",
                              transition: "0.3s",
                            }}
                          >
                            {item.title}
                          </Typography>
                          <EditIconButton id={`HM10${35 + index * 3}`} />
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <Typography
                            variant="body2"
                            sx={{
                              ...theme.typography.bodyBasemedium,
                              fontWeight: 400,
                              transition: "0.3s",
                              ml: 4,
                            }}
                          >
                            {item.desc}
                          </Typography>
                          <EditIconButton id={`HM10${36 + index * 3}`} />
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              {/* Right Section (Image Display) */}
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
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: isMobile ? "100%" : 600,
                  }}
                >
                  <Box
                    component="img"
                    src={`https://skillglow.bexatm.com${features[hoveredIndex]?.image}`}
                    alt="ElectroMagnet Repair"
                    sx={{
                      width: "100%",
                      height: { xs: 250, md: 450 },
                      objectFit: "cover",
                      borderRadius: 4,
                      display: "block",
                    }}
                  />

                  {/* ✅ Edit Icon on top-right of the image */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                    }}
                  >
                    <EditIconButton id={`HM10${37 + hoveredIndex * 3}`} type="I" />
                  </Box>
                </Box>
              </Box>



            </Box>
          );
        })()}
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
        <Grid container spacing={2} justifyContent="center" alignItems="flex-start">
          {/* Left Section */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
                mt: { xs: 0, md: 18 },
                ml: 23,
              }}
            >
              {/* Title with Edit */}
              <Typography
                sx={{
                  fontFamily: "SpaceGrotesk-Regular",
                  ...theme.typography.h2,
                  lineHeight: 1.2,
                  fontWeight: 600,
                  fontSize: "32px",
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {content.HM1047}
                <EditIconButton id="HM1047" type="T" />
              </Typography>

              {/* Description with Edit */}
              <Typography
                sx={{
                  color: "text.secondary",
                  mb: 3,
                  fontSize: "16px",
                  fontWeight: 400,
                  maxWidth: "320px",
                  ...theme.typography.bodySmall,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {content.HM1048}
                <EditIconButton id="HM1048" type="T" />
              </Typography>

              {/* Button with Edit */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
                  {content.HM1049}
                </Button>
                <EditIconButton id="HM1049" type="T" />
              </Box>

              {/* Arrow image */}
              <Box
                sx={{
                  ml: 30,
                  right: { xs: "5%", md: "20%" },
                  textAlign: "right",
                }}
              >
                <Box component="img" src={about} alt="Arrow" sx={{ width: 140 }} />
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
                  mt: 0,
                }}
              >
                {cards.slice(0, 3).map((card, i) => (
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
                        color: "#0B121E",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      {card.title}
                      <EditIconButton id={card.idT} type="T" />
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#555",
                        lineHeight: 1.5,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      {card.desc}
                      <EditIconButton id={card.idD} type="D" />
                    </Typography>
                    <Divider sx={{ mt: 2, border: '2px solid', borderColor: "#00A99D", width: "100%" }} />
                  </Box>
                ))}
              </Box>

              {/* Right Column of Cards (lowered) */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  mt: { xs: 0, md: 10 },
                }}
              >
                {cards.slice(3, 6).map((card, i) => (
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
                        color: "#0B121E",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      {card.title}
                      <EditIconButton id={card.idT} type="T" />
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#555",
                        lineHeight: 1.5,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      {card.desc}
                      <EditIconButton id={card.idD} type="D" />
                    </Typography>
                    <Divider sx={{ mt: 2, border: '2px solid', borderColor: "#00A99D", width: "100%" }} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>


      {/* Rent Services section */}

      <RentServicesCard />

      {/* View all magnets for rent Section*/}
      <Box>
        <Typography
          component={Link}
          to="/home/Rentals"
          sx={{
            ...theme.typography.h3R,
            // fontSize: "1.5rem", 
            color: "#1a4dab",
            fontWeight: 600,
            ml: 120,
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
                sx={{ width: "100%", borderRadius: 2, height: '584px' }}
              />
            </Grid>

            {/* Right Side - Text */}
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  ...theme.typography.displayM,
                  fontWeight: 600,
                  color: "#33425D",
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
                          bgcolor: "#1C2D4B",
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
                            ...theme.typography.h3medium,
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
            ...theme.typography.h3RB,
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
            ...theme.typography.h3B1,
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
            ...theme.typography.h3R,
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
                          ...theme.typography.h3B1,
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
                        ...theme.typography.bodyBase,
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
      <Box sx={{ px: 8, py: 6 }}>
        {/* Heading */}
        <Typography
          sx={{
            ...typography.displayL,
            fontSize: "56px",
            fontWeight: 700,
            color: "#1C2D4B",
            mb: 1,
          }}
        >
          Our brands
        </Typography>

        {/* Subheading */}
        <Typography
          sx={{
            ...typography.h4,
            fontWeight: 400,
            fontSize: "24px",
            color: "#99A0AE",
            mb: 6,
          }}
        >
          Together, we deliver complete magnetic solutions from design and manufacturing
          to repair and rental services.
        </Typography>

        {/* Two brand sections */}
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
              <Box
                component="img"
                src={Brand1}// update with your logo path
                alt="Electro Flux Logo"
                sx={{ marginLeft: '30%', width: '151px', height: '158px', mb: 2 }}
              />
              <Typography sx={{ ...typography.bodyBase, fontFamily: "'Fira Sans', sans-serif", fontWeight: 400, fontSize: '18px', color: "#000000", mb: 1 }}>
                Electro Flux Equipments Pvt. Ltd. is the OEM manufacturer of electro-lifting
                magnets, separators, and magnetic handling systems.
              </Typography>
              <Typography sx={{ ...typography.bodyBase, fontFamily: "'Fira Sans', sans-serif", fontWeight: 400, fontSize: '18px', color: "#000000", mb: 1 }}>
                With decades of experience, the brand powers industries with engineered
                lifting solutions built to global standards.
              </Typography>
              <Box display="flex" alignItems="center" sx={{ color: "#2F6FBA", fontWeight: 600 }}>
                <Link
                  href="#"
                  underline="none"
                >
                  Learn more
                </Link>
                <ArrowRightAltIcon sx={{ ml: 0.5, color: "#2F6FBA" }} />
              </Box>
            </Box>
          </Grid>

          {/* Right Brand */}
          <Grid item xs={12} md={6} sx={{ pl: { md: 4 } }}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: "center",
                  py: 7,
                  marginLeft: '30%'
                }}
              >
                {/* SVG Icon */}
                <RefluxSvg width={60} height={60} color="#00374C" />

                {/* Text Part */}
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

              <Typography sx={{ ...typography.bodyBase, fontFamily: "'Fira Sans', sans-serif", fontWeight: 400, fontSize: '18px', color: "#000000", mb: 1 }}>
                Re-flux is the service and lifecycle brand of Electro Flux—dedicated to repair,
                rental, and resale of industrial magnets across India.
              </Typography>
              <Typography sx={{ ...typography.bodyBase, fontFamily: "'Fira Sans', sans-serif", fontWeight: 400, fontSize: '18px', color: "#000000", mb: 1 }}>
                From certified repairs to refurbished magnets with warranty, Re-flux ensures
                reliability, safety, and uptime in every operation.
              </Typography>
              <Box display="flex" alignItems="center" sx={{ color: "#2F6FBA", fontWeight: 600 }}>
                <Link
                  href="#"
                  underline="none"

                >
                  Learn more
                </Link>
                <ArrowRightAltIcon sx={{ ml: 0.5, color: "#2F6FBA" }} />
              </Box>
            </Box>
          </Grid>
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
          ...theme.typography.displayL,
          color: '#1C2D4B'
        }}
        variant="h3" fontWeight="bold" gutterBottom>
        FAQs
      </Typography>
      <Typography
        variant="h5" sx={{
          mb: 4,
          color: '#1C2D4B',
          ...theme.typography.h4,
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
              <Typography sx={{ ...theme.typography.h4, color: '#0E1109' }}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ ...theme.typography.bodyBase, color: '#0E1109' }}>
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

            ...theme.typography.displayL,
            color: '#1C2D4B'
          }}
          variant="h3" fontWeight="bold" gutterBottom>
          Blogs
        </Typography>
        <Typography
          variant="h5" sx={{
            mb: 4,
            color: '#1C2D4B',
            ...theme.typography.h4,

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
                    ...theme.typography?.h5,
                    color: "#0E1109",
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                  }}
                  gutterBottom
                >
                  {blogData[0].title}
                </Typography>
                <Typography sx={{ ...theme.typography?.bodyBase, color: "#677489" }}>
                  {blogData[0].author} • {blogData[0].date}
                </Typography>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    ...theme.typography?.bodyBasemedium,
                    fontWeight: 500,
                    fontSize: '16px'
                  }}
                >
                  <Typography sx={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1F77D6" }}>
                    Discover More{" "}

                    <ArrowForwardIosIcon
                      sx={{ color: "#1F77D6", fontSize: "0.9rem" }}
                    />
                  </Typography>
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
                          ...theme.typography?.h4,
                          color: "#0E1109",
                          fontSize: { xs: "0.95rem", sm: "1.1rem" },
                          mb: 0.5,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          ...theme.typography?.bodyBase,
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

                          ...theme.typography?.bodyBasemedium,
                          mt: 0.5,
                          fontSize: { xs: "0.75rem", sm: "0.85rem" },
                          display: "inline-flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={{ color: "#1F77D6", }}>
                          Discover More{" "}

                          <ArrowForwardIosIcon
                            sx={{ ml: 0.5, color: "#1F77D6", fontSize: "0.8rem" }}
                          />
                        </Typography>
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
                // ...theme.typography.h6,
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
                // ...theme.typography.h6,
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
                // ...theme.typography.h6,
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
                // ...theme.typography.h6,
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
                // ...theme.typography.h6,
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
// const services = [
//   {
//     id: 1,
//     title: "Rectangular Lifting Magnet",
//     type: "Permanent Magnet",
//     liftCapacity: "3 Tons",
//     powerSupply: "None Required",
//     sizes: "500mm / 800mm / 1000mm",
//     price: 30,
//     img: rentserviceimg,
//   },
//   {
//     id: 2,
//     title: "Bespoke Lifting Magnet",
//     type: "Custom Coil",
//     liftCapacity: "Varied",
//     powerSupply: "Custom",
//     sizes: "Custom Sizes Available",
//     price: 100,
//     img: rentserviceimg,
//   },
//   {
//     id: 3,
//     title: "Mini Lifting Magnet",
//     type: "Coil",
//     liftCapacity: "1 Ton",
//     powerSupply: "220V",
//     sizes: "300mm / 500mm",
//     price: 20,
//     img: rentserviceimg,
//   },
//   {
//     id: 4,
//     title: "Rectangular Lifting Magnet",
//     type: "Permanent Magnet",
//     liftCapacity: "3 Tons",
//     powerSupply: "None Required",
//     sizes: "500mm / 800mm / 1000mm",
//     price: 30,
//     img: rentserviceimg,
//   },
//   {
//     id: 5,
//     title: "Bespoke Lifting Magnet",
//     type: "Custom Coil",
//     liftCapacity: "Varied",
//     powerSupply: "Custom",
//     sizes: "Custom Sizes Available",
//     price: 100,
//     img: rentserviceimg,
//   },
//   {
//     id: 6,
//     title: "Mini Lifting Magnet",
//     type: "Coil",
//     liftCapacity: "1 Ton",
//     powerSupply: "220V",
//     sizes: "300mm / 500mm",
//     price: 20,
//     img: rentserviceimg,
//   },
// ];

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