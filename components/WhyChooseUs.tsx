// src/components/WhyChooseUs.tsx
import React from "react";

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 px-4 bg-purple-900 text-white">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
        Why Partner with OnePersonAI?
      </h2>
      <ul className="max-w-4xl mx-auto list-none space-y-6 text-xl md:text-2xl">
        <li className="flex items-start">
          <span className="text-indigo-300 text-3xl mr-4">✓</span>
          <div>
            <strong className="text-indigo-300">Affordable Excellence:</strong>{" "}
            High-quality services that fit your budget, starting from just ₹299.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-indigo-300 text-3xl mr-4">✓</span>
          <div>
            <strong className="text-indigo-300">Dedicated Focus:</strong> As a
            single person, you get undivided attention and direct communication.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-indigo-300 text-3xl mr-4">✓</span>
          <div>
            <strong className="text-indigo-300">AI-Powered Efficiency:</strong>{" "}
            We use advanced AI tools to deliver results faster and smarter.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-indigo-300 text-3xl mr-4">✓</span>
          <div>
            <strong className="text-indigo-300">Versatile Skills:</strong> A
            wide range of digital services under one roof – no need to juggle
            multiple freelancers.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-indigo-300 text-3xl mr-4">✓</span>
          <div>
            <strong className="text-indigo-300">Results-Driven:</strong> Your
            success is my priority. I focus on delivering tangible value.
          </div>
        </li>
      </ul>
    </section>
  );
};

export default WhyChooseUs;
