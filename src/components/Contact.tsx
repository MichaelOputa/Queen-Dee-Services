import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Facebook, Instagram, Mail, Phone, MapPin, Send, Clock, MessageCircle, Loader2, AlertCircle, Youtube } from 'lucide-react';

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

function Contact() {
  // EmailJS config
  const EMAILJS_SERVICE_ID  = 'service_8mpjnr9';
  const EMAILJS_TEMPLATE_ID = 'template_8lef2cg'; // Using same as booking for now, may need separate template
  const EMAILJS_PUBLIC_KEY  = 'pecAfT7K_IOqPfuSt';

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: 'queendeeservicesqds@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { href: 'https://www.facebook.com/share/19G2EBZFnu/', label: 'Facebook', icon: Facebook },
    { href: 'https://x.com/queendeeISL01', label: 'X', icon: XIcon },
    { href: 'https://www.instagram.com/queendeeintergratedsev?stkn=NGk4anJiYjRscGN3', label: 'Instagram', icon: Instagram },
    { href: 'https://www.youtube.com/@queendeeintegratedservicesltd?si=A1Bll-Djp7uwvocW', label: 'YouTube', icon: Youtube },
    { href: 'https://t.me/QDISL1', label: 'Telegram', icon: Send },
    { href: 'https://www.threads.com/@queendeeintergratedsev', label: 'Threads', icon: ThreadsIcon },
  ];

  const inputStyle = {
    width: '100%', padding: '12px 16px', borderRadius: '8px', outline: 'none',
    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.3)',
    color: 'white', transition: 'border-color 0.2s',
  };

  return (
    <div className="pt-20" style={{background: '#f8f6f0'}}>
      <section className="py-20" style={{background: 'linear-gradient(135deg, #0a0f2e 0%, #111a5c 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm uppercase tracking-wide" style={{color: '#C9A84C'}}>Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">Get in Touch With Us</h1>
            <p className="text-xl max-w-3xl mx-auto" style={{color: '#c8d0e8'}}>Have questions or need assistance? Our team is here to help you. Reach out through any of our channels.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all" style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.2)'}}>
              <h3 className="text-2xl font-bold mb-6" style={{color: '#C9A84C'}}>Lagos Office</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{color: '#C9A84C'}} />
                  <span style={{color: '#c8d0e8'}}>20 Fatai Ologundudu Street, Muwo Tedi Ojo Lagos.</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 flex-shrink-0" style={{color: '#C9A84C'}} />
                  <a href="tel:+2349132433968" style={{color: '#c8d0e8'}}>+234 913 243 3968</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 flex-shrink-0" style={{color: '#C9A84C'}} />
                  <a href="mailto:queendeeservicesqds@gmail.com" style={{color: '#c8d0e8'}}>queendeeservicesqds@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl shadow-lg p-8" style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.2)'}}>
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              {error && (
                <div className="rounded-lg p-4 mb-6 flex items-center" style={{background: 'rgba(220,53,69,0.1)', border: '1px solid rgba(220,53,69,0.3)'}}>
                  <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{color: '#dc3545'}} />
                  <p style={{color: '#dc3545'}}>{error}</p>
                </div>
              )}
              {submitted ? (
                <div className="rounded-lg p-6 text-center" style={{background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)'}}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'rgba(201,168,76,0.2)'}}>
                    <Send className="w-8 h-8" style={{color: '#C9A84C'}} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p style={{color: '#c8d0e8'}}>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{color: '#C9A84C'}}>Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} placeholder="Your full name" disabled={sending} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{color: '#C9A84C'}}>Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} placeholder="your@email.com" disabled={sending} />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{color: '#C9A84C'}}>Phone *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={inputStyle} placeholder="+234 XXX XXX XXXX" disabled={sending} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{color: '#C9A84C'}}>Subject *</label>
                    <select name="subject" value={formData.subject} onChange={handleChange} required style={{...inputStyle, appearance: 'none'}} disabled={sending}>
                      <option value="" style={{background: '#0a0f2e'}}>Select a subject</option>
                      <option value="general" style={{background: '#0a0f2e'}}>General Inquiry</option>
                      <option value="booking" style={{background: '#0a0f2e'}}>Booking Inquiry</option>
                      <option value="complaint" style={{background: '#0a0f2e'}}>Complaint</option>
                      <option value="feedback" style={{background: '#0a0f2e'}}>Feedback</option>
                      <option value="partnership" style={{background: '#0a0f2e'}}>Partnership Opportunity</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{color: '#C9A84C'}}>Message *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={6} style={{...inputStyle, resize: 'none'}} placeholder="How can we help you?" disabled={sending} />
                  </div>
                  <button type="submit" disabled={sending} className="w-full py-4 rounded-lg font-bold text-lg shadow-lg transition-all flex items-center justify-center space-x-2" style={{background: sending ? '#666' : 'linear-gradient(135deg, #C9A84C, #e8c96a)', color: '#0a0f2e'}}>
                    {sending ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl p-8 shadow-lg" style={{background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)'}}>
                <h3 className="text-2xl font-bold text-white mb-6">Business Hours</h3>
                <div className="space-y-4">
                  {[['Monday - Friday', '8:00 AM - 6:00 PM'], ['Saturday', '9:00 AM - 4:00 PM'], ['Sunday', 'Closed (Emergency services available)']].map(([day, hours]) => (
                    <div key={day} className="flex items-start">
                      <Clock className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{color: '#C9A84C'}} />
                      <div>
                        <p className="font-semibold text-white">{day}</p>
                        <p style={{color: '#c8d0e8'}}>{hours}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-8 shadow-lg" style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.2)'}}>
                <h3 className="text-xl font-bold text-white mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  {[
                    { href: 'tel:+2349132433968', icon: Phone, label: 'Call Us', value: '+234 913 243 3968' },
                    { href: 'https://wa.me/2349132433968', icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us' },
                    { href: 'mailto:queendeeservicesqds@gmail.com', icon: Mail, label: 'Email Us', value: 'queendeeservicesqds@gmail.com' },
                  ].map(({ href, icon: Icon, label, value }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-lg transition-colors" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.1)'}}>
                      <Icon className="w-6 h-6 mr-3" style={{color: '#C9A84C'}} />
                      <div>
                        <p className="text-sm" style={{color: '#8899bb'}}>{label}</p>
                        <p className="font-semibold text-white">{value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-8 shadow-lg" style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.2)'}}>
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-3 mb-4">
                  {socialLinks.map(({ href, label, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-3 rounded-full transition-colors" 
                      style={{background: 'rgba(201,168,76,0.1)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.2)'}}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
                <p style={{color: '#c8d0e8'}}>Stay up to date with recent work, promos, and cleaning tips across all our channels.</p>
              </div>

              <div className="rounded-2xl p-8 shadow-lg" style={{background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)'}}>
                <MapPin className="w-8 h-8 mb-4" style={{color: '#C9A84C'}} />
                <h3 className="text-xl font-bold text-white mb-3">Head Office</h3>
                <p className="mb-4" style={{color: '#c8d0e8'}}>20 Fatai Ologundudu Street, Muwo Tedi Ojo Lagos</p>
                <a
                  href="https://www.google.com/maps/search/20+Fatai+Ologundudu+Street+Muwo+Tedi+Ojo+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 rounded-lg font-medium transition-colors"
                  style={{background: 'linear-gradient(135deg, #C9A84C, #e8c96a)', color: '#0a0f2e'}}
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps embed — searches the exact address so the pin lands correctly */}
      <section className="py-0 bg-white">
        <div className="w-full" style={{height: '420px'}}>
          <iframe
            src="https://maps.google.com/maps?q=20+Fatai+Ologundudu+Street%2C+Muwo+Tedi+Ojo%2C+Lagos&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{border: 0, display: 'block'}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Queen Dee Services — 20 Fatai Ologundudu Street, Ojo Lagos"
          />
        </div>
        {/* Address bar below map */}
        <div className="flex items-center justify-center gap-3 py-4 px-4" style={{background: '#0a0f2e'}}>
          <MapPin className="w-5 h-5 flex-shrink-0" style={{color: '#C9A84C'}} />
          <p className="text-sm font-medium" style={{color: '#c8d0e8'}}>
            20 Fatai Ologundudu Street, Muwo Tedi Ojo, Lagos
          </p>
          <a
            href="https://www.google.com/maps/search/20+Fatai+Ologundudu+Street+Muwo+Tedi+Ojo+Lagos"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-xs px-3 py-1 rounded-full font-semibold flex-shrink-0"
            style={{background: 'linear-gradient(135deg, #C9A84C, #e8c96a)', color: '#0a0f2e'}}
          >
            Open in Maps
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;