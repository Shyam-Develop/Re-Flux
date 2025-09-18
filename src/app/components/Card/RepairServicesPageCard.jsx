import React, {useState} from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Chip,
  IconButton,
  Dialog, DialogContent, TextField, FormControl, Select, MenuItem,
  
} from "@mui/material";
import Scope1 from "../../../assets/Scope1.png";
import Scope2 from "../../../assets/Scope2.png";
import Scope3 from "../../../assets/Scope3.png";
import Scope4 from "../../../assets/Scope4.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { typography } from "app/utils/constant";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";



const services = [
  {
    id: 1,
    title: "Electrical",
    type: "Rewinds,resin potting,insulation upgrades(class F/H)",
    liftCapacity: "3 Tons",
    powerSupply: "None Required",
    sizes: "500mm / 800mm / 1000mm",
    price: 30,
    img: Scope1,
  },
  {
    id: 2,
    title: "Electrical",
    type: "Rewinds,resin potting,insulation upgrades(class F/H)",
    liftCapacity: "Varied",
    powerSupply: "Custom",
    sizes: "Custom Sizes Available",
    price: 100,
    img: Scope2,
  },
  {
    id: 3,
    title: "Electrical",
    type: "Rewinds,resin potting,insulation upgrades(class F/H)",
    liftCapacity: "1 Ton",
    powerSupply: "220V",
    sizes: "300mm / 500mm",
    price: 20,
    img: Scope3,
  },
    {
    id: 4,
    title: "Electrical",
    type: "Rewinds,resin potting,insulation upgrades(class F/H)",
    liftCapacity: "3 Tons",
    powerSupply: "None Required",
    sizes: "500mm / 800mm / 1000mm",
    price: 30,
    img: Scope4,
  },
  {
    id: 5,
    title: "Electrical",
    type: "Rewinds,resin potting,insulation upgrades(class F/H)",
    liftCapacity: "Varied",
    powerSupply: "Custom",
    sizes: "Custom Sizes Available",
    price: 100,
    img: Scope4,
  },
  {
    id: 6,
    title: "Electrical",
    type: "Rewinds,resin potting,insulation upgrades(class F/H)",
    liftCapacity: "1 Ton",
    powerSupply: "220V",
    sizes: "300mm / 500mm",
    price: 20,
    img: Scope4,
  },
];

export default function RepairServicesPageCard() {

   // This is dialogue for while click
   const UploadBox = ({ label }) => {
       return (
           <Box sx={{ my: 3 }}>
               <Typography variant="h6" gutterBottom>{label}</Typography>
               <label htmlFor="upload-input">
                   <Box
                       sx={{
                           border: '2px dashed #ccc',
                           borderRadius: 2,
                           p: 4,
                           textAlign: 'center',
                           cursor: 'pointer',
                           transition: 'border-color 0.3s ease',
                           '&:hover': { borderColor: 'primary.main' },
                       }}
                   >
                       <IconButton component="span" size="large">
                           <UploadFileIcon sx={{ fontSize: 40, color: 'text.secondary' }} />
                       </IconButton>
                       <Typography>
                           <strong style={{ color: '#1976d2' }}>Choose</strong> file to upload
                       </Typography>
                       <Typography variant="caption" color="text.secondary">
                           Select image in jpeg, PNG
                       </Typography>
                   </Box>
               </label>
               <input
                   id="upload-input"
                   type="file"
                   accept="image/jpeg, image/png"
                   style={{ display: 'none' }}
               />
           </Box>
       );
   };
   
   
     const [BrowseDialogopen, setBrowseDialogOpen] = useState(false);
   
     const handleClickOpen = () => {
       setBrowseDialogOpen(true);
     };
   
     const handledialogClose = () => {
       setBrowseDialogOpen(false);
     };





  return (
<Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#f9fafb" }}>
  {/* Swiper Container */}
  <Swiper
    modules={[Navigation]}
    navigation
    spaceBetween={24}
    slidesPerView={3}
    loop={true}
    breakpoints={{
      0: { slidesPerView: 1 },
      600: { slidesPerView: 2 },
      960: { slidesPerView: 3 },
    }}
  >
    {services.map((service) => (
      <SwiperSlide key={service.id}>
        {/* MUI Card Component */}
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            overflow: "hidden",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            transition: "all 0.4s ease-in-out",
            "&:hover": {
              transform: "scale(1.03)",
              backgroundColor: "#0b2d55",
              color: "white",
            },
            "&:hover .MuiTypography-root": {
              color: "white !important",
            },
            "&:hover .view-more-btn": {
              backgroundColor: "#944708 !important",
            },
          }}
        >
          {/* Image */}
          <Box sx={{ borderRadius: 2, position: "relative" }}>
            <CardMedia
              component="img"
              image={service.img}
              alt={service.title}
              sx={{
                height: 210,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                objectFit: "contain",
                borderRadius: 10,
                mt: 2,
                transition: "transform 0.6s ease-in-out",
              }}
            />
          </Box>

          {/* Content */}
          <CardContent sx={{ flexGrow: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                {service.title}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {service.type}
            </Typography>
          </CardContent>

          {/* View More Button */}
          <Box sx={{ p: 2, pt: 0 }}>
            <Button
              fullWidth
              variant="contained"
              className="view-more-btn"
              sx={{
                borderRadius: 2,
                textTransform: "none",
                bgcolor: "#b45309",
                transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
                opacity: 0,
                transform: "translateY(10px)",
                ".MuiCard-root:hover &": {
                  opacity: 1,
                  transform: "translateY(0)",
                  textDecoration: "underline",
                },
              }}
            >
              View More
            </Button>
          </Box>
        </Card>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* CTA Button */}
  <Button
    variant="contained"
    sx={{
      ...typography.bodyStrong,
      fontWeight: 600,
      mt: 4,
      textDecoration: "underline",
      width: "100%",
      bgcolor: "#b45309",
      borderRadius: 10,
      px: 6,
      py: 1.5,
      textTransform: "none",
      "&:hover": { bgcolor: "#92400e" },
    }}
   onClick={handleClickOpen}>
    Get a repair quote
  </Button>



    <Dialog
          open={BrowseDialogopen}
          onClose={handledialogClose}
          maxWidth="sm"
          fullWidth
          sx={{
            "& .MuiDialog-paper": {
              borderRadius: "16px",
              height: "100vh", // 👈 fixed height
              maxHeight: "100vh", // 👈 prevent overflow beyond screen
            },
          }}
        >
          <DialogContent>
            {/* <Card sx={{ textAlign: "center", p: 3 }}> */}
            <CardContent>
              <Typography
                sx={{
                  textAlign: "left",
                }}
                variant="h6"
                gutterBottom
              >
                Tell us what you need
              </Typography>
              <Typography
                //  variant="h6"
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                  color: "#111",
                }}
              >
                Company Name *
              </Typography>
              <TextField
                placeholder="Ex: John"
                variant="outlined"
                fullWidth
                name="name"
                id="name"
  
              />
  
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                  // ...typography.h6,
                  // fontWeight: 500,
                  color: "#111",
                  // color: theme.palette.primary.contrastText
                  marginTop: 2,
                }}
              >
                Contact Person *
              </Typography>
              <TextField
                placeholder="example@gmail.com"
                variant="outlined"
                fullWidth
                name="name"
                id="name"
  
              />
  
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                  // ...typography.h6,
                  // fontWeight: 500,
                  color: "#111",
                  // color: theme.palette.primary.contrastText
                  marginTop: 2,
                }}
              >
                Phone *
              </Typography>
              <TextField
                placeholder="example@gmail.com"
                variant="outlined"
                fullWidth
                name="name"
                id="name"
  
              />
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
  
                  color: "#111",
                  marginTop: 2,
                }}
              >
                Email *
              </Typography>
              <TextField
                placeholder="example@gmail.com"
                variant="outlined"
                fullWidth
                name="name"
                id="name"
  
              />
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                  // ...typography.h6,
                  // fontWeight: 500,
                  color: "#111",
                  // color: theme.palette.primary.contrastText
                  marginTop: 2,
                }}
              >
                Enquiry for *
              </Typography>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                <Select
  
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
  
                >
                  <MenuItem
                    value={10}
                  >
                    1-5
                  </MenuItem>
                  <MenuItem
                    value={20}
                  >
                    6-10
                  </MenuItem>
                  <MenuItem
                    value={30}
                  >
                    10-20
                  </MenuItem>
                  <MenuItem
                    //  sx={{
                    //   color: theme.palette.primary.contrastText
                    // }}
                    value={30}
                  >
                    20+
                  </MenuItem>
                </Select>
              </FormControl>
  
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                  // ...typography.h6,
                  // fontWeight: 500,
                  color: "#111",
                  // color: theme.palette.primary.contrastText
                  // marginTop: 5,
                }}
              >
                Message
              </Typography>
              <TextField
                placeholder="example@gmail.com"
                variant="outlined"
                fullWidth
                multiline
                minRows={3}
                name="name"
                id="name"
  
              />
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                  // ...typography.h6,
                  // fontWeight: 500,
                  color: "#111",
                  // color: theme.palette.primary.contrastText
                  // marginTop: 5,
                }}
              >
                Photos/Videos
              </Typography>
              <UploadBox />
  
            </CardContent>
            {/* Buttons */}
            <Box mt={3} display="flex" flexDirection={"column"} gap={2}>
              <Button
                variant="text"
                startIcon={<WhatsAppIcon sx={{ color: "#25D366" }} />}
                sx={{
                  color: "black", // text color
                  textTransform: "none", // keep normal text
                  fontWeight: 500,
                  fontSize: "14px",
                  "&:hover": {
                    backgroundColor: "transparent", // no hover background
                  },
                }}
              >
                Send on WhatsApp
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="primary"
              >
                Submit Message
              </Button>
            </Box>
  
            <Box mt={2}>
              <Button fullWidth variant="outlined">
                Continue to details
              </Button>
            </Box>
            {/* </Card> */}
          </DialogContent>
        </Dialog>
</Box>
  );
}
