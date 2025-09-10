import { React, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton, Divider, Button
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import serviceimg from "../../../assets/Repairservice.png";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";


const services = [
  {
    id: 1,
    title: "Electromagnet Repair",
    desc: "Businesses to accelerate their digital transformation journey while achieving efficiency, scalability.",
    turnaround: ["3–5d", "5–7d", "10–12d"],
    img: serviceimg,
  },
  {
    id: 2,
    title: "Electromagnet Repair",
    desc: "Businesses to accelerate their digital transformation journey while achieving efficiency, scalability.",
    turnaround: ["3–5d", "5–7d", "10–12d"],
    img: serviceimg,
  },
  {
    id: 3,
    title: "Electromagnet Repair",
    desc: "Businesses to accelerate their digital transformation journey while achieving efficiency, scalability.",
    turnaround: ["3–5d", "5–7d", "10–12d"],
    img: serviceimg,
  },
  {
    id: 4,
    title: "Electromagnet Repair",
    desc: "Businesses to accelerate their digital transformation journey while achieving efficiency, scalability.",
    turnaround: ["3–5d", "5–7d", "10–12d"],
    img: serviceimg,
  },
  {
    id: 5,
    title: "Electromagnet Repair",
    desc: "Businesses to accelerate their digital transformation journey while achieving efficiency, scalability.",
    turnaround: ["3–5d", "5–7d", "10–12d"],
    img: serviceimg,
  },
];

export default function RepairsectionCard() {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#f9fafb" }}>
      <Button
        disableElevation
        disableRipple
        sx={{
          marginBottom: 2,
          textTransform: "none",           // keep text as-is
          fontSize: "0.8rem",              // smaller font
          fontWeight: 500,                 // medium weight
          color: "#1a4dab",                // dark blue text
          backgroundColor: "rgba(36,121,233,0.08)", // very light blue background
          borderRadius: "20px",            // pill shape
          px: 2,                           // horizontal padding
          py: 0.5,                         // vertical padding
          boxShadow: "none",               // remove shadow
          "&:hover": {
            backgroundColor: "rgba(36,121,233,0.15)", // slightly darker on hover
            boxShadow: "none",
          },
        }}
      >
        Repair Services
      </Button>
      {/* Heading */}
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Our Repair Services
      </Typography>
      <Typography variant="h5" sx={{ mb: 4, color: "text.secondary" }}>
        Get powerful lifting magnets when you need them — without the upfront
        cost. Flexible rental plans, quick installation, and reliable
        performance for every project!
      </Typography>

      {/* Cards */}
      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                transition: "all 0.6s ease-in-out", // slower smooth animation
                overflow: "hidden",
                bgcolor: "white",
                "&:hover": {
                  bgcolor: "#0b2d55",
                  color: "white",
                  "& .MuiTypography-root": { color: "white", transform: "scale(1.05)" },
                  "& .MuiDivider-root": { borderColor: "rgba(255,255,255,0.3)" },
                  "& .MuiIconButton-root": {
                    backgroundColor: "#6aa9ff", // 🔹 light blue only for icon button
                    color: "white",             // icon turns white
                  },
                  "& .card-img": {
                    transform: "scale(1.1)", // zoom
                  },
                },
              }}
            >

              {/* Image Section */}

              <Box
                sx={{
                  width: "100%",               // span full card width
                  display: "flex",             // flexbox for centering
                  justifyContent: "center",    // center horizontally
                  alignItems: "center",        // center vertically
                  p: 3,                        // equal space around (top/bottom/left/right)
                  boxSizing: "border-box",     // ensures padding is respected
                }}
              >
                <CardMedia
                  component="img"
                  image={service.img}
                  alt={service.title}
                  className="card-img"
                  sx={{
                    width: "80%",              // smaller image (controls left/right spacing)
                    height: "auto",            // keeps natural aspect ratio
                    maxHeight: 200,            // optional: limit height
                    objectFit: "contain",      // ensures image fits without cropping
                    borderRadius: 2,
                    transition: "transform 0.8s ease-in-out",
                  }}
                />
              </Box>


              {/* Text Section */}
              <CardContent
                sx={{
                  transition: "transform 0.5s ease-in-out, color 0.5s ease-in-out",
                  "& .MuiTypography-root": {
                    transition: "transform 0.5s ease-in-out, color 0.5s ease-in-out",
                  },
                }}
              >
                {/* Title + Arrow */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {service.title}
                  </Typography>
                  <IconButton
                    onClick={() => navigate("/home/RepairServicesPage")}
                    size="small"
                    sx={{
                      color: "text.secondary",
                      backgroundColor: "#f5f6f7", // default
                      transition: "0.3s",        // smooth change
                    }}
                  >
                    <ArrowForwardIosIcon

                      fontSize="small" />
                  </IconButton>

                  {/* {showCard && <RepairServicesPage />} */}
                </Box>

                <Divider sx={{ mb: 2 }} />

                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {service.desc}
                </Typography>

                <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 2 }}>
                  Turnaround Time
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ display: "flex", gap: 2, mt: 0.5 }}
                >
                  {service.turnaround.join(" / ")}
                </Typography>


              </CardContent>

            </Card>


          </Grid>

        ))}
        <Grid sx={{ textAlign: "center", mt: 4 }}>
          <Typography component="a"
            href="/home/RepairServices"
            sx={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#1a4dab',
              textDecoration: 'none',
              display: 'inline-block',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              "&:hover": {
                textDecoration: 'underline',
                transform: 'scale(1.05)',
              },
              margin: '70px',
              marginTop: '55%',
            }}
          >
            View All Services →
          </Typography>
        </Grid>





      </Grid>

    </Box>
  );
}
