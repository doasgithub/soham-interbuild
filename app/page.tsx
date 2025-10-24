"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { Mail, Phone, Users, CheckCircle, Zap, TrendingUp, Handshake, CornerDownRight, Package, Grid, Home, ClipboardCheck } from 'lucide-react';

// --- CONFIGURATION ---
const COMPANY_NAME = "Soham Interbuild";
const PRIMARY_COLOR_CLASSES = "text-cyan-600 dark:text-cyan-400";
const ACCENT_BG_CLASSES = "bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-700 dark:hover:bg-cyan-600";
const ACCENT_TEXT_CLASSES = "text-white";
const HEADER_FONT_CLASSES = "font-montserrat"; // Class for header font

// Removed LOGO_PATH and DEFAULT_LOGO_FALLBACK since we are using inline SVG.

// --- DATA ---
const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#whyus' },
  { name: 'Contact', href: '#contact' },
];

const FEATURES = [
  {
    icon: ClipboardCheck,
    title: "Quality-First Approach",
    description: "Our commitment to excellence ensures every project uses premium materials for lasting results."
  },
  {
    icon: Zap,
    title: "Timely Delivery & Execution",
    description: "We guarantee efficient planning and execution, completing your project on schedule without compromising quality."
  },
  {
    icon: Handshake,
    title: "Custom Design Compatibility",
    description: "We work closely with architects and designers to bring unique, complex visions to life seamlessly."
  },
  {
    icon: Package,
    title: "One-Stop Solution",
    description: "From material sourcing to final installation, we provide a complete service under one reliable roof."
  },
  {
    icon: TrendingUp,
    title: "Best Value Rate",
    description: "High-quality services and materials delivered at the most competitive rates in the industry."
  },
];

const PRODUCT_CATEGORIES = [
  {
    icon: Home,
    title: "Customized Furniture",
    details: "Modular & Traditional pieces tailored to fit your space and style perfectly."
  },
  {
    icon: Grid,
    title: "Modular Kitchen Systems",
    details: "Ergonomic and stylish kitchen designs built for modern functionality."
  },
  {
    icon: CornerDownRight,
    title: "Wall & Ceiling Panels",
    details: "Decorative panels for enhancing aesthetics and acoustics in residential and commercial spaces."
  },
];

const CONTACT_INFO = {
  mobile: "9284614761",
  email: "sohaminterbuild@gmail.com",
};

// --- COMPONENTS ---

// Custom Logo component using inline SVG for reliability
const LogoSvg = ({ size = 40, src }: { size?: number, src?: string }) => {
  if (src) {
    return <img src={"/soham_logo.jpg"} alt="Soham Interbuild Logo" className={`h-10 w-auto object-contain rounded-full`} />;
  }

  return (
    <div 
      style={{ width: size, height: size, fontSize: size * 0.55 }} 
      className={`flex items-center justify-center rounded-xl font-extrabold shadow-lg transition duration-300 
        text-cyan-600 dark:text-cyan-400 bg-cyan-600/10 border-2 border-current`}
    >
      <span className="text-cyan-600 dark:text-cyan-400 leading-none">SI</span>
    </div>
  );
};


// Utility for smooth scrolling
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute('href')?.substring(1);
  const targetElement = document.getElementById(targetId || '');
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Removed logo state and error handling logic

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-md dark:bg-gray-950/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center space-x-2">
            {/* Replaced <img> with LogoSvg */}
            <LogoSvg size={40} src="/soham_logo.jpg" />
            
            {/* Screen reader text for accessibility */}
              <span className="text-xl font-bold">
    <span className="text-teal-600 dark:text-teal-400">Soham</span>{' '}
    <span className="font-montserrat text-gray-900 dark:text-white">Interbuild</span>
  </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={scrollToSection}
                // Updated color: darker grey (gray-800) for better visibility, with cyan hover
                className={`text-sm font-medium text-gray-800 dark:text-gray-200 transition duration-150 hover:${PRIMARY_COLOR_CLASSES}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { scrollToSection(e); setIsOpen(false); }}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-cyan-600 transition duration-150"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const HeroSection = () => (
  <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gray-50 dark:bg-gray-900" id="hero">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-6 xl:col-span-7">
          <h1 className={`text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-6 ${HEADER_FONT_CLASSES}`}>
            Crafting <span className={PRIMARY_COLOR_CLASSES}>Inspired Interiors</span> with Solid Surfaces.
          </h1>
          <p className="mt-3 text-xl text-gray-500 dark:text-gray-400 max-w-lg">
            A solutions-focused company specializing in Acrylic Solid Surfaces and comprehensive interior materials, elevating every residential and commercial space.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              onClick={scrollToSection}
              className={`px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out transform ${ACCENT_BG_CLASSES} ${ACCENT_TEXT_CLASSES} flex items-center justify-center sm:w-auto w-full`}
            >
              Get a Free Consultation
            </a>
            <a
              href="#services"
              onClick={scrollToSection}
              className="px-8 py-3 text-lg font-semibold rounded-lg shadow transition duration-300 ease-in-out bg-white text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 flex items-center justify-center sm:w-auto w-full border border-gray-200 dark:border-gray-700"
            >
              Explore Our Solutions
            </a>
          </div>
        </div>

        {/* Image/Illustration Placeholder */}
        <div className="mt-12 lg:mt-0 lg:col-span-6 xl:col-span-5 hidden lg:flex justify-center">
           {/* Placeholder for an Interior Design Mockup */}
          <div className="relative w-full max-w-md h-80 rounded-2xl shadow-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center p-6 border-4 border-white dark:border-gray-900">
             <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{backgroundImage: "url('/hero.jpg')"}}></div>
             <div className="relative text-center">
                
                <p className="mt-4 text-xl font-bold text-gray-800 dark:text-white">Design & Fabrication Experts</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Collaborating for Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Abstract shape for background styling */}
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/50 dark:bg-cyan-900/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
  </section>
);

const AboutSection = () => (
  <section className="py-20 md:py-32 bg-white dark:bg-gray-950" id="about">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        {/* Image/Placeholder Left */}
        <div className="mb-10 lg:mb-0">
          <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/about.jpg')"}}></div>
            <div className="absolute inset-0 bg-cyan-600/30"></div>
            <div className="relative p-8 flex flex-col justify-end h-full">
              <h3 className="text-3xl font-bold text-white">Seamless Design. Lasting Quality.</h3>
              <p className="mt-2 text-white/90">Our specialty in Solid Surfaces allows for limitless creative possibilities.</p>
            </div>
          </div>
        </div>
        {/* Text Content Right */}
        <div>
          <h2 className={`text-base font-semibold tracking-wide uppercase ${PRIMARY_COLOR_CLASSES}`}>Who We Are</h2>
          <p className={`mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white ${HEADER_FONT_CLASSES}`}>
            Solutions-Focused Interior Material Specialists.
          </p>
          <p className="mt-6 text-lg text-gray-500 dark:text-gray-400">
            Soham Interbuild collaborates closely with architects, interior designers, and turnkey contractors to deliver high-quality, customizable, and design-forward products.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-start">
              <CheckCircle size={20} className={`mt-1 flex-shrink-0 ${PRIMARY_COLOR_CLASSES}`} />
              <p className="ml-3 text-base text-gray-600 dark:text-gray-300">
                Core Goal: Elevating every space with superior material and service expertise.
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle size={20} className={`mt-1 flex-shrink-0 ${PRIMARY_COLOR_CLASSES}`} />
              <p className="ml-3 text-base text-gray-600 dark:text-gray-300">
                Collaboration: Partnering with industry professionals to execute complex designs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900" id="services">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className={`text-base font-semibold tracking-wide uppercase ${PRIMARY_COLOR_CLASSES}`}>Our Expertise</h2>
        <p className={`mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white ${HEADER_FONT_CLASSES}`}>
          Comprehensive Interior Product Range
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500 dark:text-gray-400">
          From specialty Acrylic Solid Surfaces to complete fit-out products, we provide the materials needed for transformative projects.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
        {/* Key Offering: Acrylic Solid Surfaces */}
        <div className="md:col-span-2 lg:col-span-2 p-8 rounded-xl shadow-2xl bg-white dark:bg-gray-800 border-t-4 border-cyan-600">
          <div className={`p-3 rounded-xl inline-flex ${ACCENT_BG_CLASSES}`}>
            <Home size={32} className={ACCENT_TEXT_CLASSES} />
          </div>
          <h3 className={`mt-6 text-2xl font-bold text-gray-900 dark:text-white ${HEADER_FONT_CLASSES}`}>Acrylic Solid Surfaces</h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Our specialty offering: Seamless, durable, and elegant surface material ideal for high-traffic and high-design areas.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
            <li className="flex items-center text-sm">
              <CheckCircle size={16} className={`flex-shrink-0 mr-2 ${PRIMARY_COLOR_CLASSES}`} />
              Ideal for Countertops, Reception Desks, and Kitchens.
            </li>
            <li className="flex items-center text-sm">
              <CheckCircle size={16} className={`flex-shrink-0 mr-2 ${PRIMARY_COLOR_CLASSES}`} />
              Available in various colors, patterns, and finishes.
            </li>
            <li className="flex items-center text-sm">
              <CheckCircle size={16} className={`flex-shrink-0 mr-2 ${PRIMARY_COLOR_CLASSES}`} />
              Includes custom fabrication services.
            </li>
          </ul>
        </div>

        {/* Other Product Categories */}
        {PRODUCT_CATEGORIES.map((item, index) => (
          <div key={index} className="p-8 rounded-xl shadow-lg bg-white dark:bg-gray-800 transition duration-300 hover:shadow-xl">
            <item.icon size={32} className={PRIMARY_COLOR_CLASSES} />
            <h3 className={`mt-6 text-xl font-bold text-gray-900 dark:text-white ${HEADER_FONT_CLASSES}`}>{item.title}</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">{item.details}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-gray-500 dark:text-gray-400">
          We also handle Electrical supplies and comprehensive Material Sourcing for all residential & commercial spaces.
        </p>
      </div>
    </div>
  </section>
);

const BrochuresSection = () => {
  const DRIVE_LINK = "https://drive.google.com/drive/folders/1NVN0E4XuxL42byNvtLw5FEeM74iNIKax"; // <-- replace with your Google Drive share link

  return (
    <section className="py-20 md:py-32 bg-cyan-50 dark:bg-cyan-900" id="brochures">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-base font-semibold tracking-wide uppercase ${PRIMARY_COLOR_CLASSES}`}>Brochures & Portfolio</h2>
        <p className={`mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white ${HEADER_FONT_CLASSES}`}>
          Explore Our Products, Previous Works, and Detailed Brochures
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          Click the button below to view all our brochures and past projects in one convenient location.
        </p>
        <div className="mt-10">
          <a
            href={DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out transform ${ACCENT_BG_CLASSES} ${ACCENT_TEXT_CLASSES} hover:scale-105`}
          >
            View Brochures & Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};


const FeaturesSection = () => (
  <section className="py-20 md:py-32 bg-white dark:bg-gray-950" id="whyus">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className={`text-base font-semibold tracking-wide uppercase ${PRIMARY_COLOR_CLASSES}`}>Our Advantage</h2>
        <p className={`mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white ${HEADER_FONT_CLASSES}`}>
          Why Choose Soham Interbuild?
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, index) => (
          <div key={index} className="p-6 rounded-xl transition duration-300 transform hover:scale-[1.02] bg-gray-50 dark:bg-gray-900 shadow-md">
            <div className={`p-4 rounded-full inline-flex ${ACCENT_BG_CLASSES}`}>
              <feature.icon size={24} className={ACCENT_TEXT_CLASSES} />
            </div>
            <h3 className={`mt-6 text-xl font-bold text-gray-900 dark:text-white ${HEADER_FONT_CLASSES}`}>{feature.title}</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending message...');

    // In a real Next.js app, this would be an API call (e.g., /api/contact)
    // For this single-file example, we simulate success after a delay.
    setTimeout(() => {
      setStatus('Thank you! Your inquiry has been received. We will be in touch shortly.');
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 mb-12 lg:mb-0">
            <h2 className={`text-base font-semibold tracking-wide uppercase ${PRIMARY_COLOR_CLASSES}`}>Get In Touch</h2>
            <p className={`mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white ${HEADER_FONT_CLASSES}`}>
              Let's Collaborate on Your Next Project.
            </p>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              We would love to partner with you. Contact us for product samples, a site visit, or a quick presentation.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center">
                <Phone size={24} className={PRIMARY_COLOR_CLASSES} />
                <a href={`tel:${CONTACT_INFO.mobile}`} className="ml-4 text-lg text-gray-700 dark:text-gray-300 hover:underline">
                  {CONTACT_INFO.mobile}
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={24} className={PRIMARY_COLOR_CLASSES} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="ml-4 text-lg text-gray-700 dark:text-gray-300 hover:underline">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-950 p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-800 dark:text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-6 border border-transparent rounded-lg text-base font-semibold ${ACCENT_TEXT_CLASSES} ${ACCENT_BG_CLASSES} shadow-md transition duration-300 ease-in-out hover:shadow-lg`}
                disabled={status.startsWith('Sending')}
              >
                {status.startsWith('Sending') ? 'Sending...' : 'Send Inquiry'}
              </button>
              {status && !status.startsWith('Sending') && (
                <p className="mt-4 text-sm text-center text-green-600 dark:text-green-400">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          {/* Replaced <img> with LogoSvg */}
          
           <span className="text-lg font-semibold">
    <span className="text-teal-600 dark:text-teal-400">Soham</span>{' '}
    <span className="font-montserrat text-gray-400 dark:text-gray-300">Interbuild</span>
  </span>
        </div>
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="px-5 py-2">
              <a
                href={link.href}
                onClick={scrollToSection}
                className="text-base text-gray-400 hover:text-white transition duration-150"
              >
                {link.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </p>
        <div className="mt-4 text-center text-sm text-gray-500">
          Specializing in Interior Solutions & Acrylic Solid Surfaces.
        </div>
      </div>
    </footer>
  );
};


// The main App component for Next.js app/page.tsx
const App = () => {
  return (
    // Ensure the root element covers the full screen width and allows for dark mode
    <div className="min-h-screen antialiased text-gray-900 dark:bg-gray-950 dark:text-white font-inter">
      {/* Load Inter font and Montserrat from Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Montserrat:wght@700;800;900&display=swap');
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BrochuresSection />
        <FeaturesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
