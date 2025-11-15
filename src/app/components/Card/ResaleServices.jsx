import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { typography } from "app/utils/constant";
import { useNavigate } from "react-router-dom";

const ResaleServices = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [content, setContent] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  // Fetch CMS data
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_CMS_URL}?contentId=Home`
    )
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, []);

  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  const handleEdit = (id, type = "T") => {
    navigate(
      `/CmsEditor?contentId=Home&contentTextID=${id}&contentType=${type}`
    );
  };

  const EditIconButton = ({ id, type = "T" }) =>
    isAdmin ? (
      <IconButton
        size="small"
        onClick={() => handleEdit(id, type)}
        sx={{
          ml: 0.5,
          p: 0.4,
          background: "#eee",
          borderRadius: "50%",
          "&:hover": { background: "#ddd" },
        }}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    ) : null;

  // Build cards from JSON
  const services = [
    {
      id: 1,
      title: content.HM1076,
      desc: content.HM1077,
      img: `https://cmsreflux.bexatm.com${content.HM1078}`,
      titleId: "HM1076",
      descId: "HM1077",
      imgId: "HM1078",
    },
    {
      id: 2,
      title: content.HM1079,
      desc: content.HM1080,
      img: `https://cmsreflux.bexatm.com${content.HM1081}`,
      titleId: "HM1079",
      descId: "HM1080",
      imgId: "HM1081",
    },
  ];

  return (
 <Box
  sx={{
    px: { xs: 2, sm: 3, md: 4 },
    py: { xs: 4, md: 6 },
    backgroundColor: "#f9fafb",
  }}
>
  {/* Label */}
  <Button
    disableRipple
    sx={{
      backgroundColor: "rgba(36,121,233,0.08)",
      color: "#2F6FBA",
      borderRadius: "20px",
      textTransform: "none",
      px: 2,
      py: 0.5,
      mb: 2,
      fontWeight: 500,
      ...typography.bodySmall,
      fontSize: { xs: "12px", md: "14px" },
    }}
  >
    {content.HM1073} <EditIconButton id="HM1073" />
  </Button>

  {/* Heading */}
  <Typography
    sx={{
      ...typography.displayL,
      fontWeight: 700,
      fontSize: { xs: "32px", sm: "42px", md: "56px" },
      color: "#1C2D4B",
      lineHeight: 1.2,
    }}
    gutterBottom
  >
    {content.HM1074} <EditIconButton id="HM1074" />
  </Typography>

  {/* Subtitle */}
  <Typography
    sx={{
      ...typography.h4,
      color: "#99A0AE",
      mb: 4,
      fontSize: { xs: "14px", sm: "16px", md: "18px" },
      width: { xs: "100%", md: "1312px" },
      lineHeight: 1.5,
    }}
  >
    {content.HM1075} <EditIconButton id="HM1075" />
  </Typography>

  {/* Swiper – Responsive */}
  <Swiper
    slidesPerView={1}
    spaceBetween={20}
    breakpoints={{
      600: { slidesPerView: 1.3 },
      900: { slidesPerView: 2 },
    }}
    navigation
    modules={[Navigation]}
  >
    {services.map((service) => (
      <SwiperSlide key={service.id}>
        <Card
          onMouseEnter={() => setHoveredCard(service.id)}
          onMouseLeave={() => setHoveredCard(null)}
          sx={{
            borderRadius: 3,
            boxShadow: 3,
            overflow: "hidden",
            cursor: "pointer",
            transition: "all 0.3s ease",
            backgroundColor:
              hoveredCard === service.id ? "#1a2a44" : "#f5f7fa",
            color: hoveredCard === service.id ? "#fff" : "#000",
          }}
        >
          {/* Image */}
          <Box sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              image={service.img}
              sx={{
                height: { xs: 180, sm: 220, md: 260 },
                padding: { xs: "20px", md: "30px" },
                borderRadius: "35px",
                objectFit: "cover",
                transition: "0.4s ease",
                transform:
                  hoveredCard === service.id ? "scale(1.05)" : "scale(1)",
              }}
            />

            {/* Edit Icon */}
            <Box
              sx={{
                position: "absolute",
                top: { xs: 10, md: 20 },
                right: { xs: 10, md: 17 },
                zIndex: 10,
              }}
            >
              <EditIconButton id={service.imgId} type="I" />
            </Box>
          </Box>

          <CardContent>
            <Typography
              sx={{
                ...typography.h4,
                fontWeight: 400,
                fontSize: { xs: "18px", sm: "20px", md: "24px" },
                color: hoveredCard === service.id ? "#fff" : "#000",
              }}
            >
              {service.title} <EditIconButton id={service.titleId} />
            </Typography>

            <Typography
              sx={{
                mt: 1,
                mb: 2,
                ...typography.bodyBase,
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                color:
                  hoveredCard === service.id
                    ? "rgba(255,255,255,0.8)"
                    : "text.secondary",
              }}
            >
              {service.desc} <EditIconButton id={service.descId} />
            </Typography>

            {hoveredCard === service.id && (
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#b3570d",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: "25px",
                  textTransform: "none",
                  fontSize: { xs: "14px", md: "16px" },
                  "&:hover": { backgroundColor: "#944708" },
                }}
              >
                {content.HM1082}
                <EditIconButton id="HM1082" />
              </Button>
            )}
          </CardContent>
        </Card>
      </SwiperSlide>
    ))}
  </Swiper>
</Box>

  );
};

export default ResaleServices;
