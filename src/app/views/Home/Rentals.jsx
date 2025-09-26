// ProductListingPage.js

import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  Pagination,
  IconButton,
  Accordion, AccordionSummary, AccordionDetails, InputAdornment, Link,
  AppBar,
  Toolbar,
  Select,
  FormControl,
  Container,
  Divider,
  Paper
} from '@mui/material';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from "@mui/icons-material/Add";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import RemoveIcon from "@mui/icons-material/Remove";
import rentalimg from "../../../assets/rental_img.jpg";
import ROIimage from '../../../assets/ROICalculator.jpg';
import Brand1 from '../../../assets/Brand1.png';
import Blogs1 from "../../../assets/Blogs1.jpg";
import Blogs2 from "../../../assets/Blogs2.jpg";
import Blogs3 from "../../../assets/Blogs3.jpg";
import Blogs4 from "../../../assets/Blogs4.jpg";
import { typography, RefluxSvg } from 'app/utils/constant';
import { useNavigate } from 'react-router-dom';

// Dummy data (same image repeated)
const products = Array.from({ length: 6 }, (_, i) => ({
  title: 'Circular Lifting Magnet',
  sizes: ['700mm', '900mm', '1200mm'],
  image: rentalimg,
}));


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
]


//faqs
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



const fields = [
  { label: 'Categories', id: 'categories-1' },
  { label: 'Start date', id: 'start-date' },
  { label: 'End date', id: 'end-date' },
  { label: 'Location', id: 'location' },
  { label: 'Categories', id: 'categories-2' }
];


const Rentals = () => {

  const navigate=useNavigate()

  const [expanded, setExpanded] = useState(null);

  const handleChange = (index) => {
    setExpanded(expanded === index ? null : index);
  };


  return (
    <Box sx={{ p: 0 }}>
      {/* Filters */}

      {/* AppBar with Diagonal Right Cut */}
      <Box
        sx={{
          position: 'relative',
          backgroundColor: '#112B55',
          height: '80px',
          clipPath: 'polygon(0 0, 100% 0, 99% 35%, 95% 100%, 0% 104%)',
          color: 'white',
        }}
      >
        <Toolbar sx={{ height: '100%', justifyContent: 'space-between' }}>
          <Typography variant="h5" sx={{ ...typography.displayM, color: '#FFFFFF', paddingLeft: '70px' }}>
            Magnets For Rent
          </Typography>
          <Box sx={{ paddingRight: '10%' }}>
            <TextField
              variant="standard"
              placeholder="Search for a product"
              sx={{ width: 250 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon sx={{ color: 'white' }} />
                  </InputAdornment>
                ),
                disableUnderline: true,
                sx: {
                  color: 'white',
                  borderBottom: '1px solid white',
                },
              }}
            />
          </Box>
        </Toolbar>
      </Box>

              {/* <Box sx={{ maxWidth: '1296px', mx: 'auto' }}> */}
      <Box sx={{  }}>

        <Box sx={{ fontFamily: 'Arial, sans-serif' }}>

          {/* Filters */}
          <Box sx={{ p: 2, padding: '40px' }}>
            <Grid container spacing={2}>
              {fields.map((field) => (
                <Grid item xs={8} sm={3} md={2.4} key={field.id}>
                  <Typography variant="body2" fontWeight={500} mb={0.5}>
                    {field.label}
                  </Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      defaultValue=""
                      displayEmpty
                      renderValue={(selected) =>
                        selected ? selected : ''
                      }
                      sx={{ width: '200px', height: '56px' }} >
                      <MenuItem value="option1">Option 1</MenuItem>
                      <MenuItem value="option2">Option 2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Divider Line */}
          <Divider sx={{ width: '95%', mx: 'auto', marginTop: '1%' }} />

          {/* Product Count and Sort */}
          <Box sx={{ py: 2, px: '30px' }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography sx={{ ...typography.h5, color: '#000000' }}>135 Products available</Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography variant="body2">Sort by</Typography>
                <FormControl size="small">
                  <Select defaultValue="az">
                    <MenuItem value="az">A-Z</MenuItem>
                    <MenuItem value="za">Z-A</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>

          {/* Bottom Divider */}
          <Divider sx={{ width: '95%', mx: 'auto' }} />
        </Box>


        {/* Product grid */}
        <Grid container spacing={3} sx={{ p: 5 }}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ borderRadius: '0px' }}>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    width='384px'
                    height="240px"
                    image={product.image}
                    alt={product.title}
                  />
                  <Chip
                    label="Available for Rent"
                    color="success"
                    size="small"
                    sx={{ position: 'absolute', top: 8, left: 8, borderRadius: '1px' }}
                  />
                  <Chip
                    label="Safety Tested"
                    color="info"
                    size="small"
                    sx={{ position: 'absolute', top: 8, right: 8, borderRadius: '1px' }}
                  />
                </Box>
                <CardContent>
                  <Typography sx={{ ...typography.h4, color: '#1C2D4B' }}>{product.title}</Typography>
                  <Typography sx={{ ...typography.h6, color: '#0E1626', mb: 1 }}>
                    Size Options
                    <Typography sx={{ ...typography.bodySmall, color: '#677489', }}> {product.sizes.join(' / ')}</Typography>
                  </Typography>
                  <Button variant="contained" fullWidth sx={{ backgroundColor: '#0b2d55' }} onClick={() => navigate("/home/CheckAvailabilty")}>
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination count={2} page={1} color="primary" />
        </Box>

        {/* ROI Calculator Section */}
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



         {/* Blogs Section */}

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
          <Grid item xs={12} md={6} sx={{ width: '668px',
                height: '462px',}}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                
                borderRadius: 3,
                boxShadow: 0,
                bgcolor: "#fafafa",
                cursor:'pointer'
              }}
             onClick={() => navigate("/home/BlogDetails")}>
              <CardMedia
                component="img"
                image={blogData[0].image}
                alt={blogData[0].title}
                sx={{
                  borderRadius: 3,
                  width: '628px',
                  height: '300px',
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
                    color: "#1F77D6",
                    ...typography.bodyBasemedium,
                    mt: 1,
                    display: "inline-flex",
                    alignItems: "center"
                  }}
                >
                  Discover More <ArrowForwardIosIcon sx={{ ml: 0.5, color: "#1F77D6", }} />
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
                      cursor:'pointer'
                    }}
                  onClick={() => navigate("/home/Blogpost")}>
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.title}
                      sx={{
                        width: '130px',
                        height: '141px',
                        borderRadius: 2,
                        objectFit: "cover",
                        mr: 2,
                      }}
                    />
                    <Box>
                      <Typography sx={{...typography.h4, color:'#0E1109', width:'474px', height:'62px'}}>
                        {item.title}
                      </Typography>
                      <Typography sx={{...typography.bodyBase, color:'#677489'}}>
                        {item.author} • {item.date}
                      </Typography>
                      <Link
                        href="#"
                        underline="none"
                        sx={{ color: "#1F77D6", ...typography.bodyBasemedium, mt: 0.5, display: "inline-flex", alignItems: "center" }}
                      >
                        Discover More <ArrowForwardIosIcon sx={{ ml: 0.5, color: "#1F77D6", }} />
                      </Link>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      </Box>



      {/* Footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: '#112B55',
          color: '#fff',
          borderTopLeftRadius: '50px',
          borderTopRightRadius: '50px',
          paddingLeft: '10%',
          paddingRight: '40px',
          paddingTop: '65px',
          mt: 10,
          position: 'relative',
          margin: '3%',
          
        }}
      >
        <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
          {/* Left Column */}
          <Grid item xs={12} md={4}>
            {/* Logo container - flex row */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
              <Box>
                <RefluxSvg />
              </Box>
              <Box>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 'bold', width:'253.16px', height:'55.11px', letterSpacing: '2px', color: '#fff', lineHeight: 1 }}
                >
                  ReFlux
                </Typography>
                <Typography variant="caption" sx={{ letterSpacing: '15px', width:'19px', height:'17px' }}>
                    MAGNETS
                </Typography>
              </Box>
            </Box>

            {/* A unit of + brand image */}
            <Box mt={6} display="flex" alignItems="center" gap={3}>
              <Typography variant="h5                                                                                           ">A unit of</Typography>
              <Box component="img" src={Brand1} alt="Electroflux" sx={{ height: 70 }} />
            </Box>
          </Grid>

          {/* Middle Column */}
          <Grid item xs={12} md={4}>
            {/* Contact Button */}
            <Button
              variant="outlined"
              sx={{
                color: '#fff',
                borderColor: '#fff',
                borderRadius: '20px',
                textTransform: 'none',
                mb: 2,
                px: 3,
                py: 0.5,
                fontSize: '0.8rem',
              }}
            >
              Contact
            </Button>

            {/* Contact details */}
            <Typography variant="body2" lineHeight={1.6}>
              Xilliams Corner Wine © 2017.<br />
              1112 A Market St # Ste B22,<br />
              Charlottesville, CA 45565
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, color: '#BFD8F9' }}>
              (123) 456-7890
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 1,
                color: '#BFD8F9',
                textDecoration: 'underline',
                width: 'fit-content',
                cursor: 'pointer',
              }}
            >
              contact@lift.agency
            </Typography>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={3}>
            {/* Links Button */}
            <Button
              variant="outlined"
              sx={{
                color: '#fff',
                borderColor: '#fff',
                borderRadius: '20px',
                textTransform: 'none',
                mb: 2,
                px: 3,
                py: 0.5,
                fontSize: '0.8rem',
              }}
            >
              Links
            </Button>

            {/* Links list */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" underline="none" color="#fff" variant="body2">
                Facebook
              </Link>
              <Link href="#" underline="none" color="#fff" variant="body2">
                Instagram
              </Link>
              <Link href="#" underline="none" color="#fff" variant="body2">
                Youtube
              </Link>
              <Link
                href="#"
                underline="none"
                variant="body2"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#fff',
                  fontWeight: 600,
                }}
              >
                Wall of Love <span style={{ color: 'red', marginLeft: 6 }}>❤️</span>
              </Link>
              <Box sx={{ height: 1, backgroundColor: '#fff', width: 30, mt: 1 }} />
              <Link
                href="#"
                underline="none"
                variant="body2"
                sx={{ fontWeight: 600, color: '#fff' }}
              >
                Sitemap
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom bar */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 6,
          }}
        >
          <Typography variant="caption" sx={{ color: '#ccc', paddingLeft: '70%'}}>
            © 2020 Lift Media All rights reserved.
          </Typography>

          <IconButton
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            sx={{
              border: '1px solid white',
              borderRadius: '50%',
              color: 'white',
              backgroundColor: '#112B55',
              '&:hover': {
                backgroundColor: '#1b3a6b',
              },
            }}
          >
            <ArrowUpwardIcon />
          </IconButton>
        </Box>
      </Box>

    </Box>
  );
};

export default Rentals;
