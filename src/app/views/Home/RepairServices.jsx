import React, { useState, useEffect } from 'react';
import {
  Box, Grid, Typography, Button, Chip, Paper, Card,
  CardMedia, CardContent, Link, IconButton, Accordion, AccordionSummary, TextField,
  InputAdornment, AccordionDetails, useTheme
} from '@mui/material';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useNavigate } from 'react-router-dom';
import { typography, RefluxSvg } from 'app/utils/constant';
import Footer from 'app/components/Card/Footer';
import EditIcon from "@mui/icons-material/Edit";


const ServiceCard = ({
  contentId = "C013",
  image,
  imageId,
  title,
  titleId,
  overlayTitle,
  overlayId,
  commonFault,
  commonFaultId,
  faults = [],
  faultsId,
  service,
  serviceId,
  serviceValue,
  serviceValueId,
  imageLeft = true,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [isAdmin, setIsAdmin] = useState(false);

  // ✅ Check admin role
  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  // ✅ Edit navigation (correctly uses passed ID)
  const handleEdit = (contentTextID, type = "T") => {
    navigate(
      `/CmsEditor?contentId=${contentId}&contentTextID=${contentTextID}&contentType=${type}`
    );
  };

  // ✅ Edit icon button
  const EditIconButton = ({ id, type = "T", position = "inline" }) =>
    isAdmin ? (
      <IconButton
        size="small"
        onClick={() => handleEdit(id, type)}
        sx={{
          position: position === "absolute" ? "absolute" : "static",
          top: position === "absolute" ? 8 : "auto",
          right: position === "absolute" ? 8 : "auto",
          ml: position === "inline" ? 1 : 0,
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

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#fbfbfb",
        borderRadius: "10px",
        p: 4,
        width: "1197px",
        mx: "auto",
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
              "@media (max-width: 900px)": {
                width: "100%",
                height: "260px",
              },
            }}
          >
            {/* ✅ Image Edit Button (Top-Right Corner) */}
            <Box sx={{ position: "absolute", top: 8, right: 8, zIndex: 2 }}>
              <EditIconButton id={imageId} type="I" />
            </Box>

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
              <Typography
                sx={{
                  ...typography.h4,
                  fontWeight: 400,
                  fontSize: "24px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {overlayTitle}
                <EditIconButton id={overlayId} />
              </Typography>
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
          <Typography
            sx={{
              ...typography.h2,
              fontWeight: 600,
              fontSize: "32px",
              color: "#1A2438",
              mb: 3,
              display: "flex",
              alignItems: "center",
            }}
          >
            {title}
            <EditIconButton id={titleId} />
          </Typography>

          {/* Common Fault */}
          <Typography
            sx={{
              ...typography.h4,
              fontWeight: 700,
              fontSize: "24px",
              color: "#49576F",
              mb: 3,
              display: "flex",
              alignItems: "center",
            }}
          >
            {commonFault}
            {/* ✅ Single Edit button for all faults together */}
            <EditIconButton id={commonFaultId} />
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
            {(Array.isArray(faults) ? faults : []).map((fault, index) => (
              <Chip
                key={index}
                label={fault}
                variant="outlined"
                sx={{
                  // width: "202px",
                  padding: '15px',
                  height: 44,
                  fontWeight: 500,
                  fontSize: "20px",
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

          {/* Service Highlights */}
          <Typography
            sx={{
              ...typography.h5,
              color: "#0E1626",
              marginTop: "3%",
              display: "flex",
              alignItems: "center",
              "@media (max-width: 900px)": {
                marginTop: "2%",
              },
            }}
          >
            <strong>{service}</strong>
            <EditIconButton id={serviceId} />
          </Typography>

          <Typography
            sx={{
              ...typography.h5,
              color: "#0E1626",
              marginTop: "1%",
              display: "flex",
              alignItems: "center",
            }}
          >
            {serviceValue}
            <EditIconButton id={serviceValueId} />
          </Typography>

          {/* Button */}
          <Button
            onClick={() => navigate("/home/RepairServicesPage")}
            variant="contained"
            sx={{
              backgroundColor: "#1C2D4B",
              borderRadius: "12px",
              textTransform: "none",
              px: 5,
              py: 2,
              mt: "54px",
              fontSize: "18px",
              width: "622px",
              height: "50px",
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

  const [expanded, setExpanded] = useState(null);

  const navigate = useNavigate()

  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  //  Load content
  useEffect(() => {
    const apiUrl =
      "https://skillglow.bexatm.com/ATM/ContentManageSysV1.php?contentId=C013";
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
      `/CmsEditor?contentId=C013&contentTextID=${contentTextID}&contentType=${type}`
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

  //ROI Calculator
  const roiData = [
    {
      image: `https://skillglow.bexatm.com${content.RS1053}`,
      title: content.RS1054,
      description: content.RS1055,
      ids: { image: "RS1053", title: "RS1054", desc: "RS1055" },
    },
    {
      image: `https://skillglow.bexatm.com${content.RS1056}`,
      title: content.RS1057,
      description: content.RS1058,
      ids: { image: "RS1056", title: "RS1057", desc: "RS1058" },
    },]



  const handleChange = (index) => {
    setExpanded(expanded === index ? null : index);
  };


  const blogData = [
    {
      title: content.RS1101,
      author: content.RS1102,
      date: content.RS1103,
      image: `https://skillglow.bexatm.com${content.RS1104}`,
    },
    {
      title: content.RS1106,
      author: content.RS1107,
      date: content.RS1108,
      image: `https://skillglow.bexatm.com${content.RS1109}`,
    },
    {
      title: content.RS1110,
      author: content.RS1111,
      date: content.RS1112,
      image: `https://skillglow.bexatm.com${content.RS1113}`,
    },
    {
      title: content.RS1114,
      author: content.RS1115,
      date: content.RS1116,
      image: `https://skillglow.bexatm.com${content.RS1117}`,
    },
  ];



  return (
    <>
      {/* Top Image */}
      <Box sx={topImageStyle}>
        <Box
          component="img"
          src={`https://skillglow.bexatm.com${content.RS1002}`} style={imageStyle}
        />
        <Box sx={{ position: "absolute", top: 8, right: 8, zIndex: 2 }}>
          <EditIconButton id="RS1002" type="I" />
        </Box>

        <Box sx={overlayBoxStyle} >
          <Typography sx={{ ...typography.h3, color: '#000000' }}>{content.RS1001} <EditIconButton id="RS1001" /></Typography>
        </Box>
      </Box>

      {/* Top Text Section */}
      <Box sx={{ padding: '30px 150px' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={12}>
            <Typography sx={{ width: '1076px', ...typography.h1, fontWeight: 600, fontSize: '40px', color: '#1A2438' }}>
              {content.RS1003}
              <EditIconButton id="RS1003" />
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} >
            <Typography sx={{ ...theme.typography.bodyBase, fontFamily: 'Fira Sans', fontWeight: 400, color: '#99A0AE', width: '1009px', }}>
              {content.RS1004}
              <EditIconButton id="RS1004" />
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Service Cards Section */}
      <Box sx={{ padding: '0 10px 10px' }}>
        <ServiceCard
          contentId="C013"
          image={`https://skillglow.bexatm.com${content.RS1005}`}
          imageId="RS1005"
          title={content.RS1006}
          titleId="RS1006"
          overlayTitle={content.RS1007}
          overlayId="RS1007"
          commonFault={content.RS1008}
          commonFaultId="RS1008"
          faults={content.RS1009}
          faultsId="RS1009"
          service={content.RS1010}
          serviceId="RS1010"
          serviceValue={content.RS1011}
          serviceValueId="RS1011"
          imageLeft={true}
        />

        <ServiceCard
          contentId="C013"
          image={`https://skillglow.bexatm.com${content.RS1014}`}
          imageId="RS1014"
          title={content.RS1016}
          titleId="RS1016"
          overlayTitle={content.RS1015}
          overlayId="RS1015"
          commonFault={content.RS1017}
          commonFaultId="RS1017"
          faults={content.RS1018}
          faultsId="RS1018"
          service={content.RS1019}
          serviceId="RS1019"
          serviceValue={content.RS1020}
          serviceValueId="RS1020"
          imageLeft={false}
        />

        <ServiceCard
          contentId="C013"
          image={`https://skillglow.bexatm.com${content.RS1023}`}
          imageId="RS1023"
          title={content.RS1025}
          titleId="RS1025"
          overlayTitle={content.RS1024}
          overlayId="RS1024"
          commonFault={content.RS1026}
          commonFaultId="RS1026"
          faults={content.RS1027}
          faultsId="RS1027"
          service={content.RS1028}
          serviceId="RS1028"
          serviceValue={content.RS1029}
          serviceValueId="RS1029"
          imageLeft={true}
        />

        <ServiceCard
          contentId="C013"
          image={`https://skillglow.bexatm.com${content.RS1032}`}
          imageId="RS1032"
          title={content.RS1034}
          titleId="RS1034"
          overlayTitle={content.RS1033}
          overlayId="RS1033"
          commonFault={content.RS1035}
          commonFaultId="RS1035"
          faults={content.RS1036}
          faultsId="RS1036"
          service={content.RS1037}
          serviceId="RS1037"
          serviceValue={content.RS1038}
          serviceValueId="RS1038"
          imageLeft={false}
        />

        <ServiceCard
          contentId="C013"
          image={`https://skillglow.bexatm.com${content.RS1041}`}
          imageId="RS1041"
          overlayTitle={content.RS1042}
          overlayId="RS1042"
          title={content.RS1043}
          titleId="RS1043"
          commonFault={content.RS1044}
          commonFaultId="RS1044"
          faults={content.RS1045}
          faultsId="RS1045"
          service={content.RS1046}
          serviceId="RS1046"
          serviceValue={content.RS1047}
          serviceValueId="RS1047"
          imageLeft={true}
        />


      </Box>


      {/* //ROI Calculator */}
      <Box sx={{ p: 5 }}>
        <Box sx={{ mt: 8 }}>
          {/* Section Title */}
          <Typography
            gutterBottom
            sx={{
              ...theme.typography.displayL,
              fontWeight: 700,
              fontSize: "56px",
              color: "#1C2D4B",
              ml: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            {content.RS1050}
            <EditIconButton id="RS1050" />
          </Typography>

          {/* Section Description */}
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              color: "#99A0AE",
              ml: 2,
              ...theme.typography.h4,
              display: "flex",
              alignItems: "center",
            }}
          >
            {content.RS1051}
            <EditIconButton id="RS1051" />
          </Typography>

          {/* View All Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
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
                ...theme.typography.h3,
                color: "#2F6FBA",
                textDecoration: "underline",
              }}
            >
              {content.RS1052}
              <EditIconButton id="RS1052" />
              <ArrowRightAltIcon sx={{ ml: 1, fontSize: "2.5rem" }} />
            </Typography>
          </Box>

          {/* ROI Cards */}
          <Grid container spacing={4}>
            {roiData.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: 3,
                    height: "400px",
                  }}
                >
                  <Box sx={{ position: "absolute", top: 8, right: 8, zIndex: 2 }}>
                    <EditIconButton id={item.ids.image} type="I" />
                  </Box>

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
                        sx={{
                          ...theme.typography.h4,
                          fontWeight: 700,
                          fontSize: "24px",
                          color: "#0B121E",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {item.title}
                        <EditIconButton id={item.ids.title} />
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
                      sx={{
                        ...theme.typography.bodyBase,
                        color: "#99A0AE",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {item.description}
                      <EditIconButton id={item.ids.desc} />
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Resale Service */}
      <Box sx={{ px: '5%', pb: 10 }}>
        {/* Heading */}
        <Box sx={{ mb: 4 }}>
          <Button
            disableElevation
            disableRipple
            sx={{
              ...typography.bodySmall,
              mb: 2,
              textTransform: "none",
              fontWeight: 400,
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
              fontSize: { xs: "12px", md: "14px" },
            }}
          >
            {content.RS1059} <EditIconButton id="RS1059" />
          </Button>

          <Typography sx={{ ...typography.displayL, fontWeight: 700, color: '#1A2438' }}>
            {content.RS1060} <EditIconButton id="RS1060" />
          </Typography>

          <Typography sx={{ ...typography.h4, color: '#99A0AE' }}>
            {content.RS1061} <EditIconButton id="RS1061" />
          </Typography>
        </Box>

        {/* Product Cards */}
        <Grid container spacing={4}>
          {[
            {
              img: content.RS1062,
              title: content.RS1063,
              subtitle: content.RS1064,
              price: content.RS1065,
              lift: content.RS1066,
              power: content.RS1067,
              details: content.RS1068,
              ids: ["RS1062", "RS1063", "RS1064", "RS1065", "RS1066", "RS1067", "RS1068"]
            },
            {
              img: content.RS1069,
              title: content.RS1070,
              subtitle: content.RS1071,
              price: content.RS1072,
              lift: content.RS1073,
              power: content.RS1074,
              details: content.RS1075,
              ids: ["RS1069", "RS1070", "RS1071", "RS1072", "RS1073", "RS1074", "RS1075"]
            },
            {
              img: content.RS1076,
              title: content.RS1077,
              subtitle: content.RS1078,
              price: content.RS1079,
              lift: content.RS1080,
              power: content.RS1081,
              details: content.RS1082,
              ids: ["RS1076", "RS1077", "RS1078", "RS1079", "RS1080", "RS1081", "RS1082"]
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
                      >
                        {p.lift} <EditIconButton id={p.ids[4]} />
                      </Typography>
                      <Typography sx={{ ...typography.h5, fontWeight: 500, color: "#0E1626" }}>
                        Lift Capacity
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
                      View Details <EditIconButton id={p.ids[6]} />
                    </Typography>
                    <Typography sx={{ ...typography.h5, fontWeight: 500, color: "#677489" }}>
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

        {/* View All Link */}
        <Box
          sx={{
            mt: 6,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 1, // small space between text and icon
          }}
        >
          {/* Clickable Text */}
          <Typography
            sx={{
              ...typography.h3,
              color: "#2F6FBA",
              fontWeight: 600,
              fontSize: "22px",
              textDecoration: "underline",
              cursor: "pointer",
              "&:hover": {
                color: "#174a99",
              },
            }}
            onClick={() => navigate("/home/SellMagnet")}
          >
            {content.RS1083}
          </Typography>

          {/* Edit icon separate click */}
          <EditIconButton id="RS1083" />
        </Box>


      </Box>




      {/* FAQs Section */}
      <Box sx={{ px: 2, py: 2 }}>
        {/* Section Header */}
        <Button
          disableElevation
          disableRipple
          sx={{
            color: '#2F6FBA',
            backgroundColor: "#EAF3FC",
            borderRadius: "20px",
            height: '33px',
            ml: 8,
            boxShadow: "none",
            px: 2,
            display: 'flex',
            alignItems: 'center',
            "&:hover": {
              backgroundColor: "rgba(36,121,233,0.15)",
              boxShadow: "none",
            },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography
              sx={{
                ...typography.bodySmall,
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '150%',
                letterSpacing: '0.14%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {content.RS1084}
            </Typography>
            <EditIconButton id="RS1084" />
          </Box>
        </Button>


        <Typography
          sx={{
            ml: 8,
            ...typography.displayL,
            color: '#1C2D4B',
            fontWeight: 'bold',
          }}
          variant="h3"
          gutterBottom
        >
          {content.RS1085} <EditIconButton id="RS1085" />
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: '#1C2D4B',
            ...typography.h4,
            ml: 8,
            mb: 3,
          }}
        >
          {content.RS1086} <EditIconButton id="RS1086" />
        </Typography>

        {/* Accordion Section */}
        <Box sx={{ px: 8, py: 3 }}>
          {[
            { q: "RS1087", a: "RS1088" },
            { q: "RS1089", a: "RS1090" },
            { q: "RS1091", a: "RS1092" },
            { q: "RS1093", a: "RS1094" },
            { q: "RS1095", a: "RS1096" },
          ].map((faq, index) => (
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
                  {content[faq.q]} <EditIconButton id={faq.q} />
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ ...typography.bodyBase, color: '#0E1109' }}>
                  {content[faq.a]} <EditIconButton id={faq.a} />
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
          {content.RS1097}
          <EditIconButton id="RS1097" />
        </Button>

        <Typography
          sx={{ ...typography.displayL, color: "#1C2D4B", display: "flex", alignItems: "center", gap: 1 }}
          variant="h3"
          fontWeight="bold"
          gutterBottom
        >
          {content.RS1098}
          <EditIconButton id="RS1098" />
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
          {content.RS1099}
          <EditIconButton id="RS1099" />
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
                  <EditIconButton id="RS1104" type="I" />
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
                  <EditIconButton id="RS1101" />
                </Typography>
                <Typography
                  sx={{ ...typography?.bodyBase, color: "#677489", display: "flex", alignItems: "center", gap: 1 }}
                >
                  {blogData[0].author} <EditIconButton id="RS1102" /> • {blogData[0].date} <EditIconButton id="RS1103" />
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
                const base = 1106 + idx * 4; // auto increment RS keys per card
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
                          <EditIconButton id={`RS${base + 3}`} type="I" />
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
                          <EditIconButton id={`RS${base}`} />
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
                          {item.author} <EditIconButton id={`RS${base + 1}`} /> • {item.date}{" "}
                          <EditIconButton id={`RS${base + 2}`} />
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





