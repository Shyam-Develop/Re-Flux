import React, { useState, useEffect } from 'react';
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
import EditIcon from "@mui/icons-material/Edit";




// const blogPosts = [
//     {
//         image: Blogpost4,
//         date: 'Tuesday, 3 Jan 2023',
//         title: 'Effective Techniques for Lifting Magnet Maintenance',
//         description:
//             'Discover the best practices for maintaining and repairing lifting magnets to ensure safety and efficiency.',
//         tags: ['Magnet Repair Techniques', 'Maintenance Strategies', 'Safety Protocols'],
//         tagColors: ['#ede9fe', '#cffafe', '#fee2e2'],
//     },
//     {
//         image: Blogpost5,
//         date: 'Tuesday, 3 Jan 2023',
//         title: 'Innovations in Lifting Magnet Technology',
//         description:
//             'Learn how advancements in technology are enhancing the performance and reliability of lifting magnets.',
//         tags: ['Magnetics', 'Engineering', 'Technology'],
//         tagColors: ['#dbeafe', '#e0f2fe', '#fef9c3'],
//     },
//     {
//         image: Blogpost6,
//         date: 'Tuesday, 3 Jan 2023',
//         title: 'Troubleshooting Common Magnet Issues',
//         description:
//             'Understand the common problems faced with lifting magnets and how to effectively troubleshoot them.',
//         tags: ['Repair Techniques', 'Safety Measures', 'Best Practices'],
//         tagColors: ['#dcfce7', '#fee2e2', '#fef3c7'],
//     },
//     {
//         image: Blogpost7,
//         date: 'Tuesday, 3 Jan 2023',
//         title: 'Webinar: Mastering Lifting Magnet Repairs',
//         description:
//             'Join our expert-led session to learn about the latest techniques in lifting magnet repairs.',
//         tags: ['Webinars', 'Engineering', 'Education'],
//         tagColors: ['#f3e8ff', '#e0f2fe', '#fee2e2'],
//     },
// ];

const BlogPost = () => {

    const navigate = useNavigate();

    const [content, setContent] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const apiUrl =
            "https://skillglow.bexatm.com/ATM/ContentManageSysV1.php?contentId=C010";
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
            `/CmsEditor?contentId=C010&contentTextID=${contentTextID}&contentType=${type}`
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
        <Box sx={{ bgcolor: '#fff', }}>
            <Box sx={{ maxWidth: '1137px', mx: 'auto', px: { xs: 2, md: 0 } }}>
                <Typography
                    sx={{
                        ...typography.displayL,
                        fontWeight: 700,
                        color: '#1C2D4B',
                        fontSize: { xs: '28px', md: typography.displayL.fontSize },
                        paddingTop: '30px'
                    }}
                    mb={4}
                >
                    {content.BP1001}
                    <EditIconButton id="BP1001" />
                </Typography>

                {/* Main Blog Post */}
                <Box>
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
                            src={`https://skillglow.bexatm.com${content.BP1002}`}
                            alt="Main blog post"
                            sx={{
                                width: '100%',
                                height: { xs: '200px', md: '228px' },
                                objectFit: 'cover',
                                borderRadius: '1px',
                            }}
                        />

                        {/* Edit icon for image */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 8,
                                right: 8,
                            }}
                        >
                            <EditIconButton id="BP1002" type="I" />
                        </Box>
                    </Box>

                    {/* Blog Content */}
                    <Box mt={2}>
                        {/* Date */}
                        <Typography sx={{
                            color: "#2E8E7E",
                            fontWeight: 600
                        }} >
                            {content.BP1003}
                            <EditIconButton id="BP1003" />
                        </Typography>

                        {/* Title */}
                        <Typography
                            sx={{
                                ...typography.displayM,
                                fontWeight: 600,
                                color: '#1C2D4B',
                                fontSize: { xs: '22px', md: typography.displayM.fontSize },
                            }}
                            mt={1}
                        >
                            {content.BP1004}
                            <EditIconButton id="BP1004" />
                        </Typography>

                        {/* Description */}
                        <Typography
                            sx={{
                                ...typography.h5,
                                fontWeight: 500,
                                color: '#49576F',
                                fontSize: { xs: '16px', md: typography.h5.fontSize },
                            }}
                            mt={1}
                        >
                            {content.BP1005}
                            <EditIconButton id="BP1005" />
                        </Typography>

                        {/* Tags */}
                        <Stack direction="row" spacing={1.5} mt={2} flexWrap="wrap" alignItems="center">
                            <Box display="flex" alignItems="center" >
                                <Chip
                                    label={content.BP1006 || "Design"}
                                    fontWeightL='400'
                                    size='small'
                                    sx={{ backgroundColor: '#e0f2fe', fontWeight: 'bold' }}
                                />
                                <EditIconButton id="BP1006" />
                            </Box>

                            <Box display="flex" alignItems="center">
                                <Chip
                                    label={content.BP1007 || "Research"}
                                    size='small'
                                    sx={{ backgroundColor: '#ede9fe', fontWeight: 'bold' }}
                                />
                                <EditIconButton id="BP1007" />
                            </Box>

                            <Box display="flex" alignItems="center">
                                <Chip
                                    label={content.BP1008 || "Presentation"}
                                    size='small'
                                    sx={{ backgroundColor: '#fee2e2', fontWeight: 'bold' }}
                                />
                                <EditIconButton id="BP1008" />
                            </Box>
                        </Stack>

                    </Box>
                </Box>


                {/* Bottom two blog cards */}
                <Grid container spacing={4} mt={4}>
                    {[
                        {
                            img: { id: "BP1009", value: content.BP1009 || "/ATM/images/Blogpost2.jpg" },
                            date: { id: "BP1010", value: content.BP1010 },
                            title: { id: "BP1011", value: content.BP1011 || "Migrating to Linear 101" },
                            desc: { id: "BP1012", value: content.BP1012 || "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get..." },
                        },
                        {
                            img: { id: "BP1013", value: content.BP1013 || "/ATM/images/Blogpost3.jpg" },
                            date: { id: "BP1014", value: content.BP1014 || "Sunday, 1 Jan 2023" },
                            title: { id: "BP1015", value: content.BP1015 || "Building your API Stack" },
                            desc: { id: "BP1016", value: content.BP1016 || "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing..." },
                        },
                    ].map((item, idx) => (
                        <Grid item xs={12} key={idx}>
                            <Box
                                sx={{
                                    display: { xs: "block", md: "flex" },
                                    alignItems: "flex-start",
                                    gap: 3,
                                }}
                            >
                                {/* Image with edit icon overlay */}
                                <Box sx={{ position: "relative", width: { xs: "100%", md: 296 }, flexShrink: 0 }}>
                                    <Box
                                        component="img"
                                        src={`https://skillglow.bexatm.com${item.img.value}`}
                                        alt={item.title.value}
                                        sx={{
                                            width: "100%",
                                            height: { xs: 180, md: 200 },
                                            objectFit: "cover",
                                            borderRadius: 1,
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 8,
                                            right: 8,
                                        }}
                                    >
                                        <EditIconButton id={item.img.id} type="I" />
                                    </Box>
                                </Box>

                                {/* Text content */}
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        sx={{
                                            ...typography.h6,
                                            fontWeight: 600,
                                            color: "#2E8E7E",
                                            fontSize: { xs: "14px", md: "15px" },
                                            mb: 0.5,
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 0.5,
                                        }}
                                    >
                                        {item.date.value}
                                        <EditIconButton id={item.date.id} />
                                    </Typography>

                                    <Typography
                                        sx={{
                                            ...typography.h3,
                                            fontWeight: 600,
                                            color: "#1C2D4B",
                                            fontWeight: 600,
                                            fontSize: { xs: "20px", md: "28px" },
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 0.5,
                                        }}
                                    >
                                        {item.title.value}
                                        <EditIconButton id={item.title.id} />
                                    </Typography>

                                    <Typography
                                        sx={{
                                            ...typography.h5,
                                            fontWeight: 500,
                                            color: "#49576F",
                                            fontSize: { xs: "15px", md: "20px" },
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 0.5,
                                            mt: 0.5,
                                        }}
                                    >
                                        {item.desc.value}
                                        <EditIconButton id={item.desc.id} />
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>


                {/* Sections loop */}
                {/* Blog Sections Loop */}
                {[
                    {
                        // 🔹 Section 1
                        title: { id: "BP1017", value: content.BP1017 },
                        posts: [
                            {
                                img: { id: "BP1018", value: content.BP1018 },
                                date: { id: "BP1019", value: content.BP1019 },
                                title: { id: "BP1020", value: content.BP1020 },
                                desc: { id: "BP1021", value: content.BP1021 },
                                tags: [
                                    { id: "BP1022", value: content.BP1022 },
                                    { id: "BP1023", value: content.BP1023 },
                                    { id: "BP1024", value: content.BP1024 },
                                ],
                            },
                            {
                                img: { id: "BP1025", value: content.BP1025 },
                                date: { id: "BP1026", value: content.BP1026 },
                                title: { id: "BP1027", value: content.BP1027 },
                                desc: { id: "BP1028", value: content.BP1028 },
                                tags: [
                                    { id: "BP1029", value: content.BP1029 },
                                    { id: "BP1030", value: content.BP1030 },
                                    { id: "BP1031", value: content.BP1031 },
                                ],
                            },
                            {
                                img: { id: "BP1032", value: content.BP1032 },
                                date: { id: "BP1033", value: content.BP1033 },
                                title: { id: "BP1034", value: content.BP1034 },
                                desc: { id: "BP1035", value: content.BP1035 },
                                tags: [
                                    { id: "BP1036", value: content.BP1036 },
                                    { id: "BP1037", value: content.BP1037 },
                                    { id: "BP1038", value: content.BP1038 },
                                ],
                            },
                            {
                                img: { id: "BP1039", value: content.BP1039 },
                                date: { id: "BP1040", value: content.BP1040 },
                                title: { id: "BP1041", value: content.BP1041 },
                                desc: { id: "BP1042", value: content.BP1042 },
                                tags: [
                                    { id: "BP1043", value: content.BP1043 },
                                    { id: "BP1044", value: content.BP1044 },
                                    { id: "BP1045", value: content.BP1045 },
                                ],
                            },
                        ],
                    },

                    {
                        // 🔹 Section 2
                        title: { id: "BP1046", value: content.BP1046 },
                        posts: [
                            {
                                img: { id: "BP1047", value: content.BP1047 },
                                date: { id: "BP1048", value: content.BP1048 },
                                title: { id: "BP1049", value: content.BP1049 },
                                desc: { id: "BP1050", value: content.BP1050 },
                                tags: [
                                    { id: "BP1051", value: content.BP1051 },
                                    { id: "BP1052", value: content.BP1052 },
                                    { id: "BP1053", value: content.BP1053 },
                                ],
                            },
                            {
                                img: { id: "BP1054", value: content.BP1054 },
                                date: { id: "BP1055", value: content.BP1055 },
                                title: { id: "BP1056", value: content.BP1056 },
                                desc: { id: "BP1057", value: content.BP1057 },
                                tags: [
                                    { id: "BP1058", value: content.BP1058 },
                                    { id: "BP1059", value: content.BP1059 },
                                    { id: "BP1060", value: content.BP1060 },
                                ],
                            },
                            {
                                img: { id: "BP1061", value: content.BP1061 },
                                date: { id: "BP1062", value: content.BP1062 },
                                title: { id: "BP1063", value: content.BP1063 },
                                desc: { id: "BP1064", value: content.BP1064 },
                                tags: [
                                    { id: "BP1065", value: content.BP1065 },
                                    { id: "BP1066", value: content.BP1066 },
                                    { id: "BP1067", value: content.BP1067 },
                                ],
                            },
                            {
                                img: { id: "BP1068", value: content.BP1068 },
                                date: { id: "BP1069", value: content.BP1069 },
                                title: { id: "BP1070", value: content.BP1070 },
                                desc: { id: "BP1071", value: content.BP1071 },
                                tags: [
                                    { id: "BP1072", value: content.BP1072 },
                                    { id: "BP1073", value: content.BP1073 },
                                    { id: "BP1074", value: content.BP1074 },
                                ],
                            },
                        ],

                    },

                    {
                        // 🔹 Section 3
                        title: { id: "BP1075", value: content.BP1078 },
                        posts: [
                            {
                                img: { id: "BP1076", value: content.BP1076 },
                                date: { id: "BP1077", value: content.BP1077 },
                                title: { id: "BP1078", value: content.BP1078 },
                                desc: { id: "BP1079", value: content.BP1079 },
                                tags: [
                                    { id: "BP1080", value: content.BP1080 },
                                    { id: "BP1081", value: content.BP1081 },
                                    { id: "BP1082", value: content.BP1082 },
                                ],
                            },
                            {
                                img: { id: "BP1083", value: content.BP1083 },
                                date: { id: "BP1084", value: content.BP1084 },
                                title: { id: "BP1085", value: content.BP1085 },
                                desc: { id: "BP1086", value: content.BP1086 },
                                tags: [
                                    { id: "BP1087", value: content.BP1087 },
                                    { id: "BP1088", value: content.BP1088 },
                                    { id: "BP1089", value: content.BP1089 },
                                ],
                            },
                            {
                                img: { id: "BP1090", value: content.BP1090 },
                                date: { id: "BP1091", value: content.BP1091 },
                                title: { id: "BP1092", value: content.BP1092 },
                                desc: { id: "BP1093", value: content.BP1093 },
                                tags: [
                                    { id: "BP1094", value: content.BP1094 },
                                    { id: "BP1095", value: content.BP1095 },
                                    { id: "BP1096", value: content.BP1096 },
                                ],
                            },
                            {
                                img: { id: "BP1097", value: content.BP1097 },
                                date: { id: "BP1098", value: content.BP1098 },
                                title: { id: "BP1099", value: content.BP1099 },
                                desc: { id: "BP1100", value: content.BP1100 },
                                tags: [
                                    { id: "BP1101", value: content.BP1101 },
                                    { id: "BP1102", value: content.BP1102 },
                                    { id: "BP1103", value: content.BP1103 },
                                ],
                            },
                        ],

                    },
                ].map((section, sectionIdx) => (
                    <Box key={sectionIdx} mt={6}>
                        {/* Section Title */}
                        <Typography
                            sx={{
                                ...typography.displayM,
                                fontWeight: 600,
                                color: "#1C2D4B",
                                fontSize: { xs: "22px", md: typography.displayM.fontSize },
                                mb: 4,
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                            }}
                        >
                            {section.title.value}
                            <EditIconButton id={section.title.id} />
                        </Typography>

                        {/* Posts Grid */}
                        <Grid container spacing={4}>
                            {section.posts.map((post, index) => (
                                <Grid item xs={12} md={6} key={index}>
                                    <Box>
                                        {/* Image with edit icon */}
                                        <Box sx={{ position: "relative", mb: 2 }}>
                                            <Box
                                                component="img"
                                                src={`https://skillglow.bexatm.com${post.img.value}`}
                                                alt={post.title.value}
                                                sx={{
                                                    width: "100%",
                                                    maxWidth: { xs: "100%", md: "560px" },
                                                    height: { xs: "180px", md: "240px" },
                                                    objectFit: "cover",
                                                    borderRadius: 1,
                                                }}
                                            />
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    top: 8,
                                                    right: 8,
                                                }}
                                            >
                                                <EditIconButton id={post.img.id} type="I" />
                                            </Box>
                                        </Box>

                                        {/* Date */}
                                        <Typography
                                            sx={{
                                                ...typography.h6,
                                                color: "#2E8E7E",
                                                fontWeight: 600,
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 0.5,
                                            }}
                                        >
                                            {post.date.value}
                                            <EditIconButton id={post.date.id} />
                                        </Typography>

                                        {/* Title */}
                                        <Typography
                                            sx={{
                                                ...typography.displayM,
                                                color: "#1C2D4B",
                                                cursor: "pointer",
                                                fontSize: { xs: "20px", md: typography.displayM.fontSize },
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 0.5,
                                                fontWeight: 600
                                            }}
                                            mt={0.5}
                                            onClick={() => navigate("/home/BlogDetails")}
                                        >
                                            {post.title.value}
                                            <EditIconButton id={post.title.id} />
                                        </Typography>

                                        {/* Description */}
                                        <Typography
                                            sx={{
                                                ...typography.h5,
                                                color: "#49576F",
                                                fontSize: { xs: "15px", md: typography.h5.fontSize },
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 0.5,
                                                fontWeight: 500
                                            }}
                                            mt={1}
                                        >
                                            {post.desc.value}
                                            <EditIconButton id={post.desc.id} />
                                        </Typography>

                                        {/* Tags */}
                                        <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                                            {post.tags.map((tag, idx) => (
                                                <Box key={idx} display="flex" alignItems="center">
                                                    <Chip
                                                        label={tag.value}
                                                        size="small"
                                                        sx={{
                                                            ...typography.bodyBase,
                                                            fontFamily: 'Fira Sans',
                                                            backgroundColor: ["#EAF4FF", "#FFF4E5", "#FFEAEA"][idx % 3],
                                                            fontWeight: 400,
                                                            ml: 0.1,
                                                            mb: 1
                                                        }}
                                                    />
                                                    <EditIconButton id={tag.id} />
                                                </Box>
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
                                            fontWeight: item.selected ? "bold" : "normal",
                                        }}
                                    />
                                )}
                            />
                        </Box>
                    </Box>
                ))}



            </Box>

            <Box>
                <Footer />
            </Box>
        </Box>

    );
};

export default BlogPost;
