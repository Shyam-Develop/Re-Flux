import { React, useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Chip,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import Howweworkimg from "../../../assets/Howwework.png";
import { typography } from "app/utils/constant";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function ProcessCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  // ✅ Fetch content from API
  useEffect(() => {
    fetch(
      "https://skillglow.bexatm.com/ATM/ContentManageSysV1.php?contentId=HowWeWorkCard"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setContent(data))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  // ✅ Check login role
  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  // ✅ Navigate to CMS editor
  const handleEdit = (contentTextID, type = "T") => {
    navigate(
      `/CmsEditor?contentId=HowWeWorkCard&contentTextID=${contentTextID}&contentType=${type}`
    );
  };

  // ✅ Reusable Edit button
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

  const steps = [
    {
      id: 1,
      img: `https://skillglow.bexatm.com${content.CON190016}`,
      step: content.CON190017,
      title: content.CON190018,
      desc: content.CON190019,
    },
    {
      id: 2,
      img: `https://skillglow.bexatm.com${content.CON190020}`,
      step: content.CON190021,
      title: content.CON190022,
      desc: content.CON190023,
    },
    {
      id: 3,
      img: `https://skillglow.bexatm.com${content.CON190024}`,
      step: content.CON190025,
      title: content.CON190026,
      desc: content.CON190027,
    },
    {
      id: 4,
      img: `https://skillglow.bexatm.com${content.CON190028}`,
      step: content.CON190029,
      title: content.CON190030,
      desc: content.CON190031,
    },
    {
      id: 6,
      img: `https://skillglow.bexatm.com${content.CON190036}`,
      step: content.CON190037,
      title: content.CON190038,
      desc: content.CON190039,
    },
    {
      id: 5,
      img: `https://skillglow.bexatm.com${content.CON190032}`,
      step: content.CON190033,
      title: content.CON190034,
      desc: content.CON190035,
    },
  ];
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "1440px" },
        height: { xs: "auto", md: "750px" },
        mx: "auto",
        p: { xs: 2, md: 0 },
        position: "relative",
      }}
    >
      <Swiper
        spaceBetween={20}
        slidesPerView={1} // default for mobile
        breakpoints={{
          600: { slidesPerView: 2, spaceBetween: 20 }, // tablet
          960: { slidesPerView: 3, spaceBetween: 30 }, // desktop
        }}
        centeredSlides={false}
        style={{ padding: { xs: "0 10px", md: "0 60px" } }}
        grabCursor={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        pagination={false}
      >
        {steps.map((item, index) => (
          <SwiperSlide key={item.id} style={{ width: "100%", maxWidth: 400 }}>
            <Card
              sx={{
                width: "100%",
                maxWidth: 400,
                height: { xs: "auto", md: "574px" },
                borderRadius: 0,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* 🖼 Image */}
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  image={item.img}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: { xs: 200, md: 400 },
                    objectFit: "cover",
                  }}
                />

                {/* 🖊️ Edit Icon for Image */}
                {isAdmin && (
                  <IconButton
                    size="small"
                    onClick={() => handleEdit(`CON1900${16 + index * 4}`, "I")}
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      bgcolor: "rgba(255,255,255,0.7)",
                      "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                )}
              </Box>

              {/* 📄 Card Content */}
              <CardContent
                sx={{
                  width: "100%",
                  height: { xs: "auto", md: 154 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  px: { xs: 1, md: 2 },
                  py: { xs: 1, md: 2 },
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    mb: 1,
                  }}
                >
                  <Chip
                    label={item.step}
                    size="small"
                    sx={{
                      backgroundColor: "#f0f6ff",
                      color: "#1a4dab",
                      fontWeight: 500,
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      fontSize: { xs: "12px", md: "14px" },
                    }}
                  />
                  {isAdmin && (
                    <EditIconButton id={`CON1900${17 + index * 4}`} />
                  )}
                </Typography>

                <Typography
                  sx={{
                    ...typography.h3,
                    fontSize: { xs: "16px", md: "20px" },
                    color: "#1a1a1a",
                    mb: 1,
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Space Grotesk",
                    gap: "4px",
                  }}
                >
                  {item.title}
                  {isAdmin && (
                    <EditIconButton id={`CON1900${18 + index * 4}`} />
                  )}
                </Typography>

                <Typography
                  sx={{
                    ...typography.bodyBase,
                    fontWeight: 400,
                    fontSize: { xs: "14px", md: "18px" },
                    color: "#99A0AE",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  {item.desc}
                  {isAdmin && (
                    <EditIconButton id={`CON1900${19 + index * 4}`} />
                  )}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Progress bar */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        {steps.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 30,
              height: 3,
              borderRadius: 2,
              backgroundColor: index <= activeIndex ? "#0066cc" : "#d3d3d3",
              mx: 0.5,
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </Box>

      <Typography
        sx={{
          ...typography.bodyBase,
          color: "#1d4ed8",
          fontWeight: 600,
          cursor: "pointer",
          textAlign: "center",
          mt: 4,
          textDecoration: "underline",
          fontSize: { xs: "14px", md: "16px" },
        }}
      >
        {content.CON190040}
        <EditIconButton id="CON190040" />
      </Typography>
    </Box>
  );
}
