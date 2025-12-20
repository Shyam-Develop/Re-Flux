// ProductListingPage.js

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  Pagination,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  InputBase,
  InputAdornment,
  Link,
  AppBar,
  Toolbar,
  Select,
  FormControl,
  Container,
  Divider,
  Paper,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import rentalimg from "../../../assets/rental_img.jpg";
import ROIimage from "../../../assets/ROICalculator.jpg";
import { typography, RefluxSvg } from "app/utils/constant";
import { useNavigate } from "react-router-dom";
import Footer from "app/components/Card/Footer";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";

// Dummy data (same image repeated)
const products = Array.from({ length: 6 }, (_, i) => ({
  title: "Circular Lifting Magnet",
  sizes: ["700mm", "900mm", "1200mm"],
  image: rentalimg,
}));

const fields = [
  { label: "Categories", id: "categories-1" },
  { label: "Start date", id: "start-date" },
  { label: "End date", id: "end-date" },
  { label: "Location", id: "location" },
  { label: "Categories", id: "categories-2" },
];

const Rentals = () => {
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(null);

  const handleChange = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  //For CMS

  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  //  Load content
  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_CMS_URL}?contentId=C016`;
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setContent(data))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  //  Check admin role
  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  useEffect(() => {
    const id = localStorage.getItem("scrollToFaqIdRE");
    if (!id) return;

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.style.outline = "3px solid #1C2D4B";
        setTimeout(() => (el.style.outline = ""), 1500);
      }
      localStorage.removeItem("scrollToFaqIdRE");
    }, 700);
  }, [content]);

  //  Edit function
  const handleEdit = (contentTextID, type = "T") => {
    navigate(
      `/CmsEditor?contentId=C016&contentTextID=${contentTextID}&contentType=${type}`
    );
  };

  //  Edit icon button
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
          },
          verticalAlign: "middle",
        }}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    ) : null;

  if (!content) return null;

  function buildRentCards(content) {
    if (!content) return [];

    const out = [];

    const CARD_MIN = 2000;
    const CARD_MAX = 2999; // <-- Rent Cards ONLY from 2000–2999

    const allKeys = Object.keys(content)
      .filter((k) => /^RE\d+$/.test(k))
      .map((k) => parseInt(k.replace("RE", ""), 10))
      .sort((a, b) => a - b);

    for (let id of allKeys) {
      // IGNORE FAQ KEYS
      if (id < CARD_MIN || id > CARD_MAX) continue;

      // first item of each card (image) must end with 1 e.g. 2001,2011...
      if (id % 10 !== 1) continue;

      const base = id;
      const card = {
        img: content[`RE${base}`],
        title: content[`RE${base + 1}`],
        subtitle: content[`RE${base + 2}`],
        price: content[`RE${base + 3}`],
        lift: content[`RE${base + 4}`],
        power: content[`RE${base + 5}`],
        details: content[`RE${base + 6}`],
        button: content[`RE${base + 7}`],
        ids: [
          `RE${base}`,
          `RE${base + 1}`,
          `RE${base + 2}`,
          `RE${base + 3}`,
          `RE${base + 4}`,
          `RE${base + 5}`,
          `RE${base + 6}`,
          `RE${base + 7}`,
        ],
      };

      out.push(card);
    }

    return out;
  }

  const getNextReNumber = () => {
    const keys = Object.keys(content)
      .filter((k) => /^RE\d+$/.test(k))
      .map((k) => Number(k.replace("RE", "")))
      .filter(num => num >= 2001 && num <= 2999);

    if (!keys.length) return 2001;

    const maxKey = Math.max(...keys);
    return maxKey - (maxKey % 10) + 11; // next card start ending in 1
  };



  const createNewRentCardPayload = () => {
    const start = getNextReNumber(); // now always 2001, 2009, 2017, etc.

    return {
      contentId: "C016",
      newContent: {
        [`RE${start}`]: "/API/images/RentService.png",
        [`RE${start + 1}`]: "New Rent Title",
        [`RE${start + 2}`]: "New Subtitle",
        [`RE${start + 3}`]: "Price/m*",
        [`RE${start + 4}`]: "0.0 Tons",
        [`RE${start + 5}`]: "220V",
        [`RE${start + 6}`]: "Dimensions",
        [`RE${start + 7}`]: "Check Availability",
      },
    };
  };


  const handleAddRent = async () => {
    const payload = createNewRentCardPayload();

    try {
      const response = await fetch(
        "https://cmsreflux.bexatm.com/API/data/UpdateContentV1.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (result.success) {
        setContent((prev) => ({ ...prev, ...payload.newContent }));

        // scroll to card after reload
        const newId = Object.keys(payload.newContent)[0];
        localStorage.setItem("scrollToRent", newId);
      } else {
        console.error("FAILED:", result);
      }
    } catch (err) {
      console.error("ERROR:", err);
    }
  };

  const renderCard = (p, key) => (
    <Grid item xs={12} sm={6} md={4} display="flex" key={key} id={`card-${key}`}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: 3,
        }}
      >

        {/* Image */}
        <Box sx={{ position: "relative", borderRadius: 2, overflow: "hidden", mb: 2 }}>
          <CardMedia
            component="img"
            image={`https://cmsreflux.bexatm.com${p.img}`}
            alt={p.title}
            sx={{
              height: 220,          // 🔥 FIXED HEIGHT
              objectFit: "cover",
            }}
          />


          {/* Chips */}
          <Box
            sx={{
              position: "absolute",
              top: 8,
              left: 8,
              display: "flex",
              gap: 1,
            }}
          >
            <Chip
              label="🔧 Available for Rent"
              size="small"
              sx={{
                bgcolor: "#1b5e20",
                color: "white",
                fontSize: "13px",
                borderRadius: "1px",
                height: "24px",
              }}
            />
            <Chip
              label="🛡️ Safety Tested"
              size="small"
              sx={{
                padding: "10px",
                bgcolor: "#1976d2",
                marginLeft: "70px",
                color: "white",
                fontSize: "13px",
                borderRadius: "1px",
                height: "24px",
              }}
            />
          </Box>

          {/* Edit Icon */}
          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              borderRadius: "50%",
            }}
          >
            <EditIconButton id={p.ids[0]} type="I" />
            <DeleteIconButton ids={p.ids} />
          </Box>
        </Box>

        {/* Card Content */}
        <CardContent
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            p: 3,
          }}
        >

          {/* Top Content */}
          <Box>
            {/* Title + Price */}
            <Box display="flex" justifyContent="space-between" gap={2}>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography
                    sx={{
                      ...typography.h4,
                      fontWeight: 700,
                      lineHeight: 1.2,
                      wordBreak: "break-word",
                    }}
                  >
                    {p.title}
                  </Typography>
                  <EditIconButton id={p.ids[1]} />
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
                  <Typography
                    sx={{
                      ...typography.h6,
                      fontWeight: 600,
                      color: "#00000099",
                    }}
                  >
                    {p.subtitle}
                  </Typography>
                  <EditIconButton id={p.ids[2]} />
                </Box>
              </Box>

              <Box sx={{ alignItems: "flex-end" }}>
                <Typography sx={{ ...typography.h6, fontWeight: 600 }}>
                  Start at
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <Typography
                    sx={{
                      ...typography.h5,
                      fontWeight: 700,
                      color: "#1A7B3F",
                    }}
                  >
                    {p.price}
                  </Typography>
                  <EditIconButton id={p.ids[3]} />
                </Box>
              </Box>
            </Box>

            {/* Lift + Power */}
            <Box display="flex" justifyContent="space-between" mt={3}>
              <Box>
                <Typography sx={{ color: "#677489" }}>Lift Capacity</Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <Typography sx={{ ...typography.h5, fontWeight: 500 }}>
                    {p.lift}
                  </Typography>
                  <EditIconButton id={p.ids[4]} />
                </Box>
              </Box>

              <Box>
                <Typography sx={{ color: "#677489" }}>Power Supply</Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <Typography sx={{ ...typography.h5, fontWeight: 500 }}>
                    {p.power}
                  </Typography>
                  <EditIconButton id={p.ids[5]} />
                </Box>
              </Box>
            </Box>

            {/* Details */}
            <Box mt={3}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Typography sx={{ color: "#677489" }}>Size Options</Typography>
                <EditIconButton id={p.ids[6]} />
              </Box>

              <Typography sx={{ ...typography.h5, fontWeight: 500 }}>
                {p.details}
              </Typography>
            </Box>
          </Box>

          {/* Button sticks to bottom */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: "auto",
              backgroundColor: "#1C2D4B",
              textTransform: "none",
              fontWeight: 600,
              borderRadius: 2,
              py: 1,
              "&:hover": { backgroundColor: "#103766" },
            }}
          >
            {p.button}
            <EditIconButton id={p.ids[7]} />
          </Button>
        </CardContent>

      </Card>
    </Grid>
  );


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
        "https://cmsreflux.bexatm.com/API/data/DeleteContentV1.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contentId: "C016",
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


  //Blog data
  const blogData = [
    {
      title: content.RE1039,
      author: content.RE1040,
      date: content.RE1041,
      image: `https://cmsreflux.bexatm.com${content.RE1042}`,
      featured: true,
    },
    {
      title: content.RE1043,
      author: content.RE1044,
      date: content.RE1045,
      image: `https://cmsreflux.bexatm.com${content.RE1046}`,
    },
    {
      title: content.RE1047,
      author: content.RE1048,
      date: content.RE1049,
      image: `https://cmsreflux.bexatm.com${content.RE1050}`,
    },
    {
      title: content.RE1051,
      author: content.RE1052,
      date: content.RE1053,
      image: `https://cmsreflux.bexatm.com${content.RE1054}`,
    },
  ];

  const reFaqData = (() => {
    if (!content) return [];

    const out = [];

    // 1. BUILT-IN DEFAULT FAQs (RE1026–RE1035)
    for (let i = 1026; i <= 1035; i += 2) {
      const qId = `RE${i}`;
      const aId = `RE${i + 1}`;

      if (content[qId] && content[aId]) {
        out.push({
          qId,
          aId,
          question: content[qId],
          answer: content[aId],
        });
      }
    }

    // 2. ONLY USER-ADDED FAQ RANGE
    const FAQ_MIN = 1600;   // 👈 User-added FAQ IDs start here
    const FAQ_MAX = 1999;   // 👈 End before Rent Cards

    const allKeys = Object.keys(content)
      .filter((k) => /^RE\d+$/.test(k))
      .map((k) => parseInt(k.replace("RE", ""), 10))
      .sort((a, b) => a - b);

    for (let i of allKeys) {
      // Keep only valid FAQ range
      if (i < FAQ_MIN || i > FAQ_MAX) continue;

      // Question must be an odd number
      if (i % 2 === 0) continue;

      const qId = `RE${i}`;
      const aId = `RE${i + 1}`;

      if (content[qId] && content[aId]) {
        out.push({
          qId,
          aId,
          question: content[qId],
          answer: content[aId],
        });
      }
    }

    return out;
  })();




  const handleAddREFaq = async () => {
    if (!content) return alert("Content not loaded");

    const existing = Object.keys(content)
      .filter((k) => /^RE(1[6-9]\d{2})$/.test(k)) // only 1600–1999
      .map((k) => Number(k.replace("RE", "")));

    const nextQ = existing.length
      ? Math.max(...existing) + 2
      : 1601;  // first user FAQ

    const nextA = nextQ + 1;

    const newFAQ = {
      [`RE${nextQ}`]: "New FAQ Question?",
      [`RE${nextA}`]: "New FAQ Answer.",
    };

    const res = await fetch(
      "https://cmsreflux.bexatm.com/API/data/UpdateContentV1.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contentId: "C016",
          newContent: newFAQ,
        }),
      }
    );

    const result = await res.json();

    if (result.success) {
      localStorage.setItem("scrollToFaqIdRE", `RE${nextQ}`);
      window.location.reload();
    } else {
      alert("Failed to add RE FAQ.");
    }
  };

  const handleDeleteREFaq = async (qId, aId) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this FAQ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes",
    });

    if (!confirm.isConfirmed) return;

    try {
      const res = await fetch(
        "https://cmsreflux.bexatm.com/API/data/DeleteContentV1.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contentId: "C016",
            keys: [qId, aId],
          }),
        }
      );

      const result = await res.json();

      if (result.success) {
        Swal.fire({
          title: "Deleted!",
          text: "FAQ has been successfully removed.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          window.location.reload();
        });
      } else {
        Swal.fire({
          title: "Failed!",
          text: "Failed to delete FAQ.",
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

  return (
    <Box sx={{ p: 0 }}>
      {/* Filters */}

      {/* AppBar with Diagonal Right Cut */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#18294C", // Dark navy blue
          padding: "30px 60px",
          color: "#fff",
          borderBottomRightRadius: "40px",
          clipPath: "polygon(0 0, 100% 0, 100% 0%, 95% 100%, 0% 100%)",
        }}
      >
        {/* Left Text */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            ...typography.h3RBold,
          }}
        >
          {content.RE1001}
          <EditIconButton id="RE1001" />
        </Typography>

        {/* Right Search Box */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #ccc",
            maxWidth: "300px",
            width: "100%",
            marginRight: "60px",
          }}
        >
          <InputBase
            placeholder="Search for a product"
            sx={{
              color: "#fff",
              flex: 1,
              px: 1,
              fontSize: "20px",
              fontWeight: 500,
              fontFamily: "Space Grotesk, Regular",
              lineHeight: "1.30",
              "&::placeholder": {
                color: "#ccc",
              },
            }}
            inputProps={{ "aria-label": "search" }}
          />
          <IconButton
            type="submit"
            sx={{ color: "#fff", p: "5px" }}
            aria-label="search"
          >
            <SearchIcon
              sx={{
                width: "40px",
                height: "40px",
              }}
            />
          </IconButton>
        </Box>
      </Box>


      {/* Rental Card Box */}
      {/* <Box sx={{ maxWidth: '1296px', mx: 'auto' }}> */}
      <Box sx={{}}>

        {/* Product grid */}
        <Box sx={{ px: "5%", px: 5, py: 7 }}>

          {/* Add Button */}
          {isAdmin && (
            <Button
              onClick={handleAddRent}
              startIcon={<AddIcon />}
              sx={{
                float: "right",
                textTransform: "none",
                fontWeight: 500,
                border: "1.5px solid #1a4dab",
                color: "#1a4dab",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "rgba(26,77,171,0.06)",
                  borderColor: "#163a82",
                },
                borderRadius: "12px",
                paddingX: "18px",
              }}
            >
              Add New Rent Card
            </Button>
          )}

          <Grid container spacing={4}>

            {/* First 3 ORIGINAL CARDS */}
            {[
              {
                img: content.RE1002,
                title: content.RE1003,
                subtitle: content.RE1004,
                price: content.RE1005,
                lift: content.RE1006,
                power: content.RE1007,
                details: content.RE1008,
                button: content.REBTN1,
                ids: ["RE1002", "RE1003", "RE1004", "RE1005", "RE1006", "RE1007", "RE1008", "REBTN1"],
              },
              {
                img: content.RE1009,
                title: content.RE1010,
                subtitle: content.RE1011,
                price: content.RE1012,
                lift: content.RE1013,
                power: content.RE1014,
                details: content.RE1015,
                button: content.REBTN2,
                ids: ["RE1009", "RE1010", "RE1011", "RE1012", "RE1013", "RE1014", "RE1015", "REBTN2"],
              },
              {
                img: content.RE1016,
                title: content.RE1017,
                subtitle: content.RE1018,
                price: content.RE1019,
                lift: content.RE1020,
                power: content.RE1021,
                details: content.RE1022,
                button: content.REBTN3,
                ids: ["RE1016", "RE1017", "RE1018", "RE1019", "RE1020", "RE1021", "RE1022", "REBTN3"],
              },
            ].map((p, idx) => renderCard(p, idx))}

            {/*    DYNAMIC EXTRA RE CARDS (ADDED FROM JSON)*/}
            {buildRentCards(content).map((p, idx) =>
              renderCard(p, `extra-${idx}`)
            )}

          </Grid>
        </Box>



        {/* FAQs Section */}
        <Box sx={{ px: 5, py: 1 }}>
          {/* 🔹 Editable Tag Button */}
          <Button
            disableElevation
            disableRipple
            sx={{
              marginBottom: 2,
              marginTop: "30px",
              textTransform: "none",
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "#1a4dab",
              backgroundColor: "rgba(36,121,233,0.08)",
              borderRadius: "20px",
              py: 0.5,
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "rgba(36,121,233,0.15)",
                boxShadow: "none",
              },
            }}
          >
            {content.RE1023}
            <EditIconButton id="RE1023" />
          </Button>

          {/* 🔹 Section Title */}
          <Typography
            sx={{
              ...typography.displayL,
              color: "#1C2D4B",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
            variant="h3"
            fontWeight="bold"
            gutterBottom
          >
            {content.RE1024}
            <EditIconButton id="RE1024" />
          </Typography>

          {/* 🔹 Description Text */}
          <Typography
            variant="h5"
            sx={{
              ...typography.h4,
              color: "#99A0AE",
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 4,
            }}
          >
            {content.RE1025}
            <EditIconButton id="RE1025" />
          </Typography>

          {/* 🔹 FAQ Accordions */}
          <Box>
            {reFaqData.map((item, index) => (
              <Accordion
                key={index}
                id={item.qId}
                expanded={expanded === index}
                onChange={() => handleChange(index)}
                disableGutters
                elevation={0}
                sx={{
                  backgroundColor: expanded === index ? "#eaf3fb" : "#fdfdfd",
                  borderRadius: 2,
                  mb: 1,
                  px: 2,
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <IconButton>
                      {expanded === index ? (
                        <RemoveIcon sx={{ color: "#1976d2" }} />
                      ) : (
                        <AddIcon sx={{ color: "#1976d2" }} />
                      )}
                    </IconButton>
                  }
                >
                  <Typography
                    sx={{
                      ...typography.h4,
                      color: "#0E1109",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    {item.question}
                    <EditIconButton id={item.qId} />
                    {isAdmin && (
                      <IconButton
                        size="small"
                        onClick={() => handleDeleteREFaq(item.qId, item.aId)}
                        sx={{ ml: 1, color: "#B71C1C" }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    )}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography
                    sx={{
                      ...typography.bodyBase,
                      color: "#0E1109",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    {item.answer}
                    <EditIconButton id={item.aId} />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
            {/* ADD NEW FAQ BUTTON */}
            {isAdmin && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleAddREFaq}
                  sx={{
                    backgroundColor: "#1C2D4B",
                    color: "#fff",
                    borderRadius: 2,
                    px: 3,
                    py: 1,
                  }}
                >
                  <AddIcon /> Add New FAQ
                </Button>
              </Box>
            )}
          </Box>
        </Box>

        {/* Blogs Section */}
        <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 3, md: 6 } }}>
          {/* Section Header */}
          <Button
            disableElevation
            disableRipple
            sx={{
              marginBottom: 2,
              textTransform: "none",
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "#1a4dab",
              backgroundColor: "rgba(36,121,233,0.08)",
              borderRadius: "20px",
              px: 2,
              py: 0.5,
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "rgba(36,121,233,0.15)",
                boxShadow: "none",
              },
              display: "inline-flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {content.RE1036}
            <EditIconButton id="RE1036" />
          </Button>

          <Typography
            sx={{
              ...typography.displayL,
              color: "#1C2D4B",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
            variant="h3"
            fontWeight="bold"
            gutterBottom
          >
            {content.RE1037}
            <EditIconButton id="RE1037" />
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: "#1C2D4B",
              ...typography.h4,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {content.RE1038}
            <EditIconButton id="RE1038" />
          </Typography>

          {/* Blog Section */}
          <Grid container spacing={3}>
            {/* Featured Post */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  boxShadow: 0,
                  bgcolor: "#fafafa",
                  cursor: "pointer",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    image={blogData[0].image}
                    alt={blogData[0].title}
                    sx={{
                      borderRadius: 3,
                      width: "100%",
                      height: { xs: 240, sm: 280, md: 300 },
                      objectFit: "cover",
                    }}
                  />
                  <Box sx={{ position: "absolute", bottom: 8, right: 8 }}>
                    <EditIconButton id="RE1042" type="I" />
                  </Box>
                </Box>

                <CardContent>
                  <Typography
                    sx={{
                      ...typography?.h5,
                      color: "#0E1109",
                      fontSize: { xs: "1.2rem", md: "1.5rem" },
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                    gutterBottom
                  >
                    {blogData[0].title}
                    <EditIconButton id="RE1039" />
                  </Typography>
                  <Typography
                    sx={{
                      ...typography?.bodyBase,
                      color: "#677489",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    {blogData[0].author} <EditIconButton id="RE1040" /> •{" "}
                    {blogData[0].date} <EditIconButton id="RE1041" />
                  </Typography>

                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      color: "#1F77D6",
                      ...typography?.bodyBasemedium,
                      mt: 1,
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                    onClick={() => navigate("/home/BlogDetails")}
                  >
                    Discover More{" "}
                    <ArrowForwardIosIcon
                      sx={{ ml: 0.5, color: "#1F77D6", fontSize: "0.9rem" }}
                    />
                  </Link>
                </CardContent>
              </Card>
            </Grid>

            {/* Other Posts */}
            <Grid item xs={12} md={6}>
              <Grid container spacing={2} direction="column">
                {blogData.slice(1).map((item, idx) => {
                  const base = 1043 + idx * 4; // auto increment RS keys per card
                  return (
                    <Grid item key={idx}>
                      <Card
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "row", sm: "row" },
                          alignItems: "center",
                          borderRadius: 3,
                          px: { xs: 1, md: 2 },
                          py: { xs: 1, md: 1.5 },
                          bgcolor: "#fdfdfd",
                          boxShadow: 0,
                          cursor: "pointer",
                        }}
                      >
                        <Box sx={{ position: "relative" }}>
                          <CardMedia
                            component="img"
                            image={item.image}
                            alt={item.title}
                            sx={{
                              width: { xs: 100, sm: 120, md: 130 },
                              height: { xs: 100, sm: 120, md: 141 },
                              borderRadius: 2,
                              objectFit: "cover",
                              mr: 2,
                            }}
                          />
                          <Box
                            sx={{ position: "absolute", bottom: 6, right: 6 }}
                          >
                            <EditIconButton id={`RE${base + 3}`} type="I" />
                          </Box>
                        </Box>

                        <Box sx={{ flex: 1 }}>
                          <Typography
                            sx={{
                              ...typography?.h4,
                              color: "#0E1109",
                              fontSize: { xs: "0.95rem", sm: "1.1rem" },
                              mb: 0.5,
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            {item.title}
                            <EditIconButton id={`RE${base}`} />
                          </Typography>

                          <Typography
                            sx={{
                              ...typography?.bodyBase,
                              color: "#677489",
                              fontSize: { xs: "0.75rem", sm: "0.85rem" },
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            {item.author}{" "}
                            <EditIconButton id={`RE${base + 1}`} /> •{" "}
                            {item.date} <EditIconButton id={`RE${base + 2}`} />
                          </Typography>

                          <Link
                            href="#"
                            underline="none"
                            sx={{
                              color: "#1F77D6",
                              ...typography?.bodyBasemedium,
                              mt: 0.5,
                              fontSize: { xs: "0.75rem", sm: "0.85rem" },
                              display: "inline-flex",
                              alignItems: "center",
                            }}
                            onClick={() => navigate("/home/Blogpost")}
                          >
                            Discover More{" "}
                            <ArrowForwardIosIcon
                              sx={{
                                ml: 0.5,
                                color: "#1F77D6",
                                fontSize: "0.8rem",
                              }}
                            />
                          </Link>
                        </Box>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Footer */}
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Rentals;
