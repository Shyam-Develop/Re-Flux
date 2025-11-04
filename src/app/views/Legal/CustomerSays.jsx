import React from "react";
import {
  Box,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import cust from "../../../assets/custSay.jpg";
import { typography } from "app/utils/constant";
import Footer from "app/components/Card/Footer";

const testimonials = [
  {
    name: "Aaron Aldrich",
    role: "Product Engineer at Techfi",
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
    image: cust,
  },
];

export default function Testimonials() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          paddingTop: { xs: "20px", md: "20px" },
          paddingRight: { xs: "16px", md: "80px" },
          paddingBottom: { xs: "40px", md: "40px" },
          paddingLeft: { xs: "16px", md: "80px" },
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          boxSizing: "border-box",
        }}
      >
        {/* Heading Section */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1440px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "center" : "flex-start",
            textAlign: isMobile ? "center" : "left",
            gap: 2,
          }}
        >
          <Typography sx={{ ...typography.displayL, color: "#232323" }}>
            What Our Happy Customer Says
          </Typography>

          <Divider
            sx={{
              borderBottomWidth: 2,
              borderColor: "#178270",
              width: isMobile ? "60%" : "100%",
              mx: isMobile ? "auto" : 0,
            }}
          />

          <Typography sx={{ ...typography.h4, color: "#6B768A" }}>
            Community Development is often linked with community work or community
            planning, and may involve stakeholders and foundations.
          </Typography>
        </Box>

        {/* Cards Section (exact desktop layout, responsive for mobile) */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1350px",
            margin: "0 auto",
            boxSizing: "border-box",
            mt: 4,
            px: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gap: "24px",
              // two columns on md+: left fixed 650, right takes remaining space
              gridTemplateColumns: { xs: "1fr", md: "650px 1fr" },
              // explicitly lay out areas so top row has card1 & card2,
              // second row has card3 on left and empty on right
              gridTemplateAreas: {
                xs: `"card1" "card2" "card3"`,
                md: `"card1 card2" "card3 ."`
              },
              alignItems: "start",
            }}
          >
            {/* small top-left card */}
            <Box
              sx={{
                gridArea: "card1",
                pt: 3,
                pr: 5,
                pb: 3,
                pl: 5,
                gap: 2.5,
                border: "1px solid #f1f1f1ff",
                bgcolor: "#F7F9FC",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                boxSizing: "border-box",
              }}
            >
              <Typography sx={{ ...typography.h3B, color: "#232323" }}>
                {testimonials[0].name}
              </Typography>
              <Typography sx={{ mb: 1, ...typography.h5, color: "#6B768A" }}>
                {testimonials[0].role}
              </Typography>
              <Typography sx={{ ...typography.h6, color: "#5C5C5C" }}>
                {testimonials[0].text}
              </Typography>
            </Box>

            {/* small top-right card */}
            <Box
              sx={{
                gridArea: "card2",
                pt: 3,
                pr: 5,
                pb: 3,
                pl: 5,
                gap: 2.5,
                border: "1px solid #f1f1f1ff",
                bgcolor: "#F7F9FC",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                boxSizing: "border-box",
              }}
            >
              <Typography sx={{ ...typography.h3B, color: "#232323" }}>
                {testimonials[1].name}
              </Typography>
              <Typography sx={{ mb: 1, ...typography.h5, color: "#6B768A" }}>
                {testimonials[1].role}
              </Typography>
              <Typography sx={{ ...typography.h6, color: "#5C5C5C" }}>
                {testimonials[1].text}
              </Typography>
            </Box>

            {/* large card under left column with image */}
            <Box
              sx={{
                gridArea: "card3",
                pt: 3,
                pr: 5,
                pb: 3,
                pl: 5,
                gap: 2.5,
                border: "1px solid #f1f1f1ff",
                bgcolor: "#F7F9FC",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                boxSizing: "border-box",
              }}
            >
              <Typography sx={{ ...typography.h3B, color: "#232323" }}>
                {testimonials[2].name}
              </Typography>
              <Typography sx={{ mb: 1, ...typography.h5, color: "#6B768A" }}>
                {testimonials[2].role}
              </Typography>
              <Typography sx={{ ...typography.h6, color: "#5C5C5C" }}>
                {testimonials[2].text}
              </Typography>

              {/* image — keep same desktop height, scale to width on mobile */}
              <Box
                component="img"
                src={testimonials[2].image}
                alt={testimonials[2].name}
                sx={{
                  width: "100%",
                  mt: 2,
                  borderRadius: 2,
                  objectFit: "cover",
                  // exact desktop height preserved; on xs it becomes auto-height
                  height: { xs: "auto", md: "567px" },
                }}
              />
            </Box>
          </Box>
        </Box>

      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
