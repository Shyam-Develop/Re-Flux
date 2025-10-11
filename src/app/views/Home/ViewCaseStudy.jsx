import { React, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Link,
  Card,
  CardMedia,
  CardContent, Accordion, Avatar,
  AccordionSummary,
  AccordionDetails,
  Divider, IconButton, Grid, Modal, List, ListItem, ListItemIcon, ListItemText, TextField,
  InputAdornment, Dialog, DialogContent, FormControl, Select, MenuItem, Stack, Chip, Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery, useTheme
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'; import videoFile from "../../../assets/MicrosoftTeams-video.mp4"; // ✅ put your video file here
import WhatsApp from "../../../assets/whatsappimg.jpg";
import RepairsectionCard from "app/components/Card/RepairsectionCard";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import serviceimg from "../../../assets/Repairservice.png";
import before from "../../../assets/beforecstudy.png";
import after from "../../../assets/aftercstudy.png";
import Electromagnetrepair from "../../../assets/EletromagnetRepair.png";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RentServicesCard from "app/components/Card/RentServicesCard";
import RentingMagnet from "../../../assets/RentingMagnet.png";
import ResaleServices from "app/components/Card/ResaleServices";
import ROIimage from '../../../assets/ROICalculator.jpg';
import Brand1 from '../../../assets/Brand1.png';
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
import Footer from 'app/components/Card/Footer';
import { typography } from "app/utils/constant";






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

  const features = [
    {
      title: "Diagnose (intake + tests)",
      desc: "Resistance, inductance, insulation (MΩ @ 500 V), and no-load current measured; pole face inspected.Root cause: insulation breakdown + terminal damage..",
    },
    {
      title: "Quote & plan",
      desc: "Proposed urgent repair (72 h) and a rental bridge so crane operations continued during the repair window.",
    },
    {
      title: "Execute",
      desc:
        "Full coil rewind with insulation upgrade (Class H) \n" +
        "Terminals & leads replaced; junction box rebuilt and re-sealed \n" +
        "Resin potting and housing resurfacing; fasteners/gaskets renewed \n" +
        "Bench test → assembly → load-test (kN) with photo checklist",
    },
    {
      title: "Re-install & validate",
      desc: "On-site diagnosis, pickup & drop, reinstall/commissioning Pan-India coverage with WhatsApp photo reports.",
      image: after,
    },
  ];

  const data = [
    {
      test: "Insulation (MΩ @ 500 V)",
      before: 8,
      after: 8,
      target: 8,
    },
    {
      test: "Resistance (Ω)",
      before: 7.3,
      after: 7.3,
      target: 7.3,
    },
    {
      test: "Pull Force (kN)",
      before: 9.4,
      after: 12.1,
      target: 12,
    },
    {
      test: "Overhaul Time (h)",
      before: 24,
      after: 5,
      target: 5,
    },
  ];
  const benefits = [
    {
      title: 'Lower Upfront Cost',
      description: 'Skip the heavy investment. Pay only for the time you use the magnet.',
    },
    {
      title: 'Flexibility for Projects',
      description: 'Rent different sizes or types as per project needs, without long-term commitments.',
    },
    {
      title: 'Zero Maintenance Hassle',
      description: 'We handle service and upkeep — you focus on getting the job done.',
    },
    {
      title: 'Quick Availability',
      description: 'Get magnets delivered and installed fast, exactly when your project demands it.',
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
    { day: "Day 1", tasks: [{ label: "Visual, tests, approval", color: "#fdb714" }] },
    { day: "Day 2", tasks: [{ label: "Rewind + mechanical + terminals/seals", color: "#d62828" }] },
    {
      day: "Day 3",
      tasks: [
        { label: "Load-test & documentation", color: "#0077c8" },
        { label: "Dispatch, rework on-site checks", color: "#d62828" },
      ],
    },

  ];

  const items = [
    {
      img: Approach1,
      title: "Diagnose",
      subtitle: "(intake + tests)",
    },
    {
      img: Approach2,
      title: "Quote & plan",
    },
    {
      img: Approach3,
      title: "Execute",
    },
    {
      img: Approach4,
      title: "Re-install & validate",
    },
  ];

  const images = [
    Roi1,          // Default large image
    Roi2,
    Roi1,
    Roi2,
    Roi1,
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
        Case Study: 72-hour restoration of a Ø1200 mm circular magnet at a steel scrap yard
      </Typography>

      {/* Image */}
      <Box
        component="img"
        src={casestudy}
        alt="Circular Lifting Magnet"
        sx={{
          width: "1200px",
          height: "400px",
          objectFit: "cover",
          mt: 2,
          //   transform: "rotate(-180deg)", // Figma spec
          borderRadius: 1,
          boxShadow: 3,
          mb: 2,
        }}
      />

      {/* Industry/Asset/Service/Outcome/Docs */}
      <Box
        sx={{
          alignItems: "flex-start", // alignItems accepts 'flex-start', not 'left'
          ml: 10,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Space Grotesk, Regular",
            fontSize: { xs: "16px", sm: "18px", md: "20px" }, // responsive font size
            fontWeight: 500,
            lineHeight: "130%",
            color: "#111827",
            textAlign: "left",
            mb: 4,
            mr: { xs: 0, md: 60 }, // no right margin on mobile, restore on desktop
          }}
        >
          <strong>Industry:</strong> Scrap & recycling (Western India) <br />
          <strong>Asset:</strong> Circular electro-lifting magnet — Ø1200 mm (scrap handling) <br />
          <strong>Service:</strong> Urgent repair + rental bridge <br />
          <strong>Outcome:</strong> Pull restored to spec, zero production loss during repair <br />
          <strong>Docs:</strong> Load-test certificate (kN), service report with photos, warranty card (6 months)
        </Typography>
      </Box>



      {/* Challenge Box */}

      <Box
        sx={{
          position: "relative",
          border: "2px solid #50b3f5",
          p: 4,
          textAlign: "left",
          maxWidth: "1000px",
          mx: "auto",
          mt: 4,

          // Corner Squares
          "&::before, &::after, & > .corner::before, & > .corner::after": {
            content: '""',
            position: "absolute",
            width: "15px",
            height: "15px",
            border: "2px solid #50b3f5",
            backgroundColor: "white"
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
          The challenge
        </Typography>

        {/* Body text */}
        <Typography
          sx={{
            fontFamily: "Space Grotesk, Regular",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "130%",
            color: "#111827",
            mb: 2,
          }}
        >
          A port-adjacent scrap yard reported frequent drops and overheating during peak shifts.
          Visuals showed darkened windings; terminals were heat-stressed and the junction box
          gaskets had failed. Production was at risk with a ship unloading window booked for the week.
        </Typography>

        {/* Bullet points */}
        <ul style={{
          margin: 0,
          paddingLeft: "20px",
          fontFamily: "Space Grotesk, Regular",
          fontSize: "20px",
          fontWeight: 500,
          lineHeight: "130%",
          color: "#111827",

        }}>
          <li>Symptoms: Capacity loss, hot spots, high no-load current</li>
          <li>Constraints: Minimal tolerance for downtime; busy crane schedule</li>
          <li>Initial options considered: Replace the magnet (12-day lead) vs. repair (72 hours)</li>
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
            fontFamily: "Space Grotesk, Regular",
            ...typography.displayM,
            textAlign: "center",
            fontSize: { xs: "24px", sm: "28px", md: "36px" }, // Responsive font size
            mb: { xs: 4, md: 5 },
          }}
        >
          Our approach
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
                  mb: 2,
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
                </Typography>
              )}
            </Grid>
          ))}
        </Grid>
      </Box>


      <Box sx={{ px: isMobile ? 2 : 5, py: isMobile ? 4 : 8 }}>
        {/* Heading */}
        <Typography
          sx={{
            fontSize: isMobile ? "32px" : "48px",
            fontWeight: 700,
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
                      </Typography>
                    </Box>

                    {/* Description or Bullet List */}
                    {item.title === "Execute" ? (
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
            <Box
              component="img"
              src={Approach5} // Static image, no change on hover
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


      {/* Tab Section */}
      <Typography
        sx={{
          fontFamily: "Space Grotesk, Regular",
          fontSize: isMobile ? "28px" : "40px",
          fontWeight: 700,
          textAlign: "center",
          mt: 5,
        }}
      >
        Before / After - test results
      </Typography>

      {!isMobile ? (
        // DESKTOP TABLE
        <Box
          sx={{
            mt: 5,
            marginLeft: '25%',
            width: "50%",
            borderCollapse: "collapse",
            fontFamily: "Inter, sans-serif",
            fontSize: 14,
            border: "1px solid #ddd",
          }}
          component="table"
        >
          {/* Table header */}
          <Box
            component="thead"
            sx={{
              height: "130px",
              backgroundColor: "#f9fafb",
              borderBottom: "2px solid #ccc",
            }}
          >
            <Box component="tr">
              {["Test", "Before", "After", "Target"].map((heading) => (
                <Box
                  component="th"
                  key={heading}
                  sx={{
                    textAlign: "left",
                    padding: "12px 16px",
                    fontWeight: 600,
                    color: "#24315a",
                    borderRight: "1px solid #ddd",
                    "&:last-child": {
                      borderRight: "none",
                    },
                  }}
                >
                  {heading}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Table body */}
          <Box component="tbody">
            {data.map((row, index) => (
              <Box
                component="tr"
                key={row.test}
                sx={{
                  height: "130px",
                  backgroundColor: index % 2 === 0 ? "#f5f7fa" : "#fff",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <Box
                  component="td"
                  sx={{ padding: "12px 16px", color: "#24315a", whiteSpace: "nowrap" }}
                >
                  {row.test}
                </Box>
                <Box component="td" sx={{ padding: "12px 16px", color: "#3c506d" }}>
                  {row.before}
                </Box>
                <Box component="td" sx={{ padding: "12px 16px", color: "#3c506d" }}>
                  {row.after}
                </Box>
                <Box component="td" sx={{ padding: "12px 16px", color: "#3c506d" }}>
                  {row.target}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      ) : (
        // MOBILE CARD VIEW
        <Box
          sx={{
            mt: 4,
            display: "flex",
            flexDirection: "column",
            gap: 3,
            px: 2,
          }}
        >
          {data.map((row, index) => (
            <Box
              key={index}
              sx={{
                border: "1px solid #ddd",
                borderRadius: 2,
                backgroundColor: "#fff",
                p: 2,
                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "#24315a",
                  mb: 1,
                }}
              >
                {row.test}
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                <Typography sx={{ color: "#999", fontSize: "14px" }}>Before:</Typography>
                <Typography sx={{ color: "#3c506d", fontWeight: 500 }}>
                  {row.before}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                <Typography sx={{ color: "#999", fontSize: "14px" }}>After:</Typography>
                <Typography sx={{ color: "#3c506d", fontWeight: 500 }}>
                  {row.after}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ color: "#999", fontSize: "14px" }}>Target:</Typography>
                <Typography sx={{ color: "#3c506d", fontWeight: 500 }}>
                  {row.target}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}

      {/* Timeline Section */}

      <Box sx={{
        // px: 4, py: 6 ,
        textAlign: "left",
        mt: 5
      }}>
        {/* Title */}
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 4 }}>
          <Box component="span"

            sx={{
              borderBottom: "2px solid #0077c8",
              pr: 0.5,
              ...typography.displayM,
              textAlign: "left"
            }}>
            Timeline (TAT band: Urgent)
          </Box>{" "}

        </Typography>

        {/* Grid Layout */}
        <Grid container spacing={2} sx={{ position: "relative" }}>
          {timelineData.map((day, idx) => (
            <Grid item xs={12} md={3} key={idx}>
              {/* Dashed vertical line */}
              <Box sx={{ position: "relative", height: 220 }}>
                <Box
                  sx={{
                    position: "absolute",
                    left: "50%",
                    top: 24,
                    bottom: 0,
                    borderLeft: "2px dashed #ccc",
                    transform: "translateX(-50%)",
                    zIndex: 0,
                  }}
                />
                <Typography
                  sx={{
                    textAlign: "right",
                    mb: 2,
                    fontWeight: 600,
                    color: "#1c1c1c",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {day.day}
                </Typography>

                {/* Task blocks */}
                {day.tasks.map((task, taskIdx) => (
                  <Box
                    key={taskIdx}
                    sx={{
                      backgroundColor: task.color,
                      color: "#fff",
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      width: "fit-content",
                      mx: "auto",
                      mt: taskIdx === 0 ? 4 : 2,
                      fontSize: 13,
                      fontWeight: 500,
                      zIndex: 1,
                      position: "relative",
                      textAlign: "center",
                    }}
                  >
                    {task.label}
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>


      </Box>

      <Box>
        <Paper
          elevation={0}
          sx={{
            backgroundColor: "#f9fafb",
            borderRadius: 0,
            py: 6,
            px: 4,
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
              mb: 4, color: "#24315a"
            }}
          >
            What the client said
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
                We didn’t lose a single shift. The rental bridge kept unloading on schedule,
                and the repaired magnet came back stronger than before. Documentation was clear and the
                pull test gave our team confidence.
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 500,
                  color: "#555",
                  mt: 1,
                  fontSize: "20px",
                  fontFamily: "Space Grotesk Regular"
                }}
              >
                -Maintenance Head, Scrap Operations
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
            mb: 4, color: "#24315a"
          }}
        >
          ROI snapshot (realistic illustration)
        </Typography>

        {/* ROI details */}
        <Typography sx={{
          color: "#3c506d",
          fontSize: "20px",
          fontWeight: 500,
          lineHeight: "130%",
          textAlign: "left",
          mb: 1,
          paddingLeft: '4%'
        }}>
          Repair scope: ₹ 2.50 L <br />
          Rental bridge (3 days): ₹ 12,000/day × 3 + ₹ 15,000 mob/demob = ₹ 0.51 L <br />
          Total chosen path: ₹ 3.01 L
        </Typography>

        {/* Alternative header */}
        <Typography
          sx={{
            fontFamily: "Space Grotesk, Regular",
            textAlign: "left",
            fontWeight: 600,
            fontSize: "32px",
            mt: 4,
            mb: 1,
            color: "#3c506d",
            paddingLeft: '4%'
          }}
        >
          Alternative (replace + rental, 12 days lead):
        </Typography>
        <Typography sx={{
          textAlign: "left",
          color: "#3c506d",
          fontSize: "20px",
          fontWeight: 500,
          lineHeight: "130%",
          textAlign: "left",
          mb: 1,
          paddingLeft: '4%'
        }}>
          New magnet ₹ 9.50 L + rental ₹ 1.44 L + mob/demob ₹ 0.15 L = ₹ 11.09 L
        </Typography>

        {/* Estimated savings */}
        <Typography
          sx={{
            fontFamily: "Space Grotesk, Regular",
            textAlign: "left",
            fontWeight: 600,
            fontSize: "32px",
            //    mt: 4,
            mb: 1,
            color: "#3c506d",
            paddingLeft: '4%'
          }}
        >
          Estimated savings vs replace: ₹ 8.08 L
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
          Want your numbers? Use our Repair vs Replace ROI Calculator to compare with your downtime ₹/hr. →
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
        ROI Snapshot (realistic illustration)
      </Typography>

      {/* Main Image */}
      <Box
        component="img"
        src={realisticillustration}
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
        {images.map((img, index) => (
          <Box
            key={index}
            component="img"
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(img)}
            sx={{
              width: isMobile ? "100px" : "148px",
              height: isMobile ? "80px" : "124px",
              objectFit: "cover",
              borderRadius: 1,
              cursor: "pointer",
              border:
                selectedImage === img
                  ? "2px solid #1976d2"
                  : "2px solid transparent",
              transition: "border 0.3s",
              "&:hover": {
                border: "2px solid #1976d2",
              },
            }}
          />
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
          Why it worked
        </Typography>

        <Whyitworkcard />

        {/* Image + Right Text */}
        <Box sx={{ mt: 5, px: isMobile ? 0 : '10%' }}>
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
                  src={Whyitworkimg}
                  alt="Case Study"
                  sx={{
                    width: "100%",
                    height: isMobile ? "100%" : "450px",
                    objectFit: "cover",
                  }}
                />

                {/* Gradient Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(225deg, rgba(11,45,85,0.9) 10%, transparent 100%)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    p: 2,
                    color: "#fff",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Space Grotesk, Regular",
                      fontSize: isMobile ? "16px" : "24px",
                      fontWeight: 400,
                    }}
                  >
                    72-hour rewind restores Ø1200 mm circular magnet
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
                  Pull back to spec (86 kN) with Class-H insulation and new terminals. Zero downtime using a rental bridge.
                </Typography>

                <Typography
                  sx={{
                    color: "#047857",
                    fontWeight: 500,
                    fontSize: isMobile ? "16px" : "20px",
                    mb: 2,
                  }}
                >
                  Saved: ₹ 8.08 L vs replace.
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
                    ml: isMobile ? 0 : 4,
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Read case <ArrowForwardIcon sx={{ fontSize: 18, ml: 0.5 }} />
                </Link>

                <br />

                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    ml: isMobile ? 0 : 4,
                    backgroundColor: "#8b4513",
                    borderRadius: "999px",
                    px: isMobile ? 6 : 14,
                    py: 1.3,
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#6b3b10",
                    },
                  }}
                >
                  View Specs
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>



      {/* //Footer Section */}

      <Box >
        <Footer />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: '1px',
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
            Have a circular magnet underperforming?
          </Typography>
          <Typography sx={{
            color: "#6b7280",
            mb: 2,
            fontWeight: 400,
            fontSize: "18px",
            fontFamily: "Fira Sans, Regular",
          }}>
            Share photos of the nameplate and issue we’ll confirm TAT and the cheapest path.
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
            Request a Quote <ArrowForwardIcon sx={{ fontSize: 18, ml: 0.5 }} />
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
          WhatsApp an Engineer
        </Button>
      </Box>

    </Box>

  );
};

export default ViewCaseStudy;
