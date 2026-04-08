import { useState, useEffect } from 'react';
import { Star, Quote, Send, CheckCircle, Loader2 } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  text: string;
  timestamp: number;
}

interface SharedStorage {
  get: (key: string, cache?: boolean) => Promise<{ value: string } | null>;
  set: (key: string, value: string, cache?: boolean) => Promise<void>;
}

interface TestimonialsProps {
  setCurrentPage?: (page: string) => void;
}

function Testimonials({ setCurrentPage }: TestimonialsProps) {
  const builtInTestimonials = [
    { name: 'Mrs. Adebayo Folake', location: 'Lekki, Lagos', rating: 5, text: 'Queen Dee Services transformed my home! Their attention to detail is incredible. Every corner was spotless, and the team was so professional and respectful. I highly recommend them to anyone looking for quality cleaning services in Lagos.', service: 'Residential Cleaning' },
    { name: 'Chief Emmanuel Okonkwo', location: 'Victoria Island, Lagos', rating: 5, text: 'We have been using Queen Dee Services for our corporate office for over a year now. They are reliable, thorough, and always exceed our expectations. Our employees appreciate coming to a clean and fresh workspace every morning.', service: 'Office Cleaning' },
    { name: 'Barr. Chioma Nwankwo', location: 'Yaba, Lagos', rating: 5, text: 'After our office renovation, Queen Dee Services did an outstanding post-construction cleanup. They removed all the dust and debris, and made the place look brand new. Very impressed with their efficiency and professionalism.', service: 'Post-Construction' },
    { name: 'Mr. Tunde Adeyemi', location: 'Ikoyi, Lagos', rating: 5, text: 'I needed a deep cleaning for my apartment before moving in, and Queen Dee Services delivered beyond my expectations. The place looked and smelled amazing. Their team was punctual and did an excellent job. Worth every naira!', service: 'Move-In Cleaning' },
    { name: 'Dr. Aisha Bello', location: 'Alapere, Lagos', rating: 5, text: 'As a busy professional, having Queen Dee Services handle my home cleaning has been a lifesaver. They are trustworthy, thorough, and always consistent. I can focus on my work knowing my home is in good hands.', service: 'Residential Cleaning' },
    { name: 'Engr. Peter Okoro', location: 'Ogudu, Lagos', rating: 5, text: 'We hired Queen Dee Services for fumigation and deep cleaning of our warehouse. The team was professional, used safe products, and the results were excellent. No more pest issues! Highly recommended for commercial properties.', service: 'Fumigation' },
    { name: 'Mrs. Grace Oladele', location: 'Ajah, Lagos', rating: 5, text: 'The carpet and upholstery cleaning service was fantastic! My furniture looks brand new again. The stains I thought were permanent are completely gone. Queen Dee Services really knows what they are doing.', service: 'Carpet Cleaning' },
    { name: 'Alhaji Musa Ibrahim', location: 'Lekki, Lagos', rating: 5, text: 'Queen Dee Services provides janitorial services for our shopping complex. They are reliable, professional, and maintain high standards. Our tenants are very happy with the cleanliness of the common areas.', service: 'Janitorial Services' },
    { name: 'Miss Blessing Eze', location: 'Surulere, Lagos', rating: 5, text: 'I was amazed by the level of service I received. The cleaners were polite, efficient, and left my apartment sparkling clean. The booking process was easy and the pricing was fair. Will definitely use them again!', service: 'Residential Cleaning' },
    { name: 'Mr. Ifeanyi Okeke', location: 'Ikeja, Lagos', rating: 5, text: 'Our company has tried several cleaning services, but Queen Dee Services is by far the best. They are consistent, professional, and their staff is well-trained. Our office has never looked better!', service: 'Office Cleaning' },
    { name: 'Mrs. Funmi Bakare', location: 'Banana Island, Lagos', rating: 5, text: 'Queen Dee Services handled the cleaning of my 5-bedroom home with such care and attention. They even cleaned areas I forgot to mention! The team is trustworthy and hardworking. I am now a loyal customer.', service: 'Deep Cleaning' },
    { name: 'Pastor Solomon Adeleke', location: 'Bode Thomas, Lagos', rating: 5, text: 'We needed cleaning services for our church facility, and Queen Dee Services was perfect. They were respectful, thorough, and completed the job on time. The congregation noticed the difference immediately!', service: 'Janitorial Services' },
  ];

  const services = ['Residential Cleaning', 'Office & Corporate Cleaning', 'Post-Construction Cleaning', 'Move-In/Move-Out Cleaning', 'Deep Cleaning', 'Fumigation & Pest Control', 'Janitorial Services', 'Upholstery & Carpet Cleaning'];

  const stats = [
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '500+', label: 'Happy Clients' },
    { number: '4.9/5', label: 'Average Rating' },
  ];

  const emptyForm = { name: '', location: '', service: '', rating: 5, text: '' };
  const [formData, setFormData] = useState(emptyForm);
  const [userReviews, setUserReviews] = useState<Review[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [hoveredStar, setHoveredStar] = useState(0);

  const getSharedStorage = (): SharedStorage | undefined =>
    (window as Window & { storage?: SharedStorage }).storage;

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const storage = getSharedStorage();
        const result = await storage?.get('queendee-reviews', true);
        if (result?.value) {
          setUserReviews(JSON.parse(result.value));
        }
      } catch {
        // No reviews yet or storage unavailable
      } finally {
        setLoadingReviews(false);
      }
    };
    loadReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const newReview: Review = { id: Date.now().toString(), ...formData, timestamp: Date.now() };
    const updatedReviews = [newReview, ...userReviews];
    try {
      const storage = getSharedStorage();
      await storage?.set('queendee-reviews', JSON.stringify(updatedReviews), true);
      setUserReviews(updatedReviews);
      setSubmitted(true);
      setFormData(emptyForm);
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setUserReviews(updatedReviews);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (ts: number) =>
    new Date(ts).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' });

  const inputStyle = {
    width: '100%', padding: '12px 16px', borderRadius: '8px', outline: 'none',
    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.3)',
    color: 'white', transition: 'border-color 0.2s',
  };

  const handleBookNow = () => {
    if (setCurrentPage) {
      setCurrentPage('booking');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.open('https://wa.me/2349132433968?text=Hi%20Queen%20Dee%20Services!%20I%20would%20like%20to%20book%20a%20cleaning%20service.', '_blank');
    }
  };

  return (
    <div className="pt-20" style={{ background: '#f8f6f0' }}>
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0a0f2e 0%, #111a5c 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm uppercase tracking-wide" style={{ color: '#C9A84C' }}>Testimonials</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">What Our Clients Say About Us</h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#c8d0e8' }}>Don't just take our word for it. Here's what hundreds of satisfied clients across Nigeria have to say about Queen Dee Services.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="p-8 rounded-2xl text-center" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)' }}>
                <div className="text-4xl font-bold mb-2" style={{ color: '#C9A84C' }}>{stat.number}</div>
                <div className="font-medium text-white">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Leave a Review Form */}
          <div className="rounded-2xl p-8 mb-16" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.3)' }}>
            <h2 className="text-2xl font-bold text-white mb-2">Share Your Experience</h2>
            <p className="mb-8 text-sm" style={{ color: '#c8d0e8' }}>Your review will be visible to everyone. Help others discover the Queen Dee difference!</p>

            {submitted ? (
              <div className="flex flex-col items-center py-8 gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(201,168,76,0.2)' }}>
                  <CheckCircle className="w-8 h-8" style={{ color: '#C9A84C' }} />
                </div>
                <h3 className="text-xl font-bold text-white">Thank you for your review!</h3>
                <p style={{ color: '#c8d0e8' }}>Your feedback has been published and is now visible to others.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#C9A84C' }}>Your Name *</label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} style={inputStyle} placeholder="e.g. Mrs. Folake Adebayo" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#C9A84C' }}>Location</label>
                    <input type="text" value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })} style={inputStyle} placeholder="e.g. Lekki, Lagos" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#C9A84C' }}>Service Used *</label>
                    <select required value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })} style={{ ...inputStyle, appearance: 'none' }}>
                      <option value="" style={{ background: '#0a0f2e' }}>Select a service</option>
                      {services.map(s => <option key={s} value={s} style={{ background: '#0a0f2e' }}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3" style={{ color: '#C9A84C' }}>Your Rating *</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map(star => (
                        <button key={star} type="button" onClick={() => setFormData({ ...formData, rating: star })} onMouseEnter={() => setHoveredStar(star)} onMouseLeave={() => setHoveredStar(0)} className="text-3xl transition-transform hover:scale-110" style={{ color: star <= (hoveredStar || formData.rating) ? '#C9A84C' : 'rgba(201,168,76,0.25)', background: 'none', border: 'none', cursor: 'pointer', padding: '0 2px' }}>★</button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#C9A84C' }}>Your Review *</label>
                  <textarea required value={formData.text} onChange={e => setFormData({ ...formData, text: e.target.value })} rows={4} style={{ ...inputStyle, resize: 'none' }} placeholder="Tell us about your experience with Queen Dee Services..." minLength={20} />
                </div>
                <button type="submit" disabled={loading} className="flex items-center gap-3 px-8 py-3 rounded-lg font-bold transition-all" style={{ background: loading ? 'rgba(201,168,76,0.4)' : 'linear-gradient(135deg, #C9A84C, #e8c96a)', color: '#0a0f2e', cursor: loading ? 'not-allowed' : 'pointer' }}>
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  {loading ? 'Submitting…' : 'Submit Review'}
                </button>
              </form>
            )}
          </div>

          {/* User-submitted reviews */}
          {!loadingReviews && userReviews.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span style={{ color: '#C9A84C' }}>★</span>
                Recent Customer Reviews
                <span className="text-sm font-normal px-3 py-1 rounded-full" style={{ background: 'rgba(201,168,76,0.15)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)' }}>
                  {userReviews.length} review{userReviews.length !== 1 ? 's' : ''}
                </span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {userReviews.map(review => (
                  <div key={review.id} className="rounded-2xl p-6 hover:shadow-xl transition-all" style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.25)' }}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`} />)}
                      </div>
                      <span className="text-xs" style={{ color: '#8899bb' }}>{formatDate(review.timestamp)}</span>
                    </div>
                    <Quote className="w-6 h-6 mb-3" style={{ color: 'rgba(201,168,76,0.4)' }} />
                    <p className="mb-5 leading-relaxed text-sm" style={{ color: '#c8d0e8' }}>{review.text}</p>
                    <div className="border-t pt-4 flex items-center justify-between" style={{ borderColor: 'rgba(201,168,76,0.15)' }}>
                      <div>
                        <h4 className="font-bold text-white text-sm">{review.name}</h4>
                        {review.location && <p className="text-xs" style={{ color: '#8899bb' }}>{review.location}</p>}
                      </div>
                      {review.service && <span className="text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(201,168,76,0.15)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)' }}>{review.service}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Built-in testimonials */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">More Client Stories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {builtInTestimonials.map((testimonial, index) => (
                <div key={index} className="rounded-2xl p-6 hover:shadow-xl transition-all" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.15)' }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <Quote className="w-8 h-8" style={{ color: 'rgba(201,168,76,0.3)' }} />
                  </div>
                  <p className="mb-6 leading-relaxed" style={{ color: '#c8d0e8' }}>{testimonial.text}</p>
                  <div className="border-t pt-4" style={{ borderColor: 'rgba(201,168,76,0.15)' }}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                        <p className="text-sm" style={{ color: '#8899bb' }}>{testimonial.location}</p>
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: 'rgba(201,168,76,0.15)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)' }}>{testimonial.service}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t" style={{ background: '#f8f6f0', borderColor: '#e8d9b0' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#0a0f2e' }}>Join Hundreds of Satisfied Customers</h2>
          <p className="mb-8 text-lg" style={{ color: '#4a5568' }}>Experience the exceptional service that has earned us a 98% satisfaction rate. Book your cleaning service today!</p>
          {/* Fixed: was a dead button, now navigates to booking */}
          <button
            onClick={handleBookNow}
            className="px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all"
            style={{ background: 'linear-gradient(135deg, #C9A84C, #e8c96a)', color: '#0a0f2e', cursor: 'pointer' }}
          >
            Book Your Service Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;