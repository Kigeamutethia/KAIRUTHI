import { Scale, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logo from '../../imports/new-logo.png';

export function Footer() {
  return (
    <footer className="bg-[#000000] text-white">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <ImageWithFallback
                src={logo}
                alt="Kairuthi & Co. Advocates LLP Logo"
                className="h-48 w-auto object-contain scale-110 origin-left brightness-0 invert"
              />
            </div>
            <p className="text-sm text-white/80">
              Trusted legal counsel. Practical solutions. Lasting impact.
            </p>
          </div>

          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About the Firm
                </Link>
              </li>
              <li>
                <Link to="/practice-areas" className="text-white/80 hover:text-white transition-colors">
                  Legal Practice Areas
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Practice Areas</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Corporate & Commercial Law</li>
              <li>Conveyancing & Real Estate</li>
              <li>Intellectual Property</li>
              <li>Family Law</li>
              <li>Criminal Law</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/80">
                <Phone className="w-4 h-4" />
                <span>0708 209 727</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Mail className="w-4 h-4" />
                <span>info-ke@kairuthiadvocates.com</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Kairuthi & Co. Advocates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}