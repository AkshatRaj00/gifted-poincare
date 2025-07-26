// src/components/Footer.tsx
import React from "react";
import Link from "next/link"; // Next.js ke Link component for navigation

const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-white p-8 mt-auto shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1: Brand Info */}
        <div>
          <Link
            href="/"
            className="text-2xl font-bold text-indigo-300 hover:text-white transition-colors duration-300"
          >
            OnePersonAI
          </Link>
          <p className="mt-4 text-sm opacity-80">
            Your Mind&apos;s Mirror. Authentic AI.{" "}
            {/* Yahan apostrophe fix kiya hai */}
          </p>
          <p className="mt-2 text-sm opacity-70">
            &copy; {new Date().getFullYear()} OnePersonAI. All rights reserved.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-indigo-300">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/"
                className="hover:text-indigo-300 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-indigo-300 transition-colors duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="hover:text-indigo-300 transition-colors duration-300"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-indigo-300 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-indigo-300 transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-indigo-300">
            Get in Touch
          </h3>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:onepersonai.service@gmail.com"
              className="hover:text-indigo-300 transition-colors duration-300"
            >
              onepersonai.service@gmail.com
            </a>
          </p>
          <p className="text-sm">
            Phone:{" "}
            <a
              href="tel:+919142341588"
              className="hover:text-indigo-300 transition-colors duration-300"
            >
              +91 91423 41588
            </a>
          </p>
          <p className="text-sm">
            WhatsApp:{" "}
            <a
              href="https://wa.me/919142341588"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300 transition-colors duration-300"
            >
              Message Akshat Raj
            </a>
          </p>
          {/* Social media icons will go here later */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            {/* Placeholder for social icons */}
            <a href="#" className="hover:text-indigo-300">
              FB
            </a>
            <a href="#" className="hover:text-indigo-300">
              TW
            </a>
            <a href="#" className="hover:text-indigo-300">
              LI
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
