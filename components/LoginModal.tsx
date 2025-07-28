// src/components/LoginModal.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../app/firebase/config';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterClick: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onRegisterClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // ***** YAHAN DHYAN DO *****
  // Agar modal open nahi hai toh kuch render mat karo
  if (!isOpen) return null; // <-- YE LINE BAHUT ZAROORI HAI

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onClose();
      router.push('/chat'); // Router ka proper use
      alert('Login Successful!');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      onClose();
      router.push('/chat'); // Router ka proper use
      alert('Login Successful with Google!');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-purple-800 p-8 rounded-lg shadow-xl w-full max-w-md relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white text-2xl hover:text-indigo-300"
        >
          &times;
        </button>
        <h2 className="text-3xl font-extrabold text-center mb-6 text-indigo-300">Login</h2>
        
        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        <form onSubmit={handleEmailLogin} className="space-y-4 mb-6">
          <div>
            <label htmlFor="login-email" className="block text-sm font-medium mb-1">Email:</label>
            <input
              type="email"
              id="login-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded-md bg-indigo-900 border border-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="login-password" className="block text-sm font-medium mb-1">Password:</label>
            <input
              type="password"
              id="login-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded-md bg-indigo-900 border border-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 transform hover:scale-105"
          >
            Login with Email
          </button>
        </form>

        <div className="text-center text-sm opacity-80 mb-6">- OR -</div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 transform hover:scale-105"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12.0003 4.75C14.156 4.75 15.9383 5.438 17.3753 6.844L20.4853 3.734C18.261 1.703 15.3523 0.75 12.0003 0.75C7.294 0.75 3.39832 3.421 1.57932 7.234L5.67932 10.344C6.67182 8.016 9.07182 6.313 12.0003 6.313C12.8023 6.313 13.5683 6.477 14.2693 6.781L15.3283 5.867C14.508 5.445 13.5783 5.188 12.0003 5.188L12.0003 4.75Z"></path><path d="M22.0833 12.0003C22.0833 11.2343 21.9963 10.4923 21.8443 9.77332H12.0003V13.8673H17.7973C17.5873 14.9383 16.9453 15.8823 16.0393 16.5163L16.0393 19.6263C17.9253 18.0633 19.1673 15.4853 19.1673 12.0003L22.0833 12.0003Z"></path><path d="M5.67932 13.656C5.46932 13.0633 5.35932 12.5233 5.35932 12.0003C5.35932 11.4773 5.46932 10.9373 5.67932 10.3443L1.57932 7.23432C0.773318 8.82832 0.375318 10.3753 0.375318 12.0003C0.375318 13.6253 0.773318 15.1723 1.57932 16.7663L5.67932 13.656Z"></path><path d="M12.0003 19.167C9.07182 19.167 6.67182 17.464 5.67932 15.136L1.57932 18.246C3.39832 22.059 7.294 24.75 12.0003 24.75C15.3523 24.75 18.261 23.797 20.4853 21.766L17.3753 18.656C15.9383 20.063 14.156 20.75 12.0003 20.75L12.0003 19.167Z"></path></svg>
          Login with Google
        </button>

        <p className="text-center mt-6 text-sm">
          Don&apos;t have an account?{' '}
          <span onClick={onRegisterClick} className="text-indigo-300 hover:underline cursor-pointer">
            Register here.
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;