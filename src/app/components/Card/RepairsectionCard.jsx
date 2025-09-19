import { React, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton, Divider, Button,
  useMediaQuery
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import serviceimg from "../../../assets/Repairservice.png";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { typography } from "app/utils/constant";
import { useTheme } from "@emotion/react";


const services = [
  {
    id: 1,
    title: "Electromagnet Repair",
    desc: "Businesses to accelerate their digital transformation journey while achieving efficiency, scalability.",
    turnaround: ["3–5d", "5–7d", "10–12d"],
    img: serviceimg,
  },
  {
    id: 2,
    title: "Electromagnet Repair",
    desc: "Businesses to accelerate their digital transformation journey while achieving efficiency, scalability.",
    turnaround: ["3–5d", "5–7d", "10–12d"],
    img: serviceimg,
  },
  {
    id: 3,
    title: "Electromagnet Repair",
    desc: "Businesses to accelerate their digital transformation journey while achieving efficiency, scalability.",
    turnaround: ["3–5d", "5–7d", "10–12d"],
    img: serviceimg,
  },
  {
    id: 4,
    title: "Electromagnet Repair",
    desc: "Businesses to accelerate their digital transformation journey while achieving efficiency, scalability.",
    turnaround: ["3–5d", "5–7d", "10–12d"],
    img: serviceimg,
  },
  {
    id: 5,
    title: "Electromagnet Repair",
    desc: "Businesses to accelerate their digital transformation journey while achieving efficiency, scalability.",
    turnaround: ["3–5d", "5–7d", "10–12d"],
    img: serviceimg,
  },
];

export default function RepairsectionCard() {
  const navigate = useNavigate();
    const theme = useTheme();
    const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
<Box
            display="grid"
            gap="20px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
                "& > div": {
                    gridColumn: isNonMobile ? undefined : "span 4",
                },
                // padding: "10px",
            }}
        >
            <Box sx={{ gridColumn: "span 4"}}>
    <Box
      sx={{
        width: "1300px",
        height: "559px",
        gap: "32px",
        transform: "rotate(0deg)",
        opacity: 1,
        margin: "0 auto", // centers horizontally
      }}
    >

      {/* Cards */}
      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Box sx={{ p: 2 }}>
              <Box
                onClick={() => navigate("/home/RepairServicesPage")}
                sx={{
                  width: 412,              // px
                  height: 559,             // px
                  gap: 4,                  // 32px → theme.spacing(4)
                  transform: "rotate(0deg)",
                  opacity: 1,
                  borderRadius: 2,         // 16px → theme.spacing(2)
                  borderWidth: 2,
                  borderStyle: "solid",
                  borderColor: "grey.400", // pick a theme color
                  p: 2,                    // 16px → theme.spacing(2)
                  boxSizing: "border-box",
                }}

              >
                {/* Image */}
                <Box
                  component="img"
                  src={service.img}
                  alt={service.title}
                  sx={{
                    width: 380, // px
                    height: 260, // px
                    borderRadius: "5px",
                    objectFit: "cover",
                  }}
                />

                {/* Content */}

                {/* Title + Arrow */}
                <Box
                  sx={{
                    mt: 5,
                    width: "365px",
                    height: "235px",
                    gap: "8px",
                    opacity: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography sx={{
                      ...typography.h3,
                      color: "#1B2F43"
                    }}>
                      {service.title}
                    </Typography>
                    <IconButton
                      size="small"
                      sx={{
                        color: "text.secondary",
                        backgroundColor: "#f1f3f4",
                      }}
                    >
                      <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                  </Box>

                  {/* Description */}
                  <Typography

                    sx={{
                      ...typography.bodyBase,
                      color: "#666666",
                      mb: 1
                    }}
                  >
                    {service.desc}
                  </Typography>

                  {/* Turnaround Time */}
                  <Typography sx={{
                    ...typography.h5,
                    color: "#0E1626"
                  }}>
                    Turnaround Time
                  </Typography>
                  <Typography sx={{
                    ...typography.bodyBase,
                    color: "#677489"
                  }}>
                    {service.turnaround.join(" / ")}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}

       {/* View All Services link */}
        <Grid sx={{ textAlign: "center", mt: 4 }}>
          <Typography component="a"
            href="/home/RepairServices"
            sx={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#1a4dab',
              textDecoration: 'none',
              display: 'inline-block',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              "&:hover": {
                textDecoration: 'underline',
                transform: 'scale(1.05)',
              },
              margin: '70px',
              marginTop: '55%',
            }}
          >
            View All Services →
          </Typography>
        </Grid>
{/* <Grid item xs={12} sm={6} md={4}>
  <Box sx={{ mt: 2 ,
    display:"flex",
    justifyContent:"center",
    alignContent:"center"
  }}>
    <Typography
      component="a"
      href="/home/RepairServices"
      sx={{
        fontSize: "16px",
        fontWeight: 600,
        color: "#1a4dab",
        textDecoration: "none",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        transition: "all 0.3s ease",
        "&:hover": {
          textDecoration: "underline",
        },
      }}
    >
      View All Services →
    </Typography>
  </Box>
</Grid> */}


      </Grid>


    </Box>
    </Box>
    </Box>
  );
}




{/* <Button
        disableElevation
        disableRipple
        sx={{
          marginBottom: 2,
          textTransform: "none",           // keep text as-is
          fontSize: "0.8rem",              // smaller font
          fontWeight: 500,                 // medium weight
          color: "#1a4dab",                // dark blue text
          backgroundColor: "rgba(36,121,233,0.08)", // very light blue background
          borderRadius: "20px",            // pill shape
          px: 2,                           // horizontal padding
          py: 0.5,                         // vertical padding
          boxShadow: "none",               // remove shadow
          "&:hover": {
            backgroundColor: "rgba(36,121,233,0.15)", // slightly darker on hover
            boxShadow: "none",
          },
        }}
      >
        Repair Services
      </Button>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Our Repair Services
      </Typography>
      <Typography variant="h5" sx={{ mb: 4, color: "text.secondary" }}>
        Get powerful lifting magnets when you need them — without the upfront
        cost. Flexible rental plans, quick installation, and reliable
        performance for every project!
      </Typography> */}



{/* <Card
              onClick={() => navigate("/home/RepairServicesPage")}
              sx={{
                height: "559px",
                width: "412px",
                borderRadius: 3,
                boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                transition: "all 0.6s ease-in-out", // slower smooth animation
                overflow: "hidden",
                bgcolor: "white",
                "&:hover": {
                  bgcolor: "#0b2d55",
                  color: "white",
                  "& .MuiTypography-root": { color: "white", transform: "scale(1.05)" },
                  "& .MuiDivider-root": { borderColor: "rgba(255,255,255,0.3)" },
                  "& .MuiIconButton-root": {
                    backgroundColor: "#6aa9ff", // 🔹 light blue only for icon button
                    color: "white",             // icon turns white
                  },
                  "& .card-img": {
                    transform: "scale(1.1)", // zoom
                  },
                },
              }}
            >

              {/* Image Section */}

// <Box
//   sx={{
//     width: "100%",               // span full card width
//     display: "flex",             // flexbox for centering
//     justifyContent: "center",    // center horizontally
//     alignItems: "center",        // center vertically
//     p: 3,                        // equal space around (top/bottom/left/right)
//     boxSizing: "border-box",     // ensures padding is respected
//   }}
// >
//   <CardMedia
//     component="img"
//     image={service.img}
//     alt={service.title}
//     className="card-img"
//     sx={{
//       width: "280px",              // smaller image (controls left/right spacing)
//       height: "260px",            // keeps natural aspect ratio
//       //maxHeight: 200,            // optional: limit height
//       objectFit: "contain",      // ensures image fits without cropping
//       borderRadius: 2,
//       transition: "transform 0.8s ease-in-out",
//     }}
//   />
// </Box>


{/* Text Section */ }
// <CardContent
//   sx={{
//     width: "365px",              // smaller image (controls left/right spacing)
//     height: "235px",
//     transition: "transform 0.5s ease-in-out, color 0.5s ease-in-out",
//     "& .MuiTypography-root": {
//       transition: "transform 0.5s ease-in-out, color 0.5s ease-in-out",
//     },
//   }}
// >
//   {/* Title + Arrow */}
//   <Box
//     sx={{
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//       mb: 1,
//     }}
//   >
//     <Typography variant="h6" fontWeight="bold">
//       {service.title}
//     </Typography>
//     <IconButton
//       // onClick={() => navigate("/home/RepairServicesPage")}
//       size="small"
//       sx={{
//         color: "text.secondary",
//         backgroundColor: "#f5f6f7", // default
//         transition: "0.3s",        // smooth change
//       }}
//     >
//       <ArrowForwardIosIcon

//         fontSize="small" />
//     </IconButton>

//     {/* {showCard && <RepairServicesPage />} */}
//   </Box>

//   <Divider sx={{ mb: 2 }} />

//   <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
//     {service.desc}
//   </Typography>

//   <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 2 }}>
//     Turnaround Time
//   </Typography>
//   <Typography
//     variant="body2"
//     color="text.secondary"
//     sx={{ display: "flex", gap: 2, mt: 0.5 }}
//   >
//     {service.turnaround.join(" / ")}
//   </Typography>


// </CardContent>

//</Card> */}