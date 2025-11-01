import React, { useEffect, useState, Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Snackbar, Alert, CircularProgress } from "@mui/material";

const CmsEditor = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract query params from URL
  const query = new URLSearchParams(location.search);
  const contentId = query.get("contentId");
  const contentTextID = query.get("contentTextID");
  const contentType = query.get("contentType"); // "T" or "I"

  const [preview, setPreview] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [pageData, setPageData] = useState({});
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState({ open: false, type: "success", message: "" });

  // --- Load content from PHP API ---
  const loadContent = async () => {
    try {
      const res = await fetch(
        `https://skillglow.bexatm.com/ATM/ContentManageSysV1.php?contentId=${contentId}`
      );
      if (!res.ok) throw new Error("Failed to fetch content");
      const data = await res.json();
      setPageData(data);

      if (contentType === "T") {
        setText(data[contentTextID] || "");
      } else if (contentType === "I") {
        const imagePath = data[contentTextID] || "";
        if (imagePath) setPreview(`https://skillglow.bexatm.com${imagePath}`);
      }
    } catch (err) {
      console.error("Error loading content:", err);
      setAlert({ open: true, type: "error", message: "Error loading content." });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (contentId) loadContent();
  }, [contentId]);

  // --- Handle text change ---
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // --- Handle image upload preview ---
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setText(`/ATM/images/${file.name}`);
    }
  };

  // --- Save changes (text or image) ---
  const saveContent = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Update JSON content
      const res = await fetch(
        `https://skillglow.bexatm.com/ATM/ContentManageSysV1.php?contentId=${contentId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cmsTextID: contentTextID, cmsText: text }),
        }
      );

      if (!res.ok) throw new Error("Failed to save content");

      // Upload image if needed
      if (contentType === "I" && image) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("filePath", "/images/");
        await fetch("https://skillglow.bexatm.com/ATM/ImageUpload.php", {
          method: "POST",
          body: formData,
        });
      }

      // ✅ Success message and auto-navigation
      setAlert({ open: true, type: "success", message: "Content saved successfully!" });
      setTimeout(() => navigate(-1), 1000);
    } catch (err) {
      console.error("Error saving content:", err);
      setAlert({ open: true, type: "error", message: "Failed to save content." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{
        padding: "0",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            maxWidth: "700px",
            height: "90vh",
            overflowY: "auto",
            padding: "24px",
            borderRadius: "12px",
            position: "relative",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            Content Manager
          </h2>

          {loading ? (
            <div style={{ textAlign: "center", marginTop: "80px" }}>
              <CircularProgress />
            </div>
          ) : (
            <form onSubmit={saveContent}>
              {/* Text Editor */}
              {contentType === "T" && (
                <Fragment>
                  <label style={{ display: "block", marginBottom: "8px" }}>
                    Caption / Text
                  </label>
                  <textarea
                    value={text}
                    onChange={handleChange}
                    rows={6}
                    style={{
                      width: "100%",
                      padding: "8px",
                      border: "1px solid #ccc",
                      borderRadius: "6px",
                      marginBottom: "20px",
                      fontSize: "14px",
                    }}
                  />
                </Fragment>
              )}

              {/* Image Editor */}
              {contentType === "I" && (
                <Fragment>
                  <label style={{ display: "block", marginBottom: "8px" }}>
                    Upload Image
                  </label>
                  {preview && (
                    <div style={{ marginBottom: "10px" }}>
                      <img
                        src={preview}
                        alt="Preview"
                        style={{
                          width: "200px",
                          height: "auto",
                          borderRadius: "6px",
                          border: "1px solid #ddd",
                        }}
                      />
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ marginBottom: "20px" }}
                  />
                </Fragment>
              )}

              <button
                type="submit"
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "10px 16px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {loading ? "Saving..." : "Save"}
              </button>
            </form>
          )}

          <button
            onClick={() => navigate(-1)}
            style={{
              position: "absolute",
              top: "16px",
              right: "24px",
              background: "none",
              border: "none",
              fontSize: "24px",
              color: "#555",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>
      </div>

      {/* ✅ Snackbar Alert */}
      <Snackbar
        open={alert.open}
        autoHideDuration={2000}
        onClose={() => setAlert({ ...alert, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity={alert.type}
          sx={{ width: "100%", fontSize: "16px", borderRadius: "8px" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </section>
  );
};

export default CmsEditor;
