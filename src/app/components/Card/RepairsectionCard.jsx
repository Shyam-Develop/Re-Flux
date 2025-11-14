import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Divider,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { typography } from "app/utils/constant";

const RepairsectionCard = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // ✅ Fetch content JSON
  useEffect(() => {
    fetch("https://cmsreflux.bexatm.com/API/ContentManageSysV1.php?contentId=Home")
      .then((res) => res.json())
      .then((data) => setContent(data))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  // ✅ Check admin role
  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  // ✅ Navigate to CMS editor
  const handleEdit = (contentTextID, type = "T") => {
    navigate(`/CmsEditor?contentId=Home&contentTextID=${contentTextID}&contentType=${type}`);
  };

  // ✅ Admin edit icon button
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
          "&:hover": { backgroundColor: "#e0e0e0", color: "#070808ff" },
          verticalAlign: "middle",
        }}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    ) : null;

  if (!content) return null;

  // ✅ Build services array from JSON (your example structure)
  const services = [
    {
      id: 1,
      title: content.HM1004,
      desc: content.HM1005,
      turnaround: content.HM1006,
      img: `https://cmsreflux.bexatm.com${content.HM1007}`,
      ids: { title: "HM1004", desc: "HM1005", turnaround: "HM1006", img: "HM1007" },
    },
    {
      id: 2,
      title: content.HM1008,
      desc: content.HM1009,
      turnaround: content.HM1010,
      img: `https://cmsreflux.bexatm.com${content.HM1011}`,
      ids: { title: "HM1008", desc: "HM1009", turnaround: "HM1010", img: "HM1011" },
    },
    {
      id: 3,
      title: content.HM1012,
      desc: content.HM1013,
      turnaround: content.HM1014,
      img: `https://cmsreflux.bexatm.com${content.HM1015}`,
      ids: { title: "HM1012", desc: "HM1013", turnaround: "HM1014", img: "HM1015" },
    },
    {
      id: 4,
      title: content.HM1016,
      desc: content.HM1017,
      turnaround: content.HM1018,
      img: `https://cmsreflux.bexatm.com${content.HM1019}`,
      ids: { title: "HM1016", desc: "HM1017", turnaround: "HM1018", img: "HM1019" },
    },
    {
      id: 5,
      title: content.HM1020,
      desc: content.HM1021,
      turnaround: content.HM1022,
      img: `https://cmsreflux.bexatm.com${content.HM1023}`,
      ids: { title: "HM1020", desc: "HM1021", turnaround: "HM1022", img: "HM1023" },
    },
  ];

  return (
    <Grid container spacing={3}>
      {services.map((service) => (
        <Grid item xs={12} sm={6} md={4} key={service.id}>
          <Box

            sx={{
              width: "100%",
              maxWidth: 412,
              borderRadius: 4,
              border: "1px solid",
              borderColor: "grey.400",
              p: 2,
              backgroundColor: "#f6f9fcff",
              transition: "all 0.3s ease",
              cursor: "pointer",
              mx: "auto",
              "&:hover": {
                transform: "scale(1.03)",
                backgroundColor: "#1C2D4B",
                color: "#fff",
                borderColor: "transparent",
                "& .MuiTypography-root": { color: "#fff" },
                "& .MuiIconButton-root": {
                  backgroundColor: "#6aa9ff",
                  color: "#fff",
                },
                "& .MuiDivider-root": { backgroundColor: "#fff" },
              },
            }}
          >
            {/* Image with Edit Icon */}
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src={service.img}
                alt={service.title}
                sx={{
                  width: "100%",
                  height: "auto",
                  maxHeight: 260,
                  borderRadius: "7px",
                  objectFit: "cover",
                }}
              />
              {isAdmin && (
                <Box sx={{ position: "absolute", top: 8, right: 8 }}>
                  <EditIconButton id={service.ids.img} type="I" />
                </Box>
              )}
            </Box>

            {/* Content */}
            <Box sx={{ mt: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ color: "#1B2F43", fontSize: "28px", fontWeight: 600 }}
                >
                  {service.title}
                  <EditIconButton id={service.ids.title} />
                </Typography>
                <IconButton
                  size="small"
                  sx={{
                    width: 40,
                    height: 40,
                    color: "rgb(82 86 94)",
                    backgroundColor: "#f1f3f4",
                    transition: "all 0.3s ease",
                  }}
                  onClick={() => navigate("/home/RepairServicesPage")}
                >
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              </Box>

              <Divider sx={{ mb: 2 }} />

              <Typography
                sx={{ fontWeight: 400, fontSize: "18px", color: "#666", mb: 1 }}
              >
                {service.desc}
                <EditIconButton id={service.ids.desc} />
              </Typography>

              <Typography
                variant="h5"
                sx={{ fontWeight: 500, color: "#0E1626", mb: 0.5 }}
              >
                Turnaround Time
              </Typography>

              <Typography
                sx={{ fontWeight: 400, fontSize: "18px", color: "#677489" }}
              >
                {Array.isArray(service.turnaround)
                  ? service.turnaround.join(" / ")
                  : service.turnaround}
                <EditIconButton id={service.ids.turnaround} />
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}

      {/* View All Services */}
      <Grid item xs={12} sm={3} md={4}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 5,
            mr: 10,
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "20px", md: "24px" },
              fontWeight: "bold",
              color: "#1a4dab",
              "&:hover": {
                transform: "scale(1.40)",
                textDecoration: "underline",
              },
            }}
            onClick={() => navigate("/home/RepairServices")}
          >
            {content.HM1024}
          </Typography>

          {/* ✅ Edit icon next to text */}
          <Box sx={{ paddingLeft: '45px'}} >
             <EditIconButton id="HM1024" />
          </Box>
        </Box>

      </Grid>
    </Grid>
  );
};

export default RepairsectionCard;
