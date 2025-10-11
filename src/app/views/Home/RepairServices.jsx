import React, { useState } from 'react';
import {
  Box, Grid, Typography, Button, Chip, Paper, Card,
  CardMedia, CardContent, Link, IconButton, Accordion, AccordionSummary, TextField,
  InputAdornment, AccordionDetails,useTheme,
} from '@mui/material';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import repairmainimg from '../../../assets/repairservices_img1.png';
import repairmainimg2 from '../../../assets/repairservices_img2.png';
import ROIimage from '../../../assets/ROICalculator.jpg';
import ResaleService from '../../../assets/Resalerefurbished.jpg';
import Brand1 from '../../../assets/Brand1.png';
import Blogs1 from "../../../assets/Blogs1.jpg";
import Blogs2 from "../../../assets/Blogs2.jpg";
import Blogs3 from "../../../assets/Blogs3.jpg";
import Blogs4 from "../../../assets/Blogs4.jpg";
import { useNavigate } from 'react-router-dom';
import { typography, RefluxSvg } from 'app/utils/constant';
import Footer from 'app/components/Card/Footer';

const ServiceCard = ({ image, title, faults, turnaround, imageLeft = true }) => {
  const navigate = useNavigate();
const theme = useTheme();
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#fbfbfb",
        borderRadius: "10px",
        p: 4,
        width: "1197px",
        mx: "auto",

        // ✅ MOBILE ONLY
        "@media (max-width: 900px)": {
          width: "100%",
          p: 2,
        },
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        direction={imageLeft ? "row" : "row-reverse"}
        sx={{
          "@media (max-width: 900px)": {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          },
        }}
      >
        {/* IMAGE SECTION */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              borderTopLeftRadius: "10px",
              width: "447px",
              height: "450.5px",

              // ✅ MOBILE ONLY
              "@media (max-width: 900px)": {
                width: "100%",
                height: "260px",
              },
            }}
          >
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
                display: "block",
                "&:hover": { transform: "scale(1.05)" },
              }}
            />

            {/* Diagonal Overlay */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "40%",
                background: "rgba(40,40,50,0.85)",
                clipPath: "polygon(0 20%, 170% 100%, 0 100%)",
                color: "white",
                p: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",

                "@media (max-width: 900px)": {
                  height: "35%",
                  p: 2,
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                electromagnet-repair
              </Typography>
              <Typography variant="body2">
                Coil rewinds, housing repairs, terminals
              </Typography>

              {/* Folded Corner */}
              <Box
                sx={{
                  position: "absolute",
                  right: 20,
                  bottom: 30,
                  width: 0,
                  height: 0,
                  borderLeft: "20px solid transparent",
                  borderTop: "20px solid white",
                  transform: "rotate(45deg)",

                  "@media (max-width: 900px)": {
                    right: 10,
                    bottom: 10,
                    borderLeft: "10px solid transparent",
                    borderTop: "10px solid white",
                  },
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* CONTENT SECTION */}
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            width: "686px",
            height: "508px",

            "@media (max-width: 900px)": {
              width: "100%",
              height: "auto",
              mt: 2,
            },
          }}
        >
          {/* Title */}
          <Typography sx={{ ...theme.typography.h2, color: "#1A2438", mb: 3 }}>
            {title}
          </Typography>

          {/* Subheading */}
          <Typography sx={{ ...typography.h4, color: "#49576F", mb: 3 }}>
            Common faults
          </Typography>

          {/* Fault Chips */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              mb: 3,

              "@media (max-width: 900px)": {
                justifyContent: "center",
              },
            }}
          >
            {faults.map((fault, index) => (
              <Chip
                key={index}
                label={fault}
                variant="outlined"
                sx={{
                  width: "202px",
                  height: 44,
                  ...typography.h5,
                  borderRadius: "999px",
                  border: "1px solid #ccc",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": {
                    backgroundColor: "#27274c",
                    color: "white",
                  },

                  "@media (max-width: 900px)": {
                    width: "45%",
                    height: "36px",
                    fontSize: "0.8rem",
                  },
                }}
              />
            ))}
          </Box>

          {/* Turnaround */}
          <Typography
            sx={{
              ...typography.h5,
              color: "#0E1626",
              marginTop: "3%",
              "@media (max-width: 900px)": {
                marginTop: "2%",
              },
            }}
          >
            <strong>Turnaround Time</strong>
            <br /> {turnaround}
          </Typography>

          {/* Button */}
          <Button
            onClick={() => navigate("/home/RepairServicesPage")}
            variant="contained"
            sx={{
              backgroundColor: "#1C2D4B",
              borderRadius: "12px",
              marginTop: "17%",
              textTransform: "none",
              px: 5,
              py: 2,
              fontSize: "18px",
              width: "622px",
              height: "50px",
              padding: "9px",
              "&:hover": {
                backgroundColor: "#1C2D4B",
                color: "white",
              },

              "@media (max-width: 900px)": {
                width: "100%",
                marginTop: "25px",
                fontSize: "16px",
              },
            }}
          >
            View Details
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

const RepairServices = () => {

  const theme = useTheme();
  
  const navigate = useNavigate()

  //ROI Calculator
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
    },]


  //Resale
  const refurbishedProducts = [
    {
      title: "Circular Lifting Magnet",
      size: "Ø1200 mm",
      certified: "Load-test 12 Mar 2025",
      imgSrc: ResaleService,
      liftCapacity: "Up To 2.5 Tons",
      powerSupply: "220 VDC / 28 A",
      included: "Controller (EF-RC220)  25 m cable",
    },
    {
      title: "Electromagnetic Lifting Beam",
      size: "Ø1500 mm",
      certified: "Load-test 15 Apr 2025",
      imgSrc: ResaleService,
      liftCapacity: "Up To 5 Tons",
      powerSupply: "380 VAC / 15 A",
      included: "Remote Controller (EF-RC380)  30 m cable",
    },
    {
      title: "Heavy-Duty Lifting Sling",
      size: "Ø2000 mm",
      certified: "Load-test 20 Jun 2025",
      imgSrc: ResaleService,
      liftCapacity: "Up To 10 Tons",
      powerSupply: "440 VAC / 20 A",
      included: "Manual Hoist  50 m cable",
    },
  ];


  //Faqs
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

  //Blog data
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


  return (
    <>
      {/* Top Image */}
      <Box sx={topImageStyle}>
        <img src={repairmainimg} alt="Top Banner" style={imageStyle} />

        <Box sx={overlayBoxStyle} >
          <Typography sx={{ ...typography.h3, color: '#000000' }}>Services</Typography>
        </Box>
      </Box>

      {/* Top Text Section */}
      <Box sx={{ padding: '60px 120px' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography  variant="h1"sx={{  color: '#1A2438' }}>
              Rent Industrial Magnets with Ease
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} >
            <Typography sx={{ ...theme.typography.bodyBase, color: '#99A0AE' }}>
              Get powerful lifting magnets when you need them — without the upfront cost.
              Flexible rental plans, quick installation, and reliable performance for every project.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Service Cards Section */}
      <Box sx={{ padding: '0 10px 10px' }}>
        <ServiceCard
          image={repairmainimg2}
          title="Rent Industrial Magnets with Ease"
          faults={faultsList}
          turnaround="3–5d / 5–7d / 10–12d"
          imageLeft={true}
        />
        <ServiceCard
          image={repairmainimg2}
          title="Rent Industrial Magnets with Ease"
          faults={faultsList}
          turnaround="3–5d / 5–7d / 10–12d"
          imageLeft={false}
        />
        <ServiceCard
          image={repairmainimg2}
          title="Rent Industrial Magnets with Ease"
          faults={faultsList}
          turnaround="3–5d / 5–7d / 10–12d"
          imageLeft={true}
        />
        <ServiceCard
          image={repairmainimg2}
          title="Rent Industrial Magnets with Ease"
          faults={faultsList}
          turnaround="3–5d / 5–7d / 10–12d"
          imageLeft={false}
        />
      </Box>


      {/* //ROI Calculator */}
       <Box sx={{ p: 5 }}>
          <Box sx={{ mt: 8 }}>
            <Typography gutterBottom sx={{ ...typography.displayL, color: '#1C2D4B', ml: 2 }}>
              ROI Calculator
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mb: 3,
                color: "#99A0AE",
                ml: 2,
                // maxWidth: "900px",
                ...typography.h4
              }}
            >
              Get powerful lifting magnets when you need them — without the upfront
              cost. Flexible rental plans, quick installation, and reliable
              performance for every project!
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                mr: 2,
                mb: 4,

              }}
            >
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  ...typography.h3,
                  color: '#2F6FBA'
                }}
              >
                View All ROI Calculators
                <ArrowRightAltIcon sx={{ ml: 1, fontSize: "2.5rem" }} />
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {roiData.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card
                    sx={{
                      position: "relative",
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: 3,
                      height: '400px',
                    }}
                  >
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
                        transition: "0.3s ease-in-out",
                        "&:hover": {
                          bgcolor: "#0b2d55",
                          color: "white",
                          "& .MuiTypography-root": { color: "white" },
                          "& .MuiIconButton-root": {
                            backgroundColor: "#4487ebff",
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
                          sx={{ ...typography.h4, color: '#0B121E' }}
                        >
                          {item.title}
                        </Typography>
                        <IconButton
                          size="small"
                          sx={{
                            backgroundColor: "#f0f0f0",
                            width: "40px",
                            height: "40px",
                          }}
                        >
                          <ArrowForwardIosIcon fontSize="small" />
                        </IconButton>
                      </Box>
                      <Typography
                        sx={{ ...typography.bodyBase, color: '#99A0AE' }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>


          {/* FAQs Section */}
          <Button
            disableElevation
            disableRipple
            sx={{
              marginBottom: 2,
              marginTop: '30px',
              // ml: 8,
              textTransform: "none",           // keep text as-is
              fontSize: "0.8rem",              // smaller font
              fontWeight: 500,                 // medium weight
              color: "#1a4dab",                // dark blue text
              backgroundColor: "rgba(36,121,233,0.08)", // very light blue background
              borderRadius: "20px",            // pill shape
              // px: 2,                           // horizontal padding
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
              // ml: 8,
              // mt: 5
              ...typography.displayL,
              color: '#1C2D4B'
            }}
            variant="h3" fontWeight="bold" gutterBottom>
            FAQs
          </Typography>
          <Typography
            variant="h5" sx={{
              // mb: 4,
              ...typography.h4,
              color: '#99A0AE',
              // ml: 8
            }}>
            Get powerful lifting magnets when you need them — without the upfront
            cost. Flexible rental plans, quick installation, and reliable
            performance for every project!
          </Typography>
          {/* sx={{ px: 8, py: 6 }} */}
          <Box >
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
                  <Typography sx={{ ...typography.h4, color: '#0E1109' }}>
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ ...typography.bodyBase, color: '#0E1109' }}>
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>





        </Box>


      <Box sx={{ px: '5%', pb: 10 }}>
        {/* Heading */}
        <Box sx={{ mb: 4 }}>
          <Button
            disableElevation
            disableRipple
            sx={{
              marginBottom: 2,
              color: '#2F6FBA',
              backgroundColor: "#EAF3FC",
              borderRadius: "20px",
              width: { xs: '100%', sm: '130px' }, // Full width on mobile, fixed width on larger screens
              height: '33px',
              px: 2,
              py: 0.5,
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "rgba(36,121,233,0.15)", // slightly darker on hover
                boxShadow: "none",
              },
            }}
          >
            <Typography sx={{
              ...typography.bodySmall, fontSize: '14px', fontWeight: 400,
              lineHeight: '150%', letterSpacing: '0.14%'
            }}> Resale Services </Typography>
          </Button>
          <Typography sx={{ ...typography.displayL, color: '#1A2438' }}>
            Check out our Refurbished section
          </Typography>
          <Typography sx={{ ...typography.h4, color: '#99A0AE' }}>
            Check out these rentals
          </Typography>
        </Box>

        {/* Product Cards */}
        <Grid container spacing={4}>
          {refurbishedProducts.map((product, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx} sx={{ width: '100%' }}> {/* Full width on mobile */}
              <Box
                sx={{
                  borderRadius: 3,
                  border: '1px solid #dbdbdb',
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%', // Full width on mobile
                  height: 'auto', // Adjust height on mobile
                  boxShadow: 1,
                  bgcolor: 'background.paper', // White background for cards
                }}
              >
                {/* Title & size */}
                <Typography sx={{ ...typography.h4, color: '#0B121E' }}>
                  {product.title}
                </Typography>
                <Typography sx={{ ...typography.h5, color: '#00000099', mb: 1 }}>
                  {product.size}
                </Typography>
                <Typography sx={{ ...typography.bodySmall, color: '#00000099', mb: 1 }}>
                  Certified: {product.certified}
                </Typography>

                {/* Image with badges */}
                <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', mb: 2 }}>
                  <Box
                    component="img"
                    src={product.imgSrc}
                    alt={product.title}
                    sx={{
                      width: '100%', 
                      height: '240px', 
                      objectFit: 'cover',
                    }}
                  />

                  {/* Badges */}
                  <Chip
                    label="🔧 Available for Rent"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      bgcolor: '#1b5e20',
                      color: 'white',
                      fontSize: '15px',
                      borderRadius: '3px',
                      ...typography.bodyBasemedium
                    }}
                  />
                  <Chip
                    label="🛡️ Safety Tested"
                    size="small"
                    color="info"
                    sx={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '8px',
                      fontSize: '15px',
                      borderRadius: '3px',
                      ...typography.bodyBasemedium
                    }}
                  />
                </Box>

                {/* Specs */}
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={6}>
                    <Typography sx={{ ...typography.h6, color: '#0E1626' }}>Lift Capacity</Typography>
                    <Typography sx={{ ...typography.bodySmall, color: '#677489' }}>
                      {product.liftCapacity}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={{ ...typography.h6, color: '#0E1626' }}>Power Supply</Typography>
                    <Typography sx={{ ...typography.bodySmall, color: '#677489' }}>
                      {product.powerSupply}
                    </Typography>
                  </Grid>
                </Grid>

                {/* Included */}
                <Box sx={{ mb: 3, marginBottom: '30px', marginTop: '30px' }}>
                  <Typography sx={{ ...typography.h6, color: '#0E1626' }}>Included</Typography>
                  <Typography sx={{ ...typography.bodySmall, color: '#677489' }}>
                    {product.included}
                  </Typography>
                </Box>

                {/* Buy Now button */}
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: '#1a73e8',
                    textTransform: 'none',
                    ...typography.bodyStrong,
                  }}
                >
                  Buy now
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* View All link */}
        <Box sx={{ mt: 8, textAlign: 'right' }}>
          <Typography
            component="a"
            href="#"
            sx={{
              ...typography.h3,
              color: '#2F6FBA',
              fontWeight: 600,
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
            onClick={() => navigate("/home/SellMagnet")}
          >
            View All Magnets for sale &rarr;
          </Typography>
        </Box>
      </Box>


      {/* FAQs Section */}
      <Button
        disableElevation
        disableRipple
        sx={{
          color: '#2F6FBA',
          backgroundColor: "#EAF3FC",
          borderRadius: "20px",
          width: '63px',
          height: '33px',
          ml: 8,
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "rgba(36,121,233,0.15)", // slightly darker on hover
            boxShadow: "none",
          },
        }}
      >
        <Typography sx={{
          ...typography.bodySmall, fontSize: '14px', fontWeight: 400,
          lineHeight: '150%', letterSpacing: '0.14%'
        }}> FAQs </Typography>
      </Button>
      <Typography
        sx={{
          ml: 8,
          // mt: 5
          ...typography.displayL,
          color: '#1C2D4B'
        }}
        variant="h3" fontWeight="bold" gutterBottom>
        FAQs
      </Typography>
      <Typography
        variant="h5" sx={{
          color: '#1C2D4B',
          ...typography.h4,
          ml: 8
        }}>
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
              <Typography sx={{ ...typography.h4, color: '#0E1109' }}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ ...typography.bodyBase, color: '#0E1109' }}>
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
                  
                  ...typography.displayL,
                  color: '#1C2D4B'
                }}
                variant="h3" fontWeight="bold" gutterBottom>
                Blogs
              </Typography>
              <Typography
                variant="h5" sx={{
                  mb: 4,
                  color: '#1C2D4B',
                  ...typography.h4,
                  
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
                          ...typography?.h5,
                          color: "#0E1109",
                          fontSize: { xs: "1.2rem", md: "1.5rem" },
                        }}
                        gutterBottom
                      >
                        {blogData[0].title}
                      </Typography>
                      <Typography sx={{ ...typography?.bodyBase, color: "#677489" }}>
                        {blogData[0].author} • {blogData[0].date}
                      </Typography>
                      <Link
                        href="#"
                        underline="none"
                        sx={{
                          color: "#1F77D6",
                          ...typography?.bodyBasemedium,
                          mt: 1,
                          display: "inline-flex",
                          alignItems: "center",
                        }}
                      >
                        Discover More{" "}
                        <ArrowForwardIosIcon
                          sx={{ ml: 0.5, color: "#1F77D6", fontSize: "0.9rem" }}
                        />
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
                                ...typography?.h4,
                                color: "#0E1109",
                                fontSize: { xs: "0.95rem", sm: "1.1rem" },
                                mb: 0.5,
                              }}
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              sx={{
                                ...typography?.bodyBase,
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
                                color: "#1F77D6",
                                ...typography?.bodyBasemedium,
                                mt: 0.5,
                                fontSize: { xs: "0.75rem", sm: "0.85rem" },
                                display: "inline-flex",
                                alignItems: "center",
                              }}
                            >
                              Discover More{" "}
                              <ArrowForwardIosIcon
                                sx={{ ml: 0.5, color: "#1F77D6", fontSize: "0.8rem" }}
                              />
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

    </>
  );
};

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

const faultsList = [
  'Loose junctions',
  'Capacity drop',
  'Uneven flux',
  'Uneven flux',
  'Loose junctions',
  'Capacity drop'
];

export default RepairServices;





