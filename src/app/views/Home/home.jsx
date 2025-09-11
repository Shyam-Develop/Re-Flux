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
  AccordionDetails, CircularProgress,
  Divider, IconButton, Grid, Modal, List, ListItem, ListItemIcon, ListItemText, TextField,
  InputAdornment, Dialog, DialogContent, FormControl, Select, MenuItem
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import rentserviceimg from "../../../assets/RentService.png";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'; import videoFile from "../../../assets/MicrosoftTeams-video.mp4"; // ✅ put your video file here
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
import { useNavigate } from "react-router-dom";
import RepairServicesPage from "app/views/Home/RepairServicesPage";








const HomePage = () => {
  const navigate = useNavigate();
  //=================VIDEO-Loading===============================//
  const [selected, setSelected] = useState(null);
  const [loadingId, setLoadingId] = useState(null);
  const items = [
    { id: "01", title: "Repair" },
    { id: "02", title: "Rent" },
    { id: "03", title: "Buy" },
    { id: "04", title: "Sell/exchange" },
  ];

  const handleClick = (id) => {
    setSelected(id);
    setLoadingId(id);

    // Simulate loading (2 sec)
    setTimeout(() => {
      setLoadingId(null);
    }, 100000);
  };
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
    {
      title: "Repair vs Replace",
      description:
        "Estimate the cheapest path. We also compare renting during lead time vs paying downtime.",
      image: ROIimage,
    },
    // Add more as needed...
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
      {/* 🔹 Background Video */}
      {/* <Box
        component="video"
        // src="https://youtu.be/wDchsz8nmbo"
        src={videoFile}
        autoPlay
        loop
        muted
        playsInline
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      /> */}
      <video
        // playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          //   top: 0,
          //   left: 0,
          //   zIndex: -1,
        }}
        src={videoFile}
        autoPlay
        muted
        loop
        class="video.mp4"
      ></video>

      {/* 🔹 Foreground Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          color: "white",
          textAlign: "left", // ✅ left align
          maxWidth: "700px", // ✅ restrict width like in screenshot
          pl: 8, // ✅ padding from left
        }}
      >
        {/* Heading */}
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", mb: 2, lineHeight: 1.2 }}
        >
          Certified refurbished magnets—ready to work, warranty included.
        </Typography>

        {/* Subtext */}
        <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
          Each unit is tested, load-certified and documented. Warranty 3–12
          months. Pan-India dispatch and install support.
        </Typography>

        {/* Buttons Row */}
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <Button
            onClick={handleClickOpen}
            variant="contained"
            color="warning"
            sx={{ borderRadius: "25px", px: 3 }}
          >
            Browse Inventory
          </Button>
          {/* Dialog */}
          <Dialog
            open={BrowseDialogopen}
            onClose={handledialogClose}
            maxWidth="sm"
            fullWidth
            sx={{
              "& .MuiDialog-paper": {
                borderRadius: "16px",
                height: "100vh",   // 👈 fixed height
                maxHeight: "100vh" // 👈 prevent overflow beyond screen
              },
            }}
          >
            <DialogContent>
              {/* <Card sx={{ textAlign: "center", p: 3 }}> */}
              <CardContent

              >
                <Typography
                  sx={{
                    textAlign: "left"
                  }}
                  variant="h6" gutterBottom>
                  Tell us what you need
                </Typography>
                <Typography
                  //  variant="h6"
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
                  Company Name *
                </Typography>
                <TextField
                  placeholder="Ex: John"
                  variant="outlined"
                  fullWidth
                  name="name"
                  id="name"
                // value={values.name}
                // onChange={handleChange}
                // error={touched.name && Boolean(errors.name)}
                // helperText={touched.name && errors.name}
                //           sx={{ 
                //             bgcolor: theme.palette.textInput, // background color
                // "& .MuiInputBase-input": {
                //   color: theme.palette.primary.contrastText, // text color
                // },
                // "& .MuiOutlinedInput-root": {
                //   "& fieldset": {
                //     borderColor: theme.palette.border, // border color
                //   },
                //   "&:hover fieldset": {
                //     borderColor: theme.palette.border, // hover border
                //   },
                //   "&.Mui-focused fieldset": {
                //     borderColor: theme.palette.border, // focused border
                //   },
                //    },
                //             mb: 2

                //            }}
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
                // value={values.name}
                // onChange={handleChange}
                // error={touched.name && Boolean(errors.name)}
                // helperText={touched.name && errors.name}
                //           sx={{ 
                //             bgcolor: theme.palette.textInput, // background color
                // "& .MuiInputBase-input": {
                //   color: theme.palette.primary.contrastText, // text color
                // },
                // "& .MuiOutlinedInput-root": {
                //   "& fieldset": {
                //     borderColor: theme.palette.border, // border color
                //   },
                //   "&:hover fieldset": {
                //     borderColor: theme.palette.border, // hover border
                //   },
                //   "&.Mui-focused fieldset": {
                //     borderColor: theme.palette.border, // focused border
                //   },
                //    },
                //             mb: 2

                //            }}
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
                // value={values.name}
                // onChange={handleChange}
                // error={touched.name && Boolean(errors.name)}
                // helperText={touched.name && errors.name}
                //           sx={{ 
                //             bgcolor: theme.palette.textInput, // background color
                // "& .MuiInputBase-input": {
                //   color: theme.palette.primary.contrastText, // text color
                // },
                // "& .MuiOutlinedInput-root": {
                //   "& fieldset": {
                //     borderColor: theme.palette.border, // border color
                //   },
                //   "&:hover fieldset": {
                //     borderColor: theme.palette.border, // hover border
                //   },
                //   "&.Mui-focused fieldset": {
                //     borderColor: theme.palette.border, // focused border
                //   },
                //    },
                //             mb: 2

                //            }}
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
                  Email *
                </Typography>
                <TextField
                  placeholder="example@gmail.com"
                  variant="outlined"
                  fullWidth
                  name="name"
                  id="name"
                // value={values.name}
                // onChange={handleChange}
                // error={touched.name && Boolean(errors.name)}
                // helperText={touched.name && errors.name}
                //           sx={{ 
                //             bgcolor: theme.palette.textInput, // background color
                // "& .MuiInputBase-input": {
                //   color: theme.palette.primary.contrastText, // text color
                // },
                // "& .MuiOutlinedInput-root": {
                //   "& fieldset": {
                //     borderColor: theme.palette.border, // border color
                //   },
                //   "&:hover fieldset": {
                //     borderColor: theme.palette.border, // hover border
                //   },
                //   "&.Mui-focused fieldset": {
                //     borderColor: theme.palette.border, // focused border
                //   },
                //    },
                //             mb: 2

                //            }}
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
                    //  sx={{
                    //                 bgcolor: theme.palette.textInput, // background color
                    //                 "& .MuiInputBase-input": {
                    //                   color: theme.palette.primary.contrastText, // text color
                    //                 },
                    //                 "& .MuiOutlinedInput-root": {
                    //                   "& fieldset": {
                    //                     borderColor: theme.palette.border, // border color
                    //                   },
                    //                   "&:hover fieldset": {
                    //                     borderColor: theme.palette.border, // hover border
                    //                   },
                    //                   "&.Mui-focused fieldset": {
                    //                     borderColor: theme.palette.border, // focused border
                    //                   },
                    //                 },
                    //                 mb: 2,
                    //               }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  // value={age}
                  // label="Age"
                  // onChange={handleChange}
                  >
                    <MenuItem
                      // sx={{
                      //  color: theme.palette.primary.contrastText
                      // }}
                      value={10}>1-5</MenuItem>
                    <MenuItem
                      //  sx={{
                      //  color: theme.palette.primary.contrastText
                      // }}
                      value={20}>6-10</MenuItem>
                    <MenuItem
                      //  sx={{
                      //   color: theme.palette.primary.contrastText
                      // }}
                      value={30}>10-20</MenuItem>
                    <MenuItem
                      //  sx={{
                      //   color: theme.palette.primary.contrastText
                      // }}
                      value={30}>20+</MenuItem>
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
                // value={values.name}
                // onChange={handleChange}
                // error={touched.name && Boolean(errors.name)}
                // helperText={touched.name && errors.name}
                //           sx={{ 
                //             bgcolor: theme.palette.textInput, // background color
                // "& .MuiInputBase-input": {
                //   color: theme.palette.primary.contrastText, // text color
                // },
                // "& .MuiOutlinedInput-root": {
                //   "& fieldset": {
                //     borderColor: theme.palette.border, // border color
                //   },
                //   "&:hover fieldset": {
                //     borderColor: theme.palette.border, // hover border
                //   },
                //   "&.Mui-focused fieldset": {
                //     borderColor: theme.palette.border, // focused border
                //   },
                //    },
                //             mb: 2

                //            }}
                />
              </CardContent>
              {/* </Card> */}
            </DialogContent>
          </Dialog>

          {/* WhatsApp Button */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              component="img"
              src={WhatsApp}
              alt="WhatsApp"
              sx={{ width: 32, height: 32 }}
            />
            <Link
              onClick={() => navigate("/home/RepairServicesPage")}
              sx={{
                px: 1,
                color: "white",
                textDecoration: "none",
                fontWeight: 500,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              WhatsApp an Engineer
            </Link>
          </Box>
        </Box>
        <Typography
          sx={{
            fontWeight: 500,
            textDecoration: "underline",
            cursor: "pointer",
            display: "inline-block",
          }}
        >
          What “Refurbished” Means? →
        </Typography>
        {/* 🔹 Small Cards Row (moved outside WhatsApp box) */}
        <Box sx={{ display: "flex", gap: 3, mb: 3, mt: 3 }}>
          {items.map((item) => {
            const isSelected = selected === item.id;
            const isLoading = loadingId === item.id;

            return (
              <Card
                key={item.id}
                onClick={() => handleClick(item.id)}
                sx={{
                  width: 208,
                  height: 93,
                  borderRadius: "16px",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: isSelected ? "#1C2D4B" : "rgba(0,0,0,0.12)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  padding: "12px 16px",
                  cursor: "pointer",
                  backgroundColor: isSelected ? "#1C2D4B" : "white",
                  color: isSelected ? "white" : "black",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: isSelected ? "#1C2D4B" : "#f5f5f5",
                  },
                }}
              >
                <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: isSelected ? "white" : "text.secondary",
                      fontWeight: 600,
                    }}
                  >
                    {item.id}
                  </Typography>
                 
                </Box>

                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, mt: 1 }}
                >
                  {item.title}
                </Typography>
              </Card>
            );
          })}
        </Box>
        {/* <Box sx={{ display: "flex", gap: 2, mb: 3, mt: 3 }}>
          {[
            { id: "01", title: "Repair" },
            { id: "02", title: "Rent" },
            { id: "03", title: "Buy" },
            { id: "04", title: "Sell/exchange" },
          ].map((item) => (
            <Card
              key={item.id}
              sx={{
                width: 110,
                height: 80,
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                color: "black",
                fontWeight: "bold",
                cursor: "pointer",
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", fontWeight: 600 }}
              >
                {item.id}
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                {item.title}
              </Typography>
            </Card>
          ))}
        </Box> */}
        {/* </Box> */}

        {/* Extra link */}
      </Box>

      {/* 🔹 Right Side Card */}
      <Card
        sx={{
          position: "absolute",
          top: "7%",
          right: "5%",
          width: 320,
          borderRadius: 2,
          boxShadow: 3,
          zIndex: 2,
        }}
      >
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Peace of mind
          </Typography>
          <Typography sx={{ color: "teal", fontWeight: "bold", mb: 1 }}>
            We’ve got you covered
          </Typography>
          <Link
            sx={{
              display: "block",
              mb: 2,
              fontWeight: 500,
              textDecoration: "underline",
              color: "primary.main",
            }}
          >
            View All Magnets for rent →
          </Link>

          <Divider sx={{ mb: 2 }} />

          {/* Items */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Repair
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Magnet down? Get a fast repair quote.
            </Typography>
            <Link sx={{ fontWeight: 500, textDecoration: "underline" }}>
              Request a Quote
            </Link>
          </Box>

          <Divider sx={{ mb: 2 }} />

          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Rent
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Need a temporary magnet today?
            </Typography>
            <Link sx={{ fontWeight: 500, textDecoration: "underline" }}>
              Request a Quote
            </Link>
          </Box>

          <Divider sx={{ mb: 2 }} />

          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Resale (Refurbished)
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Certified units with warranty buy/sell/exchange.
            </Typography>
            <Link sx={{ fontWeight: 500, textDecoration: "underline" }}>
              Request a Quote
            </Link>
          </Box>
        </CardContent>
      </Card>

      <RepairsectionCard
      // onClick={() => navigate("/home/RepairServicesPage")}
      />
      <Box sx={{ textAlign: "center", py: 6 }}>
        {/* Top Button */}
        <Button
          onClick={handleClickOpen}
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
          Request a Repair Quote
        </Button>

        {/* Links */}
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 4 }}>
          <Link
            href="#"
            underline="none"
            sx={{
              color: "primary.main",
              display: "flex",
              alignItems: "center",
              fontWeight: 500,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            WhatsApp Photos <ArrowRightAltIcon sx={{ ml: 0.5, fontSize: 20 }} />
          </Link>
          <Link
            href="#"
            underline="none"
            sx={{
              color: "primary.main",
              display: "flex",
              alignItems: "center",
              fontWeight: 500,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Book Site Visit <ArrowRightAltIcon sx={{ ml: 0.5, fontSize: 20 }} />
          </Link>
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
            sx={{
              width: "40%", borderRadius: 2, objectFit: "cover",
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
        ElectroMagnet Repair
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 500,
          color: "#1c2434",
          mb: 4,
          ml: 5,
          fontFamily: "Inter, sans-serif",
        }}
      >
        Coil rewinds, terminal rebuilds, housing & controllers — restored to spec with certified load testing
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
      {/* Why Choose Reflux Section */}

      <Box
        sx={{
          width: "100%",
          py: 10,
          px: { xs: 2, md: 6 },
          backgroundColor: "#fff",
        }}
      >
        <Grid container spacing={6} alignItems="flex-start">
          {/* Column 1 - Left Text */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                mt: 10,
                ml: 5,
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="h4" fontWeight={700} gutterBottom>
                Why Choose <br /> Reflux?
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                mb={3}
                sx={{ maxWidth: "320px" }}
              >
                We handle service and upkeep — you focus on getting the job done.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "25px",
                  px: 3,
                  backgroundColor: "#00A99D",
                  "&:hover": { backgroundColor: "#00897B" },
                }}
              >
                About Us
              </Button>
            </Box>
          </Grid>

          {/* Column 2 - Middle Content */}
          <Grid item xs={12} md={4}>
            {[...Array(3)].map((_, i) => (
              <Box

                key={i} sx={{
                  mb: 6,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)", // 🔹 Zoom out full section
                  },
                }}>
                <Typography
                  variant="h6" fontWeight={600} gutterBottom>
                  Repair vs Replace ROI Instantly
                </Typography>
                <Link
                  component="button"
                  variant="body2"
                  color="text.secondary"
                  underline="hover"
                  onClick={handleOpen}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  Our ROI Calculator shows payback and TCO (repair vs rental vs
                  replace) in seconds — make data-backed decisions.
                </Link>
                <Divider sx={{ mt: 1, borderColor: "#00A99D", width: "400px" }} />
              </Box>
            ))}
          </Grid>

          {/* Column 3 - Right Content with marginTop */}
          <Grid item xs={12} md={4}>
            <Box sx={{
              mt: { xs: 0, md: 8 },
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)", // 🔹 Zoom out full section
              },
            }}>
              {[...Array(3)].map((_, i) => (
                <Box key={i} sx={{ mb: 6 }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Repair vs Replace ROI Instantly
                  </Typography>
                  <Link
                    component="button"
                    variant="body2"
                    color="text.secondary"
                    underline="hover"
                    onClick={handleOpen}
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    Our ROI Calculator shows payback and TCO (repair vs rental vs
                    replace) in seconds — make data-backed decisions.
                  </Link>
                  <Divider
                    sx={{ mt: 1, borderColor: "#00A99D", width: "400px" }}
                  />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Modal */}
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              borderRadius: 2,
              p: 4,
            }}
          >
            <Typography variant="h6" fontWeight={600} gutterBottom>
              ROI Calculator Info
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This modal opens when you click the subtitle link. You can replace
              this with more details, links, or actions.
            </Typography>
            <Button
              onClick={handleClose}
              sx={{ mt: 2, backgroundColor: "#00A99D", color: "white" }}
            >
              Close
            </Button>
          </Box>
        </Modal>
      </Box>
      {/* Rent Services section */}

      <RentServicesCard services={services} />
      {/* View all magnets for rent Section*/}
      <Box>
        <Typography
          sx={{
            fontSize: "1.5rem", // or "h4" variant below
            color: "#1a4dab",
            fontWeight: "bold",
            ml: 110
          }}
        >
          View All Magnets for Rent
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
        <Box sx={{ flexGrow: 1, padding: 4 }}>
          <Grid container spacing={4} alignItems="center">
            {/* Left Side - Image */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={RentingMagnet} // <- replace this with your actual path
                alt="Magnet Excavator"
                sx={{ width: '100%', borderRadius: 2 }}
              />
            </Grid>

            {/* Right Side - Text */}
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  color: "#092f7aff"
                }}
                variant="h3" fontWeight="bold" gutterBottom>
                Why Renting Magnets is Smarter
              </Typography>
              <List>
                {benefits.map((item, index) => (
                  <ListItem alignItems="flex-start" key={index} sx={{ pl: 0 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <Typography variant="h6"
                        sx={{
                          width: 30,
                          height: 30,
                          bgcolor: '#092f7a',
                          color: 'white',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 'bold',
                          fontSize: '1rem',
                        }}
                        fontWeight="bold">
                        {index + 1}
                      </Typography>
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        ml: 2
                      }}
                      primary={
                        <Typography variant="subtitle1" fontWeight="bold">
                          {item.title}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body2" color="textSecondary">
                          {item.description}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Resale Services */}
      <Box>
        <ResaleServices />
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
            Request a Quote
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
          variant="h5" sx={{
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
              <Grid item xs={12} sm={6} md={4} key={index}>
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

      {/* Our Brands Section */}
      <Typography
        sx={{
          ml: 8,
          mt: 5
        }}
        variant="h3" fontWeight="bold" gutterBottom>
        Our Brands
      </Typography>
      <Typography
        variant="h5" sx={{
          mb: 4,
          color: "text.secondary",
          ml: 8
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut nisl turpis. Mauris vitae commodo elit,
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut nisl turpis. Mauris vitae commodo elit,!
      </Typography>
      <Box sx={{ px: 8, py: 6 }}>
        <Grid container spacing={0}>
          {partnerData.map((partner, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={partner.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                px: 2,
                borderRight:
                  index < partnerData.length - 1
                    ? "1px solid #ccc"
                    : "none",
              }}
            >
              {/* Logo */}
              <Box
                component="img"
                src={partner.logo}
                alt="Logo"
                sx={{
                  height: 80,
                  mb: 2,
                  objectFit: "contain",
                }}
              />

              {/* Description */}
              <Typography
                variant="body2"
                color="text.primary"
                sx={{ mb: 2 }}
              >
                {partner.text}
              </Typography>

              {/* Learn more link */}
              <Box
                display="flex"
                alignItems="center"
                sx={{ mt: "auto", justifyContent: "flex-start" }}
              >
                <Link href="#" underline="none" fontWeight="bold">
                  Learn more
                </Link>
                <ArrowRightAltIcon sx={{ ml: 0.5 }} />
              </Box>
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

export default HomePage;
const services = [
  {
    id: 1,
    title: "Rectangular Lifting Magnet",
    type: "Permanent Magnet",
    liftCapacity: "3 Tons",
    powerSupply: "None Required",
    sizes: "500mm / 800mm / 1000mm",
    price: 30,
    img: rentserviceimg,
  },
  {
    id: 2,
    title: "Bespoke Lifting Magnet",
    type: "Custom Coil",
    liftCapacity: "Varied",
    powerSupply: "Custom",
    sizes: "Custom Sizes Available",
    price: 100,
    img: rentserviceimg,
  },
  {
    id: 3,
    title: "Mini Lifting Magnet",
    type: "Coil",
    liftCapacity: "1 Ton",
    powerSupply: "220V",
    sizes: "300mm / 500mm",
    price: 20,
    img: rentserviceimg,
  },
    {
    id: 4,
    title: "Rectangular Lifting Magnet",
    type: "Permanent Magnet",
    liftCapacity: "3 Tons",
    powerSupply: "None Required",
    sizes: "500mm / 800mm / 1000mm",
    price: 30,
    img: rentserviceimg,
  },
  {
    id: 5,
    title: "Bespoke Lifting Magnet",
    type: "Custom Coil",
    liftCapacity: "Varied",
    powerSupply: "Custom",
    sizes: "Custom Sizes Available",
    price: 100,
    img: rentserviceimg,
  },
  {
    id: 6,
    title: "Mini Lifting Magnet",
    type: "Coil",
    liftCapacity: "1 Ton",
    powerSupply: "220V",
    sizes: "300mm / 500mm",
    price: 20,
    img: rentserviceimg,
  },
];