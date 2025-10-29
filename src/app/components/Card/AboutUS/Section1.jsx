import React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import { typography } from "app/utils/constant";
import { useLocation } from "react-router-dom";
import { Handshake } from "@mui/icons-material";
import handshake1 from "../../../../assets/handshake3.jpg";
import HandshakeIcon from "@mui/icons-material/Handshake";


const services = [
  {
    image:handshake1,
    title: "Repair & Service",
    description:
      "Coil rewinds, terminals, housings, leads, junction boxes and controller/PSU repairs—returned to spec with a load-test certificate (kN).",
  },
  {
    image:handshake1,
    title: "Magnets for Rent",
    description:
      "Short- and long-term rentals with controller & cables. Dispatch 24–48 h (subject to availability), Pan-India logistics.",
  },
  {
    image:handshake1,
    title: "Refurbished & Exchange",
    description:
      "Certified refurbished magnets with warranty and documentation. We also buy or exchange your old units.",
  },
];

export default function ServicesSection() {
  const location = useLocation();
  return (
 <Box
  sx={{
    width: "100%",
    minHeight: { xs: "auto", md: 435 }, // auto height on mobile
    px: { xs: 2, md: 0 }, // horizontal padding for small screens
    py: 4,
    boxSizing: "border-box",
  }}
>
  <Box
    sx={{
      maxWidth: 1360,
      mx: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      width: "100%",
    }}
  >
    {/* Section Heading */}
    {location.pathname === "/about-us" && (
      <>
        <Typography
          variant="h4"
          sx={{
            ...typography.displayM,
            fontWeight:600,
            fontSize:'48px',
            color: "#1C2D4B",
            mb: 1,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          What we do
        </Typography>
        <Typography
          variant="h6"
          sx={{
            ...typography.h2,
            color: "#1C2D4B",
            fontWeight:600,
            textAlign: { xs: "center", md: "left" },
            mb: 1,
          }}
        >
          Simple. Transparent. Reliable.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            ...typography.h5,
            color: "#6B768A",
            textAlign: { xs: "center", md: "left" },
            mb: 6,
          }}
        >
          Whether you’re expanding, upgrading, or reselling, our platform makes the
          process seamless.
        </Typography>
      </>
    )}

    {location.pathname === "/contact-us" && (
      <Typography
        variant="h4"
        sx={{
          ...typography.displayM,
          fontWeight:600,
          fontSize:'48px',
          color: "#1C2D4B",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Our Services
      </Typography>
    )}

    {/* Cards Container */}
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: { xs: "center", md: "flex-start" },
        gap: 3,
        width: "100%",
        mt: 2,
      }}
    >
      {services.map((service, index) => (
        <Box
          key={index}
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 30%" },
            maxWidth: { xs: "100%", sm: "45%", md: "30%" },
            height: { xs: "auto", md: 270 },
            pt: 3,
            px: 3,
            pb: 6,
            borderRadius: 2,
            border: "1px solid grey",
            backgroundColor: "white",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Icon */}
          <Box
                component="img"
                src={service.image}
                alt="service icon"
                sx={{
                  width: '45px',
                  height: '45px',
                  border: '1px solid gray',
                  padding: '5px',
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />

          {/* Content */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              mt: 2,
            }}
          >
            <Typography sx={{ ...typography.h3, fontWeight: 600, fontSize: '28px', color: "#111827", mb: 1 }}>
              {service.title}
            </Typography>
            <Typography sx={{ ...typography.h5, fontWeight:500, color: "#00000099" }}>
              {service.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
</Box>

  );
}
