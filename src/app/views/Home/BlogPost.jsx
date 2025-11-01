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
import Footer from 'app/components/Card/Footer';



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
        <Box sx={{ bgcolor: '#fff',  }}>
            <Box sx={{ maxWidth: '1137px', mx: 'auto', px: { xs: 2, md: 0 } }}>
                <Typography
                    sx={{
                        ...typography.displayL,
                        color: '#1C2D4B',
                        fontSize: { xs: '28px', md: typography.displayL.fontSize },
                    }}
                    mb={4}
                >
                    Recent blog posts
                </Typography>

                {/* Main Blog Post */}
                <Box>
                    <Box
                        component="img"
                        src={Blogpost}
                        alt="Main blog post"
                        sx={{
                            width: '100%',
                            maxWidth: '1137px',
                            height: { xs: '200px', md: '228px' },
                            objectFit: 'cover',
                        }}
                    />

                    <Box mt={2}>
                        <Typography variant="body2" color="#2E8E7E">
                            Sunday, 1 Jan 2023
                        </Typography>

                        <Typography
                            sx={{
                                ...typography.displayM,
                                color: '#1C2D4B',
                                fontSize: { xs: '22px', md: typography.displayM.fontSize },
                            }}
                            mt={1}
                        >
                            UX review presentations
                        </Typography>

                        <Typography
                            sx={{
                                ...typography.h5,
                                color: '#49576F',
                                fontSize: { xs: '16px', md: typography.h5.fontSize },
                            }}
                            mt={1}
                        >
                            How do you create compelling presentations that wow your colleagues and impress your managers?
                        </Typography>

                        <Stack
                            direction="row"
                            spacing={1}
                            mt={2}
                            flexWrap="wrap"
                        >
                            <Chip
                                label="Design"
                                size="small"
                                sx={{ backgroundColor: '#e0f2fe', fontWeight: 'bold' }}
                            />
                            <Chip
                                label="Research"
                                size="small"
                                sx={{ backgroundColor: '#ede9fe', fontWeight: 'bold' }}
                            />
                            <Chip
                                label="Presentation"
                                size="small"
                                sx={{ backgroundColor: '#fee2e2', fontWeight: 'bold' }}
                            />
                        </Stack>
                    </Box>
                </Box>

                {/* Bottom two blog cards */}
                <Grid container spacing={4} mt={4}>
                    {[
                        {
                            img: Blogpost2,
                            title: "Migrating to Linear 101",
                            desc: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
                            date: "Sunday, 1 Jan 2023"
                        },
                        {
                            img: Blogpost3,
                            title: "Building your API Stack",
                            desc: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing...",
                            date: "Sunday, 1 Jan 2023"
                        }
                    ].map((item, idx) => (
                        <Grid item xs={12} key={idx}>
                            <Box
                                sx={{
                                    display: { xs: 'block', md: 'flex' },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={item.img}
                                    alt={item.title}
                                    sx={{
                                        width: { xs: '100%', md: 320 },
                                        height: { xs: '180px', md: 200 },
                                        objectFit: 'cover',
                                        borderRadius: 1,
                                    }}
                                />
                                <Box
                                    sx={{
                                        ml: { xs: 0, md: 4 },
                                        mt: { xs: 2, md: 0 },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            ...typography.h6,
                                            color: "#2E8E7E",
                                            fontSize: { xs: '14px', md: typography.h6.fontSize }
                                        }}
                                    >
                                        {item.date}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            ...typography.h3,
                                            color: '#1C2D4B',
                                            fontSize: { xs: '20px', md: typography.h3.fontSize }
                                        }}
                                        mt={0.5}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            ...typography.h5,
                                            color: "#49576F",
                                            fontSize: { xs: '15px', md: typography.h5.fontSize }
                                        }}
                                        mt={0.5}
                                    >
                                        {item.desc}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                {/* Sections loop */}
                {["Exploring the Future of Lifting Magnet Repairs",
                    "Exploring the Benefits of Renting Lifting Magnets",
                    "Exploring the Advantages of Refurbished Electro Lifting Magnets"
                ].map((sectionTitle, sectionIdx) => (
                    <React.Fragment key={sectionIdx}>
                        <Typography
                            sx={{
                                ...typography.displayM,
                                color: "#1C2D4B",
                                fontSize: { xs: '22px', md: typography.displayM.fontSize },
                                mt: 5,
                                mb: 4,
                            }}
                        >
                            {sectionTitle}
                        </Typography>

                        <Grid container spacing={4}>
                            {blogPosts.map((post, index) => (
                                <Grid item xs={12} md={6} key={index}>
                                    <Box>
                                        <Box
                                            component="img"
                                            src={post.image}
                                            alt={post.title}
                                            sx={{
                                                width: '100%',
                                                maxWidth: { xs: '100%', md: '560px' },
                                                height: { xs: '180px', md: '240px' },
                                                objectFit: 'cover',
                                                mb: 2,
                                                borderRadius: 1,
                                            }}
                                        />
                                        <Typography variant="body2" color="#2E8E7E">
                                            {post.date}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                ...typography.displayM,
                                                color: "#1C2D4B",
                                                cursor: 'pointer',
                                                fontSize: { xs: '20px', md: typography.displayM.fontSize }
                                            }}
                                            mt={0.5}
                                            onClick={() => navigate("/home/BlogDetails")}
                                        >
                                            {post.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                ...typography.h5,
                                                color: "#49576F",
                                                fontSize: { xs: '15px', md: typography.h5.fontSize }
                                            }}
                                            mt={1}
                                        >
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
                    </React.Fragment>
                ))}

            </Box>

            <Box>
                <Footer />
            </Box>
        </Box>
    
    );
};

export default BlogPost;
