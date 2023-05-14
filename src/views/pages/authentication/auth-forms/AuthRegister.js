import React, { useState } from "react";
import { Box, Button, Grid, Modal, Typography, TextField, Card } from "@mui/material";
import FileUpload from "react-mui-fileuploader";
import '../styles/register.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [file, setFile] = useState(null);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [filesToUpload, setFilesToUpload] = useState([])

    const handleFilesChange = (files) => {
      // Update chosen files
      setFilesToUpload([ ...files ])
    };
  

  
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // handle file upload logic
    };
  
    return (
        <div style={{ backgroundImage: "url('/images/1c.png')", backgroundSize: 'cover', height: '100vh',  paddingTop: '17vh' }}>
        
        
        <div className="container" >

       
      <form onSubmit={handleSubmit}>
      
    <Card sx={{ boxShadow: 4, padding: 3,  }} >
    <Typography variant="h4" sx={{mb: 4,}}>Register</Typography>
    <Box spacing={2} >
      <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                name="Name"
                label="Name"
                placeholder="Enter your full name"
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="phonenumber"
                label="Phone Number"
                type="number"
                placeholder="Enter your Phone Number"
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
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
              <TextField
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
                fullWidth
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Grid>
        
         <Grid item xs={12}>
        
          <Button onClick={handleOpen} variant="outlined"sx={{color: '#000000', borderColor: '#000000'}}>Upload Document</Button>

          <Modal open={open}onClose={handleClose}aria-labelledby="modal-modal-title"aria-describedby="modal-modal-description">
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Upload Document <span>(Citizenship OR Driving License)</span>
            </Typography>
            <br></br>
            
            <FileUpload multiFile={true} title="" header="Drag to drop" onFilesChange={handleFilesChange} onContextReady={(context) => {}} />

            </Box>
        </Modal>

          </Grid>
        
      
        <Grid item xs={12}>
            <Button type="submit" variant="contained" sx={{background: '#000000'}}>
                Register
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
  
export default Register;