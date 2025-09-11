import React, { useState, useRef } from "react";
import {
  AppBar,
  Box,
  Button,
  Grid,
  Popover,
  Typography,
  Divider,
  useTheme, Card,
  CardMedia,
  CardContent,
  IconButton,Link
} from "@mui/material";
import { styled } from "@mui/system";
import imgserv from "../../../../assets/topbarservice1.jpg";
import EditIcon from "@mui/icons-material/Edit";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";  // or any other ico
const MenuButton = styled(Button)(({ theme }) => ({
  flex: 1, // equal width for all buttons
  position: "relative",
  textTransform: "none",
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 500,
  fontStyle: "normal",
  fontSize: "20px", // as per your design
  lineHeight: "130%",
  letterSpacing: "0%",
  color: "#131313",
  background: "transparent",
  borderRadius: 0, // keep clean menu look
  padding: "12px 0", // balanced vertical spacing

  "&.active": {
    color: theme.palette.warning.main,
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: -6, // adjust triangle position
      left: "50%",
      transform: "translateX(-50%)",
      width: 0,
      height: 0,
      borderLeft: "6px solid transparent",
      borderRight: "6px solid transparent",
      borderTop: `6px solid #131313`, // orange triangle
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
  const navigate = useNavigate();

  // const [anchorEl, setAnchorEl] = useState(null);
  // const [activeMenu, setActiveMenu] = useState(null);

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
        <Box display="flex" flex={1} justifyContent="space-evenly">
          {["Services", "Rental", "Resale", "Contact", "More"].map((menu) => (
            <React.Fragment key={menu}>
              <MenuButton
                onMouseEnter={(e) => handleOpen(e, menu)}
                className={activeMenu === menu ? "active" : ""}
              >
                {menu}
              </MenuButton>

              <Popover
                open={activeMenu === menu}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                PaperProps={{
                  sx: {
                    mt: 2,
                    backgroundColor: theme.palette.background.default,
                    width: appBarRef.current?.offsetWidth || "100%", // match AppBar width
                    borderRadius: 0,
                    p: 2,
                    boxShadow: theme.shadows[5],
                    height: 380,
                  },
                }} disableRestoreFocus
              >
                <Box onMouseLeave={handleClose} onMouseEnter={() => setActiveMenu(menu)}>

                  {menu === "Services" && <ServicesPopoverContent />}
                  {menu === "Rental" && <RentalPopoverContent />}
                  {menu === "Resale" && <ResalePopoverContent />}
                  {menu === "Contact" && <ContactPopoverContent />}
                  {menu === "More" && <MorePopoverContent />}
                </Box>
                {/* Add other popover contents here */}
              </Popover>
            </React.Fragment>
          ))}
        </Box>


      </Box>
    </AppBar>
  );
};


const ServicesPopoverContent = () => {
  return (
    <Grid container spacing={0}>
      {/* Column 1 */}
      <Grid item xs={3}>
        <Box
          sx={{
            width: 120,
            height: 144,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
              letterSpacing: "-0.12px",
            }}
          >
            Electromagnet
            <br /> Repair
          </Typography>

          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Coil Rewinds
          </Typography>

          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Terminals
          </Typography>
        </Box>

        <Box
          mt={3}
          sx={{
            width: 278,
            height: 144,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 1.5,
          }}
        >
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
              letterSpacing: "-0.12px",
            }}
          >
            Suspension Magnet Service (Oil / Air-cooled)
          </Typography>

          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Overhaul
          </Typography>

          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Oil Changes
          </Typography>
        </Box>
      </Grid>

      {/* Column 2 */}
      <Grid item xs={3}>
        <Box
          sx={{
            width: 140,
            height: 144,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
              letterSpacing: "-0.12px",
            }}
          >
            Rectangular<br /> Magnet
          </Typography>
          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Face Machining
          </Typography>
          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Pole-Shoe Rework
          </Typography>
        </Box>
      </Grid>

      {/* Column 3 */}
      <Grid item xs={3}>
        <Box
          sx={{
            width: 180,
            height: 120,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
              letterSpacing: "-0.12px",
            }}
          >
            Emergency Support (24×7)
          </Typography>

          <Typography
            sx={{
              color: "#111B2D",
              fontFamily: "Fira Sans",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Call +91 12345 67890
          </Typography>

          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Whatsapp
          </Typography>
        </Box>
      </Grid>

      {/* Column 4 */}
      <Grid item xs={3} display="flex" flexDirection="row" alignItems="flex-start" gap={2}>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <ServiceCard imgserv={imgserv} />
        </Box>

        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
              mb: 2,
            }}
          >
            ROI Calculators
          </Typography>

          <Typography sx={{ fontFamily: "Fira Sans", fontWeight: 400, fontSize: "18px", lineHeight: "160%", color: "#111B2D", mb: 1 }}>
            Rent Vs Replace?
          </Typography>
          <Typography sx={{ fontFamily: "Fira Sans", fontWeight: 400, fontSize: "18px", lineHeight: "160%", color: "#111B2D", mb: 1 }}>
            Rent Vs Replace?
          </Typography>
          <Typography sx={{ fontFamily: "Fira Sans", fontWeight: 400, fontSize: "18px", lineHeight: "160%", color: "#111B2D" }}>
            Rent Vs Replace?
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

const RentalPopoverContent = () => {
  return (
    <Grid container spacing={0}>
      {/* Column 1 */}
      <Grid item xs={3}>
        <Box
          sx={{
            width: 180,
            height: 144,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
              letterSpacing: "-0.12px",
            }}
          >
            Circular Magnet
          </Typography>

          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Permanent Magnet
          </Typography>

          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Electro-Lifting Magnet
          </Typography>
        </Box>

        <Box
          mt={3}
          sx={{
            width: 278,
            height: 144,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 1.5,
          }}
        >
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
              letterSpacing: "-0.12px",
            }}
          >
            Rectangle Magnet
          </Typography>

          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Permanent Magnet
          </Typography>

          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Electro-Lifting Magnet
          </Typography>


          <BrowseRentals />

        </Box>
      </Grid>

      {/* Column 2 */}
      <Grid item xs={3}>
        <Box
          sx={{
            width: 140,
            height: 144,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
              letterSpacing: "-0.12px",
            }}
          >
            Overband
          </Typography>
          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Permanent Magnet
          </Typography>
          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Permanent Magnet
          </Typography>
        </Box>
      </Grid>

      {/* Column 3 */}
      <Grid item xs={3}>
        <Box
          sx={{
            width: 140,
            height: 144,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
              letterSpacing: "-0.12px",
            }}
          >
            Rectangle Magnet
          </Typography>

          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Permanent Magnet
          </Typography>

          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Permanent Magnet
          </Typography>
        </Box>
      </Grid>

      {/* Column 4 */}
      <Grid item xs={3} display="flex" flexDirection="row" alignItems="flex-start" gap={2}>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <ServiceCard imgserv={imgserv} />
        </Box>

        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
              mb: 2,
            }}
          >
            ROI Calculators
          </Typography>

          <Typography sx={{ fontFamily: "Fira Sans", fontWeight: 400, fontSize: "18px", lineHeight: "160%", color: "#111B2D", mb: 1 }}>
            Rent Vs Replace?
          </Typography>
          <Typography sx={{ fontFamily: "Fira Sans", fontWeight: 400, fontSize: "18px", lineHeight: "160%", color: "#111B2D", mb: 1 }}>
            Rent Vs Replace?
          </Typography>
          <Typography sx={{ fontFamily: "Fira Sans", fontWeight: 400, fontSize: "18px", lineHeight: "160%", color: "#111B2D" }}>
            Rent Vs Replace?
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

const ResalePopoverContent = () => {
  const navigate = useNavigate();
  return (
    <Grid container spacing={0}>
      {/* Column 1 */}
      <Grid item xs={3}>
        <Box
          sx={{
            width: 200,
            height: 144,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
              letterSpacing: "-0.12px",
            }}
          >
            Browse Refurbished<br />Inventory
          </Typography>

          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Circular Magnet
          </Typography>

          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Rectangular Magnet
          </Typography>
        </Box>

        <Box
          mt={3}
          sx={{
            width: 278,
            height: 144,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 1.5,
          }}
        >
          <Link
            onClick={() => navigate("home/SellMagnet")}
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
              letterSpacing: "-0.12px",
              textDecoration: "none",
              cursor: "pointer"
            }}
          >
            Sell/Exchange Your<br />Magnets
          </Link>

          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Permanent Magnet
          </Typography>

          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Electro-Lifting Magnet
          </Typography>


          {/* <BrowseRentals/> */}

        </Box>
      </Grid>

      {/* Column 2 */}
      <Grid item xs={3}>
        <Box
          sx={{
            width: 140,
            height: 144,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
              letterSpacing: "-0.12px",
            }}
          >
            Overband
          </Typography>
          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Permanent Magnet
          </Typography>
          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Permanent Magnet
          </Typography>
        </Box>
      </Grid>

      {/* Column 3 */}
      <Grid item xs={3}>
        <Box
          sx={{
            width: 180,
            height: 120,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
              letterSpacing: "-0.12px",
            }}
          >
            Rectangle Magnet
          </Typography>

          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Permanent Magnet
          </Typography>

          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Permanent Magnet
          </Typography>
        </Box>
      </Grid>

      {/* Column 4 */}
      <Grid item xs={3} display="flex" flexDirection="row" alignItems="flex-start" gap={2}>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <ServiceCard imgserv={imgserv} />
        </Box>

        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
              mb: 2,
            }}
          >
            ROI Calculators
          </Typography>

          <Typography sx={{ fontFamily: "Fira Sans", fontWeight: 400, fontSize: "18px", lineHeight: "160%", color: "#111B2D", mb: 1 }}>
            Rent Vs Replace?
          </Typography>
          <Typography sx={{ fontFamily: "Fira Sans", fontWeight: 400, fontSize: "18px", lineHeight: "160%", color: "#111B2D", mb: 1 }}>
            Rent Vs Replace?
          </Typography>
          <Typography sx={{ fontFamily: "Fira Sans", fontWeight: 400, fontSize: "18px", lineHeight: "160%", color: "#111B2D" }}>
            Rent Vs Replace?
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
const ContactPopoverContent = () => {
  return (
    <Grid container spacing={4} sx={{ px: 2, py: 3 }}>
      {/* Column 1 */}
      <Grid item xs={4}>
        <Box display="flex" flexDirection="column" gap={1.5}>
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
            }}
          >
            Request a Quote
          </Typography>
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
            }}
          >
            Book a Site Visit
          </Typography>
          <Typography
            sx={{
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
            }}
          >
            contact@lift.agency
          </Typography>
          <Typography
            sx={{
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
            }}
          >
            (123) 456-7890
          </Typography>
        </Box>
      </Grid>

      {/* Column 2 */}
      <Grid item xs={4}>
        <Box display="flex" flexDirection="column" gap={1.5}>
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
            }}
          >
            WhatsApp an Engineer
          </Typography>
        </Box>
      </Grid>

      {/* Column 3 */}
      <Grid item xs={4}>
        <Box display="flex" flexDirection="row" alignItems="flex-start" gap={2}>
          {/* Image Card */}
          <Box>
            <ServiceCard imgserv={imgserv} />
          </Box>

          <Divider orientation="vertical" flexItem />

          {/* ROI Calculators */}
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography
              sx={{
                color: "#AE5609",
                fontFamily: "Space Grotesk",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "130%",
                mb: 1,
              }}
            >
              ROI Calculators
            </Typography>
            {["Rent Vs Replace?", "Rent Vs Replace?", "Rent Vs Replace?"].map(
              (item, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontFamily: "Fira Sans",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "160%",
                    color: "#111B2D",
                  }}
                >
                  {item}
                </Typography>
              )
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

const MorePopoverContent = () => {
  return (
    <Grid container spacing={0}>
      {/* Column 1 */}
      <Grid item xs={3}>
        <Box
          sx={{
            width: 160,
            height: 144,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
              letterSpacing: "-0.12px",
            }}
          >
            ROI Calculator
          </Typography>

          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Repair vs Replace
          </Typography>

          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Rental vs Buy
          </Typography>
          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            AMC vs Reactive
          </Typography>
        </Box>

        <Box
          mt={3}
          sx={{
            width: 278,
            height: 144,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 1.5,
          }}
        >
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
              letterSpacing: "-0.12px",
            }}
          >
            Downloads
          </Typography>

          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Safety labels
          </Typography>

          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Elctro-Lifting Magnet
          </Typography>
        </Box>
      </Grid>

      {/* Column 2 */}
      <Grid item xs={3}>
        <Box
          sx={{
            width: 140,
            height: 144,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
              letterSpacing: "-0.12px",
            }}
          >
            Case Studies
          </Typography>
          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Before and After
          </Typography>
          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
            }}
          >
            Turn Around Time<br />(TAT)
          </Typography>
        </Box>
      </Grid>

      {/* Column 3 */}
      <Grid item xs={3}>
        <Box
          sx={{
            width: 180,
            height: 120,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
              letterSpacing: "-0.12px",
            }}
          >
            FAQ <br />About Us <br />Legal
          </Typography>
        </Box>
      </Grid>

      {/* Column 4 */}
      <Grid item xs={3} display="flex" flexDirection="row" alignItems="flex-start" gap={2}>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <ServiceCard imgserv={imgserv} />
        </Box>

        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
              mb: 2,
            }}
          >
            ROI Calculators
          </Typography>

          <Typography sx={{ fontFamily: "Fira Sans", fontWeight: 400, fontSize: "18px", lineHeight: "160%", color: "#111B2D", mb: 1 }}>
            Rent Vs Replace?
          </Typography>
          <Typography sx={{ fontFamily: "Fira Sans", fontWeight: 400, fontSize: "18px", lineHeight: "160%", color: "#111B2D", mb: 1 }}>
            Rent Vs Replace?
          </Typography>
          <Typography sx={{ fontFamily: "Fira Sans", fontWeight: 400, fontSize: "18px", lineHeight: "160%", color: "#111B2D" }}>
            Rent Vs Replace?
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
const BrowseRentals = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{ mt: 2, cursor: "pointer" }}
      onClick={() => navigate("/rentals")} // replace with your route
    >
      <Typography
        sx={{
          fontFamily: "Space Grotesk",
          fontWeight: 400,
          fontSize: "24px",
          lineHeight: "130%",
          letterSpacing: "-0.12%",
          textDecoration: "underline",
          textDecorationStyle: "solid",
          textDecorationOffset: "0%",
          textDecorationThickness: "0%",
          textDecorationSkipInk: "auto",
        }}
      >
        Browse All Rentals
      </Typography>
      <ArrowForwardIosIcon sx={{ ml: 1, fontSize: "20px" }} />
    </Box>
  );
};

const ServiceCard = ({ imgserv }) => {
  return (
    <Card
      sx={{
        width: 150,
        height: 307,
        borderRadius: 2,
        boxShadow: 3,
        overflow: "hidden",
        opacity: 1,  // angle: 0deg
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        image={imgserv}
        alt="promo"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 2, // apply rounding to image too
        }}
      />

      {/* Content Section */}
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1.5,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Space Grotesk",
            fontWeight: 500,
            fontStyle: "normal", // "Regular" is invalid, use "normal"
            fontSize: "20px",
            lineHeight: "130%", // or 1.3
            letterSpacing: "0px", // % is invalid in CSS
            color: "#1C2D4B",
          }}
        >
          Its more than Magnets
        </Typography>


        <IconButton size="small" sx={{ bgcolor: "primary.main", color: "white" }}>
          <EditIcon fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
  );
}
//  <Popover
//   open={open}
//   anchorEl={anchorEl}
//   onClose={handleClose}
//   anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
//   transformOrigin={{ vertical: "top", horizontal: "left" }}
//   PaperProps={{
//     sx: {
//       backgroundColor:theme.palette.background.default,
//       width: appBarRef.current ? appBarRef.current.offsetWidth : "100vw", // full width of topbar
//       left: 0,
//       top: `${topBarHeight}px !important`, // align exactly below topbar
//       borderRadius: 0,
//       p: 3,
//       boxShadow: theme.shadows[5],
//       minHeight: 450, // enough space for 4 columns
//     },
//   }}
//   disableRestoreFocus
// >
//           <Grid container spacing={4}>
//             {/* Column 1 */}
//             <Grid item xs={3}>
//               <Typography
//                 variant="subtitle1"
//                 fontWeight="bold"
//                 color="warning.main"
//               >
//                 Electromagnet <br/>Repair
//               </Typography>
//               <Typography variant="body2">Coil Rewinds</Typography>
//               <Typography variant="body2">Terminals</Typography>
//               <Box mt={2}>
//                 <Typography
//                   variant="subtitle1"
//                   fontWeight="bold"
//                   color="warning.main"
//                 >
//                   Suspension Magnet Service (Oil / Air-cooled)
//                 </Typography>
//                 <Typography variant="body2">Overhaul</Typography>
//                 <Typography variant="body2">Oil Changes</Typography>
//               </Box>
//             </Grid>

//             {/* Column 2 */}
//             <Grid item xs={3}>
//               <Typography
//                 variant="subtitle1"
//                 fontWeight="bold"
//                 color="warning.main"
//               >
//                 Rectangular Magnet
//               </Typography>
//               <Typography variant="body2">Face Machining</Typography>
//               <Typography variant="body2">Pole-Shoe Rework</Typography>
//             </Grid>

//             {/* Column 3 */}
//             <Grid item xs={3}>
//               <Typography
//                 variant="subtitle1"
//                 fontWeight="bold"
//                 color="warning.main"
//               >
//                 Emergency Support (24×7)
//               </Typography>
//               <Typography variant="body2" fontWeight="bold">
//                 Call +91 12345 67890
//               </Typography>
//               <Typography variant="body2">Whatsapp</Typography>
//             </Grid>

//             {/* Column 4 - Image + ROI */}
//             <Grid item xs={3} display="flex" flexDirection="column">
//               <Box
//                 component="img"
//                 src="https://via.placeholder.com/200x120"
//                 alt="promo"
//                 sx={{ borderRadius: 2, mb: 2, width: "100%" }}
//               />
//               <Divider orientation="horizontal" flexItem sx={{ my: 1 }} />
//               <Typography
//                 variant="subtitle1"
//                 fontWeight="bold"
//                 color="warning.main"
//               >
//                 ROI Calculators
//               </Typography>
//               <Typography variant="body2">Rent Vs Replace?</Typography>
//               <Typography variant="body2">Rent Vs Replace?</Typography>
//               <Typography variant="body2">Rent Vs Replace?</Typography>
//             </Grid>
//           </Grid>
//         </Popover>

{/* <Popover
  open={open}
  onClose={handleClose}
  anchorReference="anchorPosition"   // ⬅️ manual positioning
  anchorPosition={{ top: topBarHeight, left: 0 }}
  transformOrigin={{ vertical: "top", horizontal: "left" }}
  PaperProps={{
    sx: {
      backgroundColor: theme.palette.background.default,
      width: "100vw",         // full width
      borderRadius: 0,
      p: 4,
      boxShadow: theme.shadows[5],
      height: 380,
    },
  }}
  disableRestoreFocus
> */}