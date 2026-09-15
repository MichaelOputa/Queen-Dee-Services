import { ArrowRight, Star, Shield, Clock, CheckCircle } from 'lucide-react';

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

  return (
    <div className="pt-20">
      <section className="relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0B1F3A 0%, #111111 50%, #0B1F3A 100%)'}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='%23D4AF37' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`}}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-sm font-semibold px-4 py-2 rounded-full" style={{background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.5)', color: '#D4AF37'}}>
                  Nigeria's Premier Cleaning Company
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Premium Cleaning Solutions for{' '}
                <span style={{color: '#D4AF37'}}>
                  Homes & Businesses
                </span>{' '}
                Across Nigeria
              </h1>

              <p className="text-lg leading-relaxed" style={{color: '#E7ECF3'}}>
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
                  style={{background: 'linear-gradient(135deg, #D4AF37, #F0D57A)'}}
                  onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #B08A1A, #D4AF37)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #D4AF37, #F0D57A)')}
                >
                  <span style={{color: '#0B1F3A', fontWeight: 700}}>Book a Cleaning</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" style={{color: '#0B1F3A'}} />
                </a>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 pt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <feature.icon className="w-5 h-5 flex-shrink-0 mt-1" style={{color: '#D4AF37'}} />
                    <span className="text-sm leading-snug" style={{color: '#E7ECF3'}}>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl opacity-30 blur-xl" style={{background: 'linear-gradient(135deg, #D4AF37, #0B1F3A)'}}></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2" style={{borderColor: 'rgba(212,175,55,0.5)'}}>
                <img
                  src="/homepage.jpg"
                  alt="Beautifully cleaned living room by Queen Dee Services"
                  className="w-full h-auto object-cover"
                  style={{maxHeight: '520px', objectFit: 'cover'}}
                />
                <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(11,31,58,0.8) 0%, transparent 60%)'}}></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm" style={{color: '#F0D57A'}}>✦ Premium Cleaning — Real Results</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100" style={{background: '#111111', borderColor: 'rgba(212,175,55,0.6)'}}>
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-lg" style={{background: 'rgba(201,168,76,0.2)'}}>
                    <CheckCircle className="w-6 h-6" style={{color: '#D4AF37'}} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-sm" style={{color: '#E7ECF3'}}>Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>

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
                <div className="w-8 h-8 mb-3 rounded-full flex items-center justify-center" style={{background: 'rgba(212,175,55,0.15)', color: '#D4AF37', fontWeight: 700}}>{index + 1}</div>
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