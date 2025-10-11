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
    <Box
      sx={{
        p: { xs: 2, md: 6 },
        backgroundColor: "#f9fafb",
      }}
    >
      {/* Cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "row" }, // same as your original
          overflowX: { xs: "auto", md: "visible" }, // scroll only on mobile
          flexWrap: { xs: "nowrap", md: "wrap" }, // no wrap on mobile, wrap on desktop
          gap: 3,
          width: "100%",
          pb: 2,
        }}
      >
        {services.map((service) => (
          <Card
            key={service.id}
            sx={{
              flex: "0 0 auto",
              minWidth: 240,
              maxWidth: 278,
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
                overflow: "hidden",
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
                  borderRadius: "50%",
                }}
              />
            </Box>

            {/* Card Content */}
            <CardContent sx={{ p: 0, textAlign: "left" }}>
              <Typography
                sx={{
                  fontFamily: "Space Grotesk Regular",
                  fontWeight: 600,
                  fontSize: { xs: "20px", md: "28px" },
                  color: "inherit",
                }}
              >
                {service.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Fira Sans Regular",
                  fontWeight: 400,
                  fontSize: { xs: "14px", md: "18px" },
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
                  gap: 1,
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  opacity: 0,
                  transform: "translateY(10px)",
                  textDecoration: "underline",

                  ".MuiCard-root:hover &": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },

                  "&:hover .arrow-icon": {
                    opacity: 1,
                    transform: "translateX(4px)",
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
        ))}
      </Box>
    </Box>

  );
}
