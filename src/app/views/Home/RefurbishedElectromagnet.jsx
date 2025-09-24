import { React, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Link,
  Card,
  CardMedia,
  CardContent,
  Accordion,
  Avatar,
  AccordionSummary,
  AccordionDetails,
  Divider,
  IconButton,
  Grid,
  Modal,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  InputAdornment,
  Dialog,
  DialogContent,
  FormControl,
  Select,
  MenuItem,
  Stack,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import HandshakeIcon from "@mui/icons-material/Handshake";
import handshake1 from "../../../assets/handshake3.jpg";
import Rentinstead from "../../../assets/Rentinstaed.jpg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import videoFile from "../../../assets/MicrosoftTeams-video.mp4";
import WhatsApp from "../../../assets/whatsappimg.jpg";
import RepairsectionCard from "app/components/Card/RepairsectionCard";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import serviceimg from "../../../assets/Repairservice.png";
import before from "../../../assets/beforecstudy.png";
import after from "../../../assets/aftercstudy.png";
import Electromagnetrepair from "../../../assets/EletromagnetRepair.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RentServicesCard from "app/components/Card/RentServicesCard";
import RentingMagnet from "../../../assets/RentingMagnet.png";
import ResaleServices from "app/components/Card/ResaleServices";
import ROIimage from "../../../assets/ROICalculator.jpg";
import Brand1 from "../../../assets/Brand1.png";
import Brand2crea from "../../../assets/Brand2crea.png";
import Blogs1 from "../../../assets/Blogs1.jpg";
import Blogs2 from "../../../assets/Blogs2.jpg";
import Blogs3 from "../../../assets/Blogs3.jpg";
import Blogs4 from "../../../assets/Blogs4.jpg";
import casestudy from "../../../assets/Case Study1.png";
import RepairServicesPageCard from "app/components/Card/RepairServicesPageCard";
import ProcessCards from "app/components/Card/HowweworkCard";
import ResalerefurbishedCard from "app/components/Card/Resalerefurbished";
import realisticillustration from "../../../assets/Realisticillustration.png";
import Approach1 from "../../../assets/Approach1.png";
import Approach2 from "../../../assets/Approach2.png";
import Approach3 from "../../../assets/Approach3.png";
import Approach4 from "../../../assets/Approach4.png";
import Approach5 from "../../../assets/Approach5.jpg";
import Roi1 from "../../../assets/Roi1.png";
import Roi2 from "../../../assets/Roi2.png";
import Whyitworkcard from "app/components/Card/Whyitworkcard";
import Whyitworkimg from "../../../assets/whyitworkimg.jpg";
import { typography } from "app/utils/constant";
import { grey } from "@mui/material/colors";
import SellRentServicesCard from "app/components/Card/SellRentServicesCard";
import Refurbishedmagnet from "../../../assets/topbarservice1.jpg"
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Footer from 'app/components/Card/Footer';
import rentalimg from "../../../assets/rental_img.jpg";

import { useNavigate } from "react-router-dom";




const RefurbishedElectromagnet = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const [BrowseDialogopen, setBrowseDialogOpen] = useState(false);

  const handleClickOpen = () => {
    setBrowseDialogOpen(true);
  };
  const navigate = useNavigate();
  const handledialogClose = () => {
    setBrowseDialogOpen(false);
  };



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


  //Refurbished Magnet
 const refurbishedProducts = [
    {
      title: "Circular Lifting Magnet",
      size: "Ø1200 mm",
      certified: "Load-test 12 Mar 2025",
      imgSrc: Refurbishedmagnet,
      liftCapacity: "Up To 2.5 Tons",
      powerSupply: "220 VDC / 28 A",
      included: "Controller (EF-RC220)  25 m cable",
    },
    {
      title: "Electromagnetic Lifting Beam",
      size: "Ø1500 mm",
      certified: "Load-test 15 Apr 2025",
      imgSrc: Refurbishedmagnet,
      liftCapacity: "Up To 5 Tons",
      powerSupply: "380 VAC / 15 A",
      included: "Remote Controller (EF-RC380)  30 m cable",
    },
    {
      title: "Heavy-Duty Lifting Sling",
      size: "Ø2000 mm",
      certified: "Load-test 20 Jun 2025",
      imgSrc: Refurbishedmagnet,
      liftCapacity: "Up To 10 Tons",
      powerSupply: "440 VAC / 20 A",
      included: "Manual Hoist  50 m cable",
    },
    {
      title: "Heavy-Duty Lifting Sling",
      size: "Ø2000 mm",
      certified: "Load-test 20 Jun 2025",
      imgSrc: Refurbishedmagnet,
      liftCapacity: "Up To 10 Tons",
      powerSupply: "440 VAC / 20 A",
      included: "Manual Hoist  50 m cable",
    },
    {
      title: "Heavy-Duty Lifting Sling",
      size: "Ø2000 mm",
      certified: "Load-test 20 Jun 2025",
      imgSrc: Refurbishedmagnet,
      liftCapacity: "Up To 10 Tons",
      powerSupply: "440 VAC / 20 A",
      included: "Manual Hoist  50 m cable",
    },
    {
      title: "Heavy-Duty Lifting Sling",
      size: "Ø2000 mm",
      certified: "Load-test 20 Jun 2025",
      imgSrc: Refurbishedmagnet,
      liftCapacity: "Up To 10 Tons",
      powerSupply: "440 VAC / 20 A",
      included: "Manual Hoist  50 m cable",
    },
  ];



  // const Refurbished = [
  //   {
  //     id: 1,
  //     title: "Sell Us",
  //     type: "Coil",
  //     subtitile: "Per day",
  //     icon: HandshakeIcon,
  //     img: Refurbishedmagnet,
  //     price: 25,
  //     liftCapacity: "2.5 tons",
  //     powerSupply: "220V / 110V",
  //     sizes: "700mm / 890mm /120mm",
  //   },
  //   {
  //     id: 2,
  //     title: "Exchange",
  //     type: "Coil",
  //     subtitile: "Per day",
  //     icon: HandshakeIcon,
  //     img: Refurbishedmagnet,
  //     price: 25,
  //     liftCapacity: "2.5 tons",
  //     powerSupply: "220V / 110V",
  //     sizes: "700mm / 890mm /120mm",
  //   },
  //   {
  //     id: 3,
  //     title: "Exchange",
  //     type: "Coil",
  //     subtitile: "Per day",
  //     icon: HandshakeIcon,
  //     img: Refurbishedmagnet,
  //     price: 25,
  //     liftCapacity: "2.5 tons",
  //     powerSupply: "220V / 110V",
  //     sizes: "700mm / 890mm /120mm",
  //   },
  //   {
  //     id: 4,
  //     title: "Exchange",
  //     type: "Coil",
  //     subtitile: "Per day",
  //     icon: HandshakeIcon,
  //     img: Refurbishedmagnet,
  //     price: 25,
  //     liftCapacity: "2.5 tons",
  //     powerSupply: "220V / 110V",
  //     sizes: "700mm / 890mm /120mm",
  //   },
  //   {
  //     id: 5,
  //     title: "Exchange",
  //     type: "Coil",
  //     subtitile: "Per day",
  //     icon: HandshakeIcon,
  //     img: Refurbishedmagnet,
  //     price: 25,
  //     liftCapacity: "2.5 tons",
  //     powerSupply: "220V / 110V",
  //     sizes: "700mm / 890mm /120mm",
  //   },
  //   {
  //     id: 6,
  //     title: "Exchange",
  //     type: "Coil",
  //     subtitile: "Per day",
  //     icon: HandshakeIcon,
  //     img: Refurbishedmagnet,
  //     price: 25,
  //     liftCapacity: "2.5 tons",
  //     powerSupply: "220V / 110V",
  //     sizes: "700mm / 890mm /120mm",
  //   },
  // ];
  //Rent Instead section services
  const services = [
    {
      title: "Circular Lifting Magnet",
      subtitle: "Coil",
      price: "$25",
      period: "per day",
      lift: "2.5 Tons",
      power: "220V / 110V",
      size: "700mm / 900mm / 1200mm",
      img: rentalimg, 
    },
    {
      title: "Circular Lifting Magnet",
      subtitle: "Coil",
      price: "$30",
      period: "per day",
      lift: "3 Tons",
      power: "220V / 110V",
      size: "800mm / 1000mm / 1200mm",
      img: rentalimg,
    },
     {
      title: "Circular Lifting Magnet",
      subtitle: "Coil",
      price: "$25",
      period: "per day",
      lift: "2.5 Tons",
      power: "220V / 110V",
      size: "700mm / 900mm / 1200mm",
      img: rentalimg, 
    },
     {
      title: "Circular Lifting Magnet",
      subtitle: "Coil",
      price: "$25",
      period: "per day",
      lift: "2.5 Tons",
      power: "220V / 110V",
      size: "700mm / 900mm / 1200mm",
      img: rentalimg, 
    },
    
    // add more cards here
  ];

  //sell or exchange section
  const servicesnew = [
    {
      id: 1,
      title: "Sell Us",
      type: "Rental unit eliminated production loss",
      icon: HandshakeIcon,
      img: handshake1,
    },
    {
      id: 2,
      title: "Exchange",
      type: "Class-H insulation, terminals/ leads to OEM spec",
      icon: HandshakeIcon,
      img: handshake1,
    },
  ];
  const steps = [
    {
      number: "1",
      title: "Shortlist",
      desc: "Filter and pick a unit (or tell us your spec)",
    },
    {
      number: "2",
      title: "Assess",
      desc: "We share test data, photos, cert & warranty terms",
    },
    {
      number: "3",
      title: "Quote",
      desc: "Itemized quotation with logistics & timelines",
    },
    {
      number: "4",
      title: "Dispatch",
      desc: "24–48h after confirmation (subject to availability)",
    },
    {
      number: "5",
      title: "Install",
      desc: "Optional commissioning & operator briefing",
    },
  ];


  //ROI Calcultor
  const roiData = [
    {
      title: "Repair vs Replace",
      description:
        "Estimate the cheapest path. We also compare renting during lead time vs paying downtime.",
      image: ROIimage,
    },
    {
      title: "Repair vs Replace",
      description:
        "Estimate the cheapest path. We also compare renting during lead time vs paying downtime.",
      image: ROIimage,
    },
  ];

  const partnerData = [
    {
      id: 1,
      logo: Brand1, // Replace with actual path
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut nisl turpis. Mauris vitae commodo elit,",
    },
    {
      id: 2,
      logo: Brand2crea,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut nisl turpis. Mauris vitae commodo elit,",
    },
    {
      id: 3,
      logo: Brand2crea,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut nisl turpis. Mauris vitae commodo elit,",
    },
    {
      id: 4,
      logo: Brand1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut nisl turpis. Mauris vitae commodo elit,",
    },
  ];

  const faqData = [
    {
      question: "Do I need to be home during the cleaning?",
      answer: "No, as long as we have access, you can carry on with your day.",
    },
    {
      question: "Are your restoration services?",
      answer: "Yes, we offer full restoration in select areas.",
    },
    {
      question: "What happens if I’m not satisfied with the Magnet?",
      answer: "We offer a satisfaction guarantee and support options.",
    },
    {
      question: "Can I schedule recurring services?",
      answer: "Yes, you can set weekly or monthly recurring schedules.",
    },
    {
      question: "Is there a cancellation fee?",
      answer: "Nope — cancel any time before 24 hours of service.",
    },
  ];

  const blogData = [
    {
      title: "7 Essential Tips For Efficient Electromagnet Servicing",
      author: "Hannah Cole",
      date: "March 5, 2035",
      image: Blogs1,
      featured: true,
    },
    {
      title: "The Advantages of Using Electromagnets in Repairs",
      author: "Lucas Wei",
      date: "March 18, 2035",
      image: Blogs2,
    },
    {
      title: "Electromagnet Maintenance Checklist for Technicians",
      author: "Mia Langston",
      date: "April 1, 2035",
      image: Blogs3,
    },
    {
      title: "How Frequently Should You Service Electromagnets?",
      author: "Julian Snow",
      date: "April 25, 2035",
      image: Blogs4,
    },
  ];




  const images = [
    Roi1, // Default large image
    Roi2,
    Roi1,
    Roi2,
    Roi1,
    Roi2,
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const [expanded, setExpanded] = useState(null);

  const handleChange = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        bgcolor: "white",
        // textAlign: "center",
        p: 4,
      }}
    >

      <Box
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          // alignItems: "left"
        }}
      >
        {/* Heading */}
        <Typography
          // variant="h4"
          sx={{
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 700,
            fontSize: "64px",
            lineHeight: 1.1, // equivalent to 110%
            letterSpacing: "-0.31px", // Figma's -0.56% of 56px
            textAlign: "left", // matches Figma's horizontal alignment
            display: "flex",
            alignItems: "left", // vertical alignment middle
            justifyContent: "left",
            // ml: 1
          }}
        >
          Refurbished Electro-Lifting <br /> Magnet (Certified & Warrenty)
        </Typography>
        {/* Subtext line */}
        <Typography
          sx={{
            mt: 2,
            fontFamily: "Space Grotesk, Regular",
            fontSize: "24px",
            fontWeight: 400,
            lineHeight: "130%",
            //   color: "#111827",
            textAlign: "left",
            color: "gray",
          }}
        >
          ASME-aligned ● Warranty up to 12 mo ● Pan-India
        </Typography>
        {/* Lighter subtext */}
        <Typography
          sx={{
            mt: 1,
            ...typography.h3medium,
            fontWeight: 500,
            color: "#999",
          }}
        >
          Buy, sell or exchange. Load-test certificate provided.
        </Typography>
        {/* Links row */}
        <Box sx={{ mt: 2, display: "flex", gap: 4, flexWrap: "wrap" }}>
          <Link
            href="#"
            sx={{
              fontFamily: "Fira Sans, SemiBold",
              fontWeight: 600,
              fontSize: "18px",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Browse Inventory
          </Link>
          <Link
            href="#"
            sx={{
              fontFamily: "Fira Sans, SemiBold",
              fontWeight: 600,
              fontSize: "18px",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Sell/Exchange Your Magnet
          </Link>
          <Link
            href="#"
            sx={{
              fontFamily: "Fira Sans, SemiBold",
              fontWeight: 600,
              fontSize: "18px",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            WhatsApp an Engineer
          </Link>
        </Box>

        {/* chip */}
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                ...typography.h3medium,
                fontWeight: 500,
                mb: "4px",

              }}
            >
              Filter By diameter
            </Typography>
            <Select

              sx={{

                ...typography.bodyBasemedium,
                fontWeight: 400,
                border: "1px solid #E17A00",
              }}
              fullWidth size="small" defaultValue="">
              <MenuItem
                sx={{
                  ...typography.bodyBasemedium,
                  fontWeight: 400,
                }}
                value="All"
              >
                All
              </MenuItem>
              <MenuItem
                sx={{
                  ...typography.bodyBasemedium,
                  fontWeight: 400,
                }}
                value="option1"
              >
                Option 1
              </MenuItem>
            </Select>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                ...typography.h3medium,
                fontWeight: 500,
                mb: "4px",
              }}
            >
              Capacity
            </Typography>
            <Select
              sx={{
                border: "1px solid #E17A00",
                ...typography.bodyBasemedium,
                fontWeight: 400,
              }}
              fullWidth size="small" defaultValue="">
              <MenuItem
                sx={{
                  ...typography.bodyBasemedium,
                  fontWeight: 400,
                }}
                value="All"
              >
                All
              </MenuItem>
              <MenuItem
                sx={{
                  ...typography.bodyBasemedium,
                  fontWeight: 400,
                }}
                value="option1"
              >
                Option 1
              </MenuItem>
            </Select>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                ...typography.h3medium,
                fontWeight: 500,
                mb: "4px",
              }}
            >
              Duty Cycle
            </Typography>
            <Select
              sx={{
                border: "1px solid #E17A00",
                ...typography.bodyBasemedium,
                fontWeight: 400,
              }}
              fullWidth size="small" defaultValue="">
              <MenuItem
                sx={{
                  ...typography.bodyBasemedium,
                  fontWeight: 400,
                }}
                value="All"
              >
                All
              </MenuItem>
              <MenuItem
                sx={{
                  ...typography.bodyBasemedium,
                  fontWeight: 400,
                }}
                value="option1"
              >
                Option 1
              </MenuItem>
            </Select>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                ...typography.h3medium,
                fontWeight: 500,
                mb: "4px",

              }}
            >
              Voltage
            </Typography>
            <Select

              sx={{
                ...typography.bodyBasemedium,
                fontWeight: 400,
                border: "1px solid #E17A00",
              }}
              fullWidth size="small" defaultValue="">
              <MenuItem
                sx={{
                  ...typography.bodyBasemedium,
                  fontWeight: 400,
                }}
                value="All"
              >
                All
              </MenuItem>
              <MenuItem
                sx={{
                  ...typography.bodyBasemedium,
                  fontWeight: 400,
                }}
                value="option1"
              >
                Option 1
              </MenuItem>
            </Select>
          </Box>


        </Box>

        {/* Refurbished section */}
         <Box sx={{  pb: 10 , marginTop:'20px'}}>
               
               {/* Product Cards */}
               <Grid container spacing={4}  >
                 {refurbishedProducts.map((product, idx) => (
                   <Grid item xs={12} md={4} key={idx} sx={{width:'1440px', height:'584px', marginTop:'20px'}}>
                     <Box
                       sx={{
                         borderRadius: 3,
                         border:'1px solid #dbdbdb',
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
                       <Typography sx={{ ...typography.h4, color:'#0B121E', width: '406px', height: '31px' }}>
                         {product.title}
                       </Typography>
                       <Typography sx={{ ...typography.h5, color:'#00000099', mb: 1 }}>
                         {product.size}
                       </Typography>
                       <Typography sx={{ ...typography.bodySmall, color:'#00000099', mb: 1 }}>
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
                           <Typography sx={{ ...typography.h6, color:'#0E1626' }}>Lift Capacity</Typography>
                           <Typography sx={{ ...typography.bodySmall, color:'#677489' }}>
                             {product.liftCapacity}
                           </Typography>
                         </Grid>
                         <Grid item xs={6}>
                           <Typography sx={{ ...typography.h6, color:'#0E1626' }}>Power Supply</Typography>
                           <Typography sx={{ ...typography.bodySmall, color:'#677489' }}>
                             {product.powerSupply}
                           </Typography>
                         </Grid>
                       </Grid>
       
                       {/* Included */}
                       <Box sx={{ mb: 3, marginBottom: '30px', marginTop: '30px' }}>
                         <Typography sx={{ ...typography.h6, color:'#0E1626' }}>Included</Typography>
                         <Typography sx={{ ...typography.bodySmall, color:'#677489' }}>
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
         </Box>

         
        {/* Left - Features with vertical timeline */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid #ddd",
            borderRadius: 3,
            // ml: 5,
            // mt: 10,
            // px: 4,
            // py: 4,
            // gap: 6,
            bgcolor: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              px: { xs: 2, md: 6 },
              py: 6,
              // border: "1px solid #e5e7eb",
              borderRadius: 2,
              backgroundColor: "#fff",
            }}
          >
            {/* Left Section */}
            <Box sx={{ flex: 1 }}>
              {/* Heading */}
              <Typography
                sx={{
                  fontWeight: 600,
                  ...typography.h3R,
                  mt: 8,
                }}
              >
                How it works
              </Typography>

              {/* Green underline */}
              <Box
                sx={{
                  width: "280px",           // fixed width for the line
                  height: "2px",
                  fontWeight: 700,          // thickness of the line
                  backgroundColor: "#0f766e", // green color (you can tweak this)
                  mt: 1,                   // spacing from the heading
                  mb: 2,                   // spacing before the paragraph
                }}
              />

              {/* Subtitle */}
              <Typography
                sx={{
                  ...typography.h3medium,
                  color: "#4B5563",
                }}
              >
                Let’s embody your beautiful ideas together, simplify the way you
                visualize your next big thing.
              </Typography>
            </Box>


            {/* Right Section: Steps */}
            <Box sx={{ flex: 2, display: "flex", flexWrap: "wrap" }}>
              {steps.map((step) => (
                <Box
                  key={step.number}
                  sx={{
                    flex: "1 1 50%",
                    mb: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      ...typography.h3R,
                      mb: 0.5,
                    }}
                  >
                    {step.number}. {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      ...typography.h3medium,
                      color: "#4B5563",
                    }}
                  >
                    {step.desc}
                  </Typography>
                </Box>
              ))}

              {/* Optional CTA Link */}
              <Box sx={{ flex: "1 1 50%", mt: 1 }}>
                <Link
                  href="#"
                  underline="hover"
                  sx={{
                    fontWeight: 600,
                    ...typography.bodyStrongB,
                    color: "#0B5ED7",
                    textDecoration: "underline",
                  }}
                  onClick={handleClickOpen} >
                  Request a Quote
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Right - Dynamic Image */}
          {/* <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            src={Approach5}
            alt="ElectroMagnet Repair"
            sx={{
              width: "100%",
              maxWidth: 600,
              borderRadius: 3,
              objectFit: "cover",
              transition: "0.5s",
            }}
          />
        </Box> */}
        </Box>
      </Box>

      {/* Optional: Section for “Sell or exchange your used magnet” */}
      <Box>
        <Typography
          sx={{
            mt: 8,
            ...typography.h3RBold,
            fontWeight: 600,
            ml: 2,
            
          }}
        >
          Sell or exchange your used magnet
        </Typography>
        <Typography
          sx={{
            mt: 1,
            ...typography.bodyBasemedium,
            color: "#555",
            ml: 2
          }}
        >
          Turn idle assets into value—or trade up to a certified unit.
        </Typography>

        {/* Sell or exchange your used magnet images section */}
        <Box
          sx={{
            // px: { xs: 2, md: 6 },
            // py: 6,
            backgroundColor: "#f9fafb",
            ml: 2,
            width:'1280px',
            height:'252px'
          }}
        >
          {/* Grid-like Card Layout */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
            }}
          >
            {servicesnew.map((service) => (
              <Card
                key={service.id}
                sx={{
                  flex: "1 1 calc(50% - 24px)", // two cards per row with gap
                  minWidth: "280px",
                  borderRadius: 2,
                  padding: 3,
                  border: "1px solid #e5e7eb",
                  boxShadow: "none",
                  backgroundColor: "#fff",
                  transition: "all 0.3s",
                  "&:hover": {
                    backgroundColor: "#0b2d55",
                    color: "#eee",
                  },
                }}
              >
                {/* Icon circle */}
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    backgroundColor: "#f3f4f6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={service.img}
                    alt="service icon"
                    sx={{
                      width: 24,
                      height: 24,
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </Box>

                {/* Text */}
                <CardContent sx={{ p: 0, textAlign: "left" }}>
                  <Typography
                    sx={{
                      fontFamily: "Space Grotesk Regular",
                      fontWeight: 600,
                      fontSize: "28px",
                      // color: "#111827",
                      color: "inherit",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Fira Sans Regular",
                      fontWeight: 400,
                      fontSize: "18px",
                      // color: "#111827",
                      color: "inherit",
                    }}
                  >
                    {service.type}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2, pt: 0 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    className="view-more-btn"
                    sx={{
                      mt: 2,
                      borderRadius: 2,
                      textTransform: "none",
                      bgcolor: "#b45309",
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1, // space between text and icon
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                      opacity: 0,
                      transform: "translateY(10px)",
                      textDecoration: "underline",

                      ".MuiCard-root:hover &": {
                        opacity: 1,
                        transform: "translateY(0)",
                        textDecoration: "underline",
                        bgcolor: "#b45309",
                        color: "white",
                      },

                      "&:hover .arrow-icon": {
                        opacity: 1,
                        transform: "translateX(4px)",
                        textDecoration: "underline",
                        bgcolor: "#b45309",
                        color: "white",
                      },
                    }}
                  >
                    View More
                    <ArrowForwardIcon
                      className="arrow-icon"
                      sx={{
                        fontSize: 20,
                        transition: "all 0.3s ease",
                        opacity: 0,
                        transform: "translateX(0)",
                      }}
                    />
                  </Button>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>

        <Link
          href="/home/SellMagnet"
          sx={{
            ...typography.h3R,
            color: "#1a4dab",
            fontWeight: 600,
            ml: 2,
            cursor: 'pointer'
          }}
          onClick={() => navigate("/home/SellMagnet")}>
          View More
          <ArrowRightAltIcon
            sx={{
              color: "#1a4dab",
              fontWeight: "bold",
              verticalAlign: "middle",
              ml: 1,
              fontSize: "3rem",
            }}
          />
        </Link>
      </Box>




      {/*  ROI Calculator  */}
      <Box
        sx={{
          mt: 5,
        }}
      >
        <Typography
          sx={{
            ml: 10,
            ...typography.h3RB,
            fontWeight: 700,
            color: "#092f7a",
          }}
        >
          ROI Calculator
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            color: "text.secondary",
            ...typography.h3B1,
            fontWeight: 400,
            ml: 10,
          }}
        >
          Get powerful lifting magnets when you need them — without the upfront
          cost. Flexible rental plans, quick installation, and reliable
          performance for every project!
        </Typography>
        <Typography
          sx={{
            ...typography.h3R,
            color: "#1a4dab",
            fontWeight: 600,
            ml: 106,
          }}
        >
          View All ROI Calculators
          <ArrowRightAltIcon
            sx={{
              color: "#1a4dab",
              fontWeight: "bold",
              verticalAlign: "middle",
              ml: 1,
              fontSize: "3rem",
            }}
          />
        </Typography>
        <Box sx={{ maxWidth: 1280, heigth:'400px', mx: "auto", px: 2 }}>
          <Grid container spacing={4} justifyContent="center">
            {roiData.map((item, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Card
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: 3,
                    height: 320,
                  }}
                >
                  {/* Background Image */}
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    sx={{
                      width: "588px",
                      height: "400px",
                      objectFit: "cover",
                    }}
                  />

                  {/* Overlay White Card */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      width:'564px',
                      height:'146px',
                      left: 16,
                      right: 16,
                      backgroundColor: "white",
                      borderRadius: 2,
                      boxShadow: 1,
                      px: 2,
                      py: 1.5,
                      display: "flex",
                      flexDirection: "column",
                      gap: 0.5,
                      "&:hover": {
                        textAlign: "left",
                        bgcolor: "#0b2d55",
                        color: "white",
                        "& .MuiTypography-root": {
                          color: "white",
                          transform: "scale(1.05)",
                        },
                        "& .MuiDivider-root": {
                          borderColor: "rgba(255,255,255,0.3)",
                        },
                        "& .MuiIconButton-root": {
                          backgroundColor: "#6aa9ff", // 🔹 light blue only for icon button
                          color: "white", // icon turns white
                        },
                      },
                    }}
                  >
                    <Box
                      display="flex"
                      sx={{}}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography
                        sx={{
                          fontSize: "24px",
                          fontFamily: "SpaceGrotesk-Bold",
                          fontWeight: 700,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <IconButton
                        size="small"
                        sx={{
                          backgroundColor: "#f0f0f0",
                        }}
                      >
                        <ArrowForwardIosIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    <Typography
                      sx={{
                        ...typography.bodyBase,
                        fontWeight: 400,
                        color: "#bdbdbd",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* FAQs Section */}
      <Box
        sx={{
          mt: 5,
        }}
      >
        <Button
          disableElevation
          disableRipple
          sx={{
            ...typography.bodySmall,
            marginBottom: 2,
            ml: 8,
            textTransform: "none", // keep text as-is
            // fontSize: "0.8rem", // smaller font
            fontWeight: 400, // medium weight
            color: "#1a4dab", // dark blue text
            backgroundColor: "rgba(36,121,233,0.08)", // very light blue background
            borderRadius: "20px", // pill shape
            px: 2, // horizontal padding
            py: 0.5, // vertical padding
            boxShadow: "none", // remove shadow
            "&:hover": {
              backgroundColor: "rgba(36,121,233,0.15)", // slightly darker on hover
              boxShadow: "none",
            },
          }}
        >
          FAQs
        </Button>
        <Typography
          sx={{
            ...typography.h3RB,
            fontWeight: 700,
            ml: 8,
            // mt: 5
          }}
        //   variant="h3"
        //   fontWeight="bold"
        //   gutterBottom
        >
          FAQs
        </Typography>
        <Typography
          //   variant="h5"
          sx={{
            ...typography.h3B1,
            fontWeight: 400,
            mb: 4,
            color: "text.secondary",
            ml: 8,
          }}
        >
          Get powerful lifting magnets when you need them — without the upfront
          cost. Flexible rental plans, quick installation, and reliable
          performance for every project!
        </Typography>
        <Box sx={{ px: 8, py: 6 }}>
          {faqData.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={() => handleChange(index)}
              disableGutters
              elevation={0}
              sx={{
                backgroundColor: expanded === index ? "#eaf3fb" : "#fdfdfd",
                borderRadius: 2,
                mb: 1,
                px: 2,
              }}
            >
              <AccordionSummary
                expandIcon={
                  <IconButton>
                    {expanded === index ? (
                      <RemoveIcon sx={{ color: "#1976d2" }} />
                    ) : (
                      <AddIcon sx={{ color: "#1976d2" }} />
                    )}
                  </IconButton>
                }
              >
                <Typography
                  sx={{
                    ...typography.h3B1,
                    fontWeight: 400,
                  }}
                //  fontWeight="bold"
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    ...typography.bodyBase,
                    fontWeight: 400,
                  }}
                  color="text.secondary"
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>




     {/* Blogs Section */}
     <Box>
     <Button
          disableElevation
          disableRipple
          sx={{
            ...typography.bodySmall,
            marginBottom: 2,
            ml: 8,
            textTransform: "none", // keep text as-is
            // fontSize: "0.8rem", // smaller font
            fontWeight: 400, // medium weight
            color: "#1a4dab", // dark blue text
            backgroundColor: "rgba(36,121,233,0.08)", // very light blue background
            borderRadius: "20px", // pill shape
            px: 2, // horizontal padding
            py: 0.5, // vertical padding
            boxShadow: "none", // remove shadow
            "&:hover": {
              backgroundColor: "rgba(36,121,233,0.15)", // slightly darker on hover
              boxShadow: "none",
            },
          }}
        >
          Blogs
        </Button>
      <Typography
        sx={{
          ml: 8,
          ...typography.displayL,
          color:'#1C2D4B'
        }}
        variant="h3" fontWeight="bold" gutterBottom>
        Blogs
      </Typography>
      <Typography
        variant="h5" sx={{
          mb: 4,
           color: '#1C2D4B',
         ...typography.h4,
          ml: 8
        }}>
        Get powerful lifting magnets when you need them — without the upfront
        cost. Flexible rental plans, quick installation, and reliable
        performance for every project!
      </Typography>
      <Box sx={{ px: 8, py: 6 }}>
        <Grid container spacing={3}>
          {/* Left Column (Featured Post) */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                //display: "flex",
                flexDirection: "column",
                // width:'668px',
                // height:'462px', 
                borderRadius: 3,
                // boxShadow: 0,
                bgcolor: "#fafafa",
                cursor:'pointer'
              }}
             onClick={() => navigate("/home/BlogDetails")}>
              <CardMedia
                component="img"
                image={blogData[0].image}
                alt={blogData[0].title}
                sx={{
                  borderRadius: 3,
                  width: '628px',
                  height: '300px',
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography sx={{...typography.h5, color:'#0E1109'}} gutterBottom>
                  {blogData[0].title}
                </Typography>
                <Typography sx={{...typography.bodyBase, color:'#677489'}}>
                  {blogData[0].author} • {blogData[0].date}
                </Typography>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: "#1F77D6",
                    ...typography.bodyBasemedium,
                    mt: 1,
                    display: "inline-flex",
                    alignItems: "center"
                  }}
                >
                  Discover More <ArrowForwardIosIcon sx={{ ml: 1.5, color: "#1F77D6", }} />
                </Link>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Column (Other Posts) */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2} direction="column">
              {blogData.slice(1).map((item, idx) => (
                <Grid item key={idx}>
                  <Card
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 3,
                      px: 2,
                      py: 1,
                      bgcolor: "#fdfdfd",
                      boxShadow: 0,
                      cursor:'pointer'
                    }}
                   onClick={() => navigate("/home/Blogpost")}>
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.title}
                      sx={{
                        width: '130px',
                        height: '141px',
                        borderRadius: 2,
                        objectFit: "cover",
                        mr: 2,
                      }}
                    />
                    <Box>
                      <Typography sx={{...typography.h4, color:'#0E1109', width:'474px', height:'62px'}}>
                        {item.title}
                      </Typography>
                      <Typography sx={{...typography.bodyBase, color:'#677489'}}>
                        {item.author} • {item.date}
                      </Typography>
                      <Link
                        href="#"
                        underline="none"
                        sx={{ color: "#1F77D6", ...typography.bodyBasemedium, mt: 0.5, display: "inline-flex", alignItems: "center" }}
                      >
                        Discover More <ArrowForwardIosIcon sx={{ ml: 0.5, color: "#1F77D6", }} />
                      </Link>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
     </Box>


      {/* Rent Services instaed */}


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




      <SellRentServicesCard services={services} />

      {/* Footer Section */}
       <Box >
             <Footer/>
           </Box>

    </Box>
  );
};

export default RefurbishedElectromagnet;
