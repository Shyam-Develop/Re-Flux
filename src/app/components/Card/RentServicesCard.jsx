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
import rentserviceimg from "../../../assets/RentService.png";

const services = [
  {
    id: 1,
    title: "Rectangular Lifting Magnet",
    type: "Permanent Magnet",
    liftCapacity: "3 Tons",
    powerSupply: "None Required",
    sizes: "500mm / 800mm / 1000mm",
    price: 30,
    img: rentserviceimg,
  },
  {
    id: 2,
    title: "Bespoke Lifting Magnet",
    type: "Custom Coil",
    liftCapacity: "Varied",
    powerSupply: "Custom",
    sizes: "Custom Sizes Available",
    price: 100,
    img: rentserviceimg,
  },
  {
    id: 3,
    title: "Mini Lifting Magnet",
    type: "Coil",
    liftCapacity: "1 Ton",
    powerSupply: "220V",
    sizes: "300mm / 500mm",
    price: 20,
    img: rentserviceimg,
  },
    {
    id: 4,
    title: "Rectangular Lifting Magnet",
    type: "Permanent Magnet",
    liftCapacity: "3 Tons",
    powerSupply: "None Required",
    sizes: "500mm / 800mm / 1000mm",
    price: 30,
    img: rentserviceimg,
  },
  {
    id: 5,
    title: "Bespoke Lifting Magnet",
    type: "Custom Coil",
    liftCapacity: "Varied",
    powerSupply: "Custom",
    sizes: "Custom Sizes Available",
    price: 100,
    img: rentserviceimg,
  },
  {
    id: 6,
    title: "Mini Lifting Magnet",
    type: "Coil",
    liftCapacity: "1 Ton",
    powerSupply: "220V",
    sizes: "300mm / 500mm",
    price: 20,
    img: rentserviceimg,
  },
];

export default function RentServicesCard() {
  return (
    <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#f9fafb" }}>
      {/* Section Tag */}
      <Button
        disableElevation
        disableRipple
        sx={{
          mb: 2,
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
        Rent Services
      </Button>

      {/* Heading */}
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Rent Industrial Services With Magnets With Ease
      </Typography>
      <Typography variant="h5" sx={{ mb: 4, color: "text.secondary" }}>
        Get powerful lifting magnets when you need them — without the upfront
        cost. Flexible rental plans, quick installation, and reliable
        performance for every project!
      </Typography>

      {/* Cards */}
<Box
  sx={{
    display: "flex",
    flexWrap: "nowrap",      // all in single row
    overflowX: "auto",       // enable horizontal scrolling
    gap: 3,                  // spacing between cards
    pb: 2,                   // bottom padding for scroll area
  }}
>
      <Grid container spacing={3}>
        {services.map((service) => (

          <Grid
          
          item xs={12} sm={6} md={4} key={service.id}>

           <Card
  sx={{
    borderRadius: 1,
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
    overflow: "hidden",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.4s ease-in-out",
    "&:hover": {
      transform: "scale(1.03)",         // zoom-out effect
      backgroundColor: "#0b2d55",       // dark blue background
      color: "white",                   // all text inside becomes white
    },
    "&:hover .MuiTypography-root": {
      color: "white !important",        // force all Typography to white
    },
    "&:hover .availability-btn": {
      backgroundColor: "#944708 !important", // change button on hover
    },
  }}
>
  {/* Image + Chips */}
  <Box sx={{ position: "relative" }}>
    <CardMedia
      component="img"
      image={service.img}
      alt={service.title}
      sx={{
        height: 240,
        width: "100%",
        objectFit: "contain",
        borderRadius: 1,
        mt: 2,
        // backgroundColor: "#f9f9f9",
        transition: "transform 0.6s ease-in-out",
      }}
    />
    <Box
      sx={{
        position: "absolute",
        top: 30,
        left: 30,
        right: 30,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Chip
        label="Available for Rent"
        size="small"
        sx={{
          bgcolor: "#2e7d32",
          color: "white",
          fontWeight: 500,
          borderRadius: 1,
        }}
      />
      <Chip
        label="Safety Tested"
        size="small"
        sx={{
          bgcolor: "#1565c0",
          color: "white",
          fontWeight: 500,
          borderRadius: 1,
        }}
      />
    </Box>
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
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ color: "green" }}
      >
        Starting at ${service.price}
      </Typography>
    </Box>
    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
      {service.type}
    </Typography>
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <Typography variant="subtitle2" fontWeight="bold">
          Lift Capacity
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {service.liftCapacity}
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle2" fontWeight="bold">
          Power Supply
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {service.powerSupply}
        </Typography>
      </Box>
    </Box>
    <Typography variant="body2" sx={{ mt: 2, color: "text.secondary" }}>
      {service.sizes}
    </Typography>
  </CardContent>

  {/* Button */}
  <Box sx={{ p: 2, pt: 0 }}>
    <Button
      fullWidth
      variant="contained"
      className="availability-btn"
      sx={{
        borderRadius: 2,
        textTransform: "none",
        bgcolor: "#0b2d55",
        transition: "background-color 0.4s ease-in-out",
      }}
    >
      Check Availability
    </Button>
  </Box>
</Card>

          </Grid>
        ))}
        
      </Grid>
</Box>
    </Box>
  );
}
