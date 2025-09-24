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
        width: "1440px",
        height: "750px",  //in figma 895px
        mx: "auto",
        p: 0, // remove extra padding
        position: "relative",
      }}
    >
      <Swiper
        spaceBetween={30} 
        slidesPerView={3}
        centeredSlides={false} 
        style={{ padding: "0 60px" }} 
        grabCursor={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        pagination={false}
      >
        {steps.map((item, index) => (
          <SwiperSlide key={index} style={{ width: "400px" }}>
            <Card
              sx={{
                width: "400px",
                height: "574px",
                borderRadius: 0,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              {/* Image */}
              <CardMedia
                component="img"
                image={item.img}
                alt={item.title}
                sx={{
                  width: "400px",
                  height: "400px",
                  objectFit: "cover",
                }}
              />

              {/* Content */}
              <CardContent
                sx={{
                  width: "400px",
                  height: "154px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  px: 2,
                  py: 2,
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
                    fontSize: "14px",
                    mb: 1,
                    alignSelf: "flex-start",
                  }}
                />
                <Typography
                  sx={{
                    ...typography.h3,
                    fontSize: "20px",
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
                    fontSize: "18px",
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 3,
        }}
      >
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
                  mt:4,
                  textDecoration: "underline"
                }}
              >
                Sample load-test certificate (PDF) →
              </Typography>
    </Box>

  );
}