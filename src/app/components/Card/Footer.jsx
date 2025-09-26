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
import { RefluxSvg } from "app/utils/constant";
import Brand1 from "../../../assets/Brand1.png";

const styles = {
  footer: {
    backgroundColor: "#112B55",
    color: "#fff",
    borderTopLeftRadius: "50px",
    borderTopRightRadius: "50px",
    padding: { xs: "40px 20px", md: "65px 40px 60px 10%" },
    margin: "3%",
    mt: 10,
  },
  button: {
    color: "#fff",
    borderColor: "#fff",
    borderRadius: "20px",
    textTransform: "none",
    mb: 2,
    px: 3,
    py: 0.5,
    fontSize: "0.8rem",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": { textDecoration: "underline" },
  },
  divide:{
      width:'50%'
  }
};

export default function FooterAlt() {
  return (
    <Box component="footer" sx={styles.footer}>
      <Grid container spacing={4} justifyContent="space-between">
        {/* Left Section */}
        <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center" gap={2}>
            <RefluxSvg />
            <Box>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", letterSpacing: "2px" }}
              >
                ReFlux
              </Typography>
              <Typography
                variant="caption"
                sx={{ display: "block", letterSpacing: "15px" }}
              >
                MAGNETS
              </Typography>
            </Box>
          </Box>

          <Box mt={6} display="flex" alignItems="center" gap={2}>
            <Typography variant="subtitle1">A unit of</Typography>
            <Box
              component="img"
              src={Brand1}
              alt="Electroflux"
              sx={{ width:'100px', height: '104.38px' }}
            />
          </Box>
        </Grid>

        {/* Middle Section */}
        <Grid item xs={12} md={4}>
          <Button variant="outlined" sx={styles.button}>
            Contact
          </Button>
          <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
            76A (NP, 11th St, Periyar Nagar,<br></br> Pattara Vakkam,
            Sidco <br></br> Industrial Estate, Ambattur, <br></br>Chennai, Tamil Nadu 600058
          </Typography>
          <Typography variant="body2" sx={{ mt: 3, color: "#BFD8F9" , }}>
           <Link sx={{borderBottom: "2px solid #BFD8F9"}}>+91 94443 92388</Link> 
          </Typography>
          
          <Link href="mailto:service@refluxmagnets.com" sx={{mt:2, ...styles.link, color: "#BFD8F9" , borderBottom: "2px solid #BFD8F9",}}>
            service@refluxmagnets.com
          </Link>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={3}>
          <Button variant="outlined" sx={styles.button}>
            Links
          </Button>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link href="#" sx={styles.link}>Facebook</Link>
            <Link href="#" sx={styles.link}>Instagram</Link>
            <Link href="#" sx={styles.link}>Youtube</Link>
            <Link
              href="#"
              sx={{ ...styles.link, fontWeight: 600, display: "flex", alignItems: "center" }}
            >
              Wall of Love <Box component="span" sx={{ color: "red", ml: 1 }}>❤️</Box>
            </Link>
            
            <Box sx={{ height: 1, backgroundColor: "#fff", width: 30, mt: 1 }} />
            <Link href="#" sx={{ ...styles.link, fontWeight: 600 }}>Sitemap</Link>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom bar */}
      <Box mt={6} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="caption" sx={{marginLeft:'75%', color: "#ccc" }}>
          © 2020 Ligit Media All rights reserved.
        </Typography>
        <IconButton
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
  );
}
