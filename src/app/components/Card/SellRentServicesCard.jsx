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

    <Box
      sx={{
        width: { xs: '130%', md: '1440px' },
        height: { xs: 'auto', md: '880px' },
        backgroundColor: '#f9fafb',
        px: { xs: 2, md: 0 },
        py: { xs: 4, md: 0 },
        mx: 'auto',
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          ml: { xs: 0, md: 8 },
          ...typography.displayL,
          color: '#1C2D4B',
          fontWeight: 'bold',
          fontSize: { xs: '1.8rem', md: '3rem' },
          mb: 1,
          textAlign: { xs: 'center', md: 'left' },
        }}
        variant="h3"
        gutterBottom
      >
        Rent Instead?
      </Typography>

      <Typography
        variant="h5"
        sx={{
          mb: 4,
          color: '#1C2D4B',
          ...typography.h4,
          ml: { xs: 0, md: 8 },
          fontSize: { xs: '1.1rem', md: '1.5rem' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        Check out these rentals
      </Typography>

      {/* Swiper */}
      <Swiper
        spaceBetween={16}
        slidesPerView={1.1} // Mobile
        centeredSlides={false}
        style={{ padding: '0 10px' }}
        grabCursor={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          768: {
            slidesPerView: 3,   // Desktop: unchanged
            spaceBetween: 0,
            style: { padding: '0 40px' },
          },
        }}
        pagination={false}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <Card
              sx={{
                width: { xs: '320px', md: '416px' },
                height: { xs: 'auto', md: '573px' },
                borderRadius: 2,
                border: '1px solid #e0e0e0',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  boxShadow: '0px 6px 16px rgba(0,0,0,0.1)',
                  transform: 'translateY(-4px)',
                },
                mx: 'auto',
              }}
            >
              {/* Image */}
              <Box sx={{ position: 'relative', mx: 'auto', mt: 2 }}>
                <Box
                  sx={{
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={service.img}
                    alt={service.title}
                    sx={{
                      width: { xs: '300px', md: '384px' },
                      height: { xs: '180px', md: '240px' },
                      objectFit: 'cover',
                    }}
                  />
                </Box>

                {/* Chips */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 10,
                    left: 20,
                    right: 20,
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 1,
                    px: 0.5,
                  }}
                >
                  <Chip
                    label="🔧 Available for Rent"
                    size="small"
                    sx={{
                      ...typography.bodyBasemedium,
                      fontSize: { xs: '12px', md: '14px' },
                      bgcolor: '#1B7B4E',
                      color: 'white',
                      fontWeight: 400,
                      borderRadius: 0,
                      minWidth: { xs: '130px', md: '140px' },
                    }}
                  />
                  <Chip
                    label="🛡️ Safety Tested"
                    size="small"
                    sx={{
                      ...typography.bodyBasemedium,
                      fontSize: { xs: '12px', md: '14px' },
                      bgcolor: '#2F6FBA',
                      color: 'white',
                      fontWeight: 400,
                      borderRadius: 0,
                      minWidth: { xs: '120px', md: '130px' },
                      textAlign: 'center',
                    }}
                  />
                </Box>
              </Box>

              {/* Content */}
              <CardContent
                sx={{
                  flexGrow: 1,
                  width: { xs: '300px', md: '384px' },
                  height: 'auto',
                  mx: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  p: 0,
                  mt: 2,
                }}
              >
                {/* Title + Price */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{
                      ...typography.h4,
                      color: '#0b0b0b',
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    sx={{
                      ...typography.h4,
                      color: '#5937E0',
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                    }}
                  >
                    {service.price}
                  </Typography>
                </Box>

                {/* Two-column details */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    mb: 1,
                    gap: 1,
                  }}
                >
                  <Box sx={{ minWidth: '95px' }}>
                    <Typography
                      sx={{
                        ...typography.h6,
                        color: '#0E1626',
                        fontSize: { xs: '0.85rem', md: '1rem' },
                      }}
                    >
                      Lift Capacity
                    </Typography>
                    <Typography
                      sx={{
                        ...typography.bodySmall,
                        color: '#677489',
                        fontSize: { xs: '0.75rem', md: '0.875rem' },
                      }}
                    >
                      2.5 Tons
                    </Typography>
                  </Box>

                  <Box sx={{ minWidth: '95px' }}>
                    <Typography
                      sx={{
                        ...typography.h6,
                        color: '#0E1626',
                        fontSize: { xs: '0.85rem', md: '1rem' },
                      }}
                    >
                      Power Supply
                    </Typography>
                    <Typography
                      sx={{
                        ...typography.bodySmall,
                        color: '#677489',
                        fontSize: { xs: '0.75rem', md: '0.875rem' },
                      }}
                    >
                      220V / 110V
                    </Typography>
                  </Box>

                  <Box sx={{ minWidth: '95px' }}>
                    <Typography
                      sx={{
                        ...typography.h6,
                        color: '#0E1626',
                        fontSize: { xs: '0.85rem', md: '1rem' },
                      }}
                    >
                      Size
                    </Typography>
                    <Typography
                      sx={{
                        ...typography.bodySmall,
                        color: '#677489',
                        fontSize: { xs: '0.75rem', md: '0.875rem' },
                      }}
                    >
                      700mm / 900mm
                    </Typography>
                  </Box>
                </Box>

                {/* Size Options */}
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: '13px', md: '14px' },
                      color: '#222',
                    }}
                  >
                    Size Options
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: '13px', md: '14px' },
                      color: '#555',
                    }}
                  >
                    {service.sizeOptions}
                  </Typography>
                </Box>
              </CardContent>

              {/* Button */}
              <Box sx={{ p: 2, pt: { xs: 3, md: '50px' } }}>
                <Button
                  onClick={() => navigate('/home/CheckAvailabilty')}
                  fullWidth
                  variant="contained"
                  sx={{
                    width: { xs: '300px', md: '384px' },
                    height: '50px',
                    borderRadius: 4,
                    textTransform: 'none',
                    backgroundColor: '#1C2D4B',
                    '&:hover': { backgroundColor: '#1C2D4B' },
                    mx: 'auto',
                  }}
                >
                  View Details
                </Button>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Dots */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 3,
          px: 2,
        }}
      >
        {services.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 30,
              height: 3,
              borderRadius: 2,
              backgroundColor: index <= activeIndex ? '#1C2D4B' : '#d3d3d3',
              mx: 0.5,
              transition: 'background-color 0.3s ease',
            }}
          />
        ))}
      </Box>

      {/* Link at bottom */}
      <Typography
        sx={{
          ...typography.h3R,
          color: '#1a4dab',
          fontWeight: 600,
          textDecoration: 'underline',
          ml: { xs: 0, md: 120 },
          mt: 3,
          cursor: 'pointer',
          fontSize: { xs: '1.2rem', md: '1.5rem' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'flex-start' },
        }}
        onClick={() => navigate('/home/SellMagnet')}
      >
        View All Magnets for rent
        <ArrowRightAltIcon
          sx={{
            color: '#1a4dab',
            fontWeight: 'bold',
            verticalAlign: 'middle',
            ml: 1,
            fontSize: '2.5rem',
          }}
        />
      </Typography>
    </Box>



  );
}


