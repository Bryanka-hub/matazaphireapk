'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import loadingAnimation from '@/components/loadingAnimation.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });


export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push('/auth/login');
    }, 4000); // 4 detik
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <Lottie animationData={loadingAnimation} loop={true} style={{ width: 180, height: 180 }} />
        <span className="mt-4 text-white text-xl font-semibold">Loading...</span>
      </div>
    );
  }
  
  return (
    <div className="w-full">
      <h2 className="text-4xl font-bold text-center mb-2 font-['Geist',sans-serif] text-white">Register</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 text-md text-gray-200 font-['Geist',sans-serif]" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            defaultValue="admin cyber"
            className="w-full px-4 py-3 rounded-xl border border-white/40 bg-black/30 text-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Your Name"
            autoComplete="name"
          />
        </div>
        <div>
          <label className="block mb-1 text-md text-gray-200 font-['Geist',sans-serif]" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            defaultValue="admin@gmail.com"
            className="w-full px-4 py-3 rounded-xl border border-white/40 bg-black/30 text-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="your@email.com"
            autoComplete="email"
          />
        </div>
        <div>
          <label className="block mb-1 text-md text-gray-200 font-['Geist',sans-serif]" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            defaultValue="----------------"
            className="w-full px-4 py-3 rounded-xl border border-white/40 bg-black/30 text-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="••••••••"
            autoComplete="current-password"
          />
        </div>
        <div className="flex items-center space-x-2">
          <input id="privacy" type="checkbox" className="w-5 h-5 accent-blue-500 rounded" />
          <label htmlFor="privacy" className="text-gray-200 text-sm">
            I accept that processing will take place in accordance with the notice and the{' '}
            <a href="#" className="font-bold underline text-white">Privacy Policy.</a>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-100 text-black py-3 rounded-xl font-bold text-2xl hover:bg-blue-200 transition mt-2 font-['Geist',sans-serif]"
        >
          Register
        </button>
      </form>
      <div className="mt-2 text-center text-gray-200 text-md">
        Already have an account ?{' '}
        <a href="/auth/login" className="font-bold text-white">
          Login
        </a>
      </div>
    </div>
  );
}