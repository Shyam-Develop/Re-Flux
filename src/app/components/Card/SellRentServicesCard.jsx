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
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";

export default function SellRentServicesCard({ services }) {
  const navigate = useNavigate();

  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);

  const theme = useTheme();

  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_CMS_URL}?contentId=C008`;
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

  // Build rent cards
  const rentData = (() => {
    if (!content) return [];

    const cards = [];

    // RR5000 – RR5999
    const ids = Object.keys(content)
      .filter((k) => /^RR5\d{3}$/.test(k))
      .map((k) => parseInt(k.replace("RR", ""), 10))
      .sort((a, b) => a - b);

    ids.forEach((num) => {
      const key = `RR${num}`;

      // IMAGE = starting point of each card
      if (
        typeof content[key] === "string" &&
        content[key].includes("/API/images")
      ) {
        const card = {
          image: { id: `RR${num}`, value: content[`RR${num}`] },
          title: { id: `RR${num + 1}`, value: content[`RR${num + 1}`] },
          capacity: { id: `RR${num + 2}`, value: content[`RR${num + 2}`] },
          supply: { id: `RR${num + 3}`, value: content[`RR${num + 3}`] },
          size: { id: `RR${num + 4}`, value: content[`RR${num + 4}`] },
          sizeOptions: { id: `RR${num + 5}`, value: content[`RR${num + 5}`] },
          price: { id: `RR${num + 6}`, value: content[`RR${num + 6}`] },
          chip1: { id: `RR${num + 7}`, value: content[`RR${num + 7}`] },
          chip2: { id: `RR${num + 8}`, value: content[`RR${num + 8}`] },

          coil: {
            id: `RR${num + 9}`,
            value: content[`RR${num + 9}`],
          },

          button: {
            id: `RR${num + 10}`,
            value: content[`RR${num + 10}`] || "View Details",
          },
        };

        cards.push(card);
      }
    });

    return cards;
  })();

  // SCROLL TO NEWLY ADDED RENT CARD
  useEffect(() => {
    const id = localStorage.getItem("scrollToRent");
    if (!id) return;

    const timer = setTimeout(() => {
      const el = document.getElementById(`RC_${id}`);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        // Highlight the card
        el.style.outline = "3px solid #1C2D4B";
        setTimeout(() => (el.style.outline = ""), 1500);
      }

      localStorage.removeItem("scrollToRent");
    }, 600);

    return () => clearTimeout(timer);
  }, [rentData]);

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

  const buttonLabel = { id: "RR5054", value: content.RR5054 };

  // Helpers
  const isImage = (v) =>
    typeof v === "string" &&
    (v.includes("/API/images") || /\.(jpg|jpeg|png)$/i.test(v));

  const isText = (v) =>
    typeof v === "string" && v.trim().length > 1 && !isImage(v);

  const handleAddRentCard = async () => {
    const ids = Object.keys(content)
      .filter((k) => /^RR5\d{3}$/.test(k))
      .map((k) => parseInt(k.replace("RR", ""), 10))
      .sort((a, b) => a - b);

    const maxId = Math.max(...ids);

    let start = maxId + 1;

    // find clean 11-slot block
    while (content[`RR${start}`] || content[`RR${start + 10}`]) {
      start++;
    }

    const block = {
      [`RR${start}`]: "/API/images/ROICalculator.jpg",
      [`RR${start + 1}`]: "New Magnet Title",
      [`RR${start + 2}`]: "1.0 Tons",
      [`RR${start + 3}`]: "220V",
      [`RR${start + 4}`]: "100mm / 200mm",
      [`RR${start + 5}`]: "Size Options: 100 / 200",
      [`RR${start + 6}`]: "$50",
      [`RR${start + 7}`]: "🔧 Available for Rent",
      [`RR${start + 8}`]: "🛡️ Safety Tested",
      [`RR${start + 9}`]: "Coil",
      [`RR${start + 10}`]: "View Details",
    };

    const res = await fetch(
      "https://cmsreflux.bexatm.com/API/data/UpdateContentV1.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contentId: "C008",
          newContent: block,
        }),
      }
    );

    const result = await res.json();
    if (result.success) {
      localStorage.setItem("scrollToRent", `${start}`);
      setTimeout(() => window.location.reload(), 500);
    } else {
      alert("Failed to add card");
    }
  };

  const handleDeleteRentCard = async (item) => {
    const confirm = await Swal.fire({
      title: "Delete this rental card?",
      text: "Are you sure you want to delete this rental card?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes",
    });

    if (!confirm.isConfirmed) return;

    const keysToDelete = [
      item.image.id,
      item.title.id,
      item.capacity.id,
      item.supply.id,
      item.size.id,
      item.sizeOptions.id,
      item.price.id,
      item.chip1.id,
      item.chip2.id,
      item.coil.id,
      item.button.id,
    ];

    try {
      const res = await fetch(
        "https://cmsreflux.bexatm.com/API/data/DeleteContentV1.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contentId: "C008",
            keys: keysToDelete,
          }),
        }
      );

      const result = await res.json();

      if (result.success) {
        Swal.fire({
          title: "Deleted!",
          text: "Rental card has been removed.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => window.location.reload());
      } else {
        Swal.fire({
          title: "Failed!",
          text: "❌ Failed to delete rental card.",
          icon: "error",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong while deleting.",
        icon: "error",
      });
      console.error("Delete error:", err);
    }
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "1440px" }, // full width on mobile
        height: { xs: "auto", md: "880px" },
        backgroundColor: "#f9fafb",
        px: { xs: 2, md: 0 },
        py: { xs: 4, md: 0 },
        mx: "auto",
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          ml: { xs: 0, md: 8 },
          ...typography.displayL,
          color: "#1C2D4B",
          fontWeight: "bold",
          fontSize: { xs: "1.8rem", md: "3rem" },
          mb: 1,
          textAlign: { xs: "center", md: "left" },
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
          color: "#1C2D4B",
          ...typography.h4,
          ml: { xs: 0, md: 8 },
          fontSize: { xs: "1.1rem", md: "1.5rem" },
          textAlign: { xs: "center", md: "left" },
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
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        breakpoints={{ 768: { slidesPerView: 3, spaceBetween: 0 } }}
      >
        {rentData.map((item, index) => (
          <SwiperSlide key={index}>
            <Card
              id={`RC_${item.image.id.replace("RR", "")}`}
              sx={{
                width: { xs: "90%", md: "416px" },
                height: { xs: "auto", md: "573px" },
                borderRadius: 2,
                border: "1px solid #e0e0e0",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: "0px 6px 16px rgba(0,0,0,0.1)",
                  transform: "translateY(-4px)",
                },
                mx: "auto",
                mb: { xs: 3, md: 0 },
              }}
            >
              {/* IMAGE */}
              <Box
                sx={{
                  position: "relative",
                  mx: "auto",
                  mt: 2,
                  width: { xs: "100%", md: "395px" },
                  height: { xs: "auto", md: "240px" },
                }}
              >
                <CardMedia
                  component="img"
                  image={`https://cmsreflux.bexatm.com${item.image.value}`}
                  alt={item.title.value}
                  sx={{
                    width: { xs: "100%", md: "395px" },
                    height: { xs: "220px", md: "240px" },
                    objectFit: "cover",
                    padding: "0px 8px 2px 8px",
                    borderRadius: 5,
                  }}
                />

                {/* EDIT ICON (IMAGE) */}
                {isAdmin && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      zIndex: 2,
                    }}
                  >
                    <EditIconButton id={item.image.id} type="I" />
                  </Box>
                )}

                {/* CHIPS */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    right: 10,
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 1,
                    zIndex: 1,
                  }}
                >
                  <Chip
                    label={item.chip1.value}
                    size="small"
                    sx={{
                      fontSize: { xs: "12px", md: "14px" },
                      bgcolor: "#1B7B4E",
                      color: "white",
                      width: "48%",
                      textAlign: "center",
                      borderRadius: "3px",
                    }}
                  />

                  <Chip
                    label={item.chip2.value}
                    size="small"
                    sx={{
                      fontSize: { xs: "12px", md: "14px" },
                      bgcolor: "#2F6FBA",
                      color: "white",
                      width: "48%",
                      textAlign: "center",
                      borderRadius: "3px",
                    }}
                  />
                </Box>
              </Box>

              {/* CONTENT */}
              <CardContent
                sx={{
                  flexGrow: 1,
                  width: { xs: "90%", md: "400px" },
                  mx: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 0,
                  mt: 2,
                }}
              >
                {/* TITLE + PRICE */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{
                      ...typography.h4,
                      fontSize: { xs: "1rem", md: "1.25rem" },
                    }}
                  >
                    {item.title.value}
                    {isAdmin && <EditIconButton id={item.title.id} />}
                  </Typography>

                  <Typography
                    sx={{
                      ...typography.h4,
                      color: "#5937E0",
                      fontSize: { xs: "1rem", md: "1.25rem" },
                    }}
                  >
                    {item.price.value}
                    {isAdmin && <EditIconButton id={item.price.id} />}
                  </Typography>
                </Box>

                {/* COIL */}
                <Typography
                  sx={{ ...typography.h6, color: "#00000099", mb: 3 }}
                >
                  {item.coil.value}
                  {isAdmin && <EditIconButton id={item.coil.id} type="T" />}
                </Typography>

                {/* SPECS */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    mb: 2,
                    gap: 0.9,
                  }}
                >
                  <Box sx={{ minWidth: "95px" }}>
                    <Typography sx={{ ...typography.h6 }}>
                      Lift Capacity
                    </Typography>
                    <Typography
                      sx={{ ...typography.bodySmall, color: "#677489" }}
                    >
                      {item.capacity.value}
                      {isAdmin && <EditIconButton id={item.capacity.id} />}
                    </Typography>
                  </Box>

                  <Box sx={{ minWidth: "95px" }}>
                    <Typography sx={{ ...typography.h6 }}>
                      Power Supply
                    </Typography>
                    <Typography
                      sx={{ ...typography.bodySmall, color: "#677489" }}
                    >
                      {item.supply.value}
                      {isAdmin && <EditIconButton id={item.supply.id} />}
                    </Typography>
                  </Box>

                  <Box sx={{ minWidth: "95px" }}>
                    <Typography sx={{ ...typography.h6 }}>Size</Typography>
                    <Typography
                      sx={{ ...typography.bodySmall, color: "#677489" }}
                    >
                      {item.size.value}
                      {isAdmin && <EditIconButton id={item.size.id} />}
                    </Typography>
                  </Box>
                </Box>

                {/* SIZE OPTIONS */}
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>Size Options</Typography>
                  <Typography sx={{ fontSize: "14px", color: "#555" }}>
                    {item.sizeOptions.value}
                    {isAdmin && <EditIconButton id={item.sizeOptions.id} />}
                  </Typography>
                </Box>
              </CardContent>

              {/* BUTTON — NOW PER CARD */}
              {/* BUTTON — NOW PER CARD */}
              <Box sx={{ p: 2, pt: 3 }}>
                <Button
                  onClick={() => navigate("/home/CheckAvailabilty")}
                  fullWidth
                  variant="contained"
                  sx={{
                    width: { xs: "90%", md: "384px" },
                    height: "50px",
                    borderRadius: 4,
                    backgroundColor: "#1C2D4B",
                    "&:hover": { backgroundColor: "#1C2D4B" },
                    mx: "auto",
                  }}
                >
                  {item.button?.value || "View Details"}

                  {isAdmin && (
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation(); // ⛔ stop button navigation
                        handleEdit(item.button.id, "T"); // ✔ open CMS editor only
                      }}
                      sx={{
                        ml: 1,
                        p: 0.5,
                        borderRadius: "50%",
                        backgroundColor: "#f0f0f0",
                        color: "#1C2D4B",
                        border: "1px solid #ccc",
                        "&:hover": { backgroundColor: "#e0e0e0" },
                      }}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                  )}
                </Button>
              </Box>

              {/* DELETE BUTTON */}
              {isAdmin && (
                <IconButton
                  onClick={() => handleDeleteRentCard(item)}
                  sx={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    bgcolor: "white",
                    color: "red",
                    zIndex: 3,
                    "&:hover": { bgcolor: "#ffe5e5" },
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {isAdmin && (
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#1C2D4B" }}
            onClick={handleAddRentCard}
          >
            <AddIcon /> Add New Rent Card
          </Button>
        </Box>
      )}

      {/* Pagination Dots */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3, px: 2 }}>
        {rentData.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 30,
              height: 3,
              borderRadius: 2,
              backgroundColor: index <= activeIndex ? "#1C2D4B" : "#d3d3d3",
              mx: 0.5,
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </Box>

      {/* Bottom Link */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "flex-start" },
          ml: { xs: 0, md: 120 },
          mt: 3,
        }}
      >
        <Typography
          sx={{
            ...typography.h3R,
            color: "#1a4dab",
            fontWeight: 600,
            textDecoration: "underline",
            cursor: "pointer",
            fontSize: { xs: "1rem", md: "1.2rem" },
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
          onClick={() => navigate("/home/SellMagnet")}
        >
          {content.RR5048}
          <ArrowRightAltIcon
            sx={{
              color: "#1a4dab",
              fontWeight: "bold",
              verticalAlign: "middle",
              ml: 1,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          />
        </Typography>

        {/* Separate edit icon, outside the clickable link */}
        <EditIconButton id="RR5048" />
      </Box>
    </Box>
  );
}
