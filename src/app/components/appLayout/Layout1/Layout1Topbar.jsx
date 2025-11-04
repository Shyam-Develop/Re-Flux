import React, { useState, useRef, useEffect } from "react";
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
  IconButton,
  useMediaQuery
} from "@mui/material";
import { styled } from "@mui/system";
import imgserv from "../../../../assets/topbarservice1.jpg";
import EditIcon from "@mui/icons-material/Edit";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, useNavigate } from "react-router-dom";  // or any other ico
import { typography } from "app/utils/constant";
import { themeShadows } from "app/components/baseTheme/themeColors";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';

const MenuButton = styled(Button)(({ theme }) => ({

  background: "transparent",
  borderRadius: 0,
  padding: "12px 0",
  "&.active": {
    color: "#00334E",
    fontWeight: 600,
    "&::before": {
      content: '""',
      position: "absolute",
      top: "25px", // this makes it align perfectly with the diamond
      left: 0,
      // width: "100%",
      // height: "4px",
      backgroundColor: "#112B49", // dark blue line
    },
    "&::after": {
      content: '""',
      position: "absolute",
      top: "54px", // adjust for your exact header height
      left: "50%",
      transform: "translateX(-50%)",
      width: 0,
      height: 0,
      borderLeft: "8px solid transparent",
      borderRight: "8px solid transparent",
      borderTop: "8px solid #112B49", // triangle color
    },

  },
  "&:hover": {
    background: "transparent",
    color: theme.palette.warning.main,
  },
}));



const TopbarRoot = styled("div")(({ theme }) => ({
  top: 0,
  zIndex: 96,
  transition: "all 0.3s ease",
  boxShadow: themeShadows[8],
  height: 100,
}));

const TopbarContainer = styled(Box)(({ theme }) => ({
  padding: "8px 20px 8px 18px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  background: theme.palette.card,
  borderBottom: `3px solid ${theme.palette.border}`,
}));



export default function TopbarWithMegaMenu() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const appBarRef = useRef(null);

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const navigate = useNavigate();

    useEffect(() => {
    // Check if logged in from localStorage
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleLogin = () => navigate("/login");


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleOpen = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menu);
  };



  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };
  const open = Boolean(anchorEl);
  const topBarHeight = 64;

  const RefluxSvg = ({ color = "#111B2D", width = 20, height = 20 }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 114 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M57.1457 0.0644531C25.9403 0.0644531 0.634766 25.3821 0.634766 56.62C0.634766 87.8579 25.9403 113.181 57.1457 113.181C88.3511 113.181 113.657 87.8528 113.657 56.62C113.657 25.3871 88.3511 0.0644531 57.1457 0.0644531ZM49.4187 104.452L54.0115 93.0608H48.7172L58.2358 81.7356L55.8536 89.6461L61.6829 89.6764L49.4187 104.447V104.452ZM57.6958 81.7507C57.5191 81.7608 57.3273 81.7709 57.1457 81.7709C56.964 81.7709 56.7772 81.7608 56.5955 81.7507C49.9739 81.4123 44.715 75.9416 44.715 69.2333C44.715 62.5251 50.2717 56.7564 57.1457 56.7109C64.0196 56.7614 69.5763 62.3483 69.5763 69.2333C69.5763 76.1184 64.3174 81.4123 57.6958 81.7507ZM69.5763 83.5793C73.2354 80.1848 75.7134 74.6838 75.7134 69.3041C75.7134 59.0346 67.4011 50.7149 57.1507 50.7149C46.9003 50.7149 38.588 59.0396 38.588 69.3041C38.588 74.6838 41.066 80.1848 44.7251 83.5793C39.6529 79.6594 35.7566 73.3654 35.7566 66.4652C35.7566 54.6348 45.3408 45.0422 57.1557 45.0422C68.9707 45.0422 78.5549 54.6348 78.5549 66.4652C78.5549 73.3654 74.6536 79.6594 69.5864 83.5793H69.5763ZM85.1967 66.349C85.1967 50.8412 72.6398 38.2682 57.1457 38.2682C41.6515 38.2682 29.0997 50.8412 29.0997 66.349C29.0997 75.5021 33.8186 83.1348 40.5916 88.2519C32.1581 82.6751 26.0008 74.1231 26.0008 63.2474C26.0008 46.0322 39.9456 32.0752 57.1457 32.0752C74.3457 32.0752 88.2905 46.0272 88.2905 63.2474C88.2905 74.1231 82.1332 82.6751 73.6997 88.2519C80.4727 83.1348 85.1967 75.4971 85.1967 66.349ZM94.1904 63.207C94.1904 42.7286 77.601 26.1247 57.1457 26.1247C36.6903 26.1247 20.1009 42.7337 20.1009 63.207C20.1009 75.7648 26.9295 86.2263 36.4682 92.9396C25.0671 85.7868 16.7295 74.2949 16.7295 59.8276C16.7295 37.4853 34.8229 19.376 57.1457 19.376C79.4684 19.376 97.5618 37.4853 97.5618 59.8276C97.5618 74.2898 89.2191 85.7868 77.8231 92.9396C87.3618 86.2263 94.1904 75.7648 94.1904 63.207ZM81.9414 97.6172C94.8566 89.1914 104.34 76.6842 104.34 60.0954C104.34 34.0048 83.2031 12.8597 57.1457 12.8597C31.0882 12.8597 9.95147 34.0048 9.95147 60.0954C9.95147 76.6842 19.4398 89.1864 32.3549 97.6172C17.5825 88.8126 6.67599 75.2748 6.67599 56.8069C6.67599 28.9029 29.2763 6.29284 57.1457 6.29284C85.015 6.29284 107.615 28.908 107.615 56.8069C107.615 75.2748 96.7139 88.8126 81.9363 97.6172H81.9414Z"
        fill={color}
      />
    </svg>
  );

  const [openServices, setOpenServices] = useState(false);
  const [openRental, setOpenRental] = useState(false);
  const [openResale, setOpenResale] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [openMore, setOpenMore] = useState(false);

  const toggleMenu = (menuSetter, currentValue) => {
    // Close all other menus before opening the selected one
    setOpenServices(false);
    setOpenRental(false);
    setOpenResale(false);
    setOpenContact(false);
    setOpenMore(false);
    menuSetter(!currentValue);
  };


  if (!isMobile) {
    // Desktop view (your existing JSX)
    return (
      <TopbarRoot
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1200,
          backgroundColor: "#fff",
          boxShadow: 1,
        }}
      >
        <TopbarContainer>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            height={80}
            width="100%"
            px={5}
          >
            {/* ================= Left: Logo + Menu ================= */}
            <Box display="flex" alignItems="center">
              {/* Logo */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  paddingLeft: "40px",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/home")}
              >
                <RefluxSvg width={60} height={60} color="#00374C" />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Fira Sans",
                      width: "89.5px",
                      height: "19.45px",
                      fontWeight: 700,
                      fontSize: "35px",
                      color: "#111B2D",
                      paddingBottom: "40px",
                    }}
                  >
                    ReFlux
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Fira Sans",
                      fontWeight: 400,
                      fontSize: "16px",
                      letterSpacing: "5px",
                      color: "#111B2D",
                    }}
                  >
                    MAGNETS
                  </Typography>
                </Box>
              </Box>

              {/* Menu Items */}
              <Box
                display="flex"
                ml={3}
                gap={12}
                sx={{
                  padding: "10%",
                  width: "657px",
                  height: "26px",
                  marginBottom: "20px",
                }}
              >
                {["Services", "Rental", "Resale", "Contact", "More"].map((menu) => (
                  <React.Fragment key={menu}>
                    <MenuButton
                      onClick={(e) => handleOpen(e, menu)}
                      className={activeMenu === menu ? "active" : ""}
                      sx={{
                        color: "#131313",
                        ...typography.h5,
                        fontWeight: 500,
                        fontSize: "20px",
                        textTransform: "none",
                        position: "relative",
                        "&.active": {
                          color: "#00334E",
                          fontWeight: 600,
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            top: "51px",
                            left: "50%",
                            transform: "translateX(-50%) rotate(45deg)",
                            width: "17px",
                            height: "14px",
                            backgroundColor: "#112B49",
                            borderRadius: "1px",
                          },
                        },
                      }}
                    >
                      {menu}
                    </MenuButton>

                    {/* Popover */}
                    <Popover
                      open={activeMenu === menu}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                      PaperProps={{
                        sx: {
                          marginTop: "32px",
                          left: 0,
                          backgroundColor: theme.palette.background.default,
                          width: appBarRef.current?.offsetWidth || "100%",
                          borderRadius: 0,
                          boxShadow: theme.shadows[5],
                          p: 0,
                        },
                      }}
                      disableRestoreFocus
                    >
                      <Box sx={{ borderTop: "3px solid #112B49", width: "100%" }} />
                      <Box sx={{ p: 2 }}>
                        {menu === "Services" && <ServicesPopoverContent />}
                        {menu === "Rental" && <RentalPopoverContent />}
                        {menu === "Resale" && <ResalePopoverContent />}
                        {menu === "Contact" && <ContactPopoverContent />}
                        {menu === "More" && <MorePopoverContent />}
                      </Box>
                    </Popover>
                  </React.Fragment>
                ))}
                {/* ✅ Login / Logout Toggle Button */}
            {/* {isLoggedIn ? (
              <Button
                onClick={handleLogout}
                sx={{
                  color: "#131313",
                  fontWeight: 500,
                  fontSize: "20px",
                  textTransform: "none",
                }}
              >
                Logout
              </Button>
            ) : (
              <Button
                onClick={handleLogin}
                sx={{
                  color: "#131313",
                  fontWeight: 500,
                  fontSize: "20px",
                  textTransform: "none",
                }}
              >
                Login
              </Button>
            )} */}
              </Box>
            </Box>
          </Box>
        </TopbarContainer>
      </TopbarRoot>

    );
  }


  // ===== MOBILE VIEW =====
  return (
    <TopbarRoot
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1200,
        backgroundColor: "#fff",
        boxShadow: 1,
      }}
    >
      <TopbarContainer>
        {/* Top Row (Logo + Burger) */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          height={80}
          px={2}
        >
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={() => navigate("/home")}
          >
            <RefluxSvg width={50} height={50} color="#00374C" />

            <Box sx={{ ml: 1, lineHeight: 1 }}>
              <Typography
                sx={{
                  fontFamily: "Fira Sans",
                  fontWeight: 700,
                  fontSize: "28px",
                  color: "#111B2D",
                  //width: '100px', // Optional, usually not needed here
                }}
              >
                ReFlux
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Fira Sans",
                  fontWeight: 400,
                  fontSize: "15px",
                  letterSpacing: "4px",
                  color: "#111B2D",
                  mt: "-4px", // Adjust vertical spacing between the two texts
                }}
              >
                MAGNETS
              </Typography>
            </Box>
          </Box>


          <IconButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>

        {/* Slide-down Mobile Menu */}
        <Collapse in={mobileMenuOpen} timeout="auto" unmountOnExit>
          <Box
            sx={{
              px: 2,
              pb: 3,
              backgroundColor: "#fff",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >


            {/* Services */}
            <Box sx={{ borderBottom: "1px solid #eee" }}>
              <Button
                fullWidth
                onClick={() => toggleMenu(setOpenServices, openServices)}
                sx={{
                  justifyContent: "space-between",
                  textTransform: "none",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#00334E",
                  py: 1.2,
                }}
              >
                Services
                <ArrowForwardIosIcon
                  sx={{
                    transform: openServices ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                    fontSize: 16,
                  }}
                />
              </Button>
              <Collapse in={openServices} timeout="auto" unmountOnExit>
                <Box sx={{ pl: 2, pt: 1 }}>
                  {/* Electromagnet Repair */}
                  <Typography sx={{ ...typography.h4, color: "#AE5609", fontWeight: 700, fontSize: "18px", mb: 1 }}>
                    Electromagnet Repair
                  </Typography>
                  <Typography sx={{ ...typography.bodyBase, color: "#111B2D", mb: 0.5 }}>Coil Rewinds</Typography>
                  <Typography sx={{ ...typography.bodyBase, color: "#111B2D", mb: 1.5 }}>Terminals</Typography>

                  {/* Rectangular Magnet */}
                  <Typography sx={{ ...typography.h4, color: "#AE5609", fontWeight: 700, fontSize: "18px", mb: 1 }}>
                    Rectangular Magnet
                  </Typography>
                  <Typography sx={{ ...typography.bodyBase, color: "#111B2D", mb: 0.5 }}>Face Machining</Typography>
                  <Typography sx={{ ...typography.bodyBase, color: "#111B2D", mb: 1.5 }}>Pole-Shoe Rework</Typography>

                  {/* Suspension Magnet */}
                  <Typography sx={{ ...typography.h4, color: "#AE5609", fontWeight: 700, fontSize: "18px", mb: 1 }}>
                    Suspension Magnet Service (Oil / Air-cooled)
                  </Typography>
                  <Typography sx={{ ...typography.bodyBase, color: "#111B2D", mb: 0.5 }}>Overhaul</Typography>
                  <Typography sx={{ ...typography.bodyBase, color: "#111B2D", mb: 1.5 }}>Oil Changes</Typography>

                  {/* Emergency Support */}
                  <Typography sx={{ ...typography.h4, color: "#AE5609", fontWeight: 700, fontSize: "18px", mb: 1 }}>
                    Emergency Support (24×7)
                  </Typography>
                  <Typography
                    sx={{
                      color: "#111B2D",
                      fontSize: "16px",
                      ...typography.bodyBase,
                    }}
                  >
                    Call +91 12345 67890
                  </Typography>
                  <Typography sx={{ ...typography.bodyBase, color: "#111B2D", mb: 2 }}>Whatsapp</Typography>

                  {/* Image Card */}
                  <Card
                    sx={{
                      borderRadius: 2,
                      boxShadow: 1,
                      mb: 2,
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={imgserv}
                      alt="service"
                      sx={{ height: 120, objectFit: "cover" }}
                    />
                    <CardContent sx={{ py: 1 }}>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "16px",
                          color: "#111B2D",
                          ...typography.bodyBase
                        }}
                      >
                        It’s more than Magnets
                      </Typography>
                    </CardContent>
                  </Card>

                  {/* ROI Calculators */}
                  <Typography
                    sx={{
                      color: "#AE5609",
                      fontWeight: 600,
                      fontSize: "18px",
                      mb: 1,
                      ...typography.h4
                    }}
                  >
                    ROI Calculators
                  </Typography>
                  {["Rent Vs Replace?", "Rent Vs Replace?", "Rent Vs Replace?"].map(
                    (item, i) => (
                      <Typography key={i} sx={{ color: "#111B2D", mb: 0.8, ...typography.bodyBase }}>
                        {item}
                      </Typography>
                    )
                  )}
                </Box>
              </Collapse>
            </Box>

            {/* Rental */}
            <Box sx={{ borderBottom: "1px solid #eee" }}>
              <Button
                fullWidth
                onClick={() => toggleMenu(setOpenRental, openRental)}
                sx={{
                  justifyContent: "space-between",
                  textTransform: "none",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#00334E",
                  py: 1.2,
                }}
              >
                Rental
                <ArrowForwardIosIcon
                  sx={{
                    transform: openRental ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                    fontSize: 16,
                  }}
                />
              </Button>
              <Collapse in={openRental} timeout="auto" unmountOnExit>
                <Box sx={{ pl: 2, pt: 1 }}>
                  {/* Circular Magnet */}
                  <Typography sx={{ ...typography.h4, color: "#AE5609", fontWeight: 700, fontSize: "18px", mb: 1 }}>
                    Circular Magnet
                  </Typography>
                  <Typography sx={{ ...typography.bodyBase, color: "#111B2D", mb: 0.5 }}>Permanent Magnet</Typography>
                  <Typography sx={{ ...typography.bodyBase, color: "#111B2D", mb: 1.5 }}>Electro-Lifting Magnet</Typography>

                  {/* Overband */}
                  <Typography sx={{ ...typography.h4, color: "#AE5609", fontWeight: 700, fontSize: "18px", mb: 1 }}>
                    Overband
                  </Typography>
                  <Typography sx={{ ...typography.bodyBase, color: "#111B2D", mb: 0.5 }}>Permanent Magnet</Typography>
                  <Typography sx={{ ...typography.bodyBase, color: "#111B2D", mb: 1.5 }}>Permanent Magnet</Typography>

                  {/* Rectangle Magnet */}
                  <Typography sx={{ ...typography.h4, color: "#AE5609", fontWeight: 700, fontSize: "18px", mb: 1 }}>
                    Rectangle Magnet
                  </Typography>
                  <Typography sx={{ ...typography.bodyBase, color: "#111B2D", mb: 0.5 }}>Permanent Magnet</Typography>
                  <Typography sx={{ ...typography.bodyBase, color: "#111B2D", mb: 1.5 }}>Electro-Lifting Magnet</Typography>

                  {/* Browse All Rentals */}
                  <Typography
                    sx={{
                      color: "#00334E",
                      fontWeight: 600,
                      fontSize: "16px",
                      mb: 2,
                      mt: 1,
                      textDecoration: "underline",
                      cursor: "pointer",
                      ...typography.h4
                    }}
                    onClick={() => navigate("/home/rentals")}
                  >
                    Browse All Rentals →
                  </Typography>

                  {/* Image Card */}
                  <Card
                    sx={{
                      borderRadius: 2,
                      boxShadow: 1,
                      mb: 2,
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={imgserv}
                      alt="rental"
                      sx={{ height: 120, objectFit: "cover" }}
                    />
                    <CardContent sx={{ py: 1 }}>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "16px",
                          color: "#111B2D",
                          ...typography.bodyBase
                        }}
                      >
                        It’s more than Magnets
                      </Typography>
                    </CardContent>
                  </Card>

                  {/* ROI Calculators */}
                  <Typography
                    sx={{
                      color: "#AE5609",
                      fontWeight: 600,
                      fontSize: "18px",
                      mb: 1,
                      ...typography.h4
                    }}
                  >
                    ROI Calculators
                  </Typography>
                  {["Rent Vs Replace?", "Rent Vs Replace?", "Rent Vs Replace?"].map(
                    (item, i) => (
                      <Typography key={i} sx={{ color: "#111B2D", mb: 0.8, ...typography.bodyBase }}>
                        {item}
                      </Typography>
                    )
                  )}
                </Box>
              </Collapse>
            </Box>

            {/* Resale */}
            <Box sx={{ borderBottom: "1px solid #eee" }}>
              <Button
                fullWidth
                onClick={() => toggleMenu(setOpenResale, openResale)}
                sx={{
                  justifyContent: "space-between",
                  textTransform: "none",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#00334E",
                  py: 1.2,
                }}
              >
                Resale
                <ArrowForwardIosIcon
                  sx={{
                    transform: openResale ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                    fontSize: 16,
                  }}
                />
              </Button>
              <Collapse in={openResale} timeout="auto" unmountOnExit>
                <Box sx={{ pl: 2, pt: 1 }}>
                  {/* Browse Refurbished Inventory */}
                  <Typography sx={{ ...typography.h4, color: "#AE5609", fontWeight: 700, fontSize: "18px", mb: 1 }}>
                    Browse Refurbished Inventory
                  </Typography>
                  <Typography sx={{ ...typography.bodyBase, color: "#111B2D", mb: 0.5 }}>Circular Magnets</Typography>
                  <Typography sx={{ ...typography.bodyBase, color: "#111B2D", mb: 1.5 }}>Rectangular Magnets</Typography>

                  {/* Sell / Exchange Your Magnet */}
                  <Typography sx={{ ...typography.h4, color: "#AE5609", fontWeight: 700, fontSize: "18px", mb: 1 }}>
                    Sell / Exchange Your Magnet
                  </Typography>
                  <Typography sx={{ ...typography.bodyBase, color: "#111B2D", mb: 0.5 }}>Permanent Magnet</Typography>
                  <Typography sx={{ ...typography.bodyBase, color: "#111B2D", mb: 1.5 }}>Permanent Magnet</Typography>

                  {/* Overband */}
                  <Typography sx={{ ...typography.h4, color: "#AE5609", fontWeight: 700, fontSize: "18px", mb: 1 }}>
                    Overband
                  </Typography>
                  <Typography sx={{ ...typography.bodyBase, color: "#111B2D", mb: 0.5 }}>Permanent Magnet</Typography>
                  <Typography sx={{ ...typography.bodyBase, color: "#111B2D", mb: 1.5 }}>Permanent Magnet</Typography>

                  {/* Rectangle Magnet */}
                  <Typography sx={{ ...typography.h4, color: "#AE5609", fontWeight: 700, fontSize: "18px", mb: 1 }}>
                    Rectangle Magnet
                  </Typography>
                  <Typography sx={{ ...typography.bodyBase, color: "#111B2D", mb: 0.5, }}>
                    Permanent Magnet
                  </Typography>
                  <Typography sx={{ color: "#111B2D", mb: 1.5, ...typography.bodyBase }}>Permanent Magnet</Typography>

                  {/* Image Card */}
                  <Card
                    sx={{
                      borderRadius: 2,
                      boxShadow: 1,
                      mb: 2,
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={imgserv}
                      alt="resale"
                      sx={{ height: 120, objectFit: "cover" }}
                    />
                    <CardContent sx={{ py: 1 }}>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "16px",
                          color: "#111B2D",
                        }}
                      >
                        It’s more than Magnets
                      </Typography>
                    </CardContent>
                  </Card>

                  {/* ROI Calculators */}
                  <Typography
                    sx={{
                      color: "#AE5609",
                      fontWeight: 600,
                      fontSize: "18px",
                      mb: 1,
                    }}
                  >
                    ROI Calculators
                  </Typography>
                  {["Rent Vs Replace?", "Rent Vs Replace?", "Rent Vs Replace?"].map((item, i) => (
                    <Typography key={i} sx={{ color: "#111B2D", mb: 0.8 }}>
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Collapse>
            </Box>

            {/* Contact */}
            <Box sx={{ borderBottom: "1px solid #eee" }}>
              <Button
                fullWidth
                onClick={() => toggleMenu(setOpenContact, openContact)}
                sx={{
                  justifyContent: "space-between",
                  textTransform: "none",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#00334E",
                  py: 1.2,
                }}
              >
                Contact
                <ArrowForwardIosIcon
                  sx={{
                    transform: openContact ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                    fontSize: 16,
                  }}
                />
              </Button>

              <Collapse in={openContact} timeout="auto" unmountOnExit>
                <Box sx={{ pl: 2, pt: 1 }}>
                  {/* Request Quote / Book Visit */}
                  <Typography sx={{ ...typography.h4, color: "#AE5609", fontWeight: 700, fontSize: "18px", mb: 1 }}>
                    Request a Quote
                  </Typography>
                  <Typography sx={{ ...typography.bodyBase, color: "#111B2D", mb: 0.5 }}>Book a Site Visit</Typography>
                  <Typography
                    sx={{
                      color: "#00334E",
                      textDecoration: "underline",
                      mb: 0.5,
                      ...typography.bodyBase
                    }}
                  >
                    contact@lift.agency
                  </Typography>
                  <Typography
                    sx={{
                      color: "#00334E",
                      textDecoration: "underline",
                      mb: 1.5,
                      ...typography.bodyBase
                    }}
                  >
                    (123) 456-7890
                  </Typography>

                  {/* WhatsApp */}
                  <Typography sx={{ ...typography.h4, color: "#AE5609", fontWeight: 700, fontSize: "18px", mb: 1 }}>
                    WhatsApp an Engineer
                  </Typography>

                  {/* Image Card */}
                  <Card
                    sx={{
                      borderRadius: 2,
                      boxShadow: 1,
                      mb: 2,
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={imgserv}
                      alt="contact"
                      sx={{ height: 120, objectFit: "cover" }}
                    />
                    <CardContent sx={{ py: 1 }}>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "16px",
                          color: "#111B2D",
                          ...typography.bodyBase
                        }}
                      >
                        It’s more than Magnets
                      </Typography>
                    </CardContent>
                  </Card>

                  {/* ROI Calculators */}
                  <Typography
                    sx={{
                      color: "#AE5609",
                      fontWeight: 600,
                      fontSize: "18px",
                      mb: 1,
                      ...typography.h4
                    }}
                  >
                    ROI Calculators
                  </Typography>
                  {["Rent Vs Replace?", "Rent Vs Replace?", "Rent Vs Replace?"].map((item, i) => (
                    <Typography key={i} sx={{ color: "#111B2D", mb: 0.8, ...typography.bodyBase }}>
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Collapse>
            </Box>

            {/* More */}
            <Box sx={{ borderBottom: "1px solid #eee" }}>
              <Button
                fullWidth
                onClick={() => toggleMenu(setOpenMore, openMore)}
                sx={{
                  justifyContent: "space-between",
                  textTransform: "none",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#00334E",
                  py: 1.2,

                }}
              >
                More
                <ArrowForwardIosIcon
                  sx={{
                    transform: openMore ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                    fontSize: 16,
                  }}
                />
              </Button>

              <Collapse in={openMore} timeout="auto" unmountOnExit>
                <Box sx={{ pl: 2, pt: 1 }}>
                  {/* ROI Calculator */}
                  <Typography sx={{ ...typography.h4, color: "#AE5609", fontWeight: 700, fontSize: "18px", mb: 1 }}>
                    ROI Calculator
                  </Typography>
                  {["Repair vs Replace", "Rental vs Buy", "AMC vs Reactive."].map((item, i) => (
                    <Typography key={i} sx={{ color: "#111B2D", mb: 0.8, ...typography.bodyBase }}>
                      {item}
                    </Typography>
                  ))}

                  {/* Downloads */}
                  <Typography sx={{ ...typography.h4, color: "#AE5609", fontWeight: 700, fontSize: "18px", mt: 2, mb: 1 }}>
                    Downloads
                  </Typography>
                  {["Safety labels", "Electro-Lifting Magnet"].map((item, i) => (
                    <Typography key={i} sx={{ color: "#111B2D", mb: 0.8, ...typography.bodyBase }}>
                      {item}
                    </Typography>
                  ))}

                  {/* Case Studies */}
                  <Typography sx={{ ...typography.h4, color: "#AE5609", fontWeight: 700, fontSize: "18px", mt: 2, mb: 1 }}>
                    Case Studies
                  </Typography>
                  {["Before and After", "Turn Around Time (TAT)"].map((item, i) => (
                    <Typography key={i} sx={{ color: "#111B2D", mb: 0.8, ...typography.bodyBase }}>
                      {item}
                    </Typography>
                  ))}

                  {/* Standalone Links */}
                  {["FAQ", "About Us", "Legal"].map((item, i) => (
                    <Typography
                      key={i}
                      sx={{
                        color: "#AE5609",
                        fontWeight: 600,
                        fontSize: "18px",
                        mt: 2,
                        mb: 0.8,
                        ...typography.bodyBase
                      }}
                    >
                      {item}
                    </Typography>
                  ))}

                  {/* Image Card */}
                  <Card
                    sx={{
                      borderRadius: 2,
                      boxShadow: 1,
                      my: 2,
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={imgserv}
                      alt="more"
                      sx={{ height: 120, objectFit: "cover" }}
                    />
                    <CardContent sx={{ py: 1 }}>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "16px",
                          color: "#111B2D",
                          ...typography.bodyBase
                        }}
                      >
                        It’s more than Magnets
                      </Typography>
                    </CardContent>
                  </Card>

                  {/* ROI Calculators (again, optional if needed) */}
                  <Typography
                    sx={{
                      color: "#AE5609",
                      fontWeight: 600,
                      fontSize: "18px",
                      mb: 1,
                      ...typography.h4
                    }}
                  >
                    ROI Calculators
                  </Typography>
                  {["Rent Vs Replace?", "Rent Vs Replace?", "Rent Vs Replace?"].map((item, i) => (
                    <Typography key={i} sx={{ color: "#111B2D", mb: 0.8, ...typography.bodyBase }}>
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Collapse>
            </Box>

          </Box>
        </Collapse>
      </TopbarContainer>
    </TopbarRoot>
  );

};



const ServicesPopoverContent = () => {

  const navigate = useNavigate();

  return (
    <Box sx={{ position: "relative" }}>
      {/* Blue line before Grid */}


      <Grid container spacing={0}>
        {/* Column 1 */}
        <Grid item xs={4}>
          {/* Row: Electromagnet Repair + Rectangular Magnet */}
          <Box
            sx={{
              width: 449,
              display: "flex",
              flexDirection: "row",
              gap: 3,
              alignItems: "flex-start",
            }}
          >
            {/* Electromagnet Repair */}
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
              <Typography sx={{ ...typography.h4, color: "#AE5609" }}>
                Electromagnet
                <br /> Repair
              </Typography>

              <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
                Coil Rewinds
              </Typography>
              <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
                Terminals
              </Typography>
            </Box>

            {/* Rectangular Magnet */}
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
              <Typography sx={{ ...typography.h4, color: "#AE5609" }}>
                Rectangular
                <br /> Magnet
              </Typography>

              <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
                Face Machining
              </Typography>
              <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
                Pole-Shoe Rework
              </Typography>
            </Box>
          </Box>

          {/* Suspension Magnet Service */}
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
            <Typography sx={{ ...typography.h4, color: "#AE5609" }}>
              Suspension Magnet
              <br /> Service (Oil / Air-cooled)
            </Typography>

            <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
              Overhaul
            </Typography>
            <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
              Oil Changes
            </Typography>
          </Box>
        </Grid>

        {/* Column 2 */}
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
            <Typography sx={{ ...typography.h4, color: "#AE5609" }}>
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

            <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
              Whatsapp
            </Typography>
          </Box>
        </Grid>

        {/* Column 3 + 4 */}
        <Grid
          item
          xs={5}
          display="flex"
          flexDirection="row"
          alignItems="flex-start"
          gap={2}
        >
          {/* Service Card */}
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <ServiceCard imgserv={imgserv} />
          </Box>

          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

          {/* ROI Calculators */}
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography
              sx={{
                color: "#AE5609",
                fontFamily: "Space Grotesk",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "130%",
                mb: 2,
                cursor: 'pointer'
              }}
              onClick={() => navigate("./repair-replace/roi-cal")}>
              ROI Calculators
            </Typography>

            <Typography
              sx={{
                fontFamily: "Fira Sans",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "160%",
                color: "#111B2D",
                mb: 1,
              }}
            >
              Rent Vs Replace?
            </Typography>
            <Typography
              sx={{
                fontFamily: "Fira Sans",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "160%",
                color: "#111B2D",
                mb: 1,
              }}
            >
              Rent Vs Replace?
            </Typography>
            <Typography
              sx={{
                fontFamily: "Fira Sans",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "160%",
                color: "#111B2D",
              }}
            >
              Rent Vs Replace?
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const RentalPopoverContent = () => {

  const navigate = useNavigate();

  return (
    <Grid container spacing={4} alignItems="flex-start">
      {/* Column 1 */}
      <Grid item xs={3}>
        <Box display="flex" flexDirection="column" gap={4}>
          {/* Circular Magnet */}
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography
              sx={{ ...typography.h4, color: "#AE5609", cursor: "pointer" }}
              onClick={() => navigate("./home/CheckAvailabilty")}
            >
              Circular Magnet
            </Typography>
            <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
              Permanent Magnet
            </Typography>
            <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
              Electro-Lifting Magnet
            </Typography>
          </Box>

          {/* Rectangle Magnet */}
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography sx={{ ...typography.h4, color: "#AE5609" }}>
              Rectangle Magnet
            </Typography>
            <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
              Permanent Magnet
            </Typography>
            <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
              Electro-Lifting Magnet
            </Typography>

            <BrowseRentals />
          </Box>
        </Box>
      </Grid>

      {/* Column 2 */}
      <Grid item xs={2.5}>
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography sx={{ ...typography.h4, color: "#AE5609" }}>
            Overband
          </Typography>
          <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
            Permanent Magnet
          </Typography>
          <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
            Permanent Magnet
          </Typography>
        </Box>
      </Grid>

      {/* Column 3 */}
      <Grid item xs={2.5}>
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography sx={{ ...typography.h4, color: "#AE5609" }}>
            Rectangle Magnet
          </Typography>
          <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
            Permanent Magnet
          </Typography>
          <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
            Electro-Lifting Magnet
          </Typography>
        </Box>
      </Grid>

      {/* Column 4 */}
      <Grid item xs={4} display="flex" gap={3}>
        {/* Image Card */}
        <ServiceCard imgserv={imgserv} />

        {/* Divider + ROI */}
        <Divider orientation="vertical" flexItem />

        <Box display="flex" flexDirection="column" alignItems="flex-start" ml={2}>
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
              mb: 2,
            }}
            onClick={() => navigate("./repair-replace/roi-cal")}>
            ROI Calculators
          </Typography>

          {["Rent Vs Replace?", "Rent Vs Replace?", "Rent Vs Replace?"].map(
            (item, i) => (
              <Typography
                key={i}
                sx={{
                  fontFamily: "Fira Sans",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "160%",
                  color: "#111B2D",
                  mb: 1,
                }}
              >
                {item}
              </Typography>
            )
          )}
        </Box>
      </Grid>
    </Grid>

  );
};

const ResalePopoverContent = () => {
  const navigate = useNavigate();
  return (
    <Grid container spacing={4} alignItems="flex-start">
      {/* Single Column */}
      <Grid item xs={4}>
        {/* Row: Electromagnet Repair + Rectangular Magnet */}
        <Box
          sx={{
            width: 449,
            display: "flex",
            flexDirection: "row",
            gap: 3, // space between the two
            alignItems: "flex-start",
            paddingLeft: '25px',
            mt: 2
          }}
        >
          {/* Electromagnet Repair */}
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
            <Typography sx={{ ...typography.h4, color: "#AE5609", cursor: 'pointer' }}
              onClick={() => navigate("/home/RefurbishedElectromagnet")}>
              Browse Refurbished
              <br /> Inventory
            </Typography>

            <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
              Circular Magnets
            </Typography>

            <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
              Rectangular Magnets
            </Typography>
          </Box>

          {/* Rectangular Magnet */}
          <Box
            sx={{
              width: 140,
              height: 144,
              display: "flex",
              paddingBottom: '25px',
              flexDirection: "column",
              gap: 1.5,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Typography sx={{ ...typography.h4, color: "#AE5609" }}>
              Overband
            </Typography>

            <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
              Permanent Magnet
            </Typography>

            <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
              Permanent Magnet
            </Typography>
          </Box>
        </Box>

        {/* Suspension Magnet Service */}
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
            paddingLeft: '25px'
          }}
        >
          <Typography sx={{ ...typography.h4, color: "#AE5609" }}>
            Sell / Exchange Your <br /> Magnet
          </Typography>

          <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
            Permanent Magnet
          </Typography>

          <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
            Permanent Magnet
          </Typography>
        </Box>
      </Grid>


      {/* Column 2 */}
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
              ...typography.h4,
              color: "#AE5609",
            }}
          >
            Rectangle <br></br>Magnet
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
            Permanent Magnet
          </Typography>

          <Typography
            sx={{
              ...typography.bodyBase,
              color: "#111B2D",
            }}
          >
            Permanent Magnet
          </Typography>
        </Box>
      </Grid>


      <Grid item xs={5} display="flex" flexDirection="row" alignItems="flex-start" gap={2}>
        {/* Column 3 */}
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <ServiceCard imgserv={imgserv} />
        </Box>

        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        {/* Column 4 */}
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
            onClick={() => navigate("./repair-replace/roi-cal")}>
            ROI Calculators
          </Typography>

          <Typography sx={{ ...typography.bodyBase, fontWeight: 400, fontSize: "18px", lineHeight: "160%", color: "#111B2D", mb: 1 }}>
            Rent Vs Replace?
          </Typography>
          <Typography sx={{ ...typography.bodyBase, fontWeight: 400, fontSize: "18px", lineHeight: "160%", color: "#111B2D", mb: 1 }}>
            Rent Vs Replace?
          </Typography>
          <Typography sx={{ ...typography.bodyBase, fontWeight: 400, fontSize: "18px", lineHeight: "160%", color: "#111B2D" }}>
            Rent Vs Replace?
          </Typography>
        </Box>
      </Grid>
    </Grid>

  );
};


const ContactPopoverContent = () => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={1} sx={{ px: 1, py: 2 }}>
      {/* Column 1 */}
      <Grid item xs={3}>
        <Box display="flex" flexDirection="column" gap={0.8} sx={{ paddingLeft: '70px' }}>
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "120%",
              ...typography.h4
            }}
          >
            Request a Quote
          </Typography>

          <Typography
            component={Link}
            to="/contact-us"
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "120%",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
              ...typography.h4
            }}
          >
            Book a Site Visit
          </Typography>

          <Typography
            sx={{
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "120%",
              color: "#111B2D",
              borderBottom: "1px solid #1E88E5",
              width: "fit-content",
              ...typography.h4
            }}
          >
            contact@lift.agency
          </Typography>

          <Typography
            sx={{
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "120%",
              color: "#111B2D",
              borderBottom: "1px solid #1E88E5",
              width: "fit-content",
              ...typography.h4
            }}
          >
            (123) 456-7890
          </Typography>
        </Box>
      </Grid>

      {/* Column 2 */}
      <Grid item xs={3}>
        <Box display="flex" flexDirection="column" gap={0.8}>
          <Typography
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "120%",
              ...typography.h4
            }}
          >
            WhatsApp an Engineer
          </Typography>
        </Box>
      </Grid>

      {/* Column 3 */}
      <Grid item xs={6}>
        <Box display="flex" flexDirection="row" alignItems="flex-start" gap={1}>
          {/* Image Card */}
          <Box>
            <ServiceCard imgserv={imgserv} />
          </Box>

          {/* Divider */}
          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          {/* ROI Calculators */}
          <Box display="flex" flexDirection="column" gap={0.5}>
            <Typography
              sx={{
                color: "#AE5609",
                fontFamily: "Space Grotesk",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "120%",
                mb: 0.5,
                ...typography.h4
              }}
              onClick={() => navigate("./repair-replace/roi-cal")}>
              ROI Calculators
            </Typography>

            {["Rent Vs Replace?", "Rent Vs Replace?", "Rent Vs Replace?"].map(
              (item, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontFamily: "Fira Sans",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "140%",
                    color: "#111B2D",
                    ...typography.bodyBase
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
  const navigate = useNavigate();
  return (
    <Grid container spacing={0}>
      {/* Column 1 */}
      <Grid item xs={4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "flex-start",
          }}
        >
          {/* ROI Calculator */}
          <Box display="flex" flexDirection="column" gap={1.2}>
            <Typography sx={{ ...typography.h4, color: "#AE5609" }}>
              ROI Calculator
            </Typography>
            <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
              Repair vs Replace
            </Typography>
            <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
              Rental vs Buy
            </Typography>
            <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
              AMC vs Reactive.
            </Typography>
          </Box>

          {/* Downloads */}
          <Box display="flex" flexDirection="column" gap={1.2}>
            <Typography sx={{ ...typography.h4, color: "#AE5609" }}>
              Downloads
            </Typography>
            <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
              Safety labels
            </Typography>
            <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
              Electro-Lifting Magnet
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* Column 2 */}
      <Grid item xs={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "flex-start",
          }}
        >
          {/* Case Studies */}
          <Box display="flex" flexDirection="column" gap={1.2}>
            <Typography sx={{ ...typography.h4, color: "#AE5609" }}>
              Case Studies
            </Typography>
            <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
              Before and After
            </Typography>
            <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>
              Turn Around Time (TAT)
            </Typography>
          </Box>

          {/* FAQ / About Us / Legal */}
          <Box display="flex" flexDirection="column" gap={1.2}>
            <Typography sx={{ ...typography.h4, color: "#AE5609" }}>
              FAQ
            </Typography>
            <Typography sx={{ ...typography.h4, color: "#AE5609", cursor: 'pointer' }}
              onClick={() => navigate("/about-us")}>
              About Us
            </Typography>
            <Typography sx={{ ...typography.h4, color: "#AE5609", cursor: 'pointer' }}
              onClick={() => navigate("/legal")}> Legal
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* Column 3 */}
      <Grid
        item
        xs={5}
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        gap={2}
      >
        {/* Image Card */}
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <ServiceCard imgserv={imgserv} />
        </Box>

        {/* Divider */}
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

        {/* ROI Calculators */}
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
            onClick={() => navigate("./repair-replace/roi-cal")}>
            ROI Calculators
          </Typography>

          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
              color: "#111B2D",
              mb: 1,
            }}
          >
            Rent Vs Replace?
          </Typography>
          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
              color: "#111B2D",
              mb: 1,
            }}
          >
            Rent Vs Replace?
          </Typography>
          <Typography
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
              color: "#111B2D",
            }}
          >
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
      onClick={() => navigate("./home/Rentals")} // replace with your route
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
        width: 223,             // card width
        height: 307,            // card height
        borderRadius: 2,        // theme radius (≈ 8px)
        boxShadow: 3,           // shadow depth
        overflow: "hidden",     // clip children to rounded corners
        opacity: 1,
        transform: "rotate(0deg)", // angle: 0deg
        display: "flex",
        flexDirection: "column",
        bgcolor: "#F7F9FC"
      }}
    >

      {/* Image */}
      <CardMedia
        component="img"
        image={imgserv}
        alt="promo"
        sx={{
          width: 223,
          height: 190,
          // p: 1.5,              // padding (12px)
          objectFit: "cover",
          borderRadius: 2,     // theme spacing rounding (~8px)
          opacity: 1,
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
          It's more than Magnets
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