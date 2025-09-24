// components/BrowseDialog.jsx
import React from "react";
import {
  Dialog,
  DialogContent,
  CardContent,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Box,
  Button,IconButton
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import UploadFileIcon from '@mui/icons-material/UploadFile';
// 👈 assuming you already have this component
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
const BrowseDialog = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "16px",
          height: "100vh", // fixed height
          maxHeight: "100vh", // prevent overflow beyond screen
        },
      }}
    >
      <DialogContent>
        <CardContent>
          <Typography variant="h6" sx={{ textAlign: "left" }} gutterBottom>
            Tell us what you need
          </Typography>

          {/* Company Name */}
          <Typography sx={{ textAlign: "left", fontSize: "15px", color: "#111" }}>
            Company Name *
          </Typography>
          <TextField placeholder="Ex: John" variant="outlined" fullWidth />

          {/* Contact Person */}
          <Typography
            sx={{
              textAlign: "left",
              fontSize: "15px",
              color: "#111",
              marginTop: 2,
            }}
          >
            Contact Person *
          </Typography>
          <TextField placeholder="Enter contact person" variant="outlined" fullWidth />

          {/* Phone */}
          <Typography
            sx={{
              textAlign: "left",
              fontSize: "15px",
              color: "#111",
              marginTop: 2,
            }}
          >
            Phone *
          </Typography>
          <TextField placeholder="Enter phone number" variant="outlined" fullWidth />

          {/* Email */}
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
          <TextField placeholder="example@gmail.com" variant="outlined" fullWidth />

          {/* Enquiry for */}
          <Typography
            sx={{
              textAlign: "left",
              fontSize: "15px",
              color: "#111",
              marginTop: 2,
            }}
          >
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

          {/* Message */}
          <Typography sx={{ textAlign: "left", fontSize: "15px", color: "#111", marginTop: 2 }}>
            Message
          </Typography>
          <TextField placeholder="Write your message" variant="outlined" fullWidth multiline minRows={3} />

          {/* Upload */}
          <Typography sx={{ textAlign: "left", fontSize: "15px", color: "#111", marginTop: 2 }}>
            Photos/Videos
          </Typography>
          <UploadBox />
        </CardContent>

        {/* Buttons */}
        <Box mt={3} display="flex" flexDirection="column" gap={2}>
          <Button
            variant="text"
            startIcon={<WhatsAppIcon sx={{ color: "#25D366" }} />}
            sx={{
              color: "black",
              textTransform: "none",
              fontWeight: 500,
              fontSize: "14px",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            Send on WhatsApp
          </Button>
          <Button fullWidth variant="contained" color="primary">
            Submit Message
          </Button>
        </Box>

        <Box mt={2}>
          <Button fullWidth variant="outlined">
            Continue to details
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default BrowseDialog;
