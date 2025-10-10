import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  Button,
  IconButton,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { RefluxSvg, typography } from "app/utils/constant";
import Brand1 from "../../../assets/Brand1.png";

const styles = {
  footer: {
    backgroundColor: "#112B55",
    color: "#fff",
    borderTopLeftRadius: "60px",
    borderTopRightRadius: "60px",
    padding: { xs: "40px 20px", md: "65px 8% 50px" },
    mt: 10,
    width: "100%",   // full width instead of 1400px
    height: "auto",  // let content define height
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
  window.scrollTo({ top: 0, behavior: "smooth" });
};




  return (
    <Box sx={{ paddingLeft: "5px", paddingRight:'5px', }}>
      <Box component="footer" sx={{ ...styles.footer }}>
        <Grid container spacing={6}>
          {/* Left Section (Logo) */}
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
                  sx={{ fontWeight: 700, letterSpacing: 1 }}
                >
                  ReFlux
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ display: "block", fontWeight:'500', fontSize: '15px', letterSpacing: "20px",  }}
                >
                  MAGNETS
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
                sx={{ fontWeight: 700, fontSize: "28px" }}
                variant="subtitle2"
              >
                A unit of
              </Typography>
              <Box
                component="img"
                src={Brand1}
                alt="Electroflux"
                sx={{ width: "100px", height: "104.38px" }}
              />
            </Box>
          </Grid>

          {/* Right Half: Contact + Links */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={6}>
              {/* Contact */}
              <Grid item xs={12} sm={6}>
                <Button
                  variant="outlined"
                  sx={{ ...styles.button, ...typography.h6 }}
                >
                  Contact
                </Button>
                <Typography
                  variant="body2"
                  sx={{ ...typography.h5, fontSize:'19px', lineHeight: 1.7 }}
                >
                  76A (NP, 11th St, Periyar Nagar, <br />
                  Pattara Vakkam, Sidco <br />
                  Industrial Estate, Ambattur, <br />
                  Chennai, Tamil Nadu 600058
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    ...typography.h5,
                    mt: 5,
                    color: "#F1F2F4",
                    borderBottom: "2px solid #0081FE",
                    width: "60%",
                  }}
                >
                  +91 94443 92388
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    ...typography.h5,
                    mt: 2,
                    borderBottom: "2px solid #0081FE",
                    color: "#F1F2F4",
                    width: "90%",
                  }}
                >
                  service@refluxmagnets.com
                </Typography>
              </Grid>

              {/* Links */}
              <Grid item xs={12} sm={6}>
                <Button
                  variant="outlined"
                  sx={{ ...styles.button, ...typography.h6 }}
                >
                  Links
                </Button>
                <Box display="flex" flexDirection="column" gap={1.5}>
                  <Link href="#" sx={{ color: "#fff", ...typography.h5 }}>
                    Facebook
                  </Link>
                  <Link href="#" sx={{ color: "#fff", ...typography.h5 }}>
                    Instagram
                  </Link>
                  <Link href="#" sx={{ color: "#fff", ...typography.h5 }}>
                    Youtube
                  </Link>
                  <Link
                    href="#"
                    sx={{
                      ...styles.link,
                      ...typography.h4,
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Wall of Love{" "}
                    <Box component="span" sx={{ color: "red", ml: 0.5 }}>
                      ❤️
                    </Box>
                  </Link>
                  <Box
                    sx={{ height: 1, backgroundColor: "#fff", width: 28, mt: 1 }}
                  />
                  <Link
                    href="#"
                    sx={{ ...styles.link, ...typography.h5, fontWeight: 600 }}
                  >
                    Sitemap
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
            sx={{ color: "#ccc", paddingLeft: "74%" }}
          >
            © 2020 Ligit Media All rights reserved.
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
