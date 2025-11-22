import React, { useState, useEffect } from "react";
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
  Divider, CircularProgress,
  IconButton
} from "@mui/material";
import { typography } from "app/utils/constant";
import { useNavigate } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import EditIcon from "@mui/icons-material/Edit";


const HomeVideoCard = ({
  videoFile,
  items = [],
  WhatsApp,

}) => {
  // Dialog State
  const [BrowseDialogopen, setBrowseDialogOpen] = useState(false);

  const navigate = useNavigate();

  const handleClickOpen = () => setBrowseDialogOpen(true);
  const handledialogClose = () => setBrowseDialogOpen(false);

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



  const UploadBox = ({ label }) => {
    return (
      <Box sx={{ my: 3 }}>
        <Typography variant="h6" gutterBottom>{label}</Typography>
        <label htmlFor="upload-input">
          <Box
            sx={{
              border: '2px dashed #ccc',
              borderRadius: 2,
              p: 4,
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'border-color 0.3s ease',
              '&:hover': { borderColor: 'primary.main' },
            }}
          >
            <IconButton component="span" size="large">
              <UploadFileIcon sx={{ fontSize: 40, color: 'text.secondary' }} />
            </IconButton>
            <Typography>
              <strong style={{ color: '#1976d2' }}>Choose</strong> file to upload
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Select image in jpeg, PNG
            </Typography>
          </Box>
        </label>
        <input
          id="upload-input"
          type="file"
          accept="image/jpeg, image/png"
          style={{ display: 'none' }}
        />
      </Box>
    );
  };

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


  const [content, setContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}?contentId=Home`)
      .then((res) => res.json())
      .then((data) => setContent(data))
      .catch((err) => console.error("Error loading content:", err));
  }, []);

  // ✅ Check admin role
  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  // ✅ Navigate to CMS editor
  // Put this in your component (uses your existing content state)
  const handleEdit = (contentTextID, type = "T") => {
    if (type === "V") {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "video/*";

      input.onchange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);
        // your FTP folder (you said you store under /API/images/)
        formData.append("filePath", "/API/images/");

        try {
          // 1) Upload file
          const uploadRes = await fetch(
            "https://cmsreflux.bexatm.com/API/VideoUpload.php",
            { method: "POST", body: formData }
          );
          const uploadData = await uploadRes.json();
          console.log("upload response:", uploadData);

          if (!uploadData || !uploadData.filePath) {
            alert("Upload failed: no filePath returned");
            return;
          }

          const returnedPath = uploadData.filePath; // e.g. "/API/images/myvid.mp4" or "/images/myvid.mp4"
          // decide whether CMS currently stores full path or only filename
          const currentValue = content?.[contentTextID];

          // if currentValue exists and contains a slash -> CMS stores paths -> save the returnedPath
          // otherwise save only filename (basename)
          const shouldSaveFullPath = typeof currentValue === "string" && currentValue.includes("/");

          const valueToSave = shouldSaveFullPath
            ? returnedPath
            : returnedPath.split("/").pop(); // filename only

          console.log("valueToSave for JSON:", valueToSave);

          // 2) Update JSON using your actual CMS endpoint
          const updateRes = await fetch(
            `https://cmsreflux.bexatm.com/API/ContentManageSysV1.php?contentId=Home`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                cmsTextID: contentTextID,
                cmsText: valueToSave,
              }),
            }
          );

          const updateData = await updateRes.json();
          console.log("update response:", updateData);

          if (updateRes.ok) {
            alert("Video uploaded and content updated!");
            window.location.reload();
            // update local content so UI reflects change instantly without reload
            setContent((prev) => ({ ...(prev || {}), [contentTextID]: valueToSave }));
          } else {
            alert("Upload succeeded but updating content failed.");
          }
        } catch (err) {
          console.error("upload error:", err);
          alert("Video upload failed");
        }
      };

      input.click();
      return;
    }

    // fallback: open CMS editor for text/image
    navigate(`/CmsEditor?contentId=Home&contentTextID=${contentTextID}&contentType=${type}`);
  };



  // ✅ Admin edit icon button
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
          "&:hover": { backgroundColor: "#e0e0e0", color: "#070808ff" },
          verticalAlign: "middle",
        }}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    ) : null;

  if (!content) return null;

  return (
    <Box sx={{ position: "relative", width: "100%", height: "908px" }}>
      {/* 🔹 Background Video */}
      <Box style={{ position: "absolute", width: "100%", height: "100%" }}>

        <video
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src={`https://cmsreflux.bexatm.com/API/images/${content.HV1001}`}
            type="video/mp4"
          />
        </video>

        {/* Edit button on top */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 2,
          }}
        >
          <EditIconButton id="HV1001" type="V" />
        </div>

      </Box>



      {/* 🔹 Foreground Content */}
      <Box sx={{ position: "relative", width: "1280px", height: "448px", p: 5 }}>
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
            mt: 30
          }}
        >
          {/* Heading */}
          <Typography
            sx={{ ...typography.displayXL, fontWeight: 700, fontSize: '64px', color: "#FFFFFF", mb: 2, }}
          >
            {activeItem?.head} {/* pick first item or static text */}
          </Typography>

          {/* Subtext */}
          <Typography sx={{ ...typography.h4, color: "#FFFFFF", mb: 3, opacity: 0.9 }}>
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
              sx={{ ...typography.buttonLink, color: "#FFFFFF", borderRadius: "25px", px: 3, }}
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
            top: "0%",
            right: "2%",
            width: "370px",
            height: "570px",
            borderRadius: 1,
            boxShadow: 3,
            zIndex: 2,
            mt: 20
          }}
        >
          <CardContent>
            <Box sx={{ ...typography.h5, fontWeight: 500, fontSize: '20px', color: '#000000', mb: 2 }}>
              Certified repairs, ready-to-rent magnets, and warranty-backed refurbished units—Re-flux is your one stop for dependable lifting performance.
            </Box>

            {[
              {
                title: "Repair",
                desc: "Quick, certified repairs with load-test reports and warranty coverage.",
              },
              {
                title: "Rent",
                desc: "Rent circular, rectangular, or suspension magnets tested and ready in 48 h.",
              },
              {
                title: "Resale (Refurbished)",
                desc: "Buy or exchange refurbished, load-tested magnets with warranty included.",
              },

            ].map((section, idx) => (
              <Box key={idx} sx={{ mb: 2 }}>
                <Typography sx={{ ...typography.uiLabel, fontFamily: "Fira Sans", fontWeight: 500, fontSize: '13px' }}>
                  {section.title}
                </Typography>
                <Typography sx={{ ...typography.bodyBase, color: '#0E1626', fontFamily: "Fira Sans", fontWeight: 400, fontSize: '18px' }}>
                  {section.desc}
                </Typography>
                <Typography sx={{ fontFamily: "Fira Sans", color: '#2F6FBA', fontWeight: 600, fontSize: '14px' }}>
                  Request a Quote
                </Typography>
                {idx !== 2 && <Divider sx={{ mt: 2 }} />}
              </Box>
            ))}
          </CardContent>
        </Card>
      </Box>

      {/* Dialog */}
      <Dialog
        open={BrowseDialogopen}
        onClose={handledialogClose}
        maxWidth="sm"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "16px",
            height: "100vh", // 👈 fixed height
            maxHeight: "100vh", // 👈 prevent overflow beyond screen
          },
        }}
      >
        <DialogContent>
          {/* <Card sx={{ textAlign: "center", p: 3 }}> */}
          <CardContent>
            <Typography
              sx={{
                textAlign: "left",
              }}
              variant="h6"
              gutterBottom
            >
              Tell us what you need
            </Typography>
            <Typography
              //  variant="h6"
              sx={{
                textAlign: "left",
                fontSize: "15px",
                color: "#111",
              }}
            >
              Company Name *
            </Typography>
            <TextField
              placeholder="Ex: John"
              variant="outlined"
              fullWidth
              name="name"
              id="name"

            />

            <Typography
              sx={{
                textAlign: "left",
                fontSize: "15px",
                // ...typography.h6,
                // fontWeight: 500,
                color: "#111",
                // color: theme.palette.primary.contrastText
                marginTop: 2,
              }}
            >
              Contact Person *
            </Typography>
            <TextField
              placeholder="example@gmail.com"
              variant="outlined"
              fullWidth
              name="name"
              id="name"

            />

            <Typography
              sx={{
                textAlign: "left",
                fontSize: "15px",
                // ...typography.h6,
                // fontWeight: 500,
                color: "#111",
                // color: theme.palette.primary.contrastText
                marginTop: 2,
              }}
            >
              Phone *
            </Typography>
            <TextField
              placeholder="example@gmail.com"
              variant="outlined"
              fullWidth
              name="name"
              id="name"

            />
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "15px",

                color: "#111",
                marginTop: 2,
              }}
            >
              Email *
            </Typography>
            <TextField
              placeholder="example@gmail.com"
              variant="outlined"
              fullWidth
              name="name"
              id="name"

            />
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "15px",
                // ...typography.h6,
                // fontWeight: 500,
                color: "#111",
                // color: theme.palette.primary.contrastText
                marginTop: 2,
              }}
            >
              Enquiry for *
            </Typography>
            <FormControl fullWidth>
              {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
              <Select

                labelId="demo-simple-select-label"
                id="demo-simple-select"

              >
                <MenuItem
                  value={10}
                >
                  1-5
                </MenuItem>
                <MenuItem
                  value={20}
                >
                  6-10
                </MenuItem>
                <MenuItem
                  value={30}
                >
                  10-20
                </MenuItem>
                <MenuItem
                  //  sx={{
                  //   color: theme.palette.primary.contrastText
                  // }}
                  value={30}
                >
                  20+
                </MenuItem>
              </Select>
            </FormControl>

            <Typography
              sx={{
                textAlign: "left",
                fontSize: "15px",
                // ...typography.h6,
                // fontWeight: 500,
                color: "#111",
                // color: theme.palette.primary.contrastText
                // marginTop: 5,
              }}
            >
              Message
            </Typography>
            <TextField
              placeholder="example@gmail.com"
              variant="outlined"
              fullWidth
              multiline
              minRows={3}
              name="name"
              id="name"

            />
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "15px",
                // ...typography.h6,
                // fontWeight: 500,
                color: "#111",
                // color: theme.palette.primary.contrastText
                // marginTop: 5,
              }}
            >
              Photos/Videos
            </Typography>
            <UploadBox />

          </CardContent>
          {/* Buttons */}
          <Box mt={3} display="flex" flexDirection={"column"} gap={2}>
            <Button
              variant="text"
              startIcon={<WhatsAppIcon sx={{ color: "#25D366" }} />}
              sx={{
                color: "black", // text color
                textTransform: "none", // keep normal text
                fontWeight: 500,
                fontSize: "14px",
                "&:hover": {
                  backgroundColor: "transparent", // no hover background
                },
              }}
            >
              Send on WhatsApp
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
            >
              Submit Message
            </Button>
          </Box>

          <Box mt={2}>
            <Button fullWidth variant="outlined">
              Continue to details
            </Button>
          </Box>
          {/* </Card> */}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default HomeVideoCard;
