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
                    gridColumn: isNonMobile ? undefined : "span 4",
                },
                // padding: "10px",
            }}
        >
            <Box sx={{ gridColumn: "span 4", }}>
                <Box
                    sx={{
                        width: "1440px",
                        height: "1867px",
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
                    }}
                >
                    {/* Content goes here */}


                    {/* Heading */}
                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: "1440px",
                            minHeight: "252px",
                            // px: { xs: 2, sm: 4, md: 2 },
                            // py: { xs: 4, md: 5 },
                            gap: 4, // vertical spacing between items
                            boxSizing: "border-box",
                            margin: "0 auto",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start", // left align
                        }}
                    >
                        {/* Column content */}
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column", // ✅ stack vertically
                                gap: 2, // spacing between title, divider, subtitle
                            }}
                        >
                            {/* Title */}
                            <Typography
                                align="center"
                                sx={{ ...typography.displayL, color: "#232323" }}
                            >
                                What Our Happy Customer Says
                            </Typography>

                            {/* Divider */}
                            <Divider sx={{ borderBottomWidth: 2, borderColor: "#178270", width: "100%" }} />

                            {/* Subtitle */}
                            <Typography
                                align="left"
                                sx={{ ...typography.h4, color: "#6B768A" }}
                            >
                                Community Development is often linked with community work or community planning, and may involve stakeholders and foundations.
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
  }}
>
  {testimonials.map((item, index) => (
    <Box
      key={index}
      sx={{
        width: 650,
        height: item.image ? 769 : 182, // dynamic height based on image presence
        pt: 3, // spacing/space-24
        pr: 5, // spacing/space-40
        pb: 3,
        pl: 5,
        gap: 2.5, // 20px
        border: "1px solid #f1f1f1ff", // radius-12
        transform: "rotate(0deg)",
        opacity: 1,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        bgcolor:"#F7F9FC",
        mb: 3, // spacing between rows
      }}
    >
      <Typography sx={{ ...typography.h3B, color: "#232323" }}>
        {item.name}
      </Typography>
      <Typography sx={{ mb: 1, ...typography.h5, color: "#6B768A" }}>
        {item.role}
      </Typography>
      <Typography sx={{ ...typography.h6, color: "#5C5C5C" }}>
        {item.text}
      </Typography>

      {item.image && (
        <Box
          component="img"
          src={item.image}
          alt={item.name}
          sx={{
            width: "100%",
            height: 567, // fixed height for the image
            borderRadius: 2,
            objectFit: "cover",
            mt: 2,
          }}
        />
      )}
    </Box>
  ))}
</Box>


                    {/* Footer Section */}
                    <Footer />
                </Box>
            </Box>
        </Box>
    );
}
