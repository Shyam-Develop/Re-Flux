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
import Footer from 'app/components/Card/Footer';

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

  const navigate = useNavigate()

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
      <Box sx={{}}>

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
                    label="🔧 Available for Rent"
                    color="success"
                    size="small"
                    sx={{ position: 'absolute', top: 8, left: 8, borderRadius: '1px' }}
                  />
                  <Chip
                    label="🛡️ Safety Tested"
                    color="info"
                    size="small"
                    sx={{ position: 'absolute', top: 8, right: 8, borderRadius: '1px' }}
                  />
                  <Box
                    className="hover-icon"
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      width: 24,
                      height: 24,
                      border: '2px solid white',
                      backgroundColor: '#1C2D4B',
                      transform: 'rotate(45deg)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      zIndex: 2,
                    }}
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
 
      </Box>


      {/* Footer */}
      <Box >
        <Footer />
      </Box>

    </Box>
  );
};

export default Rentals;
