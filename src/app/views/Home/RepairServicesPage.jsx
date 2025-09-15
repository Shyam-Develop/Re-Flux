import {React, useState} from "react";
import {
  Box,
  Typography,
  Button,
  Link,
  Card,
  CardMedia,
  CardContent,  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,IconButton,Grid,Modal,List,ListItem,ListItemIcon,ListItemText,TextField,
  InputAdornment,Dialog,DialogContent,FormControl,Select,MenuItem,Stack,Chip
} from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';import videoFile from "../../../assets/MicrosoftTeams-video.mp4"; // ✅ put your video file here
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
import Repairservicemagnet from "../../../assets/repairservicemagnet.png";
import RepairServicesPageCard from "app/components/Card/RepairServicesPageCard";
import ProcessCards from "app/components/Card/HowweworkCard";
import ResalerefurbishedCard from "app/components/Card/Resalerefurbished";
import { typography } from "app/utils/constant";











const RepairServicesPage = () => {

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

 const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
      <Box
        component="img"
        src={Repairservicemagnet}
        alt="Circular Lifting Magnet"
        sx={{
          width: "100%",
          height: "50%",
          objectFit: "cover",
        }}
      />

      {/* Overlay Label */}
      <Box
        sx={{
          ...typography.h3R,
          position: "absolute",
          bottom: 325,
          left: 20,
          bgcolor: "#e5e7eb",
          px: 3,
          py: 1,
          width: 250,
          // fontSize: "25px",
          textAlign: "center",
        //   borderRadius: 1,
          fontWeight: 600,
        }}
      >
        Services
      </Box>

   {/* Content Section */}
<Box
  sx={{
    bgcolor: "white",
    p: 4,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 4, // spacing between left and right
  }}
>
  {/* Left Side - Title */}
  <Typography
    // variant="h5"
    // fontWeight="bold"
    sx={{ 
        fontSize: "40px",
        fontWeight: 600,
        lineHeight: "110px",
        color: "#1c2434",
         minWidth: 500,
fontFamily: "Space Grotesk Reguar"
         }} // fixed width so it stays left
  >
    Circular Lifting Magnet
  </Typography>

  {/* Right Side - Paragraph + Link */}
  <Box sx={{ maxWidth: 780 }}>
    <Typography
    //  variant="body2" 
     sx={{
       mb: 2, 
     color: "text.secondary",
     ...typography.bodySmall,
     fontWeight: 400
     }}>
      Get powerful lifting magnets when you need them — without the upfront
      cost. Flexible rental plans, quick installation, and reliable
      performance for every project.
    </Typography>
    <Typography
      variant="body2"
      sx={{ 
        color: "#1d4ed8", 
       ...typography.bodyStrongB,
       fontWeight: 600,
        textDecoration: "underline",
         cursor: "pointer"
         }}
    >
      Request a quote →
    </Typography>
  </Box>
</Box>
{/* Fault section */}

  <Box 
  sx={{
     bgcolor: "white",
   p: 4 ,
   ml: 2

  }}>
      {/* Section Heading */}
      <Typography
        // variant="h5"
        // fontWeight="bold"
        sx={{
            //  mb: 1,
             color: "#1c2434",
            fontWeight: 600,
            fontFamily: "Space Grotesk, Regular",
            fontSize: "48px",
            // lineHeight: "110px"
            }}
      >
        Common faults we fix
      </Typography>

      {/* Sub Text */}
      <Typography
    //    variant="body2" 
       sx={{ 
fontFamily: "Space Grotesk, Regular",
fontWeight: 400,
// lineHeight: "130px",
        mb: 2, 
       color: "text.secondary",
       fontSize: "24px" 
       }}>
        Self-diagnose quickly—share photos on WhatsApp for a fast quote.
      </Typography>

      {/* Chips Section */}
      <Stack direction="row" flexWrap="wrap" gap={2} sx={{ mb: 3 }}>
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
      >
        <span style={{ textDecoration: "underline" }}>Not sure what’s wrong?</span>{" "}
  Send photos/video on WhatsApp.
      </Button>
    </Box>
<Divider
  sx={{
    borderColor: "#131414ff", // light grey border
    // OR
    bgcolor: "#131414ff",     // background color if vertical
  }}
/>


  <Box 
  sx={{
    //  bgcolor: "white",
   p: 4 ,
   ml: 2

  }}>
      {/* Section Heading */}
      <Typography
        // variant="h5"
        // fontWeight="bold"
        sx={{
            //  mb: 1,
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
    //    variant="body2" 
       sx={{ 
fontFamily: "Space Grotesk Regular",
fontWeight: 400,
// lineHeight: "130px",
        mb: 2, 
       color: "text.secondary",
       fontSize: "24px" 
       }}>
        Electrical and mechanical restoration with document testing.
      </Typography>

   
    <RepairServicesPageCard />

 <Divider
  sx={{
    borderColor: "#131414ff", // light grey border
    // OR
    bgcolor: "#131414ff",     // background color if vertical
  }}
/>
     
    </Box>
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
    //    variant="body2" 
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
  <Typography
     
      sx={{ 
...typography.bodyBase,
        color: "#1d4ed8", 
        fontWeight: 600, 
        cursor: "pointer",
        textAlign: "center",
        // fontSize:"24px",
        textDecoration: "underline" 
      }}
    >
      Sample load-test certificate (PDF) →
    </Typography>
    </Box>

     {/*ElectroMagnet Repair Section */}
   <Typography
      variant="h4"
      sx={{
       
        color: "#1c2434",
        mb: 2,
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
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #ddd",
    borderRadius: 3,
    ml: 5,
    px: 4,
    py: 4,
    gap: 6,
    bgcolor: "white",
  }}
>
  {/* Left - Features with vertical timeline */}
  <Box sx={{ flex: 1, position: "relative" }}>
    {/* Continuous Vertical Line */}
    <Box
      sx={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: "10px", // adjust to align with icons
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
          {/* Highlighted section of the vertical line */}
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
            </Box>

            <Typography
              variant="body2"
              sx={{
                // color: isActive ? "#1976d2" : "text.secondary",
                ...typography.bodyBasemedium,
                fontWeight: 400,
                transition: "0.3s",
                ml: 4
              }}
            >
              {item.desc}
            </Typography>
          </Box>
        </Box>
      );
    })}
  </Box>

  {/* Right - Dynamic Image */}
  <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
    <Box
      component="img"
      src={features[hoveredIndex].image}
      alt="ElectroMagnet Repair"
      sx={{
        width: "100%",
        maxWidth: 600,
        borderRadius: 3,
        objectFit: "cover",
        transition: "0.5s",
      }}
    />
  </Box>
</Box>


  {/* Before and After Case Studies */}
      <Box
        sx={{
          // position: "relative",
          // zIndex: 1,
          // display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          height: "100%",
          color: "white",
          textAlign: "left", // ✅ left align
          // maxWidth: "700px", // ✅ restrict width like in screenshot
          pl: 8, // ✅ padding from left
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
          }}
        >
          {" "}
          {/* Left Arrow */}{" "}
          <IconButton
            sx={{
              bgcolor: "#1c2434",
              color: "white",
              "&:hover": { bgcolor: "#344050" },
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
            sx={{ width: "40%", borderRadius: 2, objectFit: "cover" ,
              mt: 8
            }}
          />{" "}
          {/* After Image */}{" "}
          <Box
            component="img"
            src={after}
            alt="After"
            sx={{ width: "40%", borderRadius: 2, objectFit: "cover" }}
          />{" "}
          {/* Right Arrow */}{" "}
          <IconButton
            sx={{
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
        >
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
    ml: 110
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
<Box sx={{ maxWidth: 1200, mx: "auto", px: 2 }}>
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
          sx={{

          }}
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

<ResalerefurbishedCard/>


 <Typography
  sx={{
    ...typography.h3R,
   textDecoration: "underline",
    color: "#1a4dab",
    fontWeight: 600,
    ml: 115
  }}
>
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
            textTransform: "none", // keep text as-is
            // fontSize: "0.8rem", // smaller font
            fontWeight: 400, // medium weight
            color: "#1a4dab", // dark blue text
            backgroundColor: "rgba(36,121,233,0.08)", // very light blue background
            borderRadius: "20px", // pill shape
            px: 2, // horizontal padding
            py: 0.5, // vertical padding
            boxShadow: "none", // remove shadow
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
            mb: 4,
            color: "text.secondary",
            ml: 8,
          }}
        >
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
    <Box
  component="footer"
  sx={{
    backgroundColor: "#0b2d55",
    color: "#fff",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    width: "100%",
    px: { xs: 5, md: 1 },
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
    mr: 1 ,
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
          textAlign: "left"
          }}>
          Xilliams Corner Wine © 2017. <br />
          1112 A Market St # Ste B22,<br />
          Charlottesville, CA 45565
        </Typography>

        <Typography 
        sx={{ 
          mt: 2 ,
           lineHeight: "130%",
          fontWeight: 500,
          fontSize: "20px",
          fontFamily: "Space Grotesk, Regular",
          borderBottom: "2px solid #1976d2",
        }}
        >(123) 456-7890</Typography>
        <Typography
          sx={{
            mt: 1,
            display: "inline-block",
            borderBottom: "2px solid #1976d2",
            pb: "2px",
             lineHeight: "130%",
          fontWeight: 500,
          fontSize: "20px",
          fontFamily: "Space Grotesk, Regular"
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
          <Typography key={item} 
          sx={{ 
            mb: 1,
          lineHeight: "130%",
          fontWeight: 500,
          fontSize: "20px",
          fontFamily: "Space Grotesk, Regular"
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
          lineHeight: "130%" 
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
          lineHeight: "130%" 
         }}
         >
          Sitemap</Typography>

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
            ml: 20
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

export default RepairServicesPage;
