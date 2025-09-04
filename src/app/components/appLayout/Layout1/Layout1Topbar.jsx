import React, { useState, useRef } from "react";
import {
  AppBar,
  Box,
  Button,
  Grid,
  Popover,
  Typography,
  Divider,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";

const MenuButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: "none",
  fontWeight: 600,
  fontSize: "16px",
  flex: 1, // equal width buttons
  position: "relative",
  "&.active": {
    color: theme.palette.warning.main,
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: -4,
      left: "50%",
      transform: "translateX(-50%)",
      width: 0,
      height: 0,
      borderLeft: "6px solid transparent",
      borderRight: "6px solid transparent",
      borderTop: `6px solid ${theme.palette.warning.main}`, // orange triangle
    },
  },
  "&:hover": {
    background: "transparent",
    color: theme.palette.warning.main,
  },
}));

export default function TopbarWithMegaMenu() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const appBarRef = useRef(null);

  const handleOpen = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menu);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };
  const open = Boolean(anchorEl);
const topBarHeight = 64;

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "white", color: "black", px: 4 }}
      ref={appBarRef}
    >
      <Box display="flex" alignItems="center" height={64}>
        {/* Logo */}
        <Typography variant="h6" sx={{ flex: 0.5, fontWeight: "bold" }}>
          ReFlux Magnets
        </Typography>

        {/* Menu Items */}
        <Box display="flex" flex={1} justifyContent="space-evenly">
          {["Services", "Rental", "Resale", "Contact", "More"].map((menu) => (
            <MenuButton
              key={menu}
              onMouseEnter={(e) => handleOpen(e, menu)}
              className={activeMenu === menu ? "active" : ""}
            >
              {menu}
            </MenuButton>
          ))}
        </Box>

        {/* Mega Dropdown */}
        <Popover
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
  transformOrigin={{ vertical: "top", horizontal: "left" }}
  PaperProps={{
    sx: {
      width: appBarRef.current ? appBarRef.current.offsetWidth : "100vw", // full width of topbar
      left: 0,
      top: `${topBarHeight}px !important`, // align exactly below topbar
      borderRadius: 0,
      p: 3,
      boxShadow: theme.shadows[5],
      minHeight: 250, // enough space for 4 columns
    },
  }}
  disableRestoreFocus
>
          <Grid container spacing={4}>
            {/* Column 1 */}
            <Grid item xs={3}>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                color="warning.main"
              >
                Electromagnet Repair
              </Typography>
              <Typography variant="body2">Coil Rewinds</Typography>
              <Typography variant="body2">Terminals</Typography>
              <Box mt={2}>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  color="warning.main"
                >
                  Suspension Magnet Service (Oil / Air-cooled)
                </Typography>
                <Typography variant="body2">Overhaul</Typography>
                <Typography variant="body2">Oil Changes</Typography>
              </Box>
            </Grid>

            {/* Column 2 */}
            <Grid item xs={3}>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                color="warning.main"
              >
                Rectangular Magnet
              </Typography>
              <Typography variant="body2">Face Machining</Typography>
              <Typography variant="body2">Pole-Shoe Rework</Typography>
            </Grid>

            {/* Column 3 */}
            <Grid item xs={3}>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                color="warning.main"
              >
                Emergency Support (24×7)
              </Typography>
              <Typography variant="body2" fontWeight="bold">
                Call +91 12345 67890
              </Typography>
              <Typography variant="body2">Whatsapp</Typography>
            </Grid>

            {/* Column 4 - Image + ROI */}
            <Grid item xs={3} display="flex" flexDirection="column">
              <Box
                component="img"
                src="https://via.placeholder.com/200x120"
                alt="promo"
                sx={{ borderRadius: 2, mb: 2, width: "100%" }}
              />
              <Divider orientation="horizontal" flexItem sx={{ my: 1 }} />
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                color="warning.main"
              >
                ROI Calculators
              </Typography>
              <Typography variant="body2">Rent Vs Replace?</Typography>
              <Typography variant="body2">Rent Vs Replace?</Typography>
              <Typography variant="body2">Rent Vs Replace?</Typography>
            </Grid>
          </Grid>
        </Popover>
      </Box>
    </AppBar>
  );
}
