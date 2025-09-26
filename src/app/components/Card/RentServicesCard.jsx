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
import { Pagination } from "swiper/modules";

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
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        style={{ paddingBottom: "40px" }}
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
                padding: "15px",
                borderRadius: '20px',
                border: "1px solid #e0e0e0",
                backgroundColor:'#FAFAFA',
                overflow: "hidden",
                width: "416px",
                height: "628px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "all 0.4s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                  backgroundColor: "#1C2D4B",
                  color: "#fff",
                   borderRadius: '20px',
                },
                "&:hover .MuiButton-root": {
                  backgroundColor: '#b18028',
                  color: "#fff",
                },
              }}
            >
              {/* Image */}
              <Box sx={{ position: "relative", overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  image={service.img}
                  alt={service.title}
                  sx={{
                    width: "384px",
                    height: "240px",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    "&:hover": { transform: "scale(1.08)" },
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
                      ...typography.bodyBase,
                      fontSize: "14px",
                      bgcolor: "#1B7B4E",
                      color: "#F1F2F4",
                      borderRadius:'0px',
                    }}
                  />
                  <Chip
                    label="Safety Tested"
                    size="small"
                    sx={{ ...typography.bodyBase, fontSize:'14px', bgcolor: "#2F6FBA", borderRadius:'0px', color: "#F1F2F4" }}
                  />
                </Box>
              </Box>

              {/* Content */}
              <CardContent
                sx={{
                  width: "100%",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 2,
                }}
              >
                {/* Title + Price */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: 1,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        ...typography.h4,
                        fontSize:'24px',
                        lineHeight: '130%',
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      sx={{
                        ...typography.h6,
                        fontSize: "16px",
                       // color: "#00000099",
                      }}
                    >
                      {service.type}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      ...typography.h6,
                      fontSize: "16px",
                      fontWeight: 600,
                     
                    }}
                  >
                    Starting at 
                    <Typography sx={{ ...typography.h4, color:"#178270"}}  >${service.price}</Typography>
                  </Typography>
                </Box>

                {/* Lift Capacity + Power Supply */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: '20px'
                  }}
                >
                  <Box>
                    <Typography
                      sx={{ ...typography.h5 }}
                    >
                      Lift Capacity
                    </Typography>
                    <Typography
                      sx={{ fontSize: "18px", ...typography.bodyBase , color:'#677489' }}
                    >
                      {service.liftCapacity}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{ fontSize: "14px", fontWeight: 600 }}
                    >
                      Power Supply
                    </Typography>
                    <Typography
                      sx={{ fontSize: "18px", ...typography.bodyBase , color:'#677489'}}
                    >
                      {service.powerSupply}
                    </Typography>
                  </Box>
                </Box>

                {/* Sizes */}
                <Box sx={{width:'262px', height:'59px', marginBottom: '35px'}}>
                  <Typography
                    sx={{
                      // fontSize: "14px",
                      ...typography.h5, 
                      // color:'#0E1626',
                      LineHeight : '130%'
                    }}
                  >
                    {service.sizes}
                  </Typography>
                   <Typography
                      sx={{ fontSize: "18px", ...typography.bodyBase , color:'#677489'}}
                    >
                      View Details
                    </Typography>
                </Box>
              </CardContent>


              {/* Button */}
              <Box sx={{ p: 2, pt: 0, width: "100%" }}>
                <Button
                  onClick={() => navigate("/home/CheckAvailabilty")}
                  fullWidth
                  variant="contained"
                  sx={{
                    fontWeight: 600,
                    fontSize: "16px",
                    borderRadius: 1.5,
                    textTransform: "none",
                    backgroundColor: "#0b2d55", // normal state
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#1C2D4B", // hover state
                    },
                  }}
                >
                  Check Availability
                </Button>
              </Box>

            </Card>
          </SwiperSlide>
        ))}

        {/* Custom Swiper styles */}
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
      </Swiper>
    </Box>



  );
}








