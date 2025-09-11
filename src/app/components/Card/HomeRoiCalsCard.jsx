import React, { useRef } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  IconButton,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// MUI icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ProductCarousel({ products }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", px: 2, position: "relative" }}>
      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={3} // show 3 at once
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
        }}
        style={{ padding: "20px 0" }}
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 3,
                overflow: "hidden",
                height: "100%",
                transition: "0.3s",
                "&:hover": { boxShadow: 6, transform: "translateY(-4px)" },
              }}
            >
              {/* Product Image */}
              <CardMedia
                component="img"
                height="160"
                image={item.image}
                alt={item.title}
              />

              {/* Card Content */}
              <CardContent sx={{ minHeight: 160 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>

                <Box
                  mt={2}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h6" color="green">
                    ${item.price}
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ borderRadius: 2, backgroundColor: "#0b2d55" }}
                  >
                    Check Availability
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <IconButton
        ref={prevRef}
        sx={{
          position: "absolute",
          top: "50%",
          left: -10,
          transform: "translateY(-50%)",
          backgroundColor: "white",
          boxShadow: 2,
          "&:hover": { backgroundColor: "grey.200" },
        }}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>

      <IconButton
        ref={nextRef}
        sx={{
          position: "absolute",
          top: "50%",
          right: -10,
          transform: "translateY(-50%)",
          backgroundColor: "white",
          boxShadow: 2,
          "&:hover": { backgroundColor: "grey.200" },
        }}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}

  {/* <Box sx={{ maxWidth: 1200, mx: "auto", px: 2 }}>
          <Grid container spacing={4} justifyContent="center">
            {roiData.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: 3,
                    height: 320,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    sx={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      left: 16,
                      right: 16,
                      backgroundColor: "white",
                      borderRadius: 2,
                      boxShadow: 1,
                      px: 2,
                      py: 1.5,
                      display: "flex",
                      flexDirection: "column",
                      gap: 0.5,
                      "&:hover": {
                        bgcolor: "#0b2d55",
                        color: "white",
                        "& .MuiTypography-root": { color: "white", transform: "scale(1.05)" },
                        "& .MuiDivider-root": { borderColor: "rgba(255,255,255,0.3)" },
                        "& .MuiIconButton-root": {
                          backgroundColor: "#6aa9ff", // 🔹 light blue only for icon button
                          color: "white",             // icon turns white
                        },
                      }
                    }}
                  >
                    <Box display="flex"
                      sx={{

                      }}
                      justifyContent="space-between" alignItems="center">
                      <Typography variant="subtitle1" fontWeight="bold">
                        {item.title}
                      </Typography>
                      <IconButton
                        size="small"
                        sx={{
                          backgroundColor: "#f0f0f0",
                        }}
                      >
                        <ArrowForwardIosIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

        </Box> */}
//  <Box sx={{ maxWidth: 1200, mx: "auto", px: 2 }}>
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={24}
//         slidesPerView={3}   // ✅ show 3 at once
//         navigation
//         pagination={{ clickable: true }}
//         loop={true}
//         autoplay={{ delay: 3000, disableOnInteraction: false }} // ✅ auto scroll
//         breakpoints={{
//           0: { slidesPerView: 1 },
//           600: { slidesPerView: 2 },
//           900: { slidesPerView: 3 },
//         }}
//       >
//         {roiData.map((item, index) => (
//           <SwiperSlide key={index}>
//             <Card
//               sx={{
//                 borderRadius: 2,
//                 boxShadow: 3,
//                 overflow: "hidden",
//                 height: "100%",
//               }}
//             >
//               {/* Product Image */}
//               <CardMedia
//                 component="img"
//                 height="160"
//                 image={item.image}
//                 alt={item.title}
//               />

//               {/* Card Content */}
//               <CardContent>
//                 <Typography variant="subtitle1" fontWeight="bold">
//                   {item.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {item.description}
//                 </Typography>

//                 <Box
//                   mt={2}
//                   display="flex"
//                   justifyContent="space-between"
//                   alignItems="center"
//                 >
//                   <Typography variant="h6" color="green">
//                     ${item.price}
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     size="small"
//                     sx={{ borderRadius: 2, backgroundColor: "#0b2d55" }}
//                   >
//                     Check Availability
//                   </Button>
//                 </Box>
//               </CardContent>
//             </Card>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Box>