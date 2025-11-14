import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'About Us', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Gallery', page: 'gallery' },
    { name: 'Testimonials', page: 'testimonials' },
    { name: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <Logo className="w-10 h-10" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">Queen Dee Services</span>
              <span className="text-xs text-teal-600 font-medium">Premium Cleaning Solutions</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === link.page
                    ? 'text-teal-600'
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('booking')}
              className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-2.5 rounded-lg font-medium hover:from-teal-700 hover:to-teal-800 transition-all shadow-md hover:shadow-lg"
            >
              Book Now
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === link.page
                    ? 'bg-teal-50 text-teal-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('booking')}
              className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white px-4 py-2.5 rounded-lg font-medium hover:from-teal-700 hover:to-teal-800 transition-all"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
