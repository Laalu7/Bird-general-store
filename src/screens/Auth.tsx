import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff, ShoppingCart, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[#f8f6f6] min-h-screen flex flex-col max-w-[480px] mx-auto">
      <header className="flex items-center p-4 pb-2 justify-between">
        <button onClick={() => navigate(-1)} className="text-gray-900 flex size-12 items-center">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h2 className="text-gray-900 text-lg font-bold flex-1 text-center pr-12">Bird General</h2>
      </header>

      <div className="flex flex-col items-center px-4 pt-6 pb-2">
        <div className="w-16 h-16 bg-[#ec5b13] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#ec5b13]/20">
          <ShoppingCart className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-gray-900 text-[28px] font-bold leading-tight text-center">Welcome Back</h2>
        <p className="text-gray-600 text-sm text-center mt-2 px-8">
          Sign in to your account to track orders and save your favorite birding spots.
        </p>
      </div>

      <div className="flex flex-col gap-4 px-4 py-6">
        <div className="flex flex-col w-full">
          <label className="flex flex-col w-full">
            <p className="text-gray-800 text-sm font-medium pb-2">Email</p>
            <input 
              className="rounded-xl text-gray-900 focus:ring-2 focus:ring-[#ec5b13]/50 border border-gray-300 bg-white h-14 p-4 text-base" 
              placeholder="birdwatcher@example.com" 
              type="email" 
            />
          </label>
        </div>
        <div className="flex flex-col w-full">
          <label className="flex flex-col w-full">
            <p className="text-gray-800 text-sm font-medium pb-2">Password</p>
            <div className="flex w-full items-stretch rounded-xl overflow-hidden border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-[#ec5b13]/50">
              <input 
                className="flex w-full border-none bg-transparent h-14 p-4 text-base focus:ring-0" 
                placeholder="Enter your password" 
                type={showPassword ? 'text' : 'password'} 
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500 flex items-center justify-center px-4"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </label>
          <div className="flex justify-end mt-2">
            <a className="text-[#ec5b13] text-sm font-medium" href="#">Forgot password?</a>
          </div>
        </div>
        <div className="pt-2">
          <button 
            onClick={() => navigate('/')}
            className="flex w-full items-center justify-center rounded-xl h-12 px-5 bg-[#ec5b13] text-white text-base font-bold shadow-lg shadow-[#ec5b13]/20"
          >
            Sign In
          </button>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <button className="flex w-full items-center justify-center rounded-xl h-12 px-5 bg-white border border-gray-300 text-gray-700 text-base font-bold hover:bg-gray-50 transition-colors shadow-sm">
            <img src="https://www.google.com/favicon.ico" className="w-5 h-5 mr-2" alt="Google" />
            Continue with Google
          </button>
          <button className="flex w-full items-center justify-center rounded-xl h-12 px-5 bg-black text-white text-base font-bold hover:bg-gray-900 transition-colors">
            <span className="mr-2"></span>
            Continue with Apple
          </button>
        </div>
      </div>

      <div className="flex items-center px-4 py-4">
        <div className="flex-1 h-px bg-gray-300"></div>
        <p className="px-4 text-gray-500 text-sm font-bold">OR</p>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <div className="px-4 py-6 mb-10">
        <div className="bg-[#ec5b13]/5 border border-[#ec5b13]/20 rounded-xl p-6 flex flex-col items-center text-center">
          <div className="mb-3">
            <ShoppingCart className="h-8 w-8 text-[#ec5b13]" />
          </div>
          <h3 className="text-gray-900 text-lg font-bold mb-2">Checkout as Guest</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            No account? No problem. You can still checkout as a guest. We'll give you the option to create an account later.
          </p>
          <button 
            onClick={() => navigate('/checkout')}
            className="flex w-full items-center justify-center rounded-xl h-12 px-5 border-2 border-[#ec5b13] text-[#ec5b13] hover:bg-[#ec5b13]/5 text-base font-bold transition-colors"
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
};

export const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f8f6f6] min-h-screen flex flex-col max-w-[480px] mx-auto">
      <header className="flex items-center p-4 pb-2 justify-between">
        <button onClick={() => navigate(-1)} className="text-gray-900 flex size-12 items-center">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h2 className="text-lg font-bold flex-1 text-center pr-12">Create Account</h2>
      </header>

      <div className="px-4 py-3">
        <div 
          className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-[218px] shadow-lg" 
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFdLX2tToGoTGSJcaRpP913-qOA95JatDOgoGKn6GQi4y4gdgVfxPtoMB0PdxFCf9eL6G0Pm2f_L7A4Mc-jDd0Qn3wlPj9_1irQTTLSl_nInbgC4_nbRpE5V_TLhR46hi8ptvNuj1hvCfMdMz1elaMRFbCy8CF1AbIsypUv3t-d4NuFqwMgtg38NbZ_tZ4_acKbTWHlNcSuHqR4_GRXapSHaIJfLpnTcEg9fd4swBsCHtdRFoKka1q0y-byVpJ0LKL0CRObDmwNGQ")' }}
        >
        </div>
      </div>

      <div className="px-4 pt-6 pb-2">
        <h1 className="text-[32px] font-bold leading-tight">Join Bird General</h1>
        <p className="text-gray-600 mt-2">Start your journey into the wild today.</p>
      </div>

      <div className="flex flex-col gap-4 px-4 py-3">
        <label className="flex flex-col w-full">
          <p className="text-base font-medium pb-2">Full Name</p>
          <input className="rounded-xl text-gray-900 focus:ring-2 focus:ring-[#ec5b13]/50 border border-gray-300 bg-white h-14 p-4 text-base" placeholder="Enter your name" type="text" />
        </label>
        <label className="flex flex-col w-full">
          <p className="text-base font-medium pb-2">Email Address</p>
          <input className="rounded-xl text-gray-900 focus:ring-2 focus:ring-[#ec5b13]/50 border border-gray-300 bg-white h-14 p-4 text-base" placeholder="example@email.com" type="email" />
        </label>
        <label className="flex flex-col w-full">
          <p className="text-base font-medium pb-2">Password</p>
          <input className="rounded-xl text-gray-900 focus:ring-2 focus:ring-[#ec5b13]/50 border border-gray-300 bg-white h-14 p-4 text-base" placeholder="Create a password" type="password" />
        </label>

        <div className="pt-4">
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-[#ec5b13] hover:bg-[#ec5b13]/90 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all active:scale-[0.98]"
          >
            Create Account
          </button>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <div className="flex items-center gap-4 py-2">
            <div className="h-px flex-1 bg-gray-200"></div>
            <p className="text-sm text-gray-500 font-medium">Or sign up with</p>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          <button className="flex items-center justify-center gap-3 w-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-6 rounded-xl transition-all active:scale-[0.98]">
            <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
            <span>Sign up with Google</span>
          </button>
          <button className="flex items-center justify-center gap-3 w-full bg-black hover:bg-black/90 text-white font-semibold py-4 px-6 rounded-xl transition-all active:scale-[0.98]">
            <span></span>
            <span>Sign up with Apple</span>
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 pt-4 pb-8">
          <span className="text-gray-600">Already have an account?</span>
          <Link to="/login" className="text-[#ec5b13] font-bold hover:underline">Sign In</Link>
        </div>
      </div>
    </div>
  );
};
