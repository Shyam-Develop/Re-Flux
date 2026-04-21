import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Divider,
  useTheme,
  Button
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

  useEffect(() => {
    const sectionId = sessionStorage.getItem("SCROLL_TO_REPAIR_CARD");

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        sessionStorage.removeItem("SCROLL_TO_REPAIR_CARD");
      }, 300);
    }
  }, []);

  if (!content) return null;

  /* =====================================================
     EDIT / DELETE
  ===================================================== */


  const handleEdit = (id, type = "T", cardTitle) => {
    if (cardTitle) {
      sessionStorage.setItem(
        "SCROLL_TO_REPAIR_CARD",
        `repair-card-${cardTitle}`
      );
    }

    navigate(
      `/CmsEditor?contentId=Home&contentTextID=${id}&contentType=${type}`
    );
  };

  const EditIconButton = ({ id, type = "T", cardTitle }) =>
    isAdmin ? (
      <IconButton
        size="small"
        onClick={() => handleEdit(id, type, cardTitle)}
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

    await fetch("https://refluxmagnets.com/API/data/DeleteContentV1.php", {
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

  const FIRST_BLOCK_START = 1007; // first card image HM1007
  const FIRST_BLOCK_COUNT = 4;    // only 4 default cards

  // helper
  const tryAddCard = (i) => {
    const image = content[`HM${i}`];
    const title = content[`HM${i + 1}`];
    const desc = content[`HM${i + 2}`];
    const duration = content[`HM${i + 3}`];

    if (
      typeof image === "string" &&
      image.startsWith("/API/images") &&
      typeof title === "string" &&
      typeof desc === "string" &&
      typeof duration === "string"   // ✅ duration is STRING now
    ) {
      cards.push({
        image: `HM${i}`,
        title: `HM${i + 1}`,
        desc: `HM${i + 2}`,
        duration: `HM${i + 3}`,
      });
      return true;
    }

    return false;
  };

  // -----------------------
  // 1️⃣ FIRST 4 STATIC CARDS
  // -----------------------
  for (
    let i = FIRST_BLOCK_START;
    i < FIRST_BLOCK_START + FIRST_BLOCK_COUNT * 4;
    i += 4
  ) {
    tryAddCard(i);
  }

  // -----------------------
  // 2️⃣ NEW / FUTURE CARDS (HM3000+)
  // -----------------------
  const hmKeys = Object.keys(content)
    .filter((k) => /^HM\d+$/.test(k))
    .map((k) => Number(k.replace("HM", "")))
    .filter((n) => n >= 3000) // ✅ new cards only
    .sort((a, b) => a - b);

  for (let i of hmKeys) {
    const img = content[`HM${i}`];
    if (typeof img === "string" && img.startsWith("/API/images")) {
      tryAddCard(i);
    }
  }


  /* =====================================================
     UI — SAME DESIGN (UNCHANGED)
  ===================================================== */

  const CardUI = ({ card }) => (
    <Box
      id={`repair-card-${card.title}`}
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
        display: "flex",
        flexDirection: "column",
        transition: "all 0.35s ease",

        "&:hover": {
          backgroundColor: "#1C2D4B",
          borderColor: "#1C2D4B",
        },

        "&:hover .card-text": { color: "#fff" },
        "&:hover .card-subtext": { color: "#D0D7E2" },
        "&:hover .card-divider": { borderColor: "rgba(255,255,255,0.3)" },

        "&:hover .MuiIconButton-root": {
          backgroundColor: "#fff",
        },

        "&:hover .arrow-btn": {
          backgroundColor: "#2F6FBA",
          color: "#fff",
        },

        "&:hover .cta-wrapper": {
          opacity: 1,
          height: "auto",
          marginTop: 1,
        },
      }}
    >
      {/* IMAGE */}
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={`https://refluxmagnets.com${content[card.image]}`}
          // alt={content[card.title]}
          alt={content[`${card.image}_ALT`] || "image"}
          sx={{
            width: "100%",
            maxHeight: 260,
            borderRadius: "7px",
            objectFit: "cover",
          }}
        />
        {/* <Typography variant="caption">
          ALT: {content[`${card.image}_ALT`] || "image"}
        </Typography> */}
        {isAdmin && (
          <Box sx={{ position: "absolute", top: 8, right: 8 }}>
            <EditIconButton id={card.image} type="I" cardTitle={card.title} />
            <DeleteIconButton
              ids={[card.title, card.desc, card.duration, card.image]}
            />
          </Box>
        )}
      </Box>

      {/* CONTENT */}
      <Box sx={{ mt: 3, flexGrow: 1 }}>
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
            <EditIconButton id={card.title} cardTitle={card.title} />
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
          <EditIconButton id={card.desc} cardTitle={card.title} />
        </Typography>

        <Typography
          className="card-subtext"
          sx={{
            fontFamily: "Fira Sans",
            fontWeight: 500,
            fontSize: 18,
            mt: 2,
            transition: "color 0.3s",
            color: "#677489",
          }}
        >
          {content[card.duration]}
          <EditIconButton id={card.duration} cardTitle={card.title} />
        </Typography>
      </Box>

      {/* BUTTON (hidden initially, expands on hover) */}
      <Box
        className="cta-wrapper"
        sx={{
          opacity: 0,
          height: 0,
          overflow: "hidden",
          transition: "all 0.35s ease",
        }}
      >
        <Button
          fullWidth
          sx={{
            backgroundColor: "#C66A13",
            color: "#fff",
            borderRadius: "24px",
            py: 0.8,
            fontSize: 16,
            fontWeight: 600,
            textTransform: "none",
            "&:hover": { backgroundColor: "#b55f10" },
          }}
          onClick={() => navigate("/home/RepairServicesPage")}
        >
          Request a Repair Quote
        </Button>
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
                  transform: "scale(1.05)",
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
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              key={i}
              display="flex"
              justifyContent="center"
            >
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
                    transform: "scale(1.20)",
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
