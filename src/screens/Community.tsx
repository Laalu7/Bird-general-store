import React from 'react';
import { Star, MessageCircle, Heart, Share2, Camera, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const COMMUNITY_POSTS = [
  {
    id: 'p1',
    user: 'Alice Birdie',
    avatar: 'AB',
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30eba3?auto=format&fit=crop&q=80&w=800',
    caption: 'My new budgie is finally settling in! Look at that vibrant blue. 💙',
    likes: 124,
    comments: 12,
    time: '2h ago'
  },
  {
    id: 'p2',
    user: 'Mark Wings',
    avatar: 'MW',
    image: 'https://images.unsplash.com/photo-1444464666168-49d633b867ad?auto=format&fit=crop&q=80&w=800',
    caption: 'Caught this beautiful visitor at the bird bath today. The solar fountain works wonders!',
    likes: 89,
    comments: 5,
    time: '5h ago'
  }
];

export const Community = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f8f6f6] min-h-screen pb-24">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="p-4 flex justify-center items-center bg-white sticky top-0 z-10 shadow-sm relative">
          <h1 className="text-lg font-bold text-[#4a5d4e]">Community</h1>
          <button className="absolute right-4 p-2">
            <Camera className="h-6 w-6 text-[#8b735b]" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="p-6 bg-white mb-4">
          <div className="flex justify-around text-center">
            <div>
              <p className="text-2xl font-bold text-[#221610]">4.9</p>
              <div className="flex text-[#8b735b] mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
              </div>
              <p className="text-[10px] text-gray-500 uppercase">Average Rating</p>
            </div>
            <div className="w-px bg-gray-100" />
            <div>
              <p className="text-2xl font-bold text-[#221610]">12.4K</p>
              <p className="text-[10px] text-gray-500 uppercase mt-4">Happy Birders</p>
            </div>
            <div className="w-px bg-gray-100" />
            <div>
              <button className="bg-[#8b735b] text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-wider mt-2">
                Write a Review
              </button>
            </div>
          </div>
        </div>

        {/* Feed Section */}
        <div className="px-4 space-y-6">
          <h2 className="font-bold text-lg text-[#221610] mb-2">Bird Photos & Feedback</h2>
          {COMMUNITY_POSTS.map((post) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-50"
            >
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#8b735b]/10 flex items-center justify-center text-[#8b735b] font-bold">
                    {post.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{post.user}</p>
                    <p className="text-[10px] text-gray-400">{post.time}</p>
                  </div>
                </div>
                <button className="text-gray-400">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
              <div className="aspect-square">
                <img 
                  src={post.image} 
                  alt="Community" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {post.caption}
                </p>
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors">
                    <Heart className="h-5 w-5" />
                    <span className="text-xs font-bold">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 text-gray-500 hover:text-[#8b735b] transition-colors">
                    <MessageCircle className="h-5 w-5" />
                    <span className="text-xs font-bold">{post.comments}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
