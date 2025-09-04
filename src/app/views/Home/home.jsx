import React from "react";
import { Box, Typography, Button, Link,Card,CardContent, Divider} from "@mui/material";
import videoFile from "../../../assets/MicrosoftTeams-video.mp4"; // ✅ put your video file here
import WhatsApp from "../../../assets/whatsappimg.jpg";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const HomePage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 🔹 Background Video */}
      {/* <Box
        component="video"
        // src="https://youtu.be/wDchsz8nmbo"
        src={videoFile}
        autoPlay
        loop
        muted
        playsInline
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      /> */}
      <video
        // playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          //   top: 0,
          //   left: 0,
          //   zIndex: -1,
        }}
        src={videoFile}
        autoPlay
        muted
        loop
        class="video.mp4"
      ></video>

      {/* 🔹 Foreground Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          color: "white",
          textAlign: "left", // ✅ left align
          maxWidth: "700px", // ✅ restrict width like in screenshot
          pl: 8, // ✅ padding from left
        }}
      >
        {/* Heading */}
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", mb: 2, lineHeight: 1.2 }}
        >
          Certified refurbished magnets—ready to work, warranty included.
        </Typography>

        {/* Subtext */}
        <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
          Each unit is tested, load-certified and documented. Warranty 3–12
          months. Pan-India dispatch and install support.
        </Typography>

    {/* Buttons Row */}
<Box sx={{ display: "flex", gap: 2, mb: 3 }}>
  <Button
    variant="contained"
    color="warning"
    sx={{ borderRadius: "25px", px: 3 }}
  >
    Browse Inventory
  </Button>

  {/* WhatsApp Button */}
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
    }}
  >
    <Box
      component="img"
      src={WhatsApp}
      alt="WhatsApp"
      sx={{ width: 32, height: 32 }}
    />
    <Link
      sx={{
        px: 1,
        color: "white",
        textDecoration: "none",
        fontWeight: 500,
        "&:hover": {
          textDecoration: "underline",
        },
      }}
    >
      WhatsApp an Engineer
    </Link>
  </Box>
</Box>
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
{/* 🔹 Small Cards Row (moved outside WhatsApp box) */}
<Box sx={{ display: "flex", gap: 2, mb: 3,mt: 3 }}>
  {[
    { id: "01", title: "Repair" },
    { id: "02", title: "Rent" },
    { id: "03", title: "Buy" },
    { id: "04", title: "Sell/exchange" },
  ].map((item) => (
    <Card
      key={item.id}
      sx={{
        width: 110,
        height: 80,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        color: "black",
        fontWeight: "bold",
        cursor: "pointer",
        "&:hover": { backgroundColor: "#f5f5f5" },
      }}
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
    </Card>
  ))}
</Box>
        {/* </Box> */}

        {/* Extra link */}
      
      </Box>


       {/* 🔹 Right Side Card */}
      <Card
        sx={{
          position: "absolute",
          top: "7%",
          right: "5%",
          width: 320,
          borderRadius: 2,
          boxShadow: 3,
          zIndex: 2,
        }}
      >
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Peace of mind
          </Typography>
          <Typography
            sx={{ color: "teal", fontWeight: "bold", mb: 1 }}
          >
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

          {/* Items */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Repair
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Magnet down? Get a fast repair quote.
            </Typography>
            <Link sx={{ fontWeight: 500, textDecoration: "underline" }}>
              Request a Quote
            </Link>
          </Box>

          <Divider sx={{ mb: 2 }} />

          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Rent
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Need a temporary magnet today?
            </Typography>
            <Link sx={{ fontWeight: 500, textDecoration: "underline" }}>
              Request a Quote
            </Link>
          </Box>

          <Divider sx={{ mb: 2 }} />

          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Resale (Refurbished)
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Certified units with warranty buy/sell/exchange.
            </Typography>
            <Link sx={{ fontWeight: 500, textDecoration: "underline" }}>
              Request a Quote
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HomePage;
