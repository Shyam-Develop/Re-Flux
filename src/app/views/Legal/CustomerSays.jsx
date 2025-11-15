import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Divider,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { typography } from "app/utils/constant";
import Footer from "app/components/Card/Footer";

export default function CustomerSays() {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // 🔹 Load content
  useEffect(() => {
    const apiUrl =
      `${process.env.REACT_APP_CMS_URL}?contentId=C002`
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setContent(data))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  // 🔹 Check admin role
  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  // 🔹 Edit function
  const handleEdit = (contentTextID, type = "T") => {
    navigate(
      `/CmsEditor?contentId=C002&contentTextID=${contentTextID}&contentType=${type}`
    );
  };

  // 🔹 Edit icon button
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

  // 🔹 Testimonials array
  const testimonials = [
    {
      name: content.CON200101,
      role: content.CON200102,
      text: content.CON200103,
    },
    {
      name: content.CON200104,
      role: content.CON200105,
      text: content.CON200106,
    },
    {
      name: content.CON200107,
      role: content.CON200108,
      text: content.CON200109,
      image: content.CON200110,
    },
  ];

  return (
    <Box
      display="grid"
      gap="20px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      sx={{
        "& > div": {
          gridColumn: { xs: "span 4", md: undefined },
        },
      }}
    >
      <Box sx={{ gridColumn: "span 4" }}>
        <Box
          sx={{
            paddingTop: "20px",
            paddingRight: "80px",
            paddingBottom: "40px",
            paddingLeft: "80px",
            gap: "32px",
            position: "relative",
            boxSizing: "border-box",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            "@media (max-width: 900px)": {
              padding: "20px",
            },
          }}
        >
          {/* --- Heading Section --- */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "1440px",
              gap: 4,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              "@media (max-width: 900px)": {
                alignItems: "center",
                textAlign: "center",
              },
            }}
          >
            <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
              {/* Title */}
              <Typography
                align="center"
                sx={{
                  ...typography.displayL,
                  fontWeight: 700,
                  color: "#232323",
                  "@media (max-width: 900px)": { fontSize: "1.8rem" },
                }}
              >
                {content.CON200001}
                <EditIconButton id="CON200001" />
              </Typography>

              {/* Divider */}
              <Divider
                sx={{
                  borderBottomWidth: 2,
                  borderColor: "#178270",
                  width: "100%",
                  "@media (max-width: 900px)": {
                    width: "60%",
                    margin: "0 auto",
                  },
                }}
              />

              {/* Subtitle */}
              <Typography
                align="left"
                sx={{
                  ...typography.h4,
                  fontWeight: 400,
                  color: "#6B768A",
                  "@media (max-width: 900px)": {
                    fontSize: "1rem",
                    textAlign: "center",
                    padding: "0 10px",
                  },
                }}
              >
                {content.CON200002}
                <EditIconButton id="CON200002" />
              </Typography>
            </Box>
          </Box>

          {/* --- Testimonials Cards --- */}
          <Box
            sx={{
              width: "1350px",
              gap: "24px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              "@media (max-width: 900px)": {
                width: "100%",
                flexDirection: "column",
                alignItems: "center",
              },
            }}
          >
            {testimonials.map((item, index) => {
              // ✅ Correct content ID mapping
              const base = (101 + index * 3).toString().padStart(3, "0");
              const nameId = `CON200${base}`;
              const roleId = `CON200${(102 + index * 3).toString().padStart(3, "0")}`;
              const textId = `CON200${(103 + index * 3).toString().padStart(3, "0")}`;

              const imageId = `CON200110`; // only last one has image

              return (
                <Box
                  key={index}
                  sx={{
                    width: 650,
                    height: item.image ? 769 : 182,
                    p: 5,
                    gap: 2.5,
                    border: "1px solid #f1f1f1ff",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    bgcolor: "#F7F9FC",
                    mb: 3,
                    position: "relative",
                    "@media (max-width: 900px)": {
                      width: "100%",
                      maxWidth: "95%",
                      padding: "16px",
                      alignItems: "center",
                      textAlign: "center",
                      height: "auto",
                    },
                  }}
                >
                  {/* Name */}
                  <Typography sx={{ ...typography.h3B, fontWeight: 700, fontSize: "28px", color: "#232323" }}>
                    {item.name}
                    <EditIconButton id={nameId} />
                  </Typography>

                  {/* Role */}
                  <Typography sx={{ mb: 1, ...typography.h5, fontWeight: 500, fontSize: "16px", color: "#6B768A" }}>
                    {item.role}
                    <EditIconButton id={roleId} />
                  </Typography>

                  {/* Text */}
                  <Typography sx={{ ...typography.h6, fontWeight: 400, fontSize: "18px", color: "#5C5C5C" }}>
                    {item.text}
                    <EditIconButton id={textId} />
                  </Typography>

                  {/* Image (only 3rd) */}
                  {item.image && (
                    <Box sx={{ position: "relative", width: "100%" }}>

                      {/* Image */}
                      <Box
                        component="img"
                        src={`https://cmsreflux.bexatm.com${item.image}`}
                        alt={item.name}
                        sx={{
                          width: "100%",
                          height: 567,
                          borderRadius: 2,
                          objectFit: "cover",
                          mt: 2,
                          "@media (max-width: 900px)": { height: 250 },
                        }}
                      />

                      {/* Edit Icon - Top Right */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 16,
                          right: 16,
                          zIndex: 10,   // ensure visible above the image
                        }}
                      >
                        <EditIconButton id={imageId} type="I" />
                      </Box>

                    </Box>
                  )}

                </Box>
              );
            })}
          </Box>
        </Box>

        {/* --- Footer --- */}
        <Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
