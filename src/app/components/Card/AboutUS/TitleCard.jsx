import { React, useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import img from '../../../../assets/aboutUs1.png'
import { typography } from "app/utils/constant";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";


export default function AboutUsCard() {

    const navigate = useNavigate();
    const [content, setContent] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

   useEffect(() => {
      const apiUrl =
        "https://skillglow.bexatm.com/ATM/ContentManageSysV1.php?contentId=Aboutus";
      fetch(apiUrl)
        .then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        })
        .then((data) => setContent(data))
        .catch((err) => console.error("Error loading content:", err));
    }, []);
  
    //  Check admin role
    useEffect(() => {
      const role = localStorage.getItem("role");
      setIsAdmin(role === "admin");
    }, []);
  
    //  Edit function
    const handleEdit = (contentTextID, type = "T") => {
      navigate(
        `/CmsEditor?contentId=Aboutus&contentTextID=${contentTextID}&contentType=${type}`
      );
    };  
  
  
    //  Edit icon button
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
            },
            verticalAlign: "middle",
          }}
        >
          <EditIcon fontSize="small" />
        </IconButton>
      ) : null;
  
    if (!content) return null;

  return (

    <Card
      sx={{
        width: "100%",
        maxWidth: 1440,
        borderRadius: 3,
        boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
        overflow: "hidden",
        mx: "auto",
        opacity: 1,
        p: { xs: 2, md: 4 }, // padding for spacing
      }}
    >
      {/* Wrapper to keep all content aligned left */}
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        {/* Title */}
        <Typography
          gutterBottom
          sx={{
            ...typography.displayXL,
            color: "#061D47",
            textAlign: "center", // ✅ left align
          }}
        >
          {content.AU1001}
          <EditIconButton id="AU1001" />
        </Typography>

        {/* Image */}
        <CardMedia
          component="img"
          image={`https://skillglow.bexatm.com${content.AU1002}`} 
          alt="About Us"
          sx={{
            width: "100%",
            height: 400,
            opacity: 1,
            objectFit: "cover",
            borderRadius: 2,
          }}
        />
         <Box sx={{ position: "absolute",top: '150px', right: '120px', zIndex: 2 }}>
                  <EditIconButton id="AU1002" type="I" />
                </Box>

        {/* Text Section */}
        <CardContent
          sx={{
            width: "100%",
            maxWidth: 1200,
            opacity: 1,
            gap: 2.5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            px: 0, // ✅ remove side padding so it aligns with title & image
          }}
        >
          <Typography
            variant="h6"
            fontWeight={600}
            gutterBottom
            sx={{
              ...typography.h2,
              color: "#061D47",
              textAlign: "left", // ✅ consistent left align
            }}
          >
            {content.AU1003}
            <EditIconButton id="AU1003" />
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#4b5563",
              textAlign: "left",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "200%",
              letterSpacing: "0px",
              verticalAlign: "middle",
            }}
          >
            {content.AU1004}
            <EditIconButton id="AU1004" />
          </Typography>

        </CardContent>
      </Box>
    </Card>

  );
}
