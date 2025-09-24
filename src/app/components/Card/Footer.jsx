// Footer.jsx
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  TextField,
  InputAdornment,
  IconButton,
  Button
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { typography, RefluxSvg } from 'app/utils/constant';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


// Replace these imports with your actual brand logos
import Brand1 from '../../../assets/Brand1.png';

const Footer = () => {
  return (
      <Box
           component="footer"
           sx={{
             backgroundColor: '#112B55',
             color: '#fff',
             borderTopLeftRadius: '50px',
             borderTopRightRadius: '50px',
             paddingLeft: '10%',
             paddingRight: '40px',
             paddingTop: '65px',
             mt: 10,
             position: 'relative',
             margin: '3%',
             
           }}
         >
           <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
             {/* Left Column */}
             <Grid item xs={12} md={4}>
               {/* Logo container - flex row */}
               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                 <Box>
                   <RefluxSvg />
                 </Box>
                 <Box>
                   <Typography
                     variant="h3"
                     sx={{ fontWeight: 'bold', width:'253.16px', height:'55.11px', letterSpacing: '2px', color: '#fff', lineHeight: 1 }}
                   >
                     ReFlux
                   </Typography>
                   <Typography variant="caption" sx={{ letterSpacing: '15px', width:'19px', height:'17px' }}>
                       MAGNETS
                   </Typography>
                 </Box>
               </Box>
   
               {/* A unit of + brand image */}
               <Box mt={6} display="flex" alignItems="center" gap={3}>
                 <Typography variant="h5                                                                                           ">A unit of</Typography>
                 <Box component="img" src={Brand1} alt="Electroflux" sx={{ height: 70 }} />
               </Box>
             </Grid>
   
             {/* Middle Column */}
             <Grid item xs={12} md={4}>
               {/* Contact Button */}
               <Button
                 variant="outlined"
                 sx={{
                   color: '#fff',
                   borderColor: '#fff',
                   borderRadius: '20px',
                   textTransform: 'none',
                   mb: 2,
                   px: 3,
                   py: 0.5,
                   fontSize: '0.8rem',
                 }}
               >
                 Contact
               </Button>
   
               {/* Contact details */}
               <Typography variant="body2" lineHeight={1.6}>
                 Xilliams Corner Wine © 2017.<br />
                 1112 A Market St # Ste B22,<br />
                 Charlottesville, CA 45565
               </Typography>
               <Typography variant="body2" sx={{ mt: 2, color: '#BFD8F9' }}>
                 (123) 456-7890
               </Typography>
               <Typography
                 variant="body2"
                 sx={{
                   mt: 1,
                   color: '#BFD8F9',
                   textDecoration: 'underline',
                   width: 'fit-content',
                   cursor: 'pointer',
                 }}
               >
                 contact@lift.agency
               </Typography>
             </Grid>
   
             {/* Right Column */}
             <Grid item xs={12} md={3}>
               {/* Links Button */}
               <Button
                 variant="outlined"
                 sx={{
                   color: '#fff',
                   borderColor: '#fff',
                   borderRadius: '20px',
                   textTransform: 'none',
                   mb: 2,
                   px: 3,
                   py: 0.5,
                   fontSize: '0.8rem',
                 }}
               >
                 Links
               </Button>
   
               {/* Links list */}
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                 <Link href="#" underline="none" color="#fff" variant="body2">
                   Facebook
                 </Link>
                 <Link href="#" underline="none" color="#fff" variant="body2">
                   Instagram
                 </Link>
                 <Link href="#" underline="none" color="#fff" variant="body2">
                   Youtube
                 </Link>
                 <Link
                   href="#"
                   underline="none"
                   variant="body2"
                   sx={{
                     display: 'flex',
                     alignItems: 'center',
                     color: '#fff',
                     fontWeight: 600,
                   }}
                 >
                   Wall of Love <span style={{ color: 'red', marginLeft: 6 }}>❤️</span>
                 </Link>
                 <Box sx={{ height: 1, backgroundColor: '#fff', width: 30, mt: 1 }} />
                 <Link
                   href="#"
                   underline="none"
                   variant="body2"
                   sx={{ fontWeight: 600, color: '#fff' }}
                 >
                   Sitemap
                 </Link>
               </Box>
             </Grid>
           </Grid>
   
           {/* Bottom bar */}
           <Box
             sx={{
               display: 'flex',
               justifyContent: 'space-between',
               alignItems: 'center',
               mt: 6,
             }}
           >
             <Typography variant="caption" sx={{ color: '#ccc', paddingLeft: '70%'}}>
               © 2020 Lift Media All rights reserved.
             </Typography>
   
             <IconButton
               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
               sx={{
                 border: '1px solid white',
                 borderRadius: '50%',
                 color: 'white',
                 backgroundColor: '#112B55',
                 '&:hover': {
                   backgroundColor: '#1b3a6b',
                 },
               }}
             >
               <ArrowUpwardIcon />
             </IconButton>
           </Box>
         </Box>
  );
};

export default Footer;
