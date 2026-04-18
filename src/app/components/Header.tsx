import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logo from '../../imports/new-logo.png';

export function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About the Firm', path: '/about' },
    { name: 'Legal Practice Areas', path: '/practice-areas' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-white border-b border-black/10 shadow-sm"
    >
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
          <ImageWithFallback 
            src={logo} 
            alt="Kairuthi & Co. Advocates LLP Logo"
            className="h-40 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
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

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="bg-[#4A5D4E] text-white px-6 py-2.5 rounded-lg hover:bg-[#6B4F3A] transition-all hover:scale-105 hover:shadow-xl active:scale-95 relative overflow-hidden group inline-block"
          >
            <span className="relative z-10">Book a Consultation</span>
            <div className="absolute inset-0 bg-[#6B4F3A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-[#4A5D4E] hover:bg-[#F5EFE6] rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-black/10 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`text-lg font-medium py-2 transition-colors ${
                    location.pathname === item.path
                      ? 'text-[#6B4F3A]'
                      : 'text-black'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-2 border-t border-black/5">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="w-full text-center bg-[#4A5D4E] text-white px-6 py-3 rounded-lg hover:bg-[#6B4F3A] transition-all relative overflow-hidden group block"
                >
                  <span className="relative z-10">Book a Consultation</span>
                  <div className="absolute inset-0 bg-[#6B4F3A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}