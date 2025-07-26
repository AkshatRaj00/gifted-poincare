// src/app/portfolio/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import ProjectCard from '../../components/ProjectCard';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-8">
      <section className="max-w-6xl mx-auto py-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-12 text-indigo-300 animate-fade-in-down">
          Our Work: See OnePersonAI in Action
        </h1>
        <h3 className="text-xl md:text-2xl text-center mb-16 opacity-90 animate-fade-in-up">
          A Glimpse into the Digital Magic We Create, Powered by Akshat Raj.
        </h3>

        <p className="text-lg text-center mb-12 max-w-4xl mx-auto opacity-90">
          As the driving force behind OnePersonAI, I, Akshat Raj, leverage my expertise in Full Stack Development and AI/ML to deliver impactful digital solutions. Here are some highlights of my work:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ProjectCard
            title="Multimodal AI Assistant"
            description="A revolutionary AI assistant accepting image, text, and voice inputs, built with React, Flask, and advanced AI models. Showcases seamless integration of AI with modern web technologies."
            githubLink="https://github.com/AkshatRaj00/Multimodal-AI-Assistant"
          />
          <ProjectCard
            title="AkshaBot Pro"
            description="A smart chatbot demonstrating advanced Natural Language Processing (NLP) capabilities for intelligent conversations and user interaction."
            githubLink="https://github.com/AkshatRaj00/AkshaBot-Pro"
          />
          <ProjectCard
            title="NextGen AI"
            description="A futuristic assistant project integrating multiple cutting-edge AI modules, designed for next-level automation and intelligence."
            githubLink="https://github.com/AkshatRaj00/NextGen-AI"
          />
          <ProjectCard
            title="AI Voice Assistant"
            description="A Python-based voice-controlled AI assistant that processes and responds to voice commands, showcasing basic AI automation."
            githubLink="https://github.com/AkshatRaj00/AIvoice-Assistant"
          />
          <ProjectCard
            title="Spam Detector"
            description="An effective Machine Learning project built to accurately identify and filter out spam messages, ensuring cleaner communication."
            githubLink="https://github.com/AkshatRaj00/Spam-Detector"
          />
        </div>

        <p className="text-lg text-center mt-8 opacity-80">
          *More portfolio items for website designs, thumbnails, and AI prompts will be added as we complete client projects.
        </p>

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

export default PortfolioPage;
