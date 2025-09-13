import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import Scope1 from "../../../../assets/Scope1.png";
import Scope2 from "../../../../assets/Scope2.png";
import Scope3 from "../../../../assets/Scope3.png";
import Scope4 from "../../../../assets/Scope4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
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

export default function AboutUsRepairServicesPageCard() {
  return (
<Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#f9fafb" }}>
      {/* Swiper Carousel */}
      <Typography
                          sx={{
                              ...typography.displayM,
                              color:"#1C2D4B",
                              textAlign:"left"
                          }}>
                          Our Capabilities
                      </Typography>
                      <Typography
                          sx={{
                              ...typography.h5,
                              color:"#49576F",
                              textAlign:"left"
                          }}>
                         Electrical and Mechanical restoration with documented testing.
                      </Typography>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={3} // show 3 at a time
        pagination={{
          clickable: true,
        }}
        style={{
          paddingBottom: "40px", // space for pagination line
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
        }}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
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
                  opacity: 1,
                  transform: "translateY(0)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={service.img}
                alt={service.title}
                sx={{
                  height: 210,
                  objectFit: "contain",
                  mt: 2,
                  borderRadius: 2,
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography sx={{
                    ...typography.h4,
                            color:"#1C2D4B",
                }}>
                  {service.title}
                </Typography>
                <Typography
                  sx={{
                         ...typography.bodyBase,
                         color:"#49576F",
                       mb: 2 }}
                >
                  {service.type}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2, pt: 0 }}>
                <Button
                  fullWidth
                  variant="contained"
                  className="view-more-btn"
                  sx={{
                    borderRadius: 2,
                    textTransform: "none",
                    bgcolor: "#b45309",
                    transition: "all 0.3s ease-in-out",
                    opacity: 0,
                    transform: "translateY(10px)",
                  }}
                >
                  View More
                </Button>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Style */}
      <style>
        {`
          .swiper-pagination {
            bottom: 0 !important;
          }
          .swiper-pagination-bullet {
            width: 30px;
            height: 3px;
            border-radius: 2px;
            background: #d1d5db; /* gray */
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background: #2563eb !important; /* blue active */
          }
        `}
      </style>

      {/* Quote Button */}
      <Button
        variant="contained"
        sx={{
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
