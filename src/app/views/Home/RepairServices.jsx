import React, { useState } from 'react';
import {
  Box, Grid, Typography, Button, Chip, Paper, Card,
  CardMedia, CardContent, Link, IconButton, Accordion, AccordionSummary,TextField,
  InputAdornment, AccordionDetails
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
import { typography } from 'app/utils/constant';
import Footer from 'app/components/Card/Footer';

const ServiceCard = ({ image, title, faults, turnaround, imageLeft = true }) => {
 const navigate=useNavigate()
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        p: 4,
        mb: 6,
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        direction={imageLeft ? 'row' : 'row-reverse'}
      >
        {/* Image */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              overflow: 'hidden',
              borderRadius: '1px',
              borderTopLeftRadius: '10px'
            }}
          >
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
                display: 'block',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            />
          </Box>
        </Grid>


        {/* Content */}
        <Grid item xs={12} md={7}>
          {/* Title */}
          <Typography sx={{ ...typography.h2, color:'#1A2438', mb:3 }}>
            {title}
          </Typography>

          {/* Subheading */}
          <Typography sx={{ ...typography.h4, color:'#49576F', mb:3 }}>
            Common faults
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
            {faults.map((fault, index) => (
              <Chip
                key={index}
                label={fault}
                variant="outlined"
                sx={{
                  height: 44,
                  fontSize: '18px',
                  px: 4,
                  borderRadius: '999px',
                  border: '1px solid #ccc',
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover': {
                    backgroundColor: '#27274c',
                    color: 'white'
                  },
                }}
              />

            ))}
          </Box>

          <Typography sx={{ ...typography.h5, color:'#0E1626',marginTop:'3%' }}>
            <strong>Turnaround Time</strong><br /> {turnaround}
          </Typography>

          <Button
          onClick={()=>navigate("/home/RepairServicesPage")}
            variant="contained"
            sx={{
              backgroundColor: '#27274c',
              borderRadius: '10px',
              marginTop: '10%',
              textTransform: 'none',
              px: 5,
              py: 2,
              fontSize: '18px',
              width: '100%',
              padding: '7px'
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
            <Typography sx={{...typography.h3, color:'#000000'}}>Services</Typography>
        </Box>
      </Box>

      {/* Top Text Section */}
      <Box sx={{ padding: '80px 120px' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography sx={{ ...typography.h1, color:'#1A2438' }}>
              Rent Industrial Magnets with Ease
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ ...typography.bodyBase, color:'#99A0AE'  }}>
              Get powerful lifting magnets when you need them — without the upfront cost.
              Flexible rental plans, quick installation, and reliable performance for every project.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Service Cards Section */}
      <Box sx={{ padding: '0 120px 80px' }}>
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
      <Box>
        <Typography
          sx={{
            ml: 8,
            ...typography.displayL,
            color:'#1C2D4B'
          }}
          variant="h3" fontWeight="bold" gutterBottom>
          ROI Calculator
        </Typography>
        <Typography
          variant="h5" sx={{
            mb: 4,
            ...typography.h4,
            color:'#99A0AE',
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
        <Box sx={{ mx: "auto", px: 6, marginBottom: '5%' }}>
          <Grid container spacing={6} justifyContent="center">
            {roiData.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: 3,
                    width: '668px',
                    height: '400px',
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
                      width: '644px',
                      height: '146px',
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
                        "& .MuiTypography-root": { color: "white", },
                        // "& .MuiDivider-root": { borderColor: "rgba(255,255,255,0.3)" },
                        "& .MuiIconButton-root": {
                          backgroundColor: "#4487ebff",
                          color: "white",
                        },
                      }
                    }}
                  >
                    <Box display="flex"
                      justifyContent="space-between" alignItems="center">
                      <Typography sx={{ ...typography.h4, color:'#0B121E'}} >
                        {item.title}
                      </Typography>
                      <IconButton
                        size="small"
                        sx={{
                          backgroundColor: "#f0f0f0",
                          width: '7%',
                          height: '40px'
                        }}
                      >
                        <ArrowForwardIosIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    <Typography sx={{...typography.bodyBase, color:'#99A0AE'}}>
                      {item.description}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

        </Box>
      </Box>


      <Box sx={{ px: '5%', pb: 10 }}>
        {/* Heading */}
        <Box sx={{ mb: 4 }}>
          <Chip
            label="Resale Services"
            color="primary"
            sx={{
              mb: 1, fontWeight: 'bold', fontSize: '12px', borderRadius: '999px', px: 2, color: '#2a425a',
              backgroundColor: '#b6c1cd'
            }}
          />
          <Typography sx={{ ...typography.displayL, color:'#1A2438' }}>
            Check out our Refurbished section
          </Typography>
          <Typography sx={{ ...typography.h4, color:'#99A0AE' }}>
            Check out these rentals
          </Typography>
        </Box>

        {/* Product Cards */}
        <Grid container spacing={4}>
          {refurbishedProducts.map((product, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Box
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  p: 2,
                  bgcolor: 'background.paper',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '430px',
                  height: '584px'
                }}
              >
                {/* Title & size */}
                <Typography sx={{ ...typography.h4, color:'#0B121E', width: '406px', height: '31px' }}>
                  {product.title}
                </Typography>
                <Typography sx={{ ...typography.h5, color:'#00000099', mb: 1 }}>
                  {product.size}
                </Typography>
                <Typography sx={{ ...typography.bodySmall, color:'#00000099', mb: 1 }}>
                  Certified: {product.certified}
                </Typography>

                {/* Image with badges */}
                <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', mb: 2 }}>
                  <Box
                    component="img"
                    src={product.imgSrc}
                    alt={product.title}
                    sx={{ width: '460px', height: '240px', objectFit: 'cover' }}
                  />

                  {/* Badges */}
                  <Chip
                    label="Available for Rent"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      bgcolor: '#1b5e20',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 10,
                    }}
                  />
                  <Chip
                    label="Safety Tested"
                    size="small"
                    color="info"
                    sx={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '8px',
                      fontWeight: '700',
                      fontSize: '15px',
                      borderRadius: '3px'
                    }}
                  />
                </Box>

                {/* Specs */}
                <Grid container spacing={2} sx={{ mb: 2, width: '406px', height: '47px' }}>
                  <Grid item xs={6}>
                    <Typography sx={{ ...typography.h6, color:'#0E1626' }}>Lift Capacity</Typography>
                    <Typography sx={{ ...typography.bodySmall, color:'#677489' }}>
                      {product.liftCapacity}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={{ ...typography.h6, color:'#0E1626' }}>Power Supply</Typography>
                    <Typography sx={{ ...typography.bodySmall, color:'#677489' }}>
                      {product.powerSupply}
                    </Typography>
                  </Grid>
                </Grid>

                {/* Included */}
                <Box sx={{ mb: 3, marginBottom: '30px', marginTop: '30px' }}>
                  <Typography sx={{ ...typography.h6, color:'#0E1626' }}>Included</Typography>
                  <Typography sx={{ ...typography.bodySmall, color:'#677489' }}>
                    {product.included}
                  </Typography>
                </Box>

                {/* Buy Now button */}
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: '#1a73e8', width: '406px', height: '44px', textTransform: 'none', ...typography.bodyStrong }}
                >
                  Buy now
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* View All link */}
        <Box sx={{ mt: 4, textAlign: 'right' }}>
          <Typography
            component="a"
            href="#"
            sx={{
              ...typography.h3,
              color: '#1976d2',
              
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
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
          ...typography.displayL,
          color:'#1C2D4B'
        }}
        variant="h3" fontWeight="bold" gutterBottom>
        FAQs
      </Typography>
      <Typography
        variant="h5" sx={{
          mb: 4,
         color: '#1C2D4B',
         ...typography.h4,
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
              <Typography sx={{...typography.h4, color:'#0E1109'}}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{...typography.bodyBase, color:'#0E1109'}}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>


      {/* Blogs Section */}
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
        Blogs
      </Button>
      <Typography
        sx={{
          ml: 8,
          ...typography.displayL,
          color:'#1C2D4B'
        }}
        variant="h3" fontWeight="bold" gutterBottom>
        Blogs
      </Typography>
      <Typography
        variant="h5" sx={{
          mb: 4,
           color: '#1C2D4B',
         ...typography.h4,
          ml: 8
        }}>
        Get powerful lifting magnets when you need them — without the upfront
        cost. Flexible rental plans, quick installation, and reliable
        performance for every project!
      </Typography>
      <Box sx={{ px: 8, py: 6 }}>
        <Grid container spacing={3}>
          {/* Left Column (Featured Post) */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                borderRadius: 3,
                boxShadow: 0,
                bgcolor: "#fafafa",
              }}
            >
              <CardMedia
                component="img"
                image={blogData[0].image}
                alt={blogData[0].title}
                sx={{
                  borderRadius: 3,
                  height: 350,
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography sx={{...typography.h5, color:'#0E1109'}} gutterBottom>
                  {blogData[0].title}
                </Typography>
                <Typography sx={{...typography.bodyBase, color:'#677489'}}>
                  {blogData[0].author} • {blogData[0].date}
                </Typography>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: "#1976d2",
                    ...typography.bodyBasemedium,
                    mt: 1,
                    display: "inline-flex",
                    alignItems: "center"
                  }}
                >
                  Discover More <ArrowForwardIosIcon sx={{ ml: 0.5, color: "#1976d2", }} />
                </Link>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Column (Other Posts) */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2} direction="column">
              {blogData.slice(1).map((item, idx) => (
                <Grid item key={idx}>
                  <Card
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 3,
                      px: 2,
                      py: 1,
                      bgcolor: "#fdfdfd",
                      boxShadow: 0,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.title}
                      sx={{
                        width: 80,
                        height: 100,
                        borderRadius: 2,
                        objectFit: "cover",
                        mr: 2,
                      }}
                    />
                    <Box>
                      <Typography sx={{...typography.h5, color:'#0E1109'}}>
                        {item.title}
                      </Typography>
                      <Typography sx={{...typography.bodyBase, color:'#677489'}}>
                        {item.author} • {item.date}
                      </Typography>
                      <Link
                        href="#"
                        underline="none"
                        sx={{ color: "#1976d2", ...typography.bodyBasemedium, mt: 0.5, display: "inline-flex", alignItems: "center" }}
                      >
                        Discover More <ArrowForwardIosIcon sx={{ ml: 0.5, color: "#1976d2", }} />
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
      <Box sx={{ bgcolor: "#f9f9f9", px: 8, py: 6, background: '#0b2d55', margin:'10px', borderTopRightRadius: '55px',
              borderTopLeftRadius: '55px' }}>
        <Footer/>

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
  width:'283px',
  height:'66px',
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
