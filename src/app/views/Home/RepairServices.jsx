import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Chip,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Link,
  IconButton,
  Accordion,
  AccordionSummary,
  TextField,
  InputAdornment,
  AccordionDetails,
  useTheme,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useNavigate } from "react-router-dom";
import { typography, RefluxSvg } from "app/utils/constant";
import Footer from "app/components/Card/Footer";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ServiceCard = ({
  contentId = "C013",
  image,
  imageId,
  title,
  titleId,
  overlayTitle,
  overlayId,
  commonFault,
  commonFaultId,
  faults = [],
  faultsId,
  service,
  serviceId,
  serviceValue,
  serviceValueId,
  imageLeft = true,
  onAdd,
  onDelete,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [isAdmin, setIsAdmin] = useState(false);

  // ✅ Check admin role
  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  // ✅ Scroll to newly added fault chip after reload
  useEffect(() => {
    const targetId = localStorage.getItem("scrollToFaultId");
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.style.outline = "2px solid #1C2D4B";
          setTimeout(() => (el.style.outline = ""), 1500);
        }
        localStorage.removeItem("scrollToFaultId");
      }, 700);
    }
  }, []);

  // ✅ Edit navigation (correctly uses passed ID)
  const handleEdit = (contentTextID, type = "T") => {
    navigate(
      `/CmsEditor?contentId=${contentId}&contentTextID=${contentTextID}&contentType=${type}`
    );
  };

  // ✅ Edit icon button
  const EditIconButton = ({ id, type = "T", position = "inline" }) =>
    isAdmin ? (
      <IconButton
        size="small"
        onClick={() => handleEdit(id, type)}
        sx={{
          position: position === "absolute" ? "absolute" : "static",
          top: position === "absolute" ? 8 : "auto",
          right: position === "absolute" ? 8 : "auto",
          ml: position === "inline" ? 1 : 0,
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

  return (
    <Paper
      id={imageId}
      elevation={0}
      sx={{
        backgroundColor: "#fbfbfb",
        borderRadius: "10px",
        p: 4,
        width: "1197px",
        mx: "auto",
        mt: 4,
        position: "relative", // ✅ important for absolute Add button
        "@media (max-width: 900px)": {
          width: "100%",
          p: 2,
        },
      }}
    >
      {/* Add and Delete buttons */}
      {isAdmin && (
        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            display: "flex",
            gap: 1,
          }}
        >
          <IconButton
            onClick={onAdd}
            sx={{
              background: "#1C2D4B",
              color: "#fff",
              "&:hover": { background: "#16233B" },
            }}
          >
            <AddIcon />
          </IconButton>

          <IconButton
            onClick={onDelete}
            sx={{
              background: "#B71C1C",
              color: "#fff",
              "&:hover": { background: "#7F0000" },
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      )}

      <Grid
        container
        spacing={4}
        alignItems="center"
        direction={imageLeft ? "row" : "row-reverse"}
        sx={{
          "@media (max-width: 900px)": {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          },
        }}
      >
        {/* IMAGE SECTION */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              borderTopLeftRadius: "10px",
              width: "447px",
              height: "450.5px",
              "@media (max-width: 900px)": {
                width: "100%",
                height: "260px",
              },
            }}
          >
            {/* ✅ Image Edit Button (Top-Right Corner) */}
            <Box sx={{ position: "absolute", top: 8, right: 8, zIndex: 2 }}>
              <EditIconButton id={imageId} type="I" />
            </Box>

            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
                display: "block",
                "&:hover": { transform: "scale(1.05)" },
              }}
            />

            {/* Diagonal Overlay */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "40%",
                background: "rgba(40,40,50,0.85)",
                clipPath: "polygon(0 20%, 170% 100%, 0 100%)",
                color: "white",
                p: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                "@media (max-width: 900px)": {
                  height: "35%",
                  p: 2,
                },
              }}
            >
              <Typography
                sx={{
                  ...typography.h4,
                  fontWeight: 400,
                  fontSize: "24px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {overlayTitle}
                <EditIconButton id={overlayId} />
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* CONTENT SECTION */}
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            width: "686px",
            height: "508px",
            "@media (max-width: 900px)": {
              width: "100%",
              height: "auto",
              mt: 2,
            },
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              ...typography.h2,
              fontWeight: 600,
              fontSize: "32px",
              color: "#1A2438",
              mb: 3,
              display: "flex",
              alignItems: "center",
            }}
          >
            {title}
            <EditIconButton id={titleId} />
          </Typography>

          {/* Common Fault */}
          <Typography
            sx={{
              ...typography.h4,
              fontWeight: 700,
              fontSize: "24px",
              color: "#49576F",
              mb: 3,
              display: "flex",
              alignItems: "center",
            }}
          >
            {commonFault}
            {/* ✅ Single Edit button for all faults together */}
            <EditIconButton id={commonFaultId} />
          </Typography>

          {/* Fault Chips */}
          {/* Fault Chips with edit, add, and delete buttons */}
          {/* Fault Chips with neatly aligned edit/delete icons and auto-scroll on add */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              mb: 3,
              "@media (max-width: 900px)": {
                justifyContent: "center",
              },
            }}
          >
            {(Array.isArray(faults) ? faults : []).map((fault, index) => (
              <Chip
                key={index}
                id={`${faultsId}-${index}`} // For scroll targeting after add
                label={
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {/* Fault text (clickable for admin) */}
                    <Typography
                      component="span"
                      sx={{
                        cursor: isAdmin ? "pointer" : "default",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "180px",
                        "&:hover": isAdmin
                          ? { textDecoration: "underline" }
                          : {},
                      }}
                      onClick={() =>
                        isAdmin &&
                        navigate(
                          `/CmsEditor?contentId=${contentId}&contentTextID=${faultsId}[${index}]&contentType=A`
                        )
                      }
                    >
                      {fault}
                    </Typography>

                    {/* ✏️ Edit */}
                    {isAdmin && (
                      <IconButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(
                            `/CmsEditor?contentId=${contentId}&contentTextID=${faultsId}[${index}]&contentType=A`
                          );
                        }}
                        sx={{
                          p: 0.3,
                          color: "#1C2D4B",
                          "&:hover": { backgroundColor: "#f1f1f1" },
                        }}
                      >
                        <EditIcon fontSize="inherit" />
                      </IconButton>
                    )}

                    {/* 🗑️ Delete */}
                    {isAdmin && (
                      <IconButton
                        size="small"
                        onClick={async (e) => {
                          e.stopPropagation();
                          if (
                            !window.confirm(`Delete "${fault}" from this list?`)
                          )
                            return;

                          const updatedFaults = faults.filter(
                            (_, i) => i !== index
                          );

                          const res = await fetch(
                            "https://skillglow.bexatm.com/ATM/data/UpdateContentV1.php",
                            {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({
                                contentId,
                                newContent: { [faultsId]: updatedFaults },
                              }),
                            }
                          );
                          const result = await res.json();
                          if (result.success) window.location.reload();
                          else alert("❌ Failed to delete fault.");
                        }}
                        sx={{
                          p: 0.3,
                          color: "#B71C1C",
                          "&:hover": { backgroundColor: "#fbe9e7" },
                        }}
                      >
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    )}
                  </Box>
                }
                variant="outlined"
                sx={{
                  fontSize: "18px",
                  fontWeight: 500,
                  fontFamily: "Space Grotesk, Regular",
                  borderRadius: "20px",
                  px: 1.5,
                  py: 0.5,
                  display: "flex",
                  alignItems: "center",
                  "&:hover": {
                    bgcolor: isAdmin ? "#1c2434" : "inherit",
                    color: isAdmin ? "white" : "inherit",
                  },
                }}
              />
            ))}

            {/* ➕ Add Fault Button (Admin Only) */}
            {isAdmin && (
              <IconButton
                onClick={async () => {
                  const newFaults = [...faults, "New Fault"];
                  const newIndex = newFaults.length - 1;

                  const res = await fetch(
                    "https://skillglow.bexatm.com/ATM/data/UpdateContentV1.php",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        contentId,
                        newContent: { [faultsId]: newFaults },
                      }),
                    }
                  );

                  const result = await res.json();
                  if (result.success) {
                    // Save scroll target
                    localStorage.setItem(
                      "scrollToFaultId",
                      `${faultsId}-${newIndex}`
                    );
                    window.location.reload();
                  } else alert("❌ Failed to add new fault.");
                }}
                sx={{
                  background: "#1C2D4B",
                  color: "#fff",
                  width: 36,
                  height: 36,
                  "&:hover": { background: "#16233B" },
                }}
              >
                <AddIcon />
              </IconButton>
            )}
          </Box>

          {/* Service Highlights */}
          <Typography
            sx={{
              ...typography.h5,
              color: "#0E1626",
              marginTop: "3%",
              display: "flex",
              alignItems: "center",
              "@media (max-width: 900px)": {
                marginTop: "2%",
              },
            }}
          >
            <strong>{service}</strong>
            <EditIconButton id={serviceId} />
          </Typography>

          <Typography
            sx={{
              ...typography.h5,
              color: "#0E1626",
              marginTop: "1%",
              display: "flex",
              alignItems: "center",
            }}
          >
            {serviceValue}
            <EditIconButton id={serviceValueId} />
          </Typography>

          {/* Button */}
          <Button
            onClick={() => navigate("/home/RepairServicesPage")}
            variant="contained"
            sx={{
              backgroundColor: "#1C2D4B",
              borderRadius: "12px",
              textTransform: "none",
              px: 5,
              py: 2,
              mt: "54px",
              fontSize: "18px",
              width: "622px",
              height: "50px",
              "&:hover": {
                backgroundColor: "#1C2D4B",
                color: "white",
              },
              "@media (max-width: 900px)": {
                width: "100%",
                marginTop: "25px",
                fontSize: "16px",
              },
            }}
          >
            View Details
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

const RepairServices = () => {
  const theme = useTheme();

  const [expanded, setExpanded] = useState(null);

  const navigate = useNavigate();

  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [cards, setCards] = useState([]);

  //  Load content
  useEffect(() => {
    fetch("https://skillglow.bexatm.com/ATM/data/C013.json")
      .then((res) => res.json())
      .then((data) => {
        setContent(data);

        const rsKeys = Object.keys(data)
          .filter((k) => k.startsWith("RS"))
          .sort(
            (a, b) =>
              parseInt(a.replace("RS", "")) - parseInt(b.replace("RS", ""))
          );

        const cardsDetected = [];

        for (let i = 1005; i < rsKeys.length + 1000; i++) {
          const image = data[`RS${i}`];
          const title = data[`RS${i + 1}`];
          const overlayTitle = data[`RS${i + 2}`];
          const commonFault = data[`RS${i + 3}`];
          const faults = data[`RS${i + 4}`];
          const service = data[`RS${i + 5}`];
          const serviceValue = data[`RS${i + 6}`];

          // ✅ more flexible detection
          if (
            image &&
            title &&
            serviceValue &&
            Array.isArray(faults) &&
            typeof service === "string" &&
            service.toLowerCase().includes("service")
          ) {
            cardsDetected.push({
              image: `https://skillglow.bexatm.com${image}`,
              imageId: `RS${i}`,
              title,
              titleId: `RS${i + 1}`,
              overlayTitle,
              overlayId: `RS${i + 2}`,
              commonFault,
              commonFaultId: `RS${i + 3}`,
              faults,
              faultsId: `RS${i + 4}`,
              service,
              serviceId: `RS${i + 5}`,
              serviceValue,
              serviceValueId: `RS${i + 6}`,
              imageLeft: cardsDetected.length % 2 === 0,
            });

            i += 6; // skip next block
          }
        }
console.log(cardsDetected);
        setCards(cardsDetected);
      })
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  // ✅ Scroll to the new section after reload
  useEffect(() => {
    const targetId = localStorage.getItem("scrollToCardId");
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          el.style.outline = "3px solid #1C2D4B"; // highlight briefly
          setTimeout(() => (el.style.outline = ""), 2000);
        }
        // clear the stored ID after scrolling
        localStorage.removeItem("scrollToCardId");
      }, 800);
    }
  }, []);

  const handleAddCard = async (index) => {
    const existingIds = Object.keys(content).filter((k) => k.startsWith("RS"));

    const getNextId = () => {
      const max = Math.max(
        ...existingIds.map((id) => parseInt(id.replace("RS", "")))
      );
      const next = max + 1;
      existingIds.push(`RS${next}`);
      return `RS${next}`;
    };

    // 🔹 Generate all new IDs for this new card
    const newIds = {
      imageId: getNextId(),
      titleId: getNextId(),
      overlayId: getNextId(),
      commonFaultId: getNextId(),
      faultsId: getNextId(),
      serviceId: getNextId(),
      serviceValueId: getNextId(),
    };

    // 🔹 Build the new card JSON object
    const sampleCard = {
      [newIds.imageId]: "/ATM/images/sample_service.png",
      [newIds.titleId]: "New Sample Service Title",
      [newIds.overlayId]: "New Overlay Title",
      [newIds.commonFaultId]: "Common faults",
      [newIds.faultsId]: ["Sample Fault 1", "Sample Fault 2"],
      [newIds.serviceId]: "Service Highlights:",
      [newIds.serviceValueId]: "Sample service value details",
    };

    console.log("🆕 Sending new content block:", sampleCard);

    // 🔹 Send to backend
    const res = await fetch(
      "https://skillglow.bexatm.com/ATM/data/UpdateContentV1.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contentId: "C013",
          newContent: sampleCard,
        }),
      }
    );

    const result = await res.json();
    console.log("Server response:", result);

    if (result.success) {
      // 🔹 Update local state for instant UI feedback
      const test={ ...content, ...sampleCard };
      console.log("Updated content state:", test);
      setContent({ ...content, ...sampleCard });
      setCards([
        ...cards,
        {
          image: `https://skillglow.bexatm.com${sampleCard[newIds.imageId]}`,
          title: sampleCard[newIds.titleId],
          overlayTitle: sampleCard[newIds.overlayId],
          commonFault: sampleCard[newIds.commonFaultId],
          faults: sampleCard[newIds.faultsId],
          service: sampleCard[newIds.serviceId],
          serviceValue: sampleCard[newIds.serviceValueId],
          imageLeft: cards.length % 2 === 0,
        },
      ]);

      // ✅ Save target for scroll after reload
      localStorage.setItem("scrollToCardId", newIds.imageId);

      // ✅ Delay reload slightly to ensure backend file update is complete
      setTimeout(() => {
        window.location.reload();
      }, 800);
    } else {
      alert(
        "❌ Failed to save new card. Please check backend permissions or file path."
      );
    }
  };

  const handleDeleteCard = async (card) => {
    if (!window.confirm("Are you sure you want to delete this service card?"))
      return;

    const keysToDelete = [
      card.imageId,
      card.titleId,
      card.overlayId,
      card.commonFaultId,
      card.faultsId,
      card.serviceId,
      card.serviceValueId,
    ];

    // 1️⃣ Update backend JSON file
    const res = await fetch(
      "https://skillglow.bexatm.com/ATM/data/DeleteContentV1.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contentId: "C013",
          keys: keysToDelete,
        }),
      }
    );

    const result = await res.json();
    console.log("Delete result:", result);

    // 2️⃣ Update local React state
    setCards(cards.filter((c) => c.imageId !== card.imageId));

    window.location.reload();
  };

  //  Check admin role
  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  //  Edit function
  const handleEdit = (contentTextID, type = "T") => {
    navigate(
      `/CmsEditor?contentId=C013&contentTextID=${contentTextID}&contentType=${type}`
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

  //ROI Calculator
  const roiData = [
    {
      image: `https://skillglow.bexatm.com${content.RS1053}`,
      title: content.RS1054,
      description: content.RS1055,
      ids: { image: "RS1053", title: "RS1054", desc: "RS1055" },
    },
    {
      image: `https://skillglow.bexatm.com${content.RS1056}`,
      title: content.RS1057,
      description: content.RS1058,
      ids: { image: "RS1056", title: "RS1057", desc: "RS1058" },
    },
  ];

  const handleChange = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const blogData = [
    {
      title: content.RS1101,
      author: content.RS1102,
      date: content.RS1103,
      image: `https://skillglow.bexatm.com${content.RS1104}`,
    },
    {
      title: content.RS1106,
      author: content.RS1107,
      date: content.RS1108,
      image: `https://skillglow.bexatm.com${content.RS1109}`,
    },
    {
      title: content.RS1110,
      author: content.RS1111,
      date: content.RS1112,
      image: `https://skillglow.bexatm.com${content.RS1113}`,
    },
    {
      title: content.RS1114,
      author: content.RS1115,
      date: content.RS1116,
      image: `https://skillglow.bexatm.com${content.RS1117}`,
    },
  ];

  return (
    <>
      {/* Top Image */}
      <Box sx={topImageStyle}>
        <Box
          component="img"
          src={`https://skillglow.bexatm.com${content.RS1002}`}
          style={imageStyle}
        />
        <Box sx={{ position: "absolute", top: 8, right: 8, zIndex: 2 }}>
          <EditIconButton id="RS1002" type="I" />
        </Box>

        <Box sx={overlayBoxStyle}>
          <Typography sx={{ ...typography.h3, color: "#000000" }}>
            {content.RS1001} <EditIconButton id="RS1001" />
          </Typography>
        </Box>
      </Box>

      {/* Top Text Section */}
      <Box sx={{ padding: "30px 150px" }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={12}>
            <Typography
              sx={{
                width: "1076px",
                ...typography.h1,
                fontWeight: 600,
                fontSize: "40px",
                color: "#1A2438",
              }}
            >
              {content.RS1003}
              <EditIconButton id="RS1003" />
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography
              sx={{
                ...theme.typography.bodyBase,
                fontFamily: "Fira Sans",
                fontWeight: 400,
                color: "#99A0AE",
                width: "1009px",
              }}
            >
              {content.RS1004}
              <EditIconButton id="RS1004" />
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Service Cards Section */}
      <Box sx={{ padding: "0 10px 10px" }}>
        {cards.map((card, index) => (
          <ServiceCard
            key={index}
            {...card}
            onAdd={() => handleAddCard(index)}
            onDelete={() => handleDeleteCard(card)}
          />
        ))}
      </Box>

      {/* //ROI Calculator */}
      <Box sx={{ p: 5 }}>
        <Box sx={{ mt: 8 }}>
          {/* Section Title */}
          <Typography
            gutterBottom
            sx={{
              ...theme.typography.displayL,
              fontWeight: 700,
              fontSize: "56px",
              color: "#1C2D4B",
              ml: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            {content.RS1050}
            <EditIconButton id="RS1050" />
          </Typography>

          {/* Section Description */}
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              color: "#99A0AE",
              ml: 2,
              ...theme.typography.h4,
              display: "flex",
              alignItems: "center",
            }}
          >
            {content.RS1051}
            <EditIconButton id="RS1051" />
          </Typography>

          {/* View All Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mr: 2,
              mb: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                ...theme.typography.h3,
                color: "#2F6FBA",
                textDecoration: "underline",
              }}
            >
              {content.RS1052}
              <EditIconButton id="RS1052" />
              <ArrowRightAltIcon sx={{ ml: 1, fontSize: "2.5rem" }} />
            </Typography>
          </Box>

          {/* ROI Cards */}
          <Grid container spacing={4}>
            {roiData.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: 3,
                    height: "400px",
                  }}
                >
                  <Box
                    sx={{ position: "absolute", top: 8, right: 8, zIndex: 2 }}
                  >
                    <EditIconButton id={item.ids.image} type="I" />
                  </Box>

                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    sx={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      left: 16,
                      right: 16,
                      backgroundColor: "white",
                      borderRadius: 2,
                      boxShadow: 1,
                      px: 2,
                      py: 1.5,
                      display: "flex",
                      flexDirection: "column",
                      gap: 0.5,
                      transition: "0.3s ease-in-out",
                      "&:hover": {
                        bgcolor: "#0b2d55",
                        color: "white",
                        "& .MuiTypography-root": { color: "white" },
                        "& .MuiIconButton-root": {
                          backgroundColor: "#4487ebff",
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
                        sx={{
                          ...theme.typography.h4,
                          fontWeight: 700,
                          fontSize: "24px",
                          color: "#0B121E",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {item.title}
                        <EditIconButton id={item.ids.title} />
                      </Typography>
                      <IconButton
                        size="small"
                        sx={{
                          backgroundColor: "#f0f0f0",
                          width: "40px",
                          height: "40px",
                        }}
                      >
                        <ArrowForwardIosIcon fontSize="small" />
                      </IconButton>
                    </Box>

                    <Typography
                      sx={{
                        ...theme.typography.bodyBase,
                        color: "#99A0AE",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {item.description}
                      <EditIconButton id={item.ids.desc} />
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Resale Service */}
      <Box sx={{ px: "5%", pb: 10 }}>
        {/* Heading */}
        <Box sx={{ mb: 4 }}>
          <Button
            disableElevation
            disableRipple
            sx={{
              ...typography.bodySmall,
              mb: 2,
              textTransform: "none",
              fontWeight: 400,
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
              fontSize: { xs: "12px", md: "14px" },
            }}
          >
            {content.RS1059} <EditIconButton id="RS1059" />
          </Button>

          <Typography
            sx={{ ...typography.displayL, fontWeight: 700, color: "#1A2438" }}
          >
            {content.RS1060} <EditIconButton id="RS1060" />
          </Typography>

          <Typography sx={{ ...typography.h4, color: "#99A0AE" }}>
            {content.RS1061} <EditIconButton id="RS1061" />
          </Typography>
        </Box>

        {/* Product Cards */}
        <Grid container spacing={4}>
          {[
            {
              img: content.RS1062,
              title: content.RS1063,
              subtitle: content.RS1064,
              price: content.RS1065,
              lift: content.RS1066,
              power: content.RS1067,
              details: content.RS1068,
              ids: [
                "RS1062",
                "RS1063",
                "RS1064",
                "RS1065",
                "RS1066",
                "RS1067",
                "RS1068",
              ],
            },
            {
              img: content.RS1069,
              title: content.RS1070,
              subtitle: content.RS1071,
              price: content.RS1072,
              lift: content.RS1073,
              power: content.RS1074,
              details: content.RS1075,
              ids: [
                "RS1069",
                "RS1070",
                "RS1071",
                "RS1072",
                "RS1073",
                "RS1074",
                "RS1075",
              ],
            },
            {
              img: content.RS1076,
              title: content.RS1077,
              subtitle: content.RS1078,
              price: content.RS1079,
              lift: content.RS1080,
              power: content.RS1081,
              details: content.RS1082,
              ids: [
                "RS1076",
                "RS1077",
                "RS1078",
                "RS1079",
                "RS1080",
                "RS1081",
                "RS1082",
              ],
            },
          ].map((p, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: 2,
                  position: "relative",
                  p: 2, // outer padding around card
                  bgcolor: "#fff",
                }}
              >
                {/* Image Section */}
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 2,
                    overflow: "hidden",
                    mb: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={`https://skillglow.bexatm.com${p.img}`}
                    alt={p.title}
                    sx={{
                      width: "100%",
                      height: 220,
                      objectFit: "cover",
                      borderRadius: 2,
                      display: "block",
                    }}
                  />

                  {/* 🔹 Top-left Chips */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 8,
                      left: 8,
                      display: "flex",
                      gap: 1,
                      flexWrap: "wrap",
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

                  {/* 🔹 Edit Icon - bottom right corner of image */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 8,
                      right: 8,
                      borderRadius: "50%",
                    }}
                  >
                    <EditIconButton id={p.ids[0]} type="I" />
                  </Box>
                </Box>

                {/* Card Content */}
                <CardContent sx={{ p: 0 }}>
                  {/* Title & Price */}
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <Box>
                      <Typography
                        sx={{
                          ...typography.h4,
                          height: "62px",
                          fontWeight: 400,
                          color: "#0B121E",
                        }}
                      >
                        {p.title} <EditIconButton id={p.ids[1]} />
                      </Typography>
                      <Typography
                        sx={{
                          ...typography.h6,
                          fontWeight: 600,
                          color: "#00000099",
                        }}
                      >
                        {p.subtitle} <EditIconButton id={p.ids[2]} />
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        ...typography.h5,
                        fontWeight: 700,
                        color: "#1A7B3F",
                      }}
                    >
                      {p.price} <EditIconButton id={p.ids[3]} />
                    </Typography>
                  </Box>

                  {/* Lift Capacity & Power */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 2,
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          ...typography.bodyBase,
                          fontFamily: "Fira Sans",
                          fontWeight: 400,
                          color: "#677489",
                        }}
                      >
                        {p.lift} <EditIconButton id={p.ids[4]} />
                      </Typography>
                      <Typography
                        sx={{
                          ...typography.h5,
                          fontWeight: 500,
                          color: "#0E1626",
                        }}
                      >
                        Lift Capacity
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          ...typography.bodyBase,
                          fontFamily: "Fira Sans",
                          fontWeight: 400,
                          color: "#677489",
                        }}
                      >
                        {p.power} <EditIconButton id={p.ids[5]} />
                      </Typography>
                      <Typography
                        sx={{
                          ...typography.h5,
                          fontWeight: 500,
                          color: "#0E1626",
                        }}
                      >
                        Power Supply
                      </Typography>
                    </Box>
                  </Box>

                  {/* Details */}
                  <Box sx={{ mt: 2 }}>
                    <Typography
                      sx={{
                        ...typography.bodyBase,
                        fontFamily: "Fira Sans",
                        fontWeight: 400,
                        color: "#677489",
                      }}
                    >
                      View Details <EditIconButton id={p.ids[6]} />
                    </Typography>
                    <Typography
                      sx={{
                        ...typography.h5,
                        fontWeight: 500,
                        color: "#677489",
                      }}
                    >
                      {p.details}
                    </Typography>
                  </Box>

                  {/* Button */}
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 3,
                      backgroundColor: "#0b2d55",
                      color: "white",
                      textTransform: "none",
                      fontWeight: 600,
                      borderRadius: 2,
                      py: 1,
                      "&:hover": { backgroundColor: "#103766" },
                    }}
                  >
                    Check Availability
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* View All Link */}
        <Box
          sx={{
            mt: 6,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 1, // small space between text and icon
          }}
        >
          {/* Clickable Text */}
          <Typography
            sx={{
              ...typography.h3,
              color: "#2F6FBA",
              fontWeight: 600,
              fontSize: "22px",
              textDecoration: "underline",
              cursor: "pointer",
              "&:hover": {
                color: "#174a99",
              },
            }}
            onClick={() => navigate("/home/SellMagnet")}
          >
            {content.RS1083}
          </Typography>

          {/* Edit icon separate click */}
          <EditIconButton id="RS1083" />
        </Box>
      </Box>

      {/* FAQs Section */}
      <Box sx={{ px: 2, py: 2 }}>
        {/* Section Header */}
        <Button
          disableElevation
          disableRipple
          sx={{
            color: "#2F6FBA",
            backgroundColor: "#EAF3FC",
            borderRadius: "20px",
            height: "33px",
            ml: 8,
            boxShadow: "none",
            px: 2,
            display: "flex",
            alignItems: "center",
            "&:hover": {
              backgroundColor: "rgba(36,121,233,0.15)",
              boxShadow: "none",
            },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Typography
              sx={{
                ...typography.bodySmall,
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "150%",
                letterSpacing: "0.14%",
                display: "flex",
                alignItems: "center",
              }}
            >
              {content.RS1084}
            </Typography>
            <EditIconButton id="RS1084" />
          </Box>
        </Button>

        <Typography
          sx={{
            ml: 8,
            ...typography.displayL,
            color: "#1C2D4B",
            fontWeight: "bold",
          }}
          variant="h3"
          gutterBottom
        >
          {content.RS1085} <EditIconButton id="RS1085" />
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: "#1C2D4B",
            ...typography.h4,
            ml: 8,
            mb: 3,
          }}
        >
          {content.RS1086} <EditIconButton id="RS1086" />
        </Typography>

        {/* Accordion Section */}
        <Box sx={{ px: 8, py: 3 }}>
          {[
            { q: "RS1087", a: "RS1088" },
            { q: "RS1089", a: "RS1090" },
            { q: "RS1091", a: "RS1092" },
            { q: "RS1093", a: "RS1094" },
            { q: "RS1095", a: "RS1096" },
          ].map((faq, index) => (
            <Accordion
              key={index}
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
                <Typography sx={{ ...typography.h4, color: "#0E1109" }}>
                  {content[faq.q]} <EditIconButton id={faq.q} />
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ ...typography.bodyBase, color: "#0E1109" }}>
                  {content[faq.a]} <EditIconButton id={faq.a} />
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
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
          {content.RS1097}
          <EditIconButton id="RS1097" />
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
          {content.RS1098}
          <EditIconButton id="RS1098" />
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
          {content.RS1099}
          <EditIconButton id="RS1099" />
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
                  <EditIconButton id="RS1104" type="I" />
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
                  <EditIconButton id="RS1101" />
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
                  {blogData[0].author} <EditIconButton id="RS1102" /> •{" "}
                  {blogData[0].date} <EditIconButton id="RS1103" />
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
                const base = 1106 + idx * 4; // auto increment RS keys per card
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
                        <Box sx={{ position: "absolute", bottom: 6, right: 6 }}>
                          <EditIconButton id={`RS${base + 3}`} type="I" />
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
                          <EditIconButton id={`RS${base}`} />
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
                          {item.author} <EditIconButton id={`RS${base + 1}`} />{" "}
                          • {item.date} <EditIconButton id={`RS${base + 2}`} />
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

      {/* Footer Section */}
      <Box>
        <Footer />
      </Box>
    </>
  );
};

const topImageStyle = {
  width: "100%",
  height: "329px",
  overflow: "hidden",
  position: "relative",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const overlayBoxStyle = {
  position: "absolute",
  bottom: "5px",
  left: "50px",
  backgroundColor: "#F1F2F4",
  width: "283px",
  height: "66px",
  padding: "14px 60px;",
  textAlign: "center",
};

const faultsList = [
  "Loose junctions",
  "Capacity drop",
  "Uneven flux",
  "Uneven flux",
  "Loose junctions",
  "Capacity drop",
];

export default RepairServices;
