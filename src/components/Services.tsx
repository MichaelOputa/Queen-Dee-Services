import { Home, Building2, HardHat, PackageOpen, Sparkles, Bug, Briefcase, Sofa, ArrowRight } from 'lucide-react';

function Services() {
  const services = [
    { icon: Home, title: 'Residential Cleaning', description: 'Transform your home into a spotless sanctuary. Our residential cleaning service covers every room, from bedrooms and living areas to kitchens and bathrooms.', benefits: ['Deep cleaning of all rooms', 'Kitchen and bathroom sanitization', 'Dusting and vacuuming', 'Floor mopping and polishing', 'Window cleaning'], accent: '#C9A84C' },
    { icon: Building2, title: 'Office & Corporate Cleaning', description: 'Maintain a professional, productive workspace with our comprehensive corporate cleaning solutions. We work around your schedule to minimize disruption.', benefits: ['Daily or scheduled office cleaning', 'Desk and workstation sanitization', 'Conference room cleaning', 'Restroom maintenance', 'Reception area upkeep'], accent: '#4a7fc1' },
    { icon: HardHat, title: 'Post-Construction Cleaning', description: 'After construction or renovation, we remove all debris, dust, and residue to make your property move-in ready and sparkling clean.', benefits: ['Debris and dust removal', 'Paint and cement cleanup', 'Window and glass cleaning', 'Floor polishing and finishing', 'Final inspection ready'], accent: '#C9A84C' },
    { icon: PackageOpen, title: 'Move-In/Move-Out Cleaning', description: 'Whether you are moving in or out, we ensure your property is thoroughly cleaned, making transitions smooth and stress-free.', benefits: ['Complete property cleaning', 'Appliance cleaning', 'Cabinet and closet cleaning', 'Detailed bathroom and kitchen work', 'Landlord inspection ready'], accent: '#4a7fc1' },
    { icon: Sparkles, title: 'Deep Cleaning', description: 'Our intensive deep cleaning service tackles dirt, grime, and buildup in hard-to-reach areas, leaving your space immaculately clean.', benefits: ['Grout and tile deep cleaning', 'Behind appliance cleaning', 'Baseboard and trim cleaning', 'Ceiling fan and fixture cleaning', 'Intensive sanitization'], accent: '#C9A84C' },
    { icon: Bug, title: 'Fumigation & Pest Control', description: 'Protect your property from pests with our professional fumigation services. Safe, effective, and environmentally responsible treatments.', benefits: ['Termite treatment and prevention', 'Mosquito and insect control', 'Rodent elimination', 'Pre and post-fumigation cleaning', 'Safe for families and pets'], accent: '#4a7fc1' },
    { icon: Briefcase, title: 'Janitorial Services', description: 'Comprehensive janitorial solutions for commercial buildings, schools, and institutions. Reliable, consistent, and professional.', benefits: ['Regular maintenance programs', 'Trash removal and disposal', 'Floor care and maintenance', 'Restroom cleaning and restocking', 'Common area upkeep'], accent: '#C9A84C' },
    { icon: Sofa, title: 'Upholstery & Carpet Cleaning', description: 'Revitalize your furniture and carpets with our specialized cleaning services. We remove stains, odors, and allergens effectively.', benefits: ['Deep carpet steam cleaning', 'Furniture and upholstery cleaning', 'Stain and odor removal', 'Fabric protection treatment', 'Fast drying techniques'], accent: '#4a7fc1' },
  ];

  return (
    <div className="pt-20" style={{background: '#f8f6f0'}}>
      <section className="py-20" style={{background: 'linear-gradient(135deg, #0a0f2e 0%, #111a5c 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm uppercase tracking-wide" style={{color: '#C9A84C'}}>Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">Comprehensive Cleaning Solutions for Every Need</h1>
            <p className="text-xl max-w-3xl mx-auto" style={{color: '#c8d0e8'}}>From residential homes to large commercial spaces, Queen Dee Services delivers exceptional cleaning tailored to your specific requirements.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="rounded-2xl overflow-hidden hover:shadow-2xl transition-all group" style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.2)'}}>
                <div className="h-1" style={{background: `linear-gradient(90deg, ${service.accent}, transparent)`}}></div>
                <div className="p-8">
                  <div className="inline-flex p-3 rounded-xl mb-6" style={{background: `rgba(${service.accent === '#C9A84C' ? '201,168,76' : '74,127,193'},0.15)`, border: `1px solid ${service.accent}40`}}>
                    <service.icon className="w-8 h-8" style={{color: service.accent}} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="mb-6 leading-relaxed" style={{color: '#c8d0e8'}}>{service.description}</p>
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-sm uppercase tracking-wide" style={{color: service.accent}}>What's Included:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <ArrowRight className="w-4 h-4 mr-3 flex-shrink-0 mt-0.5" style={{color: service.accent}} />
                          <span className="text-sm" style={{color: '#c8d0e8'}}>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={`https://wa.me/2349132433968?text=${encodeURIComponent(`Hi Queen Dee Services! I'm interested in your ${service.title} service. Could you provide more details and a quote?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 rounded-lg font-semibold text-center transition-all"
                    style={{background: `linear-gradient(135deg, ${service.accent}, ${service.accent}cc)`, color: service.accent === '#C9A84C' ? '#0a0f2e' : 'white'}}
                  >
                    Request This Service
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t" style={{background: '#f8f6f0', borderColor: '#e8d9b0'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{color: '#0a0f2e'}}>Not Sure Which Service You Need?</h2>
          <p className="mb-8 max-w-2xl mx-auto" style={{color: '#4a5568'}}>Our team is here to help you choose the right cleaning solution. Contact us for a free consultation and personalized quote.</p>
          <a
            href="https://wa.me/2349132433968?text=Hi%20Queen%20Dee%20Services!%20I'd%20like%20to%20schedule%20a%20free%20consultation%20to%20discuss%20which%20cleaning%20service%20would%20be%20best%20for%20me."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all"
            style={{background: 'linear-gradient(135deg, #C9A84C, #e8c96a)', color: '#0a0f2e'}}
          >
            Get Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}

export default Services;