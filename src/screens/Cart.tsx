import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import { Trash2, Minus, Plus, ArrowRight, ArrowLeft, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();
  
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
        <div className="bg-gray-100 p-6 rounded-full mb-4">
          <ShoppingBag className="h-12 w-12 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Your bag is empty</h2>
        <p className="text-gray-500 mb-6">Looks like you haven't added any gear yet.</p>
        <button 
          onClick={() => navigate('/')}
          className="bg-[#ec5b13] text-white px-8 py-3 rounded-xl font-bold"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f6f6] min-h-screen pb-32">
      <header className="flex items-center bg-[#f8f6f6] p-4 border-b border-gray-200 justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-gray-900">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-bold">Your Binocular Bag</h1>
        </div>
        <span className="text-xs font-medium bg-[#ec5b13]/10 text-[#ec5b13] px-2 py-1 rounded-full">
          {cart.length} Items
        </span>
      </header>

      <main className="max-w-2xl mx-auto w-full p-4 space-y-4">
        <AnimatePresence>
          {cart.map((item) => (
            <motion.div 
              key={item.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
            >
              <div 
                className="aspect-square bg-gray-100 rounded-lg w-24 h-24 shrink-0 overflow-hidden"
              >
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <p className="font-bold text-base leading-tight">{item.name}</p>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-[#ec5b13] transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-[#ec5b13] text-sm font-semibold mt-1">${item.price.toFixed(2)}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.category}</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-3 bg-gray-100 rounded-full px-2 py-1">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ec5b13] text-white shadow-sm"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Promo Code */}
        <div className="py-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-600 ml-1">Promo Code</label>
            <div className="flex gap-2">
              <input 
                className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ec5b13]/20 transition-all placeholder:text-gray-400" 
                placeholder="e.g. BIRDWATCHER"
              />
              <button className="bg-[#ec5b13]/10 text-[#ec5b13] font-bold px-6 py-3 rounded-xl hover:bg-[#ec5b13]/20 transition-colors text-sm">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="py-6 space-y-4 bg-gray-50/50 rounded-2xl p-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Shipping Estimate</span>
            <span className="text-emerald-600 font-medium">Calculated at next step</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Tax</span>
            <span className="font-medium">${tax.toFixed(2)}</span>
          </div>
          <div className="h-px bg-gray-200 my-2"></div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">Total</span>
            <span className="text-lg font-bold text-[#ec5b13]">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Action */}
        <div className="flex flex-col gap-4">
          <button 
            onClick={() => navigate('/checkout')}
            className="w-full bg-[#ec5b13] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#ec5b13]/20 hover:bg-[#ec5b13]/90 transition-all flex items-center justify-center gap-2"
          >
            <span>Proceed to Checkout</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          <button 
            onClick={() => navigate('/')}
            className="text-center text-[#ec5b13] font-semibold text-sm hover:underline"
          >
            Continue Shopping
          </button>
        </div>
      </main>
    </div>
  );
};
