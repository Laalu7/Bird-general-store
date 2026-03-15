import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../constants';
import { useCart } from '../CartContext';
import { Plus, Zap, ShieldCheck, CheckCircle, MessageCircle, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export const Home = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="bg-[#f9f7f2]">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <img 
          alt="Bird watching in nature" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBCqaosMoSO44h0i1hbXZAixwgCZSAYCxZwaxLvgKK9w70TAjli__cVbgDbXotQqSZ1LdyJn47O8y-OsWaSrnFnxtU-zg8aVFWgXuq7hKgZtfglcIgfVq2ya3t1_pfugXRYC01zef4mQz2f4s7PJBx5vh97zxx6FtmXhABz4am1DxmhLDqGBLF3B24RNqFZvgWSqQ8W_Mc1KEg5Qy3Hcyus8HiUlZ6Ugw11c_oZCG2j7onhfzrGovmhwuvOB5L_NFdYEx2UMuMHi8"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white mb-4 drop-shadow-md"
          >
            Witness Nature in Detail
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white mb-6 text-lg"
          >
            Your local hub for all things birding.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onClick={() => {
              const el = document.getElementById('products');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#4a5d4e] text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all uppercase tracking-wide"
          >
            Shop Best Sellers
          </motion.button>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="grid grid-cols-4 gap-2 px-4 py-8 bg-white border-b border-gray-100">
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#e3f2fd] p-3 rounded-full mb-2 text-[#4a5d4e]">
            <Zap className="h-6 w-6" />
          </div>
          <span className="text-[10px] font-bold uppercase text-gray-600">Fast Shipping</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#e3f2fd] p-3 rounded-full mb-2 text-[#4a5d4e]">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <span className="text-[10px] font-bold uppercase text-gray-600">Expert Advice</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#e3f2fd] p-3 rounded-full mb-2 text-[#4a5d4e]">
            <CheckCircle className="h-6 w-6" />
          </div>
          <span className="text-[10px] font-bold uppercase text-gray-600">Quality Gear</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#e3f2fd] p-3 rounded-full mb-2 text-[#4a5d4e]">
            <Plus className="h-6 w-6" />
          </div>
          <span className="text-[10px] font-bold uppercase text-gray-600">Store Pickup</span>
        </div>
      </section>

      {/* Explore Collections */}
      <section className="py-10 px-4">
        <h3 className="text-xl font-bold text-[#4a5d4e] mb-6 text-center uppercase tracking-wider">Explore Collections</h3>
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          {CATEGORIES.map((cat) => (
            <div key={cat.name} className="flex flex-col items-center group cursor-pointer">
              <div className="w-full aspect-square rounded-2xl overflow-hidden mb-3 shadow-md transition-transform group-hover:scale-[1.02]">
                <img 
                  alt={cat.name} 
                  className="w-full h-full object-cover" 
                  src={cat.image}
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="font-semibold text-[#4a5d4e]">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community & Guides Quick Links */}
      <section className="py-10 px-4 bg-[#fdf9f0]">
        <div className="max-w-2xl mx-auto grid grid-cols-2 gap-4">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            onClick={() => navigate('/community')}
            className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 cursor-pointer flex flex-col items-center text-center"
          >
            <div className="bg-[#8b735b]/10 p-4 rounded-2xl mb-4">
              <MessageCircle className="h-8 w-8 text-[#8b735b]" />
            </div>
            <h4 className="font-bold text-[#4a5d4e] mb-1">Community</h4>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Photos & Feedback</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            onClick={() => navigate('/guides')}
            className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 cursor-pointer flex flex-col items-center text-center"
          >
            <div className="bg-[#8b735b]/10 p-4 rounded-2xl mb-4">
              <BookOpen className="h-8 w-8 text-[#8b735b]" />
            </div>
            <h4 className="font-bold text-[#4a5d4e] mb-1">Care Guides</h4>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Expert Bird Advice</p>
          </motion.div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-10 bg-white" id="products">
        <div className="px-4 mb-6 flex justify-between items-end max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-[#4a5d4e] uppercase tracking-wider">New Arrivals</h3>
          <a className="text-sm font-medium text-[#8b735b] border-b border-[#8b735b]" href="#">View All</a>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 px-4 max-w-2xl mx-auto">
          {PRODUCTS.map((product) => (
            <motion.div 
              key={product.id} 
              className="flex flex-col group"
              whileHover={{ y: -5 }}
            >
              <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3 cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
                <img 
                  alt={product.name} 
                  className="w-full h-full object-cover" 
                  src={product.image}
                  referrerPolicy="no-referrer"
                />
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="absolute bottom-2 right-2 bg-[#4a5d4e] text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              <h4 className="text-sm font-medium text-gray-900 leading-tight mb-1">{product.name}</h4>
              <p className="text-[#8b735b] font-bold">${product.price.toFixed(2)}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
