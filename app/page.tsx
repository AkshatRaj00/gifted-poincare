// src/app/page.tsx
"use client"; // Ye line sabse upar honi chahiye

import React, { useState, useEffect } from "react";
import Link from "next/link"; // Next.js Link import karo
import WhatWeDo from "../components/WhatWeDo"; // Import WhatWeDo component
import WhyChooseUs from "../components/WhyChooseUs"; // Import WhyChooseUs component
import LoginModal from '../components/LoginModal'; // LoginModal import karo
import RegisterModal from '../components/RegisterModal'; // RegisterModal import karo

export default function HomePage() {
  const [greeting, setGreeting] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Login modal state
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false); // Register modal state
  const [commandInput, setCommandInput] = useState(""); // Command input state

  useEffect(() => {
    const getDynamicGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return "Good Morning";
      if (hour < 18) return "Good Afternoon";
      return "Good Evening";
    };
    setGreeting(getDynamicGreeting());
  }, []);

  // Command submit handler - Chat page pe redirect karega
  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commandInput.trim()) {
      // Command ke saath chat page pe redirect karo
      window.location.href = `/chat?query=${encodeURIComponent(commandInput)}`;
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-indigo-900 to-purple-900 text-white font-sans">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto py-20 px-4">
        {/* Dynamic Greeting - client-side par render hota hai */}
        {greeting && (
          <p className="text-xl md:text-2xl mb-4 opacity-80 animate-fade-in-down">
            {greeting}, Akshat!
          </p>
        )}
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in">
          OnePersonAI: <br className="md:hidden" /> Your Mind&apos;s Mirror.{" "}
          <span className="text-indigo-300">Authentic AI.</span>
        </h1>
        
        {/* Sub-headline */}
        <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-up">
          Unlock the power of AI that feels, heals, and empowers your every
          thought.
        </p>

        {/* Command Bar / AI Input Area - Ab ye functional hai */}
        <form onSubmit={handleCommandSubmit} className="relative w-full max-w-2xl mx-auto mb-12">
          <input
            type="text"
            value={commandInput}
            onChange={(e) => setCommandInput(e.target.value)}
            placeholder={`Type your command: 'Schedule my meeting', 'Design a logo', 'Write an email'...`}
            className="w-full p-4 pl-12 pr-16 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm text-white placeholder-gray-300 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          
          {/* Send Button */}
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
            disabled={!commandInput.trim()}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </button>
        </form>

        {/* Call to Action Buttons - Chat button add kiya */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            Get Started Free
          </button>
          
          {/* Chat AI Button - New! */}
          <Link href="/chat">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 flex items-center gap-2">
              💬 Chat with AI
            </button>
          </Link>
          
          <button 
            onClick={() => setIsLoginModalOpen(true)} // Login modal open karega
            className="bg-transparent hover:bg-white hover:bg-opacity-20 border border-white text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            Login
          </button>
          
          <button className="bg-transparent hover:bg-white hover:bg-opacity-20 border border-white text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>

        {/* Quick Chat Options */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <span className="text-sm text-gray-300 mr-2">Try:</span>
          {[
            "Hello OnePersonAI",
            "What can you do?",
            "Help me write an email",
            "Schedule my tasks"
          ].map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setCommandInput(suggestion)}
              className="px-4 py-2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full text-sm text-gray-200 hover:text-white transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </section>

      {/* AI Features Preview Section - New! */}
      <section className="w-full max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Experience OnePersonAI™ in Action
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Chat Feature */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-3">Intelligent Chat</h3>
            <p className="text-gray-300 mb-4">
              Have natural conversations with our advanced AI. Ask questions, get help, and explore ideas together.
            </p>
            <Link href="/chat">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-medium transition duration-300">
                Start Chatting →
              </button>
            </Link>
          </div>

          {/* Problem Solving */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-3">Problem Solving</h3>
            <p className="text-gray-300 mb-4">
              Get intelligent solutions for complex problems. Our AI analyzes and provides actionable insights.
            </p>
            <button 
              onClick={() => setCommandInput("Help me solve a problem")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition duration-300"
            >
              Get Help →
            </button>
          </div>

          {/* Creative Assistant */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-bold mb-3">Creative Assistant</h3>
            <p className="text-gray-300 mb-4">
              Boost your creativity with AI-powered writing, brainstorming, and content generation.
            </p>
            <button 
              onClick={() => setCommandInput("Help me be creative")}
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full font-medium transition duration-300"
            >
              Create Now →
            </button>
          </div>
        </div>
      </section>

      {/* --- Existing Sections --- */}
      <WhatWeDo />
      <WhyChooseUs />

      {/* Floating Chat Button - Always visible */}
      <Link href="/chat">
        <div className="fixed bottom-6 right-6 z-50">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white w-16 h-16 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group">
            <span className="text-2xl">💬</span>
            
            {/* Tooltip */}
            <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Chat with OnePersonAI
              <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
            </div>
          </button>
        </div>
      </Link>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-400 text-sm">
        <p>
          &copy; {new Date().getFullYear()} OnePersonAI. All rights reserved.
        </p>
      </footer>

      {/* Login and Register Modals */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        onRegisterClick={() => { setIsLoginModalOpen(false); setIsRegisterModalOpen(true); }}
      />
      <RegisterModal 
        isOpen={isRegisterModalOpen} 
        onClose={() => setIsRegisterModalOpen(false)} 
        onLoginClick={() => { setIsRegisterModalOpen(false); setIsLoginModalOpen(true); }}
      />
    </div>
  );
}