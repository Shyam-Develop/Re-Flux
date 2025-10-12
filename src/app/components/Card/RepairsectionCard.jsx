import React from "react";
import {
  Box,
  Typography,
  Grid,
  Divider,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import { typography } from "app/utils/constant";
import { useTheme } from "@emotion/react";
import serviceimg from "../../../assets/Repairservice.png";

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

const RepairsectionCard = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={3} >
      {services.map((service) => (
        <Grid item xs={12} sm={6} md={4} key={service.id}>
          <Box
            onClick={() => navigate("/home/RepairServicesPage")}
            sx={{
              width: "100%",
              maxWidth: 412,
              borderRadius: 4,
              border: "1px solid",
              borderColor: "grey.400",
              p: 2,
              backgroundColor: "#f6f9fcff",
              transition: "all 0.3s ease",
              cursor: "pointer",
              mx: "auto",
              "&:hover": {
                transform: "scale(1.03)",
                backgroundColor: "#1C2D4B",
                color: "#fff",
                borderColor: "transparent",
                "& .MuiTypography-root": { color: "#fff" },
                "& .MuiIconButton-root": {
                  backgroundColor: "#6aa9ff",
                  color: "#fff",
                },
                "& .MuiDivider-root": {
                  backgroundColor: "#fff",
                },
              },
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src={service.img}
              alt={service.title}
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: 260,
                borderRadius: "7px",
                objectFit: "cover",
              }}
            />

            {/* Content */}
            <Box sx={{ mt: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography
                  sx={{ ...theme.typography.h3, fontFamily: "'Space Grotesk', sans-serif", fontWeight:600, color: "#1B2F43", fontSize: "28px" }}
                >
                  {service.title}
                </Typography>
                <IconButton
                  size="small"
                  sx={{
                    width: 40,
                    height: 40,
                    color: "rgb(82 86 94)",
                    backgroundColor: "#f1f3f4",
                    transition: "all 0.3s ease",
                  }}
                >
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              </Box>

              <Divider sx={{ mb: 2 }} />

              <Typography sx={{ ...theme.typography.bodyBase, fontFamily: "'Fira Sans', sans-serif", fontWeight:400, fontSize:'18px', color: "#666", mb: 1 }}>
                {service.desc}
              </Typography>

              <Typography sx={{ ...theme.typography.h5, color: "#0E1626", mb: 0.5 }}>
                Turnaround Time
              </Typography>
              <Typography sx={{ ...theme.typography.bodyBase, color: "#677489" }}>
                {service.turnaround.join(" / ")}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}


      {/* View All Services */}
      <Grid item xs={12} sm={3} md={4}>
        <Box>
          <Typography
            sx={{
              height: "100%",
              display: "flex",
              // alignItems: "flex",
              justifyContent: "center",
              mt: 25,
              mr:17,
              cursor: "pointer",
              textDecoration: "none",
              transition: "0.3s",
              fontSize: { xs: "18px", sm: "20px", md: "24px" },
              fontWeight: "bold",
              color: "#1a4dab",
              textDecoration: "none",
              "&:hover": {
                transform: "scale(1.40)",
                textDecoration: "underline",
              },
            }}
           component="a"
          href="/home/RepairServices">
            View All Services →
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default RepairsectionCard;
