// ProductListingPage.js

import React, { useState, useEffect } from 'react';
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
import EditIcon from "@mui/icons-material/Edit";


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

  //For CMS


  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  //  Load content
  useEffect(() => {
    const apiUrl =
      "https://skillglow.bexatm.com/ATM/ContentManageSysV1.php?contentId=C016";
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setContent(data))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  //  Check admin role
  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  //  Edit function
  const handleEdit = (contentTextID, type = "T") => {
    navigate(
      `/CmsEditor?contentId=C016&contentTextID=${contentTextID}&contentType=${type}`
    );
  };

  //  Edit icon button
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
          },
          verticalAlign: "middle",
        }}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    ) : null;

if (!content) return null;


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


        {/* Product grid */}
         <Box sx={{ px: '5%', px:5, py:7}}>          
       
               {/* Product Cards */}
               <Grid container spacing={4}>
                 {[
                   {
                     img: content.RE1002,
                     title: content.RE1003,
                     subtitle: content.RE1004,
                     price: content.RE1005,
                     lift: content.RE1006,
                     power: content.RE1007,
                     details: content.RE1008,
                     ids: ["RE1002", "RE1003", "RE1004", "RE1005", "RE1006", "RE1007", "RE1008"]
                   },
                   {
                     img: content.RE1009,
                     title: content.RE1010,
                     subtitle: content.RE1011,
                     price: content.RE1012,
                     lift: content.RE1013,
                     power: content.RE1014,
                     details: content.RE1015,
                     ids: ["RE1009", "RE1010", "RE1011", "RE1012", "RE1013", "RE1014", "RE1015"]
                   },
                   {
                     img: content.RE1016,
                     title: content.RE1017,
                     subtitle: content.RE1018,
                     price: content.RE1019,
                     lift: content.RS1020,
                     power: content.RE1021,
                     details: content.RE1022,
                     ids: ["RE1016", "RE1017", "RE1018", "RE1019", "RE1020", "RE1021", "RE1022"]
                   }
                 ].map((p, idx) => (
                   <Grid item xs={12} sm={6} md={4} key={idx}>
                     <Card
                       sx={{
                         borderRadius: 3,
                         overflow: "hidden",
                         boxShadow: 2,
                         position: "relative",
                         p: 2, // outer padding around card
                         bgcolor: "#fff",
                       }}
                     >
                       {/* Image Section */}
                       <Box
                         sx={{
                           position: "relative",
                           borderRadius: 2,
                           overflow: "hidden",
                           mb: 2,
                         }}
                       >
                         <Box
                           component="img"
                           src={`https://skillglow.bexatm.com${p.img}`}
                           alt={p.title}
                           sx={{
                             width: "100%",
                             height: 220,
                             objectFit: "cover",
                             borderRadius: 2,
                             display: "block",
                           }}
                         />
       
                         {/* 🔹 Top-left Chips */}
                         <Box
                           sx={{
                             position: "absolute",
                             top: 8,
                             left: 8,
                             display: "flex",
                             gap: 1,
                             flexWrap: "wrap",
                           }}
                         >
                           <Chip
                             label="🔧 Available for Rent"
                             size="small"
                             sx={{
                               bgcolor: "#1b5e20",
                               color: "white",
                               fontSize: "13px",
                               borderRadius: "1px",
                               height: "24px",
       
                             }}
                           />
                           <Chip
                             label="🛡️ Safety Tested"
                             size="small"
                             sx={{
                               padding: '10px',
                               bgcolor: "#1976d2",
                               marginLeft: '70px',
                               color: "white",
                               fontSize: "13px",
                               borderRadius: "1px",
                               height: "24px",
                             }}
                           />
                         </Box>
       
                         {/* 🔹 Edit Icon - bottom right corner of image */}
                         <Box
                           sx={{
                             position: "absolute",
                             bottom: 8,
                             right: 8,
                             borderRadius: "50%",
                           }}
                         >
                           <EditIconButton id={p.ids[0]} type="I" />
                         </Box>
                       </Box>
       
                       {/* Card Content */}
                       <CardContent sx={{ p: 0 }}>
                         {/* Title & Price */}
                         <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                           <Box>
                             <Typography sx={{ ...typography.h4, height: '62px', fontWeight: 400, color: "#0B121E" }}>
                               {p.title} <EditIconButton id={p.ids[1]} />
                             </Typography>
                             <Typography sx={{ ...typography.h6, fontWeight: 600, color: "#00000099" }}>
                               {p.subtitle} <EditIconButton id={p.ids[2]} />
                             </Typography>
                           </Box>
                           <Typography sx={{ ...typography.h5, fontWeight: 700, color: "#1A7B3F" }}>
                             {p.price} <EditIconButton id={p.ids[3]} />
                           </Typography>
                         </Box>
       
                         {/* Lift Capacity & Power */}
                         <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                           <Box>
                             <Typography
                               sx={{
                                 ...typography.bodyBase,
                                 fontFamily: "Fira Sans",
                                 fontWeight: 400,
                                 color: "#677489",
                               }}
                             >Lift Capacity
                              
                             </Typography>
                             <Typography sx={{ ...typography.h5, fontWeight: 500, color: "#0E1626" }}>
                                {p.lift} <EditIconButton id={p.ids[4]} />
                             </Typography>
                           </Box>
                           <Box>
                             <Typography
                               sx={{
                                 ...typography.bodyBase,
                                 fontFamily: "Fira Sans",
                                 fontWeight: 400,
                                 color: "#677489",
                               }}
                             >
                               {p.power} <EditIconButton id={p.ids[5]} />
                             </Typography>
                             <Typography sx={{ ...typography.h5, fontWeight: 500, color: "#0E1626" }}>
                               Power Supply
                             </Typography>
                           </Box>
                         </Box>
       
                         {/* Details */}
                         <Box sx={{ mt: 2 }}>
                           <Typography
                             sx={{
                               ...typography.bodyBase,
                               fontFamily: "Fira Sans",
                               fontWeight: 400,
                               color: "#677489",
                             }}
                           >
                             Size Options <EditIconButton id={p.ids[6]} />
                           </Typography>
                           <Typography sx={{ ...typography.h5, fontWeight: 500, color: "#0E1626" }}>
                             {p.details}
                           </Typography>
                         </Box>
       
                         {/* Button */}
                         <Button
                           variant="contained"
                           fullWidth
                           sx={{
                             mt: 3,
                             backgroundColor: "#0b2d55",
                             color: "white",
                             textTransform: "none",
                             fontWeight: 600,
                             borderRadius: 2,
                             py: 1,
                             "&:hover": { backgroundColor: "#103766" },
                           }}
                         >
                           Check Availability
                         </Button>
                       </CardContent>
                     </Card>
                   </Grid>
       
       
                 ))}
               </Grid>
       
                            
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
