import React from "react";
import { Box, Typography, Card, CardContent, CardMedia, Chip } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import Howweworkimg from "../../../assets/Howwework.png";

const steps = [
  { img: Howweworkimg, step: "Step 1", title: "Diagnose", desc: "Intake inspection, electrical tests, root-" },
  { img: Howweworkimg, step: "Step 1", title: "Quote", desc: "Scope, parts, TAT band, warranty & price" },
  { img: Howweworkimg, step: "Step 1", title: "Repair/rewind", desc: "Electrical + mechanical by certified" },
  { img: Howweworkimg, step: "Step 1", title: "Load-test", desc: "Pass/fail with record" },
  { img: Howweworkimg, step: "Step 1", title: "Repair/rewind", desc: "Electrical + mechanical by certified" },
  { img: Howweworkimg, step: "Step 1", title: "Load-test", desc: "Pass/fail with record" }
];

export default function ProcessCards() {
  return (
    <Box sx={{ p: 1 }}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={3} // how many cards visible
        pagination={{ clickable: true }} // dots under carousel
        grabCursor={true} // allows drag/slide with mouse
      >
        {steps.map((item, index) => (
          <SwiperSlide key={index}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardMedia component="img" height="200" image={item.img} alt={item.title} />
              <CardContent>
                <Chip
                  label={item.step}
                  size="small"
                  sx={{
                    backgroundColor: "#f0f6ff",
                    color: "#1a4dab",
                    fontWeight: "bold",
                    mb: 1
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1a1a1a" }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
