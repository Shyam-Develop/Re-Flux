import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardMedia, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { typography } from "app/utils/constant";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export default function IndustriesSwiper() {
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // Fetch content
  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}?contentId=Aboutus`)
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
  const handleEdit = (contentTextID, type = "T") => {
    navigate(`/CmsEditor?contentId=Aboutus&contentTextID=${contentTextID}&contentType=${type}`);
  };

  // Admin icon
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
          "&:hover": { backgroundColor: "#e0e0e0", color: "#070808ff" },
        }}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    ) : null;

  if (!content) return null;

  // Map JSON → cards
  const industries = [
    {
      title: content.AU1067,
      description: content.AU1068,
      img: `https://cmsreflux.bexatm.com${content.AU1069}`,
    },
    {
      title: content.AU1070,
      description: content.AU1071,
      img: `https://cmsreflux.bexatm.com${content.AU1072}`,
    },
    {
      title: content.AU1073,
      description: content.AU1074,
      img: `https://cmsreflux.bexatm.com${content.AU1075}`,
    },
    {
      title: content.AU1076,
      description: content.AU1077,
      img: `https://cmsreflux.bexatm.com${content.AU1078}`,
    },
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 6 } }}>
      {/* Section title */}
      <Typography
        sx={{
          ...typography.displayM,
          fontWeight:600,
          color: "#1C2D4B",
          mb: 4,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        {content.AU1066}
        <EditIconButton id="AU1066" />
      </Typography>

      {/* Swiper */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        style={{ paddingBottom: "40px" }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
        }}
      >
        {industries.map((industry, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                position: "relative",
                height: 260,
                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              {/* Image with edit icon */}
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  image={industry.img}
                  alt={industry.title}
                  sx={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                {/* Edit Image */}
                {isAdmin && (
                  <IconButton
                    size="small"
                    onClick={() => handleEdit(`AU10${69 + index * 3}`, "I")}
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      backgroundColor: "rgba(255,255,255,0.8)",
                      color: "#1C2D4B",
                      border: "1px solid #ccc",
                      "&:hover": { backgroundColor: "#e0e0e0", color: "#070808ff" },
                      zIndex: 2,
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                )}
              </Box>

              {/* Floating text box */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  right: 16,
                  bgcolor: "white",
                  p: 2,
                  borderRadius: 2,
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
                }}
              >
                <Typography sx={{ ...typography.h4, fontWeight:700, color: "#0B121E", mt: 0.5 }}>
                  {industry.title}
                  <EditIconButton id={`AU10${67 + index * 3}`} />
                </Typography>
                <Typography sx={{ ...typography.bodyBase, fontWeight:400, fontFamily:'Fira Sans', color: "#99A0AE", mt: 0.5 }}>
                  {industry.description}
                  <EditIconButton id={`AU10${68 + index * 3}`} />
                </Typography>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Style */}
      <style>
        {`
          .swiper-pagination {
            bottom: 0 !important;
          }
          .swiper-pagination-bullet {
            width: 30px;
            height: 3px;
            border-radius: 2px;
            background: #d1d5db;
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background: #2563eb !important;
          }
        `}
      </style>
    </Box>
  );
}
