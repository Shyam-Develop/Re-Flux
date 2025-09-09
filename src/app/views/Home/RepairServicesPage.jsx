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
          position: "absolute",
          bottom: 325,
          left: 20,
          bgcolor: "#e5e7eb",
          px: 3,
          py: 1,
          width: 250,
          fontSize: "25px",
          textAlign: "center",
        //   borderRadius: 1,
          fontWeight: "bold",
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
     sx={{ mb: 2, 
     color: "text.secondary",
     fontSize: "18px"
     }}>
      Get powerful lifting magnets when you need them — without the upfront
      cost. Flexible rental plans, quick installation, and reliable
      performance for every project.
    </Typography>
    <Typography
      variant="body2"
      sx={{ color: "#1d4ed8", fontWeight: "bold", cursor: "pointer" }}
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
fontFamily: "Space Grotesk Regular",
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

      {/* Highlight Button */}
      <Button
        variant="contained"
        sx={{
          bgcolor: "#b45309",
          "&:hover": { bgcolor: "#92400e" },
          borderRadius: "20px",
          fontWeight: "bold",
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
// lineHeight: "130px",
        mb: 2, 
       color: "text.secondary",
       fontSize: "24px" 
       }}>
        Electrical and mechanical restoration with document testing.
      </Typography>
    <ProcessCards />
  <Typography
      variant="body2"
      sx={{ color: "#1d4ed8", fontWeight: "bold", cursor: "pointer",textAlign: "center",fontSize:"24px" }}
    >
      Sample load-test certificate (PDF) →
    </Typography>
    </Box>

     {/*ElectroMagnet Repair Section */}
   <Typography
      variant="h4"
      sx={{
        fontWeight: 700,
        color: "#1c2434",
        mb: 2,
        ml: 5,
        fontFamily: "Inter, sans-serif",
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
                  fontWeight: 600,
                  color: isActive ? "#1976d2" : "#1c2434",
                  fontFamily: "Inter, sans-serif",
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
                fontFamily: "Inter, sans-serif",
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
          variant="h4"
          sx={{
            mt: 6,
            fontWeight: 700,
            color: "#1c2434",
            textAlign: "left", // center align like screenshot
            fontFamily: "Inter, sans-serif",
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
            color: "#1c2434",
            textAlign: "left", // center align
            fontFamily: "Inter, sans-serif",
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
            fontSize: "1rem",
            fontFamily: "Inter, sans-serif",
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
            // fontWeight: "bold",
            fontSize: "16px",
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
  }}
  variant="h3" fontWeight="bold" gutterBottom>
       ROI Calculator
      </Typography>
      <Typography
       variant="h5" sx={{ mb: 4,
        color: "text.secondary",
        ml: 8
        }}>
        Get powerful lifting magnets when you need them — without the upfront
        cost. Flexible rental plans, quick installation, and reliable
        performance for every project!
      </Typography>
  <Typography
  sx={{
    fontSize: "1.5rem", // or "h4" variant below
    color: "#1a4dab",
    fontWeight: "bold",
    ml: 120
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
            <Typography variant="subtitle1" fontWeight="bold">
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
          <Typography variant="body2" color="text.secondary">
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






  {/* FAQs Section */}
             <Button
    disableElevation
    disableRipple
    sx={{
      marginBottom: 2,
      ml: 8,
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
  }}
  variant="h3" fontWeight="bold" gutterBottom>
FAQs
      </Typography>
      <Typography
       variant="h5" sx={{ mb: 4,
        color: "text.secondary",
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
            <Typography fontWeight="bold">
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>




{/* Footer Section */}
 <Box sx={{ bgcolor: "#f9f9f9", px: 8, py: 6 }}>
      {/* Top Grid */}
      <Grid container spacing={4}>
        {/* 1. Logo + Sub-brand */}
        <Grid item xs={12} sm={6} md={3}>
          <Box mb={2}>
            <img src={Brand1} alt="ReFlux Magnets" style={{ height: 40 }} />
          </Box>
          <Typography variant="body2" sx={{ mb: 1 }}>
            A unit of
          </Typography>
          <Box>
            <img
              src={Brand1}
              alt="Electro Flux"
              style={{ height: 70 }}
            />
          </Box>
        </Grid>

        {/* 2. Sitemap */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography fontWeight="bold" gutterBottom>
            Sitemap
          </Typography>
          {["Home", "Abouts", "Growers", "Merchants", "Contact"].map((item) => (
            <Typography key={item} variant="body2" sx={{ mb: 0.5 }}>
              <Link href="#" underline="none" color="text.primary">
                {item}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* 3. Socials */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography fontWeight="bold" gutterBottom>
            Socials
          </Typography>
          {["Facebook", "Linkedin", "Instagram", "Twitter"].map((item) => (
            <Typography key={item} variant="body2" sx={{ mb: 0.5 }}>
              <Link href="#" underline="none" color="text.primary">
                {item}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* 4. Office & Newsletter */}
        <Grid item xs={12} sm={6} md={5}>
          <Typography fontWeight="bold" gutterBottom>
            Head Office
          </Typography>
          <Typography variant="body2" color="text.primary" sx={{ mb: 2 }}>
            Xilliams Corner Wine © 2017. 1112 A Market St # Ste B22,
            Charlottesville, CA 45565
          </Typography>

          <Typography fontWeight="bold" gutterBottom>
            News letter
          </Typography>
          <TextField
            placeholder="Enter your email address"
            variant="standard"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <MailOutlineIcon
                    sx={{
                      color: "#1976d2"
                    }}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      {/* Bottom Line */}
   <Grid container spacing={2} sx={{ mt: 6 }}>
  <Grid item xs={3}>
    <Typography
      sx={{
        fontSize: "24px",
        fontFamily: "Fira Sans",
        textDecoration: "underline",
        textDecorationColor: "#1976d2",
        textUnderlineOffset: "4px",
      }}
      variant="body2"
      fontWeight="medium"
    >
      contact@lift.agency
    </Typography>
  </Grid>

  <Grid item xs={3}>
    <Typography
      sx={{
        fontSize: "24px",
        fontFamily: "Space Grotesk",
        textDecoration: "underline",
        textDecorationColor: "#1976d2",
        textUnderlineOffset: "4px",
      }}
      variant="body2"
      fontWeight="medium"
    >
      (123) 456-7890
    </Typography>
  </Grid>

  <Grid item xs={3}></Grid> {/* Empty spacer under socials column */}

  <Grid item xs={3}>
    <Typography
      variant="caption"
      color="text.secondary"
      sx={{   
        fontSize: "14px",
        fontFamily: "Regular",
      }}
    >
      © 2020 Lift Media All rights reserved.
    </Typography>
  </Grid>
</Grid>

    </Box>



    </Box>
  );
};

export default RepairServicesPage;
