import React, { useState, useRef, useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  Grid,
  Popover,
  Typography,
  Divider,
  useTheme,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import imgserv from "../../../../assets/topbarservice1.jpg";
import EditIcon from "@mui/icons-material/Edit";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, useNavigate } from "react-router-dom";
import { typography } from "app/utils/constant";
import { themeShadows } from "app/components/baseTheme/themeColors";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from "@mui/material/Collapse";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { CircularProgress } from "@mui/material";

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
      top: "25px",
      left: 0,
      backgroundColor: "#112B49",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      top: "54px",
      left: "50%",
      transform: "translateX(-50%)",
      width: 0,
      height: 0,
      borderLeft: "8px solid transparent",
      borderRight: "8px solid transparent",
      borderTop: "8px solid #112B49",
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
  const [role, setRole] = useState("");
  const navigate = useNavigate();



  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const storedRole = localStorage.getItem("role");
    setIsLoggedIn(loggedIn);
    if (storedRole) setRole(storedRole);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    setRole("");
    navigate("/");
  };

  const handleLogin = () => navigate("/login");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleOpen = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menu);
  };

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
    setMobileMenuOpen(false);
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

  // ─────────────────────────────────────────────────────────────────
  // ADDED: Mobile dynamic data states — mirrors desktop popover logic
  // ─────────────────────────────────────────────────────────────────
  const [mobileServiceCards, setMobileServiceCards] = useState([]);
  const [mobileRentalCards, setMobileRentalCards] = useState([]);
  const [mobileResaleTitles, setMobileResaleTitles] = useState([]);

  // Services — same fetch + parse as ServicesPopoverContent
  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}?contentId=C013`)
      .then((res) => res.json())
      .then((data) => {
        const rsKeys = Object.keys(data)
          .filter((k) => k.startsWith("RS"))
          .sort(
            (a, b) =>
              parseInt(a.replace("RS", "")) - parseInt(b.replace("RS", ""))
          );

        const titles = [];
        for (let i = 0; i < rsKeys.length; i++) {
          const image = data[rsKeys[i]];
          const title = data[rsKeys[i + 1]];
          const faults = data[rsKeys[i + 4]];
          const service = data[rsKeys[i + 5]];

          if (
            image &&
            typeof title === "string" &&
            Array.isArray(faults) &&
            typeof service === "string" &&
            service.toLowerCase().includes("service")
          ) {
            titles.push({ title, imageId: rsKeys[i] });
            i += 8;
          }
        }
        setMobileServiceCards(titles);
      })
      .catch((err) => console.error(err));
  }, []);

  // Rental — same fetch + getAllTitles helper as RentalPopoverContent
  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}?contentId=C016`)
      .then((res) => res.json())
      .then((data) => {
        setMobileRentalCards(getAllTitles(data));
      })
      .catch((err) => console.error(err));
  }, []);

  // Resale — same fetch + same title keys as ResalePopoverContent
  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}?contentId=RefurbishedMagnet`)
      .then((res) => res.json())
      .then((data) => {
        const titleKeys = [
          "RM1011", "RM1017", "RM1023", "RM1029", "RM1035", "RM1041",
        ];
        const result = titleKeys
          .filter((key) => data[key])
          .map((key) => ({ title: data[key], id: key }));
        setMobileResaleTitles(result);
      })
      .catch((err) => console.error(err));
  }, []);
  // ─────────────────────────────────────────────────────────────────



  //For contact Editing
  const [content, setContent] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);



  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}?contentId=Home`)
      .then((res) => res.json())
      .then((data) => setContent(data || {}))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  const handleEdit = (contentTextID, type = "T") => {
    navigate(`/CmsEditor?contentId=Home&contentTextID=${contentTextID}&contentType=${type}`);
  };

  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  const EditIconButton = ({ id, type = "T" }) =>
    isAdmin ? (
      <IconButton
        size="small"
        onClick={() => handleEdit(id, type)}
        sx={{ ml: 1, p: 0.5, borderRadius: "50%", backgroundColor: "#f0f0f0", color: "#1C2D4B", border: "1px solid #ccc", transition: "all 0.2s ease", "&:hover": { backgroundColor: "#e0e0e0", color: "#070808ff" } }}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    ) : null;

  if (!content) return null;



  const toggleMenu = (menuSetter, currentValue) => {
    setOpenServices(false);
    setOpenRental(false);
    setOpenResale(false);
    setOpenContact(false);
    setOpenMore(false);
    menuSetter(!currentValue);
  };

  if (!isMobile) {
    // Desktop view — unchanged
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
            height='100%'
            width="100%"
            px={5}
          >
            <Box display="flex" alignItems="center">
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
                <Box sx={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
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

              <Box sx={{ position: "relative" }} onMouseLeave={handleClose}>
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
                        onMouseEnter={(e) => handleOpen(e, menu)}
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

                      <Popover
                        open={Boolean(activeMenu)}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                        PaperProps={{
                          onMouseEnter: () => { },
                          onMouseLeave: handleClose,
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
                          {activeMenu === "Services" && <ServicesPopoverContent onClose={handleClose} />}
                          {activeMenu === "Rental" && <RentalPopoverContent onClose={handleClose} />}
                          {activeMenu === "Resale" && <ResalePopoverContent onClose={handleClose} />}
                          {activeMenu === "Contact" && <ContactPopoverContent onClose={handleClose} />}
                          {activeMenu === "More" && <MorePopoverContent onClose={handleClose} />}
                        </Box>
                      </Popover>
                    </React.Fragment>
                  ))}

                  <Box>
                    {isLoggedIn && (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          color: "#131313",
                          ...typography.h5,
                          fontWeight: 500,
                          fontSize: "20px",
                          textTransform: "none",
                          position: "relative",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#131313",
                            ...typography.h5,
                            fontWeight: 500,
                            fontSize: "20px",
                            textTransform: "none",
                          }}
                        >
                          {role || "User"}
                        </Typography>
                        <IconButton
                          onClick={handleLogout}
                          sx={{
                            "&:hover": { color: "#00334E" },
                            p: 0,
                            border: "2px solid #835454",
                            padding: "2px",
                            color: "#ed8686",
                          }}
                        >
                          <LogoutOutlinedIcon sx={{ fontSize: "26px" }} />
                        </IconButton>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </TopbarContainer>
      </TopbarRoot>
    );
  }

  const mobileNavigate = (path) => {
    setMobileMenuOpen(false);
    setOpenRental(false);
    setOpenServices(false);
    setOpenResale(false);
    setOpenContact(false);
    setOpenMore(false);
    navigate(path);
  };

  const links = [
    { label: "FAQ" },
    { label: "About Us", path: "/about-us" },
    { label: "Legal", path: "/legal" },
  ];


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
              <Typography sx={{ fontFamily: "Fira Sans", fontWeight: 700, fontSize: "28px", color: "#111B2D" }}>
                ReFlux
              </Typography>
              <Typography sx={{ fontFamily: "Fira Sans", fontWeight: 400, fontSize: "15px", letterSpacing: "4px", color: "#111B2D", mt: "-4px" }}>
                MAGNETS
              </Typography>
            </Box>
          </Box>

          <IconButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>

        {/* Slide-down Mobile Menu */}
        <Collapse in={mobileMenuOpen} timeout={300} unmountOnExit>
          <Box
            sx={{
              width: "100vw",
              position: "fixed",
              top: 80,
              left: 0,
              backgroundColor: "#fff",
              borderBottomLeftRadius: "22px",
              borderBottomRightRadius: "22px",
              boxShadow: "0px 6px 25px rgba(0,0,0,0.15)",
              pt: 2,
              pb: 3,
              px: 2,
              zIndex: 2000,
              maxHeight: "85vh",
              overflowY: "auto",
            }}
          >

            {/* ══════════════════════════════════════════════════════
                SERVICES — now dynamic (same titles as desktop)
            ══════════════════════════════════════════════════════ */}
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

                  {/* Static section header — matches desktop */}
                  <Typography
                    sx={{
                      ...typography.h4,
                      color: "#AE5609",
                      fontWeight: 700,
                      fontSize: "18px",
                      mb: 1,
                    }}
                  >
                    Electromagnet Repair and Service
                  </Typography>

                  {/* Dynamic titles — same data as ServicesPopoverContent */}
                  {mobileServiceCards.map((card, index) => (
                    <Typography
                      key={index}
                      sx={{
                        ...typography.bodyBase,
                        color: "#111B2D",
                        mb: 0.5,
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        navigate("/home/RepairServices", {
                          state: { scrollTo: card.imageId, time: Date.now() },
                        });
                        setMobileMenuOpen(false);
                        setOpenServices(false);
                      }}
                    >
                      {card.title}
                    </Typography>
                  ))}

                  {/* ROI Calculators — unchanged from original */}
                  <Typography
                    sx={{
                      color: "#AE5609",
                      fontWeight: 600,
                      fontSize: "18px",
                      mb: 1,
                      mt: 2,
                      ...typography.h4,
                      cursor: "pointer",
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

            {/* ══════════════════════════════════════════════════════
                RENTAL — now dynamic (same titles as desktop)
            ══════════════════════════════════════════════════════ */}
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

                  {/* Static section header — matches desktop */}
                  <Typography
                    sx={{
                      ...typography.h4,
                      color: "#AE5609",
                      fontWeight: 700,
                      fontSize: "18px",
                      mb: 1,
                    }}
                  >
                    Rental Services
                  </Typography>

                  {/* Dynamic titles — same data as RentalPopoverContent */}
                  {mobileRentalCards.map((card, index) => (
                    <Typography
                      key={index}
                      sx={{
                        ...typography.bodyBase,
                        color: "#111B2D",
                        mb: 0.5,
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        sessionStorage.setItem("scrollToSection", card.id);

                        if (window.location.pathname === "/home/rentals") {
                          const el = document.getElementById(card.id);
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        } else {
                          navigate("/home/rentals");
                        }

                        setMobileMenuOpen(false);
                        setOpenRental(false);
                      }}
                    >
                      {card.title}
                    </Typography>
                  ))}

                  {/* Browse All Rentals — unchanged from original */}
                  <Typography
                    sx={{
                      color: "#00334E",
                      fontWeight: 600,
                      fontSize: "16px",
                      mb: 2,
                      mt: 1,
                      textDecoration: "underline",
                      cursor: "pointer",
                      ...typography.h4,
                    }}
                    onClick={() => mobileNavigate("/home/rentals")}
                  >
                    Browse All Rentals →
                  </Typography>

                  {/* ROI Calculators — unchanged from original */}
                  <Typography
                    sx={{
                      color: "#AE5609",
                      fontWeight: 600,
                      fontSize: "18px",
                      mb: 1,
                      ...typography.h4,
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

            {/* ══════════════════════════════════════════════════════
                RESALE — now dynamic (same titles as desktop)
            ══════════════════════════════════════════════════════ */}
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

                  {/* Static section header — matches desktop */}
                  <Typography
                    sx={{
                      ...typography.h4,
                      color: "#AE5609",
                      fontWeight: 700,
                      fontSize: "18px",
                      mb: 1,
                      cursor: "pointer",
                    }}
                    onClick={() => mobileNavigate("./home/RefurbishedElectromagnet")}
                  >
                    Browse Refurbished Inventory
                  </Typography>

                  {/* Dynamic titles — same data as ResalePopoverContent */}
                  {mobileResaleTitles.map((item, index) => (
                    <Typography
                      key={index}
                      sx={{
                        ...typography.bodyBase,
                        color: "#111B2D",
                        mb: 0.5,
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        sessionStorage.setItem("scrollToSection", item.id);
                        navigate("/home/RefurbishedElectromagnet");
                        setMobileMenuOpen(false);
                        setOpenResale(false);
                      }}
                    >
                      {item.title}
                    </Typography>
                  ))}

                  {/* ROI Calculators — unchanged from original */}
                  <Typography
                    sx={{
                      color: "#AE5609",
                      fontWeight: 600,
                      fontSize: "18px",
                      mb: 1,
                      mt: 2,
                      cursor: "pointer",
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

            {/* ══════════════════════════════════════════════════════
                CONTACT — unchanged from original
            ══════════════════════════════════════════════════════ */}
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
                  <Typography sx={{ ...typography.h4, color: "#AE5609", fontWeight: 700, fontSize: "18px", mb: 1 }}>
                    Request a Quote
                  </Typography>
                  <Typography
                    sx={{ ...typography.bodyBase, color: "#111B2D", mb: 0.5, cursor: "pointer" }}
                    onClick={() => mobileNavigate("./contact-us")}
                  >
                    Book a Site Visit
                  </Typography>
                  <Typography sx={{ color: "#00334E", textDecoration: "underline", mb: 0.5, ...typography.bodyBase }}>
                    {content.HMCONTACT}<EditIconButton id="HMCONTACT" />
                  </Typography>
                  <Typography sx={{ color: "#00334E", textDecoration: "underline", mb: 1.5, ...typography.bodyBase }}>
                    {content.HMPHONE}<EditIconButton id="HMPHONE" />
                  </Typography>
                  <Typography sx={{ ...typography.h4, color: "#AE5609", fontWeight: 700, fontSize: "18px", mb: 1 }}>
                    WhatsApp an Engineer
                  </Typography>
                  <Card sx={{ borderRadius: 2, boxShadow: 1, mb: 2, overflow: "hidden" }}>
                    <CardMedia component="img" image={imgserv} alt="contact" sx={{ height: 120, objectFit: "cover" }} />
                    <CardContent sx={{ py: 1 }}>
                      <Typography sx={{ fontWeight: 600, fontSize: "16px", color: "#111B2D", ...typography.bodyBase }}>
                        It's more than Magnets
                      </Typography>
                    </CardContent>
                  </Card>
                  <Typography sx={{ color: "#AE5609", fontWeight: 600, fontSize: "18px", mb: 1, ...typography.h4, cursor: "pointer" }}>
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

            {/* ══════════════════════════════════════════════════════
                MORE — unchanged from original
            ══════════════════════════════════════════════════════ */}
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
                  <Typography sx={{ ...typography.h4, color: "#AE5609", fontWeight: 700, fontSize: "18px", mb: 1 }}>
                    ROI Calculator
                  </Typography>
                  {["Repair vs Replace", "Rental vs Buy", "AMC vs Reactive."].map((item, i) => (
                    <Typography key={i} sx={{ color: "#111B2D", mb: 0.8, ...typography.bodyBase }}>
                      {item}
                    </Typography>
                  ))}
                  <Typography sx={{ ...typography.h4, color: "#AE5609", fontWeight: 700, fontSize: "18px", mt: 2, mb: 1 }}>
                    Downloads
                  </Typography>
                  {["Safety labels", "Electro-Lifting Magnet"].map((item, i) => (
                    <Typography key={i} sx={{ color: "#111B2D", mb: 0.8, ...typography.bodyBase }}>
                      {item}
                    </Typography>
                  ))}
                  <Typography sx={{ ...typography.h4, color: "#AE5609", fontWeight: 700, fontSize: "18px", mt: 2, mb: 1 }}>
                    Case Studies
                  </Typography>
                  {["Before and After", "Turn Around Time (TAT)"].map((item, i) => (
                    <Typography key={i} sx={{ color: "#111B2D", mb: 0.8, ...typography.bodyBase }}>
                      {item}
                    </Typography>
                  ))}
                  {links.map((item, i) => (
                    <Typography
                      key={i}
                      onClick={() => navigate(item.path)}
                      sx={{ color: "#AE5609", fontWeight: 600, fontSize: "18px", mt: 2, mb: 0.8, cursor: "pointer", ...typography.bodyBase }}
                    >
                      {item.label}
                    </Typography>
                  ))}
                  <Card sx={{ borderRadius: 2, boxShadow: 1, my: 2, overflow: "hidden" }}>
                    <CardMedia component="img" image={imgserv} alt="more" sx={{ height: 120, objectFit: "cover" }} />
                    <CardContent sx={{ py: 1 }}>
                      <Typography sx={{ fontWeight: 600, fontSize: "16px", color: "#111B2D", ...typography.bodyBase }}>
                        It's more than Magnets
                      </Typography>
                    </CardContent>
                  </Card>
                  <Typography sx={{ color: "#AE5609", fontWeight: 600, fontSize: "18px", mb: 1, ...typography.h4 }}>
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

            {/* Login / User Section — unchanged */}
            <Box sx={{ mt: 1 }}>
              {isLoggedIn ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 1,
                    py: 0.3,
                    backgroundColor: "#F8F9FA",
                    borderRadius: "12px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                  }}
                >
                  <Typography sx={{ color: "#111B2D", fontWeight: 600, fontSize: "18px" }}>
                    Admin
                  </Typography>
                  <IconButton onClick={handleLogout} sx={{ color: "#00334E" }}>
                    <LogoutOutlinedIcon sx={{ fontSize: 26 }} />
                  </IconButton>
                </Box>
              ) : (
                <Button
                  fullWidth
                  onClick={handleLogin}
                  sx={{
                    textTransform: "none",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#fff",
                    backgroundColor: "#00334E",
                    py: 0.4,
                    borderRadius: "12px",
                    "&:hover": { backgroundColor: "#002536" },
                  }}
                >
                  Login
                </Button>
              )}
            </Box>
          </Box>
        </Collapse>
      </TopbarContainer>
    </TopbarRoot>
  );
}

// ══════════════════════════════════════════════════════════════════════
// ALL DESKTOP POPOVER COMPONENTS — completely unchanged from original
// ══════════════════════════════════════════════════════════════════════

const ServicesPopoverContent = ({ onClose }) => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [headerTitles, setHeaderTitles] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const titles = cards.map((card) => card.title);
    setHeaderTitles(titles);
  }, [cards]);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_CMS_URL}?contentId=C013`)
      .then((res) => res.json())
      .then((data) => {
        const rsKeys = Object.keys(data)
          .filter((k) => k.startsWith("RS"))
          .sort(
            (a, b) =>
              parseInt(a.replace("RS", "")) - parseInt(b.replace("RS", ""))
          );

        const titles = [];
        for (let i = 0; i < rsKeys.length; i++) {
          const image = data[rsKeys[i]];
          const title = data[rsKeys[i + 1]];
          const faults = data[rsKeys[i + 4]];
          const service = data[rsKeys[i + 5]];

          if (
            image &&
            typeof title === "string" &&
            Array.isArray(faults) &&
            typeof service === "string" &&
            service.toLowerCase().includes("service")
          ) {
            titles.push({ title, imageId: rsKeys[i] });
            i += 8;
          }
        }
        setCards(titles);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      <Grid container spacing={0}>
        <Grid item xs={7}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography sx={{ ...typography.h4, color: "#AE5609" }}>
              Electromagnet Repair and Service
            </Typography>
            {loading ? (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <CircularProgress size={100} thickness={4} />
              </Box>
            ) : (
              cards.map((card, index) => (
                <Typography
                  key={index}
                  sx={{ ...typography.bodyBase, color: "#111B2D", cursor: "pointer" }}
                  onClick={() => {
                    navigate("/home/RepairServices", {
                      state: { scrollTo: card.imageId, time: Date.now() },
                    });
                    onClose && onClose();
                  }}
                >
                  {card.title}
                </Typography>
              ))
            )}
          </Box>
        </Grid>
        <Grid item xs={5} display="flex" flexDirection="row" alignItems="flex-start" gap={2}>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <ServiceCard imgserv={imgserv} />
          </Box>
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography sx={{ color: "#AE5609", fontFamily: "Space Grotesk", fontWeight: 400, fontSize: "24px", lineHeight: "130%", mb: 2 }}>
              ROI Calculators
            </Typography>
            {["Rent Vs Replace?", "Rent Vs Replace?", "Rent Vs Replace?"].map((item, i) => (
              <Typography key={i} sx={{ fontFamily: "Fira Sans", fontWeight: 400, fontSize: "18px", lineHeight: "160%", color: "#111B2D", mb: 1 }}>
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export const buildRentCards = (content) => {
  if (!content) return [];
  const out = [];
  const CARD_MIN = 2000;
  const CARD_MAX = 2999;
  const allKeys = Object.keys(content)
    .filter((k) => /^RE\d+$/.test(k))
    .map((k) => parseInt(k.replace("RE", ""), 10))
    .sort((a, b) => a - b);

  for (let id of allKeys) {
    if (id < CARD_MIN || id > CARD_MAX) continue;
    if (id % 10 !== 1) continue;
    const base = id;
    out.push({ title: content[`RE${base + 1}`], id: `RE${base}` });
  }
  return out;
};

const getAllTitles = (content) => {
  if (!content) return [];
  const staticCards = [
    { title: content.RE1003, id: "RE1002" },
    { title: content.RE1010, id: "RE1009" },
    { title: content.RE1017, id: "RE1016" },
  ];
  const dynamicCards = buildRentCards(content);
  return [...staticCards, ...dynamicCards].filter(
    (t) => t.title && t.title !== "New Rent Title"
  );
};

const RentalPopoverContent = ({ onClose }) => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (content) setCards(getAllTitles(content));
  }, [content]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}?contentId=C016`)
      .then((res) => res.json())
      .then((data) => setContent(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      <Grid container spacing={0}>
        <Grid item xs={7}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, alignItems: "flex-start" }}>
            <Typography sx={{ ...typography.h4, color: "#AE5609" }}>
              Rental Services
            </Typography>
            {loading ? (
              <Box
                sx={{
                  display: "flex",
                  ml: 20,
                  justifyContent: "center",   // horizontal center
                  alignItems: "center",       // vertical center
                  height: "100%",             // take full parent height
                  minHeight: "200px",         // 👈 important (gives space)
                }}
              >
                <CircularProgress size={100} thickness={4} />
              </Box>
            ) : (
              cards.map((card, index) => (
                <Typography
                  key={index}
                  sx={{ ...typography.bodyBase, color: "#111B2D", cursor: "pointer" }}
                  onClick={() => {
                    sessionStorage.setItem("scrollToSection", card.id);

                    if (window.location.pathname === "/home/rentals") {
                      const el = document.getElementById(card.id);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    } else {
                      navigate("/home/rentals");
                    }

                    onClose && onClose();
                  }}
                >
                  {card.title}
                </Typography>
              ))
            )}
          </Box>
        </Grid>
        <Grid item xs={5} display="flex" flexDirection="row" alignItems="flex-start" gap={2}>
          <Box display="flex" flexDirection="column">
            <ServiceCard imgserv={imgserv} />
          </Box>
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          <Box display="flex" flexDirection="column">
            <Typography sx={{ color: "#AE5609", fontFamily: "Space Grotesk", fontSize: "24px", mb: 2 }}>
              ROI Calculators
            </Typography>
            {["Rent Vs Replace?", "Rent Vs Replace?", "Rent Vs Replace?"].map((item, i) => (
              <Typography key={i} sx={{ fontFamily: "Fira Sans", fontSize: "18px", color: "#111B2D", mb: 1 }}>
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const ResalePopoverContent = ({ onClose }) => {
  const navigate = useNavigate();
  const [titles, setTitles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}?contentId=RefurbishedMagnet`)
      .then((res) => res.json())
      .then((data) => {
        const titleKeys = ["RM1011", "RM1017", "RM1023", "RM1029", "RM1035", "RM1041"];
        const result = titleKeys
          .filter((key) => data[key])
          .map((key) => ({ title: data[key], id: key }));
        setTitles(result);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleClick = (id) => {
    if (!id) return;
    const el = document.getElementById(`card-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    sessionStorage.setItem("scrollToSection", id);
    navigate("/home/RefurbishedElectromagnet");
    onClose && onClose();
  };

  return (
    <Grid container spacing={4} alignItems="flex-start">
      <Grid item xs={7}>
        <Box sx={{ pl: "25px", mt: 2 }}>
          <Typography sx={{ ...typography.h4, color: "#AE5609", cursor: "pointer" }}>
            Browse Refurbished <br /> Inventory
          </Typography>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                minHeight: "200px", // 👈 important
              }}
            >
              <CircularProgress size={100} thickness={4} />
            </Box>
          ) : (
            titles.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  ...typography.bodyBase,
                  color: "#111B2D",
                  cursor: "pointer",
                  mt: 1,
                }}
                onClick={() => handleClick(item.id)}
              >
                {item.title}
              </Typography>
            ))
          )}
        </Box>
      </Grid>
      <Grid item xs={5} display="flex" gap={2}>
        <Box>
          <ServiceCard imgserv={imgserv} />
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box>
          <Typography sx={{ color: "#AE5609", fontSize: "24px", mb: 2 }}>
            ROI Calculators
          </Typography>
          {["Rent Vs Replace?", "Rent Vs Replace?", "Rent Vs Replace?"].map((item, i) => (
            <Typography key={i} sx={{ ...typography.bodyBase, mb: 1 }}>
              {item}
            </Typography>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

const ContactPopoverContent = ({ onClose }) => {
  const navigate = useNavigate();
  const [content, setContent] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  const goTo = (path) => { onClose(); navigate(path); };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}?contentId=Home`)
      .then((res) => res.json())
      .then((data) => setContent(data || {}))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  const handleEdit = (contentTextID, type = "T") => {
    navigate(`/CmsEditor?contentId=Home&contentTextID=${contentTextID}&contentType=${type}`);
  };

  const EditIconButton = ({ id, type = "T" }) =>
    isAdmin ? (
      <IconButton
        size="small"
        onClick={() => handleEdit(id, type)}
        sx={{ ml: 1, p: 0.5, borderRadius: "50%", backgroundColor: "#f0f0f0", color: "#1C2D4B", border: "1px solid #ccc", transition: "all 0.2s ease", "&:hover": { backgroundColor: "#e0e0e0", color: "#070808ff" } }}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    ) : null;

  if (!content) return null;

  return (
    <Grid container spacing={1} sx={{ px: 1, py: 2 }}>
      <Grid item xs={3}>
        <Box display="flex" flexDirection="column" gap={0.8} sx={{ paddingLeft: "70px" }}>
          <Typography sx={{ color: "#AE5609", fontFamily: "Space Grotesk", fontWeight: 400, fontSize: "18px", lineHeight: "120%", ...typography.h4 }}>
            Request a Quote
          </Typography>
          <Typography sx={{ color: "#AE5609", fontFamily: "Space Grotesk", fontWeight: 400, fontSize: "18px", lineHeight: "120%", textDecoration: "none", "&:hover": { textDecoration: "underline" }, ...typography.h4, cursor: "pointer" }} onClick={() => goTo("/contact-us")}>
            Book a Site Visit
          </Typography>
          <Typography sx={{ fontFamily: "Space Grotesk", fontWeight: 400, fontSize: "18px", lineHeight: "120%", color: "#111B2D", borderBottom: "1px solid #1E88E5", width: "fit-content", ...typography.h4 }}>
            {content.HMCONTACT}<EditIconButton id="HMCONTACT" />
          </Typography>
          <Typography sx={{ fontFamily: "Space Grotesk", fontWeight: 400, fontSize: "18px", lineHeight: "120%", color: "#111B2D", borderBottom: "1px solid #1E88E5", width: "fit-content", ...typography.h4 }}>
            {content.HMPHONE}<EditIconButton id="HMPHONE" />
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box display="flex" flexDirection="column" gap={0.8}>
          <Typography sx={{ color: "#AE5609", fontFamily: "Space Grotesk", fontWeight: 400, fontSize: "18px", lineHeight: "120%", ...typography.h4 }}>
            WhatsApp an Engineer
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box display="flex" flexDirection="row" alignItems="flex-start" gap={1}>
          <Box><ServiceCard imgserv={imgserv} /></Box>
          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
          <Box display="flex" flexDirection="column" gap={0.5}>
            <Typography sx={{ color: "#AE5609", fontFamily: "Space Grotesk", fontWeight: 400, fontSize: "18px", lineHeight: "120%", mb: 0.5, ...typography.h4 }}>
              ROI Calculators
            </Typography>
            {["Rent Vs Replace?", "Rent Vs Replace?", "Rent Vs Replace?"].map((item, index) => (
              <Typography key={index} sx={{ fontFamily: "Fira Sans", fontWeight: 400, fontSize: "16px", lineHeight: "140%", color: "#111B2D", ...typography.bodyBase }}>
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

const MorePopoverContent = ({ onClose }) => {
  const navigate = useNavigate();
  const goTo = (path) => { onClose(); navigate(path); };

  return (
    <Grid container spacing={0}>
      <Grid item xs={4}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, alignItems: "flex-start" }}>
          <Box display="flex" flexDirection="column" gap={1.2}>
            <Typography sx={{ ...typography.h4, color: "#AE5609" }}>ROI Calculator</Typography>
            <Typography sx={{ ...typography.bodyBase, color: "#111B2D", cursor: "pointer" }} onClick={() => navigate("/repair-replace")}>Repair vs Replace</Typography>
            <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>Rental vs Buy</Typography>
            <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>AMC vs Reactive.</Typography>
          </Box>
          <Box display="flex" flexDirection="column" gap={1.2}>
            <Typography sx={{ ...typography.h4, color: "#AE5609" }}>Downloads</Typography>
            <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>Safety labels</Typography>
            <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>Electro-Lifting Magnet</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, alignItems: "flex-start" }}>
          <Box display="flex" flexDirection="column" gap={1.2}>
            <Typography sx={{ ...typography.h4, color: "#AE5609" }}>Case Studies</Typography>
            <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>Before and After</Typography>
            <Typography sx={{ ...typography.bodyBase, color: "#111B2D" }}>Turn Around Time (TAT)</Typography>
          </Box>
          <Box display="flex" flexDirection="column" gap={1.2}>
            <Typography sx={{ ...typography.h4, color: "#AE5609" }}>FAQ</Typography>
            <Typography sx={{ ...typography.h4, color: "#AE5609", cursor: "pointer" }} onClick={() => goTo("/about-us")}>About Us</Typography>
            <Typography sx={{ ...typography.h4, color: "#AE5609", cursor: "pointer" }} onClick={() => goTo("/legal")}>Legal</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={5} display="flex" flexDirection="row" alignItems="flex-start" gap={2}>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <ServiceCard imgserv={imgserv} />
        </Box>
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography sx={{ color: "#AE5609", fontFamily: "Space Grotesk", fontWeight: 400, fontSize: "24px", lineHeight: "130%", mb: 2 }}>
            ROI Calculators
          </Typography>
          {["Rent Vs Replace?", "Rent Vs Replace?", "Rent Vs Replace?"].map((item, i) => (
            <Typography key={i} sx={{ fontFamily: "Fira Sans", fontWeight: 400, fontSize: "18px", lineHeight: "160%", color: "#111B2D", mb: 1 }}>
              {item}
            </Typography>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

const BrowseRentals = ({ onClose }) => {
  const navigate = useNavigate();
  const goTo = (path) => { if (typeof onClose === "function") onClose(); navigate(path); };
  return (
    <Box display="flex" alignItems="center" sx={{ mt: 2, cursor: "pointer" }} onClick={() => goTo("./home/Rentals")}>
      <Typography sx={{ fontFamily: "Space Grotesk", fontWeight: 400, fontSize: "24px", lineHeight: "130%", letterSpacing: "-0.12%", textDecoration: "underline", textDecorationStyle: "solid", textDecorationOffset: "0%", textDecorationThickness: "0%", textDecorationSkipInk: "auto" }}>
        Browse All Rentals
      </Typography>
      <ArrowForwardIosIcon sx={{ ml: 1, fontSize: "20px" }} />
    </Box>
  );
};

const ServiceCard = ({ imgserv }) => {
  return (
    <Card sx={{ width: 223, height: 307, borderRadius: 2, boxShadow: 3, overflow: "hidden", opacity: 1, transform: "rotate(0deg)", display: "flex", flexDirection: "column", bgcolor: "#F7F9FC" }}>
      <CardMedia component="img" image={imgserv} alt="promo" sx={{ width: 223, height: 190, objectFit: "cover", borderRadius: 2, opacity: 1 }} />
      <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 1.5 }}>
        <Typography sx={{ fontFamily: "Space Grotesk", fontWeight: 500, fontStyle: "normal", fontSize: "20px", lineHeight: "130%", letterSpacing: "0px", color: "#1C2D4B" }}>
          It's more than Magnets
        </Typography>
        <IconButton size="small" sx={{ bgcolor: "primary.main", color: "white" }}>
          <EditIcon fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
  );
};