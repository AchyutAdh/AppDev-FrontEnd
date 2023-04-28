import React, { useState } from "react";
import { Box, Button, Grid, Typography, TextField, Card } from "@mui/material";
import '../styles/register.css';

const Damage = () => {
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle damage report submission logic
    };
  
    return (
        <div style={{ backgroundImage: "url('/images/1c.png')", backgroundSize: 'cover', height: '100vh',  paddingTop: '17vh' }}>
            <div className="container" >
                <form onSubmit={handleSubmit}>
                    <Card sx={{ boxShadow: 4, padding: 3, }}>
                        <Typography variant="h4" sx={{mb: 4,}}>Damage Report</Typography>
                        <Box spacing={2} >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        name="description"
                                        label="Description"
                                        placeholder="Enter a brief description of the damage"
                                        fullWidth
                                        required
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="location"
                                        label="Location"
                                        placeholder="Enter the location of the damage"
                                        fullWidth
                                        required
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="amount"
                                        label="Amount"
                                        type="number"
                                        placeholder="Enter the estimated amount of damage"
                                        fullWidth
                                        required
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" sx={{background: '#000000'}}>
                                        Submit Report
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

export default Damage;
