import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import before from "../../../assets/beforecstudy.png";
import after from "../../../assets/aftercstudy.png";

const imagePairs = [
  { before: before, after: after },
  { before: before, after: after },
  { before: before, after: after },
];

const BeforeAfterShowcase = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? imagePairs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === imagePairs.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", textAlign: "center", py: 6 }}>
      {/* Heading */}
      {/* <Typography
        variant="h5"
        sx={{ fontWeight: 600, color: "#1c2434", mb: 1 }}
      >
        Circular Lifting Magnet
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "#6b7280", mb: 4, maxWidth: 700, mx: "auto" }}
      >
        Understanding growing demand and exceeding expectations from our
        customers in repairing!
      </Typography> */}

      {/* Image Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          position: "relative",
        }}
      >
        {/* Left Arrow */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: -50,
            top: "40%",
            bgcolor: "#1c2434",
            color: "white",
            "&:hover": { bgcolor: "#344050" },
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        {/* Before */}
        <Box sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src={imagePairs[index].before}
            alt="Before"
            sx={{
              width: 400,
              height: 260,
              borderRadius: 2,
              objectFit: "cover",
              mb: 1,
              boxShadow: 3,
            }}
          />
          <Typography
            variant="subtitle2"
            sx={{
              fontFamily: "'Caveat', cursive", // handwriting style
              fontSize: "20px",
              color: "#1c2434",
            }}
          >
            ← Before
          </Typography>
        </Box>

        {/* After */}
       {/* After */}
<Box sx={{ textAlign: "center", mt: -4 /* lift it up */ }}>
  <Box
    component="img"
    src={imagePairs[index].after}
    alt="After"
    sx={{
      width: 400,
      height: 260,
      borderRadius: 2,
      objectFit: "cover",
      mb: 1,
      boxShadow: 3,
    }}
  />
  <Typography
    variant="subtitle2"
    sx={{
      fontFamily: "'Caveat', cursive",
      fontSize: "20px",
      color: "#1c2434",
    }}
  >
    After →
  </Typography>
</Box>


        {/* Right Arrow */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: -50,
            top: "40%",
            bgcolor: "#1c2434",
            color: "white",
            "&:hover": { bgcolor: "#344050" },
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default BeforeAfterShowcase;
