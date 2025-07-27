// components/Navbar.tsx या जो भी आपका navbar component है

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link href="/">OnePersonAI</Link>
      </div>
      
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/about">About</Link>
        <Link href="/chat">Chat AI</Link> {/* 👈 YE ADD KARO */}
        <Link href="/contact">Contact</Link>
        
        <button className="login-btn">Login</button>
        <button className="quote-btn">Get a Quote</button>
      </div>
    </nav>
  );
};

// या अगर आपका navbar अलग structure है तो बस Chat link add कर दो:

// HTML version के लिए:
/*
<nav>
  <a href="/">Home</a>
  <a href="/services">Services</a>
  <a href="/portfolio">Portfolio</a>
  <a href="/about">About</a>
  <a href="/chat">💬 Chat AI</a>  <!-- YE ADD KARO -->
  <a href="/contact">Contact</a>
</nav>
*/