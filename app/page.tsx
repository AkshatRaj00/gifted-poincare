// src/app/page.tsx
"use client"; // Ye line sabse upar honi chahiye

import React, { useState, useEffect } from "react";
import WhatWeDo from "../components/WhatWeDo"; // Import WhatWeDo component
import WhyChooseUs from "../components/WhyChooseUs"; // Import WhyChooseUs component
import LoginModal from '../components/LoginModal'; // LoginModal import karo
import RegisterModal from '../components/RegisterModal'; // RegisterModal import karo

export default function HomePage() {
  const [greeting, setGreeting] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Login modal state
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false); // Register modal state

  useEffect(() => {
    const getDynamicGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return "Good Morning";
      if (hour < 18) return "Good Afternoon";
      return "Good Evening";
    };
    setGreeting(getDynamicGreeting());
  }, []);

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

        {/* Command Bar / AI Input Area */}
        <div className="relative w-full max-w-2xl mx-auto mb-12">
          <input
            type="text"
            placeholder={`Type your command: 'Schedule my meeting', 'Design a logo', 'Write an email'...`}
            className="w-full p-4 pl-12 pr-4 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm text-white placeholder-gray-300 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
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
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            Get Started Free
          </button>
          <button 
            onClick={() => setIsLoginModalOpen(true)} // Login modal open karega
            className="bg-transparent hover:bg-white hover:bg-opacity-20 border border-white text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            Login
          </button> {/* Login button add kiya hai */}
          <button className="bg-transparent hover:bg-white hover:bg-opacity-20 border border-white text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </section>

      {/* --- Naye Sections Yahan Se Shuru Hote Hain --- */}

      {/* What We Do Section */}
      <WhatWeDo />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* --- Naye Sections Yahan Khatam Hote Hain --- */}

      {/* Placeholder for other sections */}
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