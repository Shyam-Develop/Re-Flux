import React from 'react';
import {
    Box,
    Typography,
    Chip,
    Stack,
    Grid,
    Button,
    Link,
    IconButton
} from '@mui/material';
import { Pagination, PaginationItem } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useNavigate } from "react-router-dom";
import Brand1 from '../../../assets/Brand1.png';
import Blogpost from '../../../assets/Blogpost1.jpg';
import Blogpost2 from '../../../assets/Blogpost2.jpg';
import Blogpost3 from '../../../assets/Blogpost3.jpg';
import Blogpost4 from '../../../assets/Blogpost4.jpg';
import Blogpost5 from '../../../assets/Blogpost5.jpg';
import Blogpost6 from '../../../assets/Blogpost6.jpg';
import Blogpost7 from '../../../assets/Blogpost7.jpg';
import { typography } from 'app/utils/constant';



const blogPosts = [
    {
        image: Blogpost4,
        date: 'Tuesday, 3 Jan 2023',
        title: 'Effective Techniques for Lifting Magnet Maintenance',
        description:
            'Discover the best practices for maintaining and repairing lifting magnets to ensure safety and efficiency.',
        tags: ['Magnet Repair Techniques', 'Maintenance Strategies', 'Safety Protocols'],
        tagColors: ['#ede9fe', '#cffafe', '#fee2e2'],
    },
    {
        image: Blogpost5,
        date: 'Tuesday, 3 Jan 2023',
        title: 'Innovations in Lifting Magnet Technology',
        description:
            'Learn how advancements in technology are enhancing the performance and reliability of lifting magnets.',
        tags: ['Magnetics', 'Engineering', 'Technology'],
        tagColors: ['#dbeafe', '#e0f2fe', '#fef9c3'],
    },
    {
        image: Blogpost6,
        date: 'Tuesday, 3 Jan 2023',
        title: 'Troubleshooting Common Magnet Issues',
        description:
            'Understand the common problems faced with lifting magnets and how to effectively troubleshoot them.',
        tags: ['Repair Techniques', 'Safety Measures', 'Best Practices'],
        tagColors: ['#dcfce7', '#fee2e2', '#fef3c7'],
    },
    {
        image: Blogpost7,
        date: 'Tuesday, 3 Jan 2023',
        title: 'Webinar: Mastering Lifting Magnet Repairs',
        description:
            'Join our expert-led session to learn about the latest techniques in lifting magnet repairs.',
        tags: ['Webinars', 'Engineering', 'Education'],
        tagColors: ['#f3e8ff', '#e0f2fe', '#fee2e2'],
    },
];

const BlogPost = () => {

      const navigate = useNavigate();

    return (
        <Box sx={{ bgcolor: '#fff', py: 6 }}>
            {/* Page Title */}


            {/* CONTENT CONTAINER: center this box */}
            <Box sx={{ maxWidth: '1137px', mx: 'auto' }}>
                <Typography sx={{ ...typography.displayL, color:'#1C2D4B' }}  mb={4}>
                    Recent blog posts
                </Typography>
                {/* Main Blog Post */}
                <Box>
                    <Box
                        component="img"
                        src={Blogpost}
                        alt="Main blog post"
                        sx={{
                            width: '1137px',
                            height: '228px',
                            objectFit: 'cover',
                        }}
                    />

                    {/* Below the image */}
                    <Box mt={2}>
                        <Typography variant="body2" color="#2E8E7E">
                            Sunday, 1 Jan 2023
                        </Typography>

                        <Typography sx={{...typography.displayM, color:'#1C2D4B'}} mt={1}>
                            UX review presentations
                        </Typography>

                        <Typography sx={{...typography.h5, color:'#49576F'}} mt={1}>
                            How do you create compelling presentations that wow your colleagues and impress your managers?
                        </Typography>

                        {/* Tags */}
                        <Stack direction="row" spacing={1} mt={2}>
                            <Chip label="Design" size="small" sx={{ backgroundColor: '#e0f2fe', fontWeight: 'bold' }} />
                            <Chip label="Research" size="small" sx={{ backgroundColor: '#ede9fe', fontWeight: 'bold' }} />
                            <Chip label="Presentation" size="small" sx={{ backgroundColor: '#fee2e2', fontWeight: 'bold' }} />
                        </Stack>
                    </Box>
                </Box>

                {/* Bottom two blog cards */}
                <Grid container spacing={4} mt={4}>
                    {/* Blog Card 1 */}
                    <Grid item xs={12}>
                        <Box display="flex">
                            <Box
                                component="img"
                                src={Blogpost2}
                                alt="Linear"
                                sx={{ width: 320, height: 200, objectFit: 'cover' }}
                            />
                            <Box ml={4}>
                                <Typography sx={{...typography.h6, color:"#2E8E7E" }}>
                                    Sunday, 1 Jan 2023
                                </Typography>
                                <Typography sx={{...typography.h3, color:'#1C2D4B'}}>
                                    Migrating to Linear 101
                                </Typography>
                                <Typography sx={{...typography.h5, color:"#49576F"}}  mt={0.5}>
                                    Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Blog Card 2 */}
                    <Grid item xs={12}>
                        <Box display="flex">
                            <Box
                                component="img"
                                src={Blogpost3}
                                alt="API Stack"
                                sx={{ width: 320, height: 200, objectFit: 'cover' }}
                            />
                            <Box ml={4}>
                                <Typography sx={{...typography.h6, color:"#2E8E7E" }}>
                                    Sunday, 1 Jan 2023
                                </Typography>
                                <Typography sx={{...typography.h3, color:'#1C2D4B'}} mt={0.5}>
                                    Building your API Stack
                                </Typography>
                                <Typography sx={{...typography.h5, color:"#49576F"}} mt={0.5}>
                                    The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing...
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>


                {/* 1st Section */}
                <Typography sx={{...typography.displayM, color:"#1C2D4B"}} marginTop={5}  mb={4}>
                    Exploring the Future of Lifting Magnet Repairs
                </Typography>

                {/* Blog Grid */}
                <Grid container spacing={4}>
                    {blogPosts.map((post, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Box>
                                <Box
                                    component="img"
                                    src={post.image}
                                    alt={post.title}
                                    sx={{
                                        width: '560px',
                                        height: '240px',
                                        //borderRadius: 2,
                                        objectFit: 'cover',
                                        mb: 2,
                                    }}
                                />
                                <Typography variant="body2" color="#2E8E7E">
                                    {post.date}
                                </Typography>
                                <Typography  sx={{...typography.displayM, color:"#1C2D4B" , cursor:'pointer'}} mt={0.5}
                                 onClick={() => navigate("/home/BlogDetails")}>
                                    {post.title}
                                </Typography>
                                <Typography sx={{...typography.h5, color:"#49576F" }} mt={1}>
                                    {post.description}
                                </Typography>
                                <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                                    {post.tags.map((tag, idx) => (
                                        <Chip
                                            key={idx}
                                            label={tag}
                                            size="small"
                                            sx={{
                                                backgroundColor: post.tagColors[idx],
                                                fontWeight: 'bold',
                                            }}
                                        />
                                    ))}
                                </Stack>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                {/* Pagination */}
                <Box display="flex" justifyContent="center" mt={6}>
                    <Pagination
                        count={10}
                        shape="rounded"
                        color="primary"
                        page={1}
                        siblingCount={1}
                        boundaryCount={1}
                        renderItem={(item) => (
                            <PaginationItem
                                {...item}
                                sx={{
                                    fontWeight: item.selected ? 'bold' : 'normal',
                                }}
                            />
                        )}
                    />
                </Box>


                {/* 2nd Section */}
                <Typography sx={{...typography.displayM, color:"#1C2D4B"}} marginTop={5} mb={4}>
                    Exploring the Benefits of Renting Lifting Magnets
                </Typography>

                {/* Blog Grid */}
                <Grid container spacing={4}>
                    {blogPosts.map((post, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Box>
                                <Box
                                    component="img"
                                    src={post.image}
                                    alt={post.title}
                                    sx={{
                                        width: '560px',
                                        height: '240px',
                                        //borderRadius: 2,
                                        objectFit: 'cover',
                                        mb: 2,
                                    }}
                                />
                                <Typography variant="body2" color="#2E8E7E">
                                    {post.date}
                                </Typography>
                                <Typography  sx={{...typography.displayM, color:"#1C2D4B" , cursor:'pointer'}} mt={0.5}
                                 onClick={() => navigate("/home/BlogDetails")}>
                                    {post.title}
                                </Typography>
                                <Typography sx={{...typography.h5, color:"#49576F" }} mt={1}>
                                    {post.description}
                                </Typography>
                                <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                                    {post.tags.map((tag, idx) => (
                                        <Chip
                                            key={idx}
                                            label={tag}
                                            size="small"
                                            sx={{
                                                backgroundColor: post.tagColors[idx],
                                                fontWeight: 'bold',
                                            }}
                                        />
                                    ))}
                                </Stack>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                 {/* Pagination */}
                 <Box display="flex" justifyContent="center" mt={6}>
                    <Pagination
                        count={10}
                        shape="rounded"
                        color="primary"
                        page={1}
                        siblingCount={1}
                        boundaryCount={1}
                        renderItem={(item) => (
                            <PaginationItem
                                {...item}
                                sx={{
                                    fontWeight: item.selected ? 'bold' : 'normal',
                                }}
                            />
                        )}
                    />
                </Box>


                {/* 3rd Section */}
                <Typography sx={{...typography.displayM, color:"#1C2D4B"}} marginTop={5} mb={4}>
                    Exploring the Advantages of Refurbished Electro Lifting Magnets
                </Typography>

                {/* Blog Grid */}
               <Grid container spacing={4}>
                    {blogPosts.map((post, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Box>
                                <Box
                                    component="img"
                                    src={post.image}
                                    alt={post.title}
                                    sx={{
                                        width: '560px',
                                        height: '240px',
                                        //borderRadius: 2,
                                        objectFit: 'cover',
                                        mb: 2,
                                    }}
                                />
                                <Typography variant="body2" color="#2E8E7E">
                                    {post.date}
                                </Typography>
                                <Typography  sx={{...typography.displayM, color:"#1C2D4B" , cursor:'pointer'}} mt={0.5}
                                 onClick={() => navigate("/home/BlogDetails")}>
                                    {post.title}
                                </Typography>
                                <Typography sx={{...typography.h5, color:"#49576F" }} mt={1}>
                                    {post.description}
                                </Typography>
                                <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                                    {post.tags.map((tag, idx) => (
                                        <Chip
                                            key={idx}
                                            label={tag}
                                            size="small"
                                            sx={{
                                                backgroundColor: post.tagColors[idx],
                                                fontWeight: 'bold',
                                            }}
                                        />
                                    ))}
                                </Stack>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                {/* Pagination */}
                 <Box display="flex" justifyContent="center" mt={6}>
                    <Pagination
                        count={10}
                        shape="rounded"
                        color="primary"
                        page={1}
                        siblingCount={1}
                        boundaryCount={1}
                        renderItem={(item) => (
                            <PaginationItem
                                {...item}
                                sx={{
                                    fontWeight: item.selected ? 'bold' : 'normal',
                                }}
                            />
                        )}
                    />
                </Box>
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

export default BlogPost;
