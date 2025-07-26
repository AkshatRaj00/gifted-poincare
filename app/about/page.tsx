// src/app/about/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-8">
      <section className="max-w-6xl mx-auto py-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-12 text-indigo-300 animate-fade-in-down">
          About OnePersonAI &amp; Akshat Raj 
        </h1>
        <h3 className="text-xl md:text-2xl text-center mb-16 opacity-90 animate-fade-in-up">
          The Visionary Behind the Innovation
        </h3>

        <div className="bg-purple-800 p-8 rounded-lg shadow-xl mb-12">
          <h2 className="text-4xl font-bold mb-6 text-indigo-200">Our Story: The OnePersonAI Journey</h2>
          <p className="text-lg mb-4 opacity-90">
            OnePersonAI is not just a company; it&apos;s a testament to the power of individual expertise and dedication. Founded and driven by Akshat Raj, OnePersonAI embodies the belief that cutting-edge digital solutions and advanced AI capabilities should be accessible and affordable for everyone.
          </p>
          <p className="text-lg mb-4 opacity-90">
            In a world increasingly reliant on technology, Akshat recognized a gap: small businesses, startups, and individuals often struggle to access high-quality, customized digital services without breaking the bank. OnePersonAI was born to bridge this gap, offering personalized attention and top-tier results that larger agencies often can&apos;t match.
          </p>
          <p className="text-lg opacity-90">
            Every project undertaken by OnePersonAI is a personal commitment from Akshat Raj to deliver excellence, innovation, and tangible value. We believe in building long-term relationships based on trust, transparency, and outstanding outcomes.
          </p>
        </div>

        <div className="bg-purple-800 p-8 rounded-lg shadow-xl mb-12">
          <h2 className="text-4xl font-bold mb-6 text-indigo-200">Meet Akshat Raj: The Founder &amp; Visionary</h2> 
          <p className="text-lg mb-4 opacity-90">
            I&apos;m Akshat Raj, the founder and the sole force behind OnePersonAI. My journey in technology has been driven by a passion for creating impactful digital experiences and harnessing the transformative power of Artificial Intelligence and Machine Learning.
          </p>
          <p className="text-lg mb-4 opacity-90">
            With a strong background in Full Stack Development, I&apos;ve honed my skills across various technologies, enabling me to build robust, scalable, and user-friendly applications from front to back. My expertise extends to:
          </p>
          <ul className="list-disc list-inside text-lg mb-4 opacity-90 space-y-2">
            <li>**Web Development:** Crafting responsive, high-performance websites and web applications using modern frameworks.</li>
            <li>**AI/Machine Learning:** Developing intelligent systems, chatbots, and automation tools that learn and adapt.</li>
            <li>**Digital Strategy:** Providing insights and solutions to enhance online presence and operational efficiency.</li>
          </ul>
          <p className="text-lg opacity-90">
            My commitment is to provide personalized, high-quality services that truly meet your needs and exceed your expectations. I believe in a hands-on approach, ensuring every detail is meticulously crafted to achieve your business goals.
          </p>
        </div>

        {/* Call to Action at bottom */}
        <div className="text-center mt-20">
          <Link href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 text-lg">
            Let&apos;s Build Something Amazing Together! 
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
