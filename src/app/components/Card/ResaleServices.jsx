import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Divider,
  IconButton,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import buyExchange from "../../../assets/BuyExchange.png";
import SellExchange from "../../../assets/SellExchange.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { typography } from "app/utils/constant";


const services = [
  {
    id: 1,
    title: "Buy",
    desc: "Rewinds, resin potting, insulation upgrades (Class F/H)",
    img: buyExchange, // use correct path
    turnaround: ["3-5 Days"],
  },
  {
    id: 2,
    title: "Sell or exchange",
    desc: "Rewinds, resin potting, insulation upgrades (Class F/H)",
    img: SellExchange,
    turnaround: ["Depends on Inspection"],
  },
];

const ResaleServices = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <Box sx={{ px: 4, py: 6, backgroundColor: "#f9fafb" }}>
      {/* Top Label */}
      <Button
        disableRipple
        disableElevation
        sx={{
          backgroundColor: "rgba(36,121,233,0.08)",
          color: "#2F6FBA",
          borderRadius: "20px",
          textTransform: "none",
          px: 2,
          py: 0.5,
          mb: 2,
          fontWeight: 500,
          ...typography.bodySmall,
          "&:hover": {
            backgroundColor: "rgba(36,121,233,0.15)",
          },
        }}
      >
        Resale Services
      </Button>

      {/* Title and Subtitle */}
      <Typography sx={{ ...typography.displayL, fontWeight:700, fontSize:'56px', color:'#1C2D4B' }} gutterBottom>
        Buy, Sell & Exchange Magnets
      </Typography>
      <Typography
        sx={{ width:'1312px', height:'62px', ...typography.h4, color:'#99A0AE', mb: 4 }}
      >
        Get powerful lifting magnets when you need them — without the upfront
        cost. Flexible rental plans, quick installation, and reliable
        performance for every project!
      </Typography>

      {/* Card Layout */}
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item xs={12} md={6} key={service.id}>
            <Card
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                overflow: "hidden",
                height: "100%",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backgroundColor:
                  hoveredCard === service.id ? "#1a2a44" : "#f5f7fa",
                color: hoveredCard === service.id ? "#fff" : "#000",
              }}
            >
              {/* Image */}
              <CardMedia
                component="img"
                image={service.img}
                alt={service.title}
                sx={{
                  height: 260,
                  padding: '30px',
                  borderRadius: '35px',
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                  transform:
                    hoveredCard === service.id ? "scale(1.05)" : "scale(1)",
                }}
              />

              {/* Content */}
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{ color: hoveredCard === service.id ? "#fff" : "#000", ...typography.h4, fontWeight:400, fontSize:'24px'}}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    mb: 2,
                    ...typography.bodyBase,
                    fontWeight:400,
                    fontSize:'18px',
                    color:
                      hoveredCard === service.id ? "rgba(255,255,255,0.8)" : "text.secondary",
                  }}
                >
                  {service.desc}
                </Typography>

                {/* View More button only on hover */}
                {hoveredCard === service.id && (
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: "#b3570d",
                      color: "#fff",
                      fontWeight: "bold",
                      borderRadius: "25px",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#944708",
                      },
                    }}
                  >
                    View More
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ResaleServices;
