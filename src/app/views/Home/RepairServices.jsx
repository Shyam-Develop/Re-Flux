import React from 'react';
import { Box, Grid, Typography, Button, Chip } from '@mui/material';
import repairmainimg from '../../../assets/repairservices_img1.png'; 
import repairmainimg2 from '../../../assets/repairservices_img2.png'; 


const ServiceCard = ({ image, title, faults, turnaround, imageLeft = true }) => {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      sx={{ marginBottom: 4 }}
      direction={imageLeft ? 'row' : 'row-reverse'}
    >
      {/* Image Section */}
      <Grid item xs={12} md={5}>
        <Box
          component="img"
          src={repairmainimg2}
          alt={title}
          sx={{ width: '100%', borderRadius: 1, objectFit: 'cover' }}
        />
       
      </Grid>

      {/* Content Section */}
      <Grid item xs={12} md={7} sx={{marginBottom: '20%'}}>
        <Typography variant="h6" gutterBottom >
          {title}
        </Typography>

        <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
          Common faults
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          {faults.map((fault, index) => (
            <Chip key={index} label={fault} variant="outlined" />
          ))}
        </Box>

        <Typography variant="body2" sx={{ mb: 2 }}>
          <strong>Turnaround Time</strong> <br />
          {turnaround}
        </Typography>

        <Button variant="contained" sx={{ backgroundColor: '#1b2947' }}>
          View Details
        </Button>
      </Grid>
    </Grid>
  );
};

const RepairServices = () => {
 
  return (
    <>
      {/* Top Image */}
      <div style={topImageStyle}>
        <img src={repairmainimg} alt="Top Banner" style={imageStyle} />
      </div>

      <Box sx={{  margin: '0 auto', padding: '120px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' , fontSize:'35px',}}>
            Rent Industrial Magnets with Ease
          </Typography>
          <Typography sx={{ maxWidth: '55%', color: 'text.secondary' , fontSize:'larger'}}>
            Get powerful lifting magnets when you need them — without the upfront cost.
            Flexible rental plans, quick installation, and reliable performance for every project.
          </Typography>
        </Box>

        {/* Service Cards */}
        <ServiceCard
          image={repairmainimg2}
          title="Rent Industrial Magnets with Ease"
          faults={faultsList}
          turnaround="3–5d / 5–7d / 10–12d"
          imageLeft={true}
        />
        <ServiceCard
          image={repairmainimg2}
          title="Rent Industrial Magnets with Ease"
          faults={faultsList}
          turnaround="3–5d / 5–7d / 10–12d"
          imageLeft={false}
        />
        <ServiceCard
          image={repairmainimg2}
          title="Rent Industrial Magnets with Ease"
          faults={faultsList}
          turnaround="3–5d / 5–7d / 10–12d"
          imageLeft={true}
        />
        <ServiceCard
                  image={repairmainimg2}
                  title="Rent Industrial Magnets with Ease"
                  faults={faultsList}
                  turnaround="3–5d / 5–7d / 10–12d"
                  imageLeft={false}
                />
        
      </Box>
    </>
  );
};
 const topImageStyle = {
    width: '1440px',
    height: '329px',
    display: 'flex',
    gap: '10px',
    transform: 'rotate(0deg)',
    opacity: 1,
    boxSizing: 'border-box',
    margin: '0 auto',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const faultsList = [
    'Loose junctions',
    'Capacity drop',
    'Uneven flux',
    'Loose junctions',
    'Uneven flux',
    'Loose junctions',
  ];

export default RepairServices;
