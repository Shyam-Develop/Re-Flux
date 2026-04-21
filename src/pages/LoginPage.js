import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Alert,
  IconButton,
  InputAdornment
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";


export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();

  const validate = () => {
    let temp = {};
    temp.username = username.trim() ? "" : "Username is required";
    temp.password = password.trim() ? "" : "Password is required";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleLogin = (e) => {
    e.preventDefault(); //IMPORTANT: prevent page reload
    setLoginError("");

    if (!validate()) return;
    if (username === "admin" && password === "R3flux@ch3nna!") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "admin");
      navigate("/");
    } else if (username === "user" && password === "user123") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "user");
      navigate("/");
    } else {
      setLoginError("Invalid username or password.");
    }
  };

  const [showPassword, setShowPassword] = useState(false);


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
        sx={{ padding: 4, borderRadius: 2, width: 400, textAlign: "center" }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, marginBottom: 2, color: "#00334E" }}
        >
          Login
        </Typography>

        {loginError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {loginError}
          </Alert>
        )}

        {/*  FORM START */}
        <Box component="form" onSubmit={handleLogin}>
          <TextField
            fullWidth
            variant="outlined"
            label="UserName"
            margin="normal"
            value={username}          // must be "" initially
            onChange={(e) => setUsername(e.target.value)}
            error={Boolean(errors.username)}
            helperText={errors.username}
          />


          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            label="Password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(errors.password)}
            helperText={errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    aria-label="toggle password visibility"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              marginTop: 2,
              backgroundColor: "#00334E",
              "&:hover": { backgroundColor: "#001F33" },
            }}
          >
            Login
          </Button>
        </Box>
        {/* ✅ FORM END */}
      </Paper>
    </Box>
  );
}
