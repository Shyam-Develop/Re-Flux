import {
  Box, Button, Divider, Grid, Modal, Typography, useMediaQuery, useTheme, Paper, TextField,
  MenuItem, Card,
  CardMedia, IconButton,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Brand1 from '../../../assets/Brand1.png';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Rentinstead from "../../../assets/Rentinstaed.jpg";
import { typography } from "app/utils/constant";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ROIimage from '../../../assets/ROICalculator.jpg';
import EquipmentSwiper from "app/components/Card/RepairReplaceCard";
import Repair from "../../../assets/RRimage.jpg"
import { Link, useNavigate } from "react-router-dom";
import Footer from 'app/components/Card/Footer';
import SellRentServicesCard from "app/components/Card/SellRentServicesCard";
import HandshakeIcon from "@mui/icons-material/Handshake";
import EditIcon from "@mui/icons-material/Edit";

const validationSchema = Yup.object().shape({
  project1: Yup.string().required("Required"),
  project2: Yup.string().required("Required"),
  status1: Yup.string().required("Required"),
  status2: Yup.string().required("Required"),
});

const productionStatusOptions = [
  { value: "running", label: "Running" },
  { value: "stopped", label: "Stopped" },
  { value: "maintenance", label: "Maintenance" },
];

const services = [
  {
    id: 1,
    title: "Circular Lifting Magnet",
    type: "Coil",
    subtitile: "Per day",
    icon: HandshakeIcon,
    img: Rentinstead,
    price: 25,
    liftCapacity: "2.5 tons",
    powerSupply: "220V / 110V",
    sizeOptions: '700mm / 890mm /120mm',
    sizes: "220V / 110V",
  },
  {
    id: 2,
    title: "Circular Lifting Magnet",
    type: "Coil",
    subtitile: "Per day",
    icon: HandshakeIcon,
    img: Rentinstead,
    price: 25,
    liftCapacity: "2.5 tons",
    powerSupply: "220V / 110V",
    sizeOptions: '700mm / 890mm /120mm',
    sizes: "220V / 110V",
  },
  {
    id: 3,
    title: "Circular Lifting Magnet",
    type: "Coil",
    subtitile: "Per day",
    icon: HandshakeIcon,
    img: Rentinstead,
    price: 25,
    liftCapacity: "2.5 tons",
    powerSupply: "220V / 110V",
    sizeOptions: '700mm / 890mm /120mm',
    sizes: "220V / 110V",
  },
  {
    id: 4,
    title: "Circular Lifting Magnet",
    type: "Coil",
    subtitile: "Per day",
    icon: HandshakeIcon,
    img: Rentinstead,
    price: 25,
    liftCapacity: "2.5 tons",
    powerSupply: "220V / 110V",
    sizeOptions: '700mm / 890mm /120mm',
    sizes: "220V / 110V",
  },
  {
    id: 5,
    title: "Circular Lifting Magnet",
    type: "Coil",
    subtitile: "Per day",
    icon: HandshakeIcon,
    img: Rentinstead,
    price: 25,
    liftCapacity: "2.5 tons",
    powerSupply: "220V / 110V",
    sizeOptions: '700mm / 890mm /120mm',
    sizes: "220V / 110V",
  },
  {
    id: 6,
    title: "Circular Lifting Magnet",
    type: "Coil",
    subtitile: "Per day",
    icon: HandshakeIcon,
    img: Rentinstead,
    price: 25,
    liftCapacity: "2.5 tons",
    powerSupply: "220V / 110V",
    sizeOptions: '700mm / 890mm /120mm',
    sizes: "220V / 110V",
  },
];

const RepairReplace = () => {

  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");


  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const apiUrl =
      "https://skillglow.bexatm.com/ATM/ContentManageSysV1.php?contentId=C007";
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setContent(data))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  const handleEdit = (contentTextID, type = "T") => {
    navigate(
      `/CmsEditor?contentId=C007&contentTextID=${contentTextID}&contentType=${type}`
    );
  };

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
            //borderColor: "#214870",
          },
          verticalAlign: "middle",
        }}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    ) : null;


  if (!content) return null;


  const roiData = [
    {
      image: { id: "RR4004", value: content.RR4004 },
      name: { id: "RR4005", value: content.RR4005 },
      desc: { id: "RR4006", value: content.RR4006 },
    },
    {
      image: { id: "RR4007", value: content.RR4007 },
      name: { id: "RR4008", value: content.RR4008 },
      desc: { id: "RR4009", value: content.RR4009 },
    },
  ];


  return (
    <Box
      display="grid"
      gap="20px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      sx={{
        "& > div": {
          gridColumn: isNonMobile ? undefined : "span 4",
        },
        padding: "10px",
      }}
    >

      <Box sx={{ gridColumn: "span 4", p: 2 }}>
        <Box
          sx={{
            width: "1360px",
            height: "auto",
            gap: "21px",
            transform: "rotate(0deg)",
            opacity: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            boxSizing: "border-box",
            "@media (max-width: 1200px)": {
              width: "100%",
              padding: "0 40px",
            },
            "@media (max-width: 900px)": {
              alignItems: "center",
              textAlign: "center",
              padding: "0 20px",
              height: "auto",
              gap: "16px",
            },
          }}
        >
          {/* --- Title --- */}
          <Typography
            sx={{
              ...typography.displayL,
              fontWeight: 700,
              fontSize: "56px",
              color: "#1C2D4B",
              textAlign: "left",
              "@media (max-width: 900px)": {
                fontSize: "32px",
                lineHeight: "40px",
                textAlign: "center",
              },
            }}
          >
            {content.RR1001}
            <EditIconButton id="RR1001" />
          </Typography>

          {/* --- Subtitle --- */}
          <Typography
            sx={{
              ...typography.h5,
              color: "#49576F",
              textAlign: "left",
              mb: 3,
              "@media (max-width: 900px)": {
                fontSize: "16px",
                lineHeight: "24px",
                textAlign: "center",
                mb: 2,
              },
            }}
          >
            {content.RR1002}
            <EditIconButton id="RR1002" />
          </Typography>
        </Box>

        {/* //====================SECTION-2(FORM)=================================// */}
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            borderRadius: "16px",
            p: 4, // ✅ equal padding on all sides (theme.spacing(4) ~ 32px)
            backgroundColor: "#0a2141",
            color: "white",
            opacity: 1,
          }}
        >
          <Typography sx={{
            ...typography.displayL,
            color: "#F1F2F4"
          }}>
            {content.RR2001}
            <EditIconButton id="RR2001" />
          </Typography>

          <Formik
            initialValues={{
              project1: "",
              project2: "",
              status1: "",
              status2: "",
              project3: "",
              project4: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log("Form Values:", values);
            }}
          >
            {({ values, handleChange, touched, errors }) => (
              <Form>
                <Grid container spacing={2}>
                  {/* Row 1 */}
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      width: 636,
                      height: 90,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1, // 8px gap
                      opacity: 1,
                    }}
                  >
                    <Typography sx={{
                      ...typography.h5,
                      color: "#F1F2F4"
                    }}>
                      {content.RR2002}
                      <EditIconButton id="RR2002" />
                    </Typography>
                    <TextField
                      fullWidth
                      //   label="Project title"
                      name="project1"
                      placeholder="Ex: John"
                      value={values.project1}
                      onChange={handleChange}
                      error={touched.project1 && Boolean(errors.project1)}
                      helperText={touched.project1 && errors.project1}
                      InputLabelProps={{ style: { color: "white" } }}
                      sx={{
                        backgroundColor: "white",
                        borderRadius: 1,
                      }}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      width: 636,
                      height: 90,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1, // 8px gap
                      opacity: 1,
                    }}
                  >
                    <Typography sx={{
                      ...typography.h5,
                      color: "#F1F2F4"
                    }}>
                      {content.RR2002}
                      <EditIconButton id="RR2002" />
                    </Typography>
                    <TextField
                      fullWidth
                      //   label="Project title"
                      name="project2"
                      placeholder="Ex: John"
                      value={values.project2}
                      onChange={handleChange}
                      error={touched.project2 && Boolean(errors.project2)}
                      helperText={touched.project2 && errors.project2}
                      InputLabelProps={{ style: { color: "white" } }}
                      sx={{
                        backgroundColor: "white",
                        borderRadius: 1,
                      }}
                    />
                  </Grid>

                  {/* Row 2 */}
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      width: 636,
                      height: 90,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1, // 8px gap
                      opacity: 1,
                    }}
                  >
                    <Typography sx={{
                      ...typography.h5,
                      color: "#F1F2F4"
                    }}>
                      {content.RR2002}
                      <EditIconButton id="RR2002" />
                    </Typography>
                    <TextField
                      select
                      fullWidth
                      //   label="Production status"
                      name="status1"
                      value={values.status1}
                      onChange={handleChange}
                      error={touched.status1 && Boolean(errors.status1)}
                      helperText={touched.status1 && errors.status1}
                      InputLabelProps={{ style: { color: "white" } }}
                      sx={{
                        backgroundColor: "white",
                        borderRadius: 1,
                      }}
                    >
                      {productionStatusOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      width: 636,
                      height: 90,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1, // 8px gap
                      opacity: 1,
                    }}
                  >
                    <Typography sx={{
                      ...typography.h5,
                      color: "#F1F2F4"
                    }}>
                      {content.RR2003}
                      <EditIconButton id="RR2003" />
                    </Typography>
                    <TextField
                      select
                      fullWidth
                      //   label="Production status"
                      name="status2"
                      value={values.status2}
                      onChange={handleChange}
                      error={touched.status2 && Boolean(errors.status2)}
                      helperText={touched.status2 && errors.status2}
                      InputLabelProps={{ style: { color: "white" } }}
                      sx={{
                        backgroundColor: "white",
                        borderRadius: 1,
                      }}
                    >
                      {productionStatusOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  {/* Row 3 */}
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      width: 636,
                      height: 90,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1, // 8px gap
                      opacity: 1,
                    }}
                  >
                    <Typography sx={{
                      ...typography.h5,
                      color: "#F1F2F4"
                    }}>
                      {content.RR2003}
                      <EditIconButton id="RR2003" />
                    </Typography>
                    <TextField
                      fullWidth
                      //   label="Project title"
                      name="project3"
                      placeholder="Ex: John"
                      value={values.project3}
                      onChange={handleChange}
                      InputLabelProps={{ style: { color: "white" } }}
                      sx={{
                        backgroundColor: "white",
                        borderRadius: 1,
                      }}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      width: 636,
                      height: 90,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1, // 8px gap
                      opacity: 1,
                    }}
                  >
                    <Typography sx={{
                      ...typography.h5,
                      color: "#F1F2F4"
                    }}>
                      {content.RR2003}
                      <EditIconButton id="RR2003" />
                    </Typography>
                    <TextField
                      fullWidth
                      //   label="Project title"
                      name="project4"
                      placeholder="Ex: John"
                      value={values.project4}
                      onChange={handleChange}
                      InputLabelProps={{ style: { color: "white" } }}
                      sx={{
                        backgroundColor: "white",
                        borderRadius: 1,
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      width: 636,
                      height: 90,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1, // 8px gap
                      opacity: 1,
                    }}
                  >
                    <Typography sx={{
                      ...typography.h5,
                      color: "#F1F2F4"
                    }}>
                      {content.RR2002}
                      <EditIconButton id="RR2002" />
                    </Typography>
                    <TextField
                      fullWidth
                      //   label="Project title"
                      name="project4"
                      placeholder="Ex: John"
                      value={values.project4}
                      onChange={handleChange}
                      InputLabelProps={{ style: { color: "white" } }}
                      sx={{
                        backgroundColor: "white",
                        borderRadius: 1,
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      width: 636,
                      height: 90,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1, // 8px gap
                      opacity: 1,
                    }}
                  >
                    <Typography sx={{
                      ...typography.h5,
                      color: "#F1F2F4"
                    }}>
                      {content.RR2002}
                      <EditIconButton id="RR2002" />
                    </Typography>
                    <TextField
                      fullWidth
                      //   label="Project title"
                      name="project4"
                      placeholder="Ex: John"
                      value={values.project4}
                      onChange={handleChange}
                      InputLabelProps={{ style: { color: "white" } }}
                      sx={{
                        backgroundColor: "white",
                        borderRadius: 1,
                      }}
                    />
                  </Grid>

                  {/* Submit Button */}
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        ...typography.bodyStrong,
                        width: "100%",
                        height: 65,
                        backgroundColor: "#FAE255",
                        color: "#1B2F43",
                        borderRadius: "30px", // ✅ matches design
                        // px: "30px",           // padding-left + padding-right
                        // py: "18px",           // padding-top + padding-bottom
                        // gap: "10px",
                        opacity: 1,
                        "&:hover": {
                          backgroundColor: "#FAE255", // slightly darker gold on hover
                        },
                      }}
                    >
                      {content.RR2004}
                      <EditIconButton id="RR2004" />
                    </Button>

                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Paper>
        {/* //====================SECTION-3(RESULTS)=================================// */}

        <Paper
          elevation={3}
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            // gap: "32px",
            borderRadius: "16px",
            p: 2, // ✅ equal padding on all sides (theme.spacing(4) ~ 32px)
            backgroundColor: "#0a2141",
            color: "white",
            opacity: 1,
          }}
        >
          {/* Title Section */}
          <Typography sx={{
            ...typography.displayL,
            color: "#F1F2F4"
          }} gutterBottom>
            {content.RR3001}
            <EditIconButton id="RR3001" />
          </Typography>
          <Typography sx={{
            ...typography.h4,
            color: "#F1F2F4"
          }} gutterBottom>
            {content.RR3002}
            <EditIconButton id="RR3002" />
          </Typography>
          <Typography sx={{
            ...typography.h3,
            color: "#F1F2F4"
          }} gutterBottom>
            {content.RR3003}
            <EditIconButton id="RR3003" />
          </Typography>

          <Divider sx={{ my: 1, borderColor: "rgba(255,255,255,0.2)" }} />

          {/* Estimated Savings */}
          <Typography sx={{
            ...typography.h4,
            color: "#F1F2F4"
          }} gutterBottom>
            {content.RR3004}
            <EditIconButton id="RR3004" />
          </Typography>
          <Typography sx={{
            ...typography.h3,
            color: "#F1F2F4"
          }} gutterBottom>
            {content.RR3005}
            <EditIconButton id="RR3005" />
          </Typography>
          <Divider sx={{ my: 1, borderColor: "rgba(255,255,255,0.2)" }} />
          {/* Table-like layout */}
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={4}>
              <Typography sx={{
                ...typography.h4,
                color: "#F1F2F4"
              }}>
                {content.RR3006}
                <EditIconButton id="RR3006" />
              </Typography>
              <Typography mt={2} sx={{
                ...typography.h5,
                color: "#F1F2F4"
              }}>{content.RR3007}
                <EditIconButton id="RR3007" /></Typography>
              <Typography mt={2} sx={{
                ...typography.h5,
                color: "#F1F2F4"
              }}>{content.RR3008}
                <EditIconButton id="RR3008" /></Typography>
              <Typography mt={2} sx={{
                ...typography.h5,
                color: "#F1F2F4"
              }}>{content.RR3009}
                <EditIconButton id="RR3009" /></Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography sx={{
                ...typography.h4,
                color: "#F1F2F4"
              }}>
                {content.RR30010}
                <EditIconButton id="RR30010" />
              </Typography>
              <Typography mt={2} sx={{
                ...typography.h5,
                color: "#F1F2F4"
              }}>{content.RR30011}
                <EditIconButton id="RR30011" /></Typography>
              <Typography mt={2} sx={{
                ...typography.h5,
                color: "#F1F2F4"
              }}>{content.RR30012}
                <EditIconButton id="RR30012" /></Typography>
              <Typography mt={2} sx={{
                ...typography.h5,
                color: "#F1F2F4"
              }}>{content.RR30013}
                <EditIconButton id="RR30013" /></Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography sx={{
                ...typography.h4,
                color: "#F1F2F4"
              }}>
                {content.RR30014}
                <EditIconButton id="RR30014" />
              </Typography>
              <Typography mt={2} sx={{
                ...typography.h5,
                color: "#F1F2F4"
              }}>{content.RR30015}
                <EditIconButton id="RR30015" /></Typography>
              <Typography mt={2} sx={{
                ...typography.h5,
                color: "#F1F2F4"
              }}>{content.RR30016}
                <EditIconButton id="RR30016" /></Typography>
              <Typography mt={2} sx={{
                ...typography.h5,
                color: "#F1F2F4"
              }}>{content.RR30017}
                <EditIconButton id="RR30017" /></Typography>
            </Grid>
          </Grid>

          {/* Footer Links */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 6,
            }}
          >
            <Link href="#" underline="hover" color="inherit" sx={{
              ...typography.h4,
              color: "#F1F2F4"
            }}>
              {content.RR30018}
              <EditIconButton id="RR30018" />
            </Link>
            <Button variant="text" sx={{
              ...typography.h4,
              color: "#F1F2F4"
            }}>
              {content.RR30019}
              <EditIconButton id="RR30019" />
            </Button>
          </Box>
        </Paper>

        {/* //====================SECTION-4(ROI-CALCULATOR)=================================// */}

        <Box
          sx={{
            width: "100%",
            maxWidth: 1280,
            mx: "auto",
            py: { xs: 3, sm: 5 }, // less padding on mobile
          }}
        >
          {/* Title & Description */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxWidth: 1280,
              px: { xs: 2, sm: 8 }, // responsive padding
              gap: { xs: 2, sm: 4 },
              textAlign: "left",
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{ ...typography.displayL, color: "#1C2D4B", fontSize: { xs: "2rem", sm: typography.displayL.fontSize } }}
              gutterBottom
            >
              {content.RR4001}
              <EditIconButton id="RR4001" />
            </Typography>
            <Typography
              sx={{
                ...typography.h4,
                mb: { xs: 2, sm: 4 },
                color: "#99A0AE",
                fontSize: { xs: "0.875rem", sm: typography.h4.fontSize },
              }}
            >
              {content.RR4002}
              <EditIconButton id="RR4002" />
            </Typography>
          </Box>

          {/* View All Link */}
          <Box display="flex" justifyContent="flex-end" alignItems="center" sx={{ mb: { xs: 2, sm: 3 } }}>
            <Typography
              component={Link}
              to="/repair-replace/roi-cal"
              sx={{
                ...typography.h3,
                color: "#2F6FBA",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                fontSize: { xs: "0.875rem", sm: typography.h3.fontSize },
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {content.RR4003}

              <ArrowRightAltIcon sx={{ fontSize: { xs: "1.5rem", sm: "2rem" }, ml: 1 }} />
            </Typography>
            <EditIconButton id="RR4003" />
          </Box>

          {/* Cards */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 2, sm: 3 },
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            {roiData.map((item, index) => (
              <Card
                key={index}
                sx={{
                  position: "relative",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: 3,
                  width: { xs: "100%", sm: 588 },
                  height: { xs: 300, sm: 400 },
                  flex: "0 1 auto",
                }}
              >
                {/* Background Image */}
                <Box sx={{ position: "relative", height: "100%" }}>
                  <CardMedia
                    component="img"
                    image={`https://skillglow.bexatm.com${item.image.value}`}
                    alt={item.name.value}
                    sx={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {/* Edit Icon on Image */}
                  {item.image.value && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        zIndex: 2,
                      }}
                    >
                      <EditIconButton id={item.image.id} type="I" />
                    </Box>
                  )}
                </Box>

                {/* Overlay White Card */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    right: 16,
                    bgcolor: "white",
                    borderRadius: 2,
                    boxShadow: 1,
                    px: 2,
                    py: 1.5,
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.5,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "#0b2d55",
                      color: "white",
                      "& .MuiTypography-root": { color: "white" },
                      "& .MuiIconButton-root": {
                        bgcolor: "#4487ebff",
                        color: "white",
                      },
                    },
                  }}
                >
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography sx={{ ...typography.h4, color: "#0B121E" }}>
                      {item.name.value}
                      <EditIconButton id={item.name.id} />
                    </Typography>
                    <IconButton
                      size="small"
                      sx={{
                        backgroundColor: "#f0f0f0",
                        width: 36,
                        height: 36,
                      }}
                    >
                      <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                  </Box>

                  <Typography sx={{ ...typography.bodyBase, color: "#99A0AE" }}>
                    {item.desc.value}
                    <EditIconButton id={item.desc.id} />
                  </Typography>
                </Box>
              </Card>
            ))}



          </Box>
        </Box>


        {/* //====================SECTION-5(RENT-CALCULATOR)=================================// */}
        <Box>
          <SellRentServicesCard services={services} />
        </Box>

        {/* Footer Section */}
        <Box >
          <Footer />
        </Box>
      </Box>
    </Box>


  );
};
export default RepairReplace;



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
//   },];

const cardData = [
  {
    id: 1,
    title: "Circular Lifting Magnet",
    price: 25,
    liftCapacity: "2.5 Tons",
    powerSupply: ["220V / 110V"],
    size: "700mm / 900mm / 1200mm",
    img: Repair,
    status: ["Available for Rent", "Safety Tested"],
    sizes: "700mm/900mm/1200mm"
  },
  {
    id: 2,
    title: "Hydraulic Jack",
    price: 40,
    liftCapacity: "5 Tons",
    powerSupply: ["220V"],
    size: "Standard",
    img: Repair,
    status: ["Available for Rent", "Certified"],
    sizes: "700mm/900mm/1200mm"
  },
  {
    id: 3,
    title: "Excavator Bucket",
    price: 60,
    liftCapacity: "10 Tons",
    powerSupply: ["N/A"],
    size: "Large",
    img: Repair,
    status: ["Available for Rent"],
    sizes: "700mm/900mm/1200mm"
  },
  {
    id: 4,
    title: "Portable Generator",
    price: 30,
    liftCapacity: "3.5 KW",
    powerSupply: ["220V / 110V"],
    size: "Compact",
    img: Repair,
    status: ["Safety Tested"],
    sizes: "700mm/900mm/1200mm"
  },
  {
    id: 5,
    title: "Tower Crane",
    price: 150,
    liftCapacity: "15 Tons",
    powerSupply: ["380V"],
    size: "Extra Large",
    img: Repair,
    status: ["Available for Rent"],
    sizes: "700mm/900mm/1200mm"
  },
  {
    id: 6,
    title: "Concrete Mixer",
    price: 45,
    liftCapacity: "200 L",
    powerSupply: ["220V"],
    size: "Medium",
    img: Repair,
    status: ["Certified"],
    sizes: "700mm/900mm/1200mm"
  },
  {
    id: 7,
    title: "Scissor Lift",
    price: 90,
    liftCapacity: "12m Height",
    powerSupply: ["Electric / Diesel"],
    size: "Compact",
    img: Repair,
    status: ["Available for Rent", "Safety Tested"],
    sizes: "700mm/900mm/1200mm"
  },
];
