import { Box, Typography, Button, Card, CardContent, Grid} from "@mui/material";
import HandshakeIcon from "@mui/icons-material/Handshake";
import handshake1 from "../../../assets/handshake3.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const services = [
  {
    id: 1,
    title: "Controller",
    type: "R{{controller_model}}",
    icon: HandshakeIcon,
    image: handshake1,
  },
  {
    id: 2,
    title: "Cabels & connectors",
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

];


const includedItems = [
  {
    icon: HandshakeIcon,
    title: 'Controller',
    desc: '{{controller_model}}',
    hasButton: true,
     image: handshake1,
  },
  {
    icon: HandshakeIcon,
    title: 'Cables & connectors',
    desc: '{{cable_length_m}} m, quick-connects, shackles',
    hasButton: false,
  },
  {
    icon: HandshakeIcon,
    title: 'Pre-dispatch',
    desc: 'Load-test and functional checks',
    hasButton: false,
  },
];

export default function WhatsincludedCard() {
  return (
  

        <Grid container spacing={3}>
          {includedItems.map((item, index) => (
            <Grid item key={index}>
              <Card
                sx={{
                  width: "350px",
                  height: "224px",
                  borderRadius: "16px",
                  border: "1px solid #e5e7eb",
                  backgroundColor: "#fff",
                  color: "#1c2434",
                  position: "relative",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#1C2D4B",
                    color: "#fff",
                    "& .view-more-btn": {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  {/* Handshake Icon */}
                   <item.icon /> 

                  {/* Title */}
                  <Typography variant="subtitle1" fontWeight="bold">
                    {item.title}
                  </Typography>

                  {/* Description */}
                  <Typography variant="body2" color="inherit">
                    {item.desc}
                  </Typography>

                  {/* View More Button (hidden until hover) */}
                  <Button
                    className="view-more-btn"
                    sx={{
                      mt: 2,
                      backgroundColor: "#C97833",
                      borderRadius: "24px",
                      textTransform: "none",
                      fontWeight: "bold",
                      px: 3,
                      py: 1,
                      opacity: 0,                       // hidden by default
                      transform: "translateY(10px)",    // slightly below
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#b2652a",
                      },
                    }}
                  >
                    View More →
                  </Button>
                </CardContent>
              </Card>




            </Grid>
          ))}
        </Grid>
  );
}
