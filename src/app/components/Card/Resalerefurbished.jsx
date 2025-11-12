import { React, useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Button,
  Chip,
} from "@mui/material";
import resalerefurbished from "../../../assets/Resalerefurbished.jpg";
import { typography } from "app/utils/constant";
import ResaleService from "../../../assets/Resalerefurbished.jpg";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export default function ResalerefurbishedCard() {
  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  // ✅ Fetch content from API
  useEffect(() => {
    fetch(
      "https://skillglow.bexatm.com/ATM/ContentManageSysV1.php?contentId=Resalerefurbished"
    )
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
      `/CmsEditor?contentId=Resalerefurbished&contentTextID=${contentTextID}&contentType=${type}`
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

  const refurbishedProducts = [
    {
      id: 1,
      title: content.CON190060,
      size: content.CON190061,
      certified: content.CON190062,
      imgSrc: `https://skillglow.bexatm.com${content.CON190063}`,
      liftCapacity: content.CON190064,
      powerSupply: content.CON190065,
      included: content.CON190066,
    },
    {
      id: 2,
      title: content.CON190067,
      size: content.CON190068,
      certified: content.CON190069,
      imgSrc: `https://skillglow.bexatm.com${content.CON190070}`,
      liftCapacity: content.CON190071,
      powerSupply: content.CON190072,
      included: content.CON190073,
    },
    {
      id: 3,
      title: content.CON190074,
      size: content.CON190075,
      certified: content.CON190076,
      imgSrc: `https://skillglow.bexatm.com${content.CON190077}`,
      liftCapacity: content.CON190078,
      powerSupply: content.CON190079,
      included: content.CON190080,
    },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: "5%" }, pb: 10 }}>
      {/* Heading Section */}
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
          {content.CON190081}
          {isAdmin && <EditIconButton id="CON190081" />}
        </Button>

        <Typography
          sx={{
            ...typography.displayL,
            color: "#1A2438",
            fontSize: { xs: "20px", md: "32px" },
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          {content.CON190082}
          {isAdmin && <EditIconButton id="CON190082" />}
        </Typography>

        <Typography
          sx={{
            ...typography.h4,
            color: "#99A0AE",
            fontSize: { xs: "14px", md: "18px" },
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          {content.CON190083}
          {isAdmin && <EditIconButton id="CON190083" />}
        </Typography>
      </Box>

      {/* Product Cards */}
      <Grid container spacing={4}>
        {refurbishedProducts.map((product, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Box
              sx={{
                borderRadius: 3,
                border: "1px solid #dbdbdb",
                p: 2,
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
              }}
            >
              {/* Title & Size */}
              <Typography
                sx={{
                  ...typography.h4,
                  fontWeight: 400,
                  color: "#0B121E",
                  mb: 0.5,
                  fontSize: { xs: "16px", md: "24px" },
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                {product.title}
                {isAdmin && <EditIconButton id={`CON1900${60 + idx * 7}`} />}
              </Typography>

              <Typography
                sx={{
                  ...typography.h5,
                  fontWeight: 500,
                  color: "#00000099",
                  mb: 1,
                  fontSize: { xs: "12px", md: "20px" },
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                {product.size}
                {isAdmin && <EditIconButton id={`CON1900${61 + idx * 7}`} />}
              </Typography>

              <Typography
                sx={{
                  ...typography.bodySmall,
                  fontWeight: 400,
                  color: "#00000099",
                  mb: 1,
                  fontSize: { xs: "12px", md: "14px" },
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                Certified: {product.certified}
                {isAdmin && <EditIconButton id={`CON1900${62 + idx * 7}`} />}
              </Typography>

              {/* Image */}
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 0,
                  overflow: "hidden",
                  mb: 2,
                }}
              >
                <Box
                  component="img"
                  src={product.imgSrc}
                  alt={product.title}
                  sx={{
                    width: "100%",
                    height: { xs: "200px", md: "240px" },
                    objectFit: "cover",
                  }}
                />

                {/* Edit Image Icon (Admin only) */}
                {isAdmin && (
                  <IconButton
                    size="small"
                    onClick={() => handleEdit(`CON1900${63 + idx * 7}`, "I")}
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      backgroundColor: "#f0f0f0",
                      color: "#1C2D4B",
                      border: "1px solid #ccc",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        backgroundColor: "#e0e0e0",
                        color: "#070808ff",
                        //borderColor: "#214870",
                      },
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                )}

                {/* Badges */}
                <Chip
                  label="🔧 Available for Rent"
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    bgcolor: "#1b5e20",
                    color: "white",
                    fontWeight: "400",
                    fontSize: { xs: "10px", md: "14px" },
                    borderRadius: "2px",
                  }}
                />
                <Chip
                  label="🛡️ Safety Tested"
                  size="small"
                  sx={{
                    position: "absolute",
                    bottom: "8px",
                    left: "8px",
                    fontWeight: "400",
                    fontSize: { xs: "10px", md: "14px" },
                    borderRadius: "2px",
                    bgcolor: "#1976d2",
                    color: "white",
                  }}
                />
              </Box>

              {/* Specs */}
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={6}>
                  <Typography
                    sx={{
                      ...typography.h6,
                      fontWeight: 600,
                      color: "#0E1626",
                      fontSize: { xs: "12px", md: "16px" },
                    }}
                  >
                    {content.CON190085}
                    <EditIconButton id="CON190085" />
                  </Typography>
                  <Typography
                    sx={{
                      ...typography.bodySmall,
                      fontFamily: "Fira Sans, sans-serif",
                      fontWeight: 400,
                      color: "#677489",
                      fontSize: { xs: "12px", md: "14px" },
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {product.liftCapacity}
                    {isAdmin && (
                      <EditIconButton id={`CON1900${64 + idx * 7}`} />
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    sx={{
                      ...typography.h6,
                      fontWeight: 600,
                      color: "#0E1626",
                      fontSize: { xs: "12px", md: "16px" },
                    }}
                  >
                    {content.CON190086}
                    <EditIconButton id="CON190086" />
                  </Typography>
                  <Typography
                    sx={{
                      ...typography.bodySmall,
                      fontFamily: "Fira Sans, sans-serif",
                      fontWeight: 400,
                      color: "#677489",
                      fontSize: { xs: "12px", md: "14px" },
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {product.powerSupply}
                    {isAdmin && (
                      <EditIconButton id={`CON1900${65 + idx * 7}`} />
                    )}
                  </Typography>
                </Grid>
              </Grid>

              {/* Included */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    ...typography.h6,
                    fontWeight: 600,
                    color: "#0E1626",
                    fontSize: { xs: "12px", md: "16px" },
                  }}
                >
                  {content.CON190087}
                  <EditIconButton id="CON190087" />
                </Typography>
                <Typography
                  sx={{
                    ...typography.bodySmall,
                    fontFamily: "Fira Sans, sans-serif",
                    fontWeight: 400,
                    color: "#677489",
                    fontSize: { xs: "12px", md: "14px" },
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  {product.included}
                  {isAdmin && <EditIconButton id={`CON1900${66 + idx * 7}`} />}
                </Typography>
              </Box>

              {/* Buy Button */}
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#1a73e8",
                  textTransform: "none",
                  fontSize: { xs: "12px", md: "14px" },
                  py: 1,
                  ...typography.bodyStrong,
                }}
              >
                {content.CON190084}
                {isAdmin && <EditIconButton id="CON190084" />}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
