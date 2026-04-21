import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
import { typography } from "app/utils/constant";

export default function WhatsincludedCard() {
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // ✅ Fetch JSON from your PHP API (C006)
  useEffect(() => {
    const apiUrl =
      `${process.env.REACT_APP_CMS_URL}?contentId=C006`;
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setContent(data))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  // Detect admin login (for showing Edit icons)
  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  // Navigate to CMS editor when clicking Edit
  const handleEdit = (contentTextID, type = "T") => {
    navigate(
      `/CmsEditor?contentId=C006&contentTextID=${contentTextID}&contentType=${type}`
    );
  };

  // Small reusable Edit button
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

  // Build card list from API JSON fields (example keys)
  const includedItems = [
  {
    title: content.CON600001,
    titleId: "CON600001",
    desc: content.CON600002,
    descId: "CON600002",
    image: content.CON600004,
    imageId: "CON600004",
  },
  {
    title: content.CON600005,
    titleId: "CON600005",
    desc: content.CON600006,
    descId: "CON600006",
    image: content.CON600008,
    imageId: "CON600008",
  },
  {
    title: content.CON600009,
    titleId: "CON600009",
    desc: content.CON600010,
    descId: "CON600010",
    image: content.CON600012,
    imageId: "CON600012",
  },
];

return (
  <Grid container spacing={3}>
    {includedItems.map((item, index) => (
      <Grid item key={index}>
        <Card
          sx={{
            position: "relative",
            width: "350px",
            height:'100%',
            borderRadius: 3,
            backgroundColor: "#fff",
            color: "#1C2D4B",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            transition: "all 0.35s ease",
            "&:hover": {
              backgroundColor: "#0b2d55",
              color: "#fff",
            },
            "&:hover .MuiTypography-root": {
              color: "#fff !important",
            },
          }}
        >
          {/* Image */}
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 4,
              ml: "30px",
              mt: "20px",
            }}
          >
            {item.image ? (
              <Box
                component="img"
                src={`https://refluxmagnets.com${item.image}`}
                alt={item.title}
                sx={{
                  width: 45,
                  height: 45,
                  border: "1px solid gray",
                  padding: "5px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            ) : (
              <Typography variant="body2">No Img</Typography>
            )}
            <EditIconButton id={item.imageId} type="I" />
          </Box>

          {/* Title & Description */}
          <CardContent sx={{ pt: 0 }}>
            <Typography
              sx={{ ...typography.h3, fontWeight: 600, fontSize: "28px" }}
            >
              {item.title}
              <EditIconButton id={item.titleId} />
            </Typography>

            <Typography sx={{ ...typography.bodyBase }} variant="body2">
              {item.desc}
              <EditIconButton id={item.descId} />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

}
