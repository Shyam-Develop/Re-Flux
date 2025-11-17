import { React, useState, useEffect, Fragment } from "react";
import {
  Box,
  Typography,
  Button,
  Link,
  Card,
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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

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
import ROIimage from "../../../assets/ROICalculator.jpg";
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
import Footer from "app/components/Card/Footer";
import { typography } from "app/utils/constant";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const ViewCaseStudy = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [hoveredIndex, setHoveredIndex] = useState(0);

  const [BrowseDialogopen, setBrowseDialogOpen] = useState(false);

  const handleClickOpen = () => {
    setBrowseDialogOpen(true);
  };

  const handledialogClose = () => {
    setBrowseDialogOpen(false);
  };

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

  const timelineData = [
    {
      day: "Day 1",
      tasks: [{ label: "Visual, tests, approval", color: "#fdb714" }],
    },
    {
      day: "Day 2",
      tasks: [
        { label: "Rewind + mechanical + terminals/seals", color: "#d62828" },
      ],
    },
    {
      day: "Day 3",
      tasks: [
        { label: "Load-test & documentation", color: "#0077c8" },
        { label: "Dispatch, rework on-site checks", color: "#d62828" },
      ],
    },
  ];

  //const [selectedImage, setSelectedImage] = useState(images[0]);

  const [expanded, setExpanded] = useState(null);

  const handleChange = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const [open, setOpen] = useState(false);
  // selected image state
  const [selectedImage, setSelectedImage] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  // ✅ Fetch content from API
  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}?contentId=viewcasestudy`)
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
    navigate(
      `/CmsEditor?contentId=viewcasestudy&contentTextID=${contentTextID}&contentType=${type}`
    );
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

  // ROI IMAGES (ONLY AFTER content loaded, inside render stage)
  const mainImage = content
    ? `https://cmsreflux.bexatm.com${content.CON230030}`
    : null;

  const thumbnailImages = [];

  for (let i = 0; i < 50; i++) {
    const key = `CON230031_${i}`;
    if (!content?.[key]) break;

    thumbnailImages.push({
      id: key, // <- this becomes your CMS contentTextID
      src: `https://cmsreflux.bexatm.com${content[key]}`,
    });
  }

  // set selectedImage one time
  useEffect(() => {
    if (content && selectedImage === null) {
      setSelectedImage(mainImage);
    }
  }, [content, mainImage, selectedImage]);
  if (!content) return null;

  const items = [
    {
      img: `https://cmsreflux.bexatm.com${content.CON210021}`,
      title: content.CON210022,
      subtitle: content.CON210023,
      imgId: "CON210021",
      titleId: "CON210022",
      subtitleId: "CON210023",
    },
    {
      img: `https://cmsreflux.bexatm.com${content.CON210024}`,
      title: content.CON210025,
      imgId: "CON210024",
      titleId: "CON210025",
    },
    {
      img: `https://cmsreflux.bexatm.com${content.CON210026}`,
      title: content.CON210027,
      imgId: "CON210026",
      titleId: "CON210027",
    },
    {
      img: `https://cmsreflux.bexatm.com${content.CON210028}`,
      title: content.CON210029,
      imgId: "CON210028",
      titleId: "CON210029",
    },
  ];

  const features = [
    {
      title: content.CON210030,
      desc: content.CON210031,
      titleId: "CON210030",
      descId: "CON210031",
    },
    {
      title: content.CON210032,
      desc: content.CON210033,
      titleId: "CON210032",
      descId: "CON210033",
    },
    {
      title: content.CON210034,
      desc: content.CON210035,
      titleId: "CON210034",
      descId: "CON210035",
    },
    {
      title: content.CON210036,
      desc: content.CON210037,
      titleId: "CON210036",
      descId: "CON210037",
    },
  ];
  const heading = content.CON230020;
  const tableHeadings = content.CON210052;
  const rows = [];
  for (let i = 0; i < 50; i++) {
    const test = content[`CON210051_${i}_test`];
    if (!test) break;

    rows.push({
      test,
      before: content[`CON210051_${i}_before`] || "",
      after: content[`CON210051_${i}_after`] || "",
      target: content[`CON210051_${i}_target`] || "",
    });
  }

  return (
    <Box
      sx={{
        width: "100%",
        // display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "white",
        textAlign: "center",
        p: 4,
      }}
    >
      {/* Heading */}
      <Typography
        // variant="h4"
        sx={{
          fontFamily: "Space Grotesk, Regular",
          fontWeight: 700,
          fontSize: "56px",
          lineHeight: 1.1, // equivalent to 110%
          letterSpacing: "-0.31px", // Figma's -0.56% of 56px
          textAlign: "center", // matches Figma's horizontal alignment
          display: "flex",
          alignItems: "center", // vertical alignment middle
          justifyContent: "center",
          // ml: 1
        }}
      >
        {content.CON210001}
        {isAdmin && <EditIconButton id="CON210001" />}
      </Typography>

      {/* Image */}
      {/* Image */}
      <Box
        sx={{
          position: "relative",
          mt: 2,
          mb: 2,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={`https://cmsreflux.bexatm.com${content.CON210002}`}
          alt="Circular Lifting Magnet"
          sx={{
            width: { xs: "100%", sm: "100%", md: "90%", lg: "1200px" },
            height: { xs: "200px", sm: "300px", md: "400px" },
            objectFit: "cover",
            borderRadius: 1,
            boxShadow: 3,
            display: "block",
          }}
        />

        {/* 🔥 EDIT ICON EXACTLY IN YOUR REQUIRED STYLE */}
        {isAdmin && (
          <IconButton
            onClick={() => handleEdit("CON210002", "I")}
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              borderRadius: "50%",
              bgcolor: "white",
              color: "#1C2D4B",
              border: "1px solid #ccc",
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "#e0e0e0",
                color: "#070808ff",
                //borderColor: "#214870",
              },
            }}
          >
            <EditIcon type="I" />
          </IconButton>
        )}
      </Box>

      {/* Industry/Asset/Service/Outcome/Docs */}
      <Box
        sx={{
          alignItems: "flex-start",
          ml: 10,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            fontWeight: 500,
            ...typography.h5,
            lineHeight: "130%",
            color: "#111827",
            textAlign: "left",
            mb: 4,
            mr: { xs: 0, md: 30 },
          }}
        >
          {content.CON210003}
          {isAdmin && <EditIconButton id="CON210003" />}
          <br />

          {content.CON210004}
          {isAdmin && <EditIconButton id="CON210004" />}
          <br />

          {content.CON210005}
          {isAdmin && <EditIconButton id="CON210005" />}
          <br />

          {content.CON210006}
          {isAdmin && <EditIconButton id="CON210006" />}
          <br />

          {content.CON210007}
          {isAdmin && <EditIconButton id="CON210007" />}
        </Typography>
      </Box>

      {/* Challenge Box */}

      <Box
        sx={{
          position: "relative",
          border: "2px solid #50b3f5",
          p: 4,
          textAlign: "left",
          maxWidth: "970px",
          mx: "auto",
          mt: 4,

          // Corner Squares
          "&::before, &::after, & > .corner::before, & > .corner::after": {
            content: '""',
            position: "absolute",
            width: "15px",
            height: "15px",
            border: "2px solid #50b3f5",
            backgroundColor: "white",
          },

          // Top-left
          "&::before": {
            top: "-6px",
            left: "-6px",
          },
          // Top-right
          "&::after": {
            top: "-6px",
            right: "-6px",
          },
        }}
      >
        {/* Extra wrapper to handle bottom corners */}
        <Box
          className="corner"
          sx={{
            "&::before": {
              bottom: "-6px",
              left: "-6px",
              content: '""',
              position: "absolute",
              width: "12px",
              height: "12px",
              border: "2px solid #50b3f5",
            },
            "&::after": {
              bottom: "-6px",
              right: "-6px",
              content: '""',
              position: "absolute",
              width: "12px",
              height: "12px",
              border: "2px solid #50b3f5",
            },
          }}
        />

        {/* Title */}
        <Typography
          sx={{
            fontFamily: "Space Grotesk, Regular",
            fontWeight: 600,
            fontSize: "48px",
            mb: 2,
            textAlign: "center",
          }}
        >
          {content.CON210010}
          {isAdmin && <EditIconButton id="CON210010" />}
        </Typography>

        {/* Body text */}
        <Typography
          sx={{
            ...typography.h5,
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "130%",
            color: "#111827",
            mb: 2,
          }}
        >
          {content.CON210011}
          {isAdmin && <EditIconButton id="CON210011" />}
        </Typography>

        {/* Bullet points */}
        <ul
          style={{
            margin: 0,
            paddingLeft: "20px",
            fontFamily: "Space Grotesk, Regular",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "130%",
            color: "#111827",
          }}
        >
          <li>
            {content.CON210012}
            {isAdmin && <EditIconButton id="CON210012" />}
          </li>
          <li>
            {content.CON210013}
            {isAdmin && <EditIconButton id="CON210013" />}
          </li>
          <li>
            {content.CON210014}
            {isAdmin && <EditIconButton id="CON210014" />}
          </li>
        </ul>
      </Box>

      {/* Our Approach Section */}
      <Box
        sx={{
          py: { xs: 4, md: 6 },
          width: "100%",
          backgroundColor: "white",
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            ...typography.displayM,
            fontWeight: 600,
            textAlign: "center",
            fontSize: { xs: "24px", sm: "28px", md: "48px" },
            mb: { xs: 4, md: 5 },
          }}
        >
          {content.CON210020}
          {isAdmin && <EditIconButton id="CON210020" />}
        </Typography>

        {/* Steps */}
        <Grid container spacing={{ xs: 4, md: 3 }} justifyContent="center">
          {items.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Circle background with icon */}
              <Box
                sx={{
                  width: { xs: 120, sm: 160, md: 200 },
                  height: { xs: 120, sm: 160, md: 200 },
                  borderRadius: "50%",
                  backgroundColor: "#F5FAFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 1,
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{
                    width: { xs: 40, sm: 50, md: 60 },
                    height: { xs: 40, sm: 50, md: 60 },
                  }}
                />
                {/* IMAGE EDIT ICON – OUTSIDE THE CIRCLE AT RIGHT SIDE */}
                {isAdmin && (
                  <IconButton
                    onClick={() => handleEdit(item.imgId, "I")}
                    sx={{
                      position: "absolute",
                      right: "-25px", // places edit icon OUTSIDE the circle
                      top: "50%",
                      transform: "translateY(-50%)",
                      backgroundColor: "#f0f0f0",
                      color: "#1C2D4B",
                      border: "1px solid #ccc",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        backgroundColor: "#e0e0e0",
                        color: "#070808ff",
                        //borderColor: "#214870",
                      },
                    }}
                  >
                    <EditIcon type="I" sx={{ fontSize: 16 }} />
                  </IconButton>
                )}
              </Box>

              {/* Title */}
              <Typography
                sx={{
                  fontWeight: 600,
                  fontFamily: "Space Grotesk, Regular",
                  fontSize: { xs: "20px", sm: "24px", md: "32px" },
                  color: "#1c2434",
                }}
              >
                {item.title}
                {isAdmin && (
                  <IconButton
                    size="small"
                    onClick={() => handleEdit(item.titleId, "T")}
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
                    <EditIcon />
                  </IconButton>
                )}
              </Typography>

              {/* Optional subtitle */}
              {item.subtitle && (
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontFamily: "Space Grotesk, Regular",
                    fontSize: { xs: "20px", sm: "24px", md: "32px" },
                    color: "#1c2434",
                    mt: 0.5,
                  }}
                >
                  {item.subtitle}
                  {isAdmin && (
                    <IconButton
                      size="small"
                      onClick={() => handleEdit(item.subtitleId, "T")}
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
                      <EditIcon />
                    </IconButton>
                  )}
                </Typography>
              )}
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ px: isMobile ? 2 : 5, py: isMobile ? 4 : 8 }}>
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
            {/* Vertical Line (Desktop only) */}
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
                  onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                >
                  {/* Highlighted vertical line (Desktop only) */}
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
                          fontSize: isMobile ? 20 : 28,
                          color: isActive ? "#1976d2" : "#1c2434",
                          mr: 1,
                          transition: "0.3s",
                        }}
                      />
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: isActive ? "#1976d2" : "#1c2434",
                          fontFamily: "Space Grotesk, Regular",
                          fontSize: isMobile ? "20px" : "28px",
                          transition: "0.3s",
                        }}
                      >
                        {item.title}
                        {isAdmin && (
                          <IconButton
                            size="small"
                            onClick={() => handleEdit(item.titleId, "T")}
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
                        )}
                      </Typography>
                    </Box>

                    {/* Description or Bullet List */}
                    {item.title === content.CON210034 ? (
                      <Box
                        component="ul"
                        sx={{
                          ml: 5,
                          opacity: isActive ? 1 : 0,
                          maxHeight: isActive ? 200 : 0,
                          overflow: "hidden",
                          transition: "0.5s ease",
                          color: "#111827",
                          fontFamily: "Space Grotesk, Regular",
                          fontSize: isMobile ? 16 : 20,
                          fontWeight: 500,
                          lineHeight: "130%",
                          paddingLeft: "20px",
                        }}
                      >
                        {item.desc.split("\n").map((line, i) => (
                          <li key={i}>{line.trim()}</li>
                        ))}
                        {/* EDIT DESCRIPTION ICON */}
                        {isAdmin && (
                          <IconButton
                            size="small"
                            onClick={() => handleEdit(item.descId, "T")}
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
                        )}
                      </Box>
                    ) : (
                      <Typography
                        sx={{
                          fontFamily: "Space Grotesk, Regular",
                          fontSize: isMobile ? 16 : 20,
                          fontWeight: 500,
                          lineHeight: "130%",
                          color: "#111827",
                          transition: "0.5s ease",
                          opacity: isActive ? 1 : 0,
                          maxHeight: isActive ? 200 : 0,
                          overflow: "hidden",
                          ml: 4,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {item.desc}
                        {/* EDIT DESCRIPTION ICON */}
                        {isAdmin && (
                          <IconButton
                            size="small"
                            onClick={() => handleEdit(item.descId, "T")}
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
                        )}
                      </Typography>
                    )}
                  </Box>
                </Box>
              );
            })}
          </Box>

          {/* Right - Static Image */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mt: isMobile ? 2 : 0,
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src={`https://cmsreflux.bexatm.com${content.CON210038}`} // Static image, no change on hover
                alt="ElectroMagnet Repair"
                sx={{
                  width: "100%",
                  maxWidth: isMobile ? "100%" : 600,
                  objectFit: "cover",
                  borderRadius: 3,
                  transition: "0.5s",
                }}
              />
              {isAdmin && (
                <IconButton
                  onClick={() => handleEdit("CON210038", "I")}
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    borderRadius: "50%",
                  }}
                >
                  <EditIconButton type="I" />
                </IconButton>
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Tab Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
          px: 2,
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: isMobile ? "26px" : "32px",
            fontWeight: 700,
            textAlign: "center",
            color: "#1C2D4B",
            mb: 4,
          }}
        >
          {content.CON210050}
          {isAdmin && <EditIconButton id="CON210050" />}
        </Typography>

        {/* TABLE */}
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            border: "1px solid #D8DCE2",
            borderRadius: "6px",
            overflow: "hidden",
            width: isMobile ? "100%" : "890px",
          }}
        >
          <Table
            sx={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            {/* Header */}
            <TableHead>
              <TableRow sx={{ backgroundColor: "#FFFFFF" }}>
                {tableHeadings?.map((heading, i) => (
                  <TableCell
                    key={i}
                    sx={{
                      ...typography.bodySmall,
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "15px",
                      fontWeight: 600,
                      height: "124px",
                      color: "#282D46",
                      borderRight: "1px solid #D8DCE2",
                      py: 2,
                      px: 2.5,
                      position: "relative",
                      "&:last-child": { borderRight: "none" },
                    }}
                  >
                    {heading}

                    {isAdmin && (
                      <IconButton
                        size="small"
                        onClick={() => handleEdit(`CON210052[${i}]`, "A")}
                        sx={{
                          position: "absolute",
                          top: 8,
                          right: 8,
                          bgcolor: "white",
                          color: "black",
                          "&:hover": {
                            bgcolor: "primary.main",
                            color: "white",
                          },
                        }}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* Body */}
            <TableBody>
              {rows?.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#F3F5F7" : "#FFFFFF",
                    borderBottom: "1px solid #D8DCE2",
                    height: "124px",
                  }}
                >
                  {/* TEST Column */}
                  <TableCell
                    sx={{
                      position: "relative",
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#282D46",
                      borderRight: "1px solid #D8DCE2",
                      py: 2.5,
                      px: 2.5,
                    }}
                  >
                    {row.test}

                    {isAdmin && (
                      <IconButton
                        size="small"
                        onClick={() =>
                          handleEdit(`CON210051_${index}_test`, "S")
                        }
                        sx={{
                          position: "absolute",
                          top: 8,
                          right: 8,
                          bgcolor: "white",
                          color: "black",
                          "&:hover": {
                            bgcolor: "primary.main",
                            color: "white",
                          },
                        }}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    )}
                  </TableCell>

                  {/* BEFORE Column */}
                  <TableCell
                    sx={{
                      position: "relative",
                      textAlign: "center",
                      color: "#24315A",
                      fontSize: "15px",
                      borderRight: "1px solid #D8DCE2",
                    }}
                  >
                    {row.before}
                    {isAdmin && (
                      <IconButton
                        size="small"
                        onClick={() =>
                          handleEdit(`CON210051_${index}_before`, "S")
                        }
                        sx={{
                          position: "absolute",
                          top: 8,
                          right: 8,
                          bgcolor: "white",
                          color: "black",
                          "&:hover": {
                            bgcolor: "primary.main",
                            color: "white",
                          },
                        }}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    )}
                  </TableCell>

                  {/* AFTER Column */}
                  <TableCell
                    sx={{
                      position: "relative",
                      textAlign: "center",
                      color: "#24315A",
                      fontSize: "15px",
                      borderRight: "1px solid #D8DCE2",
                    }}
                  >
                    {row.after}
                    {isAdmin && (
                      <IconButton
                        size="small"
                        onClick={() =>
                          handleEdit(`CON210051_${index}_after`, "S")
                        }
                        sx={{
                          position: "absolute",
                          top: 8,
                          right: 8,
                          bgcolor: "white",
                          color: "black",
                          "&:hover": {
                            bgcolor: "primary.main",
                            color: "white",
                          },
                        }}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    )}
                  </TableCell>

                  {/* TARGET Column */}
                  <TableCell
                    sx={{
                      position: "relative",
                      textAlign: "center",
                      color: "#24315A",
                      fontSize: "15px",
                    }}
                  >
                    {row.target}
                    {isAdmin && (
                      <IconButton
                        size="small"
                        onClick={() =>
                          handleEdit(`CON210051_${index}_target`, "S")
                        }
                        sx={{
                          position: "absolute",
                          top: 8,
                          right: 8,
                          bgcolor: "white",
                          color: "black",
                          "&:hover": {
                            bgcolor: "primary.main",
                            color: "white",
                          },
                        }}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Timeline Section */}

      <Box sx={{ mt: 6, px: 8 }}>
        {/* ---- Title ---- */}
        <Typography
          variant="h6"
          sx={{
            ...typography.displayM,
            fontWeight: 600,
            fontSize: "48px",
            color: "#000",
            mb: 6,
            textAlign: "left",
          }}
        >
          <Box
            component="span"
            sx={{
              borderBottom: "3px solid #0077c8",
              pb: 0.3,
              display: "inline-block",
            }}
          >
            {content.CON220000}
            {isAdmin && <EditIconButton id="CON220000" />}
          </Box>
        </Typography>

        {/* ---- Timeline Container ---- */}
        <Box
          sx={{
            position: "relative",
            height: 380,
            width: "100%",
            marginLeft: "10%",
          }}
        >
          {/* === Four Vertical Dashed Lines === */}
          {["12%", "32%", "54%", "75%"].map((left, index) => (
            <Box
              key={index}
              sx={{
                position: "absolute",
                left,
                top: 40,
                bottom: 0,
                borderLeft: "2px dashed #bfbfbf",
                transform: "translateX(-50%)",
              }}
            />
          ))}

          {/* === Day Labels === */}
          {content.CON220002?.map((day, index) => (
            <Typography
              key={index}
              sx={{
                position: "absolute",
                left: content.CON220003[index],
                top: 0,
                transform: "translateX(-50%)",
                fontWeight: 700,
                color: "#000",
                fontSize: 20,
              }}
            >
              {day}

              {isAdmin && (
                <EditIconButton id={`CON220002[${index}]`} type="A" />
              )}
            </Typography>
          ))}

          {/* === Task Buttons === */}
          <Box
            sx={{
              position: "absolute",
              top: 100,
              left: "22%",
              transform: "translateX(-50%)",
              backgroundColor: "#e3a617",
              color: "#fff",
              pl: "40px",
              pr: "55px",
              pt: "15px",
              pb: "15px",
              width: "20%",
              borderRadius: "15px",
              fontSize: 14,
              fontWeight: 600,
              whiteSpace: "nowrap",
              textAlign: "center",
            }}
          >
            {content.CON220004}
            {isAdmin && <EditIconButton id="CON220004" />}
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: 180,
              left: "43%",
              transform: "translateX(-50%)",
              backgroundColor: "#9f1719",
              color: "#fff",
              paddingLeft: "15px",
              paddingRight: "15px",
              paddingTop: "15px",
              paddingBottom: "15px",
              borderRadius: "15px",
              fontSize: 13,
              width: "20%",
              fontWeight: 600,
              textAlign: "center",
              width: "max-content",
              whiteSpace: "nowrap",
            }}
          >
            {content.CON220005}
            {isAdmin && <EditIconButton id="CON220005" />}
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: 250,
              left: "64%",
              transform: "translateX(-50%)",
              backgroundColor: "#0273d9",
              color: "#fff",
              pl: "40px",
              pr: "45px",
              pt: "15px",
              pb: "15px",
              borderRadius: "15px",
              fontSize: 13,
              fontWeight: 600,
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            {content.CON220006}
            {isAdmin && <EditIconButton id="CON220006" />}
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: 320,
              left: "65%",
              transform: "translateX(-50%)",
              backgroundColor: "#c1147a",
              color: "#fff",
              pl: "45px",
              pr: "30px",
              pt: "15px",
              pb: "15px",
              borderRadius: "15px",
              fontSize: 13,
              fontWeight: 600,
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            {content.CON220007}
            {isAdmin && <EditIconButton id="CON220007" />}
          </Box>
        </Box>
      </Box>

      <Box>
        <Paper
          elevation={0}
          sx={{
            backgroundColor: "#f9fafb",
            borderRadius: 0,
            py: 6,
            px: 8,
            mt: 5,
          }}
        >
          {/* Title */}
          <Typography
            variant="h6"
            align="center"
            sx={{
              fontFamily: "Space Grotesk, Regular",
              fontWeight: 600,
              fontSize: "48px",
              mb: 4,
              color: "#24315a",
            }}
          >
            {content.CON230000}
            {isAdmin && <EditIconButton id="CON230000" />}
          </Typography>

          {/* Content Row */}
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={4}
            sx={{ maxWidth: 1000, mx: "auto" }}
          >
            {/* Avatar */}
            <Grid item xs={12} md={1.5}>
              <Avatar
                src="https://randomuser.me/api/portraits/men/85.jpg"
                alt="Client"
                sx={{ width: 100, height: 100, mx: { xs: "auto", md: 0 } }}
              />
            </Grid>

            {/* Text */}
            <Grid item xs={12} md={10.5}>
              <Typography
                variant="body1"
                sx={{
                  color: "#3c506d",
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "130%",
                  textAlign: "left",
                  mb: 1,
                }}
              >
                {content.CON230002}
                {isAdmin && <EditIconButton id="CON230002" />}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 500,
                  color: "#555",
                  mt: 1,
                  fontSize: "20px",
                  fontFamily: "Space Grotesk Regular",
                }}
              >
                {content.CON230003}
                {isAdmin && <EditIconButton id="CON230003" />}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          // bgcolor: "#fff",
          // px: { xs: 2, md: 4 },
          // py: { xs: 4, md: 6 },
          maxWidth: 900,
          mx: "auto",
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Space Grotesk, Regular",
            fontWeight: 600,
            fontSize: "48px",
            mb: 4,
            color: "#24315a",
          }}
        >
          {content.CON230010}
          {isAdmin && <EditIconButton id="CON230010" />}
        </Typography>

        {/* ROI details */}
        <Typography
          sx={{
            color: "#3c506d",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "130%",
            textAlign: "left",
            mb: 1,
            paddingLeft: "4%",
          }}
        >
          {content.CON230011?.map((item, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 1,
              }}
            >
              <Typography
                sx={{
                  color: "#3c506d",
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "130%",
                }}
              >
                {item}
              </Typography>

              {isAdmin && <EditIconButton id={`CON230011[${i}]`} type="A" />}
            </Box>
          ))}
        </Typography>

        {/* Alternative header */}
        <Typography
          sx={{
            ...typography.h2,
            textAlign: "left",
            fontWeight: 600,
            fontSize: "32px",
            mt: 4,
            mb: 1,
            color: "#3c506d",
            paddingLeft: "4%",
          }}
        >
          {content.CON230012}
          {isAdmin && <EditIconButton id="CON230012" />}
        </Typography>
        <Typography
          sx={{
            ...typography.h5,
            textAlign: "left",
            color: "#3c506d",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "130%",
            textAlign: "left",
            mb: 1,
            paddingLeft: "4%",
          }}
        >
          {content.CON230013}
          {isAdmin && <EditIconButton id="CON230013" />}
        </Typography>

        {/* Estimated savings */}
        <Typography
          sx={{
            ...typography.h2,
            textAlign: "left",
            fontWeight: 600,
            fontSize: "32px",
            //    mt: 4,
            mb: 1,
            color: "#3c506d",
            paddingLeft: "4%",
          }}
        >
          {content.CON230014}
          {isAdmin && <EditIconButton id="CON230014" />}
        </Typography>

        {/* Link CTA */}
        <Link
          href="#"
          underline="hover"
          sx={{
            color: "#1d4ed8",
            fontWeight: 600,
            fontSize: "18px",
            fontFamily: "Fira Sans Semibold",
            textDecoration: "underline",
          }}
        >
          {content.CON230015}
          {isAdmin && <EditIconButton id="CON230015" />}
        </Link>
      </Box>

      {/* Heading */}
      <Typography
        sx={{
          fontFamily: "Space Grotesk, Regular",
          fontWeight: 700,
          fontSize: isMobile ? "28px" : "56px",
          lineHeight: 1.1,
          letterSpacing: "-0.31px",
          textAlign: isMobile ? "center" : "left",
          display: "flex",
          alignItems: "center",
          justifyContent: isMobile ? "center" : "flex-start",
          mt: 5,
          mr: isMobile ? 0 : 40,
          px: isMobile ? 2 : 0,
        }}
      >
        {heading}

        {isAdmin && <EditIconButton id="CON230020" type="T" sx={{ ml: 2 }} />}
      </Typography>

      {/* Main Image */}
      <Box
        sx={{ position: "relative", display: "inline-block", width: "100%" }}
      >
        <Box
          component="img"
          src={selectedImage}
          alt="Circular Lifting Magnet"
          sx={{
            width: "100%",
            height: isMobile ? "auto" : "500px",
            maxHeight: "500px",
            objectFit: "cover",
            mt: 2,
            borderRadius: 1,
            boxShadow: 3,
            mb: 2,
            px: isMobile ? 2 : 0,
          }}
        />
        {/* EDIT MAIN IMAGE ICON */}
        <Box
          sx={{
            position: "absolute",
            top: 9,
            right: 8,
            borderRadius: "50%",
          }}
        >
          {isAdmin && (
            <EditIconButton
              id="CON230030"
              type="I"
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                zIndex: 10,
                zIndex: 20,
                borderRadius: "50%",
              }}
            />
          )}
        </Box>
      </Box>
      {/* Thumbnails */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: isMobile ? "center" : "flex-start",
          flexWrap: "wrap",
          px: isMobile ? 2 : 0,
          mb: 4,
        }}
      >
        {thumbnailImages.map((img, index) => (
          <Box key={img.id} sx={{ position: "relative" }}>
            <Box
              component="img"
              src={img.src}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setSelectedImage(img.src)}
              sx={{
                width: isMobile ? "100px" : "148px",
                height: isMobile ? "80px" : "124px",
                objectFit: "cover",
                borderRadius: 1,
                cursor: "pointer",
                border:
                  selectedImage === img.src
                    ? "2px solid #1976d2"
                    : "2px solid transparent",
                transition: "border 0.3s",
                "&:hover": { border: "2px solid #1976d2" },
              }}
            />

            {isAdmin && (
              <EditIconButton
                id={img.id} // <-- example: CON230031_0, CON230031_1
                type="I"
                sx={{ position: "absolute", top: 6, right: 6 }}
              />
            )}
          </Box>
        ))}
      </Box>

      {/* Why It worked */}
      <Box
        sx={{
          p: isMobile ? 2 : 4,
          ml: isMobile ? 0 : 2,
        }}
      >
        {/* Section Heading */}
        <Typography
          sx={{
            textAlign: isMobile ? "center" : "left",
            color: "#1c2434",
            fontWeight: 600,
            fontFamily: "Space Grotesk, Regular",
            fontSize: isMobile ? "32px" : "48px",
            mb: isMobile ? 2 : 4,
          }}
        >
          {content.CON2400002}
          {isAdmin && <EditIconButton id="CON2400002" type="T" />}
        </Typography>

        <Whyitworkcard />

        {/* Image + Right Text */}
        <Box sx={{ mt: 5, px: isMobile ? 0 : "10%" }}>
          <Grid
            container
            spacing={isMobile ? 2 : 4}
            alignItems="center"
            direction={isMobile ? "column" : "row"}
          >
            {/* Left Image Block */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  height: isMobile ? 300 : 400,
                  borderRadius: 1,
                  overflow: "hidden",
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={`https://cmsreflux.bexatm.com${content.CON2400008}`}
                  alt="Case Study"
                  sx={{
                    width: "100%",
                    height: isMobile ? "100%" : "450px",
                    objectFit: "cover",
                  }}
                />
                {isAdmin && (
                  <IconButton
                    size="small"
                    onClick={() => handleEdit("CON2400008", "I")}
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      zIndex: 20,
                      backgroundColor: "#f0f0f0",
                      color: "#1C2D4B",
                      border: "1px solid #ccc",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        backgroundColor: "#e0e0e0",
                        color: "#070808ff",
                        //borderColor: "#214870",
                      },
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                )}

                {/* Gradient Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(225deg, rgba(11,45,85,0.9) 10%, transparent 100%)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    p: 2,
                    color: "#fff",
                    pointerEvents: "none",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Space Grotesk, Regular",
                      fontSize: isMobile ? "16px" : "24px",
                      fontWeight: 400,
                    }}
                  >
                    {content.CON2400003}
                    {isAdmin && <EditIconButton id="CON2400003" type="T" />}
                  </Typography>

                  {/* Corner triangle icon */}
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      backgroundColor: "#fff",
                      clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                      ml: 2,
                    }}
                  />
                </Box>
              </Box>
            </Grid>

            {/* Right Text Block */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  ml: isMobile ? 0 : 4,
                  mt: isMobile ? 3 : 0,
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Space Grotesk, Regular",
                    fontSize: isMobile ? "18px" : "24px",
                    fontWeight: 500,
                    color: "#111827",
                    mb: 2,
                  }}
                >
                  {content.CON2400004}
                  {isAdmin && <EditIconButton id="CON2400004" type="T" />}
                </Typography>

                <Typography
                  sx={{
                    color: "#047857",
                    fontWeight: 500,
                    fontSize: isMobile ? "16px" : "20px",
                    mb: 2,
                  }}
                >
                  {content.CON2400006}
                  {isAdmin && <EditIconButton id="CON2400006" type="T" />}
                </Typography>

                <Link
                  href="#"
                  underline="none"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    fontWeight: 600,
                    color: "#1d4ed8",
                    cursor: "pointer",
                    fontFamily: "Fira Sans, Semibold",
                    fontSize: isMobile ? "16px" : "18px",
                    mb: 2,
                    ml: isMobile ? 0 : 0,
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {content.CON2400005}
                  {isAdmin && <EditIconButton id="CON2400005" type="T" />}
                  <ArrowForwardIcon sx={{ fontSize: 18, ml: 0.5 }} />
                </Link>

                <br />

                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    ml: isMobile ? 0 : 0,
                    backgroundColor: "#8b4513",
                    borderRadius: "999px",
                    px: isMobile ? 6 : 20,
                    py: 1.1,
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#6b3b10",
                    },
                  }}
                >
                  {content.CON2400007}
                  {isAdmin && <EditIconButton id="CON2400007" type="T" />}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* //Footer Section */}

      <Box>
        <Footer />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "1px",
          px: { xs: 1, md: 7 },
          py: { xs: 4, md: 6 },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Left Content */}
        <Box sx={{ width: 1000, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "20px",
              color: "#111827",
              fontFamily: "Space Grotesk, Regular",
              mb: 1,
            }}
          >
            {content.CON2400009}
            {isAdmin && <EditIconButton id="CON2400009" type="T" />}
          </Typography>
          <Typography
            sx={{
              color: "#6b7280",
              mb: 2,
              fontWeight: 400,
              fontSize: "18px",
              fontFamily: "Fira Sans, Regular",
            }}
          >
            {content.CON2400010}
            {isAdmin && <EditIconButton id="CON2400010" type="T" />}
          </Typography>
          <Link
            href="#"
            underline="none"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              fontWeight: 600,
              color: "#1d4ed8",
              fontSize: "18px",
              fontFamily: "Fira Sans, Semibold",
              textDecoration: "underline",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {content.CON2400011}
            {isAdmin && <EditIconButton id="CON2400011" type="T" />}
            <ArrowForwardIcon sx={{ fontSize: 18, ml: 0.5 }} />
          </Link>
        </Box>

        {/* Right Button */}
        <Button
          variant="contained"
          sx={{
            fontFamily: "Space Grotesk, Regular",
            mt: { xs: 3, md: 0 },
            backgroundColor: "#a45514",
            borderRadius: "999px",
            width: "30%",
            //   px: 4,
            //   py: 1.5,
            fontWeight: 500,
            fontSize: "20px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#6b3b10",
            },
          }}
        >
          {content.CON2400012}
          {isAdmin && <EditIconButton id="CON2400012" type="T" />}
        </Button>
      </Box>
    </Box>
  );
};

export default ViewCaseStudy;
