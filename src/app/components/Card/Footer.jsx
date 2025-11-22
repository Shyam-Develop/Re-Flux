import { React, useState, useEffect } from "react";
import { Box, Grid, Typography, Link, Button, IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { RefluxSvg, typography } from "app/utils/constant";
import Brand1 from "../../../assets/Brand1.png";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const styles = {
  footer: {
    backgroundColor: "#112B55",
    color: "#fff",
    borderTopLeftRadius: "60px",
    borderTopRightRadius: "60px",
    padding: { xs: "40px 20px", md: "65px 8% 50px" },
    mt: 10,
    width: "100%", // full width instead of 1400px
    height: "auto", // let content define height
  },
  button: {
    color: "#fff",
    borderColor: "#fff",
    borderRadius: "25px",
    textTransform: "none",
    px: 3,
    py: 0.3,
    fontSize: "0.75rem",
    mb: 3,
  },
  link: {
    color: "#fff",
    fontSize: "0.9rem",
    textDecoration: "none",
    "&:hover": { textDecoration: "underline" },
  },
};

export default function FooterAlt() {
  // 🔑 Scroll-to-top handler
  const handleScrollTop = () => {
    const container =
      document.querySelector("main") || document.documentElement;

    console.log("Scrolling container:", container);

    container.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  // ✅ Fetch content from API
  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}?contentId=Footer`)
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
      `/CmsEditor?contentId=Footer&contentTextID=${contentTextID}&contentType=${type}`
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

  return (
    <Box sx={{ paddingLeft: "5px", paddingRight: "5px" }}>
      <Box component="footer" sx={{ ...styles.footer }}>
        <Grid container spacing={6}>
          {/* 🟦 Left Section — Logo */}
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              sx={{ paddingLeft: "10%", marginTop: "30px" }}
            >
              <RefluxSvg />
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  {content.CON200001}
                  {isAdmin && <EditIconButton id="CON200001" />}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    fontWeight: "500",
                    fontSize: "15px",
                    letterSpacing: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  {content.CON200002}
                  {isAdmin && <EditIconButton id="CON200002" />}
                </Typography>
              </Box>
            </Box>

            <Box
              mt={5}
              display="flex"
              alignItems="center"
              gap={2}
              sx={{ paddingLeft: "14%" }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "28px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
                variant="subtitle2"
              >
                {content.CON200003}
                {isAdmin && <EditIconButton id="CON200003" />}
              </Typography>

              <Box
                component="img"
                src={`https://cmsreflux.bexatm.com${content.CON200004}`}
                alt="Brand"
                sx={{ width: "100px", height: "104.38px" }}
              />
              {isAdmin && (
                <IconButton
                  size="small"
                  onClick={() => handleEdit("CON200004", "I")}
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
              )}
            </Box>
          </Grid>

          {/* 🟨 Right Section — Contact + Links */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={6}>
              {/* Contact Section */}
              <Grid item xs={12} sm={6}>
                <Button
                  variant="outlined"
                  sx={{ ...styles.button, ...typography.h6 }}
                >
                  {content.CON200005}
                  {isAdmin && <EditIconButton id="CON200005" />}
                </Button>

                <Typography
                  variant="body2"
                  sx={{
                    ...typography.h5,
                    fontSize: "19px",
                    lineHeight: 1.7,
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  {content.CON200006}
                  {isAdmin && <EditIconButton id="CON200006" />}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    ...typography.h5,
                    mt: 5,
                    color: "#F1F2F4",
                    borderBottom: "2px solid #0081FE",
                    width: "fit-content", // ✅ auto width instead of 60%
                    whiteSpace: "nowrap", // ✅ keep text in one line
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  {content.CON200007}
                  {isAdmin && <EditIconButton id="CON200007" />}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    ...typography.h5,
                    mt: 2,
                    borderBottom: "2px solid #0081FE",
                    color: "#F1F2F4",
                    width: "90%",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  {content.CON200008}
                  {isAdmin && <EditIconButton id="CON200008" />}
                </Typography>
              </Grid>

              {/* Links Section */}
              <Grid item xs={12} sm={6}>
                <Button
                  variant="outlined"
                  sx={{ ...styles.button, ...typography.h6 }}
                >
                  {content.CON200009}
                  {isAdmin && <EditIconButton id="CON200009" />}
                </Button>

                <Box display="flex" flexDirection="column" gap={1.5}>
                  {[
                    content.CON200010,
                    content.CON200011,
                    content.CON200012,
                  ].map((linkText, i) => (
                    <Link
                      key={i}
                      href="#"
                      sx={{
                        color: "#fff",
                        ...typography.h5,
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      {linkText}
                      {isAdmin && <EditIconButton id={`CON20001${i + 0}`} />}
                    </Link>
                  ))}

                  <Typography
                    sx={{
                      ...styles.link,
                      ...typography.h4,
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {content.CON200013}
                    {isAdmin && <EditIconButton id="CON200013" />}
                    <Box component="span" sx={{ color: "red", ml: 0.5 }}>
                      {content.CON200016}
                      {isAdmin && <EditIconButton id="CON200016" />}
                    </Box>
                  </Typography>

                  <Box
                    sx={{ borderBottom: "1px solid white", width: "20%" }}
                  ></Box>
                  <Box
                    sx={{
                      height: 1,
                      backgroundColor: "#fff",
                      width: 28,
                      mt: 1,
                    }}
                  />

                  <Link
                    href="#"
                    sx={{
                      ...styles.link,
                      ...typography.h5,
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {content.CON200014}
                    {isAdmin && <EditIconButton id="CON200014" />}
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Bottom bar */}
        <Box
          mt={4}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="caption"
            sx={{
              color: "#ccc",
              paddingLeft: "74%",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            {content.CON200015}
            {isAdmin && <EditIconButton id="CON200015" />}
          </Typography>

          <IconButton
            onClick={handleScrollTop}
            sx={{
              border: "1px solid white",
              borderRadius: "50%",
              color: "white",
              "&:hover": { backgroundColor: "#1b3a6b" },
            }}
          >
            <ArrowUpwardIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
