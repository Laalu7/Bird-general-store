import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';

export const Wishlist = () => {
  const navigate = useNavigate();
  
  // Mock wishlist data - in a real app this would come from a context or backend
  const wishlistItems = PRODUCTS.slice(0, 3);

  return (
    <div className="bg-[#f9f7f2] min-h-screen pb-20">
      <div className="bg-white px-4 py-4 flex justify-center items-center border-b border-gray-100">
        <h1 className="text-xl font-bold text-[#4a5d4e]">My Wishlist</h1>
      </div>

      <div className="p-4">
        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {wishlistItems.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-4 rounded-2xl shadow-sm flex gap-4 items-center"
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-[#4a5d4e] leading-tight mb-1">{item.name}</h3>
                  <p className="text-[#8b735b] font-bold mb-2">${item.price.toFixed(2)}</p>
                  <button 
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="text-xs bg-[#4a5d4e] text-white px-3 py-1.5 rounded-full font-medium flex items-center gap-1.5 w-fit"
                  >
                    <ShoppingBag className="h-3.5 w-3.5" />
                    View Details
                  </button>
                </div>
                <button className="p-2 text-red-500">
                  <Heart className="h-6 w-6 fill-current" />
                </button>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-white p-6 rounded-full mb-4 shadow-sm">
              <Heart className="h-12 w-12 text-gray-300" />
            </div>
            <h2 className="text-lg font-bold text-[#4a5d4e] mb-2">Your wishlist is empty</h2>
            <p className="text-gray-500 text-sm mb-8 px-10">Save items you love to find them easily later.</p>
            <button 
              onClick={() => navigate('/')}
              className="bg-[#4a5d4e] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide"
            >
              Start Exploring
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
