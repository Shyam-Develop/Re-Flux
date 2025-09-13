import React, { useState } from 'react'
import {
  Box,
  Typography,
  Toolbar,
  TextField,
  InputAdornment,
  CardMedia,
  Stack,
  MenuItem,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  InputLabel,
  Select,
  Grid,
  Card,
  CardContent,
  Container,
  Paper,
  IconButton,
  Link
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import BuildIcon from '@mui/icons-material/Build';
// import CableIcon from '@mui/icons-material/Cable';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Circularimg from "../../../assets/circularmagnet.png";
import Roi1 from '../../../assets/Roi1.png';
import Roi2 from '../../../assets/Roi2.png';
import CircularMagnet2 from '../../../assets/Circular_magnet2.jpg';
import Brand1 from '../../../assets/Brand1.png';


const thumbnails = [Roi1, Roi2, Roi2, Roi2, Roi2];


//specs
const specData = [
  {
    label: 'Mechanical',
    properties: [
      'Diameter',
      'Overall height',
      'Net weight',
      'Face area',
      'IP rating',
      'Lifting eye/hanger',
    ],
  },
  {
    label: 'Electrical',
    properties: [
      'Voltage',
      'Current',
      'Power consumption',
      'Control voltage',
    ],
  },
  {
    label: 'Performance',
    properties: [
      'Duty cycle',
      'Max temp',
      'Lifting force',
      'Magnetic field strength',
    ],
  },
];

const renderSpecGrid = (properties) => (
  <Grid container spacing={2}>
    {properties.map((prop, idx) => (
      <Grid item xs={12} sm={6} md={4} key={idx}>
        <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
          <Typography variant="subtitle2" fontWeight="bold">
            {prop}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sample value
          </Typography>
        </Paper>
      </Grid>
    ))}
  </Grid>
);


//what's included
const includedItems = [
  {
    icon: <ThumbUpIcon fontSize="large" />,
    title: 'Controller',
    desc: '{{controller_model}}',
    hasButton: true,
  },
  {
    icon: <ThumbUpIcon fontSize="large" />,
    title: 'Cables & connectors',
    desc: '{{cable_length_m}} m, quick-connects, shackles',
    hasButton: false,
  },
  {
    icon: <ThumbUpIcon fontSize="large" />,
    title: 'Pre-dispatch',
    desc: 'Load-test and functional checks',
    hasButton: false,
  },
];

//Symptoms & Faults
const items = [
  {
    title: 'TAT you can plan around',
    description:
      'Urgent 24–48h, Standard 72h, Overhaul 5–7 days—clear timelines with proactive updates.',
  },
  {
    title: 'Certified safe, ASME-aligned',
    description:
      'Every job closes with a load-test certificate (kN), inspection checklist, and up to 12-month service warranty.',
  },
  {
    title: 'All magnet types, all faults',
    description:
      'Circular, rectangular, suspension (oil/air); coils, leads, pole shoes, insulation class F/H plus controller/PSU repairs.',
  },
  {
    title: 'Field-ready support, nationwide',
    description:
      'On-site diagnosis, pickup & drop, reinstall/commissioning Pan-India coverage with WhatsApp photo reports.',
  },
];


//faqs
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



const CircularMagnet = () => {

  const [expanded, setExpanded] = useState(null);

  const handleChange = (index) => {
    setExpanded(expanded === index ? null : index);
  };


  // const [selected, setSelected] = useState({
  //   Mechanical: '',
  //   Electrical: '',
  //   Performance: '',
  // });

  // const handleChange = (label) => (event) => {
  //   setSelected((prev) => ({
  //     ...prev,
  //     [label]: event.target.value,
  //   }));
  // };


  return (
    <Box>

      <Box
        sx={{
          position: 'relative',
          backgroundColor: '#112B55',
          height: '80px',
          clipPath: 'polygon(0 0, 100% 0, 99% 35%, 95% 100%, 0% 104%)',
          color: 'white',
        }}
      >
        <Toolbar sx={{ height: '100%', justifyContent: 'space-between' }}>
          <Typography variant="h5" sx={{ fontSize: '30px', paddingLeft: '70px' }}>
            Magnets For Rent
          </Typography>
          <Box sx={{ paddingRight: '10%' }}>
            <TextField
              variant="standard"
              placeholder="Search for a product"
              sx={{ width: 250 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon sx={{ color: 'white' }} />
                  </InputAdornment>
                ),
                disableUnderline: true,
                sx: {
                  color: 'white',
                  borderBottom: '1px solid white',
                },
              }}
            />
          </Box>
        </Toolbar>
      </Box>


      <Container maxWidth="lg" sx={{ paddingTop: '30px', paddingBottom: '30px' }}>
        {/* Title */}
        <Typography variant="h4" fontSize={'48px'} fontWeight="bold">Circular Lifting Magnet</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Up to 250 Tons • Duty Cycle • Duty Cycle
        </Typography>

        {/* Image and Form Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'flex-start',
            gap: 4,
            mt: 4,
          }}
        >
          {/* Left: Image Gallery */}
          <Box >
            <CardMedia
              component="img"
              image={Circularimg}
              alt="Main"
              sx={{
                width: '780px',
                height: '440px',
                borderRadius: 2,
                objectFit: 'cover',
              }}
            />

            <Stack direction="row" spacing={1} mt={2} >
              {thumbnails.map((src, index) => (
                <CardMedia
                  key={index}
                  component="img"
                  image={src}
                  alt={`Thumb ${index}`}
                  sx={{
                    width: '148px',
                    height: '124px',
                    borderRadius: 1,
                    cursor: 'pointer',
                    objectFit: 'cover',
                  }}
                />
              ))}
            </Stack>
          </Box>


          {/* Right: Filter Form */}
          <Box
            sx={{
              border: '1px solid #e0a96d',
              borderRadius: '12px',
              padding: 2.5,
              width: '412px',
              height: '350px',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              marginTop: '30px'
            }}
          >
            {/* Row 1: Start & End Date */}
            <Box sx={{ display: 'flex', gap: 2, marginTop: '30px' }}>
              <TextField
                fullWidth
                size="small"
                select
                variant="outlined"
                label="Start date"
                defaultValue="All"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '0',
                    '& fieldset': {
                      borderColor: '#e0a96d',
                    },
                  },
                }}
              >
                <MenuItem value="All">All</MenuItem>
              </TextField>

              <TextField
                fullWidth
                size="small"
                select
                variant="outlined"
                label="End date"
                defaultValue="All"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '0',
                    '& fieldset': {
                      borderColor: '#e0a96d',
                    },
                  },
                }}
              >
                <MenuItem value="All">All</MenuItem>
              </TextField>
            </Box>

            {/* Row 2: Capacity & Duty cycle */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                fullWidth
                size="small"
                select
                variant="outlined"
                label="Capacity"
                defaultValue="All"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '0',
                    '& fieldset': {
                      borderColor: '#e0a96d',
                    },
                  },
                }}
              >
                <MenuItem value="All">All</MenuItem>
              </TextField>

              <TextField
                fullWidth
                size="small"
                select
                variant="outlined"
                label="Duty cycle"
                defaultValue="All"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '0',
                    '& fieldset': {
                      borderColor: '#e0a96d',
                    },
                  },
                }}
              >
                <MenuItem value="All">All</MenuItem>
              </TextField>
            </Box>

            {/* Location Field (Disabled with Search Icon) */}
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              label="Location"
              value="Chennai"
              disabled
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '0', // Remove border radius from input
                  '& fieldset': {
                    borderColor: '#e0a96d', // Set border color to match the container
                  },
                },
                backgroundColor: '#f5f5f5',
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            {/* Button */}
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#112B55',
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 600,
                mt: 1,
                '&:hover': {
                  backgroundColor: '#0d1f3a',
                },
              }}
            >
              Check Availability
            </Button>
          </Box>




        </Box>

        {/* Specs Accordion */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" fontSize={'48px'} fontWeight="bold" gutterBottom>
            Specs
          </Typography>

          {specData.map((section, index) => (
            <Accordion key={index} defaultExpanded={index === 0} sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#f9f9f9' }}>
                <Typography fontWeight="bold">{section.label}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {renderSpecGrid(section.properties)}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* What's Included */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" fontSize={'48px'} fontWeight="bold" mb={2}>
            What’s included
          </Typography>

          <Grid container spacing={2}>
            {includedItems.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  variant="outlined"
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s ease',
                    backgroundColor: '#fff',
                    color: '#000',
                    '&:hover': {
                      backgroundColor: '#0D1F3A',
                      color: '#fff',
                      '& .hover-button': {
                        display: 'flex',
                      },
                      '& .MuiSvgIcon-root': {
                        color: '#fff',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    <Box>{item.icon}</Box>

                    <Typography variant="subtitle1" fontWeight="bold">
                      {item.title}
                    </Typography>

                    <Typography variant="body2" color="inherit">
                      {item.desc}
                    </Typography>

                    {/* Always render the button, only show on hover */}
                    <Box
                      className="hover-button"
                      sx={{
                        mt: 2,
                        display: 'none',
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: '#C97833',
                          borderRadius: '24px',
                          textTransform: 'none',
                          fontWeight: 'bold',
                          px: 3,
                          py: 1,
                          '&:hover': {
                            backgroundColor: '#b2652a',
                          },
                        }}
                      >
                        View More
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>


        {/* Symptoms & faults */}
        <Typography variant="h6" fontSize={'48px'} marginTop={'30px'} fontWeight="bold" mb={2}>
          What’s included
        </Typography>
        <Box
          sx={{
            border: '1px solid #ccc',
            borderRadius: 2,
            p: 3,
            //maxWidth: 1000,
            mx: 'auto',
            mt: 5,
          }}
        >
          <Grid container spacing={2}>
            {/* Left: List */}
            <Grid item xs={12} md={6}>
              {items.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    mb: index !== items.length - 1 ? 3 : 0,
                    cursor: 'pointer',
                    borderLeft: '4px solid transparent',
                    pl: 1.5,
                    transition: 'all 0.3s ease',

                    '&:hover': {
                      borderLeft: '4px solid #2D6CDF',
                      backgroundColor: '#fafbfc',
                    },

                    '&:hover .icon': {
                      color: '#2D6CDF',
                    },
                    '&:hover .title': {
                      color: '#2D6CDF',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                    },
                    '&:hover .desc': {
                      color: '#2D6CDF',
                    },
                  }}
                >
                  <EventNoteIcon
                    fontSize="small"
                    className="icon"
                    sx={{
                      color: '#112B55',
                      mr: 1.5,
                      mt: '4px',
                      transition: 'color 0.3s',
                    }}
                  />
                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight={500}
                      className="title"
                      sx={{
                        color: 'text.primary',
                        transition: 'all 0.3s',
                        fontSize: '1rem',
                      }}
                      mb={0.5}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="desc"
                      sx={{
                        color: 'text.secondary',
                        transition: 'color 0.3s',
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Grid>

            {/* Right: Image */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={CircularMagnet2}
                alt="Worker"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 2,
                }}
              />
            </Grid>
          </Grid>
        </Box>


        {/* FAQs Section */}
        <Button
          disableElevation
          disableRipple
          sx={{
            marginBottom: 2,
            marginTop: '30px',
            ml: 8,
            textTransform: "none",           // keep text as-is
            fontSize: "0.8rem",              // smaller font
            fontWeight: 500,                 // medium weight
            color: "#1a4dab",                // dark blue text
            backgroundColor: "rgba(36,121,233,0.08)", // very light blue background
            borderRadius: "20px",            // pill shape
            px: 2,                           // horizontal padding
            py: 0.5,                         // vertical padding
            boxShadow: "none",               // remove shadow
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
            ml: 8,
            // mt: 5
          }}
          variant="h3" fontWeight="bold" gutterBottom>
          FAQs
        </Typography>
        <Typography
          variant="h5" sx={{
            mb: 4,
            color: "text.secondary",
            ml: 8
          }}>
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
                <Typography fontWeight="bold" fontSize={'24px'}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" fontSize={'18px'} color="text.secondary">
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>



      </Container>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            backgroundColor: '#112B55',
            color: '#fff',
            pt: 6,
            pb: 2,
            px: { xs: 3, md: 10 },
            borderTopLeftRadius: '40px',
            borderTopRightRadius: '40px',
            mt: 10,
            position: 'relative',
                margin: '30px',

          }}
        >
          <Grid container spacing={4}>
            {/* Left - Logo + Unit */}
            <Grid item xs={12} md={4}>
              {/* Reflux Logo Placeholder */}
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 'bold', letterSpacing: '2px', color: '#fff' }}
                >
                  Re<span style={{ fontWeight: 300 }}>Flux</span>
                </Typography>
                <Typography variant="caption" sx={{ letterSpacing: '6px' }}>
                  MAGNETS
                </Typography>
              </Box>

              {/* Unit of */}
              <Box sx={{ mt: 4 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  A unit of
                </Typography>
                <Box
                  component="img"
                   src={Brand1} 
                  alt="Electroflux"
                  sx={{ height: 40 }}
                />
              </Box>
            </Grid>

            {/* Middle - Contact Info */}
            <Grid item xs={12} md={4}>
              <Button
                variant="outlined"
                sx={{
                  color: '#fff',
                  borderColor: '#fff',
                  textTransform: 'none',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  mb: 2,
                  px: 3,
                  py: 0.5,
                }}
              >
                Contact
              </Button>

              <Typography variant="body2" sx={{ mb: 2 }}>
                Xilliams Corner Wine © 2017.<br />
                1112 A Market St # Ste B22,<br />
                Charlottesville, CA 45565
              </Typography>

              <Typography variant="body2" sx={{ mb: 1, color: '#BFD8F9' }}>
                (123) 456-7890
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#BFD8F9',
                  borderBottom: '1px solid #BFD8F9',
                  display: 'inline-block',
                }}
              >
                contact@lift.agency
              </Typography>
            </Grid>

            {/* Right - Links */}
            <Grid item xs={12} md={4}>
              <Button
                variant="outlined"
                sx={{
                  color: '#fff',
                  borderColor: '#fff',
                  textTransform: 'none',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  mb: 2,
                  px: 3,
                  py: 0.5,
                }}
              >
                Links
              </Button>

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
                  sx={{
                    fontWeight: 'bold',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Wall of Love <span style={{ color: 'red', marginLeft: 6 }}>❤️</span>
                </Link>
                <Box sx={{ width: 30, height: 1, backgroundColor: '#fff', mt: 1 }} />
                <Link
                  href="#"
                  underline="none"
                  sx={{ fontWeight: 'bold', color: '#fff' }}
                >
                  Sitemap
                </Link>
              </Box>
            </Grid>
          </Grid>

          {/* Scroll to Top Arrow */}
          <IconButton
            sx={{
              position: 'absolute',
              bottom: 16,
              right: 16,
              backgroundColor: '#112B55',
              border: '1px solid white',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#1b3a6b',
              },
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUpwardIcon />
          </IconButton>

          {/* Bottom Line */}
          <Box sx={{ textAlign: 'right', fontSize: '0.75rem', mt: 4, color: '#ccc' }}>
            © 2020 Ligft Media All rights reserved.
          </Box>
        </Box>
    </Box>
  )
}

export default CircularMagnet
