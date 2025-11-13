import React, { useState, useEffect } from "react";
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
  Dialog,
  DialogContent,
  TextField,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import Scope1 from "../../../assets/Scope1.png";
import Scope2 from "../../../assets/Scope2.png";
import Scope3 from "../../../assets/Scope3.png";
import Scope4 from "../../../assets/Scope4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { typography } from "app/utils/constant";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Pagination } from "swiper/modules";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export default function RepairServicesPageCard() {
  // This is dialogue for while click
  const UploadBox = ({ label }) => {
    return (
      <Box sx={{ my: 3 }}>
        <Typography variant="h6" gutterBottom>
          {label}
        </Typography>
        <label htmlFor="upload-input">
          <Box
            sx={{
              border: "2px dashed #ccc",
              borderRadius: 2,
              p: 4,
              textAlign: "center",
              cursor: "pointer",
              transition: "border-color 0.3s ease",
              "&:hover": { borderColor: "primary.main" },
            }}
          >
            <IconButton component="span" size="large">
              <UploadFileIcon sx={{ fontSize: 40, color: "text.secondary" }} />
            </IconButton>
            <Typography>
              <strong style={{ color: "#1976d2" }}>Choose</strong> file to
              upload
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
          style={{ display: "none" }}
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
  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  // ✅ Fetch content from API
  useEffect(() => {
    fetch(
       `${process.env.REACT_APP_CMS_URL}?contentId=RepairServiceCard`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setContent(data))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  // ✅ Check login role
  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  // ✅ Navigate to CMS editor
  const handleEdit = (contentTextID, type = "T") => {
    navigate(
      `/CmsEditor?contentId=RepairServiceCard&contentTextID=${contentTextID}&contentType=${type}`
    );
  };

  // ✅ Reusable Edit button
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

  const services = [
    {
      id: 1,
      title: content.CON190040,
      type: content.CON190041,
      img: `https://cmsreflux.bexatm.com${content.CON190042}`,
    },
    {
      id: 2,
      title: content.CON190043,
      type: content.CON190044,
      img: `https://cmsreflux.bexatm.com${content.CON190045}`,
    },
    {
      id: 3,
      title: content.CON190046,
      type: content.CON190047,
      img: `https://cmsreflux.bexatm.com${content.CON190048}`,
    },
    {
      id: 4,
      title: content.CON190049,
      type: content.CON190050,
      img: `https://cmsreflux.bexatm.com${content.CON190051}`,
    },
    {
      id: 5,
      title: content.CON190052,
      type: content.CON190053,
      img: `https://cmsreflux.bexatm.com${content.CON190054}`,
    },
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#f9fafb" }}>
      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
        }}
        style={{ paddingBottom: "40px" }}
      >
        {(services || []).map((service, index) => (
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
                transition:
                  "transform 0.35s ease, padding-bottom 0.35s ease, background-color 0.35s ease",
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
              {/* 🖼️ Image */}
              <Box sx={{ position: "relative" }}>
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
                {isAdmin && (
                  <IconButton
                    size="small"
                    onClick={() => handleEdit(`CON1900${42 + index * 3}`, "I")}
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      bgcolor: "rgba(255,255,255,0.7)",
                      "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                )}
              </Box>

              {/* 🧾 Card Content */}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  sx={{
                    ...typography.h4,
                    color: "#1C2D4B",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  {service.title}
                  {isAdmin && (
                    <EditIconButton id={`CON1900${40 + index * 3}`} />
                  )}
                </Typography>

                <Typography
                  sx={{
                    ...typography.bodyBase,
                    color: "#49576F",
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  {service.type}
                  {isAdmin && (
                    <EditIconButton id={`CON1900${41 + index * 3}`} />
                  )}
                </Typography>
              </CardContent>

              {/* 🔘 Hover “View More” Button */}
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
                  opacity: 0,
                  width: "calc(100% - 70px)",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  "&:hover": { bgcolor: "#92400e" },
                }}
              >
                {content.CON190055}
                <ArrowRightAltIcon sx={{ fontSize: 22 }} />
                <EditIconButton id="CON190055" />
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
        {content.CON190056}
        <EditIconButton id="CON190056" />
       
      </Button>
    </Box>
  );
}
