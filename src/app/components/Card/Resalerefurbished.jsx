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
import resalerefurbished from "../../../assets/Resalerefurbished.jpg"
import { typography } from "app/utils/constant";


const services = [
  {
    id: 1,
    title: "Rectangular Lifting Magnet",
    type: "Permanent Magnet",
    liftCapacity: "3 Tons",
    powerSupply: "None Required",
    sizes: "500mm / 800mm / 1000mm",
    price: 30,
    img: resalerefurbished,
  },
  {
    id: 2,
    title: "Bespoke Lifting Magnet",
    type: "Custom Coil",
    liftCapacity: "Varied",
    powerSupply: "Custom",
    sizes: "Custom Sizes Available",
    price: 100,
    img: resalerefurbished,
  },
  {
    id: 3,
    title: "Mini Lifting Magnet",
    type: "Coil",
    liftCapacity: "1 Ton",
    powerSupply: "220V",
    sizes: "300mm / 500mm",
    price: 20,
    img: resalerefurbished,
  },

];

export default function ResalerefurbishedCard() {
  return (
    <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#f9fafb" }}>
      {/* Section Tag */}
      <Button
        disableElevation
        disableRipple
        sx={{
          ...typography.bodySmall,
          mb: 2,
          textTransform: "none",
          // fontSize: "0.8rem",
          fontWeight: 400,
          color: "#1a4dab",
          backgroundColor: "rgba(36,121,233,0.08)",
          borderRadius: "20px",
          px: 2,
          py: 0.5,
          boxShadow: "none",
        //   "&:hover": {
        //     backgroundColor: "rgba(36,121,233,0.15)",
        //     boxShadow: "none",
        //   },
        }}
      >
        Resale Services
      </Button>

      {/* Heading */}
      <Typography 
    sx={{
      ...typography.h3RB,
      fontWeight: 700
    }}
      >
        Check Out Our Refurbished section
      </Typography>
      <Typography 
  
      sx={{
        ...typography.h3B1,
        fontWeight: 400,
         mb: 4, 
         color: "text.secondary" 
         }}>
        Check Out this rentals
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
    borderRadius: 2,
    border: "1px solid #e0e0e0", // subtle border
    boxShadow: "none",           // flat like image 2
    overflow: "hidden",
    transition: "all 0.3s ease",
    "&:hover": {
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    },
  }}
>
  {/* Title + Subtitle */}
  <CardContent sx={{ pb: 1 }}>
    <Typography 
  sx={{
    ...typography.h3B1,
    fontWeight: 400,
  }}
    >
      {service.title}
    </Typography>
    <Typography
 sx={{
  ...typography.h3medium,
  fontWeight: 500
 }}
     color="text.secondary"
     >
      {service.sizes}
    </Typography>
    <Typography 
    sx={{
      ...typography.bodySmall,
      fontWeight: 400
    }}
    color="text.secondary">
      Certified: Load-test 12 Mar 2025
    </Typography>
  </CardContent>

  {/* Image with Chips */}
<Box sx={{ position: "relative", mx: 2  }}>
  <CardMedia
    component="img"
    height="180"
    image={service.img}
    alt={service.title}
    sx={{ objectFit: "cover" }}
  />

  {/* Top-left Chip */}
  <Chip
    label="Available for Rent"
    size="small"
    sx={{
      fontFamily: "Inter, Regular",
      position: "absolute",
      fontSize: "14px",
      borderRadius: 1,
      top: 8,
      left: 8,
      bgcolor: "rgba(46,125,50,0.9)",
      color: "white",
      fontWeight: 400,
    }}
  />

  {/* Bottom-left Chip */}
  <Chip
    label="Safety Tested"
    size="small"
    sx={{
        fontFamily: "Inter, Regular",
           fontSize: "14px",
      position: "absolute",
      borderRadius: 1,
      bottom: 8,
      left: 8,
      bgcolor: "rgba(21,101,192,0.9)",
      color: "white",
      fontWeight: 400,
    }}
  />
</Box>


  {/* Specs */}
  <CardContent sx={{ flexGrow: 1 }}>
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
      <Box>
        <Typography 

      sx={{
        fontFamily: "Space Grotesk, Regular",
        fontSize: "16px",
        fontWeight: 600
      }}
        >
          Lift Capacity
        </Typography>
        <Typography 
         sx={{
      ...typography.bodySmall,
      fontWeight: 400
    }}
         color="text.secondary"
         >
          {service.liftCapacity}
        </Typography>
      </Box>
      <Box>
        <Typography
      sx={{
        fontFamily: "Space Grotesk, Regular",
        fontSize: "16px",
        fontWeight: 600
      }}
         >
          Power Supply
        </Typography>
        <Typography 
         sx={{
      ...typography.bodySmall,
      fontWeight: 400
    }}
        color="text.secondary"
        >
          {service.powerSupply}
        </Typography>
      </Box>
    </Box>

    {/* Extra spec row */}
    <Box>
      <Typography 
      sx={{
        fontFamily: "Space Grotesk, Regular",
        fontSize: "16px",
        fontWeight: 600
      }}
      >
        Included
      </Typography>
      <Typography
    sx={{
      ...typography.bodySmall,
      fontWeight: 400
    }}
       color="text.secondary"
       >
        Controller (EF-RC220) · 25 m cable
      </Typography>
    </Box>
  </CardContent>

  {/* Action Button */}
  <Box sx={{ px: 2, pb: 2 }}>
    <Button
      fullWidth
      variant="contained"
      sx={{
        ...typography.bodyStrongB,
        borderRadius: 1,
        textTransform: "none",
        fontWeight: 600,
        bgcolor: "#1976d2",
        "&:hover": { bgcolor: "#115293" },
      }}
    >
      Buy now
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
