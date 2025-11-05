import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { typography } from "app/utils/constant";
import { useLocation, useNavigate } from "react-router-dom";

export default function ServicesSection() {
  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  // Fetch JSON data via API
  useEffect(() => {
    fetch("https://skillglow.bexatm.com/ATM/ContentManageSysV1.php?contentId=C005")
      .then((res) => res.json())
      .then((data) => setContent(data))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  // Check admin
  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  // Edit handler
  const handleEdit = (id, type = "T") => {
    navigate(`/CmsEditor?contentId=C005&contentTextID=${id}&contentType=${type}`);
  };
  const EditIconButton = ({ id, type = "T" }) =>
    isAdmin ? (
      <IconButton
        size="small"
        onClick={() => handleEdit(id, type)}
        sx={{
          ml: 1,
          p: 0.5,
          borderRadius: "50%",
          backgroundColor: "#f0f0f0",
          color: "#1C2D4B",
          border: "1px solid #ccc",
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "#e0e0e0",
            color: "#070808ff",
            //borderColor: "#214870",
          },
          verticalAlign: "middle",
        }}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    ) : null;

  if (!content) return null;

  // Build services with correct JSON keys
  const services = [
    {
      imageKey: "SRV500104",
      image: content.SRV500104,
      titleKey: "SRV500101",
      title: content.SRV500101,
      descKey: "SRV500102",
      description: content.SRV500102,
    },
    {
      imageKey: "SRV500105",
      image: content.SRV500105,
      titleKey: "SRV500106",
      title: content.SRV500106,
      descKey: "SRV500107",
      description: content.SRV500107,
    },
    {
      imageKey: "SRV500108",
      image: content.SRV500108,
      titleKey: "SRV500109",
      title: content.SRV500109,
      descKey: "SRV500110",
      description: content.SRV500110,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "auto", md: 435 },
        px: { xs: 2, md: 0 },
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
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                variant="h4"
                sx={{
                  ...typography.displayM,
                  fontWeight: 600,
                  fontSize: "48px",
                  color: "#1C2D4B",
                  mb: 1,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {content.SRV500201}
                 <EditIconButton id="SRV500201" />
              </Typography>
             
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  ...typography.h2,
                  color: "#1C2D4B",
                  fontWeight: 600,
                  textAlign: { xs: "center", md: "left" },
                  mb: 1,
                }}
              >
                {content.SRV500202}
                <EditIconButton id="SRV500202" />
              </Typography>
              
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  ...typography.h5,
                  color: "#6B768A",
                  textAlign: { xs: "center", md: "left" },
                  mb: 6,
                }}
              >
                {content.SRV500203}
                 <EditIconButton id="SRV500203" />
              </Typography>
             
            </Box>
          </>
        )}

        {location.pathname === "/contact-us" && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              variant="h4"
              sx={{
                ...typography.displayM,
                fontWeight: 600,
                fontSize: "48px",
                color: "#1C2D4B",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {content.SRV500204}
              <EditIconButton id="SRV500204" />
            </Typography>
            
          </Box>
        )}

        {/* Service Cards */}
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
              {/* Image + inline Edit icon (aligned horizontally) */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  component="img"
                  src={`https://skillglow.bexatm.com${service.image}`}
                  alt="service icon"
                  sx={{
                    width: "45px",
                    height: "45px",
                    border: "1px solid gray",
                    padding: "5px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
                {/* image edit uses the image key from JSON */}
                {isAdmin && <EditIconButton id={service.imageKey} type="I" />}
              </Box>

              {/* Title + Description */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  mt: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography
                   sx={{ ...typography.h3, fontWeight: 600, fontSize: '28px', color: "#111827", mb: 1 }}
                  >
                    {service.title}
                   <EditIconButton id={service.titleKey} />
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography
                    sx={{
                      ...typography.h5,
                      fontWeight: 500,
                      color: "#00000099",
                    }}
                  >
                    {service.description}
                    <EditIconButton id={service.descKey} />
                  </Typography>                  
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
