import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import CartDrawer from './components/cart/CartDrawer';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Profile from './pages/profile/Profile';
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/Dashboard';
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
export function App() {
  const [cartOpen, setCartOpen] = useState(false);
  return <ThemeProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen transition-colors duration-300">
          <Routes>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/*" element={<AdminLayout>
                  <Routes>
                    <Route path="dashboard" element={<AdminDashboard />} />
                  </Routes>
                </AdminLayout>} />
            <Route path="*" element={<>
                  <Header onCartClick={() => setCartOpen(true)} />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/product/:id" element={<ProductDetail />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/checkout" element={<Checkout />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/faq" element={<FAQ />} />
                      <Route path="/auth/login" element={<Login />} />
                      <Route path="/auth/signup" element={<Signup />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/privacy" element={<Privacy />} />
                      <Route path="/terms" element={<Terms />} />
                    </Routes>
                  </main>
                  <Footer />
                  <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
                </>} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>;
}