import React, { useState,useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
  TextField,
  Card,
  CardContent,
  FormControl,
  Select,
  MenuItem,
  Link,
  Divider,CircularProgress
} from "@mui/material";
import { typography } from "app/utils/constant";

const HomeVideoCard = ({
  videoFile,
  items = [],
  WhatsApp,
  navigate,
}) => {
  // Dialog State
  const [browseDialogOpen, setBrowseDialogOpen] = useState(false);

  const handleClickOpen = () => setBrowseDialogOpen(true);
  const handleDialogClose = () => setBrowseDialogOpen(false);

  // Selection
  const [selected, setSelected] = useState(null);
  const [loadingId, setLoadingId] = useState(null);


  // Sequential loading on mount
  useEffect(() => {
  let index = 0;
  let timer;

  const loop = () => {
    if (selected) return; // stop loop if something is selected

    setLoadingId(items[index].id);
    timer = setTimeout(() => {
      setLoadingId(null);
      index = (index + 1) % items.length;
      loop();
    }, 10000);
  };

  loop();

  return () => clearTimeout(timer); // cleanup on unmount or dependency change
}, [selected, items]);

  // useEffect(() => {
  //   let index = 0;
  //   const loop = () => {
  //     if (!selected) { // only auto-cycle if no card is locked
  //       setLoadingId(items[index].id);
  //       setTimeout(() => {
  //         setLoadingId(null);
  //         index = (index + 1) % items.length; // loop back after last card
  //         loop();
  //       }, 10000);
  //     }
  //   };
  //   loop();
  // }, [selected]);

// pick the active item: selected takes priority, else show the auto-loading one
const activeItem = selected 
  ? items.find((item) => item.id === selected) 
  : items.find((item) => item.id === loadingId) || items[0];

  const handleClick = (id) => {
    setSelected(id);
    setLoadingId(id); // clicked card loads infinitely
  };

  return (
    <Box sx={{ position: "relative", width: "1440px", height: "908px" }}>
      {/* 🔹 Background Video */}
      <video
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
        }}
        src={videoFile}
        autoPlay
        muted
        loop
      ></video>

      {/* 🔹 Foreground Content */}
      <Box sx={{ position: "relative", width: "1280px", height: "448px",p:5 }}>
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "479px",
          color: "white",
          textAlign: "left",
          maxWidth: "828px",
          // pl: 8,
          mt:30
        }}
      >
        {/* Heading */}
    <Typography
      sx={{...typography.displayXL,color:"#FFFFFF", mb: 2, }}
    >
      {activeItem?.head} {/* pick first item or static text */}
    </Typography>

    {/* Subtext */}
    <Typography  sx={{ ...typography.h4,color:"#FFFFFF",mb: 3, opacity: 0.9 }}>
      {activeItem?.text}
    </Typography>

    {/* Buttons Row */}
    <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        width="120px"
        height="20px"
        color="warning"
        sx={{...typography.buttonLink,color:"#FFFFFF", borderRadius: "25px", px: 3, }}
      >
        {activeItem?.button}
      </Button>

      {/* WhatsApp Button */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box
          component="img"
          src={WhatsApp}
          alt="WhatsApp"
          sx={{ width: 32, height: 32 }}
        />
        <Link
          onClick={() => navigate("/home/RepairServicesPage")}
          sx={{
            px: 1,
            color: "white",
            textDecoration: "none",
            fontWeight: 500,
            "&:hover": { textDecoration: "underline" },
          }}
        >
          WhatsApp an Engineer
        </Link>
      </Box>
    </Box>

    {/* Extra Link */}
    <Typography
      sx={{
        fontWeight: 500,
        textDecoration: "underline",
        cursor: "pointer",
        display: "inline-block",
      }}
    >
      What “Refurbished” Means? →
    </Typography>

        {/* Small Cards Row */}
 <Box sx={{ display: "flex", gap: 2, mb: 3, mt: 3 }}>
      {items.map((item) => {
        const isAutoLoading = loadingId === item.id && selected !== item.id;
        const isSelected = selected === item.id;
        const active = isAutoLoading || isSelected;

        return (
          <Card
            key={item.id}
            onClick={() => handleClick(item.id)}
            sx={{
              width: "120px",
              height: "76px",
              borderRadius: "16px",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: active ? "#1C2D4B" : "rgba(0,0,0,0.12)",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              backgroundColor: "white",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            {/* Normal content */}
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              height="100%"
              color="black"
            >
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", fontWeight: 600 }}
              >
                {item.id}
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                {item.title}
              </Typography>
            </Box>

            {/* Overlay loader */}
{active && (
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      width: "120%",        // ⬅️ Increase overlay width
      left: "-10%",          // ⬅️ Center it again
      bgcolor: "#1C2D4B",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 1,
    }}
  >
    {/* Row for loader + id */}
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <CircularProgress size={18} sx={{ color: "white" }} />
      <Typography variant="caption">{item.id}</Typography>
    </Box>

    {/* Title below */}
    <Typography variant="subtitle2">{item.title}</Typography>
  </Box>
)}


          </Card>
        );
      })}
    </Box>
      </Box>

      {/* 🔹 Right Side Card */}
      <Card
        sx={{
          position: "absolute",
          top: "7%",
          right: "5%",
          width: "350px",
          height:"437px",
          borderRadius: 2,
          boxShadow: 3,
          zIndex: 2,
          mt:30
        }}
      >
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Peace of mind
          </Typography>
          <Typography sx={{ color: "teal", fontWeight: "bold", mb: 1 }}>
            We’ve got you covered
          </Typography>
          <Link
            sx={{
              display: "block",
              mb: 2,
              fontWeight: 500,
              textDecoration: "underline",
              color: "primary.main",
            }}
          >
            View All Magnets for rent →
          </Link>

          <Divider sx={{ mb: 2 }} />

          {[
            {
              title: "Repair",
              desc: "Magnet down? Get a fast repair quote.",
            },
            {
              title: "Rent",
              desc: "Need a temporary magnet today?",
            },
            {
              title: "Resale (Refurbished)",
              desc: "Certified units with warranty buy/sell/exchange.",
            },
          ].map((section, idx) => (
            <Box key={idx} sx={{ mb: 2 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                {section.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                {section.desc}
              </Typography>
              <Link sx={{ fontWeight: 500, textDecoration: "underline" }}>
                Request a Quote
              </Link>
              {idx !== 2 && <Divider sx={{ mt: 2 }} />}
            </Box>
          ))}
        </CardContent>
      </Card>
</Box>


          {/* Dialog */}
          <Dialog
            open={browseDialogOpen}
            onClose={handleDialogClose}
            maxWidth="sm"
            fullWidth
            sx={{
              "& .MuiDialog-paper": {
                borderRadius: "16px",
                height: "100vh",
                maxHeight: "100vh",
              },
            }}
          >
            <DialogContent>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ textAlign: "left" }}>
                  Tell us what you need
                </Typography>

                {["Company Name *", "Contact Person *", "Phone *", "Email *"].map(
                  (label, idx) => (
                    <Box key={idx} sx={{ mt: idx > 0 ? 2 : 0 }}>
                      <Typography
                        sx={{ textAlign: "left", fontSize: "15px", color: "#111" }}
                      >
                        {label}
                      </Typography>
                      <TextField
                        placeholder="Enter here"
                        variant="outlined"
                        fullWidth
                      />
                    </Box>
                  )
                )}

                <Box sx={{ mt: 2 }}>
                  <Typography sx={{ textAlign: "left", fontSize: "15px" }}>
                    Enquiry for *
                  </Typography>
                  <FormControl fullWidth>
                    <Select defaultValue="">
                      <MenuItem value={10}>1-5</MenuItem>
                      <MenuItem value={20}>6-10</MenuItem>
                      <MenuItem value={30}>10-20</MenuItem>
                      <MenuItem value={40}>20+</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ mt: 2 }}>
                  <Typography sx={{ textAlign: "left", fontSize: "15px" }}>
                    Message
                  </Typography>
                  <TextField
                    placeholder="Enter message"
                    variant="outlined"
                    fullWidth
                    multiline
                    minRows={3}
                  />
                </Box>
              </CardContent>
            </DialogContent>
          </Dialog>
    </Box>
  );
};

export default HomeVideoCard;
