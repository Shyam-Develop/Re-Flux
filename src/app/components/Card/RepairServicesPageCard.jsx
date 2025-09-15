import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Chip,
} from "@mui/material";
import Scope1 from "../../../assets/Scope1.png";
import Scope2 from "../../../assets/Scope2.png";
import Scope3 from "../../../assets/Scope3.png";
import Scope4 from "../../../assets/Scope4.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { typography } from "app/utils/constant";



const services = [
  {
    id: 1,
    title: "Electrical",
    type: "Rewinds,resin potting,insulation upgrades(class F/H)",
    liftCapacity: "3 Tons",
    powerSupply: "None Required",
    sizes: "500mm / 800mm / 1000mm",
    price: 30,
    img: Scope1,
  },
  {
    id: 2,
    title: "Electrical",
    type: "Rewinds,resin potting,insulation upgrades(class F/H)",
    liftCapacity: "Varied",
    powerSupply: "Custom",
    sizes: "Custom Sizes Available",
    price: 100,
    img: Scope2,
  },
  {
    id: 3,
    title: "Electrical",
    type: "Rewinds,resin potting,insulation upgrades(class F/H)",
    liftCapacity: "1 Ton",
    powerSupply: "220V",
    sizes: "300mm / 500mm",
    price: 20,
    img: Scope3,
  },
    {
    id: 4,
    title: "Electrical",
    type: "Rewinds,resin potting,insulation upgrades(class F/H)",
    liftCapacity: "3 Tons",
    powerSupply: "None Required",
    sizes: "500mm / 800mm / 1000mm",
    price: 30,
    img: Scope4,
  },
  {
    id: 5,
    title: "Electrical",
    type: "Rewinds,resin potting,insulation upgrades(class F/H)",
    liftCapacity: "Varied",
    powerSupply: "Custom",
    sizes: "Custom Sizes Available",
    price: 100,
    img: Scope4,
  },
  {
    id: 6,
    title: "Electrical",
    type: "Rewinds,resin potting,insulation upgrades(class F/H)",
    liftCapacity: "1 Ton",
    powerSupply: "220V",
    sizes: "300mm / 500mm",
    price: 20,
    img: Scope4,
  },
];

export default function RepairServicesPageCard() {
  return (
<Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#f9fafb" }}>
  {/* Swiper Container */}
  <Swiper
    modules={[Navigation]}
    navigation
    spaceBetween={24}
    slidesPerView={3}
    loop={true}
    breakpoints={{
      0: { slidesPerView: 1 },
      600: { slidesPerView: 2 },
      960: { slidesPerView: 3 },
    }}
  >
    {services.map((service) => (
      <SwiperSlide key={service.id}>
        {/* MUI Card Component */}
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            overflow: "hidden",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            transition: "all 0.4s ease-in-out",
            "&:hover": {
              transform: "scale(1.03)",
              backgroundColor: "#0b2d55",
              color: "white",
            },
            "&:hover .MuiTypography-root": {
              color: "white !important",
            },
            "&:hover .view-more-btn": {
              backgroundColor: "#944708 !important",
            },
          }}
        >
          {/* Image */}
          <Box sx={{ borderRadius: 2, position: "relative" }}>
            <CardMedia
              component="img"
              image={service.img}
              alt={service.title}
              sx={{
                height: 210,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                objectFit: "contain",
                borderRadius: 10,
                mt: 2,
                transition: "transform 0.6s ease-in-out",
              }}
            />
          </Box>

          {/* Content */}
          <CardContent sx={{ flexGrow: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                {service.title}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {service.type}
            </Typography>
          </CardContent>

          {/* View More Button */}
          <Box sx={{ p: 2, pt: 0 }}>
            <Button
              fullWidth
              variant="contained"
              className="view-more-btn"
              sx={{
                borderRadius: 2,
                textTransform: "none",
                bgcolor: "#b45309",
                transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
                opacity: 0,
                transform: "translateY(10px)",
                ".MuiCard-root:hover &": {
                  opacity: 1,
                  transform: "translateY(0)",
                  textDecoration: "underline",
                },
              }}
            >
              View More
            </Button>
          </Box>
        </Card>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* CTA Button */}
  <Button
    variant="contained"
    sx={{
      ...typography.bodyStrong,
      fontWeight: 600,
      mt: 4,
      textDecoration: "underline",
      width: "100%",
      bgcolor: "#b45309",
      borderRadius: 10,
      px: 6,
      py: 1.5,
      textTransform: "none",
      "&:hover": { bgcolor: "#92400e" },
    }}
  >
    Get a repair quote
  </Button>
</Box>
  );
}
