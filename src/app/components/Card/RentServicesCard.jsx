import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { typography } from "app/utils/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";

export default function RentServices() {
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  /* -------------------- LOAD CONTENT -------------------- */
  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}?contentId=HomeRentService`)
      .then((res) => res.json())
      .then((data) => setContent(data))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  /* -------------------- EDIT HANDLER -------------------- */
  const handleEdit = (contentTextID, type = "T") => {
    const scroll = window.scrollY;
    localStorage.setItem("scrollPos", scroll);
    navigate(
      `/CmsEditor?contentId=HomeRentService&contentTextID=${contentTextID}&contentType=${type}`
    );
  };

  const EditIconButton = ({ id, type = "T" }) =>
    isAdmin ? (
      <IconButton
        size="small"
        onClick={() => handleEdit(id, type)}
        sx={{
          ml: 0.5,
          p: 0.3,
          borderRadius: "50%",
          backgroundColor: "#f0f0f0",
          color: "#1C2D4B",
          border: "1px solid #ccc",
          "&:hover": { backgroundColor: "#e0e0e0", color: "#070808ff" },
        }}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    ) : null;

  useEffect(() => {
    const id = localStorage.getItem("scrollToRent");
    if (!id) return;

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.style.outline = "3px solid #1C2D4B";
        setTimeout(() => (el.style.outline = ""), 1500);
      }
      localStorage.removeItem("scrollToRent");
    }, 700);
  }, [content]);

  if (!content) return null;


  /* -------------------- BUILD CARDS -------------------- */
  function buildCards() {
    const cards = [];
    const keys = Object.keys(content)
      .filter((k) => /^HR\d+$/.test(k))
      .map((k) => Number(k.replace("HR", "")))
      .sort((a, b) => a - b);

    const start = 1004;
    const maxKey = Math.max(...keys);

    for (let base = start; base <= maxKey; base += 7) {
      if (!content[`HR${base}`]) continue;
      cards.push({
        img: content[`HR${base}`],
        alt: content[`HR${base}_ALT`],
        title: content[`HR${base + 1}`],
        subtitle: content[`HR${base + 2}`],
        lift: content[`HR${base + 3}`],
        power: content[`HR${base + 4}`],
        details: content[`HR${base + 5}`],
        price: content[`HR${base + 6}`],
        ids: [
          `HR${base}`,
          `HR${base + 1}`,
          `HR${base + 2}`,
          `HR${base + 3}`,
          `HR${base + 4}`,
          `HR${base + 5}`,
          `HR${base + 6}`,
        ],
      });
    }
    return cards;
  }

  const services = buildCards();

  /* -------------------- NEXT HR NUMBER -------------------- */
  const getNextHrNumber = () => {
    const keys = Object.keys(content)
      .filter((k) => /^HR\d+$/.test(k))
      .map((k) => Number(k.replace("HR", "")));
    return keys.length ? Math.max(...keys) + 1 : 1004;
  };

  /* -------------------- CREATE NEW CARD -------------------- */
  const createNewCardPayload = () => {
    const start = getNextHrNumber();
    return {
      contentId: "HomeRentService",
      newContent: {
        [`HR${start}`]: "/API/images/RentService.png",
        [`HR${start + 1}`]: "New Rent Title",
        [`HR${start + 2}`]: "New Subtitle",
        [`HR${start + 3}`]: "0.0 Tons",
        [`HR${start + 4}`]: "220V",
        [`HR${start + 5}`]: "Dimensions",
        [`HR${start + 6}`]: "Price/m*",
      },
    };
  };

  /* -------------------- HANDLE ADD RENT -------------------- */
  const handleAddRent = async () => {
    const payload = createNewCardPayload();
    try {
      const response = await fetch(
        "https://refluxmagnets.com/API/data/UpdateContentV1.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const result = await response.json();
      if (!result.success) {
        console.error("FAILED:", result);
      } else {
        setContent((prev) => ({ ...prev, ...payload.newContent }));
        const newId = Object.keys(payload.newContent)[0];
        localStorage.setItem("scrollToRent", newId);
      }
    } catch (error) {
      console.error("ERROR:", error);
    }
  };


  // --- Delete button
  const DeleteIconButton = ({ ids }) =>
    isAdmin ? (
      <IconButton
        size="small"
        onClick={() => handleDeleteCard(ids)}   // <-- triggers async deletion
        sx={{
          ml: 1,
          p: 0.5,
          borderRadius: "50%",
          backgroundColor: "#ffebee",
          color: "#c62828",
          // border: "1px solid #c62828",
          "&:hover": { backgroundColor: "#ffcdd2" }
        }}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    ) : null;


  const handleDeleteCard = async (ids) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this Rent's card?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes",
    });

    if (!confirm.isConfirmed) return;

    try {
      const res = await fetch(
        "https://refluxmagnets.com/API/data/DeleteContentV1.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contentId: "HomeRentService",
            keys: ids,
          }),
        }
      );

      const result = await res.json();

      if (result.success) {
        Swal.fire({
          title: "Deleted!",
          text: "Rent's Card has been successfully removed.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          window.location.reload();
        });
      } else {
        Swal.fire({
          title: "Failed!",
          text: "Failed to delete card.",
          icon: "error",
        });
      }
    } catch (err) {
      console.error("Delete error:", err);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
      });
    }
  };

  /* -------------------- RENDER -------------------- */
  return (
    <Box sx={{  }}>
      {/* ✅ WIDTH LOCK WRAPPER */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, md: 0 },
          py: 7,
        }}
      >

        {/* Tag Line */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",   // <<--- the fix
            mb: 2,
            gap: 1,
          }}
        >
          {/* LEFT SIDE */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              disableRipple
              sx={{
                ...typography.bodySmall,
                textTransform: "none",
                fontWeight: 400,
                color: "#1a4dab",
                backgroundColor: "rgba(36,121,233,0.08)",
                borderRadius: "20px",
                px: 2,
                py: 0.5,
                "&:hover": { backgroundColor: "rgba(36,121,233,0.15)" },
              }}
            >
              {content.HR1001}
            </Button>

            <EditIconButton id="HR1001" />
          </Box>

          {/* RIGHT SIDE */}
          {isAdmin && (
            <Button
              startIcon={<AddIcon />}
              onClick={handleAddRent}
              sx={{
                textTransform: "none",
                border: "1px solid #1a4dab",
                color: "#1a4dab",
                borderRadius: "10px",
                "&:hover": { borderColor: "#163a82", background: "#f5f8ff" },
              }}
            >
              Add Rent
            </Button>
          )}
        </Box>


        {/* Heading */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          <Typography sx={{ ...typography.h3RB, fontWeight: 700 }}>
            {content.HR1002}
          </Typography>
          <EditIconButton id="HR1002" />
        </Box>

        {/* Description */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 5 }}>
          <Typography
            variant="h6"
            sx={{ ...typography.h3B1, color: "text.secondary", fontWeight: 400 }}
          >
            {content.HR1003}
          </Typography>
          <EditIconButton id="HR1003" />
        </Box>

        {/* Swiper */}

        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            960: { slidesPerView: 3 },
            1200: { slidesPerView: 3 }, // optional clarity
          }}
        >

          {services.map((p) => (
            <SwiperSlide
              key={p.ids[0]}
              style={{ display: "flex" }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  width: "100%",          // ✅ let Swiper control width
                  maxWidth: 1200,
                  overflow: "hidden",
                  position: "relative",
                  p: 2,
                  bgcolor: "#FAFAFA",
                  border: "1px solid #e0e0e0",
                  transition: "all 0.4s ease",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",

                  "&:hover": {
                    backgroundColor: "#1C2D4B",
                    color: "#fff",
                    // transform: "scale(1.05)",
                  },

                  "&:hover .hover-text": {
                    color: "#c5cbd6ff", // ← your desired hover color
                  },

                  "&:hover .MuiButton-root": {
                    backgroundColor: "#b18028",
                    color: "#fff",
                  },
                }}
              >

                <Box sx={{ position: "relative", borderRadius: 2, overflow: "hidden", mb: 2 }}>
                  <Box
                    component="img"
                    src={`https://refluxmagnets.com${p.img}`}
                     alt={p.alt || p.title}
                    sx={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 2 }}
                  />

                  <Box sx={{ position: "absolute", top: 8, left: 10, display: "flex", gap: 1 }}>
                    <Chip label="🔧 Available for Rent" size="small"
                      sx={{
                        borderRadius: '0px', bgcolor: "#1B7B4E",
                        color: "white", fontSize: "14px",
                        fontWeight: 400,
                      }} />
                    <Chip
                      label="🛡️ Safety Tested"
                      size="small"
                      sx={{
                        borderRadius: "0px",
                        ml: { xs: 0, sm: "70px" },
                        bgcolor: "#2F6FBA",
                        color: "white",
                        fontSize: "14px",
                        fontWeight: 400,
                      }}
                    />

                  </Box>

                  <Box sx={{ position: "absolute", top: 8, right: 8 }}>
                    <EditIconButton id={p.ids[0]} type="I " />
                    <DeleteIconButton ids={p.ids} />
                  </Box>
                </Box>

                <CardContent
                  sx={{
                    p: 0,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >

                  <Box display="flex" justifyContent="space-between">
                    <Box>
                      <Typography sx={{ ...typography.h4, fontWeight: 700 }}>
                        {p.title} <EditIconButton id={p.ids[1]} />
                      </Typography>
                      <Typography sx={{ ...typography.h6, fontWeight: 600 }}>
                        {p.subtitle} <EditIconButton id={p.ids[2]} />
                      </Typography>
                    </Box>

                    <Box sx={{ textAlign: "right" }}>
                      <Typography sx={{ ...typography.h6, fontWeight: 600 }}>
                        Start at
                      </Typography>
                      <Typography sx={{ ...typography.h5, fontWeight: 700, color: "#178270" }}>
                        {p.price} <EditIconButton id={p.ids[6]} />
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                    <Box>
                      <Typography className="hover-text" sx={{ ...typography.bodyBase, fontFamily: "Fira Sans", fontWeight: 400, color: "#677489" }}>Lift Capacity</Typography>
                      <Typography sx={{ ...typography.h5, fontWeight: 500, fontSize: "20px" }}>
                        {p.lift} <EditIconButton id={p.ids[3]} />
                      </Typography>
                    </Box>

                    <Box>
                      <Typography className="hover-text" sx={{ ...typography.bodyBase, fontFamily: "Fira Sans", fontWeight: 400, color: "#677489" }}>Power Supply</Typography>
                      <Typography sx={{ ...typography.h5, fontWeight: 500, fontSize: "20px" }}>
                        {p.power} <EditIconButton id={p.ids[4]} />
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ mt: 3 }}>
                    <Typography className="hover-text" sx={{ ...typography.bodyBase, fontFamily: "Fira Sans", fontWeight: 400, color: "#677489" }}>
                      Size Options <EditIconButton id={p.ids[5]} />
                    </Typography>
                    <Typography sx={{ ...typography.h5, fontWeight: 500, fontSize: "20px" }}>{p.details}</Typography>
                  </Box>

                  <Button
                    fullWidth
                    sx={{
                      width: "100%",
                      height: "50px",
                      mt: 3,
                      backgroundColor: "#1C2D4B",
                      color: "#fff",
                      textTransform: "none",
                      fontWeight: 600,
                      borderRadius: 2,
                    }}
                    onClick={() => navigate("/home/CheckAvailabilty")}
                  >
                    Check Availability
                  </Button>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        <style>
          {`
           .swiper {
              width: 100%;
              max-width: 1200px;
              mx:auto;
              margin: 0 auto;
              padding-bottom: 40px;
              overflow: hidden;
            }


            /* Progress bar styling */
            .swiper-pagination-progressbar {
              background: rgba(0,0,0,0.1);
              height: 4px;
              border-radius: 4px;
              bottom: 0 !important;
              top: auto !important;
              width: 40%;
              margin: 0 auto;
              left: 30%;
            }

            .swiper-pagination-progressbar-fill {
              background: #003366 !important; /* your site’s blue */
              border-radius: 4px;
            }


          
            .swiper-wrapper {
              align-items: stretch !important;
            }

            .swiper-slide {
              height: auto !important;
              display: flex;
            }

          `}
        </style>
      </Box>
    </Box>

  );
}
