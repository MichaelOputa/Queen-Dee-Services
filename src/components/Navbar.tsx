import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    { name: 'Cleaning Tips', page: 'tips' },
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
      className="fixed w-full z-50 transition-all duration-300"
      style={{
        background: isScrolled ? '#0B1F3A' : 'rgba(11,31,58,0.97)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(212,175,55,0.25)',
        boxShadow: isScrolled ? '0 4px 24px rgba(17,17,17,0.2)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <img
              src="/ltd.png"
              alt="Queen Dee Integrated Services LTD"
              style={{
                height: '60px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 10px rgba(201,168,76,0.35))',
              }}
            />
            <div className="flex flex-col leading-tight">
              <span className="font-extrabold text-white tracking-wide" style={{fontSize: '1rem', letterSpacing: '0.03em'}}>Queen Dee Integrated</span>
              <span className="font-extrabold text-white tracking-wide" style={{fontSize: '1rem', letterSpacing: '0.03em'}}>Services LTD</span>
              <span className="text-xs font-semibold" style={{color: '#D4AF37', letterSpacing: '0.08em'}}>One Call Cleanse All</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className="text-sm font-medium transition-colors"
                style={{
                  color: currentPage === link.page ? '#D4AF37' : '#E7ECF3',
                }}
                onMouseEnter={e => { if (currentPage !== link.page) e.currentTarget.style.color = '#D4AF37'; }}
                onMouseLeave={e => { if (currentPage !== link.page) e.currentTarget.style.color = '#E7ECF3'; }}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('booking')}
              className="px-6 py-2.5 rounded-lg font-medium transition-all shadow-md"
              style={{background: 'linear-gradient(135deg, #D4AF37, #E7D38B)', color: '#0B1F3A', fontWeight: 700}}
              onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #B08A1A, #D4AF37)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #D4AF37, #E7D38B)')}
            >
              Book Now
            </button>
          </div>

          <button
            className="md:hidden"
            style={{color: '#C9A84C'}}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div style={{background: '#0a0f2e', borderTop: '1px solid rgba(201,168,76,0.2)'}}>
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className="block w-full text-left px-4 py-2 rounded-lg transition-colors"
                style={{
                  background: currentPage === link.page ? 'rgba(201,168,76,0.15)' : 'transparent',
                  color: currentPage === link.page ? '#C9A84C' : '#c8d0e8',
                }}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('booking')}
              className="w-full px-4 py-2.5 rounded-lg font-bold transition-all"
              style={{background: 'linear-gradient(135deg, #C9A84C, #e8c96a)', color: '#0a0f2e'}}
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