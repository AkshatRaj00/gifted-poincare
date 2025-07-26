// src/app/contact/page.tsx
'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const formspreeUrl = "https://formspree.io/f/mkgzgopq";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert('Oops! There was a problem submitting your form. Please try again.');
      }
    } catch (err: unknown) { 
      console.error("Form submission error:", err);
      alert('Oops! There was a network error. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-8">
      <section className="max-w-4xl mx-auto py-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-12 text-indigo-300 animate-fade-in-down">
          Get in Touch
        </h1>
        <h3 className="text-xl md:text-2xl text-center mb-12 opacity-90 animate-fade-in-up">
          Ready to Transform Your Digital Presence? Let&apos;s Talk with Akshat Raj! 
        </h3>
        <p className="text-lg text-center mb-8 max-w-2xl mx-auto opacity-90">
          Have a project in mind or just want to say hello? Fill out the form below or reach out directly.
        </p>

        {submitted && (
          <div className="bg-green-500 text-white p-4 rounded-lg text-center mb-8">
            Thank you for your message! We&apos;ll get back to you soon. 
          </div>
        )}

        {/* Contact Form */}
        <div className="bg-purple-800 p-8 rounded-lg shadow-xl mb-12">
          <h2 className="text-3xl font-bold mb-6 text-indigo-200 text-center">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-lg font-medium mb-2">Name:</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        className="w-full p-3 rounded-md bg-indigo-900 border border-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-lg font-medium mb-2">Email:</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className="w-full p-3 rounded-md bg-indigo-900 border border-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all" 
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-lg font-medium mb-2">Service Interested In (Optional):</label>
                      <select 
                        id="service" 
                        name="service" 
                        className="w-full p-3 rounded-md bg-indigo-900 border border-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all text-gray-300"
                      >
                        <option value="">-- Select a Service --</option>
                        <option value="onepage-website">&quot;OnePage Express&quot; Website</option> 
                        <option value="google-my-business">Google My Business Optimization</option>
                        <option value="youtube-thumbnails">YouTube &quot;Click-Magnet&quot; Thumbnails</option> 
                        <option value="instagram-posts">Instagram &quot;Instant-Post&quot; Design</option> 
                        <option value="ai-prompts-pack">&quot;AI Brainstorm Buddy&quot; Prompt Pack</option> 
                        <option value="ai-custom-prompt">&quot;AI Content Booster&quot; Prompt</option> 
                        <option value="basic-chatbot">&quot;Basic Q&A Chatbot&quot;</option> 
                        <option value="social-bio">Social Media &quot;Bio Blast&quot; Optimization</option> 
                        <option value="content-ideas">&quot;Content Idea Spark&quot; (10 Ideas)</option> 
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-lg font-medium mb-2">Message:</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={5} 
                        required 
                        className="w-full p-3 rounded-md bg-indigo-900 border border-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all resize-y"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 text-lg"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Direct Contact Info */}
                <div className="bg-purple-800 p-8 rounded-lg shadow-xl">
                  <h2 className="text-3xl font-bold mb-6 text-indigo-200 text-center">Or Connect Directly</h2>
                  <div className="space-y-4 text-lg text-center">
                    <p>Email: <a href="mailto:onepersonai.service@gmail.com" className="hover:text-indigo-300 transition-colors duration-300">onepersonai.service@gmail.com</a></p>
                    <p>Phone: <a href="tel:+919142341588" className="hover:text-indigo-300 transition-colors duration-300">+91 91423 41588</a></p>
                    <p>WhatsApp: <a href="https://wa.me/919142341588" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors duration-300">Message Akshat Raj on WhatsApp</a></p>
                    {/* Social Media Links will go here later */}
                    <div className="mt-6">
                      <p className="text-base opacity-80">Find me on professional networks:</p>
                      <div className="flex justify-center space-x-6 mt-2">
                        <a href="https://linkedin.com/in/akshat-raj-73ba41233" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 text-2xl transition-colors duration-300">LinkedIn</a>
                        <a href="https://github.com/AkshatRaj00" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 text-2xl transition-colors duration-300">GitHub</a>
                        {/* Add more social links as needed */}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          );
        };

        export default ContactPage;
        ```
    * `Ctrl + S` dabakar **SAVE karo.**

---

**Akshat bhai, jab CodeSandbox preview mein koi build error na dikhe, toh mujhe confirm karna!** Agar koi error nahi hai, toh hum turant GitHub par push karenge.
