import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Modal,
  Typography,
  useMediaQuery,
  useTheme,
  Paper,
  TextField,
  MenuItem,
  Card,
  CardMedia,
  IconButton,
} from "@mui/material";
import ROIimage from "../../../assets/ROICalculator.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { typography } from "app/utils/constant";
import EquipmentSwiper from "app/components/Card/RepairReplaceCard";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Brand1 from "../../../assets/Brand1.png";
import Repair from "../../../assets/RRimage.jpg";
import Footer from "app/components/Card/Footer";
import Rentinstead from "../../../assets/Rentinstaed.jpg";
import SellRentServicesCard from "app/components/Card/SellRentServicesCard";
import HandshakeIcon from "@mui/icons-material/Handshake";
import EditIcon from "@mui/icons-material/Edit";

const services = [
  {
    id: 1,
    title: "Sell Us",
    type: "Coil",
    subtitile: "Per day",
    icon: HandshakeIcon,
    img: Rentinstead,
    price: 25,
    liftCapacity: "2.5 tons",
    powerSupply: "220V / 110V",
    sizes: "700mm / 890mm /120mm",
  },
  {
    id: 2,
    title: "Exchange",
    type: "Coil",
    subtitile: "Per day",
    icon: HandshakeIcon,
    img: Rentinstead,
    price: 25,
    liftCapacity: "2.5 tons",
    powerSupply: "220V / 110V",
    sizes: "700mm / 890mm /120mm",
  },
  {
    id: 3,
    title: "Exchange",
    type: "Coil",
    subtitile: "Per day",
    icon: HandshakeIcon,
    img: Rentinstead,
    price: 25,
    liftCapacity: "2.5 tons",
    powerSupply: "220V / 110V",
    sizes: "700mm / 890mm /120mm",
  },
  {
    id: 4,
    title: "Exchange",
    type: "Coil",
    subtitile: "Per day",
    icon: HandshakeIcon,
    img: Rentinstead,
    price: 25,
    liftCapacity: "2.5 tons",
    powerSupply: "220V / 110V",
    sizes: "700mm / 890mm /120mm",
  },
  {
    id: 5,
    title: "Exchange",
    type: "Coil",
    subtitile: "Per day",
    icon: HandshakeIcon,
    img: Rentinstead,
    price: 25,
    liftCapacity: "2.5 tons",
    powerSupply: "220V / 110V",
    sizes: "700mm / 890mm /120mm",
  },
  {
    id: 6,
    title: "Exchange",
    type: "Coil",
    subtitile: "Per day",
    icon: HandshakeIcon,
    img: Rentinstead,
    price: 25,
    liftCapacity: "2.5 tons",
    powerSupply: "220V / 110V",
    sizes: "700mm / 890mm /120mm",
  },
];

const RoiCalculator = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // ✅ Fetch content from API
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_CMS_URL}?contentId=C014`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setContent(data))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  // ✅ Check login role
  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  // ✅ Navigate to CMS editor
  const handleEdit = (contentTextID, type = "T") => {
    window.location.href = `/CmsEditor?contentId=C014&contentTextID=${contentTextID}&contentType=${type}`;
  };

  // ✅ Reusable Edit button
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
      id: "CON170002",
      title: content.CON170003,
      description: content.CON170004,
      image: content.CON170002,
    },
    {
      id: "CON170005",
      title: content.CON170006,
      description: content.CON170007,
      image: content.CON170005,
    },
    {
      id: "CON170008",
      title: content.CON170009,
      description: content.CON170010,
      image: content.CON170008,
    },
    {
      id: "CON170011",
      title: content.CON170012,
      description: content.CON170013,
      image: content.CON170011,
    },
    {
      id: "CON170014",
      title: content.CON170015,
      description: content.CON170016,
      image: content.CON170014,
    },
    {
      id: "CON170017",
      title: content.CON170018,
      description: content.CON170019,
      image: content.CON170017,
    },
  ];

  return (
    <Box
      display="grid"
      gap="20px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      sx={{
        "& > div": {
          gridColumn: { xs: "span 4", md: undefined }, // mobile: full width
        },
        p: { xs: 2, md: 3 }, // add padding on mobile only
      }}
    >
      <Box sx={{ gridColumn: "span 4", p: { xs: 1, md: 2 } }}>
        <Box
          sx={{
            width: "100%",
            maxWidth: 1280,
            mx: "auto",
            py: { xs: 3, md: 5 }, // mobile smaller padding
          }}
        >
          {/* Title & Description */}
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              px: { xs: 1, md: 0 },
            }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                ...typography.displayL,
                fontSize: { xs: "1.8rem", md: "3rem" },
                mb: 1,
              }}
              gutterBottom
            >
              {content.CON170000}
              {isAdmin && <EditIconButton id="CON170000" />}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                ...typography.h4,
                mb: 3,
                color: "text.secondary",
                fontSize: { xs: "1rem", md: "1.5rem" },
              }}
            >
              {content.CON170001}
              {isAdmin && <EditIconButton id="CON170001" />}
            </Typography>
          </Box>

          {/* Cards */}
          <Box sx={{ px: { xs: 1, md: 6 }, mb: "5%" }}>
            <Grid container spacing={3} justifyContent="flex-start">
              {roiData.map((item, index) => (
                <Grid
                  item
                  key={index}
                  xs={12} // full width on mobile
                  sm={6}
                  md="auto"
                >
                  <Card
                    sx={{
                      position: "relative",
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: 3,
                      height: { xs: 300, md: 400 },
                      width: { xs: "100%", md: 558 }, // full width mobile
                    }}
                  >
                    {/* Background Image */}
                    <CardMedia
                      component="img"
                      image={`https://cmsreflux.bexatm.com${item.image}`}
                      alt={item.title}
                      sx={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                    {/* ✅ Edit Icon visible only for admin */}
                    {isAdmin && (
                      <IconButton
                        onClick={() => handleEdit(item.id, "I")}
                        sx={{
                          position: "absolute",
                          top: 12,
                          right: 12,
                          bgcolor: "white",
                          color: "black",
                          zIndex: 2, // ✅ ensures it appears above image
                          "&:hover": {
                            bgcolor: "primary.main",
                            color: "white",
                          },
                        }}
                      >
                        <EditIcon type="I" />
                      </IconButton>
                    )}

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
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography
                          variant="subtitle1"
                          fontWeight="bold"
                          sx={{ fontSize: { xs: "18px", md: "24px" } }}
                        >
                          {item.title}
                          {isAdmin && (
                            <EditIconButton
                              id={Object.keys(content).find(
                                (key) => content[key] === item.title
                              )}
                            />
                          )}
                        </Typography>
                        <IconButton
                          size="small"
                          sx={{
                            backgroundColor: "#f0f0f0",
                            width: { xs: 32, md: 40 },
                            height: { xs: 32, md: 40 },
                          }}
                        >
                          <ArrowForwardIosIcon fontSize="small" />
                        </IconButton>
                      </Box>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: { xs: "14px", md: "18px" } }}
                      >
                        {item.description}
                        {isAdmin && (
                          <EditIconButton
                            id={Object.keys(content).find(
                              (key) => content[key] === item.description
                            )}
                          />
                        )}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Rent Calculator Section */}
          <Box>
            <SellRentServicesCard services={services} />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
export default RoiCalculator;
