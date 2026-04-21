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
      img: `https://refluxmagnets.com${content.AU1069}`,
    },
    {
      title: content.AU1070,
      description: content.AU1071,
      img: `https://refluxmagnets.com${content.AU1072}`,
    },
    {
      title: content.AU1073,
      description: content.AU1074,
      img: `https://refluxmagnets.com${content.AU1075}`,
    },
    {
      title: content.AU1076,
      description: content.AU1077,
      img: `https://refluxmagnets.com${content.AU1078}`,
    },
  ];

  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        mt: { xs: 0, md: -3 },
        width: "100%",
        maxWidth:1200
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          ...typography.displayM,
          fontWeight: 600,
          color: "#1C2D4B",
          mb: 1,
          display: "flex",
          alignItems: "center",
          gap: 1,
          fontSize: { xs: "24px", md: "40px" },
        }}
      >
        {content.AU1066}
        <EditIconButton id="AU1066" />
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          ...typography.h4,
          fontWeight: 400,
          color: "#6B768A",
          mb: { xs: 3, md: 4 },
          fontSize: { xs: "14px", md: "18px" },
        }}
      >
        Our magnets power and protect operations across India’s key industrial
        sectors.
      </Typography>

      {/* Swiper FULL WIDTH - width: "100vw"(call below width) */}
      <Box sx={{ width: "1200px", ml: { md: "-48px" } }}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          style={{ paddingBottom: "40px" }}
        >
          {industries.map((industry, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: "auto",
              }}
            >
              <Card
                sx={{
                  width: { xs: "90vw", sm: "80vw", md: "608px" },
                  borderRadius: 3,
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 220, sm: 280, md: 400 },
                    position: "relative",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={industry.img}
                    alt={content?.[`AU10${69 + index * 3}_ALT`] || industry.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {isAdmin && (
                    <IconButton
                      size="small"
                      onClick={() =>
                        handleEdit(`AU10${69 + index * 3}`, "I")
                      }
                      sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        backgroundColor: "rgba(255,255,255,0.8)",
                      }}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                  )}
                </Box>

                {/* Text Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: { xs: 12, md: 16 },
                    left: { xs: 12, md: 16 },
                    right: { xs: 12, md: 16 },
                    bgcolor: "white",
                    p: { xs: 1.5, md: 2 },
                    borderRadius: 2,
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
                  }}
                >
                  <Typography
                    sx={{
                      ...typography.h4,
                      fontWeight: 700,
                      fontSize: { xs: "16px", md: "24px" },
                    }}
                  >
                    {industry.title}
                    <EditIconButton id={`AU10${67 + index * 3}`} />
                  </Typography>

                  <Typography
                    sx={{
                      ...typography.bodyBase,
                      fontWeight:400,
                      fontSize: { xs: "13px", md: "18px" },
                    }}
                  >
                    {industry.description}
                    <EditIconButton id={`AU10${68 + index * 3}`} />
                  </Typography>
                </Box>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Pagination style */}
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
