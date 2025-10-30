import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleLogin = () => {
  if (username === "admin" && password === "admin123") {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", "admin");
    navigate("/"); // Go to home
  } else if (username === "user" && password === "user123") {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", "user");
    navigate("/"); // Go to home
  } else {
    console.log("Invalid credentials");
  }
};



  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 2,
          width: 400,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            marginBottom: 2,
            color: "#00334E",
          }}
        >
          Login
        </Typography>

        <TextField
          fullWidth
          label="Username"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            marginTop: 2,
            backgroundColor: "#00334E",
            "&:hover": { backgroundColor: "#001F33" },
          }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
}
