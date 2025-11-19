import { React, useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Link,
  Card,
  CardMedia,
  CardContent,
  Accordion,
  Avatar,
  AccordionSummary,
  AccordionDetails,
  Divider,
  IconButton,
  Grid,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HandshakeIcon from "@mui/icons-material/Handshake";
import handshake1 from "../../../assets/handshake3.jpg";
import Rentinstead from "../../../assets/Rentinstaed.jpg";

// import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import Electromagnetrepair from "../../../assets/EletromagnetRepair.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Approach1 from "../../../assets/Approach1.png";
import Approach2 from "../../../assets/Approach2.png";
import Approach3 from "../../../assets/Approach3.png";
import Approach4 from "../../../assets/Approach4.png";
import Approach5 from "../../../assets/Approach5.jpg";
import Roi1 from "../../../assets/Roi1.png";
import Roi2 from "../../../assets/Roi2.png";

import { typography } from "app/utils/constant";
import Footer from "app/components/Card/Footer";
import SellRentServicesCard from "app/components/Card/SellRentServicesCard";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import EditIcon from "@mui/icons-material/Edit";

const SellMagnet = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const navigate = useNavigate();
  const [BrowseDialogopen, setBrowseDialogOpen] = useState(false);

  const handleClickOpen = () => {
    setBrowseDialogOpen(true);
  };

  const handledialogClose = () => {
    setBrowseDialogOpen(false);
  };

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

  const items = [
    {
      img: Approach1,
      title: "Diagnose",
      subtitle: "(intake + tests)",
    },
    {
      img: Approach2,
      title: "Quote & plan",
    },
    {
      img: Approach3,
      title: "Execute",
    },
    {
      img: Approach4,
      title: "Re-install & validate",
    },
  ];

  const images = [
    Roi1, // Default large image
    Roi2,
    Roi1,
    Roi2,
    Roi1,
    Roi2,
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const [expanded, setExpanded] = useState(null);

  const handleChange = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  //  Load content
  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_CMS_URL}?contentId=C019`;
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
    const targetId = localStorage.getItem("scrollToSMFaq");
    if (!targetId) return;

    const timer = setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.style.outline = "3px solid #1C2D4B"; // highlight
        setTimeout(() => (el.style.outline = ""), 1800);
      }
      localStorage.removeItem("scrollToSMFaq");
    }, 700);

    return () => clearTimeout(timer);
  }, [content]);

  //  Edit function
  const handleEdit = (contentTextID, type = "T") => {
    navigate(
      `/CmsEditor?contentId=C019&contentTextID=${contentTextID}&contentType=${type}`
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

  //Sell or exchange
  const servicesnew = [
    {
      id: 1,
      imgId: "SM1009",
      titleId: "SM1010",
      descId: "SM1011",
      btnId: "SM1012",
    },
    {
      id: 2,
      imgId: "SM1013",
      titleId: "SM1014",
      descId: "SM1015",
      btnId: "SM1016",
    },
  ];

  //ROI Calculator

  const roiData = [
    {
      image: { id: "SM1038", value: content.SM1038 },
      name: { id: "SM1039", value: content.SM1039 },
      desc: { id: "SM1040", value: content.SM1040 },
    },
    {
      image: { id: "SM1041", value: content.SM1041 },
      name: { id: "SM1042", value: content.SM1042 },
      desc: { id: "SM1043", value: content.SM1043 },
    },
  ];

  //Blogs

  const blogData = [
    {
      title: content.SM1060,
      author: content.SM1061,
      date: content.SM1062,
      image: `https://cmsreflux.bexatm.com${content.SM1063}`,
    },
    {
      title: content.SM1064,
      author: content.SM1065,
      date: content.SM1066,
      image: `https://cmsreflux.bexatm.com${content.SM1067}`,
    },
    {
      title: content.SM1068,
      author: content.SM1069,
      date: content.SM1070,
      image: `https://cmsreflux.bexatm.com${content.SM1071}`,
    },
    {
      title: content.SM1072,
      author: content.SM1073,
      date: content.SM1074,
      image: `https://cmsreflux.bexatm.com${content.SM1075}`,
    },
  ];

  const smFaqData = (() => {
    if (!content) return [];

    const list = [];

    // 1️⃣ Fixed FAQ IDs (safe block)
    for (let i = 1047; i <= 1056; i += 2) {
      const qId = `SM${i}`;
      const aId = `SM${i + 1}`;

      if (content[qId] && content[aId]) {
        list.push({
          qId,
          aId,
          question: content[qId],
          answer: content[aId],
        });
      }
    }

    // 2️⃣ Allow only admin-added FAQs AFTER blogs (safe range)
    const allSM = Object.keys(content)
      .filter((k) => /^SM\d+$/.test(k))
      .map((k) => parseInt(k.replace("SM", ""), 10))
      .sort((a, b) => a - b);

    // 2️⃣ Allow admin-added FAQs AFTER the last fixed FAQ (1056)
    for (const id of allSM) {
      if (id <= 1056) continue; // old FAQs end at SM1056
      if (id >= 1057 && id < 1070) continue; // 🚫 skip blog section

      if (id % 2 === 0) continue; // odd = question

      const qId = `SM${id}`;
      const aId = `SM${id + 1}`;

      const q = content[qId];
      const a = content[aId];

      if (!q || !a) continue;

      if (!q.includes("?")) continue; // must look like question

      list.push({
        qId,
        aId,
        question: q,
        answer: a,
      });
    }

    return list;
  })();

  const handleAddSMFAQ = async () => {
    const allIds = Object.keys(content)
      .filter((k) => /^SM\d+$/.test(k))
      .map((k) => parseInt(k.replace("SM", ""), 10));

    let nextQ = Math.max(...allIds) + 1;

    if (nextQ % 2 === 0) nextQ++; // ensure Q is odd

    const nextA = nextQ + 1;

    const newContent = {
      [`SM${nextQ}`]: "New FAQ Question?",
      [`SM${nextA}`]: "New FAQ Answer.",
    };

    const res = await fetch(
      "https://cmsreflux.bexatm.com/API/data/UpdateContentV1.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contentId: "C019",
          newContent,
        }),
      }
    );

    const result = await res.json();

    if (result.success) {
      localStorage.setItem("scrollToSMFaq", `SM${nextQ}`);
      setTimeout(() => window.location.reload(), 600);
    } else {
      alert("Failed to add FAQ");
    }
  };

  const handleDeleteSMFAQ = async (qId, aId) => {
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
            contentId: "C019",
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
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        bgcolor: "white",
        // textAlign: "center",
        p: 4,
      }}
    >
      <Box
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          // alignItems: "left"
        }}
      >
        {/* Heading */}
        <Typography
          // variant="h4"
          sx={{
            ...typography.displayXL,
            fontWeight: 700,
            fontSize: "64px",
            lineHeight: 1.1,
            letterSpacing: "-0.31px",
            textAlign: "left",
            display: "flex",
            alignItems: "left",
            justifyContent: "left",
            // ml: 1
          }}
        >
          {content.SM1001}
        </Typography>
        <EditIconButton id="SM1001" />
        {/* Subtext line */}
        <Typography
          sx={{
            mt: 2,
            fontFamily: "Space Grotesk, Regular",
            fontSize: "24px",
            fontWeight: 400,
            lineHeight: "130%",
            //   color: "#111827",
            textAlign: "left",
            color: "gray",
          }}
        >
          {content.SM1002}
          <EditIconButton id="SM1002" />
        </Typography>
        {/* Lighter subtext */}
        <Typography
          sx={{
            mt: 1,
            ...typography.h3medium,
            fontWeight: 500,
            color: "#999",
          }}
        >
          {content.SM1003}
          <EditIconButton id="SM1003" />
        </Typography>
        {/* Links row */}
        <Box sx={{ mt: 2, display: "flex", gap: 4, flexWrap: "wrap" }}>
          <Link
            href="#"
            sx={{
              fontFamily: "Fira Sans, SemiBold",
              fontWeight: 600,
              fontSize: "18px",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            {content.SM1004}
            <EditIconButton id="SM1004" />
          </Link>
          <Link
            href="#"
            sx={{
              fontFamily: "Fira Sans, SemiBold",
              fontWeight: 600,
              fontSize: "18px",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            {content.SM1005}
            <EditIconButton id="SM1005" />
          </Link>
          <Link
            href="#"
            sx={{
              fontFamily: "Fira Sans, SemiBold",
              fontWeight: 600,
              fontSize: "18px",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            {content.SM1006}
            <EditIconButton id="SM1006" />
          </Link>
        </Box>
        {/* Optional: Section for “Sell or exchange your used magnet” */}
        <Typography
          sx={{
            mt: 8,
            ...typography.h3RBold,
            fontWeight: 600,
          }}
        >
          {content.SM1007}
          <EditIconButton id="SM1007" />
        </Typography>
        <Typography
          sx={{
            mt: 1,
            ...typography.bodyBasemedium,
            color: "#555",
          }}
        >
          {content.SM1008}
          <EditIconButton id="SM1008" />
        </Typography>
      </Box>
      {/* Sell or exchange your used magnet images section */}
      <Box sx={{ backgroundColor: "#f9fafb", py: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
          }}
        >
          {servicesnew.map((service) => (
            <Card
              key={service.id}
              sx={{
                flex: {
                  xs: "1 1 100%", // full width on mobile
                  sm: "1 1 calc(50% - 24px)", // 2 cards per row on tablet+
                },
                minWidth: { xs: "100%", sm: "300px", md: "620px" },
                height: { xs: "auto", md: "252px" },
                borderRadius: 2,
                padding: 3,
                border: "1px solid #e5e7eb",
                boxShadow: "none",
                backgroundColor: "#fff",
                transition: "all 0.3s",
                "&:hover": {
                  backgroundColor: "#0b2d55",
                  color: "#eee",
                  height: { xs: "auto", md: "300px" },
                },
              }}
            >
              {/* Image */}
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, pl: 2 }}
              >
                <Box
                  component="img"
                  src={`https://cmsreflux.bexatm.com${
                    content?.[service.imgId] || ""
                  }`}
                  alt={content?.[service.titleId] || ""}
                  sx={{
                    width: "45px",
                    height: "45px",
                    border: "1px solid gray",
                    padding: "5px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    backgroundColor: "#f3f4f6",
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/ATM/images/placeholder.jpg";
                  }}
                />
                <EditIconButton id={service.imgId} type="I" />
              </Box>

              {/* Text */}
              <CardContent sx={{ p: 2, textAlign: "left" }}>
                <Typography
                  sx={{
                    ...typography.h3,
                    fontWeight: 600,
                    fontSize: { xs: "20px", sm: "24px", md: "28px" },
                    color: "inherit",
                  }}
                >
                  {content?.[service.titleId] || ""}
                  <EditIconButton id={service.titleId} type="T" />
                </Typography>

                <Typography
                  sx={{
                    ...typography.bodyBase,
                    fontWeight: 400,
                    fontSize: { xs: "16px", sm: "17px", md: "18px" },
                    color: "inherit",
                    pt: 2,
                  }}
                >
                  {content?.[service.descId] || ""}
                  <EditIconButton id={service.descId} type="T" />
                </Typography>
              </CardContent>

              {/* Button */}
              <Box sx={{ p: 2, pt: 0 }}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    borderRadius: 2,
                    textTransform: "none",
                    bgcolor: "#b45309",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    opacity: 0,
                    transform: "translateY(10px)",
                    textDecoration: "underline",
                    ".MuiCard-root:hover &": {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  }}
                >
                  {content?.[service.btnId] || ""}
                  <EditIconButton id={service.btnId} type="T" />
                  <ArrowForwardIcon
                    sx={{
                      fontSize: 20,
                      transition: "all 0.3s ease",
                      opacity: 0,
                      transform: "translateX(0)",
                    }}
                    className="arrow-icon"
                  />
                </Button>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
      {/* Left - Features with vertical timeline */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid #ddd",
          borderRadius: 3,
          mt: 10,
          bgcolor: "white",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Left + Steps Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            px: { xs: 2, md: 6 },
            py: 6,
            flex: 1,
          }}
        >
          {/* Left Section */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontWeight: 600,
                ...typography.h3R,
                mt: 8,
              }}
            >
              {content.SM1017}
              <EditIconButton id="SM1017" type="T" />
            </Typography>

            <Box
              sx={{
                width: "280px",
                height: "2px",
                backgroundColor: "#0f766e",
              }}
            />

            <Typography
              sx={{
                ...typography.h3medium,
                color: "#4B5563",
                mt: 2,
              }}
            >
              {content.SM1018}
              <EditIconButton id="SM1018" type="T" />
            </Typography>
          </Box>

          {/* Steps Section */}
          <Box sx={{ flex: 2, display: "flex", flexWrap: "wrap" }}>
            {[
              { num: "SM1020", title: "SM1021", desc: "SM1022" },
              { num: "SM1023", title: "SM1024", desc: "SM1025" },
              { num: "SM1026", title: "SM1027", desc: "SM1028" },
              { num: "SM1029", title: "SM1030", desc: "SM1031" },
              { num: "SM1032", title: "SM1033", desc: "SM1034" },
            ].map((step) => (
              <Box key={step.num} sx={{ flex: "1 1 50%", mb: 3 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    ...typography.h3R,
                    mb: 0.5,
                  }}
                >
                  {content[step.num]}. {content[step.title]}
                  <EditIconButton id={step.title} type="T" />
                </Typography>
                <Typography
                  sx={{
                    ...typography.h3medium,
                    color: "#4B5563",
                  }}
                >
                  {content[step.desc]}
                  <EditIconButton id={step.desc} type="T" />
                </Typography>
              </Box>
            ))}

            {/* CTA Link */}
            <Box sx={{ flex: "1 1 50%", mt: 1 }}>
              <Link
                href="#"
                underline="hover"
                sx={{
                  fontWeight: 600,
                  ...typography.bodyStrongB,
                  color: "#0B5ED7",
                  textDecoration: "underline",
                }}
              >
                {content.SM1019}
                <EditIconButton id="SM1019" type="T" />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* ROI Calculator */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 1280,
          mx: "auto",
          py: { xs: 3, sm: 5 }, // less padding on mobile
        }}
      >
        {/* Title & Description */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: 1280,
            px: { xs: 2, sm: 8 }, // responsive padding
            gap: { xs: 2, sm: 4 },
            textAlign: "left",
            boxSizing: "border-box",
          }}
        >
          <Typography
            sx={{
              ...typography.displayL,
              color: "#1C2D4B",
              fontSize: { xs: "2rem", sm: typography.displayL.fontSize },
            }}
            gutterBottom
          >
            {content.SM1035}
            <EditIconButton id="SM1035" />
          </Typography>
          <Typography
            sx={{
              ...typography.h4,
              mb: { xs: 2, sm: 4 },
              color: "#99A0AE",
              fontSize: { xs: "0.875rem", sm: typography.h4.fontSize },
            }}
          >
            {content.SM1036}
            <EditIconButton id="SM1036" />
          </Typography>
        </Box>

        {/* View All Link */}
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          sx={{ mb: { xs: 2, sm: 3 } }}
        >
          <Typography
            component={Link}
            to="/repair-replace/roi-cal"
            sx={{
              ...typography.h3,
              color: "#2F6FBA",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              fontSize: { xs: "0.875rem", sm: typography.h3.fontSize },
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {content.SM1037}

            <ArrowRightAltIcon
              sx={{ fontSize: { xs: "1.5rem", sm: "2rem" }, ml: 1 }}
            />
          </Typography>
          <EditIconButton id="SM1037" />
        </Box>

        {/* Cards */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 2, sm: 3 },
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {roiData.map((item, index) => (
            <Card
              key={index}
              sx={{
                position: "relative",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 3,
                width: { xs: "100%", sm: 588 },
                height: { xs: 300, sm: 400 },
                flex: "0 1 auto",
              }}
            >
              {/* Background Image */}
              <Box sx={{ position: "relative", height: "100%" }}>
                <CardMedia
                  component="img"
                  image={`https://cmsreflux.bexatm.com${item.image.value}`}
                  alt={item.name.value}
                  sx={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* Edit Icon on Image */}
                {item.image.value && (
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
              </Box>

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
                  <Typography sx={{ ...typography.h4, color: "#0B121E" }}>
                    {item.name.value}
                    <EditIconButton id={item.name.id} />
                  </Typography>
                  <IconButton
                    size="small"
                    sx={{
                      backgroundColor: "#f0f0f0",
                      width: 36,
                      height: 36,
                    }}
                  >
                    <ArrowForwardIosIcon fontSize="small" />
                  </IconButton>
                </Box>

                <Typography sx={{ ...typography.bodyBase, color: "#99A0AE" }}>
                  {item.desc.value}
                  <EditIconButton id={item.desc.id} />
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
      {/* FAQs Section */}
      <Box sx={{ mt: 5 }}>
        {/* FAQs Button */}
        <Button
          disableElevation
          disableRipple
          sx={{
            ...typography.bodySmall,
            marginBottom: 2,
            ml: 8,
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
          }}
        >
          {content.SM1044}
          <EditIconButton id="SM1044" type="T" />
        </Button>

        {/* FAQs Title */}
        <Typography
          sx={{
            ...typography.h3RB,
            fontWeight: 700,
            ml: 8,
          }}
        >
          {content.SM1045}
          <EditIconButton id="SM1045" type="T" />
        </Typography>

        {/* FAQs Subtitle / Description */}
        <Typography
          sx={{
            ...typography.h3B1,
            fontWeight: 400,
            mb: 4,
            color: "text.secondary",
            ml: 8,
          }}
        >
          {content.SM1046}
          <EditIconButton id="SM1046" type="T" />
        </Typography>

        {/* FAQ Accordion Section */}
        <Box sx={{ px: 8, py: 6 }}>
          {smFaqData.map((item, index) => (
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
                <Typography sx={{ ...typography.h3B1, fontWeight: 400 }}>
                  {item.question}
                  <EditIconButton id={item.qId} type="T" />
                  {isAdmin && (
                    <IconButton
                      size="small"
                      onClick={() => handleDeleteSMFAQ(item.qId, item.aId)}
                      sx={{ ml: 1, color: "#B71C1C" }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  )}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ ...typography.bodyBase, fontWeight: 400 }}
                  color="text.secondary"
                >
                  {item.answer}
                  <EditIconButton id={item.aId} type="T" />
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
          {isAdmin && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Button
                variant="contained"
                onClick={handleAddSMFAQ}
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
          {content.SM1057}
          <EditIconButton id="SM1057" />
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
          {content.SM1058}
          <EditIconButton id="SM1058" />
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
          {content.SM1059}
          <EditIconButton id="SM1059" />
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
                  <EditIconButton id="SM1063" type="I" />
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
                  <EditIconButton id="SM1060" />
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
                  {blogData[0].author} <EditIconButton id="SM1061" /> •{" "}
                  {blogData[0].date} <EditIconButton id="SM1062" />
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
                const base = 1064 + idx * 4;
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
                          <EditIconButton id={`SM${base + 3}`} type="I" />
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
                          <EditIconButton id={`SM${base}`} />
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
                          {item.author} <EditIconButton id={`SM${base + 1}`} />{" "}
                          • {item.date} <EditIconButton id={`SM${base + 2}`} />
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
      ;{/* Rent Services instaed */}
      <Box>
        <SellRentServicesCard services={services} />
      </Box>
      {/* Footer Section */}
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default SellMagnet;
