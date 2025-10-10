import React, { useState, useEffect, useRef } from "react";
import {
  Box, Button, Divider, Grid, Link, Modal, Typography, useMediaQuery, useTheme, Paper, TextField,
  MenuItem, Card,
  CardMedia, IconButton
} from "@mui/material";
import ROIimage from '../../../assets/ROICalculator.jpg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { typography } from "app/utils/constant";
import EquipmentSwiper from "app/components/Card/RepairReplaceCard";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Brand1 from '../../../assets/Brand1.png';
import Repair from "../../../assets/RRimage.jpg"
import Footer from 'app/components/Card/Footer';
import Rentinstead from "../../../assets/Rentinstaed.jpg";
import SellRentServicesCard from "app/components/Card/SellRentServicesCard";
import HandshakeIcon from "@mui/icons-material/Handshake";


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
            width: "100%",
            maxWidth: 1280,
            mx: "auto",
            py: 5, // padding top/bottom
          }}
        >
          {/* Title & Description */}
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h3" fontWeight="bold" sx={{ ...typography.displayL }} gutterBottom>
              ROI Calculator
            </Typography>
            <Typography
              variant="h5"
              sx={{ ...typography.h4, mb: 3, color: "text.secondary" }}
            >
              Get powerful lifting magnets when you need them — without the upfront
              cost. Flexible rental plans, quick installation, and reliable
              performance for every project!
            </Typography>
          </Box>

          {/* Cards */}
          <Box sx={{ px: { xs: 2, md: 6 }, mb: "5%" }}>
            <Grid container spacing={3} justifyContent="flex-start">
              {roiData.map((item, index) => (
                <Grid item key={index}>
                  <Card
                    sx={{
                      position: "relative",
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: 3,
                      height: 400,
                      width: 558,
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
                        <Typography variant="subtitle1" fontWeight="bold" fontSize="24px">
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
                      <Typography variant="body2" color="text.secondary" fontSize="18px">
                        {item.description}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
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
}
export default RoiCalculator;
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
];

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