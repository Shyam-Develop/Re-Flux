import {
  Box, Button, Divider, Grid, Modal, Typography, useMediaQuery, useTheme, Paper, TextField,
  MenuItem, Card,
  CardMedia, IconButton
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Brand1 from '../../../assets/Brand1.png';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { typography } from "app/utils/constant";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ROIimage from '../../../assets/ROICalculator.jpg';
import EquipmentSwiper from "app/components/Card/RepairReplaceCard";
import Repair from "../../../assets/RRimage.jpg"
import { Link, useNavigate } from "react-router-dom";
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

const RepairReplace = () => {

  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");
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
            height: "135px",
            gap: "21px",          // only works if display: flex/grid
            transform: "rotate(0deg)",
            opacity: 1,
            display: "flex",
            flexDirection: "column", // ✅ stack in column
            justifyContent: "center",
            alignItems: "flex-start", // ✅ align text to left
          }}
        >
          <Typography
            sx={{
              ...typography.displayL,
              color: "#1C2D4B",
              textAlign: "left",
            }}
          >
            Repair V/S Replace
          </Typography>

          <Typography
            sx={{
              ...typography.h5,
              color: "#49576F",
              textAlign: "left",
              mb: 3,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut nisl
            turpis. Mauris vitae commodo elit, at mollis tellus. Donec placerat turpis
            elementum diam sollicitudin, eu volutpat purus viverra. Nulla consectetur,
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
            Repair V/S Replace
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
                      Project title
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
                      Project title
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
                      Production status
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
                      Production status
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
                      Project title
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
                      Project title
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
                      Project title
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
                      Project title
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
                      Calculate ROI
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
            Results
          </Typography>
          <Typography sx={{
            ...typography.h4,
            color: "#F1F2F4"
          }} gutterBottom>
            Best option
          </Typography>
          <Typography sx={{
            ...typography.h3,
            color: "#F1F2F4"
          }} gutterBottom>
            Results
          </Typography>

          <Divider sx={{ my: 1, borderColor: "rgba(255,255,255,0.2)" }} />

          {/* Estimated Savings */}
          <Typography sx={{
            ...typography.h4,
            color: "#F1F2F4"
          }} gutterBottom>
            Estimated savings vs next best
          </Typography>
          <Typography sx={{
            ...typography.h3,
            color: "#F1F2F4"
          }} gutterBottom>
            Results
          </Typography>
          <Divider sx={{ my: 1, borderColor: "rgba(255,255,255,0.2)" }} />
          {/* Table-like layout */}
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={4}>
              <Typography sx={{
                ...typography.h4,
                color: "#F1F2F4"
              }}>
                Scenario
              </Typography>
              <Typography mt={2} sx={{
                ...typography.h5,
                color: "#F1F2F4"
              }}>Repair (with best bridge)</Typography>
              <Typography mt={2} sx={{
                ...typography.h5,
                color: "#F1F2F4"
              }}>Replace (with best bridge)</Typography>
              <Typography mt={2} sx={{
                ...typography.h5,
                color: "#F1F2F4"
              }}>Rent only</Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography sx={{
                ...typography.h4,
                color: "#F1F2F4"
              }}>
                Total cost
              </Typography>
              <Typography mt={2} sx={{
                ...typography.h5,
                color: "#F1F2F4"
              }}>Approx. 1.02L</Typography>
              <Typography mt={2} sx={{
                ...typography.h5,
                color: "#F1F2F4"
              }}>Approx. 1.02L</Typography>
              <Typography mt={2} sx={{
                ...typography.h5,
                color: "#F1F2F4"
              }}>Approx. 1.02L</Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography sx={{
                ...typography.h4,
                color: "#F1F2F4"
              }}>
                Bridge chosen
              </Typography>
              <Typography mt={2} sx={{
                ...typography.h5,
                color: "#F1F2F4"
              }}>Approx. 1.02L</Typography>
              <Typography mt={2} sx={{
                ...typography.h5,
                color: "#F1F2F4"
              }}>Approx. 1.02L</Typography>
              <Typography mt={2} sx={{
                ...typography.h5,
                color: "#F1F2F4"
              }}>N/A</Typography>
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
              View All Services →
            </Link>
            <Button variant="text" sx={{
              ...typography.h4,
              color: "#F1F2F4"
            }}>
              Download PDF
            </Button>
          </Box>
        </Paper>

        {/* //====================SECTION-4(ROI-CALCULATOR)=================================// */}

        <Box
          sx={{
            width: "100%",
            maxWidth: 1280,
            maxHeight: 718,
            mx: "auto",
            py: 5, // padding top/bottom
          }}
        >
          {/* Title & Description */}
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            width: "1280px",
            height: "206px",
            px: "64px",                 // padding-left & padding-right
            display: "flex",            // required if you want gap to work
            gap: "32px",
            transform: "rotate(0deg)",  // replaces angle: 0 deg
            opacity: 1,
            textAlign: "left",
            boxSizing: "border-box",
          }}>
            <Typography sx={{
              ...typography.displayL, color: "#1C2D4B"
            }} gutterBottom>
              ROI Calculator
            </Typography>
            <Typography

              sx={{ ...typography.h4, mb: 4, color: "#99A0AE" }}
            >
              Get powerful lifting magnets when you need them — without the upfront
              cost. Flexible rental plans, quick installation, and reliable
              performance for every project!
            </Typography>
          </Box>

          {/* View All Link */}
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ mb: 3 }}
          >
            <Typography
              component={Link}
              to="/repair-replace/roi-cal"
              sx={{
                ...typography.h3,
                color: "#2F6FBA",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              View All ROI Calculators
              <ArrowRightAltIcon sx={{ fontSize: "2rem", ml: 1 }} />
            </Typography>
          </Box>

          {/* Cards */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 3, // space between cards
              flexWrap: "wrap", // responsive wrap
              width: "100%",
              maxWidth: 1280,
              mx: "auto",
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
                  height: 400,
                  width: 588,
                  flex: "0 1 588px", // ensures equal card sizing
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
                      {item.title}
                    </Typography>
                    <IconButton
                      size="small"
                      sx={{
                        backgroundColor: "#f0f0f0",
                        width: 40,
                        height: 40,
                      }}
                    >
                      <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                  </Box>
                  <Typography sx={{ ...typography.bodyBase, color: "#99A0AE" }}>
                    {item.description}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Box>


        </Box>

        {/* //====================SECTION-5(RENT-CALCULATOR)=================================// */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "1440px",
            height: "880px",
            // pt: "40px",                 // padding-top
            // pb: "40px",                 // padding-bottom
            // display: "flex",            // required if using gap
            gap: "32px",
            transform: "rotate(0deg)",  // replaces angle: 0 deg
            opacity: 1,
            boxSizing: "border-box",
            mb: 5
          }}
        >

          <Typography
            sx={{
              ...typography.displayL,
              color: "#1A2438",
              textAlign: "left",
            }}
          >
            Rent instead?
          </Typography>
          <Typography
            sx={{
              ...typography.h4,
              color: "#99A0AE",
              textAlign: "left",
            }}
          >
            Check out this Rentals
          </Typography>
          <Box sx={{
            display: "flex",
            flexDirection: "row",
          }}>
            <EquipmentSwiper data={cardData} />
          </Box>
          <Box
            sx={{
              display: "flex",
              ml: 110,
              // justifyContent: "flex-end",
              mt: 2, // optional margin top
            }}
          >
            <Button
              sx={{
                ...typography.h3,
                color: "#2F6FBA",
                textTransform: "none",
                textDecoration: "underline",
              }}
              endIcon={
                <ArrowRightAltIcon
                  sx={{
                    // width: 60,
                    opacity: 1,
                    borderWidth: "3.3px",
                  }}
                />
              }
            >
              View all magnets for rent
            </Button>
          </Box>
        </Box>

        {/* Footer Section */}
        <Box
          component="footer"
          sx={{
            backgroundColor: "#0b2d55",
            color: "#fff",
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            width: "100%",
            px: { xs: 4, md: 12 },
            py: { xs: 6, md: 10 },
          }}
        >
          <Grid container spacing={4} alignItems="flex-start">
            {/* 1. Left: Logo + Sub-brand */}
            <Grid item xs={12} md={4}>
              <Box mb={3}>
                <img src={Brand1} alt="ReFlux Magnets" style={{ height: 60 }} />
              </Box>
              <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                A unit of
              </Typography>
              <Box>
                <img src={Brand1} alt="Electro Flux" style={{ height: 60 }} />
              </Box>
            </Grid>

            {/* 2. Middle: Contact Info */}
            <Grid item xs={12} md={4}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  border: "1px solid #fff",
                  borderRadius: "16px",
                  px: 2,
                  py: 0.5,
                  display: "inline-block",
                  mb: 2,
                }}
              >
                Contact
              </Typography>

              <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                Xilliams Corner Wine © 2017. <br />
                1112 A Market St # Ste B22,<br />
                Charlottesville, CA 45565
              </Typography>

              <Typography sx={{ mt: 2 }}>(123) 456-7890</Typography>
              <Typography
                sx={{
                  mt: 1,
                  display: "inline-block",
                  borderBottom: "2px solid #1976d2",
                  pb: "2px",
                }}
              >
                contact@lift.agency
              </Typography>
            </Grid>

            {/* 3. Right: Links + Arrow + Copyright */}
            <Grid item xs={12} md={4}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  border: "1px solid #fff",
                  borderRadius: "16px",
                  px: 2,
                  py: 0.5,
                  display: "inline-block",
                  mb: 2,
                }}
              >
                Links
              </Typography>

              {["Facebook", "Instagram", "Youtube"].map((item) => (
                <Typography key={item} sx={{ mb: 1 }}>
                  {item}
                </Typography>
              ))}

              <Typography sx={{ fontWeight: 700, mt: 2 }}>Wall of Love ❤️</Typography>
              <Box
                sx={{
                  width: 30,
                  height: 2,
                  backgroundColor: "#fff",
                  my: 1,
                }}
              />
              <Typography sx={{ fontWeight: 700, mb: 3 }}>Sitemap</Typography>

              {/* Scroll to top icon */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: "1px solid #fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  mb: 2,
                }}
              >
                <ArrowUpwardIcon sx={{ color: "#fff" }} />
              </Box>

              <Typography variant="caption" sx={{ color: "#ccc" }}>
                © 2020 Lift Media All rights reserved.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>


  );
};
export default RepairReplace;
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
  },];

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