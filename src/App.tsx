/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider, useCart } from './CartContext';
import { Header, Footer, BottomNav } from './components/Layout';
import { Home } from './screens/Home';
import { ProductDetail } from './screens/ProductDetail';
import { Cart } from './screens/Cart';
import { Checkout } from './screens/Checkout';
import { OrderStatus } from './screens/OrderStatus';
import { Login, Signup } from './screens/Auth';
import { Wishlist } from './screens/Wishlist';
import { Community } from './screens/Community';
import { Guides } from './screens/Guides';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const { totalItems } = useCart();
  const location = useLocation();
  
  // Hide header/footer on certain pages if needed
  const hideLayout = ['/login', '/signup', '/checkout', '/order-status'].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {!hideLayout && <Header cartCount={totalItems} />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-status" element={<OrderStatus />} />
          <Route path="/track-order" element={<OrderStatus />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/community" element={<Community />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      {!hideLayout && <Footer />}
      {!hideLayout && <BottomNav />}
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}

