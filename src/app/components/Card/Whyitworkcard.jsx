import { React, useState, useEffect } from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import HandshakeIcon from "@mui/icons-material/Handshake";
import handshake1 from "../../../assets/handshake3.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

export default function Whyitworkcard() {
  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  // ✅ Fetch content from API
  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}?contentId=viewcasestudy`)
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
      `/CmsEditor?contentId=viewcasestudy&contentTextID=${contentTextID}&contentType=${type}`
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

  const services = [];
  for (let i = 0; i < 20; i++) {
    const title = content[`CON240000_${i}_title`];
    if (!title) break;

    services.push({
      id: i,
      title,
      type: content[`CON240000_${i}_type`] || "",
      image: `https://cmsreflux.bexatm.com${content[`CON240000_${i}_image`]}`,
      titleId: `CON240000_${i}_title`,
      typeId: `CON240000_${i}_type`,
      imageId: `CON240000_${i}_image`,
    });
  }

  return (
    <Box
      sx={{
        p: { xs: 2, md: 6 },
        backgroundColor: "#f9fafb",
      }}
    >
      {/* Cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "row" }, // same as your original
          overflowX: { xs: "auto", md: "visible" }, // scroll only on mobile
          flexWrap: { xs: "nowrap", md: "wrap" }, // no wrap on mobile, wrap on desktop
          gap: 3,
          width: "100%",
          pb: 2,
        }}
      >
        {services.map((service) => (
          <Card
            key={service.id}
            sx={{
              flex: "0 0 auto",
              minWidth: 240,
              maxWidth: 278,
              height: "330px",
              borderRadius: 2,
              padding: 2,
              boxShadow: "none",
              border: "1px solid #e5e7eb",
              position: "relative", // <--- REQUIRED for icon overlay
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor: "#0b2d55",
                color: "#eee",
              },
            }}
          >
            {/* 🔥 SINGLE EDIT ICON FOR IMAGE (OUTSIDE CIRCLE) */}
            {isAdmin && (
              <Box
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  zIndex: 10,
                }}
              >
                <EditIconButton id={service.imageId} type="I" />
              </Box>
            )}
            {/* Icon in circle */}
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                backgroundColor: "#f3f4f6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={service.image}
                alt="service icon"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </Box>

            {/* Card Content */}
            <CardContent sx={{ p: 0, textAlign: "left" }}>
              <Typography
                sx={{
                  fontFamily: "Space Grotesk Regular",
                  fontWeight: 600,
                  fontSize: { xs: "20px", md: "28px" },
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {service.title}
                {isAdmin && <EditIconButton id={service.titleId} type="T" />}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Fira Sans Regular",
                  fontWeight: 400,
                  fontSize: { xs: "14px", md: "18px" },
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {service.type}
                {isAdmin && <EditIconButton id={service.typeId} type="T" />}
              </Typography>
            </CardContent>

            <Box sx={{ p: 2, pt: 0 }}>
              <Button
                fullWidth
                variant="contained"
                className="view-more-btn"
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

                  "&:hover .arrow-icon": {
                    opacity: 1,
                    transform: "translateX(4px)",
                  },
                }}
              >
                {content.CON2400001}
                {isAdmin && <EditIconButton id="CON2400001" type="T" />}
                <ArrowForwardIcon
                  className="arrow-icon"
                  sx={{
                    fontSize: 20,
                    transition: "all 0.3s ease",
                    opacity: 0,
                    transform: "translateX(0)",
                  }}
                />
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
