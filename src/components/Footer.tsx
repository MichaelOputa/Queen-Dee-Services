import { Facebook, Instagram, Mail, Phone, MapPin, Send, Youtube } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.9 2H22l-6.77 7.74L23.36 22h-6.13l-4.8-6.56L6.81 22H3.7l7.25-8.3L.7 2h6.27l4.34 5.93L18.9 2Zm-1.08 18h1.7L7.45 3.9H5.6l12.22 16.1Z"
      />
    </svg>
  );
}

function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg aria-label="Threads" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        fill="currentColor"
        d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
      />
    </svg>
  );
}

function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { href: 'https://www.facebook.com/share/19G2EBZFnu/', label: 'Facebook', icon: Facebook },
    { href: 'https://x.com/queendeeISL01', label: 'X', icon: XIcon },
    { href: 'https://www.instagram.com/queendeeintergratedsev?stkn=NGk4anJiYjRscGN3', label: 'Instagram', icon: Instagram },
    { href: 'https://www.youtube.com/@queendeeintegratedservicesltd?si=A1Bll-Djp7uwvocW', label: 'YouTube', icon: Youtube },
    { href: 'https://t.me/QDISL1', label: 'Telegram', icon: Send },
    { href: 'https://www.threads.com/@queendeeintergratedsev', label: 'Threads', icon: ThreadsIcon },
  ];

  const quickLinks = [
    { name: 'Home', page: 'home' },
    { name: 'About Us', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Gallery', page: 'gallery' },
  ];

  const services = ['Residential Cleaning', 'Office Cleaning', 'Deep Cleaning', 'Fumigation', 'Carpet Cleaning', 'Janitorial Services'];

  return (
    <footer style={{background: '#0B1F3A', borderTop: '1px solid rgba(212,175,55,0.25)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="/ltd.png"
                alt="Queen Dee Integrated Services LTD"
                style={{
                  height: '66px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 12px rgba(201,168,76,0.35))',
                  flexShrink: 0,
                }}
              />
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-white" style={{fontSize: '1rem', letterSpacing: '0.03em'}}>Queen Dee Integrated</span>
                <span className="font-extrabold text-white" style={{fontSize: '1rem', letterSpacing: '0.03em'}}>Services LTD</span>
                <span className="text-xs font-semibold" style={{color: '#D4AF37', letterSpacing: '0.08em'}}>One Call Cleanse All</span>
              </div>
            </div>
            <p className="mb-6 leading-relaxed" style={{color: '#E7ECF3'}}>Nigeria's trusted cleaning partner, delivering exceptional service across Lagos. Professional, reliable, and committed to excellence.</p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-full transition-colors"
                  style={{background: 'rgba(212,175,55,0.1)', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.2)'}}
                >
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
                  <button onClick={() => handleNavClick(link.page)} className="transition-colors" style={{color: '#E7ECF3'}}
                    onMouseEnter={e => (e.currentTarget.style.color = '#D4AF37')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#E7ECF3')}
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
                  <button onClick={() => handleNavClick('services')} className="transition-colors" style={{color: '#E7ECF3'}}
                    onMouseEnter={e => (e.currentTarget.style.color = '#D4AF37')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#E7ECF3')}
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