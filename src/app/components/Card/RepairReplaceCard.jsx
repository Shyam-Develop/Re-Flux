import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Chip,
} from "@mui/material";
import { typography } from "app/utils/constant";

export default function EquipmentSwiper({ data }) {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        spaceBetween={0} // better spacing
        slidesPerView={3} // minimum 3 always
        pagination={{ clickable: true }}
        style={{ paddingBottom: "40px" }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 }, // from 1280px, lock to 3
        }}
      >
        {data.map((service) => (
          <SwiperSlide key={service.id}>
            {/* Wrapper Box for each service */}
            <Card
              sx={{
                width: 416,
                height: 573,
                p: "24px 16px",
                gap: "10px",
                borderRadius: "20px",
                opacity: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Card */}
              <Box
                sx={{
                  width: 384,
                  height: 443,
                  gap: "10px",
                  borderRadius: 2,
                  border: "1px solid #e0e0e0",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    boxShadow: "0px 6px 16px rgba(0,0,0,0.1)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                {/* Image */}
                <CardMedia
                  component="img"
                  image={service.img}
                  alt={service.title}
                  sx={{
                    width: 384,
                    height: 240,
                    objectFit: "cover",
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                  }}
                />

                {/* Content */}
                <CardContent sx={{ flexGrow: 1 }}>
                  {/* Title + Price */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{
                          ...typography.h4,
                          color: "#0B121E",
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        sx={{
                          ...typography.h6, // or smaller variant if you want
                          color: "#00000099",
                        }}
                      >
                        coil
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{
                          ...typography.h4,
                          color: "#5937E0",
                        }}
                      >
                        ${service.price}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px", // smaller text
                          color: "#00000099",
                        }}
                      >
                        per day
                      </Typography>
                    </Box>


                  </Box>

                  {/* Sub Type */}
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {service.type}
                  </Typography>

                  {/* Lift + Power */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Box>
                      <Typography sx={{
                        ...typography.h6,
                        color: "#0B121E",
                      }}>
                        Lift Capacity
                      </Typography>
                      <Typography sx={{
                        ...typography.bodySmall,
                        color: "#677489",
                      }}>
                        {service.liftCapacity}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{
                        ...typography.h6,
                        color: "#0B121E",
                      }}>
                        Power Supply
                      </Typography>
                      <Typography sx={{
                        ...typography.bodySmall,
                        color: "#677489",
                      }}>
                        {service.powerSupply}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{
                        ...typography.h6,
                        color: "#0B121E",
                      }}>
                        Power Supply
                      </Typography>
                      <Typography sx={{
                        ...typography.bodySmall,
                        color: "#677489",
                      }}>
                        {service.powerSupply}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Sizes */}
                  <Typography sx={{
                    ...typography.h6,
                    color: "#0B121E",
                  }} >
                    Sizes
                  </Typography>
                  <Typography sx={{
                    ...typography.bodySmall,
                    color: "#677489",
                  }}>
                    {service.sizes}
                  </Typography>
                </CardContent>
              </Box>

              {/* Button outside the card */}
              <Button
                fullWidth
                variant="contained"
                sx={{
                  width: 384,
                  height: 50,
                  px: 3.5,
                  py: 1.5,
                  gap: "10px",
                  borderRadius: "12px",
                  textTransform: "none",
                  backgroundColor: "#0b2d55",
                  "&:hover": { backgroundColor: "#08365f" },
                }}
              >
                View Details
              </Button>
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
      background: #d1d5db;
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background: #2563eb !important;
    }
  `}
      </style>


    </>
  );
}
