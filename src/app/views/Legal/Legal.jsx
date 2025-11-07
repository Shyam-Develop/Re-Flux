import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Divider,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import Footer from "app/components/Card/Footer";
import { typography } from "app/utils/constant";

const Legal = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const apiUrl = "https://skillglow.bexatm.com/ATM/ContentManageSysV1.php?contentId=C001";
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setContent(data))
      .catch((err) => console.error("Error loading content from API:", err));
  }, []);

  const handleEdit = (contentTextID, type = "T") => {
    navigate(
      `/CmsEditor?contentId=C001&contentTextID=${contentTextID}&contentType=${type}`
    );
  };

  const [isAdmin, setIsAdmin] = useState(false);

useEffect(() => {
  const role = localStorage.getItem("role");
  if (role === "admin") {
    setIsAdmin(true);
  }
}, []);

const EditIconButton = ({ id, type = "T" }) => {
  if (!isAdmin) return null; // hide for non-admins

  return (
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
  );
};


  if (!content) return null;

  return (
    <Box
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
        padding: "10px",
      }}
    >
      <Box sx={{ gridColumn: "span 4", p: 2 }}>
        <Box
          sx={{
            gridColumn: "span 4",
            p: { xs: 2, md: 4 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            {/* Page Title */}
            <Typography sx={{ ...typography.displayL, fontWeight:700, fontSize:'56px', color: "#1A2438", mb: 2 }}>
              {content.CON100101}
              <EditIconButton id="CON100101" />
            </Typography>

            {/* Subtitle */}
            <Typography sx={{ ...typography.h4, mb: 4, color: "#1C2D4B" }}>
              {content.CON100102}
              <EditIconButton id="CON100102" />
            </Typography>

            {/* Company Info */}
            <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, mb: 5 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Typography sx={{ ...typography.h4, color: "#0E1109" }}>
                    {content.CON100103}
                    <EditIconButton id="CON100103" />
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography sx={{ ...typography.h5, color: "#677489" }}>
                    {content.CON100104}
                    <EditIconButton id="CON100104" />
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Typography sx={{ ...typography.h4, color: "#0E1109" }}>
                    {content.CON100105}
                    <EditIconButton id="CON100105" />
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography sx={{ ...typography.h5, color: "#677489" }}>
                    {content.CON100106}
                    <EditIconButton id="CON100106" />
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Typography sx={{ ...typography.h4, color: "#0E1109" }}>
                    {content.CON100107}
                    <EditIconButton id="CON100107" />
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography sx={{ ...typography.h5, color: "#677489" }}>
                    {content.CON100108}
                    <EditIconButton id="CON100108" />
                  </Typography>
                </Grid>
              </Grid>
            </Paper>

            {/* --- Section 1 --- */}
            <Box>
              <Typography sx={{ ...typography.h3, fontWeight:600, fontSize:'28px', color: "#0B121E", mb: 2 }}>
                {content.CON100109}
                <EditIconButton id="CON100109" />
              </Typography>

              <Box sx={{ lineHeight: 1.8 }}>
                <Typography sx={{ ...typography.h5, color: "#0B121E", mt: 3 }}>
                  {content.CON100110}
                  <EditIconButton id="CON100110" />
                </Typography>
                <Typography
                  sx={{ ...typography.bodySmall, color: "#111B2D", fontSize: "14px" }}
                >
                  {content.CON100111}
                  <EditIconButton id="CON100111" />
                </Typography>

                <Typography sx={{ ...typography.h5, color: "#0B121E", mt: 3 }}>
                  {content.CON100112}
                  <EditIconButton id="CON100112" />
                </Typography>
                <Typography
                  sx={{ ...typography.bodySmall, color: "#111B2D", fontSize: "14px" }}
                >
                  {content.CON100113}
                  <EditIconButton id="CON100113" />
                </Typography>

                <Typography sx={{ ...typography.h5, color: "#0B121E", mt: 3 }}>
                  {content.CON100114}
                  <EditIconButton id="CON100114" />
                </Typography>
                <Typography
                  sx={{ ...typography.bodySmall, color: "#111B2D", fontSize: "14px" }}
                >
                  {content.CON100115}
                  <EditIconButton id="CON100115" />
                </Typography>

                <Typography
                  sx={{ ...typography.bodySmall, color: "#111B2D", ml: 2 }}
                  component="div"
                >
                  <ul>
                    <li>
                      {content.CON100116}
                      <EditIconButton id="CON100116" />
                    </li>
                    <li>
                      {content.CON100117}
                      <EditIconButton id="CON100117" />
                    </li>
                    <li>
                      {content.CON100118}
                      <EditIconButton id="CON100118" />
                    </li>
                  </ul>
                  <p>
                    {content.CON100119}
                    <EditIconButton id="CON100119" />
                  </p>
                </Typography>

                <Typography sx={{ ...typography.h5, color: "#0B121E", mt: 3 }}>
                  {content.CON100120}
                  <EditIconButton id="CON100120" />
                </Typography>
                <Typography
                  sx={{ ...typography.bodySmall, color: "#111B2D", fontSize: "14px" }}
                >
                  {content.CON100121}
                  <EditIconButton id="CON100121" />
                </Typography>

                <Typography sx={{ ...typography.h5, color: "#0B121E", mt: 3 }}>
                  {content.CON100122}
                  <EditIconButton id="CON100122" />
                </Typography>
                <Typography
                  sx={{ ...typography.bodySmall, color: "#111B2D", fontSize: "14px" }}
                >
                  {content.CON100123}
                  <EditIconButton id="CON100123" />
                </Typography>

                <Typography sx={{ ...typography.h5, color: "#0B121E", mt: 3 }}>
                  {content.CON100124}
                  <EditIconButton id="CON100124" />
                </Typography>
                <Typography
                  sx={{ ...typography.bodySmall, color: "#111B2D", fontSize: "14px" }}
                >
                  {content.CON100125}
                  <EditIconButton id="CON100125" />
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ mt: 5 }} />

            {/* --- Section 2 --- */}
            <Box>
              <Typography
                sx={{
                  ...typography.h3,
                  color: "#0B121E",
                  mb: 2,
                  mt: 6,
                }}
              >
                {content.CON100126}
                <EditIconButton id="CON100126" />
              </Typography>

              <Box sx={{ lineHeight: 1.8 }}>
                <Typography sx={{ ...typography.h5, color: "#0B121E", mt: 3 }}>
                  {content.CON100127}
                  <EditIconButton id="CON100127" />
                </Typography>
                <Typography
                  sx={{
                    ...typography.bodySmall,
                    color: "#111B2D",
                    fontSize: "14px",
                  }}
                >
                  {content.CON100128}
                  <EditIconButton id="CON100128" />
                </Typography>
                 <Typography sx={{ ...typography.h5, color: "#0B121E", mt: 3 }}>
                  {content.CON100129}
                  <EditIconButton id="CON100129" />
                </Typography>
                <Typography
                  sx={{
                    ...typography.bodySmall,
                    color: "#111B2D",
                    fontSize: "14px",
                  }}
                >
                  {content.CON100130}
                  <EditIconButton id="CON100130" /><br />
                  {content.CON100142}
                   <EditIconButton id="CON100142" />
                </Typography>

                <Typography sx={{ ...typography.h5, color: "#0B121E", mt: 3 }}>
                  {content.CON100131}
                   <EditIconButton id="CON100131" />
                </Typography>
                <Typography
                  sx={{
                    ...typography.bodySmall,
                    color: "#111B2D",
                    fontSize: "14px",
                  }}
                  component="div"
                >
                  <ul>
                    <li>{content.CON100132} <EditIconButton id="CON100132" /></li>
                    <li>{content.CON100133} <EditIconButton id="CON100133" /></li>
                    <li>{content.CON100134} <EditIconButton id="CON100134" /></li>
                  </ul>
                  <p>{content.CON100135} <EditIconButton id="CON100135" /></p>
                </Typography>

                <Typography sx={{ ...typography.h5, color: "#0B121E", mt: 3 }}>
                  {content.CON100136}
                  <EditIconButton id="CON100136" />
                </Typography>
                <Typography
                  sx={{
                    ...typography.bodySmall,
                    color: "#111B2D",
                    fontSize: "14px",
                  }}
                >
                  {content.CON100137}
                  <EditIconButton id="CON100137" />
                </Typography>

                <Typography sx={{ ...typography.h5, color: "#0B121E", mt: 3 }}>
                  {content.CON100138}
                  <EditIconButton id="CON100138" />
                </Typography>
                <Typography
                  sx={{
                    ...typography.bodySmall,
                    color: "#111B2D",
                    fontSize: "14px",
                  }}
                >
                  {content.CON100139}
                  <EditIconButton id="CON100139" />
                </Typography>

                <Typography sx={{ ...typography.h5, color: "#0B121E", mt: 3 }}>
                  {content.CON100140}
                  <EditIconButton id="CON100140" />
                </Typography>
                <Typography
                  sx={{
                    ...typography.bodySmall,
                    color: "#111B2D",
                    fontSize: "14px",
                  }}
                >
                  {content.CON100141}
                  <EditIconButton id="CON100141" />
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Footer */}
        <Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Legal;
