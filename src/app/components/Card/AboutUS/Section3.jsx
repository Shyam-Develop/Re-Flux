import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Dialog,
  DialogContent,
  TextField,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import EditIcon from "@mui/icons-material/Edit";
import { typography } from "app/utils/constant";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Swal from "sweetalert2";

export default function AboutUsRepairServicesPageCard() {
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [BrowseDialogopen, setBrowseDialogOpen] = useState(false);

  const services = (() => {
    if (!content) return [];

    const keys = Object.keys(content).sort(
      (a, b) => parseInt(a.replace("AU", "")) - parseInt(b.replace("AU", ""))
    );

    const serviceList = [];

    // --- FIXED SERVICES (AU1048 → AU1065) ---
    for (let base = 1048; base <= 1065; base += 3) {
      const t = content[`AU${base}`];
      const d = content[`AU${base + 1}`];
      const i = content[`AU${base + 2}`];

      if (!t || !d || !i) continue;

      serviceList.push({
        id: base,
        title: t,
        type: d,
        img: `https://cmsreflux.bexatm.com${i}`,
      });
    }

    // --- NEW SERVICES (AFTER AU1113) ---
    const lastFixed = 1113;

    const maxAU = Math.max(
      ...keys
        .filter((k) => /^AU\d+$/.test(k))
        .map((k) => parseInt(k.replace("AU", ""), 10))
    );

    for (let base = lastFixed + 1; base <= maxAU; base += 3) {
      const tKey = `AU${base}`;
      const dKey = `AU${base + 1}`;
      const iKey = `AU${base + 2}`;

      if (!content[tKey] || !content[dKey] || !content[iKey]) continue;

      serviceList.push({
        id: base,
        title: content[tKey],
        type: content[dKey],
        img: `https://cmsreflux.bexatm.com${content[iKey]}`,
      });
    }

    return serviceList;
  })();

  // ✅ Fetch content from CMS
  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}?contentId=Aboutus`)
      .then((res) => res.json())
      .then((data) => setContent(data))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  // ✅ Admin role check
  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  useEffect(() => {
    const sid = localStorage.getItem("scrollToService");
    if (!sid) return;

    const tryScroll = () => {
      const el = document.getElementById(`SERVICE_${sid}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.style.outline = "3px solid #1C2D4B";
        setTimeout(() => (el.style.outline = ""), 1500);
        localStorage.removeItem("scrollToService");
        return true;
      }
      return false;
    };

    // Retry until Swiper fully mounts (max 20 tries)
    let attempts = 0;
    const timer = setInterval(() => {
      attempts++;
      if (tryScroll() || attempts > 20) clearInterval(timer);
    }, 200);

    return () => clearInterval(timer);
  }, [services]);

  // ✅ Handle edit click
  const handleEdit = (contentTextID, type = "T") => {
    navigate(
      `/CmsEditor?contentId=Aboutus&contentTextID=${contentTextID}&contentType=${type}`
    );
  };

  // ✅ Reusable Edit Icon (only for admin)
  const EditIconButton = ({ id, type = "T" }) =>
    isAdmin ? (
      <IconButton
        size="small"
        onClick={() => handleEdit(id, type)}
        sx={{
          ml: 0.5,
          p: 0.5,
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

  const handleClickOpen = () => setBrowseDialogOpen(true);
  const handledialogClose = () => setBrowseDialogOpen(false);

  if (!content) return null;

  // ADD NEW SERVICE (always after AU1113)
  const handleAddService = async () => {
    // find max AU number
    const keys = Object.keys(content)
      .filter((k) => /^AU\d+$/.test(k))
      .map((k) => parseInt(k.replace("AU", ""), 10));

    const maxAU = Math.max(...keys);

    // next triplet
    const t = maxAU + 1;
    const d = maxAU + 2;
    const i = maxAU + 3;

    const block = {
      [`AU${t}`]: "New Service Title",
      [`AU${d}`]: "New Service Subtitle",
      [`AU${i}`]: "/API/images/aboutus.png",
    };

    const res = await fetch(
      "https://cmsreflux.bexatm.com/API/data/UpdateContentV1.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contentId: "Aboutus", // <-- replace if needed
          newContent: block,
        }),
      }
    );

    const result = await res.json();
    if (result.success) {
      localStorage.setItem("scrollToService", t);
      setTimeout(() => window.location.reload(), 500);
    } else {
      alert("Failed to add service");
    }
  };

  const handleDeleteService = async (baseId) => {
    const confirm = await Swal.fire({
      title: "Delete this service?",
      text: "This will permanently remove this service item.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes",
    });

    if (!confirm.isConfirmed) return;

    try {
      const tKey = `AU${baseId}`;
      const dKey = `AU${baseId + 1}`;
      const iKey = `AU${baseId + 2}`;

      const res = await fetch(
        "https://cmsreflux.bexatm.com/API/data/DeleteContentV1.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contentId: "Aboutus", // <-- use correct About us contentId
            keys: [tKey, dKey, iKey],
          }),
        }
      );

      const result = await res.json();

      if (result.success) {
        Swal.fire({
          title: "Deleted!",
          text: "Service has been removed.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => window.location.reload());
      } else {
        Swal.fire({
          title: "Failed!",
          text: "Failed to delete service.",
          icon: "error",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong.",
        icon: "error",
      });
      console.error("Delete service error:", err);
    }
  };

  // ✅ File upload box
  const UploadBox = ({ label }) => (
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
            <strong style={{ color: "#1976d2" }}>Choose</strong> file to upload
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

  return (
    <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#f9fafb" }}>
      {/* ✅ Section Header (CMS Editable) */}
      <Typography
        sx={{ ...typography.displayM, color: "#1C2D4B", textAlign: "left" }}
      >
        {content.AU1046}
        <EditIconButton id="AU1046" />
      </Typography>
      <Typography
        sx={{ ...typography.h5, color: "#49576F", textAlign: "left" }}
      >
        {content.AU1047}
        <EditIconButton id="AU1047" />
      </Typography>

      {/* ✅ Swiper Carousel (same layout) */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          960: { slidesPerView: 3.5 },
        }}
        style={{ paddingBottom: "40px" }}
      >
        {(services || []).map((service, index) => (
          <SwiperSlide key={service.id}>
            <Card
              id={`SERVICE_${service.id}`}
              sx={{
                position: "relative",
                borderRadius: 3,
                width: "100%",
                maxWidth: 370,
                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                display: "flex",
                ml: 3,
                mt: 4,
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
              <Box>
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
                <Box sx={{ position: "absolute", left: "87%", bottom: "90%" }}>
                  <EditIconButton id={`AU${service.id + 2}`} type="I" />
                </Box>
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  sx={{ ...typography.h4, fontWeight: 700, color: "#1C2D4B" }}
                >
                  {service.title}
                  <EditIconButton id={`AU${service.id}`} />
                </Typography>
                <Typography
                  sx={{
                    ...typography.bodyBase,
                    fontFamily: "Fira Sans",
                    fontWeight: 400,
                    color: "#49576F",
                    mb: 2,
                  }}
                >
                  {service.type}
                  <EditIconButton id={`AU${service.id + 1}`} />
                </Typography>
              </CardContent>

              {/* ✅ Hover “View More” button */}
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
                View More
                <ArrowRightAltIcon sx={{ fontSize: 22 }} />
              </Button>
            </Card>
            {isAdmin && (
              <IconButton
                onClick={() => handleDeleteService(service.id)}
                sx={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  backgroundColor: "white",
                  boxShadow: 1,
                  "&:hover": { backgroundColor: "#ffebee" },
                }}
              >
                <DeleteIcon sx={{ color: "red" }} />
              </IconButton>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {isAdmin && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#1C2D4B" }}
            onClick={handleAddService}
          >
            Add Service
          </Button>
        </Box>
      )}

      {/* ✅ Custom pagination styling */}
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

      {/* ✅ Get Quote Button (same behavior) */}
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
        onClick={handleClickOpen}
      >
        {content.AU1113}
        <EditIconButton id="AU1113" />
      </Button>

      {/* ✅ Dialog (same design) */}
      <Dialog
        open={BrowseDialogopen}
        onClose={handledialogClose}
        maxWidth="sm"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "16px",
            height: "100vh",
            maxHeight: "100vh",
          },
        }}
      >
        <DialogContent>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Tell us what you need
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "#111" }}>
              Company Name *
            </Typography>
            <TextField placeholder="Ex: John" fullWidth variant="outlined" />
            <Typography sx={{ fontSize: "15px", mt: 2, color: "#111" }}>
              Contact Person *
            </Typography>
            <TextField
              placeholder="example@gmail.com"
              fullWidth
              variant="outlined"
            />
            <Typography sx={{ fontSize: "15px", mt: 2, color: "#111" }}>
              Phone *
            </Typography>
            <TextField
              placeholder="example@gmail.com"
              fullWidth
              variant="outlined"
            />
            <Typography sx={{ fontSize: "15px", mt: 2, color: "#111" }}>
              Email *
            </Typography>
            <TextField
              placeholder="example@gmail.com"
              fullWidth
              variant="outlined"
            />
            <Typography sx={{ fontSize: "15px", mt: 2, color: "#111" }}>
              Enquiry for *
            </Typography>
            <FormControl fullWidth>
              <Select defaultValue="">
                <MenuItem value="1-5">1-5</MenuItem>
                <MenuItem value="6-10">6-10</MenuItem>
                <MenuItem value="10-20">10-20</MenuItem>
                <MenuItem value="20+">20+</MenuItem>
              </Select>
            </FormControl>
            <Typography sx={{ fontSize: "15px", mt: 2, color: "#111" }}>
              Message
            </Typography>
            <TextField fullWidth multiline minRows={3} variant="outlined" />
            <Typography sx={{ fontSize: "15px", color: "#111" }}>
              Photos/Videos
            </Typography>
            <UploadBox />
          </CardContent>
          <Box mt={3} display="flex" flexDirection="column" gap={2}>
            <Button
              variant="text"
              startIcon={<WhatsAppIcon sx={{ color: "#25D366" }} />}
              sx={{
                color: "black",
                textTransform: "none",
                fontWeight: 500,
                fontSize: "14px",
                "&:hover": { backgroundColor: "transparent" },
              }}
            >
              Send on WhatsApp
            </Button>
            <Button fullWidth variant="contained" color="primary">
              Submit Message
            </Button>
          </Box>
          <Box mt={2}>
            <Button fullWidth variant="outlined">
              Continue to details
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
