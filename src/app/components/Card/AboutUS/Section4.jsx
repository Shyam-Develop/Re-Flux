import React from "react";
import { Box, Typography, Card, CardMedia } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ind1 from "../../../../assets/industry1.png";
import ind2 from "../../../../assets/industry2.png";
import ind3 from "../../../../assets/industry3.png";
import { typography } from "app/utils/constant";
// Example data
const industries = [
  {
    id: 1,
    title: "Food Processing Industry",
    description: "Maintain a clean and inviting environment by regularly dusting.",
    img: ind1,
  },
  {
    id: 2,
    title: "Warehouse Operations",
    description: "Maintain a fresh and organized space with consistent dusting, mopping, and surface care.",
    img: ind2
  },
  {
    id: 3,
    title: "Metal Industries",
    description: "Keep your facility clean and safe with professional upkeep.",
    img: ind3,
  },
  {
    id: 4,
    title: "Healthcare Facilities",
    description: "Ensure hygiene and cleanliness for patient safety.",
    img: ind1,
  },
];

export default function IndustriesSwiper() {
  return (
    <Box sx={{ p: { xs: 2, md: 6 } }}>
      <Typography sx={{
        ...typography.displayM,
        color:"#1C2D4B"
      }}>
        Industries We Serve
      </Typography>

       <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={3} // show 3 at a time
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
        {industries.map((industry) => (
          <SwiperSlide key={industry.id}>
          <Card
  sx={{
    borderRadius: 3,
    overflow: "hidden",
    position: "relative",
    height: 260,
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
  }}
>
  {/* Background Image */}
  <CardMedia
    component="img"
    image={industry.img}
    alt={industry.title}
    sx={{
      height: "100%",
      width: "100%",
      objectFit: "cover",
    }}
  />

  {/* Floating Overlay Box */}
  <Box
    sx={{
      position: "absolute",
      bottom: 16,          // lift the box a bit above the bottom
      left: 16,
      right: 16,
      bgcolor: "white",
      p: 2,
      borderRadius: 2,
      boxShadow: "0px 4px 12px rgba(0,0,0,0.15)", // floating effect
    }}
  >
    <Typography sx={{
        ...typography.h4,
        color:"#0B121E",
      mt: 0.5 }}>
      {industry.title}
    </Typography>
    <Typography
    sx={{
        ...typography.bodyBase,
        color:"#99A0AE",
      mt: 0.5 }}
    >
      {industry.description}
    </Typography>
  </Box>
</Card>

          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Progressbar Style */}
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
