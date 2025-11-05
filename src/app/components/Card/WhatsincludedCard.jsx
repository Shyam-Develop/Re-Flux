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
      "https://skillglow.bexatm.com/ATM/ContentManageSysV1.php?contentId=C006";
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setContent(data))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  // ✅ Detect admin login (for showing Edit icons)
  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  // ✅ Navigate to CMS editor when clicking Edit
  const handleEdit = (contentTextID, type = "T") => {
    navigate(
      `/CmsEditor?contentId=C006&contentTextID=${contentTextID}&contentType=${type}`
    );
  };

  // ✅ Small reusable Edit button
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

  // ✅ Build card list from API JSON fields (example keys)
  const includedItems = [
    {
      title: content.CON600001,
      desc: content.CON600002,
      button: content.CON600003,
      image: content.CON600004,
    },
    {
      title: content.CON600005,
      desc: content.CON600006,
      button: content.CON600007,
      image: content.CON600008,
    },
    {
      title: content.CON600009,
      desc: content.CON600010,
      button: content.CON600011,
      image: content.CON600012,
    },
  ];

  return (
    <Grid container spacing={3}>
      {includedItems.map((item, index) => {
        const titleId = `CON60000${index * 4 + 1}`;
        const descId = `CON60000${index * 4 + 2}`;
        const buttonId = `CON60000${index * 4 + 3}`;
        const imageId = `CON60000${index * 4 + 4}`;

        return (
          <Grid item key={index}>
            <Card
              sx={{
                position: "relative",
                width: "350px",
                height: "224px",
                borderRadius: 3,
                overflow: "hidden",
                backgroundColor: "#fff",
                color: "#1C2D4B",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.35s ease",
                "&:hover": {
                  height: "254px",
                  backgroundColor: "#0b2d55",
                  color: "#fff",
                },
                "&:hover .view-more-btn": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
                "&:hover .MuiTypography-root": {
                  color: "#fff !important",
                },
              }}
            >
              {/* Image or placeholder */}
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  backgroundColor: "#f3f4f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 4,
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              >
                {item.image ? (
                  <Box
                    component="img"
                    src={`https://skillglow.bexatm.com${item.image}`}
                    alt={item.title}
                    sx={{
                      width: "45px",
                      height: "45px",
                      border: "1px solid gray",
                      padding: "5px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  <Typography variant="body2">No Img</Typography>
                )}
                <EditIconButton id={imageId} type="I" />
              </Box>

              {/* Title & Description */}
              <CardContent sx={{ pt: 0 }}>
                <Typography
                  sx={{ ...typography.h3, fontWeight: 600, fontSize: "28px" }}
                >
                  {item.title}
                  <EditIconButton id={titleId} />
                </Typography>
                <Typography sx={{ ...typography.bodyBase }} variant="body2">
                  {item.desc}
                  <EditIconButton id={descId} />
                </Typography>
              </CardContent>

              {/* Button inside layout */}
              <Box
                className="view-more-btn"
                sx={{
                  px: 3,
                  pb: 2,
                  opacity: 0,
                  transform: "translateY(10px)",
                  transition: "all 0.35s ease",
                  paddingLeft: "50px",
                }}
              >
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    borderRadius: "24px",
                    textTransform: "none",
                    fontWeight: "bold",
                    bgcolor: "#C97833",
                    width: "90%",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      bgcolor: "#b2652a",
                      "& .arrow-icon": {
                        opacity: 1,
                        transform: "translateX(4px)",
                      },
                    },
                  }}
                >
                  {item.button || "View More"}
                  <EditIconButton id={buttonId} />
                  <ArrowRightAltIcon
                    className="arrow-icon"
                    sx={{
                      fontSize: 22,
                      opacity: 0,
                      transform: "translateX(0)",
                      transition: "all 0.3s ease",
                    }}
                  />
                </Button>
              </Box>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
