import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logo from '../../imports/Gemini_Generated_Image_-removebg-preview.png';

export function Header() {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About the Firm', path: '/about' },
    { name: 'Legal Practice Areas', path: '/practice-areas' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-white border-b border-black/10 shadow-sm"
    >
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <ImageWithFallback 
            src={logo} 
            alt="Kairuthi & Co. Advocates LLP Logo"
            className="h-20 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative group text-lg font-medium transition-colors hover:text-[#6B4F3A] ${
                location.pathname === item.path
                  ? 'text-[#6B4F3A]'
                  : 'text-black'
              }`}
            >
              {item.name}
              <span 
                className={`absolute -bottom-1 left-0 h-[3px] bg-[#4A5D4E] transition-all duration-300 rounded-full ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="bg-[#4A5D4E] text-white px-6 py-2.5 rounded-lg hover:bg-[#6B4F3A] transition-all hover:scale-105 hover:shadow-xl active:scale-95 relative overflow-hidden group"
        >
          <span className="relative z-10">Book a Consultation</span>
          <div className="absolute inset-0 bg-[#6B4F3A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </Link>
      </div>
    </motion.header>
  );
}