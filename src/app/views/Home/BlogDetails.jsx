import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Link, IconButton, Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";


import BlogDetails1 from '../../../assets/BlogDetails1.jpg';
import BlogDetails2 from '../../../assets/BlogDetails2.png';
import BlogDetails3 from '../../../assets/BlogDetails3.png';
import BlogDetails4 from '../../../assets/BlogDetails4.png';
import BlogDetails5 from '../../../assets/BlogDetails5.png';
import BlogDetails6 from '../../../assets/BlogDetails6.png';
import BlogDetails7 from '../../../assets/BlogDetails7.png';
import BlogDetails8 from '../../../assets/BlogDetails8.png';
import BlogDetails9 from '../../../assets/BlogDetails9.png';
import BlogDetails10 from '../../../assets/BlogDetails10.png';

import Blogaside1 from '../../../assets/Blogaside1.jpg';
import Blogaside2 from '../../../assets/Blogaside2.jpg';
import Blogaside3 from '../../../assets/Blogaside3.jpg';
import Blogaside4 from '../../../assets/Blogaside4.jpg';
import Blogaside5 from '../../../assets/Blogaside5.jpg';
import Blogaside6 from '../../../assets/Blogaside6.jpg';
import Blogaside7 from '../../../assets/Blogaside7.jpg';
//same image as blogaside 8 & 9 
import Blogpost6 from '../../../assets/Blogpost6.jpg';
import Blogpost7 from '../../../assets/Blogpost7.jpg';

import Brand1 from '../../../assets/Brand1.png';
import { typography } from 'app/utils/constant';
import Footer from 'app/components/Card/Footer';

const BlogDetails = () => {

  const navigate = useNavigate();

  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const apiUrl =
      "https://skillglow.bexatm.com/ATM/ContentManageSysV1.php?contentId=BlogDetails";
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setContent(data))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  const handleEdit = (contentTextID, type = "T") => {
    navigate(
      `/CmsEditor?contentId=BlogDetails&contentTextID=${contentTextID}&contentType=${type}`
    );
  };

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
          "&:hover": {
            backgroundColor: "#e0e0e0",
            color: "#070808ff",
            //borderColor: "#214870",
          },
          verticalAlign: "middle",
        }}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    ) : null;


  if (!content) return null;


  return (

    <Box sx={{ bgcolor: '#fff', py: 6 }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
        <Grid container spacing={6}>
          {/* Left Column */}

          <Grid item xs={12} md={8}>
            {/* Date */}

            <Box>
              <Typography variant="body2" color="#2E8E7E" mb={1}>
                {content.BD1001}
                <EditIconButton id="BD1001" />
              </Typography>

              {/* Title */}
              <Typography sx={{ ...typography.displayL, color: '#1C2D4B' }} mb={3}>
                {content.BD1002}
                <EditIconButton id="BD1002" />
              </Typography>

              {/* Main Image */}

              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '1137px',
                  mx: 'auto',
                }}
              >
                <Box
                  component="img"
                  src={`https://skillglow.bexatm.com${content.BD1003}`}
                  alt="Main blog visual"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: 426,
                    objectFit: 'cover',
                    mb: 3,
                  }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                  }}
                >
                  <EditIconButton id="BD1003" type="I" />
                </Box>
              </Box>


              {/* Main Paragraph */}
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }} lineHeight={1.8} mb={3}>
                {content.BD1004.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
                <EditIconButton id="BD1004" />
              </Typography>
            </Box>

            {/* Blog details 2 */}
            <Box >
              <Typography variant="h5" fontWeight="bold" color={'#C0C5D0'} fontSize={16} mb={2} textAlign={'center'}>
                {content.BD1005}
                <EditIconButton id="BD1005" />
              </Typography>

              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '1137px',
                  mx: 'auto',
                }}
              >
                <Box
                  component="img"
                  src={`https://skillglow.bexatm.com${content.BD1006}`}
                  alt="Main blog visual"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: 426,
                    objectFit: 'cover',
                    mb: 3,
                  }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                  }}
                >
                  <EditIconButton id="BD1006" type="I" />
                </Box>
              </Box>

              <Typography variant="body2" color={'#C0C5D0'} fontSize={16} textAlign={'center'}>
                {content.BD1007}
                <EditIconButton id="BD1007" />
              </Typography>

              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }} lineHeight={1.8} mb={3}>
                {content.BD1008.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
                <EditIconButton id="BD1008" />
                <Typography variant="body2" color={'#C0C5D0'} fontSize={16} >
                  {content.BD1009}
                  <EditIconButton id="BD1009" />
                </Typography>
                {content.BD1010.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
                <EditIconButton id="BD1010" />
              </Typography>



            </Box>

            {/* Blog Details 3 */}
            <Box >
            <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '1137px',
                  mx: 'auto',
                }}
              >
                <Box
                  component="img"
                  src={`https://skillglow.bexatm.com${content.BD1011}`}
                  alt="Main blog visual"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: 426,
                    objectFit: 'cover',
                    mb: 3,
                  }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                  }}
                >
                  <EditIconButton id="BD1011" type="I" />
                </Box>
              </Box>
              <Typography variant="body2" color={'#C0C5D0'} fontSize={16} textAlign={'center'}>
                {content.BD1012}
                <EditIconButton id="BD1012" />
              </Typography>
              <br></br>
              <Typography variant="body2" color={'#C0C5D0'} fontSize={18} textAlign={'left'}>
                {content.BD1013}
                <EditIconButton id="BD1013" />
              </Typography>
              <br></br>
              <Typography variant="body2" color={'#C0C5D0'} fontSize={16}>
                {content.BD1014}
                <EditIconButton id="BD1014" />
              </Typography>

              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }} lineHeight={1.8} mb={3}>
                {content.BD1015}
                <EditIconButton id="BD1015" />
              </Typography>

            </Box>


            {/* Blog Details 4 */}
            <Box >

              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '1137px',
                  mx: 'auto',
                }}
              >
                <Box
                  component="img"
                  src={`https://skillglow.bexatm.com${content.BD1016}`}
                  alt="Main blog visual"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: 426,
                    objectFit: 'cover',
                    mb: 3,
                  }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                  }}
                >
                  <EditIconButton id="BD1016" type="I" />
                </Box>
              </Box>

              <Typography variant="body2" color={'#C0C5D0'} fontSize={16} textAlign={'center'}>
                {content.BD1017}
                <EditIconButton id="BD1017" />
              </Typography>
              <br></br>
              <Typography variant="body2" color={'#C0C5D0'} fontSize={16}>
                {content.BD1018}
                <EditIconButton id="BD1018" />
              </Typography>

              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }} lineHeight={1.8} mb={3}>
                {content.BD1019}
                <EditIconButton id="BD1019" />
              </Typography>

            </Box>

            {/* Blog Details 5*/}
            <Box >

               <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '1137px',
                  mx: 'auto',
                }}
              >
                <Box
                  component="img"
                  src={`https://skillglow.bexatm.com${content.BD1020}`}
                  alt="Main blog visual"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: 426,
                    objectFit: 'cover',
                    mb: 3,
                  }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                  }}
                >
                  <EditIconButton id="BD1020" type="I" />
                </Box>
              </Box>

              <Typography variant="body2" color={'#C0C5D0'} fontSize={16} textAlign={'center'}>
                {content.BD1021}
                <EditIconButton id="BD1021" />
              </Typography>
              <br></br>
              <Typography variant="body2" color={'#C0C5D0'} fontSize={16}>
                {content.BD1022}
                <EditIconButton id="BD1022" />
              </Typography>

              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }} lineHeight={1.8} mb={3}>
                {content.BD1023}
                <EditIconButton id="BD1023" />
              </Typography>
            </Box>

            {/* Blog Details 6*/}
            <Box >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '1137px',
                  mx: 'auto',
                }}
              >
                <Box
                  component="img"
                  src={`https://skillglow.bexatm.com${content.BD1024}`}
                  alt="Main blog visual"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: 426,
                    objectFit: 'cover',
                    mb: 3,
                  }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                  }}
                >
                  <EditIconButton id="BD1024" type="I" />
                </Box>
              </Box>

              <Typography variant="body2" color={'#C0C5D0'} fontSize={16} textAlign={'center'}>
                 {content.BD1025}
                <EditIconButton id="BD1025" />
              </Typography>
              <br></br>
              <Typography variant="body2" color={'#C0C5D0'} fontSize={16}>
                 {content.BD1026}
                <EditIconButton id="BD1026" />
              </Typography>

              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }} lineHeight={1.8} mb={3}>
                {content.BD1027}
                <EditIconButton id="BD1027" />
              </Typography>
            </Box>


            {/* Blog Details 7*/}
            <Box >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '1137px',
                  mx: 'auto',
                }}
              >
                <Box
                  component="img"
                  src={`https://skillglow.bexatm.com${content.BD1028}`}
                  alt="Main blog visual"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: 426,
                    objectFit: 'cover',
                    mb: 3,
                  }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                  }}
                >
                  <EditIconButton id="BD1028" type="I" />
                </Box>
              </Box>

              <Typography variant="body2" color={'#C0C5D0'} fontSize={16} textAlign={'center'}>
                 {content.BD1029}
                <EditIconButton id="BD1029" />
              </Typography>
              <br></br>
              <Typography variant="body2" color={'#C0C5D0'} fontSize={16}>
                 {content.BD1030}
                <EditIconButton id="BD1030" />
              </Typography>

              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }} lineHeight={1.8} mb={3}>
                  {content.BD1031.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
                <EditIconButton id="BD1031" />
              </Typography>
            </Box>


            {/* Blog Details 8*/}
            <Box >
              <Box
                component="img"
                src={BlogDetails8}

                alt="Column Grid"
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: 426,
                  objectFit: 'cover',
                  mb: 3,
                }}
              />
              <Typography variant="body2" color={'#C0C5D0'} fontSize={16} textAlign={'center'}>
                At mobile size, Dribbble’s single-column layout (left) is transformed into a four-column grid (right).
              </Typography>
              <br></br>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }} lineHeight={1.8} mb={3}>
                Moreover, grids are not merely a design afterthought; they are crucial for both designers and developers. It’s essential to communicate the grid structure to developers to ensure accurate implementation.
              </Typography>
              <Typography variant="body2" color={'#C0C5D0'} fontSize={18} textAlign={'center'}>
                Selecting and Configuring Your Grid
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }} lineHeight={1.8} mb={3}>
                The way you configure a grid is vital for crafting thoughtful layouts and user experiences.
                <br></br><br></br>
                Choose the appropriate grid for your project. Consider which type—column, modular, or hierarchical—best meets your needs. A hierarchical grid is ideal if one element on your page must always stand out. For variable content, a column or modular grid offers flexibility, allowing elements to span multiple columns or modules.
                <br></br><br></br>
                Invest time in setting up your grid. Once you identify the suitable grid type, establish the number of columns, margins, and gutter sizes based on screen dimensions. Prepare for mobile, tablet, and desktop views. A 12-column grid is typically versatile enough for most design requirements, with the number of columns decreasing as screen size reduces. Tools like Sketch and Figma simplify grid setup and adjustments.
              </Typography>

            </Box>

            {/* Blog Details 9*/}
            <Box >
              <Box
                component="img"
                src={BlogDetails9}

                alt="Column Grid"
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: 426,
                  objectFit: 'cover',
                  mb: 3,
                }}
              />
              <Typography variant="body2" color={'#C0C5D0'} fontSize={16} textAlign={'center'}>
                Easily adjust the number of columns, gutter widths, and margin sizes in Figma.
              </Typography>
              <br></br>

              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }} lineHeight={1.8} mb={3}>
                Always position content within columns, avoiding gutters. Keeping gutters clear ensures proper separation and alignment of elements.
              </Typography>
            </Box>


            {/* Blog Details 10*/}
            <Box >
              <Box
                component="img"
                src={BlogDetails10}

                alt="Column Grid"
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: 426,
                  objectFit: 'cover',
                  mb: 3,
                }}
              />
              <Typography variant="body2" color={'#C0C5D0'} fontSize={16} textAlign={'center'}>
                Content should be placed within and across columns, not in gutters.
              </Typography>
              <br></br>

              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }} lineHeight={1.8} mb={3}>
                Consider adopting an 8px grid system. Most devices have screen dimensions that are multiples of 8, making it easier to scale and implement a grid.
              </Typography>

              <Typography variant="body2" color={'#C0C5D0'} fontSize={18} textAlign={'center'}>
                Final Thoughts
              </Typography>

              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }} lineHeight={1.8} mb={3}>
                Grids not only provide a framework for designers to build layouts but also enhance readability and navigation for users. Employ a robust grid system that adapts effortlessly to various screen sizes.
              </Typography>
            </Box>

          </Grid>




          {/* Right Column */}
          <Grid item xs={12} md={4} sx={{ cursor: 'pointer' }} onClick={() => navigate("/home/Blogpost")}>
            <Typography sx={{ ...typography.h2, color: '#0E1626' }} mb={2}>
              Latest Insights on Electro Lifting Magnets
            </Typography>

            {/* Sidebar Card 1 */}
            <Box mb={4}>
              <Box
                component="img"
                src={Blogaside1}
                alt="Electro Lifting Magnet Innovations"
                sx={{ width: '100%', height: 151, objectFit: 'cover', mb: 1.5 }}
              />
              <Typography variant="body2" color="#2E8E7E" mb={0.5}>
                Monday, 2 Jan 2023
              </Typography>
              <Typography sx={{ ...typography.h3, color: '#0E1626' }} mb={0.5}>
                Electro Lifting Magnet Innovations
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }} fontSize={20}>
                What are the latest advancements in electro lifting magnets that can enhance your operations?
              </Typography>
            </Box>

            {/* Sidebar Card 2 */}
            <Box mb={4} marginTop={'20%'}>
              <Box
                component="img"
                src={Blogaside2}
                alt="Electro Lifting Magnet Rentals"
                sx={{ width: '100%', height: 228, objectFit: 'cover', mb: 1.5 }}
              />
              <Typography variant="body2" color="#2E8E7E" mb={0.5}>
                Monday, 2 Jan 2023
              </Typography>
              <Typography sx={{ ...typography.h3, color: '#0E1626' }} mb={0.5}>
                Understanding Electro Lifting Magnet Rentals
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }}>
                Discover how renting electro lifting magnets can save costs and improve efficiency in your projects.
              </Typography>
            </Box>

            {/* Sidebar Card 3 */}
            <Box mb={4} marginTop={'20%'}>
              <Box
                component="img"
                src={Blogaside3}
                alt="Buying vs Renting"
                sx={{ width: '100%', height: 228, objectFit: 'cover', mb: 1.5 }}
              />
              <Typography variant="body2" color="#2E8E7E" mb={0.5}>
                Monday, 2 Jan 2023
              </Typography>
              <Typography sx={{ ...typography.h3, color: '#0E1626' }} mb={0.5}>
                Buying vs. Renting Electro Lifting Magnets
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }}>
                Explore the pros and cons of buying vs renting for your business needs.
              </Typography>
            </Box>

            {/* Sidebar Card 4 */}
            <Box marginTop={'20%'}>
              <Box
                component="img"
                src={Blogaside4}
                alt="Scaling Used Magnets"
                sx={{ width: '100%', height: 228, objectFit: 'cover', mb: 1.5 }}
              />
              <Typography variant="body2" color="#2E8E7E" mb={0.5}>
                Monday, 2 Jan 2023
              </Typography>
              <Typography sx={{ ...typography.h3, color: '#0E1626' }} mb={0.5}>
                Scaling Your Used Electro Lifting Magnets
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }}>
                Tips to effectively sell your used lifting equipment for the best ROI.
              </Typography>
            </Box>

            {/* Sidebar Card 5 */}
            <Box marginTop={'20%'}>
              <Box
                component="img"
                src={Blogaside5}
                alt="Scaling Used Magnets"
                sx={{ width: '100%', height: 228, objectFit: 'cover', mb: 1.5 }}
              />
              <Typography variant="body2" color="#2E8E7E" mb={0.5}>
                Monday, 2 Jan 2023
              </Typography>
              <Typography sx={{ ...typography.h3, color: '#0E1626' }} mb={0.5}>
                Electro Lifting Magnet Maintenance
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }}>
                Regular maintenance is crucial for the longevity and performance of your electro lifting magnets.
              </Typography>
            </Box>

            {/* Sidebar Card 6 */}
            <Box marginTop={'20%'}>
              <Box
                component="img"
                src={Blogaside6}
                alt="Scaling Used Magnets"
                sx={{ width: '100%', height: 228, objectFit: 'cover', mb: 1.5 }}
              />
              <Typography variant="body2" color="#2E8E7E" mb={0.5}>
                Monday, 2 Jan 2023
              </Typography>
              <Typography sx={{ ...typography.h3, color: '#0E1626' }}>
                What to Look for When Buying Electro Lifting Magnets
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }}>
                A comprehensive guide to selecting the right electro lifting magnets for your specific needs.
              </Typography>
            </Box>


            {/* Sidebar Card 7 */}
            <Box marginTop={'20%'}>
              <Box
                component="img"
                src={Blogaside7}
                alt="Scaling Used Magnets"
                sx={{ width: '100%', height: 228, objectFit: 'cover', mb: 1.5 }}
              />
              <Typography variant="body2" color="#2E8E7E" mb={0.5}>
                Monday, 2 Jan 2023
              </Typography>
              <Typography sx={{ ...typography.h3, color: '#0E1626' }} mb={0.5}>
                The Future of Electro Lifting Magnets
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }}>
                What innovations are on the horizon for electro lifting magnets and how will they impact the industry?
              </Typography>
            </Box>

            {/* Sidebar Card 8 */}
            <Box marginTop={'20%'}>
              <Box
                component="img"
                src={Blogpost6}
                alt="Scaling Used Magnets"
                sx={{ width: '100%', height: 228, objectFit: 'cover', mb: 1.5 }}
              />
              <Typography variant="body2" color="#2E8E7E" mb={0.5}>
                Monday, 2 Jan 2023
              </Typography>
              <Typography sx={{ ...typography.h3, color: '#0E1626' }} mb={0.5}>
                Top 5 Electro Lifting Magnet Brands
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }}>
                A review of the leading brands in the electro lifting magnet market and their standout features.
              </Typography>
            </Box>

            {/* Sidebar Card 9 */}
            <Box marginTop={'20%'}>
              <Box
                component="img"
                src={Blogpost7}
                alt="Scaling Used Magnets"
                sx={{ width: '100%', height: 228, objectFit: 'cover', mb: 1.5 }}
              />
              <Typography variant="body2" color="#2E8E7E" mb={0.5}>
                Monday, 2 Jan 2023
              </Typography>
              <Typography sx={{ ...typography.h3, color: '#0E1626' }} mb={0.5}>
                Podcast: The Electro Lifting Magnet Revolution
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }}>
                Join us as we discuss the latest trends and technologies in the electro lifting magnet industry.
              </Typography>
            </Box>

            {/* Sidebar Card 10 */}
            <Box marginTop={'20%'}>
              <Box
                component="img"
                src={Blogaside3}
                alt="Scaling Used Magnets"
                sx={{ width: '100%', height: 228, objectFit: 'cover', mb: 1.5 }}
              />
              <Typography variant="body2" color="#2E8E7E" mb={0.5}>
                Monday, 2 Jan 2023
              </Typography>
              <Typography sx={{ ...typography.h3, color: '#0E1626' }} mb={0.5}>
                Electro Lifting Magnet Safety Tips
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }}>
                Essential safety practices to follow when using electro lifting magnets in your operations.
              </Typography>
            </Box>

            {/* Sidebar Card 11 */}
            <Box marginTop={'20%'}>
              <Box
                component="img"
                src={Blogaside4}
                alt="Scaling Used Magnets"
                sx={{ width: '100%', height: 228, objectFit: 'cover', mb: 1.5 }}
              />
              <Typography variant="body2" color="#2E8E7E" mb={0.5}>
                Monday, 2 Jan 2023
              </Typography>
              <Typography sx={{ ...typography.h3, color: '#0E1626' }} mb={0.5}>
                Electro Lifting Magnet Case Studies
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }}>
                Explore real-world applications and success stories of electro lifting magnets in various industries.
              </Typography>
            </Box>

            {/* Sidebar Card 12 */}
            <Box marginTop={'20%'}>
              <Box
                component="img"
                src={Blogaside5}
                alt="Scaling Used Magnets"
                sx={{ width: '100%', height: 228, objectFit: 'cover', mb: 1.5 }}
              />
              <Typography variant="body2" color="#2E8E7E" mb={0.5}>
                Monday, 2 Jan 2023
              </Typography>
              <Typography sx={{ ...typography.h3, color: '#0E1626' }} mb={0.5}>
                Electro Lifting Magnet FAQs
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }}>
                Answers to the most common questions about electro lifting magnets, their uses, and maintenance.
              </Typography>
            </Box>


          </Grid>
        </Grid>
      </Box>


      {/* Footer */}
      <Box >
        <Footer />
      </Box>
    </Box >
  );
};

export default BlogDetails;
