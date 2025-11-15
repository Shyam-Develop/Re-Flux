import React, { useEffect, useState, Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  CircularProgress,
  Snackbar,
  Alert,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { set } from "lodash";

const CmsEditor = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract query params
  const query = new URLSearchParams(location.search);
  const contentId = query.get("contentId");
  const contentTextID = query.get("contentTextID");
  const contentType = query.get("contentType"); // "T" or "I"

  const [preview, setPreview] = useState("");
  const [text, setText] = useState("");
  const [contentArrayID, setcontentArrayID] = useState("");
  const [contentArrayIndex, setcontentArrayIndex] = useState(0);
  const [contentArray, setcontentArray] = useState(null);
  const [image, setImage] = useState(null);
  const [pageData, setPageData] = useState({});
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState({
    open: false,
    type: "success",
    message: "",
  });

  // --- Load content from API ---
  const loadContent = async () => {
    try {
      const res = await fetch(
         `${process.env.REACT_APP_CMS_URL}?contentId=${contentId}`
      );
      if (!res.ok) throw new Error("Failed to fetch content");
      const data = await res.json();
      setPageData(data);

      if (contentType === "T") {
        setText(data[contentTextID] || "");
      } else if (contentType === "A") {
        const id = contentTextID;
        const match = id.match(/^([A-Z0-9_]+)\[(\d+)\]$/);
        const baseKey = match ? match[1] : id; // 👉 "CON190007"
        const index = match ? parseInt(match[2], 10) : null; // 👉 0
        setcontentArray(data);
        setcontentArrayID(baseKey);
        setcontentArrayIndex(index);
        setText(data[baseKey][index] || "");
      } else if (contentType === "I") {
        const imagePath = data[contentTextID] || "";
        if (imagePath) setPreview(`https://cmsreflux.bexatm.com${imagePath}`);
      }
    } catch (err) {
      console.error("Error loading content:", err);
      setAlert({
        open: true,
        type: "error",
        message: "Error loading content.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (contentId) loadContent();
  }, [contentId]);

  // --- Handle text change ---
  //const handleChange = (e) => setText(e.target.value);

  const handleChange = (e) => {
    if (contentType == "T") {
      setText(e.target.value);
    }
    if (contentType == "A") {
      setText(e.target.value);
      setcontentArray((prevData) => {
        const updatedArray = [...prevData[contentArrayID]];
        updatedArray[contentArrayIndex] = e.target.value;
        return {
          ...prevData,
          [contentArrayID]: updatedArray,
        };
      });
    }
  };

  // --- Handle image preview ---
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setText(`/API/images/${file.name}`);
    }
  };

  // --- Save changes ---
  const saveContent = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const updatedText =
        contentType === "A" ? contentArray[contentArrayID] : text;
        console.log("updatedText",updatedText);
      const res = await fetch(
        `https://cmsreflux.bexatm.com/API/ContentManageSysV1.php?contentId=${contentId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            cmsTextID: contentType === "A" ? contentArrayID:contentTextID,
            cmsText: updatedText,
          }),
        }
      );

      if (!res.ok) throw new Error("Failed to save content");

      // Upload image if needed
      if (contentType === "I" && image) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("filePath", "/images/");
        await fetch("https://cmsreflux.bexatm.com/API/ImageUpload.php", {
          method: "POST",
          body: formData,
        });
      }

      setAlert({
        open: true,
        type: "success",
        message: "Content saved successfully!",
      });
      setTimeout(() => navigate(-1), 1000);
    } catch (err) {
      console.error("Error saving content:", err);
      setAlert({
        open: true,
        type: "error",
        message: "Failed to save content.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog
        open
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: 4,
          },
        }}
      >
        {/* --- Header --- */}
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #eee",
            py: 2,
            px: 3,
          }}
        >
          <Typography variant="h6" fontWeight="bold" color="primary">
            ✏️ Content Management System
          </Typography>
          <IconButton
            onClick={() => navigate(-1)}
            sx={{
              color: "#777",
              transition: "0.3s",
              "&:hover": { color: "black", transform: "rotate(90deg)" },
            }}
          >
            <CloseIcon fontSize="medium" />
          </IconButton>
        </DialogTitle>

        {/* --- Content --- */}
        <DialogContent
          dividers
          sx={{
            px: 3,
            py: 4,
            backgroundColor: "#fafafa",
          }}
        >
          {loading ? (
            <Box
              sx={{
                textAlign: "center",
                py: 10,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <form id="cms-form" onSubmit={saveContent}>
              {/* --- Text Editor --- */}
              {(contentType === "T" || contentType == "A") && (
                <Fragment>
                  <Typography
                    variant="subtitle1"
                    mb={1}
                    fontWeight="600"
                    color="text.secondary"
                  >
                    Caption / Text
                  </Typography>
                  <TextField
                    multiline
                    rows={6}
                    value={text}
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your content..."
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: 2,
                      mb: 3,
                    }}
                  />
                </Fragment>
              )}

              {/* --- Image Editor --- */}
              {contentType === "I" && (
                <Fragment>
                  <Typography
                    variant="subtitle1"
                    mb={1}
                    fontWeight="600"
                    color="text.secondary"
                  >
                    Upload Image
                  </Typography>

                  {preview && (
                    <Box
                      sx={{
                        mb: 2,
                        textAlign: "center",
                        "& img": {
                          width: "100%",
                          maxWidth: "300px",
                          borderRadius: 2,
                          border: "1px solid #ddd",
                        },
                      }}
                    >
                      <img src={preview} alt="Preview" />
                    </Box>
                  )}

                  <Button
                    variant="outlined"
                    component="label"
                    fullWidth
                    sx={{
                      mb: 3,
                      py: 1.5,
                      borderRadius: 2,
                      fontWeight: "600",
                      borderColor: "#ccc",
                    }}
                  >
                    Choose File
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={handleImageChange}
                    />
                  </Button>
                </Fragment>
              )}
            </form>
          )}
        </DialogContent>

        {/* --- Footer --- */}
        <DialogActions
          sx={{
            px: 3,
            py: 2,
            borderTop: "1px solid #eee",
            backgroundColor: "#fafafa",
          }}
        >
          <Button
            onClick={() => navigate(-1)}
            sx={{
              color: "#555",
              textTransform: "none",
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            form="cms-form"
            variant="contained"
            sx={{
              px: 3,
              py: 1,
              textTransform: "none",
              borderRadius: 2,
            }}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* --- Snackbar --- */}
      <Snackbar
        open={alert.open}
        autoHideDuration={2000}
        onClose={() => setAlert({ ...alert, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity={alert.type}
          sx={{
            width: "100%",
            fontSize: "16px",
            borderRadius: "8px",
            fontWeight: 500,
          }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CmsEditor;
