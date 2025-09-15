import {React, useState} from "react";
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
    <Box sx={{ p: 1, position: 'relative' }}>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        grabCursor={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        pagination={false}
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
                    fontWeight: 500,
                    fontFamily: "Plus Jakarta Sans-Medium",
                    fontSize: "14px",
                    mb: 1
                  }}
                />
                <Typography 
                // variant="h6" 
                sx={{ 
                  ...typography.h3R,
                  fontWeight: 600, 
                color: "#1a1a1a" 
                }}>
                  {item.title}
                </Typography>
                <Typography 
              
                sx={{ 
                  ...typography.bodyBasemedium,
                  fontWeight: 400,
                  color: "text.secondary" 

                }}>
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom progress line (like image1) */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
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
              backgroundColor: index <= activeIndex ? '#0066cc' : '#d3d3d3',
              mx: 0.5,
              transition: 'background-color 0.3s ease',
            }}
          />
        ))}
      </Box>
    </Box>
  );
}