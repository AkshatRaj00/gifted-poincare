// src/components/WhatWeDo.tsx
import React from "react";

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-20 px-4 bg-indigo-900 text-white">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
        Our Core Strengths
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="bg-purple-800 p-6 rounded-lg shadow-xl transform transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-bold mb-3">Smart Web Solutions</h3>
          <p className="opacity-90">
            From single-page websites to dynamic web apps, we build your online
            presence with speed and precision.
          </p>
        </div>
        <div className="bg-purple-800 p-6 rounded-lg shadow-xl transform transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-bold mb-3">AI Automation & Prompts</h3>
          <p className="opacity-90">
            Leverage the power of AI for content generation, task automation,
            and intelligent chatbots.
          </p>
        </div>
        <div className="bg-purple-800 p-6 rounded-lg shadow-xl transform transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-bold mb-3">Creative Content Design</h3>
          <p className="opacity-90">
            Eye-catching visuals for social media, YouTube thumbnails, and
            impactful digital assets.
          </p>
        </div>
        <div className="bg-purple-800 p-6 rounded-lg shadow-xl transform transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-bold mb-3">Digital Strategy</h3>
          <p className="opacity-90">
            Get insights and basic consultation to boost your online growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
