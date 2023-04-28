import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Damage from "../pages/Damage";
import AddCar from "../pages/AddCar";
import Payment from "../pages/Payment";
import DashboardAdmin from "../pages/DashboardAdmin";
import LoginAdmin from "../pages/LoginAdmin";
import DashboardStaff  from "../pages/DashboardStaff";
import LoginStaff from "../pages/LoginStaff";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/damage" element={<Damage/>} />
      <Route path="/addcar" element={<AddCar/>} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/dashboard/admin" element={<DashboardAdmin/>} />
      <Route path="/dashboard/staff" element={<DashboardStaff/>} />
      <Route path="/login/admin" element={<LoginAdmin/>} />
      <Route path="/login/staff" element={<LoginStaff/>} />
    </Routes>
  );
};

export default Routers;
