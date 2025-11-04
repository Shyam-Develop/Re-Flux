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
import Footer from 'app/components/Card/Footer';


const Legal = () => {

  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    // <Container maxWidth="md" sx={{ py: 6 }}>
    <Box
      // display="grid"
      // gap="20px"
      // gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      sx={{
        "& > div": {
          gridColumn: isNonMobile ? undefined : "span 4",
        },
        padding: "10px",
        // width: '1440px',
        // height: '1770px'
      }}
    >
      <Box sx={{ gridColumn: "span 4", p: 2 }}>

        <Box
          sx={{
            gridColumn: "span 4",
            p: { xs: 2, md: 4 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* width: '1312px', height: '1586px' */}
          <Box sx={{  }}>
            {/* Heading */}
            <Typography
              sx={{ ...typography.displayL, fontWeight:700, fontSize:'56px', color: "#1A2438", mb: 2 }}
            >
              Legal
            </Typography>

            {/* Subtitle */}
            <Typography sx={{ ...typography.h4, fontWeight:400, fontSize:'24px', mb: 4, color: "#1C2D4B" }}>
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
                  <Typography sx={{ ...typography.h4, color: "#0E1109", }}>
                    Registered entity
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography sx={{ ...typography.h5, color: "#677489" }}>Electro Flux Private Limited</Typography>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Typography sx={{ ...typography.h4, color: "#0E1109", }}>
                    Registered office
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography sx={{ ...typography.h5, color: "#677489" }}>[Address, City, State, PIN, India]</Typography>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Typography sx={{ ...typography.h4, color: "#0E1109", }}>
                    CIN
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography sx={{ ...typography.h5, color: "#677489" }}>[Address, City, State, PIN, India]</Typography>
                </Grid>
              </Grid>
            </Paper>

            {/* Terms of Use */}
            <Typography sx={{ ...typography.h3, fontWeight:600, fontSize:'28px', color: "#0B121E", mb: 2 }}>
              Website Terms of Use
            </Typography>

            <Box sx={{ lineHeight: 1.8 }}>
              <Typography sx={{ ...typography.h5, color: "#0B121E", mt: 3 }}>
                1.1 Acceptance
              </Typography>
              <Typography sx={{ ...typography.bodySmall, color: "#111B2D" }}>
                By accessing refluxmagnets.com (the “Site”) or contacting us through
                forms/phone/WhatsApp, you agree to these Terms of Use, our Privacy
                Policy, and any product-specific terms.
              </Typography>

              <Typography sx={{ ...typography.h5, color: "#0B121E", mt: 3 }}>
                1.2 Who may use the Site
              </Typography>
              <Typography sx={{ ...typography.bodySmall, color: "#111B2D" }}>
                The Site is intended for business and professional use in India by
                individuals 18+ acting on behalf of an organization.
              </Typography>

              <Typography sx={{ ...typography.h5, color: "#0B121E", mt: 3 }}>
                1.3 Services shown on the Site
              </Typography>
              <Typography sx={{...typography.bodySmall, fontSize:'14px'}}>
                The Site describes:
              </Typography>
              <Typography sx={{ ...typography.bodySmall, color: "#111B2D" }} component="div">
            
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

              <Typography sx={{ ...typography.h5, color: "#0B121E", mt: 3 }}>
                1.4 Quotes & Orders
              </Typography>
              <Typography sx={{ ...typography.bodySmall, color: "#111B2D" }}>
                Submitting an RFQ or using the ROI tools does not create a binding
                order. Orders become binding only when we issue a Quotation/Order
                Acknowledgment and you accept it (PO/advance). We may decline orders
                that are unsafe, technically infeasible, or non-compliant.
              </Typography>

              <Typography sx={{ ...typography.h5, color: "#0B121E", mt: 3 }}>
                1.5 Pricing & Taxes
              </Typography>
              <Typography sx={{ ...typography.bodySmall, color: "#111B2D" }}>
                Prices are exclusive of taxes unless stated otherwise. Applicable GST,
                mobilization/demobilization, packing, freight, site charges and duties
                are extra.
              </Typography>

              <Typography sx={{ ...typography.h5, color: "#0B121E", mt: 3 }}>
                1.6 Content & IP
              </Typography>
              <Typography sx={{ ...typography.bodySmall, color: "#111B2D" }}>
                All content, marks and documents on the Site are owned by Electro Flux
                or its licensors. You may not copy or reuse except for internal
                business evaluation.
              </Typography>
            </Box>

            <Divider sx={{ mt: 5 }} />
            {/* Commercial Terms */}
            <Typography

              sx={{ ...typography.h3, color: "#0B121E", mt: 6, mb: 2 }}
            >
              Commercial Terms — Repair, Rental & Resale (summary)
            </Typography>

            <Box sx={{ lineHeight: 1.8 }}>
              <Typography sx={{ ...typography.h5, color: "#0B121E", mt: 3 }}>
                2.1 Inspection & diagnosis
              </Typography>
              <Typography sx={{ ...typography.bodySmall, color: "#111B2D" }}>
                We may require photos/videos and/or physical inspection. Hidden
                defects may alter scope, price and TAT after intake testing.
              </Typography>

              <Typography sx={{ ...typography.h5, color: "#0B121E", mt: 3 }}>
                2.2 Turnaround (TAT) bands
              </Typography>
              <Typography sx={{ ...typography.bodySmall, color: "#111B2D" }}>
                Urgent: 24–48h • Standard: ~72h • Overhaul: 5–7 days <br />
                TAT is a good-faith estimate, dependent on parts, logistics and
                safety.
              </Typography>

              <Typography sx={{ ...typography.h5, color: "#0B121E", mt: 3 }}>
                1.3 Services shown on the Site
              </Typography>
              <Typography sx={{ ...typography.bodySmall, color: "#111B2D" }} component="div">
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

              <Typography sx={{ ...typography.h5, color: "#0B121E", mt: 3 }}>
                1.4 Quotes & Orders
              </Typography>
              <Typography sx={{ ...typography.bodySmall, color: "#111B2D" }}>
                Submitting an RFQ or using the ROI tools does not create a binding
                order. Orders become binding only when we issue a
                Quotation/Order Acknowledgment and you accept it (PO/advance). We may
                decline orders that are unsafe, technically infeasible, or
                non-compliant.
              </Typography>

              <Typography sx={{ ...typography.h5, color: "#0B121E", mt: 3 }}>
                1.5 Pricing & Taxes
              </Typography>
              <Typography sx={{ ...typography.bodySmall, color: "#111B2D" }}>
                Prices are exclusive of taxes unless stated otherwise. Applicable GST,
                mobilization/demobilization, packing, freight, site charges and duties
                are extra.
              </Typography>

              <Typography sx={{ ...typography.h5, color: "#0B121E", mt: 3 }}>
                1.6 Content & IP
              </Typography>
              <Typography sx={{ ...typography.bodySmall, color: "#111B2D" }}>
                All content, marks and documents on the Site are owned by Electro Flux
                or its licensors. You may not copy or reuse except for internal
                business evaluation.
              </Typography>
            </Box>
          </Box>
        </Box>


        {/* Footer Section */}
        <Box >
          <Footer />
        </Box>
      </Box>
    </Box>
    // </Container>
  );
};

export default Legal;
