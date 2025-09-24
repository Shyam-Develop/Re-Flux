import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Chip,
} from "@mui/material";
import resalerefurbished from "../../../assets/Resalerefurbished.jpg"
import { typography } from "app/utils/constant";
import ResaleService from '../../../assets/Resalerefurbished.jpg';


 const refurbishedProducts = [
    {
      title: "Circular Lifting Magnet",
      size: "Ø1200 mm",
      certified: "Load-test 12 Mar 2025",
      imgSrc: ResaleService,
      liftCapacity: "Up To 2.5 Tons",
      powerSupply: "220 VDC / 28 A",
      included: "Controller (EF-RC220)  25 m cable",
    },
    {
      title: "Electromagnetic Lifting Beam",
      size: "Ø1500 mm",
      certified: "Load-test 15 Apr 2025",
      imgSrc: ResaleService,
      liftCapacity: "Up To 5 Tons",
      powerSupply: "380 VAC / 15 A",
      included: "Remote Controller (EF-RC380)  30 m cable",
    },
    {
      title: "Heavy-Duty Lifting Sling",
      size: "Ø2000 mm",
      certified: "Load-test 20 Jun 2025",
      imgSrc: ResaleService,
      liftCapacity: "Up To 10 Tons",
      powerSupply: "440 VAC / 20 A",
      included: "Manual Hoist  50 m cable",
    },
  ];


export default function ResalerefurbishedCard() {
  return (
    <Box sx={{ px: '5%', pb: 10 }}>
      {/* Heading */}
      <Box sx={{ mb: 4 }}>
        <Button
                 disableElevation
                 disableRipple
                 sx={{
                   ...typography.bodySmall,
                   marginBottom: 2,
                   textTransform: "none",
                   fontWeight: 400, 
                   color: "#1a4dab", 
                   backgroundColor: "rgba(36,121,233,0.08)", 
                   borderRadius: "20px", 
                   px: 2, 
                   py: 0.5,
                   boxShadow: "none", 
                   "&:hover": {
                     backgroundColor: "rgba(36,121,233,0.15)", 
                     boxShadow: "none",
                   },
                 }}
               >
                 Resale Services
               </Button>
        <Typography sx={{ ...typography.displayL, color: '#1A2438' }}>
          Check out our Refurbished section
        </Typography>
        <Typography sx={{ ...typography.h4, color: '#99A0AE' }}>
          Check out these rentals
        </Typography>
      </Box>

      {/* Product Cards */}
      <Grid container spacing={4} >
        {refurbishedProducts.map((product, idx) => (
          <Grid item xs={12} md={4} key={idx} sx={{ width: '1440px', height: '584px' }}>
            <Box
              sx={{
                borderRadius: 3,
                border: '1px solid #dbdbdb',
                //boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                p: 2,
                //bgcolor: 'background.paper',
                display: 'flex',
                flexDirection: 'column',
                width: '430px',
                height: '584px'
              }}
            >
              {/* Title & size */}
              <Typography sx={{ ...typography.h4, color: '#0B121E', width: '406px', height: '31px' }}>
                {product.title}
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#00000099', mb: 1 }}>
                {product.size}
              </Typography>
              <Typography sx={{ ...typography.bodySmall, color: '#00000099', mb: 1 }}>
                Certified: {product.certified}
              </Typography>

              {/* Image with badges */}
              <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', mb: 2 }}>
                <Box
                  component="img"
                  src={product.imgSrc}
                  alt={product.title}
                  sx={{ width: '460px', height: '240px', objectFit: 'cover' }}
                />

                {/* Badges */}
                <Chip
                  label="Available for Rent"
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    bgcolor: '#1b5e20',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 10,
                  }}
                />
                <Chip
                  label="Safety Tested"
                  size="small"
                  color="info"
                  sx={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '8px',
                    fontWeight: '700',
                    fontSize: '15px',
                    borderRadius: '3px'
                  }}
                />
              </Box>

              {/* Specs */}
              <Grid container spacing={2} sx={{ mb: 2, width: '406px', height: '47px' }}>
                <Grid item xs={6}>
                  <Typography sx={{ ...typography.h6, color: '#0E1626' }}>Lift Capacity</Typography>
                  <Typography sx={{ ...typography.bodySmall, color: '#677489' }}>
                    {product.liftCapacity}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ ...typography.h6, color: '#0E1626' }}>Power Supply</Typography>
                  <Typography sx={{ ...typography.bodySmall, color: '#677489' }}>
                    {product.powerSupply}
                  </Typography>
                </Grid>
              </Grid>

              {/* Included */}
              <Box sx={{ mb: 3, marginBottom: '30px', marginTop: '30px' }}>
                <Typography sx={{ ...typography.h6, color: '#0E1626' }}>Included</Typography>
                <Typography sx={{ ...typography.bodySmall, color: '#677489' }}>
                  {product.included}
                </Typography>
              </Box>

              {/* Buy Now button */}
              <Button
                variant="contained"
                fullWidth
                sx={{ backgroundColor: '#1a73e8', width: '406px', height: '44px', textTransform: 'none', ...typography.bodyStrong }}
              >
                Buy now
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* View All link */}
      {/* <Box sx={{ mt: 4, textAlign: 'right' }}>
        <Typography
          component="a"
          href="#"
          sx={{
            ...typography.h3,
            color: '#1976d2',

            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          View All Magnets for sale &rarr;
        </Typography>
      </Box> */}
    </Box>
  );
}
