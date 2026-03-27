import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Calendar, Clock, MapPin, User, Mail, Phone, MessageSquare, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

// ─── EmailJS config ──────────────────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Add a Gmail service → copy the Service ID below
// 3. Create an Email Template with these variables:
//    {{from_name}}, {{from_email}}, {{phone}}, {{address}},
//    {{service}}, {{date}}, {{time}}, {{notes}}
//    Set "To Email" to: queendeeservicesqds@gmail.com
// 4. Copy your Public Key from Account → API Keys
const EMAILJS_SERVICE_ID  = 'service_8mpjnr9';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_8lef2cg';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'pecAfT7K_IOqPfuSt';   // e.g. 'AbCdEfGhIjKlMnOp'
// ─────────────────────────────────────────────────────────────────────────────

function Booking() {
  const emptyForm = { name: '', email: '', phone: '', address: '', service: '', date: '', time: '', notes: '' };
  const [formData, setFormData] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]   = useState(false);
  const [error, setError]       = useState('');

  const services = ['Residential Cleaning', 'Office & Corporate Cleaning', 'Post-Construction Cleaning', 'Move-In/Move-Out Cleaning', 'Deep Cleaning', 'Fumigation & Pest Control', 'Janitorial Services', 'Upholstery & Carpet Cleaning'];
  const timeSlots = ['8:00 AM - 10:00 AM', '10:00 AM - 12:00 PM', '12:00 PM - 2:00 PM', '2:00 PM - 4:00 PM', '4:00 PM - 6:00 PM'];

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
          phone:      formData.phone,
          address:    formData.address,
          service:    formData.service,
          date:       formData.date,
          time:       formData.time,
          notes:      formData.notes || 'None',
          to_email:   'queendeeservicesqds@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Failed to send booking. Please try again or WhatsApp us directly.');
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle = {
    width: '100%', padding: '12px 16px', borderRadius: '8px', outline: 'none',
    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.3)',
    color: 'white', transition: 'border-color 0.2s',
  };

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center px-4" style={{background: 'linear-gradient(135deg, #0a0f2e, #111a5c)'}}>
        <div className="max-w-md w-full rounded-2xl shadow-2xl p-8 text-center" style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.3)'}}>
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{background: 'rgba(201,168,76,0.2)'}}>
            <CheckCircle className="w-10 h-10" style={{color: '#C9A84C'}} />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Booking Sent! 🎉</h2>
          <p className="mb-6 leading-relaxed" style={{color: '#c8d0e8'}}>
            Your booking request has been emailed to <strong style={{color: '#C9A84C'}}>queendeeservicesqds@gmail.com</strong>. We will contact you within 24 hours to confirm.
          </p>
          <div className="p-4 rounded-lg mb-6" style={{background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)'}}>
            <p className="text-sm" style={{color: '#c8d0e8'}}>
              <strong style={{color: '#C9A84C'}}>Name:</strong> {formData.name}<br />
              <strong style={{color: '#C9A84C'}}>Service:</strong> {formData.service}<br />
              <strong style={{color: '#C9A84C'}}>Date:</strong> {formData.date}<br />
              <strong style={{color: '#C9A84C'}}>Time:</strong> {formData.time}
            </p>
          </div>
          <p className="text-sm mb-6" style={{color: '#8899bb'}}>
            For urgent inquiries, call or WhatsApp: <strong style={{color: '#C9A84C'}}>+234 913 243 3968</strong>
          </p>
          <button
            onClick={() => { setSubmitted(false); setFormData(emptyForm); }}
            className="px-6 py-3 rounded-lg font-bold transition-all"
            style={{background: 'linear-gradient(135deg, #C9A84C, #e8c96a)', color: '#0a0f2e'}}
          >
            Make Another Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20" style={{background: '#f8f6f0'}}>
      <section className="py-20" style={{background: 'linear-gradient(135deg, #0a0f2e 0%, #111a5c 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm uppercase tracking-wide" style={{color: '#C9A84C'}}>Book a Service</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">Request Your Cleaning Service</h1>
            <p className="text-xl max-w-3xl mx-auto" style={{color: '#c8d0e8'}}>Fill out the form below to schedule your cleaning service. We'll contact you within 24 hours to confirm your booking.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="rounded-2xl p-8" style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.2)'}}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{color: '#C9A84C'}}>
                      <User className="w-4 h-4" /> Full Name *
                    </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{color: '#C9A84C'}}>
                      <Mail className="w-4 h-4" /> Email Address *
                    </label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} placeholder="your@email.com" />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{color: '#C9A84C'}}>
                    <Phone className="w-4 h-4" /> Phone Number *
                  </label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={inputStyle} placeholder="+234 XXX XXX XXXX" />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{color: '#C9A84C'}}>
                    <MapPin className="w-4 h-4" /> Service Address *
                  </label>
                  <input type="text" name="address" value={formData.address} onChange={handleChange} required style={inputStyle} placeholder="Enter complete address" />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2" style={{color: '#C9A84C'}}>Type of Service *</label>
                  <select name="service" value={formData.service} onChange={handleChange} required style={{...inputStyle, appearance: 'none'}}>
                    <option value="" style={{background: '#0a0f2e'}}>Select a service</option>
                    {services.map((service, index) => <option key={index} value={service} style={{background: '#0a0f2e'}}>{service}</option>)}
                  </select>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{color: '#C9A84C'}}>
                      <Calendar className="w-4 h-4" /> Preferred Date *
                    </label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} style={{...inputStyle, colorScheme: 'dark'}} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{color: '#C9A84C'}}>
                      <Clock className="w-4 h-4" /> Preferred Time *
                    </label>
                    <select name="time" value={formData.time} onChange={handleChange} required style={{...inputStyle, appearance: 'none'}}>
                      <option value="" style={{background: '#0a0f2e'}}>Select time slot</option>
                      {timeSlots.map((slot, index) => <option key={index} value={slot} style={{background: '#0a0f2e'}}>{slot}</option>)}
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{color: '#C9A84C'}}>
                    <MessageSquare className="w-4 h-4" /> Additional Notes
                  </label>
                  <textarea name="notes" value={formData.notes} onChange={handleChange} rows={4} style={{...inputStyle, resize: 'none'}} placeholder="Any specific requirements or instructions?" />
                </div>
                {/* Error banner */}
                {error && (
                  <div className="mb-6 p-4 rounded-lg flex items-start gap-3" style={{background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.4)'}}>
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{color: '#f87171'}} />
                    <p className="text-sm" style={{color: '#fca5a5'}}>{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 rounded-lg font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-3"
                  style={{
                    background: sending ? 'rgba(201,168,76,0.5)' : 'linear-gradient(135deg, #C9A84C, #e8c96a)',
                    color: '#0a0f2e',
                    cursor: sending ? 'not-allowed' : 'pointer',
                  }}
                >
                  {sending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending Booking…
                    </>
                  ) : (
                    'Submit Booking Request'
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl p-8 shadow-lg" style={{background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)'}}>
                <h3 className="text-2xl font-bold text-white mb-6">Why Book With Us?</h3>
                <ul className="space-y-4">
                  {['24-hour confirmation guarantee', 'Flexible scheduling options', 'Professional & insured staff', '100% satisfaction guarantee', 'Competitive pricing'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" style={{color: '#C9A84C'}} />
                      <span style={{color: '#c8d0e8'}}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl p-8 shadow-lg" style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.2)'}}>
                <h3 className="text-xl font-bold text-white mb-4">Need Help?</h3>
                <p className="mb-6" style={{color: '#c8d0e8'}}>Our customer service team is available to assist you with your booking.</p>
                <div className="space-y-3">
                  <div className="flex items-center" style={{color: '#c8d0e8'}}>
                    <Phone className="w-5 h-5 mr-3" style={{color: '#C9A84C'}} />
                    <span>+234 913 243 3968</span>
                  </div>
                  <div className="flex items-center" style={{color: '#c8d0e8'}}>
                    <Mail className="w-5 h-5 mr-3" style={{color: '#C9A84C'}} />
                    <span>queendeeservicesqds@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Booking;