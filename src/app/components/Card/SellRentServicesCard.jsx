import React from "react";
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
import { Navigation } from "swiper/modules";
import rentserviceimg from "../../../assets/RentService.png";
import { useNavigate } from "react-router-dom";
import { typography } from "app/utils/constant";

export default function SellRentServicesCard({ services }) {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#f9fafb" }}>
      {/* Section Tag */}
      {/* <Button
        disableElevation
        disableRipple
        sx={{
          mb: 2,
          textTransform: "none",
          fontSize: "0.8rem",
          fontWeight: 500,
          color: "#1a4dab",
          backgroundColor: "rgba(36,121,233,0.08)",
          borderRadius: "20px",
          px: 2,
          py: 0.5,
          "&:hover": { backgroundColor: "rgba(36,121,233,0.15)" },
        }}
      >
        Rent Services
      </Button> */}

      {/* Heading */}
      <Typography
        sx={{
          ...typography.h3RB,
          fontWeight: 700,
          color: "#1C2D4B",
        }}
      >
        Rent instead ?
      </Typography>
      <Typography
        //   variant="h5"
        sx={{
          ...typography.h3B1,
          mb: 4,
          color: "text.secondary",
        }}
      >
        Check Out these rentals
      </Typography>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
        }}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <Card
              sx={{
                borderRadius: 2,
                border: "1px solid #e0e0e0",
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: "0px 6px 16px rgba(0,0,0,0.1)",
                  transform: "translateY(-4px)",
                },
              }}
            >
              {/* Image */}
              <Box sx={{ position: "relative", mx: 2, my: 2 }}>
                <Box
                  sx={{
                    height: 160,
                    width: "100%",
                    borderRadius: 2,
                    overflow: "hidden",
                    backgroundColor: "#fff",
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
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // ✅ Show full image (no cropping)
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
                    label="Available for Rent"
                    size="small"
                    sx={{
                      fontFamily: "Inter-Regular",
                      fontSize: "14px",
                      bgcolor: "#2e7d32",
                      color: "white",
                      fontWeight: 400,
                    }}
                  />
                  <Chip
                    label="Safety Tested"
                    size="small"
                    sx={{
                      fontFamily: "Inter-Regular",
                      fontSize: "14px",
                      bgcolor: "#1565c0",
                      color: "white",
                      fontWeight: 400,
                    }}
                  />
                </Box>
              </Box>

              {/* Content */}
              <CardContent sx={{ flexGrow: 1 }}>
                {/* Title + Price */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      ...typography.h3B1,
                      color: "#111",
                      fontWeight: 400,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      ...typography.h3B1,
                      fontWeight: 400,
                      color: "#1565c0",
                    }}
                  >
                    ${service.price}
                  </Typography>
                </Box>

                {/* Sub Type */}
                  <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                <Typography
                 
                  color="text.secondary"
                  sx={{ 
                    mb: 2,
                    fontFamily: "SpaceGrotesk-Regular",
                    fontWeight: 600,
                    fontSize: "16px"
                 }}
                >
                  {service.type}
                </Typography>
                    <Typography
                    color="text.secondary"
                   sx={{ 
                    mb: 2,
                    fontFamily: "SpaceGrotesk-Regular",
                    fontWeight: 600,
                    fontSize: "16px"
                 }}
                  >
                    {service.subtitile}
                  </Typography>
                  </Box>

                {/* Lift + Power */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Box>
                    <Typography 
                  sx={{ 
                    // mb: 2,
                    fontFamily: "SpaceGrotesk-Regular",
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "#111"
                 }}
                    >
                      Lift Capacity
                    </Typography>
                    <Typography 
                    color="text.secondary"
                  sx={{ 
                    mb: 2,
                    fontFamily: "SpaceGrotesk-Regular",
                    fontWeight: 600,
                    fontSize: "16px"
                 }}
                    >
                      {service.liftCapacity}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{ 
                    // mb: 2,
                    fontFamily: "SpaceGrotesk-Regular",
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "#111"
                 }}
                     >
                      Power Supply
                    </Typography>
                    <Typography 
                    color="text.secondary"
                  sx={{ 
                    mb: 2,
                    fontFamily: "SpaceGrotesk-Regular",
                    fontWeight: 600,
                    fontSize: "16px"
                 }}
                     >
                      {service.powerSupply}
                    </Typography>
                  </Box>
                   <Box>
                    <Typography
                  sx={{ 
                    // mb: 2,
                    fontFamily: "SpaceGrotesk-Regular",
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "#111"
                 }}
                     >
                      Power Supply
                    </Typography>
                    <Typography
                     color="text.secondary"
                  sx={{ 
                    mb: 2,
                    fontFamily: "SpaceGrotesk-Regular",
                    fontWeight: 600,
                    fontSize: "16px"
                 }}
                     >
                      {service.powerSupply}
                    </Typography>
                  </Box>
                </Box>

                {/* Sizes */}
                 <Typography 
               sx={{ 
                    // mb: 2,
                    fontFamily: "SpaceGrotesk-Regular",
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "#111"
                 }}
                 >
                    Size Options
                    </Typography>
                <Typography
                 color="text.secondary"
                  sx={{ 
                    mb: 2,
                    fontFamily: "SpaceGrotesk-Regular",
                    fontWeight: 600,
                    fontSize: "16px"
                 }}
                >
                  {service.sizes}
                </Typography>
              </CardContent>

              {/* Button */}
              <Box sx={{ p: 2, pt: 0 }}>
                <Button
                  onClick={() => navigate("/home/CheckAvailabilty")}
                  fullWidth
                  variant="contained"
                  className="availability-btn"
                  sx={{
                    ...typography.buttonSBold,
                    borderRadius: 1,
                    textTransform: "none",
                    backgroundColor: "#0b2d55",
                    "&:hover": { backgroundColor: "#204e77ff" },
                  }}
                >
                  View Details
                </Button>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
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
