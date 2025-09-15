import React from 'react';
import { Box, Grid, Typography,Link, IconButton, Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useNavigate } from "react-router-dom";

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

const BlogDetails = () => {

  const navigate = useNavigate();
  
  return (
    <Box sx={{ bgcolor: '#fff', py: 6 }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
        <Grid container spacing={6}>
          {/* Left Column */}

          <Grid item xs={12} md={8}>
            {/* Date */}
            <Typography variant="body2" color="#2E8E7E" mb={1}>
              Sunday, 1 Jan 2023
            </Typography>

            {/* Title */}
            <Typography sx={{ ...typography.displayL, color:'#1C2D4B' }} mb={3}>
              Enhancing User Interfaces with Grid Systems
            </Typography>

            {/* Main Image */}
            <Box
              component="img"
              src={BlogDetails1}
              alt="Main blog visual"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: 426,
                objectFit: 'cover',
                mb: 3,
              }}
            />

            {/* Main Paragraph */}
            <Typography sx={{ ...typography.h5, color:'#1C2D4B' }} lineHeight={1.8} mb={3}>
              A grid system is an essential design framework that organizes content on web pages.
              It consists of intersecting vertical and horizontal lines that form a matrix,
              allowing for precise alignment and arrangement of page elements. By employing grid
              systems, designers can achieve a cohesive aesthetic across websites, making layouts
              not only visually appealing but also user-friendly.
              <br /><br />
              Navigating the streets of San Francisco is a breeze thanks to its grid layout, which
              simplifies the journey for both residents and visitors. Similarly, grid systems on
              web pages offer a reliable structure that aids both users and schemes. With a consistent
              format for both readers and readability, designers can ensure a seamless experience.
            </Typography>


            {/* Blog details 2 */}
            <Box >
              <Typography variant="h5" fontWeight="bold" color={'#C0C5D0'} fontSize={16} mb={2} textAlign={'center'}>
                Definition: A grid consists of columns, gutter, and margins that create a framework
                for organizing elements on a page.
              </Typography>
              <Box
                component="img"
                src={BlogDetails2}

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
                Definition: A grid comprises columns, gutters, and margins that establish a layout
                structure for page elements.
              </Typography>

              <Typography sx={{ ...typography.h5, color:'#1C2D4B' }} lineHeight={1.8} mb={3}>
                Common grid types in web design include: column grid, modular grid, and hierarchical grid.
                <br /><br />
                A column grid divides a page into vertical sections, aligning UI elements and content to these columns.
                <br /><br />
                The modular grid builds upon the column grid by incorporating rows, creating modules where elements can be aligned. This type of grid is particularly effective for e-commerce sites and listings, as it allows for repeatable rows that enhance browsing.
                <br /><br />
                A hierarchical grid organizes content based on importance, utilizing columns, rows, and modules. The most significant elements occupy the largest sections of the grid.
                <br /> <br />
                <Typography variant="body2" color={'#C0C5D0'} fontSize={16} >
                  Understanding the Grid Structure
                </Typography>
                No matter the grid type, all grids consist of three key components: columns, gutters, and margins.
                <br /><br />
                Columns are the primary structure of a grid, accommodating most of the content. To ensure adaptability across devices, column widths are typically expressed in percentages rather than fixed units, with the number of columns varying by screen size. For instance, a mobile grid might feature 4 columns, while a desktop grid could have 12.
                <br /><br />
                Gutters are the spaces between columns that separate different elements. While gutter widths are fixed, they can vary based on screen size; wider gutters are suitable for larger displays, while narrower gutters work better for mobile devices.
                <br /><br />
              </Typography>



            </Box>

            {/* Blog Details 3 */}

            <Box >

              <Box
                component="img"
                src={BlogDetails3}

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
                A grid is composed of three elements: (1) columns, (2) gutters, and (3) margins.
              </Typography>
                <br></br>
              <Typography variant="body2" color={'#C0C5D0'} fontSize={18} textAlign={'left'}>
                Practical Applications of Grids
              </Typography>
                <br></br>
              <Typography variant="body2" color={'#C0C5D0'} fontSize={16}>
                Example 1: Hierarchical Grid
              </Typography>

              <Typography sx={{ ...typography.h5, color:'#1C2D4B' }} lineHeight={1.8} mb={3}>
                  Our first example comes from The Washington Post. This layout employs a hierarchical grid to create a newspaper-like reading experience. On desktop screens, two primary columns form the grid, with the leading news story occupying the most space in the left column, while secondary stories fill the smaller column and modules on the right.
              </Typography>

            </Box>

            
            {/* Blog Details 4 */}
            <Box >

              <Box
                component="img"
                src={BlogDetails4}

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
               The Washington Post effectively utilizes a hierarchical grid to enhance its reading experience. (Columns are highlighted in yellow, gutters in blue, and margins in purple.)
              </Typography>
                <br></br>
              <Typography variant="body2" color={'#C0C5D0'} fontSize={16}>
                Example 2: Column Grid
              </Typography>

              <Typography sx={{ ...typography.h5, color:'#1C2D4B' }} lineHeight={1.8} mb={3}>
                  Our second example is from Healthline, a health information website. This design features a column grid that creates a visually appealing layout. At this screen size, four evenly sized columns form the grid, with elements aligned within these columns. The gutters, which separate the columns, are consistently sized, aiding users in distinguishing between different articles. The margins are uniform on both sides.
              </Typography>

            </Box>

            {/* Blog Details 5*/}
             <Box >
              <Box
                component="img"
                src={BlogDetails5}

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
                  Healthline’s four-column grid simplifies article scanning. (Columns are highlighted in yellow, gutters in blue, and margins in purple.)
              </Typography>
                <br></br>
              <Typography variant="body2" color={'#C0C5D0'} fontSize={16}>
                Example 3: Modular Grid
              </Typography>

              <Typography sx={{ ...typography.h5, color:'#1C2D4B' }} lineHeight={1.8} mb={3}>
                  Our third example is from Dribbble, a design showcase platform. The site employs a modular grid to facilitate an enjoyable browsing experience. On desktop, the layout consists of rows made up of 4 uniformly sized modules. The horizontal gutters are slightly wider than the vertical ones, and the margins are consistently sized on both sides, effectively separating each element.
              </Typography>
            </Box>

            {/* Blog Details 6*/}
             <Box >
              <Box
                component="img"
                src={BlogDetails6}

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
                  Dribbble’s modular grid enhances user browsing. (Columns are highlighted in yellow, gutters in blue, and margins in purple.)
              </Typography>
                <br></br>
              <Typography variant="body2" color={'#C0C5D0'} fontSize={16}>
                  Example 4: Breaking the Grid
              </Typography>

              <Typography sx={{ ...typography.h5, color:'#1C2D4B' }} lineHeight={1.8} mb={3}>
                 Our final example is from Pinterest, which utilizes a column grid evident in its left navigation that spans 2 columns. Upon closer inspection, some images align with the margins while others do not. This intentional breaking of the grid can create visual interest but may also hinder quick scanning of content. It’s acceptable to break the grid occasionally, provided there’s a clear rationale.
              </Typography>
            </Box>


            {/* Blog Details 7*/}
             <Box >
              <Box
                component="img"
                src={BlogDetails7}

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
                  Breaking the grid can lead to a disorganized browsing experience. (Columns are highlighted in yellow, gutters in blue, and margins in purple.)
              </Typography>
                <br></br>
              <Typography variant="body2" color={'#C0C5D0'} fontSize={16}>
                 Advantages of Using a Grid
              </Typography>

              <Typography sx={{ ...typography.h5, color:'#1C2D4B' }} lineHeight={1.8} mb={3}>
                 Implementing a grid offers benefits for both users and designers:<br></br>
                 - Designers can swiftly create well-aligned interfaces.<br></br>
                 - Users can easily navigate predictable grid-based layouts.<br></br>
                 - A well-structured grid adapts seamlessly to various screen sizes and orientations, making it a cornerstone of responsive web design. For instance, a desktop layout may feature 12 grid columns, which can be adjusted to 4 columns on mobile.
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
              <Typography sx={{ ...typography.h5, color:'#1C2D4B' }} lineHeight={1.8} mb={3}>
                Moreover, grids are not merely a design afterthought; they are crucial for both designers and developers. It’s essential to communicate the grid structure to developers to ensure accurate implementation.
              </Typography>
              <Typography variant="body2" color={'#C0C5D0'} fontSize={18} textAlign={'center'}>
                 Selecting and Configuring Your Grid
              </Typography>
              <Typography sx={{ ...typography.h5, color:'#1C2D4B' }} lineHeight={1.8} mb={3}>
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
  
              <Typography sx={{ ...typography.h5, color:'#1C2D4B' }} lineHeight={1.8} mb={3}>
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
  
              <Typography sx={{ ...typography.h5, color:'#1C2D4B' }} lineHeight={1.8} mb={3}>
                 Consider adopting an 8px grid system. Most devices have screen dimensions that are multiples of 8, making it easier to scale and implement a grid.
              </Typography>

              <Typography variant="body2" color={'#C0C5D0'} fontSize={18} textAlign={'center'}>
                  Final Thoughts
              </Typography>

              <Typography sx={{ ...typography.h5, color:'#1C2D4B' }} lineHeight={1.8} mb={3}>
                 Grids not only provide a framework for designers to build layouts but also enhance readability and navigation for users. Employ a robust grid system that adapts effortlessly to various screen sizes.
              </Typography>
            </Box>

          </Grid>




          {/* Right Column */}
          <Grid item xs={12} md={4} sx={{cursor:'pointer'}} onClick={() => navigate("/home/Blogpost")}>
            <Typography sx={{ ...typography.h2, color:'#0E1626' }} mb={2}>
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
              <Typography sx={{ ...typography.h3, color:'#0E1626'}} mb={0.5}>
                Electro Lifting Magnet Innovations
              </Typography>
              <Typography sx={{ ...typography.h5, color:'#1C2D4B'}} fontSize={20}>
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
              <Typography sx={{ ...typography.h3, color:'#0E1626'}} mb={0.5}>
                Understanding Electro Lifting Magnet Rentals
              </Typography>
              <Typography sx={{ ...typography.h5, color:'#1C2D4B'}}>
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
              <Typography sx={{ ...typography.h3, color:'#0E1626'}}  mb={0.5}>
                Buying vs. Renting Electro Lifting Magnets
              </Typography>
              <Typography sx={{ ...typography.h5, color:'#1C2D4B'}}>
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
              <Typography sx={{ ...typography.h3, color:'#0E1626'}} mb={0.5}>
                Scaling Your Used Electro Lifting Magnets
              </Typography>
              <Typography sx={{ ...typography.h5, color:'#1C2D4B'}}>
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
              <Typography sx={{ ...typography.h3, color:'#0E1626'}} mb={0.5}>
                Electro Lifting Magnet Maintenance
              </Typography>
              <Typography sx={{ ...typography.h5, color:'#1C2D4B'}}>
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
              <Typography sx={{ ...typography.h3, color:'#0E1626'}}>
                What to Look for When Buying Electro Lifting Magnets
              </Typography>
              <Typography sx={{ ...typography.h5, color:'#1C2D4B'}}>
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
              <Typography sx={{ ...typography.h3, color:'#0E1626'}} mb={0.5}>
                The Future of Electro Lifting Magnets
              </Typography>
              <Typography sx={{ ...typography.h5, color:'#1C2D4B'}}>
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
              <Typography sx={{ ...typography.h3, color:'#0E1626'}} mb={0.5}>
                Top 5 Electro Lifting Magnet Brands
              </Typography>
              <Typography sx={{ ...typography.h5, color:'#1C2D4B'}}>
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
              <Typography sx={{ ...typography.h3, color:'#0E1626'}} mb={0.5}>
                Podcast: The Electro Lifting Magnet Revolution
              </Typography>
              <Typography sx={{ ...typography.h5, color:'#1C2D4B'}}>
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
              <Typography sx={{ ...typography.h3, color:'#0E1626'}} mb={0.5}>
                Electro Lifting Magnet Safety Tips
              </Typography>
              <Typography sx={{ ...typography.h5, color:'#1C2D4B'}}>
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
              <Typography sx={{ ...typography.h3, color:'#0E1626'}} mb={0.5}>
                Electro Lifting Magnet Case Studies
              </Typography>
              <Typography sx={{ ...typography.h5, color:'#1C2D4B'}}>
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
              <Typography sx={{ ...typography.h3, color:'#0E1626'}} mb={0.5}>
                Electro Lifting Magnet FAQs
              </Typography>
              <Typography sx={{ ...typography.h5, color:'#1C2D4B'}}>
                Answers to the most common questions about electro lifting magnets, their uses, and maintenance.
              </Typography>
            </Box>

            
          </Grid>
        </Grid>
      </Box>
      

       {/* Footer */}
                   <Box
                      component="footer"
                      sx={{
                          backgroundColor: '#112B55',
                          color: '#fff',
                          pt: 6,
                          pb: 2,
                          px: { xs: 3, md: 10 },
                          paddingTop: '80px',
                          borderTopLeftRadius: '40px',
                          borderTopRightRadius: '40px',
                          mt: 10,
                          position: 'relative',
                          margin: '20px',
      
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
  );
};

export default BlogDetails;
