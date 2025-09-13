import React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import { typography } from "app/utils/constant";

const services = [
  {
    title: "Repair & Service",
    description:
      "Coil rewinds, terminals, housings, leads, junction boxes and controller/PSU repairs—returned to spec with a load-test certificate (kN).",
  },
  {
    title: "Magnets for Rent",
    description:
      "Short- and long-term rentals with controller & cables. Dispatch 24–48 h (subject to availability), Pan-India logistics.",
  },
  {
    title: "Refurbished & Exchange",
    description:
      "Certified refurbished magnets with warranty and documentation. We also buy or exchange your old units.",
  },
];

export default function ServicesSection() {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", px: 2, py: 6 }}>
      {/* Section Heading */}
      <Typography
        variant="h4"
        sx={{ ...typography.displayM,
            color:"#1C2D4B"
            , mb: 1, textAlign: "left" }}
      >
        What we do
      </Typography>
      <Typography
        variant="h6"
        sx={{ ...typography.h2,
            color:"#1C2D4B", textAlign: "left", mb: 1 }}
      >
        Simple. Transparent. Reliable.
      </Typography>
      <Typography
        variant="body1"
        sx={{ ...typography.h5,
            color:"#6B768A", textAlign: "left", mb: 6 }}
      >
        Whether you’re expanding, upgrading, or reselling, our platform makes the
        process seamless.
      </Typography>

      {/* Cards */}
      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 2,
                border: "1px solid #e5e7eb",
                p: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                boxShadow: "none",
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "#f9fafb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <HandshakeOutlinedIcon fontSize="small" sx={{ color: "#374151" }} />
              </Box>

              {/* Content */}
              <CardContent sx={{ p: 0 }}>
                <Typography
                  variant="h6"
                  sx={{ ...typography.h3,
                    color:"#0C0F13", mb: 1, color: "#111827" }}
                >
                  {service.title}
                </Typography>
                <Typography
                  
                  sx={{  ...typography.h5,
                    color:"#00000099", lineHeight: 1.6 }}
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
