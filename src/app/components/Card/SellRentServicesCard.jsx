import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Chip,
  useTheme,
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

  const theme = useTheme();

  return (

    <Box
      sx={{
        width: { xs: '100%', md: '1440px' }, // full width on mobile
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
            slidesPerView: 3, // Desktop: unchanged
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
                width: { xs: '90%', md: '416px' }, // mobile smaller
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
                mb: { xs: 3, md: 0 }, // space between cards on mobile
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  position: 'relative',
                  mx: 'auto',
                  mt: 2,
                  width: { xs: '100%', md: '384px' }, // full width on mobile
                  height: { xs: 'auto', md: '240px' },
                }}
              >
                {/* Image */}
                <CardMedia
                  component="img"
                  image={service.img}
                  alt={service.title}
                  sx={{
                    width: { xs: '100%', md: '384px' }, // image full width on mobile
                    height: { xs: '220px', md: '240px' }, // slightly taller on mobile
                    objectFit: 'cover',
                    borderRadius: 1,
                    padding: '0px 8px 2px 8px'
                  }}
                />

                {/* Chips */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    right: 10,
                    display: 'flex',
                    justifyContent: 'space-between', // left and right positioning
                    flexWrap: 'nowrap', // keep in one row
                    gap: 1,
                  }}
                >
                  <Chip
                    label="🔧 Available for Rent"
                    size="small"
                    sx={{
                      fontSize: { xs: '12px', md: '14px' },
                      bgcolor: '#1B7B4E',
                      color: 'white',
                      fontWeight: 400,
                      borderRadius: 0,
                      width: '48%', // half of the image width
                      textAlign: 'center',
                    }}
                  />
                  <Chip
                    label="🛡️ Safety Tested"
                    size="small"
                    sx={{
                      fontSize: { xs: '12px', md: '14px' },
                      bgcolor: '#2F6FBA',
                      color: 'white',
                      fontWeight: 400,
                      borderRadius: 0,
                      width: '48%', // half of the image width
                      textAlign: 'center',
                    }}
                  />
                </Box>
              </Box>



              {/* Content */}
              <CardContent
                sx={{
                  flexGrow: 1,
                  width: { xs: '90%', md: '384px' },
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
                      fontSize: { xs: '1rem', md: '1.25rem' },
                    }}
                  >
                    {service.title}
                  </Typography>
                  
                  <Typography
                    sx={{
                      ...typography.h4,
                      color: '#5937E0',
                      fontSize: { xs: '1rem', md: '1.25rem' },
                    }}
                  >
                    $ {service.price}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      ...typography.h6,
                      color: '#00000099',
                      fontSize: '16px',
                      mb:3
                    }}
                  >
                    Coil
                  </Typography>
                </Box>
                

                {/* Two-column details */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    mb: 2,
                    gap: 1,
                  }}
                >
                  {['Lift Capacity', 'Power Supply', 'Power Supply'].map((label, idx) => (
                    <Box sx={{ minWidth: '95px' }} key={idx}>
                      <Typography
                        sx={{
                          ...typography.h6,
                          color: '#0E1626',
                          fontSize: { xs: '0.85rem', md: '1rem' },
                        }}
                      >
                        {label}
                      </Typography>
                      <Typography
                        sx={{
                          ...typography.bodySmall,
                          color: '#677489',
                          fontSize: { xs: '0.75rem', md: '0.875rem' },
                        }}
                      >
                        {['2.5 Tons', '220V / 110V', '700mm / 900mm'][idx]}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Size Options */}
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: '13px', md: '14px' },
                      color: '#222',
                      mt:2
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
              <Box sx={{ p: 2, pt: { xs: 3, md: '30px' } }}>
                <Button
                  onClick={() => navigate('/home/CheckAvailabilty')}
                  fullWidth
                  variant="contained"
                  sx={{
                    width: { xs: '90%', md: '384px' },
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
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, px: 2 }}>
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

      {/* Bottom Link */}
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
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        />
      </Typography>
    </Box>




  );
}


