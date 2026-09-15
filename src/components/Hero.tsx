import { ArrowRight, CheckCircle, Star, Shield, Clock, X } from 'lucide-react';
import { useState } from 'react';

function Hero() {
  const features = [
    { icon: Shield, text: 'Trusted by 500+ Nigerian Homes & Businesses' },
    { icon: Star, text: 'Professional & Certified Cleaning Experts' },
    { icon: Clock, text: 'Flexible Scheduling & Same-Day Service' },
  ];

  const highlights = [
    'Eco-friendly cleaning products',
    'Fully insured & background-checked staff',
    'Satisfaction guaranteed',
    'Available across Lagos, major Nigerian cities & outside Nigeria',
  ];

  const homeTips = [
    { file: '/4.jpeg', title: 'Day 4', text: 'Your mattress should be cleaned too.' },
    { file: '/5.jpeg', title: 'Day 5', text: 'Fans collect hidden dust.' },
    { file: '/6.jpeg', title: 'Day 6', text: 'Kitchen cabinets need cleaning inside and outside.' },
    { file: '/7.jpeg', title: 'Day 7', text: 'Windows should be cleaned regularly.' },
    { file: '/8.jpeg', title: 'Day 8', text: 'Your toilet brush holder should be washed.' },
    { file: '/9.jpeg', title: 'Day 9', text: 'Light switches are often ignored.' },
  ];

  const proofItems = [
    { image: '/cleanups.jpeg', title: 'Kitchen transformation' },
    { image: '/cleanups 2.jpeg', title: 'Bedroom reset' },
    { image: '/cleanups 3.jpeg', title: 'Deep-cleaned room' },
  ];

  const crewWork = [
    { image: '/crew.jpeg', title: 'Bedroom cleaning in progress' },
    { image: '/crews.jpeg', title: 'Residential cleaning project' },
    { image: '/crew at work.jpeg', title: 'Team in action' },
  ];

  const promoPosters = [
    { image: '/flyer.jpeg', title: 'Cleaning service flyer', tag: 'Service promo' },
    { image: '/5 years anniversary..jpeg', title: '5 years anniversary celebration', tag: 'Milestone event' },
    { image: '/hiring.jpeg', title: 'We are hiring poster', tag: 'Careers' },
  ];

  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 overflow-hidden" style={{background: 'linear-gradient(135deg, #0a0f2e 0%, #0d1540 40%, #111a5c 100%)'}}>
        {/* Gold geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='%23C9A84C' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`}}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="border border-yellow-500 text-yellow-400 text-sm font-semibold px-4 py-2 rounded-full" style={{background: 'rgba(201,168,76,0.1)'}}>
                  Nigeria's Premier Cleaning Company
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Premium Cleaning Solutions for{' '}
                <span style={{color: '#C9A84C'}}>
                  Homes & Businesses
                </span>{' '}
                Across Nigeria
              </h1>

              <p className="text-lg leading-relaxed" style={{color: '#c8d0e8'}}>
                Experience the difference with Queen Dee Services LTD. We deliver exceptional
                cleaning services that transform your spaces into pristine environments. From
                residential homes to corporate offices, we ensure every corner sparkles.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/2349132433968?text=Hi%20Queen%20Dee%20Services!%20I%20would%20like%20to%20book%20a%20cleaning%20service.%20Please%20let%20me%20know%20availability%20and%20pricing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(135deg, #C9A84C, #e8c96a)'}}
                  onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #b8963e, #C9A84C)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #C9A84C, #e8c96a)')}
                >
                  <span style={{color: '#0a0f2e', fontWeight: 700}}>Book a Cleaning</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" style={{color: '#0a0f2e'}} />
                </a>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 pt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <feature.icon className="w-5 h-5 flex-shrink-0 mt-1" style={{color: '#C9A84C'}} />
                    <span className="text-sm leading-snug" style={{color: '#c8d0e8'}}>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Living room image */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl opacity-30 blur-xl" style={{background: 'linear-gradient(135deg, #C9A84C, #0a0f2e)'}}></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2" style={{borderColor: 'rgba(201,168,76,0.4)'}}>
                <img
                  src="/living room.jpeg"
                  alt="Beautifully cleaned living room by Queen Dee Services"
                  className="w-full h-auto object-cover"
                  style={{maxHeight: '520px', objectFit: 'cover'}}
                />
                <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(10,15,46,0.6) 0%, transparent 60%)'}}></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm" style={{color: '#C9A84C'}}>✦ Post-Construction Clean — Real Results</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100" style={{background: '#0a0f2e', borderColor: 'rgba(201,168,76,0.5)'}}>
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-lg" style={{background: 'rgba(201,168,76,0.2)'}}>
                    <CheckCircle className="w-6 h-6" style={{color: '#C9A84C'}} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-sm" style={{color: '#c8d0e8'}}>Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t" style={{background: '#f8f6f0', borderColor: '#e8d9b0'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-semibold text-sm uppercase tracking-wide" style={{ color: '#C9A84C' }}>Proof of Diligence</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4" style={{color: '#0a0f2e'}}>
              Real transformations. Real shine.
            </h2>
            <p className="max-w-3xl mx-auto text-lg" style={{color: '#4a5568'}}>
              Our work speaks for itself. These before-and-after results show the level of care,
              attention, and professionalism we bring to every project.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {proofItems.map((item) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setSelectedPoster(item.image)}
                className="rounded-3xl overflow-hidden border shadow-lg text-left cursor-pointer group"
                style={{background: '#fff', borderColor: 'rgba(201,168,76,0.2)'}}
                aria-label={`Open ${item.title} in full screen`}
              >
                <div className="relative">
                  <div className="absolute left-3 top-3 z-10 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide" style={{background: 'rgba(10,15,46,0.8)', color: '#f8f6f0'}}>
                    Before & After
                  </div>
                  <img src={item.image} alt={item.title} className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1" style={{color: '#0a0f2e'}}>{item.title}</h3>
                  <p style={{color: '#4a5568'}}>Deep cleaning, proper finishing, and detail-focused service that leaves every space fresh and welcoming.</p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-20">
            <div className="text-center mb-8">
              <span className="font-semibold text-sm uppercase tracking-wide" style={{ color: '#C9A84C' }}>Crew at work</span>
              <h3 className="text-2xl md:text-4xl font-bold mt-3" style={{color: '#0a0f2e'}}>Our team in action</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {crewWork.map((shot) => (
                <button
                  key={shot.title}
                  type="button"
                  onClick={() => setSelectedPoster(shot.image)}
                  className="overflow-hidden rounded-2xl border group shadow-md hover:shadow-xl transition-all text-left cursor-pointer"
                  style={{borderColor: 'rgba(201,168,76,0.2)', background: '#fff'}}
                  aria-label={`Open ${shot.title} in full screen`}
                >
                  <img src={shot.image} alt={shot.title} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="p-4">
                    <p className="font-semibold" style={{color: '#0a0f2e'}}>{shot.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: '#C9A84C' }}>Campaigns</p>
                <h3 className="text-2xl md:text-3xl font-bold mt-2" style={{ color: '#0a0f2e' }}>Our latest promotions & milestones</h3>
              </div>
              <p className="max-w-lg text-sm md:text-base" style={{ color: '#4a5568' }}>
                Real marketing moments that show how we keep our brand visible, trustworthy, and people-focused.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {promoPosters.map((poster) => (
                <button
                  key={poster.title}
                  type="button"
                  onClick={() => setSelectedPoster(poster.image)}
                  className="group relative overflow-hidden rounded-[28px] border shadow-lg hover:shadow-2xl transition-all text-left cursor-pointer"
                  style={{borderColor: 'rgba(201,168,76,0.25)', background: '#fff'}}
                  aria-label={`Open ${poster.title} in full screen`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2e]/80 via-[#0a0f2e]/10 to-transparent z-10" />
                  <img src={poster.image} alt={poster.title} className="w-full h-[470px] object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-x-0 bottom-0 z-20 p-5">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]" style={{ background: 'rgba(201,168,76,0.15)', color: '#f5e7aa' }}>
                      {poster.tag}
                    </span>
                    <p className="mt-3 text-xl font-bold text-white leading-tight">{poster.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {selectedPoster && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
              onClick={() => setSelectedPoster(null)}
            >
              <div className="relative w-full max-w-5xl rounded-2xl border border-white/10 bg-black/70 p-3 shadow-2xl" onClick={(event) => event.stopPropagation()}>
                <button
                  type="button"
                  onClick={() => setSelectedPoster(null)}
                  className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                  aria-label="Close full screen image"
                >
                  <X className="h-5 w-5" />
                </button>
                <img
                  src={selectedPoster}
                  alt="Selected poster preview"
                  className="max-h-[90vh] w-full rounded-xl object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 border-t" style={{background: '#f8f6f0', borderColor: '#e8d9b0'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-semibold text-sm uppercase tracking-wide" style={{ color: '#C9A84C' }}>Cleaning Tips</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4" style={{ color: '#0a0f2e' }}>
              Everyday home care reminders
            </h2>
            <p className="max-w-3xl mx-auto text-lg" style={{ color: '#4a5568' }}>
              A few quick reminders that help keep your space cleaner, healthier, and more comfortable every day.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {homeTips.map((tip) => (
              <div key={tip.file} className="rounded-3xl overflow-hidden border shadow-lg hover:shadow-xl transition-all" style={{ background: '#fff', borderColor: 'rgba(201,168,76,0.2)' }}>
                <img src={tip.file} alt={tip.title} className="w-full h-80 object-cover" />
                <div className="p-5">
                  <div className="mb-2 text-sm font-bold uppercase tracking-wide" style={{ color: '#C9A84C' }}>{tip.title}</div>
                  <p className="text-lg font-medium" style={{ color: '#0a0f2e' }}>{tip.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t" style={{background: '#f8f6f0', borderColor: '#e8d9b0'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{color: '#0a0f2e'}}>
              Why Choose Queen Dee Services?
            </h2>
            <p className="max-w-2xl mx-auto" style={{color: '#4a5568'}}>
              We stand out as Nigeria's trusted cleaning partner, committed to excellence in every
              service we provide.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border hover:shadow-lg transition-all"
                style={{background: 'white', borderColor: '#e8d9b0'}}
              >
                <CheckCircle className="w-8 h-8 mb-3" style={{color: '#C9A84C'}} />
                <p className="font-medium" style={{color: '#0a0f2e'}}>{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;