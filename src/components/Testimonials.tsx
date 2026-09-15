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

interface TestimonialsProps {
  setCurrentPage?: (page: string) => void;
}

function Testimonials({ setCurrentPage }: TestimonialsProps) {
  const services = ['Residential Cleaning', 'Office & Corporate Cleaning', 'Post-Construction Cleaning', 'Move-In/Move-Out Cleaning', 'Deep Cleaning', 'Fumigation & Pest Control', 'Janitorial Services', 'Upholstery & Carpet Cleaning'];

  const stats = [
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '500+', label: 'Happy Clients' },
    { number: '4.9/5', label: 'Average Rating' },
  ];

  const REVIEW_STORAGE_KEY = 'queendee-reviews-v1';
  const emptyForm = { name: '', location: '', service: '', rating: 5, text: '' };
  const [formData, setFormData] = useState(emptyForm);
  const [userReviews, setUserReviews] = useState<Review[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [editingReviewId, setEditingReviewId] = useState<string | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

  const readStoredReviews = (): Review[] => {
    if (typeof window === 'undefined') return [];

    try {
      const saved = window.localStorage.getItem(REVIEW_STORAGE_KEY);
      return saved ? JSON.parse(saved) as Review[] : [];
    } catch {
      return [];
    }
  };

  useEffect(() => {
    const loadReviews = () => {
      try {
        setUserReviews(readStoredReviews());
      } catch {
        setUserReviews([]);
      } finally {
        setLoadingReviews(false);
      }
    };

    loadReviews();
  }, []);

  const persistReviews = (nextReviews: Review[]) => {
    window.localStorage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(nextReviews));
    setUserReviews(nextReviews);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const currentReviews = readStoredReviews();

    const nextReview: Review = {
      id: editingReviewId ?? Date.now().toString(),
      ...formData,
      timestamp: editingReviewId ? currentReviews.find(review => review.id === editingReviewId)?.timestamp ?? Date.now() : Date.now(),
    };

    const updatedReviews = editingReviewId
      ? currentReviews.map(review => (review.id === editingReviewId ? nextReview : review))
      : [nextReview, ...currentReviews].slice(0, 12);

    try {
      persistReviews(updatedReviews);
      setSubmitted(true);
      setFormData(emptyForm);
      setEditingReviewId(null);
      setShowEditModal(false);
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      persistReviews(updatedReviews);
      setSubmitted(true);
      setFormData(emptyForm);
      setEditingReviewId(null);
      setShowEditModal(false);
      setTimeout(() => setSubmitted(false), 4000);
    } finally {
      setLoading(false);
    }
  };

  const averageReviewRating = userReviews.length
    ? (userReviews.reduce((sum, review) => sum + review.rating, 0) / userReviews.length).toFixed(1)
    : '0.0';

  const handleEditReview = (review: Review) => {
    setEditingReviewId(review.id);
    setFormData({
      name: review.name,
      location: review.location,
      service: review.service,
      rating: review.rating,
      text: review.text,
    });
    setShowEditModal(true);
  };

  const handleDeleteReview = (reviewId: string) => {
    setDeleteTargetId(reviewId);
  };

  const confirmDeleteReview = () => {
    if (!deleteTargetId) return;

    const remainingReviews = readStoredReviews().filter(review => review.id !== deleteTargetId);
    persistReviews(remainingReviews);
    setDeleteTargetId(null);

    if (editingReviewId === deleteTargetId) {
      setEditingReviewId(null);
      setFormData(emptyForm);
      setShowEditModal(false);
    }
  };

  const handleCancelEdit = () => {
    setEditingReviewId(null);
    setFormData(emptyForm);
    setShowEditModal(false);
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
            <h2 className="text-2xl font-bold text-white mb-2">{editingReviewId ? 'Edit Your Review' : 'Share Your Experience'}</h2>
            <p className="mb-8 text-sm" style={{ color: '#c8d0e8' }}>Your review will be visible to everyone. Help others discover the Queen Dee difference!</p>

            {submitted ? (
              <div className="flex flex-col items-center py-8 gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(201,168,76,0.2)' }}>
                  <CheckCircle className="w-8 h-8" style={{ color: '#C9A84C' }} />
                </div>
                <h3 className="text-xl font-bold text-white">{editingReviewId ? 'Your review has been updated!' : 'Thank you for your review!'}</h3>
                <p style={{ color: '#c8d0e8' }}>
                  {editingReviewId
                    ? 'Your updated feedback is now live for others to see.'
                    : 'Your feedback has been published and is now visible to others.'}
                </p>
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
                <div className="flex flex-wrap items-center gap-4">
                  <button type="submit" disabled={loading} className="flex items-center gap-3 px-8 py-3 rounded-lg font-bold transition-all" style={{ background: loading ? 'rgba(201,168,76,0.4)' : 'linear-gradient(135deg, #C9A84C, #e8c96a)', color: '#0a0f2e', cursor: loading ? 'not-allowed' : 'pointer' }}>
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                    {loading ? 'Submitting…' : editingReviewId ? 'Update Review' : 'Submit Review'}
                  </button>

                  {editingReviewId && (
                    <button type="button" onClick={handleCancelEdit} className="px-6 py-3 rounded-lg font-bold transition-all" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.3)', color: '#f1f5f9' }}>
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>

          {/* User-submitted reviews */}
          {!loadingReviews && userReviews.length > 0 && (
            <div className="mb-12">
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="rounded-2xl p-5" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)' }}>
                  <div className="text-sm uppercase tracking-wide" style={{ color: '#C9A84C' }}>Average rating</div>
                  <div className="mt-2 text-3xl font-bold text-white">{averageReviewRating}</div>
                </div>
                <div className="rounded-2xl p-5" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)' }}>
                  <div className="text-sm uppercase tracking-wide" style={{ color: '#C9A84C' }}>Live reviews</div>
                  <div className="mt-2 text-3xl font-bold text-white">{userReviews.length}</div>
                </div>
                <div className="rounded-2xl p-5" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)' }}>
                  <div className="text-sm uppercase tracking-wide" style={{ color: '#C9A84C' }}>Status</div>
                  <div className="mt-2 text-lg font-bold text-white">Updated live</div>
                </div>
              </div>

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
                    <div className="border-t pt-4" style={{ borderColor: 'rgba(201,168,76,0.15)' }}>
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <h4 className="font-bold text-white text-sm">{review.name}</h4>
                          {review.location && <p className="text-xs" style={{ color: '#8899bb' }}>{review.location}</p>}
                        </div>
                        {review.service && <span className="text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(201,168,76,0.15)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)' }}>{review.service}</span>}
                      </div>

                      <div className="mt-4 flex gap-2">
                        <button
                          type="button"
                          onClick={() => handleEditReview(review)}
                          className="px-3 py-1.5 rounded-md text-xs font-semibold transition-all"
                          style={{ background: 'rgba(201,168,76,0.15)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)' }}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteReview(review.id)}
                          className="px-3 py-1.5 rounded-md text-xs font-semibold transition-all"
                          style={{ background: 'rgba(220,53,69,0.12)', color: '#fca5a5', border: '1px solid rgba(220,53,69,0.35)' }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={handleCancelEdit}>
          <div className="relative w-full max-w-2xl rounded-2xl p-6 shadow-2xl" style={{ background: 'linear-gradient(135deg, #0a0f2e, #111a5c)', border: '1px solid rgba(201,168,76,0.3)' }} onClick={event => event.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Edit Your Review</h3>
              <button type="button" onClick={handleCancelEdit} className="rounded-full px-3 py-1 text-sm" style={{ background: 'rgba(255,255,255,0.05)', color: '#f1f5f9' }}>Close</button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#C9A84C' }}>Your Name *</label>
                <input type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} style={inputStyle} />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#C9A84C' }}>Location</label>
                  <input type="text" value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })} style={inputStyle} />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#C9A84C' }}>Service Used *</label>
                  <select required value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })} style={{ ...inputStyle, appearance: 'none' }}>
                    <option value="" style={{ background: '#0a0f2e' }}>Select a service</option>
                    {services.map(service => (
                      <option key={service} value={service} style={{ background: '#0a0f2e' }}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3" style={{ color: '#C9A84C' }}>Your Rating *</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button key={star} type="button" onClick={() => setFormData({ ...formData, rating: star })} onMouseEnter={() => setHoveredStar(star)} onMouseLeave={() => setHoveredStar(0)} className="text-3xl transition-transform hover:scale-110" style={{ color: star <= (hoveredStar || formData.rating) ? '#C9A84C' : 'rgba(201,168,76,0.25)', background: 'none', border: 'none', cursor: 'pointer', padding: '0 2px' }}>★</button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#C9A84C' }}>Your Review *</label>
                <textarea required value={formData.text} onChange={e => setFormData({ ...formData, text: e.target.value })} rows={5} style={{ ...inputStyle, resize: 'none' }} minLength={20} />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={handleCancelEdit} className="px-5 py-3 rounded-lg font-bold" style={{ background: 'rgba(255,255,255,0.05)', color: '#f1f5f9', border: '1px solid rgba(255,255,255,0.12)' }}>Cancel</button>
                <button type="submit" disabled={loading} className="px-6 py-3 rounded-lg font-bold" style={{ background: loading ? 'rgba(201,168,76,0.4)' : 'linear-gradient(135deg, #C9A84C, #e8c96a)', color: '#0a0f2e' }}>
                  {loading ? 'Saving…' : 'Save changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {deleteTargetId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setDeleteTargetId(null)}>
          <div className="w-full max-w-md rounded-2xl p-6 shadow-2xl" style={{ background: 'linear-gradient(135deg, #0a0f2e, #111a5c)', border: '1px solid rgba(220,53,69,0.3)' }} onClick={event => event.stopPropagation()}>
            <h3 className="text-2xl font-bold text-white mb-3">Delete review?</h3>
            <p className="mb-6" style={{ color: '#c8d0e8' }}>This action removes the review permanently. You can still leave a new one if you change your mind.</p>
            <div className="flex justify-end gap-3">
              <button type="button" onClick={() => setDeleteTargetId(null)} className="px-5 py-3 rounded-lg font-bold" style={{ background: 'rgba(255,255,255,0.05)', color: '#f1f5f9', border: '1px solid rgba(255,255,255,0.12)' }}>Keep it</button>
              <button type="button" onClick={confirmDeleteReview} className="px-5 py-3 rounded-lg font-bold" style={{ background: 'linear-gradient(135deg, #dc3545, #f87171)', color: '#fff' }}>Delete</button>
            </div>
          </div>
        </div>
      )}

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