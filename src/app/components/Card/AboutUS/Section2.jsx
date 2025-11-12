import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, Typography, Chip, Button, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import { typography } from "app/utils/constant";
import EditIcon from "@mui/icons-material/Edit";

export default function HowWeWorkSwiper() {
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // Fetch content
  useEffect(() => {
    fetch("https://skillglow.bexatm.com/ATM/ContentManageSysV1.php?contentId=Aboutus")
      .then((res) => res.json())
      .then((data) => setContent(data))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  // Check admin role
  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  // Edit handler
  const handleEdit = (contentTextID, type = "T") => {
    navigate(`/CmsEditor?contentId=Aboutus&contentTextID=${contentTextID}&contentType=${type}`);
  };

  // Admin edit icon
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

  const services = [
    { step: content.AU1021, title: content.AU1022, description: content.AU1023, image: `https://skillglow.bexatm.com${content.AU1024}` },
    { step: content.AU1025, title: content.AU1026, description: content.AU1027, image: `https://skillglow.bexatm.com${content.AU1028}` },
    { step: content.AU1029, title: content.AU1030, description: content.AU1031, image: `https://skillglow.bexatm.com${content.AU1032}` },
    { step: content.AU1033, title: content.AU1034, description: content.AU1035, image: `https://skillglow.bexatm.com${content.AU1036}` },
    { step: content.AU1037, title: content.AU1038, description: content.AU1039, image: `https://skillglow.bexatm.com${content.AU1040}` },
    { step: content.AU1041, title: content.AU1042, description: content.AU1043, image: `https://skillglow.bexatm.com${content.AU1044}` },
  ];

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "1440px" },
        height: { xs: "auto", md: "734px" },
        px: 2,
        py: 6,
        mx: "auto",
        mb: 20
      }}
    >
      {/* Section Heading */}
      <Typography
        sx={{
          ...typography.displayL,
          color: "#1C2D4B",
          mt: { xs: 3, md: 5 },
          fontSize: { xs: "28px", md: typography.displayL.fontSize },
          textAlign: { xs: "center", md: "left" },
        }}
        gutterBottom
      >
        {content.AU1019}
        <EditIconButton id="AU1019" />
      </Typography>

      <Typography
        variant="h5"
        sx={{
          ...typography.h5,
          color: "#99A0AE",
          mb: 4,
          fontSize: { xs: "16px", md: typography.h5.fontSize },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {content.AU1020}
        <EditIconButton id="AU1020" />
      </Typography>

      {/* Swiper */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true }}
        style={{ paddingBottom: "40px" }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2.2 },
          960: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                borderRadius: 0,
                border: "1px solid #e5e7eb",
                boxShadow: "none",
                overflow: "hidden",
                width: { xs: "100%", sm: "250px" },
                height: "510px",
                mx: "auto",
              }}
            >
              <Box >
                <Box
                  component="img"
                  src={service.image}
                  alt={service.title}
                  sx={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
                <Box  sx={{ position:'absolute', bottom: '92%', left: '200px' }}>
                  <EditIconButton id={`AU10${24 + index * 4}`} type="I" />
                </Box>
              </Box>

              <CardContent sx={{ height: "174px" }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Chip
                    label={service.step}
                    size="small"
                    sx={{
                      backgroundColor: "#e0f2fe",
                      color: "#0369a1",
                      fontWeight: 500,
                    }}
                  />
                  <EditIconButton id={`AU10${21 + index * 4}`} /> {/* Add this */}
                </Box>
                <Typography
                  variant="h6"
                  sx={{ ...typography.h3, fontWeight: 600, mb: 1, color: "#1C2D4B" }}
                >
                  {service.title}
                  <EditIconButton id={`AU10${22 + index * 4}`} />
                </Typography>
                <Typography
                  sx={{ ...typography.h5, fontWeight: 500, fontSize: '20px', color: "#4b5563", lineHeight: 1.5 }}
                >
                  {service.description}
                  <EditIconButton id={`AU10${23 + index * 4}`} />
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CTA */}
      <Box sx={{ textAlign: { xs: "center", md: "center" }, mt: 6 }}>
        <Button
          variant="text"
          endIcon={<span style={{ fontSize: "18px" }}>→</span>}
          sx={{
            textTransform: "none",
            fontWeight: 600,
            fontSize: "1rem",
            color: "#2563eb",
          }}
          onClick={() => navigate("/home/ViewCaseStudy")}
        >
          {content.AU1045}
        </Button>
        <EditIconButton id="AU1045" />
      </Box>

      {/* Swiper Pagination Style */}
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
