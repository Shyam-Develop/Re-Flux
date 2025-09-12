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
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import rentalimg from "../../../assets/rental_img.jpg";
import ROIimage from '../../../assets/ROICalculator.jpg';
import Brand1 from '../../../assets/Brand1.png';
import Blogs1 from "../../../assets/Blogs1.jpg";
import Blogs2 from "../../../assets/Blogs2.jpg";
import Blogs3 from "../../../assets/Blogs3.jpg";
import Blogs4 from "../../../assets/Blogs4.jpg";

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



const Rentals = () => {

  const [expanded, setExpanded] = useState(null);

  const handleChange = (index) => {
    setExpanded(expanded === index ? null : index);
  };


  return (
    <Box sx={{ p: 0 }}>
      {/* Filters */}
      <Box sx={{ fontFamily: 'Arial, sans-serif' }}>
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
            <Typography variant="h5" sx={{ fontSize: '30px', paddingLeft: '70px' }}>
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

        {/* Filters */}
        <Paper elevation={0} sx={{ padding: 3, paddingLeft: '70px'}}>
          <Box display="flex" gap={2} flexWrap="wrap">
            <FormControl sx={{ width: 170 }}>
              <Select defaultValue="">
                <MenuItem value="">Categories</MenuItem>
                <MenuItem value="A">Category A</MenuItem>
              </Select>
            </FormControl>

            <TextField
              type="date"
              label="Start date"
              InputLabelProps={{ shrink: true }}
              sx={{ width: 170 }}
            />

            <TextField
              type="date"
              label="End date"
              InputLabelProps={{ shrink: true }}
              sx={{ width: 170 }}
            />

            <FormControl sx={{ width: 170 }}>
              <Select defaultValue="">
                <MenuItem value="">Location</MenuItem>
                <MenuItem value="NY">New York</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ width: 170 }}>
              <Select defaultValue="">
                <MenuItem value="">Categories</MenuItem>
                <MenuItem value="X">Category X</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Paper>


        {/* Divider Line */}
       <Divider sx={{ width: '95%', mx: 'auto' }} />

        {/* Product Count and Sort */}
        <Box sx={{ py: 2, px: '30px' }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography sx={{ paddingLeft:'1%', fontSize:'20px'}} variant="body2">135 Products available</Typography>
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
        <Divider sx={{ width: '95%' , mx:'auto'}}/>
      </Box>

      {/* Product grid */}
      <Grid container spacing={3} sx={{ p: 5 }}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: '0px' }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="240"
                  image={product.image}
                  alt={product.title}
                />
                <Chip
                  label="Available for Rent"
                  color="success"
                  size="small"
                  sx={{ position: 'absolute', top: 8, left: 8 }}
                />
                <Chip
                  label="Safety Tested"
                  color="info"
                  size="small"
                  sx={{ position: 'absolute', top: 8, right: 8 }}
                />
              </Box>
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Size Options: {product.sizes.join(' / ')}
                </Typography>
                <Button variant="contained" fullWidth sx={{ backgroundColor: '#0b2d55' }}>
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
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ ml: 2 }}>
            ROI Calculator
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 3,
              color: "text.secondary",
              ml: 2,
              // maxWidth: "900px",
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
                color: "#1a4dab",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
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
                        variant="subtitle1"
                        fontWeight="bold"
                        fontSize="24px"
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
                      variant="body2"
                      color="text.secondary"
                      fontSize="18px"
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
            marginTop:'30px',
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
          variant="h5" sx={{
            mb: 4,
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
                <Typography fontWeight="bold" fontSize={'24px'}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" fontSize={'18px'} color="text.secondary">
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
            // mt: 5
          }}
          variant="h3" fontWeight="bold" gutterBottom>
          Blogs
        </Typography>
        <Typography
          variant="h5" sx={{
            mb: 4,
            color: "text.secondary",
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
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {blogData[0].title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blogData[0].author} • {blogData[0].date}
                  </Typography>
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      color: "#1976d2",
                      fontWeight: "bold",
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
                        <Typography variant="subtitle1" fontWeight="medium">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.author} • {item.date}
                        </Typography>
                        <Link
                          href="#"
                          underline="none"
                          sx={{ color: "#1976d2", fontWeight: "bold", mt: 0.5, display: "inline-flex", alignItems: "center" }}
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
        <Box sx={{
          bgcolor: "#f9f9f9", px: 8, py: 6, background: '#0b2d55', borderTopRightRadius: '55px',
          borderTopLeftRadius: '55px'
        }}>
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
            <Grid item xs={12} sm={6} md={2} color={'white'}>
              <Typography fontWeight="bold" gutterBottom>
                Sitemap
              </Typography>
              {["Home", "Abouts", "Growers", "Merchants", "Contact"].map((item) => (
                <Typography key={item} variant="body2" sx={{ mb: 0.5, }}>
                  <Link href="#" underline="none" sx={{ color: 'white' }} color="text.primary">
                    {item}
                  </Link>
                </Typography>
              ))}
            </Grid>

            {/* 3. Socials */}
            <Grid item xs={12} sm={6} md={2} color={'white'}>
              <Typography fontWeight="bold" gutterBottom color={'white'}>
                Socials
              </Typography>
              {["Facebook", "Linkedin", "Instagram", "Twitter"].map((item) => (
                <Typography key={item} variant="body2" sx={{ mb: 0.5, color: 'white' }}>
                  <Link href="#" sx={{ color: 'white' }} underline="none" color="text.primary">
                    {item}
                  </Link>
                </Typography>
              ))}
            </Grid>

            {/* 4. Office & Newsletter */}
            <Grid item xs={12} sm={6} md={5}>
              <Typography fontWeight="bold" color={'white'} gutterBottom>
                Head Office
              </Typography>
              <Typography variant="body2" color="text.primary" sx={{ mb: 2, color: 'white' }}>
                Xilliams Corner Wine © 2017. 1112 A Market St # Ste B22,
                Charlottesville, CA 45565
              </Typography>

              <Typography fontWeight="bold" color={'white'} gutterBottom>
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
          <Grid container spacing={2} sx={{ mt: 6, color: 'white' }}>
            <Grid item xs={3}>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontFamily: "Fira Sans",
                  textDecoration: "underline",
                  textDecorationColor: "#1976d2",
                  textUnderlineOffset: "4px",
                  color: 'white'
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
                  color: 'white'
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
                  color: 'white'
                }}
              >
                © 2020 Lift Media All rights reserved.
              </Typography>
            </Grid>
          </Grid>

        </Box>

      </Box>

    </Box>
  );
};

export default Rentals;
