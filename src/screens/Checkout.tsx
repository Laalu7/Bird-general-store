import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import { ArrowLeft, Truck, CreditCard, Lock, ShieldCheck, Leaf, Package2, HelpCircle, Wallet, Landmark } from 'lucide-react';
import { motion } from 'motion/react';

export const Checkout = () => {
  const navigate = useNavigate();
  const { cart, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<'shipping' | 'payment'>('shipping');
  
  const tax = subtotal * 0.08;
  const shipping = step === 'payment' ? 0 : 0;
  const total = subtotal + tax + shipping;

  const handlePlaceOrder = () => {
    navigate('/order-status');
    setTimeout(() => clearCart(), 100);
  };

  return (
    <div className="bg-[#f8f6f6] min-h-screen pb-12">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#ec5b13]/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-[#ec5b13]/10 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </button>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold tracking-tight">Bird General</h1>
              <p className="text-xs text-gray-500">Secure Checkout</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <div className="flex flex-col items-center">
              <span className={`text-xs font-semibold uppercase tracking-wider ${step === 'shipping' ? 'text-[#ec5b13]' : 'text-gray-400'}`}>Shipping</span>
              <div className={`h-1 w-12 mt-1 rounded-full ${step === 'shipping' ? 'bg-[#ec5b13]' : 'bg-gray-200'}`}></div>
            </div>
            <div className="flex flex-col items-center">
              <span className={`text-xs font-semibold uppercase tracking-wider ${step === 'payment' ? 'text-[#ec5b13]' : 'text-gray-400'}`}>Payment</span>
              <div className={`h-1 w-12 mt-1 rounded-full ${step === 'payment' ? 'bg-[#ec5b13]' : 'bg-gray-200'}`}></div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-7">
            {step === 'shipping' ? (
              <motion.section 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Truck className="h-6 w-6 text-[#ec5b13]" />
                    Shipping Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                      <input className="w-full h-12 bg-white border-gray-200 rounded-lg focus:ring-[#ec5b13] focus:border-[#ec5b13]" placeholder="John Doe" type="text" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Street Address</label>
                      <input className="w-full h-12 bg-white border-gray-200 rounded-lg focus:ring-[#ec5b13] focus:border-[#ec5b13]" placeholder="123 Nature Way" type="text" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">City</label>
                      <input className="w-full h-12 bg-white border-gray-200 rounded-lg focus:ring-[#ec5b13] focus:border-[#ec5b13]" placeholder="Portland" type="text" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">State</label>
                        <input className="w-full h-12 bg-white border-gray-200 rounded-lg focus:ring-[#ec5b13] focus:border-[#ec5b13]" placeholder="OR" type="text" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Zip Code</label>
                        <input className="w-full h-12 bg-white border-gray-200 rounded-lg focus:ring-[#ec5b13] focus:border-[#ec5b13]" placeholder="97201" type="text" />
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-200" />

                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Package2 className="h-6 w-6 text-[#ec5b13]" />
                    Shipping Method
                  </h2>
                  <div className="space-y-4">
                    <label className="relative flex items-center p-4 rounded-xl border-2 border-[#ec5b13] bg-[#ec5b13]/5 cursor-pointer">
                      <input checked className="text-[#ec5b13] focus:ring-[#ec5b13] h-4 w-4" name="shipping" type="radio" readOnly />
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between">
                          <span className="font-bold">Standard Shipping</span>
                          <span className="font-bold">$0.00</span>
                        </div>
                        <p className="text-sm text-gray-500">Arrives in 5-7 business days</p>
                      </div>
                    </label>
                    <label className="relative flex items-center p-4 rounded-xl border-2 border-gray-200 hover:border-[#ec5b13]/50 transition-colors cursor-pointer">
                      <input className="text-[#ec5b13] focus:ring-[#ec5b13] h-4 w-4" name="shipping" type="radio" />
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between">
                          <span className="font-bold">Express Shipping</span>
                          <span className="font-bold">$14.99</span>
                        </div>
                        <p className="text-sm text-gray-500">Arrives in 1-2 business days</p>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="pt-6">
                  <button 
                    onClick={() => setStep('payment')}
                    className="w-full md:w-auto px-12 py-4 bg-[#ec5b13] text-white font-bold rounded-xl hover:bg-[#ec5b13]/90 transition-all shadow-lg shadow-[#ec5b13]/20"
                  >
                    Continue to Payment
                  </button>
                </div>
              </motion.section>
            ) : (
              <motion.section 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <CreditCard className="h-6 w-6 text-[#ec5b13]" />
                    <h2 className="text-2xl font-bold">Payment Information</h2>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Credit Card Details</h3>
                      <div className="space-y-4">
                        <label className="block">
                          <span className="text-sm font-medium mb-1.5 block">Card Number</span>
                          <div className="relative flex items-center">
                            <div className="absolute left-4 text-gray-400">
                              <CreditCard className="h-5 w-5" />
                            </div>
                            <input className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-gray-200 rounded-xl focus:ring-[#ec5b13] focus:border-[#ec5b13] transition-all" placeholder="0000 0000 0000 0000" type="text" />
                          </div>
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <label className="block">
                            <span className="text-sm font-medium mb-1.5 block">Expiry Date</span>
                            <input className="w-full px-4 py-3.5 bg-gray-50 border-gray-200 rounded-xl focus:ring-[#ec5b13] focus:border-[#ec5b13]" placeholder="MM/YY" type="text" />
                          </label>
                          <label className="block">
                            <span className="text-sm font-medium mb-1.5 block">CVV</span>
                            <div className="relative flex items-center">
                              <input className="w-full px-4 py-3.5 bg-gray-50 border-gray-200 rounded-xl focus:ring-[#ec5b13] focus:border-[#ec5b13]" placeholder="123" type="password" />
                              <div className="absolute right-4 text-gray-400 cursor-help">
                                <HelpCircle className="h-5 w-5" />
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input defaultChecked className="h-5 w-5 rounded border-gray-300 text-[#ec5b13] focus:ring-[#ec5b13]" type="checkbox" />
                        <span className="text-base font-normal text-gray-700 group-hover:text-gray-900">
                          Billing address is the same as shipping
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Other Payment Methods</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-3 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                      <Wallet className="h-5 w-5 text-gray-600" />
                      <span className="font-medium">Digital Wallet</span>
                    </button>
                    <button className="flex items-center justify-center gap-3 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                      <Landmark className="h-5 w-5 text-gray-600" />
                      <span className="font-medium">Bank Transfer</span>
                    </button>
                  </div>
                </div>

                <div className="pt-6">
                  <button 
                    onClick={handlePlaceOrder}
                    className="w-full md:w-auto px-12 py-4 bg-[#ec5b13] text-white font-bold rounded-xl hover:bg-[#ec5b13]/90 transition-all shadow-lg shadow-[#ec5b13]/20 flex items-center justify-center gap-2"
                  >
                    <Lock className="h-5 w-5" />
                    Place Order
                  </button>
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar Order Summary */}
          <div className="lg:col-span-5">
            <aside className="sticky top-32 space-y-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-6">Order Summary</h3>
                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="size-20 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold">{item.name}</h4>
                        <p className="text-xs text-gray-500">{item.category}</p>
                        <p className="text-sm font-bold mt-1">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold pt-3">
                    <span>Total</span>
                    <span className="text-[#ec5b13]">${total.toFixed(2)}</span>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="p-4 bg-[#ec5b13]/5 rounded-xl border border-[#ec5b13]/20 flex items-center gap-3">
                    <Leaf className="h-5 w-5 text-[#ec5b13]" />
                    <p className="text-xs font-medium text-gray-700">
                      Your order supports 1% for the Planet bird conservation efforts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 text-gray-400 text-xs">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1"><Lock className="h-3 w-3" /> Secure Payment</span>
                  <span className="flex items-center gap-1"><ShieldCheck className="h-3 w-3" /> 30-Day Returns</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};
