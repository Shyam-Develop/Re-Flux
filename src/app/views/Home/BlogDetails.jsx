import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Link, IconButton, Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

//same image as blogaside 8 & 9 

import Brand1 from '../../../assets/Brand1.png';
import { typography } from 'app/utils/constant';
import Footer from 'app/components/Card/Footer';

const BlogDetails = () => {

  const navigate = useNavigate();

  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const apiUrl =
      `${process.env.REACT_APP_CMS_URL}?contentId=BlogDetails`
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
                  src={`https://cmsreflux.bexatm.com${content.BD1003}`}
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
                  src={`https://cmsreflux.bexatm.com${content.BD1006}`}
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
                  src={`https://cmsreflux.bexatm.com${content.BD1011}`}
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
                  src={`https://cmsreflux.bexatm.com${content.BD1016}`}
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
                  src={`https://cmsreflux.bexatm.com${content.BD1020}`}
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
                  src={`https://cmsreflux.bexatm.com${content.BD1024}`}
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
                  src={`https://cmsreflux.bexatm.com${content.BD1028}`}
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
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '1137px',
                  mx: 'auto',
                }}
              >
                <Box
                  component="img"
                  src={`https://cmsreflux.bexatm.com${content.BD1032}`}
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
                  <EditIconButton id="BD1032" type="I" />
                </Box>
              </Box>

              <Typography variant="body2" color={'#C0C5D0'} fontSize={16} textAlign={'center'}>
                {content.BD1033}
                <EditIconButton id="BD1033" />
              </Typography>
              <br></br>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }} lineHeight={1.8} mb={3}>
                {content.BD1034}
                <EditIconButton id="BD1034" />
              </Typography>
              <Typography variant="body2" color={'#C0C5D0'} fontSize={18} textAlign={'center'}>
                {content.BD1035}
                <EditIconButton id="BD1035" />
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }} lineHeight={1.8} mb={3}>
                {content.BD1036.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
                <EditIconButton id="BD1036" />
              </Typography>

            </Box>

            {/* Blog Details 9*/}
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
                  src={`https://cmsreflux.bexatm.com${content.BD1037}`}
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
                  <EditIconButton id="BD1037" type="I" />
                </Box>
              </Box>

              <Typography variant="body2" color={'#C0C5D0'} fontSize={16} textAlign={'center'}>
                {content.BD1038}
                <EditIconButton id="BD1038" />
              </Typography>
              <br></br>

              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }} lineHeight={1.8} mb={3}>
                {content.BD1039}
                <EditIconButton id="BD1039" />
              </Typography>
            </Box>


            {/* Blog Details 10*/}
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
                  src={`https://cmsreflux.bexatm.com${content.BD1040}`}
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
                  <EditIconButton id="BD1040" type="I" />
                </Box>
              </Box>

              <Typography variant="body2" color={'#C0C5D0'} fontSize={16} textAlign={'center'}>
                {content.BD1041}
                <EditIconButton id="BD1041" />
              </Typography>
              <br></br>

              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }} lineHeight={1.8} mb={3}>
                {content.BD1042}
                <EditIconButton id="BD1042" />
              </Typography>

              <Typography variant="body2" color={'#C0C5D0'} fontSize={18} textAlign={'center'}>
                {content.BD1043}
                <EditIconButton id="BD1043" />
              </Typography>

              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }} lineHeight={1.8} mb={3}>
                {content.BD1044}
                <EditIconButton id="BD1044" />
              </Typography>
            </Box>

          </Grid>




          {/* Right Column  onClick={() => navigate("/home/Blogpost")}*/}
          <Grid item xs={12} md={4} sx={{ cursor: 'pointer' }} >
            <Typography sx={{ ...typography.h2, color: '#0E1626' }} mb={2}>
              {content.BD1045}
              <EditIconButton id="BD1045" />
            </Typography>

            {/* Sidebar Card 1 */}
            <Box mb={4}>
              <Box sx={{ position: 'relative', width: '100%' }}>
                <Box
                  component="img"
                  src={`https://cmsreflux.bexatm.com${content.BD1046}`}
                  alt="Electro Lifting Magnet Innovations"
                  sx={{ width: '100%', height: 151, objectFit: 'cover', mb: 1.5 }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                  }}
                >
                  <EditIconButton id="BD1046" type="I" />
                </Box>
              </Box>

              <Typography variant="body2" color="#2E8E7E" mb={0.5}>
                {content.BD1047}
                <EditIconButton id="BD1047" />
              </Typography>
              <Typography sx={{ ...typography.h3, color: '#0E1626' }} mb={0.5}>
                {content.BD1048}
                <EditIconButton id="BD1048" />
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }} fontSize={20}>
                {content.BD1049}
                <EditIconButton id="BD1049" />
              </Typography>
            </Box>


            {/* Sidebar Card 2 */}
            <Box mb={4} marginTop={'20%'}>
              <Box sx={{ position: 'relative', width: '100%' }}>
                <Box
                  component="img"
                  src={`https://cmsreflux.bexatm.com${content.BD1050}`}
                  alt="Electro Lifting Magnet Innovations"
                  sx={{ width: '100%', height: 151, objectFit: 'cover', mb: 1.5 }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                  }}
                >
                  <EditIconButton id="BD1050" type="I" />
                </Box>
              </Box>

              <Typography variant="body2" color="#2E8E7E" mb={0.5}>
                {content.BD1051}
                <EditIconButton id="BD1051" />
              </Typography>
              <Typography sx={{ ...typography.h3, color: '#0E1626' }} mb={0.5}>
                {content.BD1052}
                <EditIconButton id="BD1052" />
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }}>
                {content.BD1053}
                <EditIconButton id="BD1053" />
              </Typography>
            </Box>

            {/* Sidebar Card 3 */}
            <Box mb={4} marginTop={'20%'}>
              <Box sx={{ position: 'relative', width: '100%' }}>
                <Box
                  component="img"
                  src={`https://cmsreflux.bexatm.com${content.BD1054}`}
                  alt="Electro Lifting Magnet Innovations"
                  sx={{ width: '100%', height: 151, objectFit: 'cover', mb: 1.5 }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                  }}
                >
                  <EditIconButton id="BD1054" type="I" />
                </Box>
              </Box>
              <Typography variant="body2" color="#2E8E7E" mb={0.5}>
                {content.BD1055}
                <EditIconButton id="BD1055" />
              </Typography>
              <Typography sx={{ ...typography.h3, color: '#0E1626' }} mb={0.5}>
                {content.BD1056}
                <EditIconButton id="BD1056" />
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }}>
                {content.BD1057}
                <EditIconButton id="BD1057" />
              </Typography>
            </Box>

            {/* Sidebar Card 4 */}
            <Box marginTop={'20%'}>
              <Box sx={{ position: 'relative', width: '100%' }}>
                <Box
                  component="img"
                  src={`https://cmsreflux.bexatm.com${content.BD1058}`}
                  alt="Electro Lifting Magnet Innovations"
                  sx={{ width: '100%', height: 151, objectFit: 'cover', mb: 1.5 }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                  }}
                >
                  <EditIconButton id="BD1058" type="I" />
                </Box>
              </Box>
              <Typography variant="body2" color="#2E8E7E" mb={0.5}>
                {content.BD1059}
                <EditIconButton id="BD1059" />
              </Typography>
              <Typography sx={{ ...typography.h3, color: '#0E1626' }} mb={0.5}>
                {content.BD1060}
                <EditIconButton id="BD1060" />
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }}>
                {content.BD1061}
                <EditIconButton id="BD1061" />
              </Typography>
            </Box>

            {/* Sidebar Card 5 */}
            <Box marginTop={'20%'}>
              <Box sx={{ position: 'relative', width: '100%' }}>
                <Box
                  component="img"
                  src={`https://cmsreflux.bexatm.com${content.BD1062}`}
                  alt="Electro Lifting Magnet Innovations"
                  sx={{ width: '100%', height: 151, objectFit: 'cover', mb: 1.5 }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                  }}
                >
                  <EditIconButton id="BD1062" type="I" />
                </Box>
              </Box>
              <Typography variant="body2" color="#2E8E7E" mb={0.5}>
                {content.BD1063}
                <EditIconButton id="BD1063" />
              </Typography>
              <Typography sx={{ ...typography.h3, color: '#0E1626' }} mb={0.5}>
                {content.BD1064}
                <EditIconButton id="BD1064" />
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }}>
                {content.BD1065}
                <EditIconButton id="BD1065" />
              </Typography>
            </Box>

            {/* Sidebar Card 6 */}
            <Box marginTop={'20%'}>
              <Box sx={{ position: 'relative', width: '100%' }}>
                <Box
                  component="img"
                  src={`https://cmsreflux.bexatm.com${content.BD1066}`}
                  alt="Electro Lifting Magnet Innovations"
                  sx={{ width: '100%', height: 151, objectFit: 'cover', mb: 1.5 }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                  }}
                >
                  <EditIconButton id="BD1066" type="I" />
                </Box>
              </Box>
              <Typography variant="body2" color="#2E8E7E" mb={0.5}>
                {content.BD1067}
                <EditIconButton id="BD1067" />
              </Typography>
              <Typography sx={{ ...typography.h3, color: '#0E1626' }}>
                {content.BD1068}
                <EditIconButton id="BD1068" />
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }}>
                {content.BD1069}
                <EditIconButton id="BD1069" />
              </Typography>
            </Box>


            {/* Sidebar Card 7 */}
            <Box marginTop={'20%'}>
             <Box sx={{ position: 'relative', width: '100%' }}>
                <Box
                  component="img"
                  src={`https://cmsreflux.bexatm.com${content.BD1070}`}
                  alt="Electro Lifting Magnet Innovations"
                  sx={{ width: '100%', height: 151, objectFit: 'cover', mb: 1.5 }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                  }}
                >
                  <EditIconButton id="BD1070" type="I" />
                </Box>
              </Box>
              <Typography variant="body2" color="#2E8E7E" mb={0.5}>
                {content.BD1071}
                <EditIconButton id="BD1071" />
              </Typography>
              <Typography sx={{ ...typography.h3, color: '#0E1626' }} mb={0.5}>
                {content.BD1072}
                <EditIconButton id="BD1072" />
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }}>
                {content.BD1073}
                <EditIconButton id="BD1073" />
              </Typography>
            </Box>

            {/* Sidebar Card 8 */}
            <Box marginTop={'20%'}>
             <Box sx={{ position: 'relative', width: '100%' }}>
                <Box
                  component="img"
                  src={`https://cmsreflux.bexatm.com${content.BD1074}`}
                  alt="Electro Lifting Magnet Innovations"
                  sx={{ width: '100%', height: 151, objectFit: 'cover', mb: 1.5 }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                  }}
                >
                  <EditIconButton id="BD1074" type="I" />
                </Box>
              </Box>
              <Typography variant="body2" color="#2E8E7E" mb={0.5}>
                {content.BD1075}
                <EditIconButton id="BD1075" />
              </Typography>
              <Typography sx={{ ...typography.h3, color: '#0E1626' }} mb={0.5}>
                {content.BD1076}
                <EditIconButton id="BD1076" />
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }}>
                {content.BD1077}
                <EditIconButton id="BD1077" />
              </Typography>
            </Box>

            {/* Sidebar Card 9 */}
            <Box marginTop={'20%'}>
             <Box sx={{ position: 'relative', width: '100%' }}>
                <Box
                  component="img"
                  src={`https://cmsreflux.bexatm.com${content.BD1078}`}
                  alt="Electro Lifting Magnet Innovations"
                  sx={{ width: '100%', height: 151, objectFit: 'cover', mb: 1.5 }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                  }}
                >
                  <EditIconButton id="BD1078" type="I" />
                </Box>
              </Box>
              <Typography variant="body2" color="#2E8E7E" mb={0.5}>
                {content.BD1079}
                <EditIconButton id="BD1079" />
              </Typography>
              <Typography sx={{ ...typography.h3, color: '#0E1626' }} mb={0.5}>
                {content.BD1080}
                <EditIconButton id="BD1080" />
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }}>
                {content.BD1081}
                <EditIconButton id="BD1081" />
              </Typography>
            </Box>

            {/* Sidebar Card 10 */}
            <Box marginTop={'20%'}>
             <Box sx={{ position: 'relative', width: '100%' }}>
                <Box
                  component="img"
                  src={`https://cmsreflux.bexatm.com${content.BD1082}`}
                  alt="Electro Lifting Magnet Innovations"
                  sx={{ width: '100%', height: 151, objectFit: 'cover', mb: 1.5 }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                  }}
                >
                  <EditIconButton id="BD1082" type="I" />
                </Box>
              </Box>
              <Typography variant="body2" color="#2E8E7E" mb={0.5}>
                {content.BD1083}
                <EditIconButton id="BD1083" />
              </Typography>
              <Typography sx={{ ...typography.h3, color: '#0E1626' }} mb={0.5}>
                {content.BD1084}
                <EditIconButton id="BD1084" />
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }}>
                {content.BD1085}
                <EditIconButton id="BD1085" />
              </Typography>
            </Box>

            {/* Sidebar Card 11 */}
            <Box marginTop={'20%'}>
             <Box sx={{ position: 'relative', width: '100%' }}>
                <Box
                  component="img"
                  src={`https://cmsreflux.bexatm.com${content.BD1086}`}
                  alt="Electro Lifting Magnet Innovations"
                  sx={{ width: '100%', height: 151, objectFit: 'cover', mb: 1.5 }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                  }}
                >
                  <EditIconButton id="BD1086" type="I" />
                </Box>
              </Box>
              <Typography variant="body2" color="#2E8E7E" mb={0.5}>
                {content.BD1087}
                <EditIconButton id="BD1087" />
              </Typography>
              <Typography sx={{ ...typography.h3, color: '#0E1626' }} mb={0.5}>
                {content.BD1088}
                <EditIconButton id="BD1088" />
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }}>
                {content.BD1089}
                <EditIconButton id="BD1089" />
              </Typography>
            </Box>

            {/* Sidebar Card 12 */}
            <Box marginTop={'20%'}>
             <Box sx={{ position: 'relative', width: '100%' }}>
                <Box
                  component="img"
                  src={`https://cmsreflux.bexatm.com${content.BD1090}`}
                  alt="Electro Lifting Magnet Innovations"
                  sx={{ width: '100%', height: 151, objectFit: 'cover', mb: 1.5 }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                  }}
                >
                  <EditIconButton id="BD1090" type="I" />
                </Box>
              </Box>
              <Typography variant="body2" color="#2E8E7E" mb={0.5}>
                {content.BD1091}
                <EditIconButton id="BD1091" />
              </Typography>
              <Typography sx={{ ...typography.h3, color: '#0E1626' }} mb={0.5}>
                {content.BD1092}
                <EditIconButton id="BD1092" />
              </Typography>
              <Typography sx={{ ...typography.h5, color: '#1C2D4B' }}>
                {content.BD1093}
                <EditIconButton id="BD1093" />
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
