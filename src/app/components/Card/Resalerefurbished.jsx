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
    <Box sx={{ px: { xs: 2, md: '5%' }, pb: 10 }}>
  {/* Heading */}
  <Box sx={{ mb: 4 }}>
    <Button
      disableElevation
      disableRipple
      sx={{
        ...typography.bodySmall,
        mb: 2,
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
        fontSize: { xs: "12px", md: "14px" },
      }}
    >
      Resale Services
    </Button>
    <Typography sx={{ ...typography.displayL, color: '#1A2438', fontSize: { xs: '20px', md: '32px' } }}>
      Check out our Refurbished section
    </Typography>
    <Typography sx={{ ...typography.h4, color: '#99A0AE', fontSize: { xs: '14px', md: '18px' } }}>
      Check out these rentals
    </Typography>
  </Box>

  {/* Product Cards */}
  <Grid container spacing={4}>
    {refurbishedProducts.map((product, idx) => (
      <Grid item xs={12} sm={6} md={4} key={idx}>
        <Box
          sx={{
            borderRadius: 3,
            border: '1px solid #dbdbdb',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
          }}
        >
          {/* Title & size */}
          <Typography sx={{ ...typography.h4, color: '#0B121E', mb: 0.5, fontSize: { xs: '16px', md: '20px' } }}>
            {product.title}
          </Typography>
          <Typography sx={{ ...typography.h5, color: '#00000099', mb: 1, fontSize: { xs: '12px', md: '14px' } }}>
            {product.size}
          </Typography>
          <Typography sx={{ ...typography.bodySmall, color: '#00000099', mb: 1, fontSize: { xs: '12px', md: '14px' } }}>
            Certified: {product.certified}
          </Typography>

          {/* Image with badges */}
          <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', mb: 2 }}>
            <Box
              component="img"
              src={product.imgSrc}
              alt={product.title}
              sx={{ width: '100%', height: { xs: '200px', md: '240px' }, objectFit: 'cover' }}
            />

            {/* Badges */}
            <Chip
              label="🔧 Available for Rent"
              size="small"
              sx={{
                position: 'absolute',
                top: 8,
                left: 8,
                bgcolor: '#1b5e20',
                color: 'white',
                fontWeight: '400',
                fontSize: { xs: '10px', md: '14px' },
                borderRadius:'2px'
              }}
            />
            <Chip
              label="🛡️ Safety Tested"
              size="small"
              sx={{
                position: 'absolute',
                bottom: '8px',
                left: '8px',
                fontWeight: '400',
                fontSize: { xs: '10px', md: '14px' },
                borderRadius: '2px',
                bgcolor: '#1976d2',
                color: 'white'
              }}
            />
          </Box>

          {/* Specs */}
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={6}>
              <Typography sx={{ ...typography.h6, color: '#0E1626', fontSize: { xs: '12px', md: '14px' } }}>Lift Capacity</Typography>
              <Typography sx={{ ...typography.bodySmall, color: '#677489', fontSize: { xs: '12px', md: '14px' } }}>
                {product.liftCapacity}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ ...typography.h6, color: '#0E1626', fontSize: { xs: '12px', md: '14px' } }}>Power Supply</Typography>
              <Typography sx={{ ...typography.bodySmall, color: '#677489', fontSize: { xs: '12px', md: '14px' } }}>
                {product.powerSupply}
              </Typography>
            </Grid>
          </Grid>

          {/* Included */}
          <Box sx={{ mb: 3 }}>
            <Typography sx={{ ...typography.h6, color: '#0E1626', fontSize: { xs: '12px', md: '14px' } }}>Included</Typography>
            <Typography sx={{ ...typography.bodySmall, color: '#677489', fontSize: { xs: '12px', md: '14px' } }}>
              {product.included}
            </Typography>
          </Box>

          {/* Buy Now button */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#1a73e8',
              textTransform: 'none',
              fontSize: { xs: '12px', md: '14px' },
              py: 1,
              ...typography.bodyStrong
            }}
          >
            Buy now
          </Button>
        </Box>
      </Grid>
    ))}
  </Grid>

  
</Box>

  );
}
