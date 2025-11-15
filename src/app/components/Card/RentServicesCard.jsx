import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { typography } from "app/utils/constant";

export default function RentServices() {
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_CMS_URL}?contentId=HomeRentService`
    )
      .then((res) => res.json())
      .then((data) => setContent(data))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  const handleEdit = (contentTextID, type = "T") => {
    const currentScroll = window.scrollY;
    localStorage.setItem("scrollPos", currentScroll);
    navigate(
      `/CmsEditor?contentId=HomeRentService&contentTextID=${contentTextID}&contentType=${type}`
    );
  };

  const EditIconButton = ({ id, type = "T" }) =>
    isAdmin ? (
      <IconButton
        size="small"
        onClick={() => handleEdit(id, type)}
        sx={{
          ml: 0.5,
          p: 0.3,
          borderRadius: "50%",
          backgroundColor: "#f0f0f0",
          color: "#1C2D4B",
          border: "1px solid #ccc",
          "&:hover": { backgroundColor: "#e0e0e0", color: "#070808ff" },
        }}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    ) : null;

  if (!content) return null;

  const services = [
    {
      img: content.HR1004,
      title: content.HR1005,
      subtitle: content.HR1006,
      lift: content.HR1007,
      power: content.HR1008,
      details: content.HR1009,
      price: content.HR1010,
      ids: [
        "HR1004",
        "HR1005",
        "HR1006",
        "HR1007",
        "HR1008",
        "HR1009",
        "HR1010",
      ],
    },
    {
      img: content.HR1011,
      title: content.HR1012,
      subtitle: content.HR1013,
      lift: content.HR1014,
      power: content.HR1015,
      details: content.HR1016,
      price: content.HR1017,
      ids: [
        "HR1011",
        "HR1012",
        "HR1013",
        "HR1014",
        "HR1015",
        "HR1016",
        "HR1017",
      ],
    },
    {
      img: content.HR1018,
      title: content.HR1019,
      subtitle: content.HR1020,
      lift: content.HR1021,
      power: content.HR1022,
      details: content.HR1023,
      price: content.HR1024,
      ids: [
        "HR1018",
        "HR1019",
        "HR1020",
        "HR1021",
        "HR1022",
        "HR1023",
        "HR1024",
      ],
    },
    
  ];

  return (
    <Box sx={{ px: { xs: 2, md: "5%" }, py: 7, bgcolor: "#fff" }}>
      {/* Tag Line */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Button
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
          {content.HR1001}
        </Button>
        <EditIconButton id="HR1001" />
      </Box>

      {/* Heading */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography sx={{ ...typography.h3RB, fontWeight: 700 }}>
          {content.HR1002}
        </Typography>
        <EditIconButton id="HR1002" />
      </Box>

      {/* Description */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 5 }}>
        <Typography
          variant="h6"
          sx={{
            ...typography.h3B1,
            color: "text.secondary",
            fontWeight: 400,
          }}
        >
          {content.HR1003}
        </Typography>
        <EditIconButton id="HR1003" />
      </Box>

      {/* Product Cards */}
      <Grid container spacing={4}>
        {services.map((p, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card
              sx={{
                borderRadius: 3,
                width:'416px',
                overflow: "hidden",
                position: "relative",
                p: 2,
                bgcolor: "#FAFAFA",
                border: "1px solid #e0e0e0",
                transition: "all 0.4s ease",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                "&:hover": {
                  backgroundColor: "#1C2D4B",
                  color: "#fff",
                  transform: "scale(1.01)",
                },
                "&:hover .MuiButton-root": {
                  backgroundColor: "#b18028",
                  color: "#fff",
                },
              }}
            >
              {/* Image Section */}
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 2,
                  overflow: "hidden",
                  mb: 2,
                }}
              >
                <Box
                  component="img"
                  src={`https://cmsreflux.bexatm.com${p.img}`}
                  alt={p.title}
                  sx={{
                    width: "100%",
                    height: 220,
                    objectFit: "cover",
                    borderRadius: 2,
                    display: "block",
                    transition: "transform 0.4s ease",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                />
                {/* Chips */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <Chip
                    label="🔧 Available for Rent"
                    size="small"
                    sx={{
                      bgcolor: "#1B7B4E",
                      color: "white",
                      fontSize: "13px",
                      height: "24px",
                    }}
                  />
                  <Chip
                    label="🛡️ Safety Tested"
                    size="small"
                    sx={{
                      bgcolor: "#2F6FBA",
                      color: "white",
                      fontSize: "13px",
                      height: "24px",
                    }}
                  />
                </Box>
                {/* Edit Icon */}
                <Box sx={{ position: "absolute", bottom: 8, right: 8 }}>
                  <EditIconButton id={p.ids[0]} type="I" />
                </Box>
              </Box>

              {/* Card Content */}
              <CardContent sx={{ p: 0 }}>
                {/* Title & Price */}
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Box>
                    <Typography sx={{ ...typography.h4, fontWeight: 700 }}>
                      {p.title} <EditIconButton id={p.ids[1]} />
                    </Typography>
                    <Typography
                      sx={{
                        ...typography.h6,
                        fontWeight: 600,
                        color: "inherit",
                        opacity: 0.9,
                      }}
                    >
                      {p.subtitle} <EditIconButton id={p.ids[2]} />
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography sx={{ ...typography.h6, fontWeight: 600 }}>
                      Start at
                    </Typography>
                    <Typography
                      sx={{
                        ...typography.h5,
                        fontWeight: 700,
                        color: "#178270",
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      {p.price}
                      <EditIconButton id={p.ids[6]} />
                    </Typography>
                  </Box>
                </Box>

                {/* Lift & Power */}
                <Box
                  sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
                >
                  <Box>
                    <Typography sx={{ color: "inherit", opacity: 0.8 }}>
                      Lift Capacity
                    </Typography>
                    <Typography sx={{ ...typography.h5, fontWeight: 500 }}>
                      {p.lift} <EditIconButton id={p.ids[3]} />
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: "inherit", opacity: 0.8 }}>
                      Power Supply
                    </Typography>
                    <Typography sx={{ ...typography.h5, fontWeight: 500 }}>
                      {p.power} <EditIconButton id={p.ids[4]} />
                    </Typography>
                  </Box>
                </Box>

                {/* Details */}
                <Box sx={{ mt: 3 }}>
                  <Typography sx={{ color: "inherit", opacity: 0.8 }}>
                    Size Options <EditIconButton id={p.ids[5]} />
                  </Typography>
                  <Typography sx={{ ...typography.h5, fontWeight: 500 }}>
                    {p.details}
                  </Typography>
                </Box>

                {/* Button */}
                <Button
                  onClick={() => navigate("/home/CheckAvailabilty")}
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 3,
                    backgroundColor: "#0b2d55",
                    color: "#fff",
                    textTransform: "none",
                    fontWeight: 600,
                    borderRadius: 2,
                    py: 1,
                    transition: "all 0.3s ease",
                  }}
                >
                  Check Availability
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
