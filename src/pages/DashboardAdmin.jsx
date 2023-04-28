import React from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';


const DashboardAdmin = () => {

  const handleApprove = (requestId) => {
    // Handle approval of rental request with ID 'requestId' here
    console.log(`Rental request with ID ${requestId} approved.`);
  };

  const handleReject = (requestId) => {
    // Handle rejection of rental request with ID 'requestId' here
    console.log(`Rental request with ID ${requestId} rejected.`);
  };

  const handleAddStaff = () => {
    // Handle addition of new staff member here
    console.log(`New staff member added.`);
  };

  const handleRemoveStaff = (staffId) => {
    // Handle removal of staff member with ID 'staffId' here
    console.log(`Staff member with ID ${staffId} removed.`);
  };

  const handleEditCustomer = (customerId) => {
    // Handle editing of customer with ID 'customerId' here
    console.log(`Customer with ID ${customerId} edited.`);
  };

  const handleAddCar = () => {
    // Handle addition of new car to fleet here
    console.log(`New car added to fleet.`);
  };

  const handleEditCar = (carId) => {
    // Handle editing of car with ID 'carId' here
    console.log(`Car with ID ${carId} edited.`);
  };

  const handlePublishOffer = () => {
    // Handle publishing of special offer here
    console.log(`Special offer published.`);
  };

  const handleManageDamage = (damageId) => {
    // Handle management of car damage with ID 'damageId' here
    console.log(`Car damage with ID ${damageId} managed.`);
  };




  const handleSystemSettings = () => {
    // Handle system settings and configuration options here
    console.log(`System settings and configuration options updated.`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Cars Overview
            </Typography>
            <Typography variant="body1" gutterBottom>
              Total Cars Rented: 50
            </Typography>
            <Typography variant="body1" gutterBottom>
              Total Cars Available: 100
            </Typography>
            <Typography variant="body1" gutterBottom>
              Total Cars Under Maintenance: 10
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
          Status: Pending
        </Typography>
      </Paper>
      </Grid>

     <Grid item xs={12} md={6}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Staff Management
        </Typography>
        <Button variant="contained" color="primary" onClick={handleAddStaff} style={{ marginBottom: '10px' }}>
          Add Staff
        </Button>
        <Typography variant="body1" gutterBottom>
          Staff ID: 5678
        </Typography>
        <Typography variant="body1" gutterBottom>
          Staff Name: Jane Smith
        </Typography>
        <Button variant="outlined" onClick={() => handleRemoveStaff(5678)}>
          Remove Staff
        </Button>
      </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Customer Management
        </Typography>
        <Typography variant="body1" gutterBottom>
          Customer ID: 9876
        </Typography>
        <Typography variant="body1" gutterBottom>
          Customer Name: Mark Johnson
        </Typography>
        <Button variant="outlined" onClick={() => handleEditCustomer(9876)}>
          Edit Customer
        </Button>
      </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Fleet Management
        </Typography>
        <Button variant="contained" color="primary" onClick={handleAddCar} style={{ marginBottom: '10px' }}>
          Add Car
        </Button>
        <Typography variant="body1" gutterBottom>
          Car ID: 2468
        </Typography>
        <Typography variant="body1" gutterBottom>
          Car Model: Honda Civic
        </Typography>
        <Button variant="outlined" onClick={() => handleEditCar(2468)}>
          Edit Car
        </Button>
      </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Special Offers
        </Typography>
        <Button variant="contained" color="primary" onClick={handlePublishOffer} style={{ marginBottom: '10px' }}>
          Publish Offer
        </Button>
        <Typography variant="body1" gutterBottom>
          Offer: 10% Off on All Rentals
        </Typography>
        <Typography variant="body1" gutterBottom>
          Validity: 01/05/2022 to 31/05/2022pa
        </Typography>
      </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Car Damage Management
        </Typography>
        <Typography variant="body1" gutterBottom>
          Car Model: Toyota Cor
          </Typography>
        </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
      <Paper elevation={3} style={{ padding: '20px' }}>
     <Typography variant="h6" gutterBottom>
      Rental History
      </Typography>
      <Typography variant="body1" gutterBottom>
      Rental ID: 2468
      </Typography>
      <Typography variant="body1" gutterBottom>
        Customer Name: Mark Johnson
      </Typography>
      <Typography variant="body1" gutterBottom>
      Car Model: Honda Civic
      </Typography>
     <Typography variant="body1" gutterBottom>
      Rental Date: 01/05/2022
      </Typography>
      <Typography variant="body1" gutterBottom>
      Return Date: 08/05/2022
      </Typography>
      <Typography variant="body1" gutterBottom>
      Total Cost: $200
      </Typography>
      </Paper>
</Grid>
</Grid>
</div>
);
  }
export default DashboardAdmin;