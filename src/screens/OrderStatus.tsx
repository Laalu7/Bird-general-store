import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Headphones, ArrowRight, UserPlus } from 'lucide-react';
import { motion } from 'motion/react';

export const OrderStatus = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f8f6f6] min-h-screen">
      <header className="flex items-center bg-[#f8f6f6] border-b border-[#ec5b13]/10 p-4 justify-between sticky top-0 z-10">
        <button onClick={() => navigate('/')} className="text-[#ec5b13] flex size-10 items-center justify-center rounded-full hover:bg-[#ec5b13]/10 transition-colors">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-gray-900 text-lg font-bold flex-1 text-center pr-10">Order Status</h1>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full pb-12">
        <section className="flex flex-col px-4 py-8">
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-full max-w-[400px] aspect-video rounded-xl overflow-hidden shadow-lg border border-[#ec5b13]/20">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img 
                alt="Order Success" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXwCKiurfUVJ-I836zoelFVluR22FI3QV7yqd4dL0fqc9kRIs3Uxu6mUdueTlBof2WHxsZ0Df-2BHRuD2di4Ulh80rXsfWLNxJ2m99UM3sU5tQ1X5rp-4IxIf9oqcLJbN1PVa1D_w4pSFoC4_UPqX5FMZhGe8ngQ5zU6k7UeJHYw0LSS8DJRaNsBqgaVSz-lgbUh8VMSOH3BI00p2CEmSFQKxPrnOhLuIAJUG9KBdByXtqGPDTAzPTCQyVifrVOC24Y9n5qqfqat4"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="bg-[#ec5b13] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Success</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 12 }}
                className="bg-[#ec5b13]/10 p-3 rounded-full"
              >
                <CheckCircle className="h-10 w-10 text-[#ec5b13]" />
              </motion.div>
              <h2 className="text-gray-900 text-2xl font-extrabold text-center">Your gear is on its way!</h2>
              <p className="text-gray-600 text-base text-center px-4">
                Thanks for choosing Bird General. We're getting your order ready for your next wild adventure.
              </p>
            </div>

            <div className="w-full flex flex-col gap-3 px-4">
              <button 
                onClick={() => navigate('/')}
                className="w-full items-center justify-center rounded-xl h-12 px-6 bg-[#ec5b13] text-white text-base font-bold transition-all hover:bg-[#ec5b13]/90 shadow-md"
              >
                Continue Shopping
              </button>
              <button className="w-full items-center justify-center rounded-xl h-12 px-6 border-2 border-[#ec5b13]/30 text-[#ec5b13] text-base font-bold hover:bg-[#ec5b13]/5">
                Track Shipment
              </button>
            </div>
          </div>
        </section>

        <div className="px-4 pb-8">
          <div className="bg-white border border-[#ec5b13]/10 rounded-xl overflow-hidden shadow-sm">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Order Number</p>
                  <p className="text-gray-900 text-xl font-bold">#BG-88291</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Estimated Delivery</p>
                  <p className="text-[#ec5b13] text-base font-semibold">Oct 24 - Oct 26</p>
                </div>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mb-6 overflow-hidden">
                <div className="h-full bg-[#ec5b13] w-1/3 rounded-full"></div>
              </div>
              <h3 className="text-gray-900 text-lg font-bold mb-4 border-b border-[#ec5b13]/10 pb-2">Order Summary</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 rounded-lg overflow-hidden shrink-0 size-16 border border-[#ec5b13]/5">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_7CkO1fZm2GoQT3tj87bM_pdXBqaqhReA8ST3Y2P24qPZj5zypzFt7QRmzBQStqRkyEpu5uy2pGbAQsdUBQFIMZDT2xRTA_ikdXfWwDm_A-WuvQpQR2_oqbHf6dEc50DUyZ1YoJqYmgB6-V0pArfUWrHvjTnAS_sI3LSuEItvMOjHHaQmBSbbG7ulVReMHxfpGp4-y485GFk-aIQ0YhhKkvodtYqk8iq_WlD65-ziaUKYynHhdEQQTKRb_QHnqfaOGKfJK3Mkd40" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 text-base font-medium line-clamp-1">Eagle Eye Binoculars</p>
                    <p className="text-gray-500 text-sm">Quantity: 1 • Professional Grade</p>
                  </div>
                  <div className="shrink-0">
                    <p className="text-gray-900 font-bold">$129.00</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#ec5b13]/10 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>$129.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-[#ec5b13] font-medium">Free</span>
                </div>
                <div className="flex justify-between text-gray-900 text-lg font-extrabold pt-2">
                  <span>Total Paid</span>
                  <span>$129.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 pb-8">
          <div className="bg-[#ec5b13]/5 border border-[#ec5b13]/20 rounded-xl p-6 flex items-center gap-4">
            <div className="bg-[#ec5b13]/20 p-3 rounded-full text-[#ec5b13]">
              <UserPlus className="h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-900 font-bold">Need help with your order?</p>
              <p className="text-gray-600 text-sm">Our outdoor experts are available 24/7 to assist you.</p>
              <a className="text-[#ec5b13] font-bold text-sm inline-flex items-center gap-1 mt-1" href="#">
                Contact Support <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="px-4">
          <div className="bg-white border border-[#ec5b13]/10 rounded-xl p-6 flex flex-col items-center gap-4 text-center shadow-sm">
            <div className="bg-[#ec5b13]/10 p-3 rounded-full text-[#ec5b13]">
              <UserPlus className="h-8 w-8" />
            </div>
            <div>
              <p className="text-gray-900 font-bold text-lg">Save your details for next time</p>
              <p className="text-gray-600 text-sm mt-1 px-4">
                Create an account to track orders easily and enjoy a faster checkout on your next adventure.
              </p>
            </div>
            <button 
              onClick={() => navigate('/signup')}
              className="w-full items-center justify-center rounded-xl h-12 px-6 border-2 border-[#ec5b13] text-[#ec5b13] text-base font-bold hover:bg-[#ec5b13] hover:text-white transition-all"
            >
              Create Account
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
