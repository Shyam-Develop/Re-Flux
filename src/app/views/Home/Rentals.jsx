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
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import rentalimg from "../../../assets/rental_img.jpg";
import ROIimage from '../../../assets/ROICalculator.jpg';
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


// const roiData = [
//   {
//     title: "Repair vs Replace",
//     description:
//       "Estimate the cheapest path. We also compare renting during lead time vs paying downtime.",
//     image: ROIimage,
//   },
//   {
//     title: "Repair vs Replace",
//     description:
//       "Estimate the cheapest path. We also compare renting during lead time vs paying downtime.",
//     image: ROIimage,
//   },
// ]


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
      `${process.env.REACT_APP_CMS_URL}?contentId=C016`
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

  //Blog data
  const blogData = [
    {
      title: content.RE1039,
      author: content.RE1040,
      date: content.RE1041,
      image: `https://cmsreflux.bexatm.com${content.RE1042}`,
      featured: true,
    },
    {
      title: content.RE1043,
      author: content.RE1044,
      date: content.RE1045,
      image: `https://cmsreflux.bexatm.com${content.RE1046}`,
    },
    {
      title: content.RE1047,
      author: content.RE1048,
      date: content.RE1049,
      image: `https://cmsreflux.bexatm.com${content.RE1050}`,
    },
    {
      title: content.RE1051,
      author: content.RE1052,
      date: content.RE1053,
      image: `https://cmsreflux.bexatm.com${content.RE1054}`,
    },

  ];

  return (
    <Box sx={{ p: 0 }}>
      {/* Filters */}

      {/* AppBar with Diagonal Right Cut */}
      <Box
        sx={{
          position: 'relative',
          backgroundColor: '#112B55',
          height: '100px',
          clipPath: 'polygon(0 0, 100% 0, 100% 35%, 95% 100%, 0% 104%)',
          color: 'white',
        }}
      >
        <Toolbar sx={{ height: '100%', justifyContent: 'space-between' }}>
          <Typography variant="h5" sx={{ ...typography.displayM, color: '#FFFFFF', paddingLeft: '70px' }}>
            {content.RE1001}
            <EditIconButton id="RE1001" />
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
        <Box sx={{ px: '5%', px: 5, py: 7 }}>

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
                lift: content.RE1020,
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
                    transition: "all 0.6s ease",

                    // "&:hover": {
                    //   bgcolor: "#1C2D4B", // or "#1976d2"
                    //   color: "#fff",
                    //   cursor: "pointer",
                    // },

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
                      src={`https://cmsreflux.bexatm.com${p.img}`}
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
                      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                        <Typography sx={{ ...typography.h6, fontWeight: 600 }}>
                          Start at
                        </Typography>

                        <Typography
                          sx={{
                            ...typography.h5,
                            fontWeight: 700,
                            color: "#1A7B3F",
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5, // spacing between price and edit icon
                          }}
                        >
                          {p.price}
                          <EditIconButton id={p.ids[3]} />
                        </Typography>
                      </Box>
                      {/* <span style={{color:'red'}}>*</span> */}
                    </Box>

                    {/* Lift Capacity & Power */}
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
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
                          Power Supply
                        </Typography>
                        <Typography sx={{ ...typography.h5, fontWeight: 500, color: "#0E1626" }}>
                          {p.power} <EditIconButton id={p.ids[5]} />
                        </Typography>
                      </Box>
                    </Box>

                    {/* Details */}
                    <Box sx={{ mt: 3 }}>
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
                        backgroundColor: "#1C2D4B",
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



        {/* FAQs Section */}
        <Box sx={{ px: 5, py: 1 }}>
          {/* 🔹 Editable Tag Button */}
          <Button
            disableElevation
            disableRipple
            sx={{
              marginBottom: 2,
              marginTop: '30px',
              textTransform: "none",
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "#1a4dab",
              backgroundColor: "rgba(36,121,233,0.08)",
              borderRadius: "20px",
              py: 0.5,
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "rgba(36,121,233,0.15)",
                boxShadow: "none",
              },
            }}
          >
            {content.RE1023}
            <EditIconButton id="RE1023" />
          </Button>

          {/* 🔹 Section Title */}
          <Typography
            sx={{
              ...typography.displayL,
              color: '#1C2D4B',
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
            variant="h3"
            fontWeight="bold"
            gutterBottom
          >
            {content.RE1024}
            <EditIconButton id="RE1024" />
          </Typography>

          {/* 🔹 Description Text */}
          <Typography
            variant="h5"
            sx={{
              ...typography.h4,
              color: '#99A0AE',
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 4,
            }}
          >
            {content.RE1025}
            <EditIconButton id="RE1025" />
          </Typography>

          {/* 🔹 FAQ Accordions */}
          <Box>
            {[
              { q: content.RE1026, a: content.RE1027, qid: "RE1026", aid: "RE1027" },
              { q: content.RE1028, a: content.RE1029, qid: "RE1028", aid: "RE1029" },
              { q: content.RE1030, a: content.RE1031, qid: "RE1030", aid: "RE1031" },
              { q: content.RE1032, a: content.RE1033, qid: "RE1032", aid: "RE1033" },
              { q: content.RE1034, a: content.RE1035, qid: "RE1034", aid: "RE1035" },
            ].map((item, index) => (
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
                      ...typography.h4,
                      color: '#0E1109',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    {item.q}
                    <EditIconButton id={item.qid} />
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography
                    sx={{
                      ...typography.bodyBase,
                      color: '#0E1109',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    {item.a}
                    <EditIconButton id={item.aid} />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>


        {/* Blogs Section */}
        <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 3, md: 6 } }}>
          {/* Section Header */}
          <Button
            disableElevation
            disableRipple
            sx={{
              marginBottom: 2,
              textTransform: "none",
              fontSize: "0.8rem",
              fontWeight: 500,
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
              display: "inline-flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {content.RE1036}
            <EditIconButton id="RE1036" />
          </Button>

          <Typography
            sx={{ ...typography.displayL, color: "#1C2D4B", display: "flex", alignItems: "center", gap: 1 }}
            variant="h3"
            fontWeight="bold"
            gutterBottom
          >
            {content.RE1037}
            <EditIconButton id="RE1037" />
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: "#1C2D4B",
              ...typography.h4,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {content.RE1038}
            <EditIconButton id="RE1038" />
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

              >
                <Box sx={{ position: "relative" }}>
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
                  <Box sx={{ position: "absolute", bottom: 8, right: 8 }}>
                    <EditIconButton id="RE1042" type="I" />
                  </Box>
                </Box>

                <CardContent>
                  <Typography
                    sx={{
                      ...typography?.h5,
                      color: "#0E1109",
                      fontSize: { xs: "1.2rem", md: "1.5rem" },
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                    gutterBottom
                  >
                    {blogData[0].title}
                    <EditIconButton id="RE1039" />
                  </Typography>
                  <Typography
                    sx={{ ...typography?.bodyBase, color: "#677489", display: "flex", alignItems: "center", gap: 1 }}
                  >
                    {blogData[0].author} <EditIconButton id="RE1040" /> • {blogData[0].date} <EditIconButton id="RE1041" />
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
                    onClick={() => navigate("/home/BlogDetails")}
                  >
                    Discover More{" "}
                    <ArrowForwardIosIcon sx={{ ml: 0.5, color: "#1F77D6", fontSize: "0.9rem" }} />
                  </Link>
                </CardContent>
              </Card>
            </Grid>

            {/* Other Posts */}
            <Grid item xs={12} md={6}>
              <Grid container spacing={2} direction="column">
                {blogData.slice(1).map((item, idx) => {
                  const base = 1043 + idx * 4; // auto increment RS keys per card
                  return (
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

                      >
                        <Box sx={{ position: "relative" }}>
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
                          <Box sx={{ position: "absolute", bottom: 6, right: 6 }}>
                            <EditIconButton id={`RE${base + 3}`} type="I" />
                          </Box>
                        </Box>

                        <Box sx={{ flex: 1 }}>
                          <Typography
                            sx={{
                              ...typography?.h4,
                              color: "#0E1109",
                              fontSize: { xs: "0.95rem", sm: "1.1rem" },
                              mb: 0.5,
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            {item.title}
                            <EditIconButton id={`RE${base}`} />
                          </Typography>

                          <Typography
                            sx={{
                              ...typography?.bodyBase,
                              color: "#677489",
                              fontSize: { xs: "0.75rem", sm: "0.85rem" },
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            {item.author} <EditIconButton id={`RE${base + 1}`} /> • {item.date}{" "}
                            <EditIconButton id={`RE${base + 2}`} />
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
                            onClick={() => navigate("/home/Blogpost")}
                          >
                            Discover More{" "}
                            <ArrowForwardIosIcon sx={{ ml: 0.5, color: "#1F77D6", fontSize: "0.8rem" }} />
                          </Link>
                        </Box>
                      </Card>
                    </Grid>
                  );
                })}
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
