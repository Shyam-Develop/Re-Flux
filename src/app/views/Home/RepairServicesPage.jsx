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
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import videoFile from "../../../assets/MicrosoftTeams-video.mp4"; // ✅ put your video file here
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
import Repairservicemagnet from "../../../assets/repairservicemagnet.png";
import RepairServicesPageCard from "app/components/Card/RepairServicesPageCard";
import ProcessCards from "app/components/Card/HowweworkCard";
import ResalerefurbishedCard from "app/components/Card/Resalerefurbished";
import { typography } from "app/utils/constant";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useNavigate } from "react-router-dom";
import BrowseDialog from "app/components/DialogBox";
import Footer from "app/components/Card/Footer";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";

const RepairServicesPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();

  const UploadBox = ({ label }) => {
    return (
      <Box sx={{ my: 3 }}>
        <Typography variant="h6" gutterBottom>
          {label}
        </Typography>
        <label htmlFor="upload-input">
          <Box
            sx={{
              border: "2px dashed #ccc",
              borderRadius: 2,
              p: 4,
              textAlign: "center",
              cursor: "pointer",
              transition: "border-color 0.3s ease",
              "&:hover": { borderColor: "primary.main" },
            }}
          >
            <IconButton component="span" size="large">
              <UploadFileIcon sx={{ fontSize: 40, color: "text.secondary" }} />
            </IconButton>
            <Typography>
              <strong style={{ color: "#1976d2" }}>Choose</strong> file to
              upload
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
          style={{ display: "none" }}
        />
      </Box>
    );
  };

  const [hoveredIndex, setHoveredIndex] = useState(0);

  const [BrowseDialogopen, setBrowseDialogOpen] = useState(false);
  const [open, setOpen] = useState(false);
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

  // const [open, setOpen] = useState(false);
  const topImageStyle = {
    width: "100%",
    height: "329px",
    overflow: "hidden",
    position: "relative",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const overlayBoxStyle = {
    position: "absolute",
    bottom: "5px",
    left: "50px",
    backgroundColor: "#F1F2F4",
    width: "283px",
    height: "66px",
    padding: "14px 60px;",
    textAlign: "center",
  };

  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  // ✅ Fetch content from API
  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}?contentId=RepairServicesPage`)
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

  useEffect(() => {
    const targetId = localStorage.getItem("scrollToFaqId");
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.style.outline = "2px solid #1C2D4B";
          setTimeout(() => (el.style.outline = ""), 1500);
        }
        localStorage.removeItem("scrollToFaqId");
      }, 1000);
    }
  }, []);

  const handleDeleteFAQ = async (qId, aId) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this FAQ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes",
    });

    if (!confirm.isConfirmed) return;

    try {
      const res = await fetch(
        "https://cmsreflux.bexatm.com/API/data/DeleteContentV1.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contentId: "RepairServicesPage",
            keys: [qId, aId],
          }),
        }
      );

      const result = await res.json();

      if (result.success) {
        Swal.fire({
          title: "Deleted!",
          text: "FAQ has been removed.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          window.location.reload();
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to delete FAQ.",
          icon: "error",
        });
      }
    } catch (err) {
      console.error("Delete error:", err);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong.",
        icon: "error",
      });
    }
  };

  // ✅ Navigate to CMS editor
  const handleEdit = (contentTextID, type = "T") => {
    navigate(
      `/CmsEditor?contentId=RepairServicesPage&contentTextID=${contentTextID}&contentType=${type}`
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

  if (!content) return null;

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

  const faqData = [];

  Object.keys(content)
    .filter((k) => /^CON150\d{3}$/.test(k)) // only 150xxx
    .map((k) => parseInt(k.replace("CON", "")))
    .sort((a, b) => a - b)
    .filter((id) => id % 2 === 1) // only odd (question)
    .forEach((id) => {
      const qId = `CON${String(id).padStart(6, "0")}`;
      const aId = `CON${String(id + 1).padStart(6, "0")}`;

      if (content[qId] && content[aId]) {
        faqData.push({
          qId,
          aId,
          question: content[qId],
          answer: content[aId],
        });
      }
    });
  const baseNumber = 150000;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        // position: "relative",
        // overflow: "hidden",
      }}
    >
      {/* Background Image */}

      <Box sx={topImageStyle}>
        <img
          src={`https://cmsreflux.bexatm.com${content.CON190000}`}
          alt="Top Banner"
          style={imageStyle}
        />
        {isAdmin && (
          <IconButton
            size="small"
            onClick={() => handleEdit("CON190000", "I")}
            sx={{
              position: "absolute",
              bottom: 8,
              right: 8,
              bgcolor: "white",
              color: "black",
              "&:hover": { bgcolor: "primary.main", color: "white" },
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
        )}

        <Box sx={overlayBoxStyle}>
          <Typography
            sx={{ ...typography.h3, color: "#000000", fontWeight: 600 }}
          >
            {content.CON190001}
            {isAdmin && (
              <IconButton
                size="small"
                onClick={() => handleEdit("CON190001")}
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
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          padding: "60px 120px",
          backgroundColor: "#fff",
          maxWidth: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: 700,
            lineHeight: "44px",
            color: "#1A2438",
            fontFamily: "Space Grotesk, Regular",
            ...typography.h1,
          }}
        >
          {content.CON190002}
          {isAdmin && (
            <IconButton
              size="small"
              onClick={() => handleEdit("CON190002")}
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
        {/* Increase this width */}
        <Typography
          sx={{
            fontSize: "18px",
            lineHeight: "160%",
            color: "#99A0AE",
            maxWidth: "100%",
            fontFamily: "Fira Sans, Regular",
            ...typography.bodyBase,
          }}
        >
          {content.CON190003}
          {isAdmin && (
            <IconButton
              size="small"
              onClick={() => handleEdit("CON190003")}
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
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#2F6FBA",
            mt: 2,
            fontFamily: "Fira Sans",
            ...typography.bodyStrong,
          }}
        >
          <Link href="#" sx={{ textDecoration: "underline" }} underline="none">
            {content.CON190004}
            {isAdmin && (
              <IconButton
                size="small"
                onClick={() => handleEdit("CON190004")}
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
          </Link>
        </Typography>
      </Box>

      {/* Fault section */}

      <Box
        sx={{
          bgcolor: "white",
          p: 4,
          ml: 4,

          // ✅ Mobile adjustments
          "@media (max-width: 900px)": {
            p: 2,
            ml: 0,
            textAlign: "center",
          },
        }}
      >
        {/* Section Heading */}
        <Typography
          sx={{
            ...typography.displayM,
            color: "#0E1109",
            fontWeight: 600,
            fontFamily: "Space Grotesk, Regular",

            "@media (max-width: 900px)": {
              fontSize: "1.5rem",
            },
          }}
        >
          {content.CON190005}
          {isAdmin && (
            <IconButton
              size="small"
              onClick={() => handleEdit("CON190005")}
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

        {/* Sub Text */}
        <Typography
          sx={{
            ...typography.h4,
            mb: 2,
            color: "#677489",
            fontSize: "24px",

            "@media (max-width: 900px)": {
              fontSize: "16px",
              px: 1,
            },
          }}
        >
          {content.CON190006}
          {isAdmin && (
            <IconButton
              size="small"
              onClick={() => handleEdit("CON190006")}
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

        {/* Chips Section */}
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={2}
          sx={{
            mb: 3,
            width: "1280px",
            height: "100px",

            "@media (max-width: 900px)": {
              width: "100%",
              height: "auto",
              justifyContent: "center",
              gap: 1.5,
            },
          }}
        >
          {content.CON190007.map((item, index) => (
            <Box key={index} position="relative">
              <Chip
                label={item}
                variant="outlined"
                sx={{
                  fontSize: "20px",
                  fontWeight: 500,
                  fontFamily: "Space Grotesk, Regular",
                  borderRadius: "20px",
                  px: 1.5,
                  py: 0.5,
                  "&:hover": {
                    bgcolor: "#1c2434",
                    color: "white",
                  },
                  "@media (max-width: 900px)": {
                    fontSize: "14px",
                    px: 1,
                    py: 0.3,
                  },
                }}
              />
              {isAdmin && (
                <IconButton
                  size="small"
                  onClick={() => handleEdit(`CON190007[${index}]`, "A")}
                  sx={{
                    position: "absolute",
                    top: -8,
                    right: -8,
                    color: "black",
                    bgcolor: "white",
                    "&:hover": { bgcolor: "#eee" },
                  }}
                >
                  <EditIcon fontSize="inherit" />
                </IconButton>
              )}
            </Box>
          ))}
        </Stack>
        {/* Highlight Button */}
        <Button
          variant="contained"
          sx={{
            bgcolor: "#b45309",
            "&:hover": { bgcolor: "#92400e" },
            borderRadius: "20px",
            fontFamily: "Fira Sans, Regular",
            fontSize: "18px",
            fontWeight: 600,
            textTransform: "none",

            "@media (max-width: 900px)": {
              width: "100%",
              fontSize: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
            },
          }}
          onClick={() => handleClickOpen()}
        >
          <span style={{ textDecoration: "underline" }}>
            {content.CON190008}
            <EditIconButton id="CON190008" />
          </span>{" "}
          {content.CON190009}
          <EditIconButton id="CON190009" />
        </Button>
      </Box>

      <Divider
        sx={{
          borderColor: "#131414ff",
          bgcolor: "#131414ff",
        }}
      />

      {/* Scope Of Work */}
      <Box
        sx={{
          p: 4,
          ml: 2,
        }}
      >
        {/* Section Heading */}
        <Typography
          sx={{
            color: "#1c2434",
            fontWeight: 600,
            fontFamily: "Space Grotesk, Regular",
            fontSize: "48px",
            // lineHeight: "110px"
          }}
        >
          {content.CON190010}
          <EditIconButton id="CON190010" />
        </Typography>

        {/* Sub Text */}
        <Typography
          sx={{
            fontFamily: "Space Grotesk Regular",
            fontWeight: 400,
            mb: 2,
            color: "text.secondary",
            fontSize: "24px",
          }}
        >
          {content.CON190011}
          <EditIconButton id="CON190011" />
        </Typography>

        <RepairServicesPageCard />

        <Divider
          sx={{
            borderColor: "#131414ff",
            bgcolor: "#131414ff",
          }}
        />
      </Box>

      {/* How We Work section*/}
      <Box>
        <Typography
          // variant="h5"
          // fontWeight="bold"
          sx={{
            ml: 6,
            color: "#1c2434",
            fontWeight: 600,
            fontFamily: "Space Grotesk, Regular",
            fontSize: "48px",

            // lineHeight: "110px"
          }}
        >
          {content.CON190013}
          <EditIconButton id="CON190013" />
        </Typography>

        {/* Sub Text */}
        <Typography
          sx={{
            ml: 6,
            fontFamily: "Space Grotesk Regular",
            fontWeight: 400,
            // lineHeight: "130px",
            mb: 2,
            color: "text.secondary",
            fontSize: "24px",
          }}
        >
          {content.CON190014}
          <EditIconButton id="CON190014" />
        </Typography>
        <ProcessCards />
      </Box>

      {/*ElectroMagnet Repair Section */}

      <Box sx={{ px: isMobile ? 2 : 5, py: isMobile ? 4 : 8 }}>
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
          {content.CON140000}
          {isAdmin && <EditIconButton id="CON140000" />}
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
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={`https://cmsreflux.bexatm.com${features[hoveredIndex].image}`}
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
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
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
                }}
              >
                <EditIconButton
                  id={features[hoveredIndex].ids.image}
                  type="I"
                />
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      {/* Before and After Case Studies */}
      <Box
        sx={{
          px: { xs: 2, md: 8 },
          py: { xs: 4, md: 8 },
          backgroundColor: "#fff",
        }}
      >
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
          {content.CON190015}
          <EditIconButton id="CON190015" />
        </Typography>

        <Box sx={{ ml: 15, mt: 4 }}>
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
            {content.CON190016}
            <EditIconButton id="CON190016" />
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#99A0AE", mb: 4, ...typography.bodyBase }}
          >
            {content.CON190017}
            <EditIconButton id="CON190017" />
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
          {/* BEFORE IMAGE (Lower) + LEFT ARROW (Outside border) */}
          <Box
            sx={{
              position: "relative",
              width: isMobile ? "100%" : "500px",
              mt: isMobile ? 2 : 8,
              overflow: "visible",
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                left: isMobile ? "-15px" : "-25px", // Push arrow outside
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
              src={`https://cmsreflux.bexatm.com${content.CON190019}`}
              alt="Before"
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                display: "block",
              }}
            />
            {isAdmin && (
              <IconButton
                size="small"
                onClick={() => handleEdit("CON190019", "I")}
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
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
          </Box>

          {/* AFTER IMAGE (Higher) + RIGHT ARROW (Outside border) */}
          <Box
            sx={{
              position: "relative",
              width: isMobile ? "100%" : "500px",
              mt: isMobile ? 2 : 0,
              overflow: "visible",
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                right: isMobile ? "-15px" : "-25px", // Push arrow outside
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
              src={`https://cmsreflux.bexatm.com${content.CON190018}`}
              alt="After"
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                display: "block",
              }}
            />
            {isAdmin && (
              <IconButton
                size="small"
                onClick={() => handleEdit("CON190018", "I")}
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
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
            {content.CON190020}
            <EditIconButton id="CON190020" />
          </Button>
        </Box>
      </Box>



      {/* Resale Refurbished Section */}

      <Box sx={{ px: { xs: 2, md: 0 }, mt: 4 }}>
        <ResalerefurbishedCard />
       <Box sx={{ mt: 2, textAlign: "right" }}>
  <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}>
    
    {/* Clickable text */}
    <Typography
      component="a"
      onClick={() => navigate("/home/SellMagnet")}
      sx={{
        ...typography.h3,
        color: "#2F6FBA",
        fontWeight: 600,
        fontSize: "28px",
        textDecoration: "underline",
        textUnderlineOffset: "4px",
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        cursor: "pointer",
      }}
    >
      {content.CON140099}
      <ArrowRightAltIcon sx={{ fontSize: "2rem" }} />
    </Typography>

    {/* Edit icon — separate click */}
    <EditIconButton id="CON140099" />

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
          {content.CON140013}
          {isAdmin && <EditIconButton id="CON140013" />}
        </Typography>
        <Typography
          //   variant="h5"
          sx={{
            ...typography.h3B1,
            fontWeight: 400,
            color: "text.secondary",
            ml: 8,
          }}
        >
          {content.CON140014}
          {isAdmin && <EditIconButton id="CON140014" />}
        </Typography>
        <Box sx={{ px: 8, py: 3 }}>
          {faqData.map((item, index) => (
            <Accordion
              key={index}
              id={item.qId} // ← REQUIRED for scrolling!
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
                  {isAdmin && (
                    <>
                      <EditIconButton id={item.qId} />

                      {/* Delete BOTH question + answer */}
                      <IconButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteFAQ(item.qId, item.aId);
                        }}
                        sx={{
                          color: "#B71C1C",
                          "&:hover": { backgroundColor: "#fbe9e7" },
                        }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </>
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
                    <>
                      <EditIconButton id={item.aId} />
                    </>
                  )}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
          {/* ✅ Add New FAQ Button (Admin only) */}
          {isAdmin && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 3,
              }}
            >
              <Button
                onClick={async () => {
                  try {
                    // 1️⃣ Get the current maximum CON ID in FAQ section
                    const existingIds = Object.keys(content)
                      .filter((k) => k.startsWith("CON150"))
                      .map((k) => parseInt(k.replace("CON", ""), 10));

                    const maxId = Math.max(...existingIds);
                    const nextQId = `CON${String(maxId + 1).padStart(6, "0")}`;
                    const nextAId = `CON${String(maxId + 2).padStart(6, "0")}`;

                    // 2️⃣ Prepare new FAQ entries
                    const newFAQ = {
                      [nextQId]: "New FAQ Question?",
                      [nextAId]: "New FAQ Answer.",
                    };

                    // 3️⃣ Save to backend
                    const res = await fetch(
                      "https://cmsreflux.bexatm.com/API/data/UpdateContentV1.php",
                      {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          contentId: "RepairServicesPage", // ✅ your JSON file
                          newContent: newFAQ,
                        }),
                      }
                    );

                    const result = await res.json();
                    console.log("Add FAQ result:", result);

                    if (result.success) {
                      // 4️⃣ Store target for smooth scroll after reload
                      localStorage.setItem("scrollToFaqId", nextQId);

                      // Reload after small delay
                      setTimeout(() => {
                        window.location.reload();
                      }, 800);
                    } else {
                      alert(
                        "❌ Failed to add FAQ. Check permissions or backend path."
                      );
                    }
                  } catch (err) {
                    console.error("Error adding FAQ:", err);
                  }
                }}
                variant="contained"
                sx={{
                  backgroundColor: "#1C2D4B",
                  color: "#fff",
                  px: 3,
                  py: 1,
                  borderRadius: "10px",
                  fontSize: "15px",
                  textTransform: "none",
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  "&:hover": { backgroundColor: "#16233B" },
                }}
              >
                <AddIcon />
                Add New FAQ
              </Button>
            </Box>
          )}
        </Box>
      </Box>

      {/* Footer Section */}
      <Box>
        <Footer />
      </Box>

      <BrowseDialog open={open} onClose={() => setOpen(false)} />

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
                <MenuItem value={10}>1-5</MenuItem>
                <MenuItem value={20}>6-10</MenuItem>
                <MenuItem value={30}>10-20</MenuItem>
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
            <Button fullWidth variant="contained" color="primary">
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

      {/* <Dialog
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
      {/* <CardContent>
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
            <FormControl fullWidth> */}
      {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
      {/* <Select

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

          </CardContent> */}
      {/* Buttons */}
      {/* <Box mt={3} display="flex" flexDirection={"column"} gap={2}>
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
          </Box> */}
      {/* </Card> 
        </DialogContent>
      </Dialog> */}
    </Box>
  );
};

export default RepairServicesPage;
