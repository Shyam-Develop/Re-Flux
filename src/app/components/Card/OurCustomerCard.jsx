import React from "react";
import { Box, Typography, Card, CardContent, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { typography } from "app/utils/constant";

const testimonials = [
  {
    name: "Aaron Aldrich",
    role: "Product Engineer of Techin",
    text: "It’s a must-have powerful tool for every business owner to run their business in a proactive way",
  },
  {
    name: "Bethany Clarke",
    role: "Lead Designer at Creatify",
    text: "An innovative design platform that enhances creativity and collaboration across teams.",
  },
  {
    name: "Carlos Mendoza",
    role: "Marketing Specialist at BrandBoost",
    text: "A strategic marketing solution tailored to elevate brand presence and customer engagement.",
  },
];

const Testimonials = () => {
    const navigate=useNavigate();
  return (
    <Box
      sx={{
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 10 },
        background: "white",
        position: "relative",
      }}
    >
      <Grid container spacing={4}>
        {/* Left Section */}
        <Grid item xs={12} md={5} mt={18}>
          <Typography
          
            sx={{ ...typography.displayL, color: "#232323", mb: 2 }}
          >
            What Our Happy <br /> Customer Says
          </Typography>

          <Typography
            sx={{  ...typography.h4, color: "#6B768A", mb: 3, }}
          >
            Community Development is often linked with community work or community
            planning, and may involve stakeholders and foundations.
          </Typography>

          <Button
            variant="contained"
            onClick={()=>navigate("/customer-says")}
            sx={{
              backgroundColor: "#AE5609",
              borderRadius: "50px",
              px: 3,
              py: 1,
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#AE5609",
                cursor:"pointer"
               },
            }}
          >
            See All
          </Button>
        </Grid>

        {/* Zigzag Cards */}
        <Grid item xs={12} md={7}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {testimonials.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent:
                    index % 2 === 0 ? "flex-start" : "flex-end", // zig zag effect
                }}
              >
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 3,
                    backgroundColor: "#f9fafb",
                    maxWidth: "600px",
                    maxHeight:"182px"
                  }}
                >
                  <CardContent>
                    <Typography
                     
                      sx={{  ...typography.h3B, color: "#232323", }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{ mb: 2,  ...typography.overline, color: "#6B768A",  }}
                    >
                      {item.role}
                    </Typography>
                   <Typography
  sx={{
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: "150%",
    letterSpacing: "0em",
    color: "#5C5C5C",
  }}
>
                      {item.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Testimonials;
