import React, {useState, useEffect} from "react";
import { Box, Typography, Card, CardContent, Button, Grid, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { typography } from "app/utils/constant";
import EditIcon from "@mui/icons-material/Edit";

const Testimonials = ( ) => {

  const navigate = useNavigate();
  const [content, setContent] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
      fetch(
        `${process.env.REACT_APP_CMS_URL}?contentId=Home`
      )
        .then((res) => res.json())
        .then((data) => setContent(data));
    }, []);
  
    useEffect(() => {
      const role = localStorage.getItem("role");
      setIsAdmin(role === "admin");
    }, []);
  
    const handleEdit = (id, type = "T") => {
      navigate(
        `/CmsEditor?contentId=Home&contentTextID=${id}&contentType=${type}`
      );
    };
  
    const EditIconButton = ({ id, type = "T" }) =>
      isAdmin ? (
        <IconButton
          size="small"
          onClick={() => handleEdit(id, type)}
          sx={{
            ml: 0.5,
            p: 0.4,
            background: "#eee",
            borderRadius: "50%",
            "&:hover": { background: "#ddd" },
          }}
        >
          <EditIcon fontSize="small" />
        </IconButton>
      ) : null;
  

  const testimonials = [
    {
      name: content.HM1088,
      role: content.HM1089,
      text: content.HM1090,
      nameId: "HM1088",
      roleId: "HM1089",
      textId: "HM1090",
    },
    {
      name: content.HM1091,
      role: content.HM1092,
      text: content.HM1093,
      nameId: "HM1091",
      roleId: "HM1092",
      textId: "HM1093",
    },
    {
      name: content.HM1094,
      role: content.HM1095,
      text: content.HM1096,
      nameId: "HM1094",
      roleId: "HM1095",
      textId: "HM1096",
    },
  ];

  return (
    <Box
      sx={{
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 10 },
        background: "white",
        position: "relative",
      }}
    >
      <Grid container spacing={4}>
        {/* Left Section */}
        <Grid item xs={12} md={5} mt={18}>
          <Typography sx={{ ...typography.displayL, color: "#232323", mb: 2 }}>
            {content.HM1084} 
            
            <EditIconButton id="HM1084" />
          </Typography>

          <Typography sx={{ ...typography.h4, color: "#6B768A", mb: 3 }}>
            {content.HM1086}
            <EditIconButton id="HM1086" />
          </Typography>

          <Button
            variant="contained"
            onClick={() => navigate("/customer-says")}
            sx={{
              backgroundColor: "#AE5609",
              borderRadius: "50px",
              px: 3,
              py: 1,
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#AE5609", cursor: "pointer" },
            }}
          >
            {content.HM1087}
           
          </Button>
           <EditIconButton id="HM1087" />
        </Grid>

        {/* Zigzag Cards */}
        <Grid item xs={12} md={7}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {testimonials.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                }}
              >
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 3,
                    backgroundColor: "#f9fafb",
                    maxWidth: "600px",
                    maxHeight: "182px",
                  }}
                >
                  <CardContent>
                    <Typography sx={{ ...typography.h3B, color: "#232323" }}>
                      {item.name}
                      <EditIconButton id={item.nameId} />
                    </Typography>

                    <Typography
                      sx={{ mb: 2, ...typography.overline, color: "#6B768A" }}
                    >
                      {item.role}
                      <EditIconButton id={item.roleId} />
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "150%",
                        color: "#5C5C5C",
                      }}
                    >
                      {item.text}
                      <EditIconButton id={item.textId} />
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Testimonials;
