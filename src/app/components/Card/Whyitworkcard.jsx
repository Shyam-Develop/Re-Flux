import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import HandshakeIcon from "@mui/icons-material/Handshake";
import handshake1 from "../../../assets/handshake3.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const services = [
  {
    id: 1,
    title: "Right bridge strategy",
    type: "Rental unit eliminated production loss",
    icon: HandshakeIcon,
     image: handshake1,
  },
  {
    id: 2,
    title: "Spec-true repair",
    type: "Class-H insulation, terminals/ leads to OEM spec",
    icon: HandshakeIcon,
    image: handshake1,
  },
  {
    id: 3,
    title: "Measured validation",
    type: "Pull, current, and insulation per checklist",
    icon: HandshakeIcon,
    image: handshake1,
  },
  {
    id: 4,
    title: "Fast logistics",
    type: "72-hour door-to-door with proof of work",
    icon: HandshakeIcon,
    image: handshake1,
  },
];

export default function Whyitworkcard() {
  return (
    <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#f9fafb" }}>
      {/* Cards - Horizontal Scrollable Row */}
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 3,
          pb: 2,
          mt: 4,
        }}
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card
              key={service.id}
              sx={{
                flex: "0 0 auto",
                minWidth: 240,
                maxWidth: 280,
                height: "290px",
                borderRadius: 2,
                padding: 2,
                boxShadow: "none",
                border: "1px solid #e5e7eb",
                transition: "all 0.3s",
                "&:hover": {
                  backgroundColor: "#0b2d55",
                  color: "#eee",
                },
              }}
            >
              {/* Icon in circle */}
             <Box
  sx={{
    width: 56,
    height: 56,
    borderRadius: "50%",
    backgroundColor: "#f3f4f6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mb: 2,
    overflow: "hidden", // ensures image stays inside circle
  }}
>
  <Box
    component="img"
    src={service.image}
    alt="service icon"
    sx={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "50%", // fully round image
    }}
  />
</Box>

              {/* Text Content */}
              <CardContent sx={{ p: 0,
                textAlign: "left",
                 
               }}>
                <Typography
               sx={{
                fontFamily: "Space Grotesk Regular",
                fontWeight: 600,
                fontSize: "28px",
                // color: "#111827",
                color: "inherit",
                 
               }}
                 >
                  {service.title}
                </Typography>
                <Typography
               sx={{
                fontFamily: "Fira Sans Regular",
                fontWeight: 400,
                fontSize: "18px",
                // color: "#111827",
                color: "inherit",
                 
               }}
                 >
                  {service.type}
                </Typography>
              </CardContent>
           <Box sx={{ p: 2, pt: 0 }}>
  <Button
    fullWidth
    variant="contained"
    className="view-more-btn"
    sx={{
      mt: 2,
      borderRadius: 2,
      textTransform: "none",
      bgcolor: "#b45309",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 1, // space between text and icon
      transition: "opacity 0.3s ease, transform 0.3s ease",
      opacity: 0,
      transform: "translateY(10px)",
      textDecoration: "underline",

      ".MuiCard-root:hover &": {
        opacity: 1,
        transform: "translateY(0)",
         textDecoration: "underline",
         bgcolor: "#b45309",
      color: "white",
      },

      "&:hover .arrow-icon": {
        opacity: 1,
        transform: "translateX(4px)",
         textDecoration: "underline",
         bgcolor: "#b45309",
      color: "white",
      },
    }}
  >
    View More
    <ArrowForwardIcon
      className="arrow-icon"
      sx={{
        fontSize: 20,
        transition: "all 0.3s ease",
        opacity: 0,
        transform: "translateX(0)",
      }}
    />
  </Button>
</Box>

            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
