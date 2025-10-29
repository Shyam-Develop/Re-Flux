import { Box, Typography, Button, Card, CardContent, Grid } from "@mui/material";
import HandshakeIcon from "@mui/icons-material/Handshake";
import handshake1 from "../../../assets/handshake3.jpg";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import { typography } from "app/utils/constant";
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
    desc: 'controller_model',
    hasButton: true,
    image: handshake1,
  },
  {
    icon: HandshakeIcon,
    title: 'Cables & connectors',
    desc: 'cable_length_m m, quick-connects, shackles',
    hasButton: false,
    image: handshake1,
  },
  {
    icon: HandshakeIcon,
    title: 'Pre-dispatch',
    desc: 'Load-test and functional checks',
    hasButton: false,
    image: handshake1,
  },
];

export default function WhatsincludedCard() {
  return (


    <Grid container spacing={3}>
      {includedItems.map((item, index) => (
        <Grid item key={index}>
          <Card
            sx={{
              position: "relative",
              width: "350px",
              height: "224px",
              borderRadius: 3,
              overflow: "hidden",
              backgroundColor: "#fff",
              color: "#1C2D4B",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "all 0.35s ease",
              "&:hover": {
                height: "254px", // allow room for button
                backgroundColor: "#0b2d55",
                color: "#fff",
              },
              "&:hover .view-more-btn": {
                opacity: 1,
                transform: "translateY(0)",
              },
              "&:hover .MuiTypography-root": {
                color: "#fff !important",
              },
            }}
          >
            {/* Icon */}
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                backgroundColor: "#f3f4f6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 4,
                marginLeft: '20px',
                marginTop: '10px'
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt="service icon"
                sx={{
                  width: '45px',
                  height: '45px',
                  border: '1px solid gray',
                  padding: '5px',
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </Box>

            {/* Title & Description */}
            <CardContent sx={{ pt: 0 }}>
              <Typography sx={{ ...typography.h3, fontWeight: 600, fontSize: '28px' }} >
                {item.title}
              </Typography>
              <Typography sx={{ ...typography.bodyBase }} variant="body2" color="inherit">
                {item.desc}
              </Typography>
            </CardContent>

            {/* Button inside layout (not absolute) */}
            <Box
              className="view-more-btn"
              sx={{
                px: 3,
                pb: 2,
                opacity: 0,
                transform: "translateY(10px)",
                transition: "all 0.35s ease",
                paddingLeft: '50px',

              }}
            >
              <Button
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: "24px",
                  textTransform: "none",
                  fontWeight: "bold",
                  bgcolor: "#C97833",
                  width: '90%',
                  padding: '10px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 1,
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    bgcolor: "#b2652a",
                    "& .arrow-icon": {
                      opacity: 1,
                      transform: "translateX(4px)",
                    },
                  },
                }}
              >
                View More

                {/* Arrow icon (initially hidden) */}
                <ArrowRightAltIcon
                  className="arrow-icon"
                  sx={{
                    fontSize: 22,
                    opacity: 0,
                    transform: "translateX(0)",
                    transition: "all 0.3s ease",
                  }}
                />
              </Button>

            </Box>
          </Card>


        </Grid>
      ))}
    </Grid>


  );
}
