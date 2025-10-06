import { React, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Link,
  Card,
  CardMedia,
  CardContent, Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider, IconButton, Grid, Modal, List, ListItem, ListItemIcon, ListItemText, TextField,
  InputAdornment, Dialog, DialogContent, FormControl, Select, MenuItem, Stack, Chip
} from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'; import videoFile from "../../../assets/MicrosoftTeams-video.mp4"; // ✅ put your video file here
import WhatsApp from "../../../assets/whatsappimg.jpg";
import RepairsectionCard from "app/components/Card/RepairsectionCard";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
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
import Repairservicemagnet from "../../../assets/repairservicemagnet.png";
import RepairServicesPageCard from "app/components/Card/RepairServicesPageCard";
import ProcessCards from "app/components/Card/HowweworkCard";
import ResalerefurbishedCard from "app/components/Card/Resalerefurbished";
import { typography } from "app/utils/constant";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useNavigate } from 'react-router-dom';
import BrowseDialog from "app/components/DialogBox";
import Footer from 'app/components/Card/Footer';



const RepairServicesPage = () => {

  const navigate = useNavigate()


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

  const [hoveredIndex, setHoveredIndex] = useState(0);

  const [BrowseDialogopen, setBrowseDialogOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setBrowseDialogOpen(true);
  };

  const handledialogClose = () => {
    setBrowseDialogOpen(false);
  };

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






  const [expanded, setExpanded] = useState(null);

  const handleChange = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  // const [open, setOpen] = useState(false);
  const topImageStyle = {
    width: '100%',
    height: '329px',
    overflow: 'hidden',
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const overlayBoxStyle = {
    position: 'absolute',
    bottom: '5px',
    left: '50px',
    backgroundColor: '#F1F2F4',
    width: '283px',
    height: '66px',
    padding: '14px 60px;',
    textAlign: 'center',
  };

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
        <img src={Repairservicemagnet} alt="Top Banner" style={imageStyle} />

        <Box sx={overlayBoxStyle} >
          <Typography sx={{ ...typography.h3, color: '#000000' }}>Services</Typography>
        </Box>
      </Box>

      {/* Content Section */}
   <Box sx={{ padding: '60px 120px', backgroundColor: '#fff' }}>
  <Grid container spacing={4} alignItems="center">
    {/* Left Heading */}
    <Grid item xs={12} md={5}>
      <Typography
        sx={{
          fontSize: '36px',
          fontWeight: 700,
          lineHeight: '44px',
          color: '#1A2438',
          ...typography.h1
        }}
      >
        Circular Lifting <br /> Magnet
      </Typography>
    </Grid>

    {/* Right Content */}
    <Grid item xs={12} md={7}>
      <Box sx={{ maxWidth: '600px' }}> {/* Increase this width */}
        <Typography
          sx={{
            fontSize: '16px',
            lineHeight: '26px',
            color: '#99A0AE',
            ...typography.bodyBase
          }}
        >
          Get powerful lifting magnets when you need them — without the upfront
          cost. Flexible rental plans, quick installation, and reliable
          performance for every project.
        </Typography>

        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#2F6FBA',
            mt: 2,
            ...typography.bodyStrong
          }}
        >
          <Link href="#" underline="none">
            Request a quote →
          </Link>
        </Typography>
      </Box>
    </Grid>
  </Grid>
</Box>








      {/* Fault section */}

      <Box
        sx={{
          bgcolor: "white",
          p: 4,
          ml: 4
        }}>
        {/* Section Heading */}
        <Typography
          sx={{
            ...typography.displayM,
            color: "#0E1109",
            fontWeight: 600,
            fontFamily: "Space Grotesk, Regular",
          }}
        >
          Common faults we fix
        </Typography>

        {/* Sub Text */}
        <Typography
          sx={{
            ...typography.h4,
            mb: 2,
            color: "#677489",
            fontSize: "24px"
          }}>
          Self-diagnose quickly—share photos on WhatsApp for a fast quote.
        </Typography>

        {/* Chips Section */}
        <Stack direction="row" flexWrap="wrap" gap={2} sx={{ mb: 3, width: '1280px', height: '100px' }}>
          {[
            "Loose junctions",
            "Capacity drop",
            "Uneven flux",
            "Pole-shoe wear",
            "Loose junctions",
            "Pole-shoe wear",
            "Loose junctions",
            "Capacity drop",
          ].map((item, index) => (
            <Chip
              key={index}
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
              }}
            />
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
          }}
           onClick={() => handleClickOpen()}
        >
          <span style={{ textDecoration: "underline" }}>Not sure what’s wrong?</span>{" "}
          Send photos/video on WhatsApp.
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
          ml: 2
        }}>
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
          Scope Of Work (what we repair)
        </Typography>

        {/* Sub Text */}
        <Typography
          sx={{
            fontFamily: "Space Grotesk Regular",
            fontWeight: 400,
            mb: 2,
            color: "text.secondary",
            fontSize: "24px"
          }}>
          Electrical and mechanical restoration with document testing.
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
          How We Work
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
            fontSize: "24px"
          }}>
          Electrical and mechanical restoration with document testing.
        </Typography>
        <ProcessCards />

      </Box>


      {/*ElectroMagnet Repair Section */}
      <Typography
        variant="h4"
        sx={{
          color: "#1c2434",
          ml: 5,
          fontWeight: 600,
          fontFamily: "Space Grotesk, Regular",
          fontSize: "48px",
        }}
      >
        Symptoms & Faults
      </Typography>

      <Box
        sx={{
          width: "1440px",
          height: "857px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // bgcolor: "white",
          paddingBottom:'100px'
        }}
      >
        {/* Inner container */}
        <Box
          sx={{
            width: "1228px",
            height: "708px",
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid #ddd",
            borderRadius: 3,
            p: 4,
            // bgcolor: "white",
          }}
        >
          {/* Left - Features */}
          <Box
            sx={{
              width: "570px",
              height: "660px",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                bottom: '100px',
                left: "10px",
                width: "2px",
                bgcolor: "#ccc",
                borderRadius: 1,
              }}
            />
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
                  onMouseEnter={() => setHoveredIndex(index)}
                >
                  {isActive && (
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
                  <Box sx={{ ml: 4, paddingTop: '5px' }}>
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
              width: "570px",
              height: "567px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={features[hoveredIndex].image}
              alt="ElectroMagnet Repair"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: 3,
                objectFit: "cover",
                transition: "0.5s",
              }}
            />
          </Box>
        </Box>
      </Box>



      {/* Before and After Case Studies */}
      <Box
        sx={{
          // position: "relative",
          // zIndex: 1,
          // display: "flex",
          flexDirection: "column",
          height: "100%",
          color: "white",
          textAlign: "left", 
          pl: 8, // ✅ 
        }}
      >
        <Typography

          sx={{
            mt: 6,
            ...typography.h3RBold,
            fontWeight: 600,
            color: "#1c2434",
            textAlign: "left",
          }}
        >
          Before and after case studies
        </Typography>
        {/* Sub-heading */}
        <Typography
          variant="h5"
          sx={{
            mt: 2,
            fontWeight: 600,
            fontSize: "32px",
            color: "#1c2434",
            textAlign: "left", // center align
            fontFamily: "Space Grotesk, Regular",
            ml: 8,
          }}
        >
          Circular Lifting Magnet
        </Typography>
        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            mt: 1,
            ml: 8,
            color: "text.secondary",
            textAlign: "left", // center align text
            // maxWidth: 700,
            // mx: "auto",                 // centers horizontally
            ...typography.bodyBase,
            fontWeight: 400,
          }}
        >
          Understanding growing demand and exceeding expectations from our
          customers in repairing
        </Typography>
        {/* Image Section */}{" "}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
            paddingLeft:'30px'
          }}
        >
          {" "}
          {/* Left Arrow */}{" "}
          <IconButton
            sx={{
              bgcolor: "#1c2434",
              color: "white",
              "&:hover": { bgcolor: "#344050" },
              left:40
            }}
          >
            {" "}
            <ArrowBackIcon />{" "}
          </IconButton>{" "}
          {/* Before Image */}{" "}
          <Box
            component="img"
            src={before}
            alt="Before"
            sx={{
              width: "516.1px",
              height:'305.5px',
              objectFit: "cover",
              mt: 8,
              right: '40px'
            }}
          />{" "}
          {/* After Image */}{" "}
          <Box
            component="img"
            src={after}
            alt="After"
            sx={{  width: "516.1px",
              height:'305.5px',
                objectFit: "cover" }}
          />{" "}
          {/* Right Arrow */}{" "}
          <IconButton
            sx={{
              right:40,
              bgcolor: "#1c2434",
              color: "white",
              "&:hover": { bgcolor: "#344050" },
            }}
          >
            {" "}
            <ArrowForwardIcon />{" "}
          </IconButton>{" "}
        </Box>

        <Box sx={{ textAlign: "center", py: 6 }}>
          {/* Top Button */}
          <Button
            variant="contained"
            sx={{
              bgcolor: "#b3570d", // orange/brown shade
              borderRadius: "25px",
              px: 3,
              py: 1,
              fontWeight: 500,
              fontFamily: "Inter-Medium",
              fontSize: "14px",
              "&:hover": {
                bgcolor: "#944708",
              },
            }}
            onClick={() => navigate("/home/ViewCaseStudy")} >
            View Case Study
          </Button>
        </Box>
      </Box>

      

      {/* ROI Calculator */}
      <Box>
        <Typography
          sx={{
            ml: 8,
            ...typography.h3RB,
            fontWeight: 700,
          }}
        >
          ROI Calculator
        </Typography>
        <Typography
          variant="h5"
          sx={{
            ...typography.h3B1,
            fontWeight: 400,
            mb: 4,
            color: "text.secondary",
            ml: 8
          }}>
          Get powerful lifting magnets when you need them — without the upfront
          cost. Flexible rental plans, quick installation, and reliable
          performance for every project!
        </Typography>
        <Typography
          sx={{
            ...typography.h3R,
            textDecoration: "underline",
            color: "#1a4dab",
            fontWeight: 600,
            ml: 110,
            borderBottom:'1px solid #1a4dab'
          }}
        >
          View All ROI Calculators
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
        <Box sx={{ width: '1440px', height:'400px', mx: "auto", px: 2 }}>
          <Grid container spacing={4} justifyContent="center">
            {roiData.map((item, index) => (
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
                      height: "400px",
                      width: "690px",
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
                        "& .MuiTypography-root": { color: "white", transform: "scale(1.05)" },
                        "& .MuiDivider-root": { borderColor: "rgba(255,255,255,0.3)" },
                        "& .MuiIconButton-root": {
                          backgroundColor: "#6aa9ff", // 🔹 light blue only for icon button
                          color: "white",             // icon turns white
                        },
                      }
                    }}
                  >
                    <Box display="flex"

                      justifyContent="space-between" alignItems="center">
                      <Typography
                        sx={{
                          ...typography.h3B1,
                          fontWeight: 700
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
                        color: "text.secondary",
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


      {/* Resale Refurbished Section */}

      <ResalerefurbishedCard />


      <Typography
        sx={{
          ...typography.h3R,
          textDecoration: "underline",
          color: "#1a4dab",
          fontWeight: 600,
          ml: 120,
          cursor:'pointer'
        }}
      onClick={() => navigate("/home/SellMagnet")}>
        View All Magnets for Sale
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
            color: "text.secondary",
            ml: 8,
          }}
        >
          Get powerful lifting magnets when you need them — without the upfront
          cost. Flexible rental plans, quick installation, and reliable
          performance for every project!
        </Typography>
        <Box sx={{ px: 8, py: 3 }}>
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
             <Footer/>
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
