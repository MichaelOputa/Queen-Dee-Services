import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', page: 'home' },
    { name: 'About Us', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Gallery', page: 'gallery' },
  ];

  const services = [
    'Residential Cleaning',
    'Office Cleaning',
    'Deep Cleaning',
    'Fumigation',
    'Carpet Cleaning',
    'Janitorial Services',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Logo className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="text-lg font-bold">Queen Dee Services LTD</span>
                <span className="text-xs text-teal-400">One Call Cleanse All</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Nigeria's trusted cleaning partner, delivering exceptional service across Lagos
              . Professional, reliable, and committed to excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-teal-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-teal-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-teal-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-teal-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleNavClick(link.page)}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNavClick('testimonials')}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-teal-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  20 Fatai Ologundudu Street, Muwo Tedi Ojo Lagos
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                <a href="tel:+2348034567890" className="text-gray-400 hover:text-teal-400">
                  09132433968
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@queendeeservices.ng"
                  className="text-gray-400 hover:text-teal-400"
                >
                  queendeeservicesqds@gmail.com
                </a>
              </div>
            </div>
            <button
              onClick={() => handleNavClick('booking')}
              className="mt-6 w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-teal-800 transition-all"
            >
              Book a Service
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Queen Dee Services LTD. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-teal-400 transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-teal-400 transition-colors">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-teal-400 transition-colors">
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
