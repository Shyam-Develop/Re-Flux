import { React, useState, useEffect } from "react";
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
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ROIimage from "../../../assets/ROICalculator.jpg";
import Brand1 from "../../../assets/Brand1.png";
import Brand2crea from "../../../assets/Brand2crea.png";
import Blogs1 from "../../../assets/Blogs1.jpg";
import Blogs2 from "../../../assets/Blogs2.jpg";
import Blogs3 from "../../../assets/Blogs3.jpg";
import Blogs4 from "../../../assets/Blogs4.jpg";

import Roi1 from "../../../assets/Roi1.png";
import Roi2 from "../../../assets/Roi2.png";
import Whyitworkcard from "app/components/Card/Whyitworkcard";
import { typography } from "app/utils/constant";
import { grey } from "@mui/material/colors";
import SellRentServicesCard from "app/components/Card/SellRentServicesCard";
import Refurbishedmagnet from "../../../assets/topbarservice1.jpg"
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Footer from 'app/components/Card/Footer';
import rentalimg from "../../../assets/rental_img.jpg";
import EditIcon from "@mui/icons-material/Edit";

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
  // const servicesnew = [
  //   {
  //     id: 1,
  //     title: "Sell Us",
  //     type: "Rental unit eliminated production loss",
  //     icon: HandshakeIcon,
  //     img: handshake1,
  //   },
  //   {
  //     id: 2,
  //     title: "Exchange",
  //     type: "Class-H insulation, terminals/ leads to OEM spec",
  //     icon: HandshakeIcon,
  //     img: handshake1,
  //   },
  // ];



 
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


  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // ✅ Fetch content JSON
  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}?contentId=RefurbishedMagnet`)
      .then((res) => res.json())
      .then((data) => setContent(data))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  // ✅ Check admin role
  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  // ✅ Navigate to CMS editor
  const handleEdit = (contentTextID, type = "T") => {

    navigate(`/CmsEditor?contentId=RefurbishedMagnet&contentTextID=${contentTextID}&contentType=${type}`);
  };

  // ✅ Admin edit icon button
  const EditIconButton = ({ id, type = "T" }) =>
    isAdmin ? (
      <IconButton
        size="small"
        onClick={() => handleEdit(id, type)}
        sx={{
          ml: 1,
          p: 0.5,
          borderRadius: "50%",
          backgroundColor: "#f0f0f0",
          color: "#1C2D4B",
          border: "1px solid #ccc",
          transition: "all 0.2s ease",
          "&:hover": { backgroundColor: "#e0e0e0", color: "#070808ff" },
          verticalAlign: "middle",
        }}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    ) : null;

  if (!content) return null;


  //Refurbished Magnet
  const refurbishedProducts = [
    {
      title: content.RM1011,
      size: content.RM1012,
      certified: content.RM1013,
      liftCapacity: content.RM1014,
      powerSupply: content.RM1015,
      included: content.RM1016,
      imgSrc: `https://cmsreflux.bexatm.com${content.RM1011_IMG}`,
      keys: ["RM1011", "RM1012", "RM1013", "RM1014", "RM1015", "RM1016", "RM1011_IMG"]
    },
    {
      title: content.RM1017,
      size: content.RM1018,
      certified: content.RM1019,
      liftCapacity: content.RM1020,
      powerSupply: content.RM1021,
      included: content.RM1022,
      imgSrc: `https://cmsreflux.bexatm.com${content.RM1017_IMG}`,
      keys: ["RM1017", "RM1018", "RM1019", "RM1020", "RM1021", "RM1022", "RM1017_IMG"]
    },
    {
      title: content.RM1023,
      size: content.RM1024,
      certified: content.RM1025,
      liftCapacity: content.RM1026,
      powerSupply: content.RM1027,
      included: content.RM1028,
      imgSrc: `https://cmsreflux.bexatm.com${content.RM1023_IMG}`,
      keys: ["RM1023", "RM1024", "RM1025", "RM1026", "RM1027", "RM1028", "RM1023_IMG"]
    },
    {
      title: content.RM1029,
      size: content.RM1030,
      certified: content.RM1031,
      liftCapacity: content.RM1032,
      powerSupply: content.RM1033,
      included: content.RM1034,
      imgSrc: `https://cmsreflux.bexatm.com${content.RM1029_IMG}`,
      keys: ["RM1029", "RM1030", "RM1031", "RM1032", "RM1033", "RM1034", "RM1029_IMG"]
    },
    {
      title: content.RM1035,
      size: content.RM1036,
      certified: content.RM1037,
      liftCapacity: content.RM1038,
      powerSupply: content.RM1039,
      included: content.RM1040,
      imgSrc: `https://cmsreflux.bexatm.com${content.RM1035_IMG}`,
      keys: ["RM1035", "RM1036", "RM1037", "RM1038", "RM1039", "RM1040", "RM1035_IMG"]
    },
    {
      title: content.RM1041,
      size: content.RM1042,
      certified: content.RM1043,
      liftCapacity: content.RM1044,
      powerSupply: content.RM1045,
      included: content.RM1046,
      imgSrc: `https://cmsreflux.bexatm.com${content.RM1041_IMG}`,
      keys: ["RM1041", "RM1042", "RM1043", "RM1044", "RM1045", "RM1046", "RM1041_IMG"]
    }
  ];


  //How it works
  const steps = [
    { num: "RM1050", title: "RM1051", desc: "RM1052" },
    { num: "RM1053", title: "RM1054", desc: "RM1055" },
    { num: "RM1056", title: "RM1057", desc: "RM1058" },
    { num: "RM1059", title: "RM1060", desc: "RM1061" },
    { num: "RM1062", title: "RM1063", desc: "RM1064" },
  ];


  //Sell or exchange
  const servicesnew = [
    {
      id: 1,
      imgId: "RM1067",
      titleId: "RM1068",
      descId: "RM1069",
      btnId: "RM1070",
    },
    {
      id: 2,
      imgId: "RM1071",
      titleId: "RM1072",
      descId: "RM1073",
      btnId: "RM1074",
    },
  ];


  //Blog
  const blogData = [
  {
    title: content.RM1100,
    author: content.RM1101,
    date: content.RM1102,
    image: `https://cmsreflux.bexatm.com${content.RM1103}`,
  },
  {
    title: content.RM1104,
    author: content.RM1105,
    date: content.RM1106,
    image: `https://cmsreflux.bexatm.com${content.RM1107}`,
  },
  {
    title: content.RM1108,
    author: content.RM1109,
    date: content.RM1110,
    image: `https://cmsreflux.bexatm.com${content.RM1111}`,
  },
  {
    title: content.RM1112,
    author: content.RM1113,
    date: content.RM1114,
    image: `https://cmsreflux.bexatm.com${content.RM1115}`,
  },
];


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
        p: 2,
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
          sx={{
            ...typography.displayXL,
            fontWeight: 700,
            fontSize: "64px",
            lineHeight: 1.1,
            letterSpacing: "-0.31px",
            textAlign: "left",
            display: "flex",
            alignItems: "left",
            justifyContent: "left",
            gap: 1
          }}
        >
          {content.RM1001}
          <Box sx={{ marginRight: '240px' }}>
            <EditIconButton id="RM1001" />
          </Box>
        </Typography>

        {/* Subtext line */}
        <Typography
          sx={{
            mt: 2,
            fontFamily: "Space Grotesk, Regular",
            fontSize: "24px",
            fontWeight: 400,
            lineHeight: "130%",
            textAlign: "left",
            color: "gray",
            display: "flex",
            alignItems: "center",
            gap: 1
          }}
        >
          {content.RM1002}
          <EditIconButton id="RM1002" />
        </Typography>

        {/* Lighter subtext */}
        <Typography
          sx={{
            mt: 1,
            ...typography.h3medium,
            fontWeight: 500,
            color: "#999",
            display: "flex",
            alignItems: "center",
            gap: 1
          }}
        >
          {content.RM1003}
          <EditIconButton id="RM1003" />
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
              display: "flex",
              alignItems: "center",
              gap: 0.5
            }}
          >
            {content.RM1004}
            <EditIconButton id="RM1004" />
          </Link>
          <Link
            href="#"
            sx={{
              fontFamily: "Fira Sans, SemiBold",
              fontWeight: 600,
              fontSize: "18px",
              cursor: "pointer",
              textDecoration: "underline",
              display: "flex",
              alignItems: "center",
              gap: 0.5
            }}
          >
            {content.RM1005}
            <EditIconButton id="RM1005" />
          </Link>
          <Link
            href="#"
            sx={{
              fontFamily: "Fira Sans, SemiBold",
              fontWeight: 600,
              fontSize: "18px",
              cursor: "pointer",
              textDecoration: "underline",
              display: "flex",
              alignItems: "center",
              gap: 0.5
            }}
          >
            {content.RM1006}
            <EditIconButton id="RM1006" />
          </Link>
        </Box>

        {/* chip */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            mt: 10,
          }}
        >
          {[
            { label: "RM1007" },
            { label: "RM1008" },
            { label: "RM1009" },
            { label: "RM1010" },
          ].map((filter, idx) => (
            <Box key={idx}>
              <Typography
                sx={{
                  ...typography.h5,
                  fontSize: "18px",
                  fontWeight: 500,
                  mb: "2px",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {content[filter.label]}
                <EditIconButton id={filter.label} />
              </Typography>
              <Select
                sx={{
                  fontFamily: "'Fira Sans', sans-serif",
                  fontWeight: 400,
                  border: "1px solid #E17A00",
                  width: { xs: "100%", sm: "250px", md: "200px" },
                  height: "53px",
                }}
                size="small"
                defaultValue="All"
              >
                <MenuItem value="All">All</MenuItem>
              </Select>
            </Box>
          ))}
        </Box>


        {/* Refurbished section */}
        <Box sx={{ pb: 10, mt: '20px' }}>
          <Grid container spacing={4}>
            {refurbishedProducts.map((product, idx) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={idx}
                sx={{
                  display: 'flex',
                  justifyContent: 'center', // center cards on mobile
                }}
              >
                <Box
                  sx={{
                    borderRadius: 3,
                    border: '1px solid #dbdbdb',
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    width: { xs: '100%', sm: '100%', md: '430px' }, // 💡 Responsive width
                    maxWidth: '430px',
                    height: '100%',
                  }}
                >

                  {/* Title & size */}
                  <Typography
                    sx={{
                      ...typography.h4,
                      fontWeight: 700,
                      fontSize: '24px',
                      color: '#0B121E',
                      mb: 0.5,
                    }}
                  >
                    {product.title}
                    <EditIconButton id={product.keys[0]} />
                  </Typography>

                  <Box sx={{ display: 'flex' }}>
                    <Typography
                      sx={{
                        ...typography.h5,
                        fontWeight: 500,
                        fontSize: '20px',
                        color: '#00000099',
                        mb: 1,
                      }}
                    >
                      {product.size}
                      <EditIconButton id={product.keys[1]} />
                    </Typography>

                    <Typography
                      sx={{
                        ...typography.bodySmall,
                        fontFamily: 'Fira Sans',
                        fontWeight: 400,
                        fontSize: '14px',
                        color: '#00000099',
                        // mb: 1,
                        marginLeft: '4%',
                        // marginTop: '5px',
                      }}
                    >
                      Certified: {product.certified}
                      <EditIconButton id={product.keys[2]} />
                    </Typography>
                  </Box>

                  {/* Image with badges */}
                  <Box
                    sx={{
                      position: 'relative',
                      borderRadius: 2,
                      overflow: 'hidden',
                      mb: 2,
                    }}
                  >
                    {/* IMAGE */}
                    <Box
                      component="img"
                      src={product.imgSrc}
                      alt={product.title}
                      sx={{
                        width: '100%',
                        height: '240px',
                        objectFit: 'cover',
                        borderRadius: 2,
                        display: 'block',
                        zIndex: 1,
                      }}
                    />

                    {/* EDIT ICON — now correctly visible + at top-right */}
                    <Box sx={{ position: 'absolute', bottom: '85%', left: '90%' }}>
                      <EditIconButton
                        id={product.keys[6]}
                        type="I"
                        sx={{
                          position: 'absolute',
                          top: 6,          // moved slightly up
                          right: 6,
                          zIndex: 30,      // higher than image + chip
                        }}
                      />
                    </Box>

                    {/* AVAILABLE FOR RENT — moved slightly UP */}
                    <Chip
                      label="🔧 Available for Rent"
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 6,          // moved up
                        left: 8,
                        bgcolor: '#1b5e20',
                        color: 'white',
                        fontWeight: 400,
                        fontSize: '14px',
                        borderRadius: '2px',
                        zIndex: 25,      // make sure it appears above the image
                      }}
                    />

                    {/* SAFETY TESTED CHIP */}
                    <Chip
                      label="🛡️ Safety Tested"
                      size="small"
                      color="info"
                      sx={{
                        position: 'absolute',
                        bottom: 40,
                        left: 8,
                        fontWeight: 400,
                        fontSize: '14px',
                        borderRadius: '2px',
                        zIndex: 25,
                      }}
                    />
                  </Box>


                  {/* Specs */}
                  <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={6}>
                      <Typography sx={{ ...typography.h6, fontWeight: 600, color: '#0E1626' }}>
                        Lift Capacity
                      </Typography>
                      <Typography sx={{ ...typography.bodySmall, fontWeight: 400, fontFamily: 'Fira Sans', fontSize: '18px', color: '#677489' }}>
                        {product.liftCapacity}
                        <EditIconButton id={product.keys[3]} />
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <Typography sx={{ ...typography.h6, fontWeight: 600, color: '#0E1626' }}>
                        Power Supply
                      </Typography>
                      <Typography sx={{ ...typography.bodySmall, fontWeight: 400, fontFamily: 'Fira Sans', fontSize: '18px', color: '#677489' }}>
                        {product.powerSupply}
                        <EditIconButton id={product.keys[4]} />
                      </Typography>
                    </Grid>
                  </Grid>

                  {/* Included */}
                  <Box sx={{ mb: 3, mt: 3 }}>
                    <Typography sx={{ ...typography.h6, fontWeight: 600, color: '#0E1626' }}>
                      Included
                    </Typography>
                    <Typography sx={{ ...typography.bodySmall, fontWeight: 400, fontFamily: 'Fira Sans', fontSize: '18px', color: '#677489' }}>
                      {product.included}
                      <EditIconButton id={product.keys[5]} />
                    </Typography>
                  </Box>

                  {/* Buy Now Button */}
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: '#1C2D4B',
                      height: '44px',
                      textTransform: 'none',
                      borderRadius: 3,
                      ...typography.bodyStrong,
                    }}
                    onClick={() => navigate("/home/RefurbishedDetail")}
                  >
                    Buy now
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>




      {/* Left - Features with vertical timeline */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid #ddd",
          borderRadius: 3,
          mt: 10,
          bgcolor: "white",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Left + Steps Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            px: { xs: 2, md: 6 },
            py: 6,
            flex: 1,
          }}
        >
          {/* Left Section */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontWeight: 600,
                ...typography.h3R,
                mt: 8,
              }}
            >
              {content.RM1047}
              <EditIconButton id="RM1047" type="T" />
            </Typography>

            <Box
              sx={{
                width: "280px",
                height: "2px",
                backgroundColor: "#0f766e",
              }}
            />

            <Typography
              sx={{
                ...typography.h3medium,
                color: "#4B5563",
                mt: 2,
              }}
            >
              {content.RM1048}
              <EditIconButton id="RM1048" type="T" />
            </Typography>
          </Box>

          {/* Steps Section */}
          <Box sx={{ flex: 2, display: "flex", flexWrap: "wrap" }}>
            {steps.map((step) => (
              <Box key={step.num} sx={{ flex: "1 1 50%", mb: 3 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    ...typography.h3R,
                    mb: 0.5,
                  }}
                >
                  {content[step.num]}. {content[step.title]}
                  <EditIconButton id={step.title} type="T" />
                </Typography>

                <Typography
                  sx={{
                    ...typography.h3medium,
                    color: "#4B5563",
                  }}
                >
                  {content[step.desc]}
                  <EditIconButton id={step.desc} type="T" />
                </Typography>
              </Box>
            ))}

            {/* CTA Link */}
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
              >
                {content.RM1049}
                <EditIconButton id="RM1049" type="T" />
              </Link>
            </Box>
          </Box>
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
          {content.RM1065}
          <EditIconButton id="RM1065" />
        </Typography>

        <Typography
          sx={{
            mt: 1,
            ...typography.bodyBasemedium,
            color: "#555",
            ml: 2,
          }}
        >
          {content.RM1066}
          <EditIconButton id="RM1066" />
        </Typography>

        {/* Section */}
        <Box sx={{ backgroundColor: "#f9fafb", py: 4 }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
            }}
          >
            {servicesnew.map((service) => (
              <Card
                key={service.id}
                sx={{
                  flex: {
                    xs: "1 1 100%",
                    sm: "1 1 calc(50% - 24px)",
                  },
                  minWidth: { xs: "100%", sm: "300px", md: "620px" },
                  height: { xs: "auto", md: "252px" },
                  borderRadius: 2,
                  padding: 3,
                  border: "1px solid #e5e7eb",
                  boxShadow: "none",
                  backgroundColor: "#fff",
                  transition: "all 0.3s",
                  "&:hover": {
                    backgroundColor: "#0b2d55",
                    color: "#eee",
                    height: { xs: "auto", md: "300px" },
                  },
                }}
              >
                {/* Image + EDIT */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, pl: 2 }}>
                  <Box
                    component="img"
                    src={`https://cmsreflux.bexatm.com${content?.[service.imgId] || ""}`}
                    alt={content?.[service.titleId] || ""}
                    sx={{
                      width: "45px",
                      height: "45px",
                      border: "1px solid gray",
                      padding: "5px",
                      objectFit: "cover",
                      borderRadius: "50%",
                      backgroundColor: "#f3f4f6",
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/ATM/images/placeholder.jpg";
                    }}
                  />
                  <EditIconButton id={service.imgId} type="I" />
                </Box>

                {/* TITLE + EDIT */}
                <CardContent sx={{ p: 2, textAlign: "left" }}>
                  <Typography
                    sx={{
                      ...typography.h3,
                      fontWeight: 600,
                      fontSize: { xs: "20px", sm: "24px", md: "28px" },
                      color: "inherit",
                    }}
                  >
                    {content?.[service.titleId] || ""}
                    <EditIconButton id={service.titleId} type="T" />
                  </Typography>

                  {/* DESCRIPTION + EDIT */}
                  <Typography
                    sx={{
                      ...typography.bodyBase,
                      fontWeight: 400,
                      fontSize: { xs: "16px", sm: "17px", md: "18px" },
                      color: "inherit",
                      pt: 2,
                    }}
                  >
                    {content?.[service.descId] || ""}
                    <EditIconButton id={service.descId} type="T" />
                  </Typography>
                </CardContent>

                {/* BUTTON + EDIT */}
                <Box sx={{ p: 2, pt: 0 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 2,
                      borderRadius: 2,
                      textTransform: "none",
                      bgcolor: "#b45309",
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                      opacity: 0,
                      transform: "translateY(10px)",
                      textDecoration: "underline",
                      ".MuiCard-root:hover &": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    }}
                    onClick={() => navigate("/home/sellmagnet")}
                  >
                    {content?.[service.btnId] || ""}
                    <EditIconButton id={service.btnId} type="T" />

                    <ArrowForwardIcon
                      sx={{
                        fontSize: 20,
                        transition: "all 0.3s ease",
                        opacity: 0,
                        transform: "translateX(0)",
                      }}
                      className="arrow-icon"
                    />
                  </Button>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>

      </Box>





      {/*  ROI Calculator  */}
      <Box sx={{ p: 5, mt: 5 }}>

        {/* TITLE */}
        <Typography
          gutterBottom
          sx={{
            ...typography.displayL,
            fontWeight: 700,
            fontSize: "56px",
            color: "#1C2D4B",
            ml: 2,
          }}
        >
          {content.RM1075}
          <EditIconButton id="RM1075" type="T" />
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          variant="h5"
          sx={{
            mb: 3,
            color: "#99A0AE",
            ml: 2,
            ...typography.h4,
          }}
        >
          {content.RM1076}
          <EditIconButton id="RM1076" type="T" />
        </Typography>

        {/* VIEW ALL */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mr: 2, mb: 4 }}>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              ...typography.h3,
              color: "#2F6FBA",
              textDecoration: "underline",
            }}
          >
            {content.RM1077}
            <EditIconButton id="RM1077" type="T" />
            <ArrowRightAltIcon sx={{ ml: 1, fontSize: "2.5rem" }} />
          </Typography>
        </Box>

        {/* ROI CARDS */}
        <Grid container spacing={4}>

          {/* CARD 1 */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                position: "relative",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 3,
                height: "400px",
              }}
            >
              {/* IMAGE */}
              <CardMedia
                component="img"
                image={`https://cmsreflux.bexatm.com${content.RM1078}`}
                alt={content.RM1079}
                sx={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />

              {/* IMAGE EDIT */}
              <Box sx={{ position: "absolute", top: 10, right: 10, zIndex: 2 }}>
                <EditIconButton id="RM1078" type="I" />
              </Box>

              {/* OVERLAY CARD */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 16,
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
                  transition: "0.3s ease-in-out",
                  "&:hover": {
                    bgcolor: "#0b2d55",
                    color: "white",
                    "& .MuiTypography-root": { color: "white" },
                    "& .MuiIconButton-root": {
                      backgroundColor: "#4487ebff",
                      color: "white",
                    },
                  },
                }}
              >
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography
                    sx={{
                      ...typography.h4,
                      fontWeight: 700,
                      fontSize: "24px",
                      color: "#0B121E",
                    }}
                  >
                    {content.RM1079}
                    <EditIconButton id="RM1079" type="T" />
                  </Typography>

                  <IconButton
                    size="small"
                    sx={{
                      backgroundColor: "#f0f0f0",
                      width: "40px",
                      height: "40px",
                    }}
                  >
                    <ArrowForwardIosIcon fontSize="small" />
                  </IconButton>
                </Box>

                <Typography sx={{ ...typography.bodyBase, color: "#99A0AE" }}>
                  {content.RM1080}
                  <EditIconButton id="RM1080" type="T" />
                </Typography>
              </Box>
            </Card>
          </Grid>

          {/* CARD 2 */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                position: "relative",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 3,
                height: "400px",
              }}
            >
              {/* IMAGE */}
              <CardMedia
                component="img"
                image={`https://cmsreflux.bexatm.com${content.RM1081}`}
                alt={content.RM1082}
                sx={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />

              {/* IMAGE EDIT */}
              <Box sx={{ position: "absolute", top: 10, right: 10, zIndex: 2 }}>
                <EditIconButton id="RM1081" type="I" />
              </Box>

              {/* OVERLAY CARD */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 16,
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
                  transition: "0.3s ease-in-out",
                  "&:hover": {
                    bgcolor: "#0b2d55",
                    color: "white",
                    "& .MuiTypography-root": { color: "white" },
                    "& .MuiIconButton-root": {
                      backgroundColor: "#4487ebff",
                      color: "white",
                    },
                  },
                }}
              >
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography
                    sx={{
                      ...typography.h4,
                      fontWeight: 700,
                      fontSize: "24px",
                      color: "#0B121E",
                    }}
                  >
                    {content.RM1082}
                    <EditIconButton id="RM1082" type="T" />
                  </Typography>

                  <IconButton
                    size="small"
                    sx={{
                      backgroundColor: "#f0f0f0",
                      width: "40px",
                      height: "40px",
                    }}
                  >
                    <ArrowForwardIosIcon fontSize="small" />
                  </IconButton>
                </Box>

                <Typography sx={{ ...typography.bodyBase, color: "#99A0AE" }}>
                  {content.RM1083}
                  <EditIconButton id="RM1083" type="T" />
                </Typography>
              </Box>
            </Card>
          </Grid>

        </Grid>
      </Box>



      <Box sx={{ mt: 5 }}>
        {/* FAQs Button */}
        <Button
          disableElevation
          disableRipple
          sx={{
            ...typography.bodySmall,
            marginBottom: 2,
            ml: 8,
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
          {content.RM1084}
          <EditIconButton id="RM1084" type="T" />
        </Button>

        {/* FAQs Title */}
        <Typography
          sx={{
            ...typography.h3RB,
            fontWeight: 700,
            ml: 8,
          }}
        >
          {content.RM1085}
          <EditIconButton id="RM1085" type="T" />
        </Typography>

        {/* FAQs Subtitle */}
        <Typography
          sx={{
            ...typography.h3B1,
            fontWeight: 400,
            mb: 4,
            color: "text.secondary",
            ml: 8,
          }}
        >
          {content.RM1086}
          <EditIconButton id="RM1086" type="T" />
        </Typography>

        {/* FAQ Accordion Section */}
        <Box sx={{ px: 8, py: 6 }}>
          {[
            { q: "RM1087", a: "RM1088" },
            { q: "RM1089", a: "RM1090" },
            { q: "RM1091", a: "RM1092" },
            { q: "RM1093", a: "RM1094" },
            { q: "RM1095", a: "RM1096" },
          ].map((item, index) => (
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
                <Typography sx={{ ...typography.h3B1, fontWeight: 400 }}>
                  {content[item.q]}
                  <EditIconButton id={item.q} type="T" />
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography
                  sx={{ ...typography.bodyBase, fontWeight: 400 }}
                  color="text.secondary"
                >
                  {content[item.a]}
                  <EditIconButton id={item.a} type="T" />
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>



      {/* Blogs Section */}
      <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 3, md: 6 } }}>
        {/* Section Header */}
        <Button
          disableElevation
          disableRipple
          sx={{
            marginBottom: 2,
            textTransform: "none",
            fontSize: "0.8rem",
            fontWeight: 500,
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
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          {content.RM1097}
          <EditIconButton id="RM1097" />
        </Button>

        <Typography
          sx={{
            ...typography.displayL,
            color: "#1C2D4B",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
          variant="h3"
          fontWeight="bold"
          gutterBottom
        >
          {content.RM1098}
          <EditIconButton id="RM1098" />
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mb: 4,
            color: "#1C2D4B",
            ...typography.h4,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {content.RM1099}
          <EditIconButton id="SM1099" />
        </Typography>

        {/* Blog Section */}
        <Grid container spacing={3}>
          {/* Featured Post */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                boxShadow: 0,
                bgcolor: "#fafafa",
                cursor: "pointer",
              }}

            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  image={blogData[0].image}
                  alt={blogData[0].title}
                  sx={{
                    borderRadius: 3,
                    width: "100%",
                    height: { xs: 240, sm: 280, md: 300 },
                    objectFit: "cover",
                  }}
                />
                <Box sx={{ position: "absolute", bottom: 8, right: 8 }}>
                  <EditIconButton id="RM1103" type="I" />
                </Box>
              </Box>

              <CardContent>
                <Typography
                  sx={{
                    ...typography?.h5,
                    color: "#0E1109",
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                  gutterBottom
                >
                  {blogData[0].title}
                  <EditIconButton id="RM1100" />
                </Typography>
                <Typography
                  sx={{
                    ...typography?.bodyBase,
                    color: "#677489",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  {blogData[0].author} <EditIconButton id="RM1101" /> •{" "}
                  {blogData[0].date} <EditIconButton id="RM1102" />
                </Typography>

                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: "#1F77D6",
                    ...typography?.bodyBasemedium,
                    mt: 1,
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                  onClick={() => navigate("/home/BlogDetails")}
                >
                  Discover More{" "}
                  <ArrowForwardIosIcon
                    sx={{ ml: 0.5, color: "#1F77D6", fontSize: "0.9rem" }}
                  />
                </Link>
              </CardContent>
            </Card>
          </Grid>

          {/* Other Posts */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2} direction="column">
              {blogData.slice(1).map((item, idx) => {
                const base = 1104 + idx * 4;
                return (
                  <Grid item key={idx}>
                    <Card
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "row", sm: "row" },
                        alignItems: "center",
                        borderRadius: 3,
                        px: { xs: 1, md: 2 },
                        py: { xs: 1, md: 1.5 },
                        bgcolor: "#fdfdfd",
                        boxShadow: 0,
                        cursor: "pointer",
                      }}

                    >
                      <Box sx={{ position: "relative" }}>
                        <CardMedia
                          component="img"
                          image={item.image}
                          alt={item.title}
                          sx={{
                            width: { xs: 100, sm: 120, md: 130 },
                            height: { xs: 100, sm: 120, md: 141 },
                            borderRadius: 2,
                            objectFit: "cover",
                            mr: 2,
                          }}
                        />
                        <Box sx={{ position: "absolute", bottom: 6, right: 6 }}>
                          <EditIconButton id={`RM${base + 3}`} type="I" />
                        </Box>
                      </Box>

                      <Box sx={{ flex: 1 }}>
                        <Typography
                          sx={{
                            ...typography?.h4,
                            color: "#0E1109",
                            fontSize: { xs: "0.95rem", sm: "1.1rem" },
                            mb: 0.5,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          {item.title}
                          <EditIconButton id={`RM${base}`} />
                        </Typography>

                        <Typography
                          sx={{
                            ...typography?.bodyBase,
                            color: "#677489",
                            fontSize: { xs: "0.75rem", sm: "0.85rem" },
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          {item.author} <EditIconButton id={`RM${base + 1}`} /> •{" "}
                          {item.date} <EditIconButton id={`RM${base + 2}`} />
                        </Typography>

                        <Link
                          href="#"
                          underline="none"
                          sx={{
                            color: "#1F77D6",
                            ...typography?.bodyBasemedium,
                            mt: 0.5,
                            fontSize: { xs: "0.75rem", sm: "0.85rem" },
                            display: "inline-flex",
                            alignItems: "center",
                          }}
                          onClick={() => navigate("/home/Blogpost")}
                        >
                          Discover More{" "}
                          <ArrowForwardIosIcon
                            sx={{ ml: 0.5, color: "#1F77D6", fontSize: "0.8rem" }}
                          />
                        </Link>
                      </Box>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Box>;

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
        <Footer />
      </Box>

    </Box>
  );
};

export default RefurbishedElectromagnet;
