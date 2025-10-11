import React from "react";
import { Box, Grid, Typography, Card, CardContent, Avatar, useMediaQuery, useTheme, Divider } from "@mui/material";
import cust from '../../../assets/custSay.jpg';
import { typography } from "app/utils/constant";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Brand1 from '../../../assets/Brand1.png';
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
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    
   <Box
  display="grid"
  gap="20px"
  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
  sx={{
    "& > div": {
      gridColumn: { xs: "span 4", md: undefined },
    },
  }}
>
  <Box sx={{ gridColumn: "span 4" }}>
    <Box
      sx={{
        paddingTop: "20px",
        paddingRight: "80px",
        paddingBottom: "40px",
        paddingLeft: "80px",
        gap: "32px",
        transform: "rotate(0deg)",
        opacity: 1,
        position: "relative",
        boxSizing: "border-box",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",

        // ✅ MOBILE ONLY CHANGES
        "@media (max-width: 900px)": {
          padding: "20px", // smaller padding on mobile
        },
      }}
    >
      {/* Heading */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1440px",
          gap: 4,
          boxSizing: "border-box",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",

          // ✅ MOBILE ONLY CHANGES
          "@media (max-width: 900px)": {
            alignItems: "center",
            textAlign: "center",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* Title */}
          <Typography
            align="center"
            sx={{
              ...typography.displayL,
              color: "#232323",

              // ✅ MOBILE ONLY CHANGES
              "@media (max-width: 900px)": {
                fontSize: "1.8rem",
              },
            }}
          >
            What Our Happy Customer Says
          </Typography>

          {/* Divider */}
          <Divider
            sx={{
              borderBottomWidth: 2,
              borderColor: "#178270",
              width: "100%",

              // ✅ MOBILE ONLY CHANGES
              "@media (max-width: 900px)": {
                width: "60%",
                margin: "0 auto",
              },
            }}
          />

          {/* Subtitle */}
          <Typography
            align="left"
            sx={{
              ...typography.h4,
              color: "#6B768A",

              // ✅ MOBILE ONLY CHANGES
              "@media (max-width: 900px)": {
                fontSize: "1rem",
                textAlign: "center",
                padding: "0 10px",
              },
            }}
          >
            Community Development is often linked with community work or community planning,
            and may involve stakeholders and foundations.
          </Typography>
        </Box>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          width: "1350px",
          height: "975px",
          gap: "24px",
          transform: "rotate(0deg)",
          opacity: 1,
          boxSizing: "border-box",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "flex-start",

          // ✅ MOBILE ONLY CHANGES
          "@media (max-width: 900px)": {
            width: "100%",
            flexDirection: "column",
            height: "auto",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        {testimonials.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: 650,
              height: item.image ? 769 : 182,
              pt: 3,
              pr: 5,
              pb: 3,
              pl: 5,
              gap: 2.5,
              border: "1px solid #f1f1f1ff",
              transform: "rotate(0deg)",
              opacity: 1,
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              bgcolor: "#F7F9FC",
              mb: 3,

              // ✅ MOBILE ONLY CHANGES
              "@media (max-width: 900px)": {
                width: "100%",
                maxWidth: "95%",
                padding: "16px",
                alignItems: "center",
                textAlign: "center",
                height: "auto",
              },
            }}
          >
            <Typography
              sx={{
                ...typography.h3B,
                color: "#232323",

                // ✅ MOBILE ONLY CHANGES
                "@media (max-width: 900px)": {
                  fontSize: "1.2rem",
                },
              }}
            >
              {item.name}
            </Typography>
            <Typography
              sx={{
                mb: 1,
                ...typography.h5,
                color: "#6B768A",

                // ✅ MOBILE ONLY CHANGES
                "@media (max-width: 900px)": {
                  fontSize: "1rem",
                },
              }}
            >
              {item.role}
            </Typography>
            <Typography
              sx={{
                ...typography.h6,
                color: "#5C5C5C",

                // ✅ MOBILE ONLY CHANGES
                "@media (max-width: 900px)": {
                  fontSize: "0.9rem",
                },
              }}
            >
              {item.text}
            </Typography>

            {item.image && (
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                  width: "100%",
                  height: 567,
                  borderRadius: 2,
                  objectFit: "cover",
                  mt: 2,

                  // ✅ MOBILE ONLY CHANGES
                  "@media (max-width: 900px)": {
                    height: 250,
                  },
                }}
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>

    {/* Footer Section */}
    <Box>
      <Footer />
    </Box>
  </Box>
</Box>


    
  );
}
