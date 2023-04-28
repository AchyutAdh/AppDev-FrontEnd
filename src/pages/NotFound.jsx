import React from "react";
import { Box, Typography, Button } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url('/images/1c.png')",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "600px",
          padding: "40px",
          boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Typography variant="h4" sx={{ mb: 4 }}>
          404 Error - Page Not Found
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          We're sorry, the page you requested could not be found. Please check
          the URL and try again.
        </Typography>
        <Button variant="contained" href="/" sx={{ background: "#00000" }}>
          Go to Home Page
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
