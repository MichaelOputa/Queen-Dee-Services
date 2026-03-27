import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

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

  const services = ['Residential Cleaning', 'Office Cleaning', 'Deep Cleaning', 'Fumigation', 'Carpet Cleaning', 'Janitorial Services'];

  return (
    <footer style={{background: '#050b20', borderTop: '1px solid rgba(201,168,76,0.2)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="/ltd.jpeg"
                alt="Queen Dee Integrated Services LTD"
                style={{
                  width: '70px',
                  height: '70px',
                  objectFit: 'contain',
                  borderRadius: '10px',
                  border: '2px solid rgba(201,168,76,0.7)',
                  boxShadow: '0 0 16px rgba(201,168,76,0.4), 0 2px 10px rgba(0,0,0,0.5)',
                  background: '#0a0f2e',
                  flexShrink: 0,
                }}
              />
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-white" style={{fontSize: '1rem', letterSpacing: '0.03em'}}>Queen Dee Integrated</span>
                <span className="font-extrabold text-white" style={{fontSize: '1rem', letterSpacing: '0.03em'}}>Services LTD</span>
                <span className="text-xs font-semibold" style={{color: '#C9A84C', letterSpacing: '0.08em'}}>One Call Cleanse All</span>
              </div>
            </div>
            <p className="mb-6 leading-relaxed" style={{color: '#8899bb'}}>Nigeria's trusted cleaning partner, delivering exceptional service across Lagos. Professional, reliable, and committed to excellence.</p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full transition-colors" style={{background: 'rgba(201,168,76,0.1)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.2)'}}>
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[...quickLinks, { name: 'Testimonials', page: 'testimonials' }, { name: 'Contact', page: 'contact' }].map((link) => (
                <li key={link.page}>
                  <button onClick={() => handleNavClick(link.page)} className="transition-colors" style={{color: '#8899bb'}}
                    onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#8899bb')}
                  >{link.name}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button onClick={() => handleNavClick('services')} className="transition-colors" style={{color: '#8899bb'}}
                    onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#8899bb')}
                  >{service}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{color: '#C9A84C'}} />
                <span style={{color: '#8899bb'}}>20 Fatai Ologundudu Street, Muwo Tedi Ojo Lagos</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" style={{color: '#C9A84C'}} />
                <a href="tel:+2349132433968" style={{color: '#8899bb'}}>09132433968</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" style={{color: '#C9A84C'}} />
                <a href="mailto:queendeeservicesqds@gmail.com" style={{color: '#8899bb'}}>queendeeservicesqds@gmail.com</a>
              </div>
            </div>
            <button onClick={() => handleNavClick('booking')} className="mt-6 w-full px-6 py-3 rounded-lg font-bold transition-all" style={{background: 'linear-gradient(135deg, #C9A84C, #e8c96a)', color: '#0a0f2e'}}>
              Book a Service
            </button>
          </div>
        </div>

        <div className="border-t pt-8" style={{borderColor: 'rgba(201,168,76,0.15)'}}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0" style={{color: '#8899bb'}}>© {new Date().getFullYear()} Queen Dee Services LTD. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(item => (
                <button key={item} className="transition-colors" style={{color: '#8899bb'}}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#8899bb')}
                >{item}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;