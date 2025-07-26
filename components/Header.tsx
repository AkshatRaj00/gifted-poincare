// src/components/Header.tsx
'use client'; // Client Component

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from '../components/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../app/firebase/config';
import LoginModal from './LoginModal'; // LoginModal import karo
import RegisterModal from './RegisterModal'; // RegisterModal import karo

const Header = () => {
  const { currentUser, loading } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Login modal state
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false); // Register modal state

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully!');
    } catch (error: any) {
      console.error('Logout failed:', error);
      alert('Logout failed: ' + error.message);
    }
  };

  return (
    <header className="bg-indigo-950 text-white p-4 shadow-lg sticky top-0 z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo / Company Name */}
        <Link
          href="/"
          className="text-3xl font-bold text-indigo-300 hover:text-white transition-colors duration-300"
        >
          OnePersonAI
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-lg items-center">
          <Link
            href="/"
            className="hover:text-indigo-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="hover:text-indigo-300 transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="hover:text-indigo-300 transition-colors duration-300"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="hover:text-indigo-300 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-indigo-300 transition-colors duration-300"
          >
            Contact
          </Link>

          {loading ? ( // Loading state
            <span className="text-gray-400 text-sm ml-4">Loading...</span>
          ) : currentUser ? ( // Jab user logged in ho
            <div className="flex items-center space-x-4 ml-4">
              <span className="text-indigo-300 text-base font-medium">{currentUser.email}</span> {/* User ka email dikhao */}
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-full text-sm transition duration-300"
              >
                Logout
              </button>
            </div>
          ) : ( // Jab user logged out ho
            // YAHAN PAR AB LINK KI JAGAH BUTTON HOGA JO MODAL KHOLEGA
            <button 
              onClick={() => setIsLoginModalOpen(true)} // Login modal open karega
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-5 rounded-full transition duration-300 transform hover:scale-105 ml-4"
            >
              Login
            </button> 
          )}
        </div>

        {/* Call to Action Button - for larger screens */}
        <div className="hidden md:block"> 
          {!loading && !currentUser && ( // Jab user logged out ho
            <Link href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-5 rounded-full transition duration-300 transform hover:scale-105">
              Get a Quote
            </Link>
          )}
        </div>

        {/* Mobile Menu Icon - will implement later */}
        <div className="md:hidden">
          <button className="text-white text-2xl">☰</button>
        </div>
      </nav>

      {/* Login and Register Modals - HEADER COMPONENT MEIN RENDER KAR RAHE HAIN */}
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
    </header>
  );
};


export default Header;