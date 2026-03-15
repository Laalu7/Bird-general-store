import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS, REVIEWS } from '../constants';
import { useCart } from '../CartContext';
import { Star, ShoppingBag, Truck, ShieldCheck, ArrowLeft, Calendar, User, Heart, Utensils, Maximize, Thermometer, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) return <div className="p-10 text-center">Product not found</div>;

  const isBird = product.category === 'Birds';

  return (
    <div className="bg-[#f8f6f6] min-h-screen pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="p-4 flex justify-center items-center">
          <h1 className="text-lg font-bold text-[#4a5d4e]">
            {isBird ? 'Bird Details' : 'Product Details'}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 md:p-8">
          {/* Image Section */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square bg-white rounded-3xl overflow-hidden shadow-sm relative"
            >
              <img 
                alt={product.name} 
                className="w-full h-full object-cover" 
                src={product.image}
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                1 / 4
              </div>
            </motion.div>
            <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-20 h-20 shrink-0 rounded-2xl border-2 ${i === 1 ? 'border-[#8b735b]' : 'border-transparent'} overflow-hidden bg-white`}>
                  <img 
                    alt="Thumbnail" 
                    className="w-full h-full object-cover opacity-80" 
                    src={product.image}
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#8b735b] text-xs font-bold uppercase tracking-wider">IN STOCK</span>
              </div>
              <h2 className="text-3xl font-bold mb-1 text-[#221610]">{product.name}</h2>
              {product.scientificName && (
                <p className="text-gray-500 italic mb-4">{product.scientificName}</p>
              )}
              <p className="text-4xl font-bold text-[#221610] mb-6">${product.price.toFixed(2)}</p>
            </div>

            {/* Bird Traits */}
            {product.traits && (
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="bg-[#fdf9f0] p-4 rounded-2xl flex flex-col items-center text-center">
                  <Calendar className="h-5 w-5 text-[#8b735b] mb-2" />
                  <p className="text-[10px] text-gray-500 uppercase">Age</p>
                  <p className="font-bold text-sm">{product.traits.age}</p>
                </div>
                <div className="bg-[#fdf9f0] p-4 rounded-2xl flex flex-col items-center text-center">
                  <User className="h-5 w-5 text-[#8b735b] mb-2" />
                  <p className="text-[10px] text-gray-500 uppercase">Gender</p>
                  <p className="font-bold text-sm">{product.traits.gender}</p>
                </div>
                <div className="bg-[#fdf9f0] p-4 rounded-2xl flex flex-col items-center text-center">
                  <Heart className="h-5 w-5 text-[#8b735b] mb-2" />
                  <p className="text-[10px] text-gray-500 uppercase">Social</p>
                  <p className="font-bold text-sm">{product.traits.social}</p>
                </div>
              </div>
            )}

            {/* Care Instructions */}
            {product.careInstructions && (
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-5 w-5 text-[#8b735b]" />
                  <h3 className="font-bold text-lg">Care Instructions</h3>
                </div>
                <div className="space-y-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-50">
                  <div className="flex gap-4">
                    <div className="bg-[#fdf9f0] p-2 rounded-lg h-fit">
                      <Utensils className="h-5 w-5 text-[#8b735b]" />
                    </div>
                    <div>
                      <p className="font-bold text-sm mb-1">Diet</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{product.careInstructions.diet}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-[#fdf9f0] p-2 rounded-lg h-fit">
                      <Maximize className="h-5 w-5 text-[#8b735b]" />
                    </div>
                    <div>
                      <p className="font-bold text-sm mb-1">Cage Size</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{product.careInstructions.cageSize}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-[#fdf9f0] p-2 rounded-lg h-fit">
                      <Thermometer className="h-5 w-5 text-[#8b735b]" />
                    </div>
                    <div>
                      <p className="font-bold text-sm mb-1">Temperature</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{product.careInstructions.temperature}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mb-8">
              <h3 className="font-bold text-lg mb-2">About this {isBird ? 'Budgie' : 'Product'}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-auto">
              <button 
                onClick={() => navigate('/contact')}
                className="flex-1 bg-white border border-[#8b735b] text-[#8b735b] font-bold py-4 rounded-2xl transition-all hover:bg-gray-50"
              >
                Inquire Now
              </button>
              <button 
                onClick={() => addToCart(product)}
                className="flex-[1.5] bg-[#8b735b] text-white font-bold py-4 rounded-2xl transition-all hover:opacity-90 shadow-lg shadow-[#8b735b]/20"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
