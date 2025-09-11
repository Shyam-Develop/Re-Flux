import React from "react";
import { Box, Grid, Typography, Card, CardContent, Avatar, useMediaQuery, useTheme, Divider } from "@mui/material";
import cust from '../../../assets/custSay.jpg';
import { typography } from "app/utils/constant";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Brand1 from '../../../assets/Brand1.png';
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
    image:cust,
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
                            padding: "10px",
                        }}
                    >
                       <Box sx={{ gridColumn: "span 4", p: 2 }}>
      {/* Heading */}
      <Typography
        align="left"
        sx={{ ...typography.displayL,color:"#232323", mb: 2 }}
      >
        What Our Happy Customer Says
      </Typography>
<Divider
            sx={{ borderBottomWidth: 2, borderColor: "#178270", my: 2 }}
          />

      {/* Subtitle */}
      <Typography
        align="left"
        sx={{  mx: "auto", mb: 6, ...typography.h4,color:"#6B768A" }}
      >
        Community Development is often linked with community work or community
        planning, and may involve stakeholders and foundations.
      </Typography>

      {/* Cards */}
     <Grid container spacing={3}>
  {testimonials.map((item, index) => (
    <Grid item xs={12} sm={6} md={6} key={index}>
      <Card
        elevation={0}
        sx={{
          borderRadius: 3,
          border: "1px solid #e5e7eb",
          height: "100%",
        }}
      >
        <CardContent>
          <Typography sx={{
            ...typography.h3B,color:"#232323"
          }}>
            {item.name}
          </Typography>
          <Typography
            sx={{ mb: 2, ...typography.h5,color:"#6B768A"}}
          >
            {item.role}
          </Typography>
          <Typography sx={{ ...typography.h6,color:"#5C5C5C"}}>{item.text}</Typography>
          
          {/* Image block */}
          
          {item.image && (
            <Box
              component="img"
              src={item.image}
              alt={item.name}
              sx={{
                width: "100%",
                height: 200,
                borderRadius: 2,
                objectFit: "cover",
                mb: 2,
              }}
            />
          )}

        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>
{/* Footer Section */}
                 <Box
                 mt={2}
                   component="footer"
                   sx={{
                     backgroundColor: "#0b2d55",
                     color: "#fff",
                     borderTopLeftRadius: 32,
                     borderTopRightRadius: 32,
                     width: "100%",
                     px: { xs: 4, md: 12 },
                     py: { xs: 6, md: 10 },
                   }}
                 >
                   <Grid container spacing={4} alignItems="flex-start">
                     {/* 1. Left: Logo + Sub-brand */}
                     <Grid item xs={12} md={4}>
                       <Box mb={3}>
                         <img src={Brand1} alt="ReFlux Magnets" style={{ height: 60 }} />
                       </Box>
                       <Typography variant="body2" sx={{ ...typography.h5, color:"white", mb: 1 }}>
                         A unit of
                       </Typography>
                       <Box>
                         <img src={Brand1} alt="Electro Flux" style={{ height: 60 }} />
                       </Box>
                     </Grid>
                 
                     {/* 2. Middle: Contact Info */}
                     <Grid item xs={12} md={4}>
                       <Typography
                         sx={{
                           fontWeight: 600,
                           fontSize: "14px",
                           border: "1px solid #fff",
                           borderRadius: "16px",
                           px: 2,
                           py: 0.5,
                           display: "inline-block",
                           mb: 2,
                         }}
                       >
                         Contact
                       </Typography>
                 
                       <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                         Xilliams Corner Wine © 2017. <br />
                         1112 A Market St # Ste B22,<br />
                         Charlottesville, CA 45565
                       </Typography>
                 
                       <Typography sx={{ mt: 2 }}>(123) 456-7890</Typography>
                       <Typography
                         sx={{
                           mt: 1,
                           display: "inline-block",
                           borderBottom: "2px solid #1976d2",
                           pb: "2px",
                         }}
                       >
                         contact@lift.agency
                       </Typography>
                     </Grid>
                 
                     {/* 3. Right: Links + Arrow + Copyright */}
                     <Grid item xs={12} md={4}>
                       <Typography
                         sx={{
                           fontWeight: 600,
                           fontSize: "14px",
                           border: "1px solid #fff",
                           borderRadius: "16px",
                           px: 2,
                           py: 0.5,
                           display: "inline-block",
                           mb: 2,
                         }}
                       >
                         Links
                       </Typography>
                 
                       {["Facebook", "Instagram", "Youtube"].map((item) => (
                         <Typography key={item} sx={{ mb: 1 }}>
                           {item}
                         </Typography>
                       ))}
                 
                       <Typography sx={{ fontWeight: 700, mt: 2 }}>Wall of Love ❤️</Typography>
                       <Box
                         sx={{
                           width: 30,
                           height: 2,
                           backgroundColor: "#fff",
                           my: 1,
                         }}
                       />
                       <Typography sx={{ fontWeight: 700, mb: 3 }}>Sitemap</Typography>
                 
                       {/* Scroll to top icon */}
                       <Box
                         sx={{
                           width: 40,
                           height: 40,
                           borderRadius: "50%",
                           border: "1px solid #fff",
                           display: "flex",
                           alignItems: "center",
                           justifyContent: "center",
                           cursor: "pointer",
                           mb: 2,
                         }}
                       >
                         <ArrowUpwardIcon sx={{ color: "#fff" }} />
                       </Box>
                 
                       <Typography variant="caption" sx={{ color: "#ccc" }}>
                         © 2020 Lift Media All rights reserved.
                       </Typography>
                     </Grid>
                   </Grid>
                 </Box>
      </Box>
    </Box>
  );
}
