import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

const AddCar = () => {
  const [carName, setCarName] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carImage, setCarImage] = useState("");
  const [carList, setCarList] = useState([
    { id: 1, name: "Toyota", model: "Corolla" },
    { id: 2, name: "Honda", model: "Civic" },
    { id: 3, name: "BMW", model: "X5" },
  ]);

  const handleCarNameChange = (event) => {
    setCarName(event.target.value);
  };

  const handleCarModelChange = (event) => {
    setCarModel(event.target.value);
  };

  const handleCarImageChange = (event) => {
    setCarImage(event.target.value);
  };

  const handleAddCar = () => {
    const newCar = {
      id: carList.length + 1,
      name: carName,
      model: carModel,
    };
    setCarList([...carList, newCar]);
    setCarName("");
    setCarModel("");
  };

  const handleRemoveCar = (id) => {
    const newCarList = carList.filter((car) => car.id !== id);
    setCarList(newCarList);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <Card sx={{ boxShadow: 4 }}>
        <CardHeader title="Add Car" />
        <CardContent>
          <Box spacing={2}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="carName"
                  label="Car Name"
                  placeholder="Enter car name"
                  fullWidth
                  required
                  value={carName}
                  onChange={handleCarNameChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="carModel"
                  label="Car Model"
                  placeholder="Enter car model"
                  fullWidth
                  required
                  value={carModel}
                  onChange={handleCarModelChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="carImage"
                  label="Car Image"
                  placeholder="Enter car image URL"
                  fullWidth
                  required
                  value={carImage}
                  onChange={handleCarImageChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddCar}
                >
                  Add Car
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>

      <Divider style={{ margin: "2rem 0" }} />

      <Card sx={{ boxShadow: 4 }}>
        <CardHeader title="Car List" />
        <CardContent>
          <List>
            {carList.map((car) => (
              <ListItem key={car.id}>
                <ListItemText
                  primary={`${car.name} ${car.model}`}
                  secondary={`ID: ${car.id}`}
                />
                <ListItemSecondaryAction>
                  <IconButton
              onClick={() => handleRemoveCar(car.id)}
              edge="end"
            >
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  </CardContent>
</Card>
</div>
);
};
export default AddCar;