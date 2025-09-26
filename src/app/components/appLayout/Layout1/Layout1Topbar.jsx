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
  IconButton
} from "@mui/material";
import { styled } from "@mui/system";
import imgserv from "../../../../assets/topbarservice1.jpg";
import EditIcon from "@mui/icons-material/Edit";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {Link, useNavigate } from "react-router-dom";  // or any other ico
import { typography } from "app/utils/constant";
import { themeShadows } from "app/components/baseTheme/themeColors";
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

const TopbarRoot = styled("div")(({ theme }) => ({
  top: 0,
  zIndex: 96,
  transition: "all 0.3s ease",
  boxShadow: themeShadows[8],
  height:100,
}));
 
const TopbarContainer = styled(Box)(({ theme }) => ({
  padding: "8px 20px 8px 18px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  background: theme.palette.card,
  borderBottom: `1px solid ${theme.palette.border}`,
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

  return (
    <TopbarRoot
      sx={{
    position: 'sticky',
    // top: 0,
    // zIndex: 1200,
    // backgroundColor: '#fff',
    // boxShadow: 3,
  }}
    >
      <TopbarContainer>
        {/* Top Row: Menu + Logo + Notification */}
        {/* <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        > */}
      <Box display="flex" alignItems="center" height={100}  >


        {/* width: 150;
height: 60;
angle: 0 deg;
opacity: 1; */}

        {/* Logo */}
        <Box sx={{
           width: 150,
height: 60
        }}> 
      <Typography
  variant="h6"
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 1,
    fontWeight: "bold",
    color: "#111B2D",
  }}
>
  <RefluxSvg width={20} height={20} color="#111B2D" />
  ReFlux Magnets
</Typography>
</Box>
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
      </TopbarContainer>
    </TopbarRoot>
  );
};






const ServicesPopoverContent = () => {
  return (
    <Grid container spacing={0}>
   {/* Single Column */}
<Grid item xs={4}>
  {/* Row: Electromagnet Repair + Rectangular Magnet */}
  <Box
    sx={{
      width:449,
      display: "flex",
      flexDirection: "row",
      gap: 3, // space between the two
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
      Suspension Magnet<br/>Service (Oil / Air-cooled)
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
          <Typography
            sx={{
              ...typography.h4,
              color:"#AE5609",
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
             ...typography.bodyBase,
             color:"#111B2D",
            }}
          >
            Whatsapp
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

  const navigate = useNavigate();

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
              ...typography.h4,
              color:"#AE5609",
               cursor: 'pointer'
            }}
          onClick={() => navigate("./home/CircularMagnet")}>
            Circular Magnet
          </Typography>

          <Typography
            sx={{
             ...typography.bodyBase,
             color:"#111B2D",
            }}
          >
            Permanent Magnet
          </Typography>

          <Typography
            sx={{
             ...typography.bodyBase,
             color:"#111B2D",
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
              ...typography.h4,
              color:"#AE5609",
            }}
          >
            Rectangle Magnet
          </Typography>

          <Typography
            sx={{
             ...typography.bodyBase,
             color:"#111B2D",
            }}
          >
            Permanent Magnet
          </Typography>

          <Typography
            sx={{
             ...typography.bodyBase,
             color:"#111B2D",
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
              ...typography.h4,
              color:"#AE5609",
            }}
          >
            Overband
          </Typography>
          <Typography
            sx={{
             ...typography.bodyBase,
             color:"#111B2D",
            }}
          >
            Permanent Magnet
          </Typography>
          <Typography
            sx={{
             ...typography.bodyBase,
             color:"#111B2D",
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
              ...typography.h4,
              color:"#AE5609",
            }}
          >
            Rectangle Magnet
          </Typography>

          <Typography
            sx={{
             ...typography.bodyBase,
             color:"#111B2D",
            }}
          >
            Permanent Magnet
          </Typography>

          <Typography
            sx={{
             ...typography.bodyBase,
             color:"#111B2D",
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
            // onClick={() => navigate("home/RefurbishedElectromagnet")}
            component={Link}
          to="home/RefurbishedElectromagnet"
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
              cursor: "pointer",
              textDecoration:"none",
        "&:hover": { textDecoration: "underline" },
            }}
          >
            Browse Refurbished<br />Inventory
          </Typography>

          <Typography
            sx={{
             ...typography.bodyBase,
             color:"#111B2D",
            }}
          >
            Circular Magnet
          </Typography>

          <Typography
            sx={{
             ...typography.bodyBase,
             color:"#111B2D",
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
          <Typography
            // onClick={() => navigate("home/SellMagnet")}
             component={Link}
          to="home/SellMagnet"
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
              cursor: "pointer",
              textDecoration:"none",
        "&:hover": { textDecoration: "underline" },
            }}
          >
            Sell/Exchange Your<br />Magnets
          </Typography>

          <Typography
            sx={{
             ...typography.bodyBase,
             color:"#111B2D",
            }}
          >
            Permanent Magnet
          </Typography>

          <Typography
            sx={{
             ...typography.bodyBase,
             color:"#111B2D",
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
              ...typography.h4,
              color:"#AE5609",
            }}
          >
            Overband
          </Typography>
          <Typography
            sx={{
             ...typography.bodyBase,
             color:"#111B2D",
            }}
          >
            Permanent Magnet
          </Typography>
          <Typography
            sx={{
             ...typography.bodyBase,
             color:"#111B2D",
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
              ...typography.h4,
              color:"#AE5609",
            }}
          >
            Rectangle Magnet
          </Typography>

          <Typography
            sx={{
             ...typography.bodyBase,
             color:"#111B2D",
            }}
          >
            Permanent Magnet
          </Typography>

          <Typography
            sx={{
             ...typography.bodyBase,
             color:"#111B2D",
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
          component={Link}
          to="/contact-us"
            sx={{
              color: "#AE5609",
              fontFamily: "Space Grotesk",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "130%",
              cursor: "pointer",
              textDecoration:"none",
        "&:hover": { textDecoration: "underline" },
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
              ...typography.h4,
              color:"#AE5609",
            }}
          >
            ROI Calculator
          </Typography>

          <Typography
          component={Link}
          to="/repair-replace"
            sx={{
             ...typography.bodyBase,
             color:"#111B2D",
              cursor: "pointer",
              textDecoration:"none",
        "&:hover": { textDecoration: "underline" },
            }}
          >
            Repair vs Replace
          </Typography>

          <Typography
            sx={{
             ...typography.bodyBase,
             color:"#111B2D",
            }}
          >
            Rental vs Buy
          </Typography>
          <Typography
            sx={{
             ...typography.bodyBase,
             color:"#111B2D",
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
              ...typography.h4,
              color:"#AE5609",
            }}
          >
            Downloads
          </Typography>

          <Typography
            sx={{
             ...typography.bodyBase,
             color:"#111B2D",
            }}
          >
            Safety labels
          </Typography>

          <Typography
            sx={{
             ...typography.bodyBase,
             color:"#111B2D",
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
              ...typography.h4,
              color:"#AE5609",
            }}
          >
            Case Studies
          </Typography>
          <Typography
            sx={{
             ...typography.bodyBase,
             color:"#111B2D",
            }}
          >
            Before and After
          </Typography>
          <Typography
            sx={{
             ...typography.bodyBase,
             color:"#111B2D",
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
          component={Link}
          to="/customer-says"
            sx={{
              ...typography.h4,
              color:"#AE5609",
            }}
          >
            FAQ 
          </Typography>
           <Typography
      component={Link} // 🔗 makes Typography behave like a Link
      to="/about-us"
      sx={{
        color: "#AE5609",
        fontFamily: "Space Grotesk",
        fontWeight: 400,
        fontSize: "24px",
        lineHeight: "130%",
        letterSpacing: "-0.12px",
        textDecoration: "none",
        cursor: "pointer",
        "&:hover": { textDecoration: "underline" }, // hover effect
      }}
    >
      About Us
    </Typography>
          <Typography
          component={Link}
          to='/legal'
            sx={{
              ...typography.h4,
              color:"#AE5609",
            }}
          >
          Legal
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
    bgcolor:"#F7F9FC"
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