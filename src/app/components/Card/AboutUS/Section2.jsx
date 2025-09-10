import React from "react";
import { Box, Card, CardContent, Typography, Chip, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import img2 from "../../../../assets/aboutusSection2.png"
const steps = [
  { step: "Step 1", title: "Diagnose", description: "Intake inspection, electrical tests, root-cause analysis.", image: img2 },
  { step: "Step 2", title: "Quote", description: "Scope, parts, TAT band, warranty & price approval.", image: img2 },
  { step: "Step 3", title: "Repair/rewind", description: "Electrical + mechanical by certified technicians.", image: img2 },
  { step: "Step 4", title: "Load-test (kN)", description: "Pass/fail with recorded values and photos.", image: img2 },
  { step: "Step 5", title: "Dispatch", description: "Pass/fail with recorded values and photos.", image: img2 },
  { step: "Step 6", title: "Final Report", description: "Detailed documentation of test results.", image: img2 },
];

export default function HowWeWorkSwiper() {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", px: 2, py: 6 }}>
      {/* Section Heading */}
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, textAlign: "center" }}>
        How we work
      </Typography>
      <Typography variant="body1" sx={{ color: "#4b5563", textAlign: "center", mb: 6 }}>
        Electrical and mechanical restoration with documented testing.
      </Typography>

      {/* Swiper */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
          1280: { slidesPerView: 5 }, // show 5 at desktop
        }}
        pagination={{
          clickable: true,
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
      >
        {steps.map((item, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                borderRadius: 2,
                border: "1px solid #e5e7eb",
                boxShadow: "none",
                overflow: "hidden",
                height: "100%",
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{ width: "100%", height: 160, objectFit: "cover" }}
              />
              <CardContent sx={{ p: 2 }}>
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
        >
          View Case Study
        </Button>
      </Box>

      {/* Custom Swiper styles */}
      <style>{`
        .custom-bullet {
          background: #d1d5db; /* gray */
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
          margin: 0 4px;
          opacity: 1;
        }
        .custom-bullet-active {
          background: #2563eb !important; /* blue for active */
        }
      `}</style>
    </Box>
  );
}
