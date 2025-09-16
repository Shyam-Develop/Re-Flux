// Footer.jsx
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

// Replace these imports with your actual brand logos
import Brand1 from '../../../assets/Brand1.png';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#0b2d55",
        px: { xs: 3, sm: 6, md: 8 },
        py: 6,
        mt: 4,
        borderTopRightRadius: "55px",
        borderTopLeftRadius: "55px",
      }}
    >
      {/* Top Grid */}
      <Grid container spacing={4}>
        {/* 1. Logo + Sub-brand */}
        <Grid item xs={12} sm={6} md={3}>
          <Box mb={2}>
            <img src={Brand1} alt="ReFlux Magnets" style={{ height: 40 }} />
          </Box>
          <Typography variant="body2" sx={{ mb: 1, color: "white" }}>
            A unit of
          </Typography>
          <Box>
            <img src={Brand1} alt="Electro Flux" style={{ height: 70 }} />
          </Box>
        </Grid>

        {/* 2. Sitemap */}
        <Grid item xs={12} sm={6} md={2} sx={{ color: "white" }}>
          <Typography fontWeight="bold" gutterBottom>
            Sitemap
          </Typography>
          {["Home", "Abouts", "Growers", "Merchants", "Contact"].map((item) => (
            <Typography key={item} variant="body2" sx={{ mb: 0.5 }}>
              <Link href="#" underline="none" sx={{ color: "white" }}>
                {item}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* 3. Socials */}
        <Grid item xs={12} sm={6} md={2} sx={{ color: "white" }}>
          <Typography fontWeight="bold" gutterBottom>
            Socials
          </Typography>
          {["Facebook", "Linkedin", "Instagram", "Twitter"].map((item) => (
            <Typography key={item} variant="body2" sx={{ mb: 0.5 }}>
              <Link href="#" underline="none" sx={{ color: "white" }}>
                {item}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* 4. Office & Newsletter */}
        <Grid item xs={12} sm={6} md={5}>
          <Typography fontWeight="bold" gutterBottom sx={{ color: "white" }}>
            Head Office
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: "white" }}>
            Xilliams Corner Wine © 2017. 1112 A Market St # Ste B22,
            Charlottesville, CA 45565
          </Typography>

          <Typography fontWeight="bold" gutterBottom sx={{ color: "white" }}>
            Newsletter
          </Typography>
          <TextField
            placeholder="Enter your email address"
            variant="standard"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <MailOutlineIcon sx={{ color: "#1976d2" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      {/* Bottom Line */}
      <Grid container spacing={2} sx={{ mt: 6, color: "white" }}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            sx={{
              fontSize: "24px",
              fontFamily: "Fira Sans",
              textDecoration: "underline",
              textDecorationColor: "#1976d2",
              textUnderlineOffset: "4px",
            }}
            variant="body2"
            fontWeight="medium"
          >
            contact@lift.agency
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography
            sx={{
              fontSize: "24px",
              fontFamily: "Space Grotesk",
              textDecoration: "underline",
              textDecorationColor: "#1976d2",
              textUnderlineOffset: "4px",
            }}
            variant="body2"
            fontWeight="medium"
          >
            (123) 456-7890
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}></Grid> {/* Spacer */}

        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="caption"
            sx={{
              fontSize: "14px",
              fontFamily: "Regular",
              color: "white",
            }}
          >
            © 2020 Lift Media All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
