import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Chip,
  IconButton,
  useTheme
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import rentserviceimg from "../../../assets/RentService.png";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { typography } from "app/utils/constant";
import EditIcon from "@mui/icons-material/Edit";

export default function SellRentServicesCard({ services }) {
  const navigate = useNavigate();

  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);

  const theme = useTheme();

  useEffect(() => {
    const apiUrl =
      "https://skillglow.bexatm.com/ATM/ContentManageSysV1.php?contentId=C008";
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setContent(data))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  const handleEdit = (contentTextID, type = "T") => {
    navigate(
      `/CmsEditor?contentId=C008&contentTextID=${contentTextID}&contentType=${type}`
    );
  };

  const EditIconButton = ({ id, type = "T" }) =>
    isAdmin ? (
      <IconButton
        size="small"
        onClick={() => handleEdit(id, type)}
        sx={{
          ml: 1,
          p: 0.5,
          borderRadius: "50%",
          backgroundColor: "#f0f0f0",
          color: "#1C2D4B",
          border: "1px solid #ccc",
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "#e0e0e0",
            color: "#070808ff",
            //borderColor: "#214870",
          },
          verticalAlign: "middle",
        }}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    ) : null;

  if (!content) return null;


  const rentData = [
    {
      image: { id: "RR5003", value: content.RR5003 },
      title: { id: "RR5004", value: content.RR5004 },
      capacity: { id: "RR5005", value: content.RR5005 },
      supply: { id: "RR5006", value: content.RR5006 },
      size: { id: "RR5007", value: content.RR5007 },
      sizeOptions: { id: "RR5008", value: content.RR5008 },
      price: { id: "RR5009", value: content.RR5009 },
      chip1: { id: "RR5010", value: content.RR5010 },
      chip2: { id: "RR5011", value: content.RR5011 },
    },
    {
      image: { id: "RR5012", value: content.RR5012 },
      title: { id: "RR5013", value: content.RR5013 },
      capacity: { id: "RR5014", value: content.RR5014 },
      supply: { id: "RR5015", value: content.RR5015 },
      size: { id: "RR5016", value: content.RR5016 },
      sizeOptions: { id: "RR5017", value: content.RR5017 },
      price: { id: "RR5018", value: content.RR5018 },
      chip1: { id: "RR5019", value: content.RR5019 },
      chip2: { id: "RR5020", value: content.RR5020 },
    },
    {
      image: { id: "RR5021", value: content.RR5021 },
      title: { id: "RR5022", value: content.RR5022 },
      capacity: { id: "RR5023", value: content.RR5023 },
      supply: { id: "RR5024", value: content.RR5024 },
      size: { id: "RR5025", value: content.RR5025 },
      sizeOptions: { id: "RR5026", value: content.RR5026 },
      price: { id: "RR5027", value: content.RR5027 },
      chip1: { id: "RR5028", value: content.RR5028 },
      chip2: { id: "RR5029", value: content.RR5029 },
    },

    {
      image: { id: "RR5030", value: content.RR5030 },
      title: { id: "RR5031", value: content.RR5031 },
      capacity: { id: "RR5032", value: content.RR5032 },
      supply: { id: "RR5033", value: content.RR5033 },
      size: { id: "RR5034", value: content.RR5034 },
      sizeOptions: { id: "RR5035", value: content.RR5035 },
      price: { id: "RR5036", value: content.RR5036 },
      chip1: { id: "RR5037", value: content.RR5037 },
      chip2: { id: "RR5038", value: content.RR5038 },
    },
    {
      image: { id: "RR5039", value: content.RR5039 },
      title: { id: "RR5040", value: content.RR5040 },
      capacity: { id: "RR5041", value: content.RR5041 },
      supply: { id: "RR5042", value: content.RR5042 },
      size: { id: "RR5043", value: content.RR5043 },
      sizeOptions: { id: "RR5044", value: content.RR5044 },
      price: { id: "RR5045", value: content.RR5045 },
      chip1: { id: "RR5046", value: content.RR5046 },
      chip2: { id: "RR5047", value: content.RR5047 },
    },

  ];




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
        {content.RR5001}
        <EditIconButton id="RR5001" />
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
        {content.RR5002}
        <EditIconButton id="RR5002" />
      </Typography>

      {/* Swiper */}
      <Swiper
        spaceBetween={16}
        slidesPerView={1.1}
        grabCursor
        breakpoints={{ 768: { slidesPerView: 3, spaceBetween: 0 } }}
      >
        {rentData.map((item, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                width: { xs: '90%', md: '416px' },
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
                mb: { xs: 3, md: 0 },
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  position: 'relative',
                  mx: 'auto',
                  mt: 2,
                  width: { xs: '100%', md: '395px' },
                  height: { xs: 'auto', md: '240px' },

                }}
              >
                {/* Image */}
                <CardMedia
                  component="img"
                  image={`https://skillglow.bexatm.com${item.image.value}`}
                  alt={item.title.value}
                  sx={{
                    width: { xs: '100%', md: '395px' },
                    height: { xs: '220px', md: '240px' },
                    objectFit: 'cover',
                    borderRadius: 1,
                    padding: '0px 8px 2px 8px',
                    borderRadius: 5
                  }}
                />

                {/* Edit icon — now at top-right */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    zIndex: 2,
                  }}
                >
                  <EditIconButton id={item.image.id} type="I" />
                </Box>

                {/* Chips */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    right: 10,
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'nowrap',
                    gap: 1,
                    zIndex: 1,
                  }}
                >
                  <Chip
                    label={item.chip1.value}
                    size="small"
                    sx={{
                      fontSize: { xs: '12px', md: '14px' },
                      bgcolor: '#1B7B4E',
                      color: 'white',
                      fontWeight: 400,
                      borderRadius: 0,
                      width: '48%',
                      textAlign: 'center',
                      margin: '5px',
                      borderRadius: '3px'
                    }}
                  />
                  <Chip
                    label={item.chip2.value}
                    size="small"
                    sx={{
                      fontSize: { xs: '12px', md: '14px' },
                      bgcolor: '#2F6FBA',
                      color: 'white',
                      fontWeight: 400,
                      borderRadius: 0,
                      width: '48%',
                      textAlign: 'center',
                      margin: '5px',
                      borderRadius: '3px'
                    }}
                  />
                </Box>
              </Box>


              {/* Content */}
              <CardContent
                sx={{
                  flexGrow: 1,
                  width: { xs: '90%', md: '384px' },
                  mx: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  p: 0,
                  mt: 2,
                }}
              >
                {/* Title + Rent */}
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
                    {item.title.value}
                    <EditIconButton id={item.title.id} />
                  </Typography>

                  <Typography
                    sx={{
                      ...typography.h4,
                      color: '#5937E0',
                      fontSize: { xs: '1rem', md: '1.25rem' },
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                    }}
                  >
                    {item.price.value}

                    <EditIconButton id={item.price.id} />
                  </Typography>
                </Box>

                {/* Coil text */}
                <Typography
                  sx={{
                    ...typography.h6,
                    color: '#00000099',
                    fontSize: '16px',
                    mb: 3,
                  }}
                >
                  Coil
                </Typography>

                {/* Specs */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    mb: 2,
                    gap: 0.9,
                  }}
                >
                  <Box sx={{ minWidth: '95px' }}>
                    <Typography sx={{ ...typography.h6, color: '#0E1626' }}>
                      Lift Capacity
                    </Typography>
                    <Typography sx={{ ...typography.bodySmall, color: '#677489' }}>
                      {item.capacity.value}
                      <EditIconButton id={item.capacity.id} />
                    </Typography>
                  </Box>
                  <Box sx={{ minWidth: '95px' }}>
                    <Typography sx={{ ...typography.h6, color: '#0E1626' }}>
                      Power Supply
                    </Typography>
                    <Typography sx={{ ...typography.bodySmall, color: '#677489' }}>
                      {item.supply.value}
                      <EditIconButton id={item.supply.id} />
                    </Typography>
                  </Box>
                  <Box sx={{ minWidth: '95px' }}>
                    <Typography sx={{ ...typography.h6, color: '#0E1626' }}>
                      Size
                    </Typography>
                    <Typography sx={{ ...typography.bodySmall, color: '#677489' }}>
                      {item.size.value}
                      <EditIconButton id={item.size.id} />
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
                      mt: 2,
                    }}
                  >
                    Size Options
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '13px', md: '14px' }, color: '#555' }}>
                    {item.sizeOptions.value}
                    <EditIconButton id={item.sizeOptions.id} />
                  </Typography>
                </Box>
              </CardContent>

              {/* Button */}
              <Box sx={{ p: 2, pt: { xs: 3, md: '15px' } }}>
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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'flex-start' },
          ml: { xs: 0, md: 120 },
          mt: 3,
        }}
      >
        <Typography
          sx={{
            ...typography.h3R,
            color: '#1a4dab',
            fontWeight: 600,
            textDecoration: 'underline',
            cursor: 'pointer',
            fontSize: { xs: '1.2rem', md: '1.5rem' },
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
          onClick={() => navigate('/home/SellMagnet')}
        >
          {content.RR5048}
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

        {/* Separate edit icon, outside the clickable link */}
        <EditIconButton id="RR5048" />
      </Box>


    </Box>

  );
}
