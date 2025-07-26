// src/app/services/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import ServiceCard from '../../components/ServiceCard';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-8">
      <section className="max-w-6xl mx-auto py-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-12 text-indigo-300 animate-fade-in-down">
          Our Affordable Digital & AI Services
        </h1>
        <h3 className="text-xl md:text-2xl text-center mb-16 opacity-90 animate-fade-in-up">
          High-Quality Solutions Designed for Every Need and Budget, Powered by Akshat Raj&apos;s Expertise.
        </h3>

        {/* Web Presence & Design Services */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-indigo-200">Web Presence & Design Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title='"OnePage Express" Website'
              description="A professional single-page website (landing page) to establish your online presence. Mobile-friendly and ready in days."
              price="₹1499"
            />
            <ServiceCard
              title="Google My Business Optimization"
              description="Boost your local visibility on Google Maps & Search. We'll set up/optimize your profile, add photos, and highlight your services."
              price="₹599"
            />
            <ServiceCard
              title='YouTube "Click-Magnet" Thumbnails (Pack of 3)'
              description="Get 3 eye-catching, high-resolution thumbnails designed to increase your video's click-through rate."
              price="₹399"
            />
            <ServiceCard
              title='Instagram "Instant-Post" Design (Pack of 3)' 
              description="3 stunning, custom-designed Instagram post images to elevate your brand's social media presence."
              price="₹499"
            />
          </div>
        </div>

        {/* AI & Automation Services */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-indigo-200">AI & Automation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title='"AI Brainstorm Buddy" Prompt Pack (5 Prompts)'
              description="Receive 5 expertly crafted AI prompts to generate ideas, content outlines, or creative text for your specific needs."
              price="₹499"
            />
            <ServiceCard
              title='"AI Content Booster" Prompt (1 Customized)'
              description="One in-depth, tailored AI prompt for complex content generation – perfect for detailed articles, scripts, or email series drafts."
              price="₹799"
            />
            <ServiceCard
              title='"Basic Q&A Chatbot" (Website/WhatsApp)'
              description="A simple automated chatbot to answer 5-7 of your most common customer questions, available 24/7."
              price="₹1299"
            />
          </div>
        </div>

        {/* Content & Consulting Services */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-indigo-200">Content & Consulting Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title='Social Media "Bio Blast" Optimization'
              description="Get a powerful, keyword-rich, and engaging bio for your Instagram, LinkedIn, or Facebook profile that captures attention."
              price="₹299"
            />
            <ServiceCard
              title='"Content Idea Spark" (10 Ideas)'
              description="Receive 10 fresh, engaging content ideas tailored to your niche, perfect for blogs, videos, or social media campaigns."
              price="₹599"
            />
          </div>
        </div>

        {/* Call to Action at bottom */}
        <div className="text-center mt-20">
          <Link href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 text-lg">
            Get a Free Quote Today!
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
