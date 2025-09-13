import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import img from '../../../../assets/aboutUs1.png'
import { typography } from "app/utils/constant";
export default function AboutUsCard() {

  return (
      
   <Card
  sx={{
    width: "100%",
    maxWidth: 1440,
    borderRadius: 3,
    boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
    overflow: "hidden",
    mx: "auto",
    opacity: 1,
    p: { xs: 2, md: 4 }, // padding for spacing
  }}
>
  {/* Wrapper to keep all content aligned left */}
  <Box sx={{ maxWidth: 1200, mx: "auto" }}>
    {/* Title */}
    <Typography
      gutterBottom
      sx={{
        ...typography.displayXL,
        color: "#061D47",
        textAlign: "center", // ✅ left align
      }}
    >
      About Us
    </Typography>

    {/* Image */}
    <CardMedia
      component="img"
      image={img}
      alt="About Us"
      sx={{
        width: "100%",
        height: 400,
        opacity: 1,
        objectFit: "cover",
        borderRadius: 2,
      }}
    />

    {/* Text Section */}
    <CardContent
      sx={{
        width: "100%",
        maxWidth: 1200,
        opacity: 1,
        gap: 2.5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        px: 0, // ✅ remove side padding so it aligns with title & image
      }}
    >
      <Typography
        variant="h6"
        fontWeight={600}
        gutterBottom
        sx={{
          ...typography.h2,
          color: "#061D47",
          textAlign: "left", // ✅ consistent left align
        }}
      >
        Service, Rental & Resale of Electro-Lifting Magnets done right, fast,
        and certified.
      </Typography>

      <Typography
  variant="body1"
  sx={{
    color: "#4b5563",
    textAlign: "left",
    fontFamily: "Plus Jakarta Sans",
    fontWeight: 500,           // ✅ Medium weight
    fontSize: "18px",
    lineHeight: "200%",        // ✅ proper line height
    letterSpacing: "0px",
    verticalAlign: "middle",   // ✅ aligns with surrounding inline content
  }}
>
  Reflux is the service brand of Electro Flux Private Limited, focused on
  keeping your material handling lines running with repair, rental, and
  refurbished resale of electro-lifting magnets and controllers.
</Typography>

    </CardContent>
  </Box>
</Card>

  );
}
