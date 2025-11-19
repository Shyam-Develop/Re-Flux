import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Modal,
  Typography,
  useMediaQuery,
  useTheme,
  Paper,
  TextField,
  MenuItem,
  Card,
  CardMedia,
  IconButton,
} from "@mui/material";
import ROIimage from "../../../assets/ROICalculator.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { typography } from "app/utils/constant";
import EquipmentSwiper from "app/components/Card/RepairReplaceCard";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Brand1 from "../../../assets/Brand1.png";
import Repair from "../../../assets/RRimage.jpg";
import Footer from "app/components/Card/Footer";
import Rentinstead from "../../../assets/Rentinstaed.jpg";
import SellRentServicesCard from "app/components/Card/SellRentServicesCard";
import HandshakeIcon from "@mui/icons-material/Handshake";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Swal from "sweetalert2";

const services = [
  {
    id: 1,
    title: "Sell Us",
    type: "Coil",
    subtitile: "Per day",
    icon: HandshakeIcon,
    img: Rentinstead,
    price: 25,
    liftCapacity: "2.5 tons",
    powerSupply: "220V / 110V",
    sizes: "700mm / 890mm /120mm",
  },
  {
    id: 2,
    title: "Exchange",
    type: "Coil",
    subtitile: "Per day",
    icon: HandshakeIcon,
    img: Rentinstead,
    price: 25,
    liftCapacity: "2.5 tons",
    powerSupply: "220V / 110V",
    sizes: "700mm / 890mm /120mm",
  },
  {
    id: 3,
    title: "Exchange",
    type: "Coil",
    subtitile: "Per day",
    icon: HandshakeIcon,
    img: Rentinstead,
    price: 25,
    liftCapacity: "2.5 tons",
    powerSupply: "220V / 110V",
    sizes: "700mm / 890mm /120mm",
  },
  {
    id: 4,
    title: "Exchange",
    type: "Coil",
    subtitile: "Per day",
    icon: HandshakeIcon,
    img: Rentinstead,
    price: 25,
    liftCapacity: "2.5 tons",
    powerSupply: "220V / 110V",
    sizes: "700mm / 890mm /120mm",
  },
  {
    id: 5,
    title: "Exchange",
    type: "Coil",
    subtitile: "Per day",
    icon: HandshakeIcon,
    img: Rentinstead,
    price: 25,
    liftCapacity: "2.5 tons",
    powerSupply: "220V / 110V",
    sizes: "700mm / 890mm /120mm",
  },
  {
    id: 6,
    title: "Exchange",
    type: "Coil",
    subtitile: "Per day",
    icon: HandshakeIcon,
    img: Rentinstead,
    price: 25,
    liftCapacity: "2.5 tons",
    powerSupply: "220V / 110V",
    sizes: "700mm / 890mm /120mm",
  },
];

const RoiCalculator = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // ✅ Fetch content from API
  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}?contentId=C014`)
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

  useEffect(() => {
    const id = localStorage.getItem("scrollToRoi");
    if (!id) return;
    const t = setTimeout(() => {
      const el = document.getElementById(`ROI_${id}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.style.outline = "3px solid #1C2D4B";
        setTimeout(() => (el.style.outline = ""), 1500);
      }
      localStorage.removeItem("scrollToRoi");
    }, 700);
    return () => clearTimeout(t);
  }, [content]);

  // ✅ Navigate to CMS editor
  const handleEdit = (contentTextID, type = "T") => {
    window.location.href = `/CmsEditor?contentId=C014&contentTextID=${contentTextID}&contentType=${type}`;
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

  // ---------- helpers ----------
  const isImagePath = (s) =>
    typeof s === "string" &&
    (s.includes("/API/images") ||
      s.includes("/ATM/images") ||
      /\.(jpg|jpeg|png|gif|svg)$/i.test(s));

  const looksLikeText = (s) =>
    typeof s === "string" && s.trim().length > 2 && !isImagePath(s);

  // ---------- robust roiData builder ----------
  const roiData = (() => {
    if (!content) return [];

    // get sorted numeric CON170xxx numbers
    const nums = Object.keys(content)
      .filter((k) => /^CON170\d+$/.test(k))
      .map((k) => parseInt(k.replace("CON", ""), 10))
      .sort((a, b) => a - b);

    const out = [];
    // scan and look for image key then next two keys that are text
    for (let i = 0; i < nums.length; i++) {
      const n = nums[i];
      const keyImg = `CON${String(n).padStart(6, "0")}`;
      const valImg = content[keyImg];

      if (!isImagePath(valImg)) continue; // only start at image

      // try to find next two numeric keys in the sorted nums array
      const nextIndex = nums.indexOf(n) + 1;
      const n1 = nums[nextIndex];
      const n2 = nums[nextIndex + 1];

      if (!n1 || !n2) continue; // not enough keys after image

      const keyTitle = `CON${String(n1).padStart(6, "0")}`;
      const keyDesc = `CON${String(n2).padStart(6, "0")}`;
      const titleVal = content[keyTitle];
      const descVal = content[keyDesc];

      if (looksLikeText(titleVal) && looksLikeText(descVal)) {
        out.push({
          imageId: keyImg,
          titleId: keyTitle,
          descId: keyDesc,
          image: valImg,
          title: titleVal,
          description: descVal,
        });

        // skip those two keys so we don't re-use them
        i = i + 2;
      }
    }

    // good to sanity-check in console during dev:
    // console.log("roiData built:", out);
    return out;
  })();

  const handleAddRoiCard = async () => {
    if (!content) return alert("content not loaded");
    // collect existing CON170xxx numbers
    const existing = new Set(
      Object.keys(content)
        .filter((k) => /^CON170\d+$/.test(k))
        .map((k) => parseInt(k.replace("CON", ""), 10))
    );

    // start searching after the current max
    const maxExisting = Math.max(...Array.from(existing), 170000);
    let candidate = maxExisting + 1;

    // find first block where none of the three keys exist
    while (
      existing.has(candidate) ||
      existing.has(candidate + 1) ||
      existing.has(candidate + 2)
    ) {
      candidate += 1;
    }

    const imageId = `CON${String(candidate).padStart(6, "0")}`;
    const titleId = `CON${String(candidate + 1).padStart(6, "0")}`;
    const descId = `CON${String(candidate + 2).padStart(6, "0")}`;

    const newCard = {
      [imageId]: "/API/images/ROICalculator.jpg",
      [titleId]: "New ROI Card Title",
      [descId]: "New ROI Card Description.",
    };

    const res = await fetch(
      "https://cmsreflux.bexatm.com/API/data/UpdateContentV1.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contentId: "C014", newContent: newCard }),
      }
    );

    const result = await res.json();
    if (result.success) {
      localStorage.setItem("scrollToRoi", candidate); // store numeric id
      setTimeout(() => window.location.reload(), 600);
    } else {
      alert("Failed to add ROI card");
    }
  };

  const handleDeleteRoiCard = async (item) => {
    const confirm = await Swal.fire({
      title: "Delete this card?",
      text: "Are you sure you want to delete this ROI card?",
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
            contentId: "C014",
            keys: [item.imageId, item.titleId, item.descId],
          }),
        }
      );

      const result = await res.json();

      if (result.success) {
        Swal.fire({
          title: "Deleted!",
          text: "ROI card has been removed.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          window.location.reload();
        });
      } else {
        Swal.fire({
          title: "Failed!",
          text: "❌ Failed to delete card.",
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
      display="grid"
      gap="20px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      sx={{
        "& > div": {
          gridColumn: { xs: "span 4", md: undefined }, // mobile: full width
        },
        p: { xs: 2, md: 3 }, // add padding on mobile only
      }}
    >
      <Box sx={{ gridColumn: "span 4", p: { xs: 1, md: 2 } }}>
        <Box
          sx={{
            width: "100%",
            maxWidth: 1280,
            mx: "auto",
            py: { xs: 3, md: 5 }, // mobile smaller padding
          }}
        >
          {/* Title & Description */}
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              px: { xs: 1, md: 0 },
            }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                ...typography.displayL,
                fontSize: { xs: "1.8rem", md: "3rem" },
                mb: 1,
              }}
              gutterBottom
            >
              {content.CON170000}
              {isAdmin && <EditIconButton id="CON170000" />}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                ...typography.h4,
                mb: 3,
                color: "text.secondary",
                fontSize: { xs: "1rem", md: "1.5rem" },
              }}
            >
              {content.CON170001}
              {isAdmin && <EditIconButton id="CON170001" />}
            </Typography>
          </Box>

          {/* Cards */}
          <Box sx={{ px: { xs: 1, md: 6 }, mb: "5%" }}>
            <Grid container spacing={3} justifyContent="flex-start">
              {roiData.map((item, index) => (
                <Grid
                  item
                  key={index}
                  xs={12} // full width on mobile
                  sm={6}
                  md="auto"
                >
                  <Card
                    id={`ROI_${parseInt(item.imageId.replace("CON", ""))}`}
                    sx={{
                      position: "relative",
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: 3,
                      height: { xs: 300, md: 400 },
                      width: { xs: "100%", md: 558 }, // full width mobile
                    }}
                  >
                    {/* delete button */}
                    {isAdmin && (
                      <IconButton
                        onClick={() => handleDeleteRoiCard(item)}
                        sx={{
                          position: "absolute",
                          top: 12,
                          left: 12,
                          bgcolor: "white",
                          color: "red",
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    )}
                    {/* Background Image */}
                    <CardMedia
                      component="img"
                      image={`https://cmsreflux.bexatm.com${item.image}`}
                      alt={item.title}
                      sx={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                    {/* ✅ Edit Icon visible only for admin */}
                    {isAdmin && (
                      <IconButton
                        onClick={() => handleEdit(item.imageId, "I")}
                        sx={{
                          position: "absolute",
                          top: 12,
                          right: 12,
                          bgcolor: "white",
                          color: "black",
                          zIndex: 2, // ✅ ensures it appears above image
                          "&:hover": {
                            bgcolor: "primary.main",
                            color: "white",
                          },
                        }}
                      >
                        <EditIcon type="I" />
                      </IconButton>
                    )}

                    {/* Overlay White Card */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 16,
                        left: 16,
                        right: 16,
                        bgcolor: "white",
                        borderRadius: 2,
                        boxShadow: 1,
                        px: 2,
                        py: 1.5,
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.5,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "#0b2d55",
                          color: "white",
                          "& .MuiTypography-root": { color: "white" },
                          "& .MuiIconButton-root": {
                            bgcolor: "#4487ebff",
                            color: "white",
                          },
                        },
                      }}
                    >
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography
                          variant="subtitle1"
                          fontWeight="bold"
                          sx={{ fontSize: { xs: "18px", md: "24px" } }}
                        >
                          {item.title}
                          {isAdmin && (
                            <EditIconButton
                              id={Object.keys(content).find(
                                (key) => content[key] === item.title
                              )}
                            />
                          )}
                        </Typography>
                        <IconButton
                          size="small"
                          sx={{
                            backgroundColor: "#f0f0f0",
                            width: { xs: 32, md: 40 },
                            height: { xs: 32, md: 40 },
                          }}
                        >
                          <ArrowForwardIosIcon fontSize="small" />
                        </IconButton>
                      </Box>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: { xs: "14px", md: "18px" } }}
                      >
                        {item.description}
                        {isAdmin && (
                          <EditIconButton
                            id={Object.keys(content).find(
                              (key) => content[key] === item.description
                            )}
                          />
                        )}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {isAdmin && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#1C2D4B",
                    color: "#fff",
                    px: 3,
                    py: 1,
                    borderRadius: "10px",
                    "&:hover": { backgroundColor: "#16233B" },
                  }}
                  onClick={handleAddRoiCard}
                >
                  <AddIcon /> Add New ROI Card
                </Button>
              </Box>
            )}
          </Box>

          {/* Rent Calculator Section */}
          <Box>
            <SellRentServicesCard services={services} />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
export default RoiCalculator;
