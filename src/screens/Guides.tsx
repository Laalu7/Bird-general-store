import React, { useState } from 'react';
import { ArrowLeft, Search, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { GUIDES } from '../constants';

const CATEGORIES = ['All', 'Nutrition', 'Training', 'Health', 'Habitat'];

export const Guides = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredGuides = activeCategory === 'All' 
    ? GUIDES 
    : GUIDES.filter(g => g.category === activeCategory);

  return (
    <div className="bg-[#f8f6f6] min-h-screen pb-24">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="p-4 bg-white sticky top-0 z-10 shadow-sm">
          <div className="flex justify-center items-center mb-6">
            <h1 className="text-lg font-bold text-[#4a5d4e]">Bird Care Guide</h1>
          </div>

          <div className="relative mb-4">
            <input
              className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-2xl bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#8b735b] text-sm"
              placeholder="Search guides..."
              type="text"
            />
            <div className="absolute left-3 top-3.5 text-gray-400">
              <Search className="h-4 w-4" />
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat 
                    ? 'bg-[#8b735b] text-white' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Guides List */}
        <div className="p-4 space-y-4">
          {filteredGuides.map((guide) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-50 flex"
            >
              <div className="w-32 h-32 shrink-0">
                <img 
                  src={guide.image} 
                  alt={guide.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-[#8b735b] uppercase tracking-wider">
                      {guide.category}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400">
                      <Clock className="h-3 w-3" />
                      {guide.readTime}
                    </div>
                  </div>
                  <h3 className="font-bold text-sm text-[#221610] line-clamp-2 mb-1">
                    {guide.title}
                  </h3>
                  <p className="text-[10px] text-gray-500 line-clamp-1">
                    {guide.description}
                  </p>
                </div>
                <button className="flex items-center gap-1 text-[10px] font-bold text-[#8b735b] self-end">
                  Read More
                  <ChevronRight className="h-3 w-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
