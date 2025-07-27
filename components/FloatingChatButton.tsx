// components/FloatingChatButton.tsx

'use client';

import Link from 'next/link';
import { useState } from 'react';

const FloatingChatButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="/chat">
      <div
        className="floating-chat-btn"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
          transition: 'all 0.3s ease',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          zIndex: 1000
        }}
      >
        <span style={{ fontSize: '24px', color: 'white' }}>💬</span>
        
        {/* Tooltip */}
        {isHovered && (
          <div style={{
            position: 'absolute',
            right: '70px',
            bottom: '10px',
            background: '#333',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '8px',
            fontSize: '14px',
            whiteSpace: 'nowrap',
            animation: 'fadeIn 0.3s ease'
          }}>
            Chat with OnePersonAI
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .floating-chat-btn:hover {
          box-shadow: 0 6px 25px rgba(102, 126, 234, 0.6);
        }
      `}</style>
    </Link>
  );
};

export default FloatingChatButton;

// इसे main layout में add करो:
// src/app/layout.tsx में:

/*
import FloatingChatButton from '../components/FloatingChatButton';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <FloatingChatButton /> {/* YE ADD KARO */}
    </>
  );
}