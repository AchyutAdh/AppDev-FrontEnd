import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const DashboardStaff = () => {

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Staff Dashboard
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Cars Overview
            </Typography>
            <Typography variant="body1" gutterBottom>
              Total Cars Rented: 5
            </Typography>
            <Typography variant="body1" gutterBottom>
              Total Cars Available: 95
            </Typography>
            <Typography variant="body1" gutterBottom>
              Total Cars Under Maintenance: 0
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Rental Requests
            </Typography>
            <Typography variant="body1" gutterBottom>
              Request ID: 1234
            </Typography>
            <Typography variant="body1" gutterBottom>
              Customer Name: John Doe
            </Typography>
            <Typography variant="body1" gutterBottom>
              Car Model: Toyota Corolla
            </Typography>
            <Typography variant="body1" gutterBottom>
              Pickup Date: 10/05/202
            </Typography>
            <Typography variant="body1" gutterBottom>
              Return Date: 14/05/2022
            </Typography>
            <Typography variant="body1" gutterBottom>
              Status: Approved
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Manage Rentals
            </Typography>
            <Typography variant="body1" gutterBottom>
              Rental ID: 4321
            </Typography>
            <Typography variant="body1" gutterBottom>
              Customer Name: Jane Smith
            </Typography>
            <Typography variant="body1" gutterBottom>
              Car Model: Honda Civic
            </Typography>
            <Typography variant="body1" gutterBottom>
              Pickup Date: 15/05/2022
            </Typography>
            <Typography variant="body1" gutterBottom>
              Return Date: 20/05/2022
            </Typography>
            <Typography variant="body1" gutterBottom>
              Status: Pending Pickup
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Car Maintenance
            </Typography>
            <Typography variant="body1" gutterBottom>
              Car ID: 1357
            </Typography>
            <Typography variant="body1" gutterBottom>
              Car Model: Nissan Altima
            </Typography>
            <Typography variant="body1" gutterBottom>
              Last Maintenance Date: 01/04/2022
            </Typography>
            <Typography variant="body1" gutterBottom>
              Next Maintenance Due: 01/06/2022
            </Typography>
            <Typography variant="body1" gutterBottom>
            Status: Available
        </Typography>
      </Paper>
    </Grid>
  </Grid>
</div>
);
};

export default DashboardStaff;