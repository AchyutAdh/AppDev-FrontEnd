import React, { useState } from 'react';
import { Card, CardHeader, CardContent, TextField, Button } from '@mui/material';

const PaymentForm = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle payment submission here
    console.log('Payment submitted!');
  };

  return (
    <Card>
      <CardHeader title="Payment Information" />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <TextField
            required
            label="Name on Card"
            fullWidth
            value={name}
            onChange={(event) => setName(event.target.value)}
            margin="normal"
          />
          <TextField
            required
            label="Card Number"
            fullWidth
            value={cardNumber}
            onChange={(event) => setCardNumber(event.target.value)}
            margin="normal"
          />
          <TextField
            required
            label="Expiration Date (MM/YY)"
            fullWidth
            value={expiry}
            onChange={(event) => setExpiry(event.target.value)}
            margin="normal"
          />
          <TextField
            required
            label="CVV"
            fullWidth
            value={cvv}
            onChange={(event) => setCvv(event.target.value)}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit Payment
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PaymentForm;
