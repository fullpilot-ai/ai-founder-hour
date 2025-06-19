'use client';

import { useState } from 'react';

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

export default function SalesPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">You&apos;re In!</h2>
          <p className="text-green-700 mb-6">
            Thanks for signing up! We&apos;ll send you the Zoom link and session details soon.
          </p>
          <p className="text-sm text-green-600">
            Check your email for confirmation and session details.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-6">Join AI Founder Hour</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Connect with fellow founders in AI-curated networking sessions. 
          No random breakouts. Just high-signal conversations with people 
          working on what you&apos;re trying to accomplish.
        </p>
      </section>

      {/* Event Details */}
      <section className="bg-blue-50 border border-blue-200 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Next Session</h2>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-800 mb-2">
            {getNextWednesday()}
          </div>
          <div className="text-xl text-blue-700 mb-4">
            1:00 PM - 2:00 PM Pacific Time
          </div>
          <p className="text-blue-600 max-w-2xl mx-auto">
            AI-powered matching will connect you with 2-3 founders at your stage 
            working on similar challenges. Quality conversations, not random encounters.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Goal-Aligned Matching</h3>
          <p className="text-gray-600">
            Connect with founders solving similar problems at your stage
          </p>
        </div>
                 <div className="text-center p-6 border rounded-lg">
           <h3 className="text-xl font-semibold mb-2">Polite Exit Paths</h3>
           <p className="text-gray-600">
             Leave conversations gracefully when they&apos;re not a fit
           </p>
         </div>
        <div className="text-center p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Quality Filtering</h3>
          <p className="text-gray-600">
            Skip irrelevant conversations, avoid time-wasters
          </p>
        </div>
      </section>

      {/* Email Signup Form */}
      <section className="bg-gray-50 rounded-lg p-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Reserve Your Spot</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing Up...' : 'Join Next Session'}
            </button>
          </form>
          <p className="text-xs text-gray-500 text-center mt-4">
            Free to join. No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
} 