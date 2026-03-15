import React, { useState } from 'react';
import { Menu, ShoppingCart, Search, ArrowLeft, Home, Compass, Heart, User, X, LogIn, ClipboardList, LayoutGrid, MessageCircle, BookOpen } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export const Header = ({ cartCount = 0 }: { cartCount?: number }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Sign up / Login', icon: <LogIn className="h-5 w-5" />, path: '/login' },
    { label: 'Wish list', icon: <Heart className="h-5 w-5" />, path: '/wishlist' },
    { label: 'Community', icon: <MessageCircle className="h-5 w-5" />, path: '/community' },
    { label: 'Care Guides', icon: <BookOpen className="h-5 w-5" />, path: '/guides' },
    { label: 'Track your order', icon: <ClipboardList className="h-5 w-5" />, path: '/order-status' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-6">
            <button 
              className="p-2 -ml-2 text-[#4a5d4e] hover:bg-gray-50 rounded-full transition-colors" 
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="hidden md:flex items-center gap-4">
              <Link to="/community" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#8b735b] transition-colors">Community</Link>
              <Link to="/guides" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#8b735b] transition-colors">Guides</Link>
            </div>
          </div>

          <div className="flex-grow text-center cursor-pointer" onClick={() => navigate('/')}>
            <h1 className="text-2xl font-serif font-bold tracking-tight text-[#4a5d4e] italic">
              Bird <span className="font-sans font-normal text-sm uppercase tracking-[0.3em] ml-1 opacity-60 not-italic">General</span>
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center mr-4">
              <div className="relative">
                <input
                  className="w-40 lg:w-64 pl-9 pr-4 py-2 bg-gray-50 border-none rounded-full text-xs focus:ring-1 focus:ring-[#8b735b] transition-all"
                  placeholder="Search gear..."
                  type="text"
                />
                <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-gray-400" />
              </div>
            </div>
            <button className="p-2 text-[#4a5d4e] relative hover:bg-gray-50 rounded-full transition-colors" onClick={() => navigate('/cart')}>
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#8b735b] text-white text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Side Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60]"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] bg-white z-[70] shadow-2xl p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-lg font-bold text-[#4a5d4e]">Menu</h2>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 text-gray-500">
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      navigate(item.path);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center gap-4 w-full p-3 rounded-xl hover:bg-gray-50 transition-colors text-[#4a5d4e] font-medium"
                  >
                    <span className="text-[#8b735b]">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </div>
              
              <div className="absolute bottom-10 left-6 right-6">
                <div className="p-4 bg-[#f9f7f2] rounded-2xl">
                  <p className="text-xs text-gray-500 mb-2">Need help?</p>
                  <p className="text-sm font-bold text-[#4a5d4e]">support@birdgeneral.com</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => (
  <footer className="bg-[#4a5d4e] text-white pt-12 pb-8 px-6">
    <div className="mb-10 text-center max-w-md mx-auto">
      <h4 className="text-lg font-bold mb-2 uppercase tracking-widest">Join the Flock</h4>
      <p className="text-gray-300 text-sm mb-6">Get 10% off your first order and stay updated on rare bird sightings.</p>
      <form className="flex flex-col gap-3">
        <input
          className="bg-white/10 border border-white/20 rounded-md py-3 px-4 text-white focus:ring-1 focus:ring-[#e3f2fd] focus:outline-none"
          placeholder="Email Address"
          type="email"
        />
        <button className="bg-[#8b735b] py-3 rounded-md font-bold hover:bg-opacity-90 uppercase tracking-wide transition-all">
          Subscribe
        </button>
      </form>
    </div>
    <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-400">
      <p>© 2024 Bird General Store. All rights reserved.</p>
      <div className="mt-2 space-x-3">
        <a href="#" className="hover:text-white">Privacy</a>
        <a href="#" className="hover:text-white">Terms</a>
        <a href="#" className="hover:text-white">Shipping</a>
      </div>
    </div>
  </footer>
);

export const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden">
      <div className="flex justify-around items-center h-16">
        <button 
          onClick={() => navigate('/')}
          className={`flex flex-col items-center gap-1 ${isActive('/') ? 'text-[#8b735b]' : 'text-gray-400'}`}
        >
          <Home className="h-6 w-6" />
          <span className="text-[10px] font-medium">Home</span>
        </button>
        <button 
          onClick={() => navigate('/')}
          className={`flex flex-col items-center gap-1 ${isActive('/categories') ? 'text-[#8b735b]' : 'text-gray-400'}`}
        >
          <LayoutGrid className="h-6 w-6" />
          <span className="text-[10px] font-medium">Categories</span>
        </button>
        <button 
          onClick={() => navigate('/cart')}
          className={`flex flex-col items-center gap-1 ${isActive('/cart') ? 'text-[#8b735b]' : 'text-gray-400'}`}
        >
          <ShoppingCart className="h-6 w-6" />
          <span className="text-[10px] font-medium">Cart</span>
        </button>
        <button 
          onClick={() => navigate('/order-status')}
          className={`flex flex-col items-center gap-1 ${isActive('/order-status') ? 'text-[#8b735b]' : 'text-gray-400'}`}
        >
          <ClipboardList className="h-6 w-6" />
          <span className="text-[10px] font-medium">Orders</span>
        </button>
        <button 
          onClick={() => navigate('/login')}
          className={`flex flex-col items-center gap-1 ${isActive('/login') ? 'text-[#8b735b]' : 'text-gray-400'}`}
        >
          <User className="h-6 w-6" />
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </div>
    </nav>
  );
};
