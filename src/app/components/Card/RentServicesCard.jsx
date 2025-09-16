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

export default function RentServicesCard({ services }) {

    const navigate = useNavigate();
  

  return (
    <Box sx={{ 
      p: { xs: 2, md: 6 },
       backgroundColor: "#f9fafb" }}>
      {/* Section Tag */}
      <Button
        disableElevation
        disableRipple
        sx={{
          ...typography.bodySmall,
          mb: 2,
          textTransform: "none",
          // fontSize: "0.8rem",
          fontWeight: 400,
          color: "#1a4dab",
          backgroundColor: "rgba(36,121,233,0.08)",
          borderRadius: "20px",
          px: 2,
          py: 0.5,
          "&:hover": { backgroundColor: "rgba(36,121,233,0.15)" },
        }}
      >
        Rent Services
      </Button>

      {/* Heading */}
      <Typography
      sx={{
        ...typography.h3RB,
        fontWeight: 700,
      }}
      //  variant="h3" 
      //  fontWeight="bold" 
      //  gutterBottom
       >
        Rent Industrial Services With Magnets With Ease
      </Typography>
      <Typography 
      variant="h5" 
      sx={{
        ...typography.h3B1,
        fontWeight: 400, 
        mb: 4, 
        color: "text.secondary" 
        }}
        >
        Get powerful lifting magnets when you need them — without the upfront
        cost. Flexible rental plans, quick installation, and reliable
        performance for every project!
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
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  image={service.img}
                  alt={service.title}
                  sx={{
                    height: 200,
                    objectFit: "contain",
                    backgroundColor: "#fff",
                  }}
                />
                {/* Chips at top */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    right: 10,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Chip
                    label="Available for Rent"
                    size="small"
                    sx={{ 
                      fontFamily: "Inter, Regular",
                      fontSize: "14px",
                      bgcolor: "#2e7d32", 
                      color: "white", 
                      fontWeight: 500 
                    }}
                  />
                  <Chip
                    label="Safety Tested"
                    size="small"
                    sx={{ bgcolor: "#1565c0", color: "white", fontWeight: 500 }}
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
                    fontSize: "24px",
                    fontWeight: 400,

                  }}
                  // variant="subtitle1" 
                  // fontWeight="bold"
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    // variant="body2"
                    sx={{ 
                      ...typography.h3B1,
                      fontWeight: 600, 
                      color: "green"
                     }}
                  >
                    Starting at ${service.price}
                  </Typography>
                </Box>

                {/* Sub Type */}
                <Typography
                  // variant="body2"
                  color="text.secondary"
              
                       sx={{
                      ...typography.bodyBase,
                      fontWeight: 400,
                        mb: 2
                    }}
                  
                  
                >
                  {service.type}
                </Typography>

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
                      ...typography.h3medium,
                      fontWeight: 500,
                    }}
                    // variant="subtitle2" 
                    // fontWeight="bold"
                    >
                      Lift Capacity
                    </Typography>
                    <Typography
                    sx={{
                      ...typography.bodyBase,
                      fontWeight: 400,
                    }} 
                    // variant="body2" 
                    color="text.secondary"
                    >
                      {service.liftCapacity}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography 
                  sx={{
                     ...typography.h3medium,
                      fontWeight: 500,
                  }}
                    >
                      Power Supply
                    </Typography>
                    <Typography
                    //  variant="body2"
                       sx={{
                      ...typography.bodyBase,
                      fontWeight: 400,
                    }}
                      color="text.secondary"
                      >
                      {service.powerSupply}
                    </Typography>
                  </Box>
                </Box>

                {/* Sizes */}
                <Typography
                  // variant="body2"
                  sx={{ 
                     ...typography.h3medium,
                      fontWeight: 500,
                    color: "text.secondary",
                     mt: 1 
                    }}
                >
                  {service.sizes}
                </Typography>
              </CardContent>

              {/* Button */}
              <Box sx={{ p: 2, pt: 0 }}>
                <Button
                  onClick={() => navigate('/home/CheckAvailabilty')}
                  fullWidth
                  variant="contained"
                  className="availability-btn"
                  sx={{
                    fontFamily: "Inter-SemiBold",
                    fontWeight:600,
                    fontSize: "16px",
                    borderRadius: 1,
                    textTransform: "none",
                    backgroundColor: "#0b2d55",
                    "&:hover": { backgroundColor: "#08365f" },
                  }}
                >
                  Check Availability
                </Button>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

// export default function RentServicesCard({ services }) {
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

