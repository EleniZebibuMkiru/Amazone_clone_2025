import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Payment from './pages/Payment/Payment';
import Cart from './pages/Cart/Cart';
import Landing from './pages/Landing/Landing';
import Order from './pages/Order/Order';
import Signup from './pages/Auth/Signup';
import Results from './pages/Results/Results';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Signup />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default Routing;
