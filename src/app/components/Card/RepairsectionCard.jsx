import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Divider,
  useTheme,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const RepairsectionCard = ({ content, isAdmin }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!content) return null;

  /* =====================================================
     EDIT / DELETE
  ===================================================== */

  const handleEdit = (id, type = "T") => {
    navigate(
      `/CmsEditor?contentId=Home&contentTextID=${id}&contentType=${type}`
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
        }}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    ) : null;

  const DeleteIconButton = ({ ids }) =>
    isAdmin ? (
      <IconButton
        size="small"
        onClick={() => handleDeleteCard(ids)}
        sx={{
          ml: 1,
          p: 0.5,
          borderRadius: "50%",
          backgroundColor: "#ffebee",
          color: "#c62828",
        }}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    ) : null;

  const handleDeleteCard = async (ids) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this card?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
    });

    if (!confirm.isConfirmed) return;

    await fetch("https://cmsreflux.bexatm.com/API/data/DeleteContentV1.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contentId: "Home",
        keys: ids,
      }),
    });

    window.location.reload();
  };

  /* =====================================================
     ✅ CARD DETECTION (KEY FIX — DO NOT CHANGE)
  ===================================================== */

  const cards = [];

  Object.keys(content)
    .map((k) => parseInt(k.replace("HM", ""), 10))
    .filter((num) => {
      const t = content[`HM${num}`];
      const d = content[`HM${num + 1}`];
      const dur = content[`HM${num + 2}`];
      const img = content[`HM${num + 3}`];

      return (
        typeof t === "string" &&
        typeof d === "string" &&
        Array.isArray(dur) &&
        typeof img === "string"
      );
    })
    .sort((a, b) => a - b)
    .forEach((num) => {
      cards.push({
        title: `HM${num}`,
        desc: `HM${num + 1}`,
        duration: `HM${num + 2}`,
        image: `HM${num + 3}`,
      });
    });

  /* =====================================================
     UI — SAME DESIGN (UNCHANGED)
  ===================================================== */

  const CardUI = ({ card }) => (
    <Box
      sx={{
        width: "100%",
        maxWidth: 412,
        borderRadius: 4,
        border: "1px solid",
        borderColor: "grey.400",
        p: 2,
        backgroundColor: "#f6f9fcff",
        mx: "auto",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.35s ease",

        "&:hover": {
          backgroundColor: "#1C2D4B",
          borderColor: "#1C2D4B",
        },

        "&:hover .card-text": {
          color: "#fff",
        },

        "&:hover .card-subtext": {
          color: "#D0D7E2",
        },

        "&:hover .card-divider": {
          borderColor: "rgba(255,255,255,0.3)",
        },
        "&:hover .MuiIconButton-root": {
          backgroundColor: "#fff",
        },


        "&:hover .arrow-btn": {
          backgroundColor: "#2F6FBA",
          color: "#fff",
        },
      }}
    >
      {/* IMAGE */}
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={`https://cmsreflux.bexatm.com${content[card.image]}`}
          alt={content[card.title]}
          sx={{
            width: "100%",
            maxHeight: 260,
            borderRadius: "7px",
            objectFit: "cover",
          }}
        />

        {isAdmin && (
          <Box sx={{ position: "absolute", top: 8, right: 8 }}>
            <EditIconButton id={card.image} type="I" />
            <DeleteIconButton
              ids={[card.title, card.desc, card.duration, card.image]}
            />
          </Box>
        )}
      </Box>

      {/* CONTENT */}
      <Box sx={{ mt: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            className="card-text"
            sx={{ fontSize: 28, fontWeight: 600, transition: "color 0.3s" }}
          >
            {content[card.title]}
            <EditIconButton id={card.title} />
          </Typography>

          <IconButton
            className="arrow-btn"
            sx={{
              width: 40,
              height: 40,
              backgroundColor: "#e5f2faff",
              transition: "all 0.3s",
            }}
            onClick={() => navigate("/home/RepairServicesPage")}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>

        <Divider className="card-divider" sx={{ my: 2 }} />

        <Typography
          className="card-subtext"
          sx={{ fontSize: 18, transition: "color 0.3s" }}
        >
          {content[card.desc]}
          <EditIconButton id={card.desc} />
        </Typography>

        <Typography
          className="card-text"
          sx={{ fontWeight: 500, mt: 1, transition: "color 0.3s" }}
        >
          Turnaround Time
        </Typography>

        <Typography
          className="card-subtext"
          sx={{ fontSize: 18, transition: "color 0.3s" }}
        >
          {content[card.duration].join(" / ")}
          <EditIconButton id={card.duration} />
        </Typography>
      </Box>
    </Box>
  );


  return (
    <>
      {/* ================= MOBILE : SWIPER ================= */}
      {isMobile && (
        <>
          {/* ===== SWIPER : CARDS ONLY ===== */}
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true, type: "progressbar" }}
          >
            {cards.map((card, i) => (
              <SwiperSlide key={i}>
                <CardUI card={card} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ===== VIEW ALL : BELOW SWIPER ===== */}
          <Box
            sx={{
              mt: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#1a4dab",
                "&:hover": {
                  transform: "scale(1.15)",
                  textDecoration: "underline",
                },
              }}
              onClick={() => navigate("/home/RepairServices")}
            >
              {content.HM1024}
            </Typography>

            <Box sx={{ ml: 2 }}>
              {isAdmin && <EditIconButton id="HM1024" />}
            </Box>
          </Box>
        </>
      )}


      {/* ================= DESKTOP : GRID ================= */}
      {!isMobile && (
        <Grid container spacing={3}>
          {cards.map((card, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <CardUI card={card} />
            </Grid>
          ))}

          {/* ===== VIEW ALL AS CARD ===== */}
          <Grid item xs={12} sm={3} md={4}>
            <Box
              sx={{
                height: "100%", display: "flex",
                justifyContent: "center", alignItems: "center",
                mt: 5, mr: 5, cursor: "pointer",
              }} >
              <Typography
                sx={{
                  fontSize: { xs: "18px", sm: "20px", md: "24px" },
                  fontWeight: "bold", color: "#1a4dab", "&:hover": {
                    transform: "scale(1.30)",
                    textDecoration: "underline",
                  },
                }}
                onClick={() => navigate("/home/RepairServices")} >
                {content.HM1024}
              </Typography>
              <Box sx={{ paddingLeft: "45px" }}>
                {isAdmin && <EditIconButton id="HM1024" />}
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}

    </>
  );
};

export default RepairsectionCard;
