import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Payment from './pages/Payment/Payment';
import Cart from './pages/Cart/Cart';
import Landing from './pages/Landing/Landing';
import Order from './pages/Order/Order';
import Auth from './pages/Auth/Auth';
import Results from './pages/Results/Results';
import ProductDetail from './pages/ProductDetail/ProductDetail';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Results />} />
      <Route path="/products/:productId" element={<ProductDetail />} />

      </Routes>
    </Router>
  );
}

export default Routing;
