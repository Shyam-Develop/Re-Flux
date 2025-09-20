import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Chip,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { typography } from "app/utils/constant";

export default function RentServicesCard({ services }) {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: { xs: 2, md: 6 } }}>
      {/* Section Tag */}
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
          "&:hover": { backgroundColor: "rgba(36,121,233,0.15)" },
        }}
      >
        Rent Services
      </Button>

      {/* Heading */}
      <Typography
        sx={{
          ...typography.h3RB,
          fontWeight: 700,
        }}
      >
        Rent Industrial Magnets with Ease
      </Typography>
      <Typography
        variant="h5"
        sx={{
          ...typography.h3B1,
          fontWeight: 400,
          mb: 4,
          color: "text.secondary",
        }}
      >
        Get powerful lifting magnets when you need them — without the upfront
        cost. Flexible rental plans, quick installation, and reliable
        performance for every project!
      </Typography>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
        }}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <Card
              sx={{
                borderRadius: 3,
                border: "1px solid #e0e0e0",
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image with zoom on hover */}
              <Box sx={{ position: "relative", overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  image={service.img}
                  alt={service.title}
                  sx={{
                    height: 220,
                    width: "100%",
                    objectFit: "contain",
                    backgroundColor: "#fff",
                    transition: "transform 0.4s ease",
                    "&:hover": {
                      transform: "scale(1.08)",
                    },
                  }}
                />

                {/* Chips at top */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    right: 10,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Chip
                    label="Available for Rent"
                    size="small"
                    sx={{
                      fontSize: "13px",
                      bgcolor: "#2e7d32",
                      color: "white",
                      fontWeight: 500,
                    }}
                  />
                  <Chip
                    label="Safety Tested"
                    size="small"
                    sx={{
                      fontSize: "13px",
                      bgcolor: "#1565c0",
                      color: "white",
                      fontWeight: 500,
                    }}
                  />
                </Box>
              </Box>

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
                  <Typography
                    sx={{
                      ...typography.h3B1,
                      fontSize: "20px",
                      fontWeight: 600,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    sx={{
                      ...typography.h3B1,
                      fontWeight: 600,
                      color: "green",
                    }}
                  >
                    Starting at ${service.price}
                  </Typography>
                </Box>

                {/* Sub Type */}
                <Typography
                  color="text.secondary"
                  sx={{
                    ...typography.bodyBase,
                    fontWeight: 400,
                    mb: 2,
                  }}
                >
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
                    <Typography
                      sx={{
                        ...typography.h3medium,
                        fontWeight: 500,
                      }}
                    >
                      Lift Capacity
                    </Typography>
                    <Typography
                      sx={{
                        ...typography.bodyBase,
                        fontWeight: 400,
                        color: "text.secondary",
                      }}
                    >
                      {service.liftCapacity}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        ...typography.h3medium,
                        fontWeight: 500,
                      }}
                    >
                      Power Supply
                    </Typography>
                    <Typography
                      sx={{
                        ...typography.bodyBase,
                        fontWeight: 400,
                        color: "text.secondary",
                      }}
                    >
                      {service.powerSupply}
                    </Typography>
                  </Box>
                </Box>

                {/* Sizes */}
                <Typography
                  sx={{
                    ...typography.h3medium,
                    fontWeight: 500,
                    color: "text.secondary",
                    mt: 1,
                  }}
                >
                  {service.sizes}
                </Typography>
              </CardContent>

              {/* Button */}
              <Box sx={{ p: 2, pt: 0 }}>
                <Button
                  onClick={() => navigate("/home/CheckAvailabilty")}
                  fullWidth
                  variant="contained"
                  sx={{
                    fontWeight: 600,
                    fontSize: "16px",
                    borderRadius: 1.5,
                    textTransform: "none",
                    backgroundColor: "#0b2d55",
                    "&:hover": { backgroundColor: "#08365f" },
                  }}
                >
                  Check Availability
                </Button>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
