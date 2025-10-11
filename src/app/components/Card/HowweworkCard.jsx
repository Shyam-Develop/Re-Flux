import { React, useState } from "react";
import { Box, Typography, Card, CardContent, CardMedia, Chip } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import Howweworkimg from "../../../assets/Howwework.png";
import { typography } from "app/utils/constant";

const steps = [
  { img: Howweworkimg, step: "Step 1", title: "Diagnose", desc: "Intake inspection, electrical tests, root-" },
  { img: Howweworkimg, step: "Step 1", title: "Quote", desc: "Scope, parts, TAT band, warranty & price" },
  { img: Howweworkimg, step: "Step 1", title: "Repair/rewind", desc: "Electrical + mechanical by certified" },
  { img: Howweworkimg, step: "Step 1", title: "Load-test", desc: "Pass/fail with record" },
  { img: Howweworkimg, step: "Step 1", title: "Repair/rewind", desc: "Electrical + mechanical by certified" },
  { img: Howweworkimg, step: "Step 1", title: "Load-test", desc: "Pass/fail with record" }
];

export default function ProcessCards() {
  const [activeIndex, setActiveIndex] = useState(0);

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
      <SwiperSlide key={index} style={{ width: "100%", maxWidth: 400 }}>
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
          }}
        >
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
            <Chip
              label={item.step}
              size="small"
              sx={{
                backgroundColor: "#f0f6ff",
                color: "#1a4dab",
                fontWeight: 500,
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: { xs: "12px", md: "14px" },
                mb: 1,
                alignSelf: "flex-start",
              }}
            />
            <Typography
              sx={{
                ...typography.h3,
                fontSize: { xs: "16px", md: "20px" },
                color: "#1a1a1a",
                mb: 1,
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                ...typography.bodyBase,
                fontWeight: 400,
                fontSize: { xs: "14px", md: "18px" },
                color: "#99A0AE",
              }}
            >
              {item.desc}
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
    Sample load-test certificate (PDF) →
  </Typography>
</Box>


  );
}