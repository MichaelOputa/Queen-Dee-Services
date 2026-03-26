import { Target, Eye, Heart, Award, Users, TrendingUp } from 'lucide-react';

function About() {
  const values = [
    { icon: Heart, title: 'Excellence', description: 'We deliver nothing short of exceptional service in every job we undertake.' },
    { icon: Users, title: 'Customer First', description: 'Your satisfaction and trust are at the heart of everything we do.' },
    { icon: Award, title: 'Professionalism', description: 'Our team is trained, certified, and committed to the highest standards.' },
    { icon: TrendingUp, title: 'Innovation', description: 'We use modern techniques and eco-friendly products for superior results.' },
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '10,000+', label: 'Jobs Completed' },
    { number: '50+', label: 'Expert Cleaners' },
    { number: '3', label: 'Major Cities Served' },
  ];

  return (
    <div className="pt-20" style={{background: '#f8f6f0'}}>
      <section className="py-20" style={{background: 'linear-gradient(135deg, #0a0f2e 0%, #111a5c 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm uppercase tracking-wide" style={{color: '#C9A84C'}}>About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Nigeria's Most Trusted Cleaning Company
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{color: '#c8d0e8'}}>
              Queen Dee Services LTD is your premier cleaning partner, committed to delivering excellence and transforming spaces across Nigeria.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Our Story</h2>
              <div className="space-y-4 leading-relaxed" style={{color: '#c8d0e8'}}>
                <p>Founded with a vision to revolutionize the cleaning industry in Nigeria, Queen Dee Services LTD has grown from a small local operation to one of the country's most respected cleaning service providers.</p>
                <p>What started as a passion for creating clean, healthy environments has evolved into a commitment to excellence that serves hundreds of homes and businesses across Lagos, Abuja, and Port Harcourt.</p>
                <p>Our team of over 50 professional cleaners brings expertise, dedication, and attention to detail to every project. We pride ourselves on using eco-friendly products, modern cleaning techniques, and maintaining the highest standards of professionalism.</p>
                <p>Today, we are trusted by residential clients, corporate offices, medical facilities, and commercial establishments who rely on us to maintain pristine, healthy environments.</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 rounded-3xl transform rotate-3" style={{background: 'linear-gradient(135deg, #C9A84C, #e8c96a)'}}></div>
                <img src="/Queen.jpg" alt="Queen Dee Services Team" className="relative rounded-3xl shadow-2xl w-full h-auto object-cover border-4 border-white" />
              </div>
              <div className="mt-8 text-center">
                <p className="text-white font-semibold mb-2">Founder & CEO</p>
                <p className="font-bold text-lg" style={{color: '#C9A84C'}}>Onikosi Deborah Timileyin Tiaraoluwa</p>
                <p className="font-bold text-lg" style={{color: '#C9A84C'}}>known as Queen Dee</p>
                <p className="text-sm" style={{color: '#c8d0e8'}}>Leading Nigeria's Cleaning Revolution</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="p-8 rounded-2xl text-center" style={{background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)'}}>
                <div className="text-4xl font-bold mb-2" style={{color: '#C9A84C'}}>{stat.number}</div>
                <div className="font-medium text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{background: '#f8f6f0'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="p-10 rounded-2xl text-white shadow-xl" style={{background: 'linear-gradient(135deg, #0a0f2e, #111a5c)', border: '1px solid rgba(201,168,76,0.3)'}}>
              <Target className="w-12 h-12 mb-6" style={{color: '#C9A84C'}} />
              <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
              <p className="leading-relaxed" style={{color: '#c8d0e8'}}>To provide exceptional cleaning services that exceed expectations, creating clean, healthy, and inspiring environments for our clients across Nigeria. We aim to set the standard for professionalism, reliability, and quality in the cleaning industry.</p>
            </div>
            <div className="p-10 rounded-2xl text-white shadow-xl" style={{background: 'linear-gradient(135deg, #1a1000, #3a2800)', border: '1px solid rgba(201,168,76,0.3)'}}>
              <Eye className="w-12 h-12 mb-6" style={{color: '#C9A84C'}} />
              <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="leading-relaxed" style={{color: '#c8d0e8'}}>To become Nigeria's leading cleaning services provider, recognized for our commitment to excellence, innovation, and customer satisfaction. We envision a future where every Nigerian home and business can access world-class cleaning services.</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-center" style={{color: '#0a0f2e'}}>Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="p-6 rounded-xl border hover:shadow-lg transition-all group" style={{background: 'white', borderColor: '#e8d9b0'}}>
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-colors" style={{background: 'rgba(201,168,76,0.15)'}}>
                    <value.icon className="w-7 h-7 transition-colors" style={{color: '#C9A84C'}} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{color: '#0a0f2e'}}>{value.title}</h3>
                  <p className="leading-relaxed" style={{color: '#4a5568'}}>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t" style={{background: '#0a0f2e', borderColor: 'rgba(201,168,76,0.2)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Why Clients Trust Queen Dee Services</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Award, title: 'Proven Track Record', desc: 'Years of experience serving Nigerian homes and businesses with consistent excellence.' },
              { icon: Users, title: 'Trained Professionals', desc: 'Our team is thoroughly vetted, trained, and equipped to handle any cleaning challenge.' },
              { icon: Heart, title: 'Customer Satisfaction', desc: '98% satisfaction rate with thousands of happy customers across major Nigerian cities.' },
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto" style={{background: 'rgba(201,168,76,0.2)', border: '1px solid rgba(201,168,76,0.4)'}}>
                  <item.icon className="w-6 h-6" style={{color: '#C9A84C'}} />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p style={{color: '#c8d0e8'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;