import React from "react";
import {
  Box,
  Typography,
  Container,
  Divider,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Brand1 from '../../../assets/Brand1.png';
import Repair from "../../../assets/RRimage.jpg"
import { typography } from "app/utils/constant";
const Legal = () => {

        const theme = useTheme();
        const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    // <Container maxWidth="md" sx={{ py: 6 }}>
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
                    
                                   <Box
  sx={{
    gridColumn: "span 4",
    p: { xs: 2, md: 4 }, // ✅ equal padding on all sides
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // ✅ vertical alignment
    alignItems: "center", // ✅ horizontal alignment
  }}
>
  <Box sx={{ maxWidth: 900, width: "100%" }}>
      {/* Heading */}
      <Typography
        sx={{ ...typography.displayL, color: "#1A2438", mb: 2 }}
      >
        Legal
      </Typography>

      {/* Subtitle */}
      <Typography variant="body1" sx={{ ...typography.h4,mb: 4, color: "#1C2D4B" }}>
        Reflux is a brand of Electro Flux Private Limited ("Electro Flux", "we",
        "us", "our"). We operate the Reflux service for repair, rental and
        resale of electro-lifting magnets.
      </Typography>

      {/* Company Info */}
      <Paper
        variant="outlined"
        sx={{
          p: 3,
          borderRadius: 2,
          mb: 5,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography  sx={{  ...typography.h4, color: "#0E1109", }}>
              Registered entity
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography sx={{  ...typography.h5, color: "#677489"}}>Electro Flux Private Limited</Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography  sx={{  ...typography.h4, color: "#0E1109", }}>
              Registered office
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography sx={{  ...typography.h5, color: "#677489"}}>[Address, City, State, PIN, India]</Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography  sx={{  ...typography.h4, color: "#0E1109", }}>
              CIN
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography sx={{  ...typography.h5, color: "#677489"}}>[Address, City, State, PIN, India]</Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Terms of Use */}
      <Typography sx={{ ...typography.h3, color: "#0B121E", mb: 2 }}>
        Website Terms of Use
      </Typography>

      <Box sx={{ lineHeight: 1.8 }}>
        <Typography  sx={{ ...typography.h5, color:"#0B121E", mt: 3 }}>
          1.1 Acceptance
        </Typography>
        <Typography sx={{ ...typography.bodySmall, color:"#111B2D"}}>
          By accessing refluxmagnets.com (the “Site”) or contacting us through
          forms/phone/WhatsApp, you agree to these Terms of Use, our Privacy
          Policy, and any product-specific terms.
        </Typography>

        <Typography variant="subtitle1" sx={{ ...typography.h5, color:"#0B121E", mt: 3 }}>
          1.2 Who may use the Site
        </Typography>
        <Typography sx={{ ...typography.bodySmall, color:"#111B2D"}}>
          The Site is intended for business and professional use in India by
          individuals 18+ acting on behalf of an organization.
        </Typography>

        <Typography variant="subtitle1" sx={{ ...typography.h5, color:"#0B121E", mt: 3 }}>
          1.3 Services shown on the Site
        </Typography>
        <Typography sx={{ ...typography.bodySmall, color:"#111B2D"}} component="div">
          <ul>
            <li>
              Repair of electro-lifting magnets (circular, rectangular,
              suspension – oil/air cooled) and related controllers/PSUs.
            </li>
            <li>
              Rental of circular lifting magnets (with controller & cables).
            </li>
            <li>Resale of refurbished magnets (buy/sell/exchange).</li>
          </ul>
          All descriptions, TAT bands and availability are indicative until we
          assess your asset and issue a written quotation.
        </Typography>

        <Typography variant="subtitle1" sx={{ ...typography.h5, color:"#0B121E", mt: 3 }}>
          1.4 Quotes & Orders
        </Typography>
        <Typography sx={{ ...typography.bodySmall, color:"#111B2D"}}>
          Submitting an RFQ or using the ROI tools does not create a binding
          order. Orders become binding only when we issue a Quotation/Order
          Acknowledgment and you accept it (PO/advance). We may decline orders
          that are unsafe, technically infeasible, or non-compliant.
        </Typography>

        <Typography variant="subtitle1" sx={{ ...typography.h5, color:"#0B121E", mt: 3 }}>
          1.5 Pricing & Taxes
        </Typography>
        <Typography sx={{ ...typography.bodySmall, color:"#111B2D"}}>
          Prices are exclusive of taxes unless stated otherwise. Applicable GST,
          mobilization/demobilization, packing, freight, site charges and duties
          are extra.
        </Typography>

        <Typography variant="subtitle1" sx={{ ...typography.h5, color:"#0B121E", mt: 3 }}>
          1.6 Content & IP
        </Typography>
        <Typography sx={{ ...typography.bodySmall, color:"#111B2D"}}>
          All content, marks and documents on the Site are owned by Electro Flux
          or its licensors. You may not copy or reuse except for internal
          business evaluation.
        </Typography>
      </Box>

      <Divider sx={{ mt: 5 }} />
            {/* Commercial Terms */}
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", mt: 6, mb: 2 }}
      >
        Commercial Terms — Repair, Rental & Resale (summary)
      </Typography>

      <Box sx={{ lineHeight: 1.8 }}>
        <Typography variant="subtitle1" sx={{ ...typography.h5, color:"#0B121E", mt: 3 }}>
          2.1 Inspection & diagnosis
        </Typography>
        <Typography sx={{ ...typography.bodySmall, color:"#111B2D"}}>
          We may require photos/videos and/or physical inspection. Hidden
          defects may alter scope, price and TAT after intake testing.
        </Typography>

        <Typography variant="subtitle1" sx={{ ...typography.h5, color:"#0B121E", mt: 3 }}>
          2.2 Turnaround (TAT) bands
        </Typography>
        <Typography sx={{ ...typography.bodySmall, color:"#111B2D"}}>
          Urgent: 24–48h • Standard: ~72h • Overhaul: 5–7 days <br />
          TAT is a good-faith estimate, dependent on parts, logistics and
          safety.
        </Typography>

        <Typography variant="subtitle1" sx={{ ...typography.h5, color:"#0B121E", mt: 3 }}>
          1.3 Services shown on the Site
        </Typography>
        <Typography sx={{ ...typography.bodySmall, color:"#111B2D"}} component="div">
          <ul>
            <li>
              Repair of electro-lifting magnets (circular, rectangular,
              suspension – oil/air cooled) and related controllers/PSUs.
            </li>
            <li>
              Rental of circular lifting magnets (with controller & cables).
            </li>
            <li>Resale of refurbished magnets (buy/sell/exchange).</li>
          </ul>
          All descriptions, TAT bands and availability are indicative until we
          assess your asset and issue a written quotation.
        </Typography>

        <Typography variant="subtitle1" sx={{ ...typography.h5, color:"#0B121E", mt: 3 }}>
          1.4 Quotes & Orders
        </Typography>
        <Typography sx={{ ...typography.bodySmall, color:"#111B2D"}}>
          Submitting an RFQ or using the ROI tools does not create a binding
          order. Orders become binding only when we issue a
          Quotation/Order Acknowledgment and you accept it (PO/advance). We may
          decline orders that are unsafe, technically infeasible, or
          non-compliant.
        </Typography>

        <Typography variant="subtitle1" sx={{ ...typography.h5, color:"#0B121E", mt: 3 }}>
          1.5 Pricing & Taxes
        </Typography>
        <Typography sx={{ ...typography.bodySmall, color:"#111B2D"}}>
          Prices are exclusive of taxes unless stated otherwise. Applicable GST,
          mobilization/demobilization, packing, freight, site charges and duties
          are extra.
        </Typography>

        <Typography variant="subtitle1" sx={{ ...typography.h5, color:"#0B121E", mt: 3 }}>
          1.6 Content & IP
        </Typography>
        <Typography sx={{ ...typography.bodySmall, color:"#111B2D"}}>
          All content, marks and documents on the Site are owned by Electro Flux
          or its licensors. You may not copy or reuse except for internal
          business evaluation.
        </Typography>
      </Box>
      </Box>
      </Box>
  {/* Footer Section */}
                 <Box
                 mt={40}
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
    // </Container>
  );
};

export default Legal;
