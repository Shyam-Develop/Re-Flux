import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Chip,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import rentserviceimg from "../../../assets/RentService.png";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { typography } from "app/utils/constant";

export default function SellRentServicesCard({ services }) {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box sx={{ width: '1440px', height: '880px', backgroundColor: "#f9fafb" }}>

      {/* Heading */}
      <Typography
        sx={{
          ml: 8,
          ...typography.displayL,
          color: '#1C2D4B'
        }}
        variant="h3" fontWeight="bold" gutterBottom>
        Rent Instead?
      </Typography>

      <Typography
        variant="h5" sx={{
          mb: 4,
          color: '#1C2D4B',
          ...typography.h4,
          ml: 8
        }}>
        Check out these rentals
      </Typography>

      {/* Swiper */}
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        centeredSlides={false}
        style={{ padding: "0 40px" }}
        grabCursor={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        pagination={false} // disable default swiper pagination
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <Card
              sx={{
                width: "416px", // ✅ fixed card size
                height: "573px",
                borderRadius: 2,
                border: "1px solid #e0e0e0",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: "0px 6px 16px rgba(0,0,0,0.1)",
                  transform: "translateY(-4px)",
                },
                mx: "auto",
              }}
            >
              {/* Image */}
              <Box sx={{ position: "relative", mx: "auto", mt: 2 }}>
                <Box
                  sx={{
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={service.img}
                    alt={service.title}
                    sx={{
                      width: "384px", // ✅ fixed image container
                      height: "240px",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                {/* Chips */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 20,
                    right: 20,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Chip
                    label="🔧 Available for Rent"
                    size="small"
                    sx={{
                      ...typography.bodyBasemedium,
                      fontSize: "14px",
                      bgcolor: "#1B7B4E",
                      color: "white",
                      fontWeight: 400,
                      borderRadius: 0
                    }}
                  />
                  <Chip
                    label="🛡️ Safety Tested"
                    size="small"
                    sx={{
                      ...typography.bodyBasemedium,
                      fontSize: "14px",
                      bgcolor: "#2F6FBA",
                      color: "white",
                      fontWeight: 400,
                      borderRadius: 0
                    }}
                  />
                </Box>
              </Box>

              {/* Content */}
              <CardContent
                sx={{
                  flexGrow: 1,
                  width: "384px",
                  height: "183px",
                  mx: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 0,
                  mt: 2,
                }}
              >
                {/* Title + Price */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <Typography sx={{ ...typography.h4, color: "#0b0b0b" }}>
                    Circular Lifting Magnet
                  </Typography>
                  <Typography
                    sx={{ ...typography.h4, color: "#5937E0" }} // purple color for price
                  >
                    $25
                  </Typography>
                </Box>

                {/* Two-column details */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Box>
                    <Typography sx={{ ...typography.h6, color: "#0E1626" }}>
                      Lift Capacity
                    </Typography>
                    <Typography sx={{ ...typography.bodySmall, color: "#677489" }}>
                      2.5 Tons
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ ...typography.h6, color: "#0E1626" }}>
                      Power Supply
                    </Typography>
                    <Typography sx={{ ...typography.bodySmall, color: "#677489" }}>
                      220V / 110V
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ ...typography.h6, color: "#0E1626" }}>
                      Power Supply
                    </Typography>
                    <Typography sx={{ ...typography.bodySmall, color: "#677489" }}>
                      220V / 110V
                    </Typography>
                  </Box>
                </Box>

                {/* Size Options */}
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "14px", color: "#222" }}>
                    Size Options
                  </Typography>
                  <Typography sx={{ fontSize: "14px", color: "#555" }}>
                    700mm / 900mm / 1200mm
                  </Typography>
                </Box>
              </CardContent>
              {/* Button */}
              <Box sx={{ p: 2, pt: 0, paddingTop: '50px' }}>
                <Button
                  onClick={() => navigate("/home/CheckAvailabilty")}
                  fullWidth
                  variant="contained"
                  sx={{
                    width: "384px",
                    height: "50px",
                    borderRadius: 4,
                    textTransform: "none",
                    backgroundColor: "#1C2D4B",
                    "&:hover": { backgroundColor: "#1C2D4B" },
                    mx: "auto",
                  }}
                >
                  View Details
                </Button>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 3,
        }}
      >
        {services.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 30,
              height: 3,
              borderRadius: 2,
              backgroundColor: index <= activeIndex ? "#1C2D4B" : "#d3d3d3",
              mx: 0.5,
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </Box>

        <Typography
          sx={{
            ...typography.h3R,
            color: "#1a4dab",
            fontWeight: 600,
            textDecoration:'underline',
            ml: 120,
          }}
        >
          View All Magnets for rent
          <ArrowRightAltIcon
            sx={{
              color: "#1a4dab",
              fontWeight: "bold",
              verticalAlign: "middle",
              ml: 1,
              fontSize: "3rem",
            }}
          />
        </Typography>

    </Box>
  );
}

// export default function SellRentServicesCard({ services }) {
//   return (
//     <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#f9fafb" }}>
//       {/* Section Tag */}
//       <Button
//         disableElevation
//         disableRipple
//         sx={{
//           mb: 2,
//           textTransform: "none",
//           fontSize: "0.8rem",
//           fontWeight: 500,
//           color: "#1a4dab",
//           backgroundColor: "rgba(36,121,233,0.08)",
//           borderRadius: "20px",
//           px: 2,
//           py: 0.5,
//           "&:hover": { backgroundColor: "rgba(36,121,233,0.15)" },
//         }}
//       >
//         Rent Services
//       </Button>

//       {/* Heading */}
//       <Typography variant="h3" fontWeight="bold" gutterBottom>
//         Rent Industrial Services With Magnets With Ease
//       </Typography>
//       <Typography variant="h5" sx={{ mb: 4, color: "text.secondary" }}>
//         Get powerful lifting magnets when you need them — without the upfront
//         cost. Flexible rental plans, quick installation, and reliable
//         performance for every project!
//       </Typography>

//       {/* Swiper for 3 cards per view */}
//       <Swiper
//         modules={[Navigation]}
//         navigation
//         spaceBetween={24}
//         slidesPerView={3}
//         breakpoints={{
//           0: { slidesPerView: 1 },   // mobile
//           600: { slidesPerView: 2 }, // tablet
//           900: { slidesPerView: 3 }, // desktop
//         }}
//       >
//         {services.map((service) => (
//           <SwiperSlide key={service.id}>
//             <Card
//               sx={{
//                 borderRadius: 1,
//                 boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
//                 overflow: "hidden",
//                 height: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 transition: "all 0.4s ease-in-out",
//                 "&:hover": {
//                   transform: "scale(1.03)",
//                   backgroundColor: "#0b2d55",
//                   color: "white",
//                 },
//                 "&:hover .MuiTypography-root": { color: "white !important" },
//                 "&:hover .availability-btn": {
//                   backgroundColor: "#944708 !important",
//                 },
//               }}
//             >
//               {/* Image + Chips */}
//               <Box sx={{ position: "relative" }}>
//                 <CardMedia
//                   component="img"
//                   image={service.img}
//                   alt={service.title}
//                   sx={{
//                     height: 240,
//                     objectFit: "contain",
//                     borderRadius: 1,
//                     mt: 2,
//                   }}
//                 />
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     top: 30,
//                     left: 30,
//                     right: 30,
//                     display: "flex",
//                     justifyContent: "space-between",
//                   }}
//                 >
//                   <Chip
//                     label="Available for Rent"
//                     size="small"
//                     sx={{ bgcolor: "#2e7d32", color: "white", fontWeight: 500 }}
//                   />
//                   <Chip
//                     label="Safety Tested"
//                     size="small"
//                     sx={{ bgcolor: "#1565c0", color: "white", fontWeight: 500 }}
//                   />
//                 </Box>
//               </Box>

//               {/* Content */}
//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     mb: 1,
//                   }}
//                 >
//                   <Typography variant="h6" fontWeight="bold">
//                     {service.title}
//                   </Typography>
//                   <Typography variant="body1" fontWeight="bold" sx={{ color: "green" }}>
//                     Starting at ${service.price}
//                   </Typography>
//                 </Box>
//                 <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//                   {service.type}
//                 </Typography>
//                 <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                   <Box>
//                     <Typography variant="subtitle2" fontWeight="bold">
//                       Lift Capacity
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {service.liftCapacity}
//                     </Typography>
//                   </Box>
//                   <Box>
//                     <Typography variant="subtitle2" fontWeight="bold">
//                       Power Supply
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {service.powerSupply}
//                     </Typography>
//                   </Box>
//                 </Box>
//                 <Typography variant="body2" sx={{ mt: 2, color: "text.secondary" }}>
//                   {service.sizes}
//                 </Typography>
//               </CardContent>

//               {/* Button */}
//               <Box sx={{ p: 2, pt: 0 }}>
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   className="availability-btn"
//                   sx={{
//                     borderRadius: 2,
//                     textTransform: "none",
//                     bgcolor: "#0b2d55",
//                   }}
//                 >
//                   Check Availability
//                 </Button>
//               </Box>
//             </Card>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Box>
//   );
// }
