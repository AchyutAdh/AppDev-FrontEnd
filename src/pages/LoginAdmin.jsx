import React, { useState } from "react";
import { Box, Button, Grid, Modal, Typography, TextField, Card } from "@mui/material";

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic for admin
  };

  return (
    <div style={{ backgroundImage: "url('/images/1c.png')", backgroundSize: 'cover', height: '100vh',  paddingTop: '17vh' }}>
    <div className="container" style={{marginTop: '6%'}}>   
    <form onSubmit={handleSubmit}>
    <Card sx={{ boxShadow: 4, padding: 3 }}>
    <Typography variant="h4" sx={{mb: 4,}}>Admin Login</Typography>
    <Box spacing={2} >
      <Grid container spacing={2}>
      <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
    </Grid>
    <Grid item xs={12}>
              <TextField
                name="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
      
      <Grid item xs={12}>
            <Button type="submit" variant="contained" sx={{background: '#000000'}}>
                Login
            </Button>
        </Grid>

        </Grid>
        </Box>
        </Card>
      </form>
      </div>
      </div>
  );
};

export default LoginAdmin;
