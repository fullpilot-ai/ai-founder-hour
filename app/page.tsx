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
      <div className="min-h-screen bg-white flex items-center justify-center relative">
      
        {/* Success Content */}
        <div className="relative z-10 text-center max-w-md mx-auto px-6">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-black mb-4">You&apos;re In!</h1>
          <p className="text-gray-600 mb-6">
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
    <div className="bg-white">
      {/* Hero Section */}
      <div className="min-h-[80vh] flex items-center justify-center relative py-16">
        {/* Studio gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-white"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-200/40 via-gray-100/20 to-transparent"></div>
        
        {/* Diamond Pattern Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="diamond-pattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                <polygon points="12.5,3 22,12.5 12.5,22 3,12.5" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.15"/>
              </pattern>
              <radialGradient id="fade-gradient" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="white" stopOpacity="0"/>
                <stop offset="40%" stopColor="white" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="white" stopOpacity="0.8"/>
              </radialGradient>
            </defs>
            <rect width="1000" height="1000" fill="url(#diamond-pattern)" className="text-gray-300"/>
            <rect width="1000" height="1000" fill="url(#fade-gradient)"/>
          </svg>
        </div>

        {/* Animated Gradient Circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Circle 1 - Pink/Magenta */}
          <div 
            className="absolute w-80 h-80 rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(236, 72, 153, 0.1) 40%, transparent 70%)',
              top: '5%',
              right: '5%',
              animation: 'float1 8s ease-in-out infinite'
            }}
          ></div>
          
          {/* Circle 2 - Blue/Purple */}
          <div 
            className="absolute w-96 h-96 rounded-full opacity-25"
            style={{
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 80%)',
              bottom: '5%',
              left: '5%',
              animation: 'float2 10s ease-in-out infinite 2s'
            }}
          ></div>
          
          {/* Circle 3 - Purple Gradient */}
          <div 
            className="absolute w-72 h-72 rounded-full opacity-35"
            style={{
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.2) 30%, transparent 70%)',
              top: '50%',
              left: '2%',
              animation: 'float3 12s ease-in-out infinite 4s'
            }}
          ></div>
        </div>

        <style jsx>{`
          @keyframes float1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(-15px, 10px) scale(1.02); }
            50% { transform: translate(-8px, 20px) scale(1); }
            75% { transform: translate(-20px, 5px) scale(0.98); }
          }
          
          @keyframes float2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            30% { transform: translate(15px, -10px) scale(1.03); }
            60% { transform: translate(25px, -5px) scale(1); }
            80% { transform: translate(10px, -15px) scale(0.97); }
          }
          
          @keyframes float3 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            20% { transform: translate(20px, -10px) scale(1.01); }
            40% { transform: translate(15px, 15px) scale(1); }
            70% { transform: translate(25px, -5px) scale(0.99); }
          }
        `}</style>
        
        {/* Main Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-8">
          {/* Logo */}
          <div className="mb-10">
            <Image
              src="/logo-dark.png"
              alt="AI Founder Hour Logo"
              width={140}
              height={140}
              className="mx-auto"
            />
          </div>

          {/* Date Badge */}
          <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 mb-10">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-sm font-medium">Next Session: {getNextWednesday()} • 1-2 PM PT</span>
          </div>

          {/* Hero Text */}
          <h1 className="text-3xl md:text-5xl font-medium mb-6 text-black tracking-tight leading-[1.05] relative">
            Weekly Founder Meetups With <span className="font-bold inline-block px-3 py-1.5 rounded-xl bg-white/40 backdrop-blur-md border border-gray-200/50 text-gray-800 shadow-sm whitespace-nowrap transform -rotate-1">AI-Powered Matching</span>
          </h1>
          
          <p className="text-base text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto">
            AI-curated networking for founders. Smart matching replaces random breakouts, so you only connect with relevant people and can exit gracefully anytime.
          </p>

          {/* Email Form */}
          <div className="max-w-md mx-auto mb-6">
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black text-black placeholder-gray-400 text-base"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-black hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-colors text-base"
              >
                {isLoading ? 'Joining...' : 'Join Next Session'}
              </button>
            </form>
          </div>

          {/* Small Text */}
          <p className="text-sm text-gray-500">
            For Founders & Investors - Free to join • Every Wednesday at 1-2 Pacific
          </p>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="relative py-16 bg-black overflow-hidden">
        {/* Subtle Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        
        {/* Subtle Background Accent */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-96 h-96 rounded-full opacity-5"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
              top: '20%',
              right: '10%',
            }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Mission */}
            <div className="space-y-6 min-h-[500px] relative z-10">
              <div>
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/20">
                  <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                  <span className="text-xs font-medium text-gray-300">Our Philosophy</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-medium mb-4 leading-tight">
                  <span className="text-white">Move Freely Between </span>
                  <span className="text-gray-300 font-semibold">
                    Conversations That Matter
                  </span>
                </h2>
                
                <p className="text-white/80 text-base leading-relaxed mb-6 max-w-lg">
                  <span className="text-gray-300 font-medium">AI-curated rooms</span> mean you only connect with founders working on similar challenges. Skip the small talk, find your people, and leave politely when conversations aren&apos;t adding value.
                </p>
              </div>
              
              {/* Philosophy Accordion */}
              <div className="space-y-1.5">
                {/* Principle 1 */}
                <details className="group bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <summary className="flex items-center gap-3 cursor-pointer list-none p-3">
                    <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      1
                    </div>
                    <h3 className="text-sm font-semibold text-white group-open:text-gray-300 transition-colors">
                      Curated Rooms, Not Random Chaos
                    </h3>
                    <div className="ml-auto w-4 h-4 text-white/60 group-open:rotate-180 transition-transform flex-shrink-0">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-3 pb-3 text-white/70 leading-relaxed pl-9 text-xs">
                    Users are offered 2–3 room choices per round — not 10. Each room is a thematic, high-context space curated specifically to match your goals and filter for relevant participants.
                  </div>
                </details>

                {/* Principle 2 */}
                <details className="group bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <summary className="flex items-center gap-3 cursor-pointer list-none p-3">
                    <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      2
                    </div>
                    <h3 className="text-sm font-semibold text-white group-open:text-gray-300 transition-colors">
                      Move Freely Between Conversations
                    </h3>
                    <div className="ml-auto w-4 h-4 text-white/60 group-open:rotate-180 transition-transform flex-shrink-0">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-3 pb-3 text-white/70 leading-relaxed pl-9 text-xs">
                    No one is forced into a room, no one is stuck in one. Users move between rooms via a personalized web-based selector. It feels like choosing your own table at a founder dinner.
                  </div>
                </details>

                {/* Principle 3 */}
                <details className="group bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <summary className="flex items-center gap-3 cursor-pointer list-none p-3">
                    <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      3
                    </div>
                    <h3 className="text-sm font-semibold text-white group-open:text-gray-300 transition-colors">
                      AI Finds Your Perfect Match
                    </h3>
                    <div className="ml-auto w-4 h-4 text-white/60 group-open:rotate-180 transition-transform flex-shrink-0">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-3 pb-3 text-white/70 leading-relaxed pl-9 text-xs">
                    Room menus are enriched with personalized recommendations and social context. The AI explains specifically why you should consider joining based on your profile and goals.
                  </div>
                </details>

                {/* Principle 4 */}
                <details className="group bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <summary className="flex items-center gap-3 cursor-pointer list-none p-3">
                    <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      4
                    </div>
                    <h3 className="text-sm font-semibold text-white group-open:text-gray-300 transition-colors">
                      Leave Anytime, No Awkwardness
                    </h3>
                    <div className="ml-auto w-4 h-4 text-white/60 group-open:rotate-180 transition-transform flex-shrink-0">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-3 pb-3 text-white/70 leading-relaxed pl-9 text-xs">
                    Leaving a room is normalized and expected. Users exit with a click, not an apology. Leaving isn&apos;t a failure — it&apos;s how the system is supposed to work.
                  </div>
                </details>

                {/* Principle 5 */}
                <details className="group bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <summary className="flex items-center gap-3 cursor-pointer list-none p-3">
                    <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      5
                    </div>
                    <h3 className="text-sm font-semibold text-white group-open:text-gray-300 transition-colors">
                      Quick Ratings Improve Future Sessions
                    </h3>
                    <div className="ml-auto w-4 h-4 text-white/60 group-open:rotate-180 transition-transform flex-shrink-0">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-3 pb-3 text-white/70 leading-relaxed pl-9 text-xs">
                    After each room, users can optionally provide a quick star rating. This simple feedback helps improve future room recommendations without creating unnecessary friction.
                  </div>
                </details>
              </div>
            </div>

            {/* Right Side - Table Rooms Illustration */}
            <div className="flex justify-center lg:justify-end items-center min-h-[500px]">
              <svg width="450" height="450" viewBox="0 0 300 300" className="text-white w-full max-w-lg mt-8">
                
                {/* Room 1 - Top Center */}
                <rect x="120" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8" rx="6"/>
                <circle cx="135" cy="35" r="2.5" fill="currentColor" opacity="0.7"/>
                <circle cx="165" cy="35" r="2.5" fill="currentColor" opacity="0.7"/>
                <circle cx="165" cy="65" r="2.5" fill="currentColor" opacity="0.7"/>
                <circle cx="135" cy="65" r="2.5" fill="currentColor" opacity="0.7"/>
                                 <text x="150" y="95" textAnchor="middle" className="text-xs fill-current opacity-60">Fundraising</text>
                 
                 {/* Room 2 - Top Right */}
                 <rect x="220" y="80" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8" rx="6"/>
                 <circle cx="235" cy="95" r="2.5" fill="currentColor" opacity="0.7"/>
                 <circle cx="265" cy="95" r="2.5" fill="currentColor" opacity="0.7"/>
                 <circle cx="265" cy="125" r="2.5" fill="currentColor" opacity="0.7"/>
                 <circle cx="235" cy="125" r="2.5" fill="currentColor" opacity="0.7"/>
                 <text x="250" y="155" textAnchor="middle" className="text-xs fill-current opacity-60">RAG</text>
                 
                 {/* Room 3 - Bottom Right */}
                 <rect x="180" y="180" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8" rx="6"/>
                 <circle cx="195" cy="195" r="2.5" fill="currentColor" opacity="0.7"/>
                 <circle cx="225" cy="195" r="2.5" fill="currentColor" opacity="0.7"/>
                 <circle cx="225" cy="225" r="2.5" fill="currentColor" opacity="0.7"/>
                 <circle cx="195" cy="225" r="2.5" fill="currentColor" opacity="0.7"/>
                 <text x="210" y="255" textAnchor="middle" className="text-xs fill-current opacity-60">New Models</text>
                 
                 {/* Room 4 - Bottom Left */}
                 <rect x="60" y="180" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8" rx="6"/>
                 <circle cx="75" cy="195" r="2.5" fill="currentColor" opacity="0.7"/>
                 <circle cx="105" cy="195" r="2.5" fill="currentColor" opacity="0.7"/>
                 <circle cx="105" cy="225" r="2.5" fill="currentColor" opacity="0.7"/>
                 <circle cx="75" cy="225" r="2.5" fill="currentColor" opacity="0.7"/>
                 <text x="90" y="255" textAnchor="middle" className="text-xs fill-current opacity-60">Go-to-Market</text>
                 
                 {/* Room 5 - Left Center */}
                 <rect x="20" y="80" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8" rx="6"/>
                 <circle cx="35" cy="95" r="2.5" fill="currentColor" opacity="0.7"/>
                 <circle cx="65" cy="95" r="2.5" fill="currentColor" opacity="0.7"/>
                 <circle cx="65" cy="125" r="2.5" fill="currentColor" opacity="0.7"/>
                 <circle cx="35" cy="125" r="2.5" fill="currentColor" opacity="0.7"/>
                 <text x="50" y="155" textAnchor="middle" className="text-xs fill-current opacity-60">MCP</text>
                
                {/* Center "You" indicator */}
                <circle cx="150" cy="150" r="8" fill="currentColor"/>
                <text x="150" y="175" textAnchor="middle" className="text-xs fill-current font-medium">You</text>
                
                {/* Circular arrow path around rooms */}
                <path 
                  d="M 150 85 A 65 65 0 0 1 215 150 A 65 65 0 0 1 150 215 A 65 65 0 0 1 85 150 A 65 65 0 0 1 150 85" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  opacity="0.3" 
                  strokeDasharray="3,3"
                />
                
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* How It Actually Works Section */}
      <div className="relative py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-black mb-4">
              How It Actually Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real founders. Real conversations. Real results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center group">
              {/* Glass Square Container */}
              <div className="relative mb-8 mx-auto w-32 h-32 group-hover:scale-105 transition-all duration-500">
                {/* Subtle shadow */}
                <div className="absolute inset-0 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 bg-gray-400"></div>
                
                {/* Main container */}
                <div className="relative w-full h-full bg-black rounded-xl shadow-2xl border border-gray-800 flex items-center justify-center overflow-hidden transform rotate-2 group-hover:rotate-3 transition-transform duration-500">
                  
                  {/* User Profile Icon */}
                  <svg className="w-12 h-12 text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Analyzes Your Profile</h3>
              <p className="text-gray-600 leading-relaxed">
                Tell us what you&apos;re working on, what challenges you&apos;re facing, and who you want to meet. Takes 2 minutes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              {/* Glass Square Container */}
              <div className="relative mb-8 mx-auto w-32 h-32 group-hover:scale-105 transition-all duration-500">
                {/* Subtle shadow */}
                <div className="absolute inset-0 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 bg-gray-400"></div>
                
                {/* Main container */}
                <div className="relative w-full h-full bg-black rounded-xl shadow-2xl border border-gray-800 flex items-center justify-center overflow-hidden transform -rotate-2 group-hover:-rotate-3 transition-transform duration-500">
                  
                  {/* Grid/Options Icon */}
                  <svg className="w-12 h-12 text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get 3 Room Options</h3>
              <p className="text-gray-600 leading-relaxed">
                Every 30 minutes, choose from 3 curated rooms based on your goals. See who&apos;s in each and what you have in common before you join.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              {/* Glass Square Container */}
              <div className="relative mb-8 mx-auto w-32 h-32 group-hover:scale-105 transition-all duration-500">
                                {/* Subtle shadow */}
                <div className="absolute inset-0 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 bg-gray-400"></div>
                
                {/* Main container */}
                <div className="relative w-full h-full bg-black rounded-xl shadow-2xl border border-gray-800 flex items-center justify-center overflow-hidden transform rotate-1 group-hover:rotate-2 transition-transform duration-500">
                  
                  {/* Chat/Connection Icon */}
                  <svg className="w-12 h-12 text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect & Move On</h3>
              <p className="text-gray-600 leading-relaxed">
                Have focused conversations with relevant founders. Leave when you want. Move to better rooms instantly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 bg-black overflow-hidden">
        {/* Grid Background */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.5) 100%),
              url("data:image/svg+xml,%3csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3e%3cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23374151' stroke-width='0.8'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")
            `,
            backgroundSize: '20px 20px, 20px 20px',
            backgroundPosition: '0 0, 0 0',
            transform: 'rotate(12deg) scale(1.5)',
            transformOrigin: 'center'
          }}
        ></div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            {/* Arrow Icon */}
            <div className="mb-6">
              <Image
                src="/arrow-icon.png"
                alt="Arrow Icon"
                width={64}
                height={64}
                className="opacity-100 brightness-0 invert"
              />
            </div>

            <h2 className="text-4xl md:text-5xl font-medium text-white mb-8 leading-tight">
              Join The Table. <span className="block">Become A Member Today.</span>
            </h2>

            {/* Email Signup Form */}
            <div className="max-w-md mb-8">
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-700 bg-black text-white rounded-lg focus:outline-none focus:border-white placeholder-gray-400 text-base"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold rounded-lg transition-colors text-base"
                >
                  {isLoading ? 'Joining...' : 'Join Next Session'}
                </button>
              </form>
            </div>

            <p className="text-gray-400 text-sm mb-8">
              {getNextWednesday()} • 1-2 PM Pacific
            </p>

            <p className="text-gray-500 text-sm">
              Contact: <a href="mailto:support@fullpilot.com" className="text-gray-400 hover:text-white transition-colors">support@fullpilot.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
