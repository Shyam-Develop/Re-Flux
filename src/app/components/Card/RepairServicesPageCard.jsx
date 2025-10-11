import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Chip,
  IconButton,
  Dialog, DialogContent, TextField, FormControl, Select, MenuItem,

} from "@mui/material";
import Scope1 from "../../../assets/Scope1.png";
import Scope2 from "../../../assets/Scope2.png";
import Scope3 from "../../../assets/Scope3.png";
import Scope4 from "../../../assets/Scope4.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { typography } from "app/utils/constant";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Pagination } from "swiper/modules";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";


const services = [
  {
    id: 1,
    title: "Electrical",
    type: "Rewinds,resin potting,insulation upgrades(clasdfdfsdfdsfs F/H)",
    liftCapacity: "3 Tons",
    powerSupply: "None Required",
    sizes: "500mm / 800mm / 1000mm",
    price: 30,
    img: Scope1,
  },
  {
    id: 2,
    title: "Electricals",
    type: "Terminals, leads, junction boxes, temperature sensors",
    liftCapacity: "Varied",
    powerSupply: "Custom",
    sizes: "Custom Sizes Available",
    price: 100,
    img: Scope2,
  },
  {
    id: 3,
    title: "Mechanical",
    type: "Housing, pole shoes, face machining, gasket/fasteners",
    liftCapacity: "1 Ton",
    powerSupply: "220V",
    sizes: "300mm / 500mm",
    price: 20,
    img: Scope3,
  },
  {
    id: 4,
    title: "Controls",
    type: "Controllers/rectifiers/PSUs, cabling & connectors",
    liftCapacity: "3 Tons",
    powerSupply: "None Required",
    sizes: "500mm / 800mm / 1000mm",
    price: 30,
    img: Scope4,
  },
  {
    id: 5,
    title: "Testing",
    type: "Resistence, inductance (H), Insulation(M @500V), no-load current (A)",
    liftCapacity: "Varied",
    powerSupply: "Custom",
    sizes: "Custom Sizes Available",
    price: 100,
    img: Scope4,
  },
  
];

export default function RepairServicesPageCard() {

  // This is dialogue for while click
  const UploadBox = ({ label }) => {
    return (
      <Box sx={{ my: 3 }}>
        <Typography variant="h6" gutterBottom>{label}</Typography>
        <label htmlFor="upload-input">
          <Box
            sx={{
              border: '2px dashed #ccc',
              borderRadius: 2,
              p: 4,
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'border-color 0.3s ease',
              '&:hover': { borderColor: 'primary.main' },
            }}
          >
            <IconButton component="span" size="large">
              <UploadFileIcon sx={{ fontSize: 40, color: 'text.secondary' }} />
            </IconButton>
            <Typography>
              <strong style={{ color: '#1976d2' }}>Choose</strong> file to upload
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Select image in jpeg, PNG
            </Typography>
          </Box>
        </label>
        <input
          id="upload-input"
          type="file"
          accept="image/jpeg, image/png"
          style={{ display: 'none' }}
        />
      </Box>
    );
  };


  const [BrowseDialogopen, setBrowseDialogOpen] = useState(false);

  const handleClickOpen = () => {
    setBrowseDialogOpen(true);
  };

  const handledialogClose = () => {
    setBrowseDialogOpen(false);
  };


  return (

    <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#f9fafb" }}>
  {/* Swiper Carousel */}
  <Swiper
    modules={[Pagination]}
    spaceBetween={16}
    pagination={{ clickable: true }}
    breakpoints={{
      0: { slidesPerView: 1 },   // Mobile: 1 card
      600: { slidesPerView: 2 }, // Tablet: 2 cards
      960: { slidesPerView: 3 }, // Desktop: 3 cards
    }}
    style={{ paddingBottom: "40px" }}
  >
    {(services || []).map((service) => (
      <SwiperSlide key={service.id}>
        <Card
          sx={{
            position: "relative",
            borderRadius: 3,
            width: "100%",
            maxWidth: 370,
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            transition: "transform 0.35s ease, padding-bottom 0.35s ease, background-color 0.35s ease",
            "&:hover": {
              transform: "scale(1.003)",
              backgroundColor: "#0b2d55",
              color: "white",
              paddingBottom: "60px",
            },
            "&:hover .MuiTypography-root": {
              color: "white !important",
            },
            "&:hover .view-more-btn": {
              opacity: 1,
              bottom: 30,
              transform: "translate(-50%, 0)",
            },
          }}
        >
          <CardMedia
            component="img"
            image={service.img}
            alt={service.title}
            sx={{
              height: 210,
              objectFit: "contain",
              mt: 2,
              borderRadius: 2,
            }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography sx={{ ...typography.h4, color: "#1C2D4B" }}>
              {service.title}
            </Typography>
            <Typography sx={{ ...typography.bodyBase, color: "#49576F", mb: 2 }}>
              {service.type}
            </Typography>
          </CardContent>

          {/* Hover only View More button */}
          <Button
            fullWidth
            variant="contained"
            className="view-more-btn"
            sx={{
              position: "absolute",
              left: "50%",
              bottom: 0,
              transform: "translate(-50%, 10px)",
              borderRadius: 20,
              padding: "10px 18px",
              textTransform: "none",
              bgcolor: "#b45309",
              transition: "all 0.35s ease-in-out",
              opacity: 0, // hidden by default
              width: "calc(100% - 70px)",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              "&:hover": { bgcolor: "#92400e" },
            }}
          >
            View More
            <ArrowRightAltIcon sx={{ fontSize: 22 }} />
          </Button>
        </Card>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Custom Pagination */}
  <style>
    {`
      .swiper-pagination {
        bottom: 0 !important;
      }
      .swiper-pagination-bullet {
        width: 30px;
        height: 3px;
        border-radius: 2px;
        background: #d1d5db;
        opacity: 1;
      }
      .swiper-pagination-bullet-active {
        background: #2563eb !important;
      }
    `}
  </style>

  {/* Quote Button */}
  <Button
    variant="contained"
    sx={{
      textDecoration: "underline",
      width: "100%",
      bgcolor: "#b45309",
      borderRadius: 10,
      mt: 1,
      px: 6,
      py: 1.5,
      textTransform: "none",
      "&:hover": { bgcolor: "#92400e" },
    }}
    onClick={() => handleClickOpen()}
  >
    Get a repair quote
  </Button>
</Box>

    
  );
}

