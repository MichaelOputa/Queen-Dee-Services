import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} placeholder="Your full name" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{color: '#C9A84C'}}>Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{color: '#C9A84C'}}>Phone *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={inputStyle} placeholder="+234 XXX XXX XXXX" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{color: '#C9A84C'}}>Subject *</label>
                    <select name="subject" value={formData.subject} onChange={handleChange} required style={{...inputStyle, appearance: 'none'}}>
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
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={6} style={{...inputStyle, resize: 'none'}} placeholder="How can we help you?" />
                  </div>
                  <button type="submit" className="w-full py-4 rounded-lg font-bold text-lg shadow-lg transition-all flex items-center justify-center space-x-2" style={{background: 'linear-gradient(135deg, #C9A84C, #e8c96a)', color: '#0a0f2e'}}>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
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
                    { href: 'mailto:de', icon: Mail, label: 'Email Us', value: 'queendeeservicesqds@gmail.com' },
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

              <div className="rounded-2xl p-8 shadow-lg" style={{background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)'}}>
                <MapPin className="w-8 h-8 mb-4" style={{color: '#C9A84C'}} />
                <h3 className="text-xl font-bold text-white mb-3">Head Office</h3>
                <p className="mb-4" style={{color: '#c8d0e8'}}>20 Fatai Ologundudu Street, Muwo Tedi Ojo Lagos</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 rounded-lg font-medium transition-colors" style={{background: 'linear-gradient(135deg, #C9A84C, #e8c96a)', color: '#0a0f2e'}}>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 bg-white">
        <div className="w-full h-96 bg-gray-200">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3920289457376!2d3.3515598!3d6.5964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzUnNDcuMCJOIDPCsDIxJzA1LjYiRQ!5e0!3m2!1sen!2sng!4v1234567890" width="100%" height="100%" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Queen Dee Services Location"></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;