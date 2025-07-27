// src/app/chat/page.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  typing?: boolean;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();

  // Advanced AI Response System
  const getAdvancedAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Company & Services Related
    if (input.includes('onepersonai') || input.includes('company') || input.includes('about')) {
      return `OnePersonAI™ is a cutting-edge AI company founded on the principle of personalized artificial intelligence. We believe in creating AI that truly understands and adapts to each individual user. Our mission is to bridge the gap between human creativity and artificial intelligence, making AI accessible, intuitive, and genuinely helpful for everyone. 🚀✨`;
    }
    
    if (input.includes('services') || input.includes('what can you do') || input.includes('capabilities')) {
      return `I offer a comprehensive suite of AI services including:\n\n🧠 **Intelligent Problem Solving** - Complex analysis and solutions\n💬 **Natural Conversations** - Human-like interactions\n✍️ **Content Creation** - Writing, editing, and creative assistance\n📊 **Data Analysis** - Insights and patterns recognition\n🎨 **Creative Support** - Brainstorming and ideation\n⚡ **Task Automation** - Streamlining your workflows\n\nWhat specific area would you like to explore?`;
    }
    
    // Greetings & Personality
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      const greetings = [
        `Hello there! 👋 Welcome to OnePersonAI™. I'm your advanced AI companion, designed to understand and assist you with remarkable precision. How can I make your day more productive?`,
        `Hi! 🌟 I'm thrilled to meet you! As OnePersonAI™, I'm here to provide intelligent, personalized assistance. What exciting challenge shall we tackle together today?`,
        `Hey! 🚀 Great to see you here! I'm OnePersonAI™ - your personal AI that adapts to your unique needs. Ready to explore what we can accomplish together?`
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    // Help & Support
    if (input.includes('help') || input.includes('support') || input.includes('assist')) {
      return `I'm here to provide comprehensive support! 🤝 As OnePersonAI™, I can help you with:\n\n📝 **Writing & Communication** - Emails, documents, creative content\n🔍 **Research & Analysis** - Finding information and insights\n💡 **Problem Solving** - Breaking down complex challenges\n🎯 **Planning & Organization** - Tasks, schedules, and strategies\n🧮 **Technical Support** - Code, calculations, and explanations\n\nJust tell me what you're working on, and I'll provide tailored assistance!`;
    }
    
    // Creative & Writing
    if (input.includes('write') || input.includes('create') || input.includes('content') || input.includes('creative')) {
      return `Absolutely! 🎨✨ I excel at creative tasks and content creation. I can help you with:\n\n📖 **Writing Projects** - Articles, blogs, stories, scripts\n📧 **Professional Communication** - Emails, proposals, reports\n🎭 **Creative Content** - Poetry, fiction, marketing copy\n📊 **Technical Writing** - Documentation, guides, tutorials\n🎪 **Brainstorming** - Ideas, concepts, and creative solutions\n\nWhat type of content would you like to create together?`;
    }
    
    // Technical & Programming
    if (input.includes('code') || input.includes('programming') || input.includes('technical') || input.includes('develop')) {
      return `Perfect! 💻🚀 I'm well-versed in technical domains and can assist with:\n\n⚡ **Code Development** - Multiple programming languages\n🔧 **Debugging & Optimization** - Finding and fixing issues\n🏗️ **Architecture & Design** - System planning and structure\n📚 **Technical Documentation** - Clear, comprehensive guides\n🧪 **Testing & Validation** - Ensuring code quality\n🚀 **Deployment & DevOps** - Getting your projects live\n\nWhat technical challenge are you facing?`;
    }
    
    // Business & Strategy
    if (input.includes('business') || input.includes('strategy') || input.includes('marketing') || input.includes('growth')) {
      return `Excellent! 📈💼 I can provide strategic business insights including:\n\n🎯 **Strategic Planning** - Goals, roadmaps, and execution\n📊 **Market Analysis** - Trends, opportunities, and competition\n💡 **Innovation & Growth** - New ideas and expansion strategies\n🎪 **Marketing & Branding** - Campaigns, messaging, and positioning\n💰 **Financial Planning** - Budgets, forecasts, and optimization\n🤝 **Team & Operations** - Processes, workflows, and efficiency\n\nWhat aspect of your business would you like to explore?`;
    }
    
    // Personal Development
    if (input.includes('learn') || input.includes('skill') || input.includes('improve') || input.includes('personal')) {
      return `Wonderful! 🌱📚 Personal growth is one of my favorite topics. I can help you with:\n\n🎯 **Skill Development** - Learning new abilities and improving existing ones\n📖 **Knowledge Acquisition** - Understanding complex topics\n🗓️ **Goal Setting & Planning** - Creating actionable roadmaps\n💪 **Productivity & Habits** - Building effective routines\n🧘 **Mindset & Motivation** - Overcoming challenges and staying focused\n🎪 **Creative Expression** - Exploring your artistic side\n\nWhat area of personal development interests you most?`;
    }
    
    // Default intelligent response
    const intelligentResponses = [
      `That's a fascinating topic! 🤔💭 As OnePersonAI™, I love exploring new ideas with users. You mentioned: "${userInput}". Let me think about this from multiple angles and provide you with some insights. What specific aspect would you like to dive deeper into?`,
      `Interesting perspective! 🌟 I can see there are several ways to approach what you've shared: "${userInput}". Let me help you explore this further. What's the main goal or outcome you're hoping to achieve?`,
      `Thank you for sharing that! 🚀 As your AI companion, I'm always eager to help you think through complex topics. Regarding "${userInput}" - I'd love to provide more targeted assistance. Could you tell me a bit more about your specific needs or objectives?`
    ];
    
    return intelligentResponses[Math.floor(Math.random() * intelligentResponses.length)];
  };

  // Initialize with welcome message and handle URL query
  useEffect(() => {
    const query = searchParams.get('query');
    
    const welcomeMessage: Message = {
      id: 1,
      text: `Welcome to OnePersonAI™ Chat Platform! 🎉\n\nI'm your advanced AI assistant, designed to provide intelligent, personalized support across all areas of your work and life. Whether you need help with creative projects, technical challenges, business strategy, or personal development - I'm here to adapt to your unique needs.\n\n✨ **What makes me special?**\n• Deep understanding of context and nuance\n• Adaptive responses tailored to you\n• Comprehensive knowledge across domains\n• Creative and analytical problem-solving\n\nHow can I assist you today?`,
      sender: 'ai',
      timestamp: new Date()
    };
    
    setMessages([welcomeMessage]);
    
    // If there's a query from homepage, process it
    if (query) {
      setInput(query);
      setTimeout(() => {
        handleSendMessage(null, query);
      }, 1500);
    }
  }, [searchParams]);

  const handleSendMessage = async (e: React.FormEvent | null, directMessage?: string) => {
    if (e) e.preventDefault();
    
    const messageText = directMessage || input.trim();
    if (!messageText || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    if (!directMessage) setInput('');
    setIsLoading(true);
    setIsTyping(true);

    // Add typing indicator
    const typingMessage: Message = {
      id: Date.now() + 1,
      text: '',
      sender: 'ai',
      timestamp: new Date(),
      typing: true
    };
    setMessages(prev => [...prev, typingMessage]);

    // Simulate intelligent thinking time
    const thinkingTime = Math.random() * 2000 + 1000; // 1-3 seconds
    
    setTimeout(() => {
      const aiResponse = getAdvancedAIResponse(messageText);
      
      // Remove typing indicator and add real response
      setMessages(prev => {
        const withoutTyping = prev.filter(msg => !msg.typing);
        return [...withoutTyping, {
          id: Date.now() + 2,
          text: aiResponse,
          sender: 'ai',
          timestamp: new Date()
        }];
      });
      
      setIsLoading(false);
      setIsTyping(false);
    }, thinkingTime);
  };

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  // Quick suggestion prompts
  const quickSuggestions = [
    "What can OnePersonAI do?",
    "Help me write a professional email",
    "Explain a complex topic simply", 
    "Brainstorm creative ideas",
    "Solve a technical problem",
    "Plan my project strategy"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 backdrop-blur-sm border-b border-indigo-500/20 shadow-2xl sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                OnePersonAI™
              </h1>
              <p className="text-xs text-indigo-300">Chat Platform</p>
            </div>
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm text-indigo-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>AI Online</span>
            </div>
            <Link href="/">
              <button className="bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-400/30 text-indigo-200 px-4 py-2 rounded-full text-sm transition-all duration-300">
                ← Back to Home
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Messages Container */}
      <main className="flex-grow overflow-hidden">
        <div className="max-w-4xl mx-auto h-[calc(100vh-140px)] flex flex-col">
          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-6 space-y-6 custom-scrollbar">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div className={`max-w-3xl ${message.sender === 'user' ? 'order-1' : 'order-2'}`}>
                  {/* Message Bubble */}
                  <div className={`relative p-4 rounded-2xl shadow-xl ${
                    message.sender === 'user' 
                      ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white ml-12' 
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white mr-12'
                  }`}>
                    {/* Sender Info */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          message.sender === 'user' 
                            ? 'bg-white/20' 
                            : 'bg-gradient-to-br from-indigo-400 to-purple-500'
                        }`}>
                          {message.sender === 'user' ? 'U' : 'AI'}
                        </div>
                        <span className="text-xs font-medium opacity-75">
                          {message.sender === 'user' ? 'You' : 'OnePersonAI™'}
                        </span>
                      </div>
                      <span className="text-xs opacity-50">
                        {formatTime(message.timestamp)}
                      </span>
                    </div>
                    
                    {/* Message Content */}
                    {message.typing ? (
                      <div className="flex items-center space-x-2">
                        <span className="text-sm opacity-75">AI is thinking</span>
                        <div className="flex space-x-1">
                          {[0, 1, 2].map(i => (
                            <div
                              key={i}
                              className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"
                              style={{ animationDelay: `${i * 0.2}s` }}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-sm leading-relaxed whitespace-pre-line">
                        {message.text}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg ${
                  message.sender === 'user' 
                    ? 'bg-gradient-to-br from-indigo-500 to-purple-600 order-2 ml-3' 
                    : 'bg-gradient-to-br from-indigo-400 to-purple-500 order-1 mr-3'
                }`}>
                  {message.sender === 'user' ? '👤' : '🤖'}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Quick Suggestions */}
          {messages.length <= 1 && (
            <div className="px-6 pb-4">
              <div className="text-center mb-4">
                <p className="text-sm text-indigo-300 mb-3">✨ Try these suggestions:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {quickSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => setInput(suggestion)}
                      disabled={isLoading}
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full text-xs text-gray-200 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Input Area */}
      <footer className="bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-indigo-900/80 backdrop-blur-sm border-t border-indigo-500/20 sticky bottom-0">
        <div className="max-w-4xl mx-auto p-6">
          <form onSubmit={handleSendMessage} className="flex items-end space-x-4">
            <div className="flex-grow relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }}
                placeholder="Type your message to OnePersonAI™... (Press Enter to send, Shift+Enter for new line)"
                disabled={isLoading}
                rows={1}
                className="w-full p-4 pr-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/20 text-white placeholder-gray-300 disabled:opacity-50 resize-none transition-all duration-300"
                style={{ minHeight: '56px', maxHeight: '120px' }}
              />
              
              {/* Character count */}
              <div className="absolute bottom-2 right-16 text-xs text-gray-400">
                {input.length}/1000
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isLoading || !input.trim() || input.length > 1000}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-xl min-w-[56px]"
            >
              {isLoading ? (
                <svg className="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              )}
            </button>
          </form>
          
          {/* Footer Info */}
          <div className="flex items-center justify-between mt-4 text-xs text-indigo-300">
            <span>OnePersonAI™ - Advanced AI Assistant</span>
            <span>Secure • Private • Intelligent</span>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.5);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(99, 102, 241, 0.7);
        }
      `}</style>
    </div>
  );
}