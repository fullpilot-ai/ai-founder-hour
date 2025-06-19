'use client';

import { useState } from 'react';
import Image from 'next/image';
import { submitEmail } from './actions';

// Function to get next Wednesday's date
function getNextWednesday() {
  const today = new Date();
  const daysUntilWednesday = (3 - today.getDay() + 7) % 7;
  const nextWednesday = new Date(today);
  nextWednesday.setDate(today.getDate() + (daysUntilWednesday === 0 ? 7 : daysUntilWednesday));
  
  return nextWednesday.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const formData = new FormData();
      formData.append('email', email);
      await submitEmail(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
              {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
        
        {/* Success Content */}
        <div className="relative z-10 text-center max-w-md mx-auto px-6">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-4">You&apos;re In!</h1>
          <p className="text-gray-400 mb-6">
            Check your email for confirmation and session details.
          </p>
          <p className="text-sm text-gray-500">
            We&apos;ll send you the Zoom link before the session.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-pink-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/logo-light.png"
            alt="AI Founder Hour Logo"
            width={120}
            height={120}
            className="mx-auto"
          />
        </div>

        {/* Date Badge */}
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-purple-300">Next Session: {getNextWednesday()} • 1-2 PM PT</span>
        </div>

        {/* Hero Text */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-indigo-300 bg-clip-text text-transparent">
          AI Founder Hour
        </h1>
        
        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
          AI-curated networking for founders. No random breakouts.<br />
          Just high-signal conversations with people working on what you&apos;re building.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all"
            >
              {isLoading ? 'Joining...' : 'Sign Up'}
            </button>
          </div>
        </form>

        {/* Small Text */}
        <p className="text-xs text-gray-600 mt-4">
          Free to join • No spam • Unsubscribe anytime
        </p>
      </div>
    </div>
  );
}
