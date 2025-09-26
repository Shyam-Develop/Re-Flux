import React from "react";
import { Box, Card, CardContent, Typography, Chip, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import img2 from "../../../../assets/aboutusSection2.png";
import { useNavigate } from 'react-router-dom';
import { typography } from "app/utils/constant";

const steps = [
  { step: "Step 1", title: "Diagnose", description: "Intake inspection, electrical tests, root-cause analysis.", image: img2 },
  { step: "Step 2", title: "Quote", description: "Scope, parts, TAT band, warranty & price approval.", image: img2 },
  { step: "Step 3", title: "Repair/rewind", description: "Electrical + mechanical by certified technicians.", image: img2 },
  { step: "Step 4", title: "Load-test (kN)", description: "Pass/fail with recorded values and photos.", image: img2 },
  { step: "Step 5", title: "Dispatch", description: "Pass/fail with recorded values and photos.", image: img2 },
  { step: "Step 6", title: "Final Report", description: "Detailed documentation of test results.", image: img2 },
];

export default function HowWeWorkSwiper() {
  const navigate = useNavigate()
  return (
    <Box sx={{ width: '1440px', height: '734px', px: 2, py: 6 }}>
      {/* Section Heading */}

      <Typography
        sx={{
          ...typography.displayL,
          color: "#1C2D4B",
          mt: 5
        }}
        gutterBottom>
        How we work
      </Typography>
      <Typography
        variant="h5" sx={{
          ...typography.h5,
          color: "#99A0AE",
          mb: 4,

        }}>
        Electrical and mechanical restoration with documented testing.
      </Typography>

      {/* Swiper */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={5} // show 3 at a time
        pagination={{
          clickable: true,
        }}
        style={{
          paddingBottom: "40px", // space for pagination line
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
        }}
      >
        {steps.map((item, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                borderRadius: 0,
                border: "1px solid #e5e7eb",
                boxShadow: "none",
                overflow: "hidden",
                width: '250px',
                height: "418px",
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{ width: "250px", height: '250px', objectFit: "cover" }}
              />
              <CardContent sx={{ width: '250px', height: '148px' }}>
                <Chip
                  label={item.step}
                  size="small"
                  sx={{
                    backgroundColor: "#e0f2fe",
                    color: "#0369a1",
                    fontWeight: 500,
                    mb: 1,
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#4b5563", lineHeight: 1.5 }}>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CTA */}
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button
          variant="text"
          endIcon={<span style={{ fontSize: "18px" }}>→</span>}
          sx={{
            textTransform: "none",
            fontWeight: 600,
            fontSize: "1rem",
            color: "#2563eb",
          }}
          onClick={() => navigate("/home/ViewCaseStudy")}>
          View Case Study
        </Button>
      </Box>

      {/* Custom Swiper styles */}
      <style>
        {`
          .swiper-pagination {
            bottom: 0 !important;
          }
          .swiper-pagination-bullet {
            width: 30px;
            height: 3px;
            border-radius: 2px;
            background: #d1d5db; /* gray */
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background: #2563eb !important; /* blue active */
          }
        `}
      </style>
    </Box>
  );
}
