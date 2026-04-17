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
              className={`text-sm transition-colors hover:text-[#95695e] ${
                location.pathname === item.path
                  ? 'text-[#95695e]'
                  : 'text-black'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="bg-[#1d4a14] text-white px-6 py-2.5 rounded-lg hover:bg-[#1e3c12] transition-all hover:scale-105 hover:shadow-xl active:scale-95 relative overflow-hidden group"
        >
          <span className="relative z-10">Book a Consultation</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3c12] to-[#2a5018] opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </Link>
      </div>
    </motion.header>
  );
}