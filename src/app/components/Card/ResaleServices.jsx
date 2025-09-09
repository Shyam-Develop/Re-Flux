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

export default function ResaleServices() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#f9fafb" }}>
      <Button
        disableElevation
        disableRipple
        sx={{
          marginBottom: 2,
          textTransform: "none",
          fontSize: "0.8rem",
          fontWeight: 500,
          color: "#1a4dab",
          backgroundColor: "rgba(36,121,233,0.08)",
          borderRadius: "20px",
          px: 2,
          py: 0.5,
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "rgba(36,121,233,0.15)",
            boxShadow: "none",
          },
        }}
      >
        Resale Services
      </Button>

      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Buy, Sell & Exchange Magnets
      </Typography>
      <Typography variant="h5" sx={{ mb: 4, color: "text.secondary" }}>
        Get powerful lifting magnets when you need them — without the upfront
        cost. Flexible rental plans, quick installation, and reliable
        performance for every project!
      </Typography>

      <Grid container spacing={6} justifyContent="center">
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={6} key={service.id}>
            <Card
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              sx={{
                 objectFit: "cover",
                borderRadius: 3,
                boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                transition: "all 0.5s ease-in-out",
                overflow: "hidden",
                position: "relative",
                bgcolor: hoveredCard === service.id ? "#0b2d55" : "white",
                color: hoveredCard === service.id ? "white" : "inherit",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 3,
                }}
              >
                <CardMedia
                  component="img"
                  image={service.img}
                  alt={service.title}
                  className="card-img"
                  sx={{
                    width: "100%",
                    maxHeight: 200,
                    objectFit: "cover",
                    borderRadius: 2,
                    transition: "transform 0.5s ease-in-out",
                    transform:
                      hoveredCard === service.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
              </Box>

              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      color:
                        hoveredCard === service.id ? "white" : "text.primary",
                    }}
                  >
                    {service.title}
                  </Typography>
                  {/* <IconButton
                    size="small"
                    sx={{
                      backgroundColor: hoveredCard === service.id
                        ? "#6aa9ff"
                        : "#f5f6f7",
                      color: hoveredCard === service.id ? "white" : "inherit",
                      transition: "0.3s",
                    }}
                  >
                    <ArrowForwardIosIcon fontSize="small" />
                  </IconButton> */}
                </Box>

                {/* <Divider
                  sx={{
                    mb: 2,
                    borderColor:
                      hoveredCard === service.id
                        ? "rgba(255,255,255,0.3)"
                        : "divider",
                  }}
                /> */}

                <Typography
                  variant="body2"
                  color={
                    hoveredCard === service.id ? "white" : "text.secondary"
                  }
                >
                  {service.desc}
                </Typography>

                {/* Hover Button */}
                {hoveredCard === service.id && (
                  <Box sx={{ mt: 3, textAlign: "center" }}>
                    <Button
                      variant="contained"
                      sx={{
                        textDecoration: "underline",
                        width: "100%",
                        backgroundColor: "#b46119",
                        color: "white",
                        textTransform: "none",
                        borderRadius: "999px",
                        px: 4,
                        py: 1,
                        fontWeight: 500,
                        fontSize: "0.85rem",
                        "&:hover": {
                          backgroundColor: "#944d13",
                        },
                      }}
                    >
                      View More
                    </Button>
                    
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
