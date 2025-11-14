import { Home, Building2, HardHat, PackageOpen, Sparkles, Bug, Briefcase, Sofa, ArrowRight } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Home,
      title: 'Residential Cleaning',
      description:
        'Transform your home into a spotless sanctuary. Our residential cleaning service covers every room, from bedrooms and living areas to kitchens and bathrooms.',
      benefits: [
        'Deep cleaning of all rooms',
        'Kitchen and bathroom sanitization',
        'Dusting and vacuuming',
        'Floor mopping and polishing',
        'Window cleaning',
      ],
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Building2,
      title: 'Office & Corporate Cleaning',
      description:
        'Maintain a professional, productive workspace with our comprehensive corporate cleaning solutions. We work around your schedule to minimize disruption.',
      benefits: [
        'Daily or scheduled office cleaning',
        'Desk and workstation sanitization',
        'Conference room cleaning',
        'Restroom maintenance',
        'Reception area upkeep',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: HardHat,
      title: 'Post-Construction Cleaning',
      description:
        'After construction or renovation, we remove all debris, dust, and residue to make your property move-in ready and sparkling clean.',
      benefits: [
        'Debris and dust removal',
        'Paint and cement cleanup',
        'Window and glass cleaning',
        'Floor polishing and finishing',
        'Final inspection ready',
      ],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: PackageOpen,
      title: 'Move-In/Move-Out Cleaning',
      description:
        'Whether you are moving in or out, we ensure your property is thoroughly cleaned, making transitions smooth and stress-free.',
      benefits: [
        'Complete property cleaning',
        'Appliance cleaning',
        'Cabinet and closet cleaning',
        'Detailed bathroom and kitchen work',
        'Landlord inspection ready',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Sparkles,
      title: 'Deep Cleaning',
      description:
        'Our intensive deep cleaning service tackles dirt, grime, and buildup in hard-to-reach areas, leaving your space immaculately clean.',
      benefits: [
        'Grout and tile deep cleaning',
        'Behind appliance cleaning',
        'Baseboard and trim cleaning',
        'Ceiling fan and fixture cleaning',
        'Intensive sanitization',
      ],
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Bug,
      title: 'Fumigation & Pest Control',
      description:
        'Protect your property from pests with our professional fumigation services. Safe, effective, and environmentally responsible treatments.',
      benefits: [
        'Termite treatment and prevention',
        'Mosquito and insect control',
        'Rodent elimination',
        'Pre and post-fumigation cleaning',
        'Safe for families and pets',
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Briefcase,
      title: 'Janitorial Services',
      description:
        'Comprehensive janitorial solutions for commercial buildings, schools, and institutions. Reliable, consistent, and professional.',
      benefits: [
        'Regular maintenance programs',
        'Trash removal and disposal',
        'Floor care and maintenance',
        'Restroom cleaning and restocking',
        'Common area upkeep',
      ],
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Sofa,
      title: 'Upholstery & Carpet Cleaning',
      description:
        'Revitalize your furniture and carpets with our specialized cleaning services. We remove stains, odors, and allergens effectively.',
      benefits: [
        'Deep carpet steam cleaning',
        'Furniture and upholstery cleaning',
        'Stain and odor removal',
        'Fabric protection treatment',
        'Fast drying techniques',
      ],
      color: 'from-amber-500 to-amber-600',
    },
  ];

  return (
    <div className="pt-20 bg-white">
      <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
              Comprehensive Cleaning Solutions for Every Need
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential homes to large commercial spaces, Queen Dee Services delivers
              exceptional cleaning tailored to your specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="bg-teal-100 rounded-full p-1 mt-0.5 mr-3 flex-shrink-0">
                            <ArrowRight className="w-3 h-3 text-teal-600" />
                          </div>
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className={`w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all group-hover:translate-y-[-2px]`}
                  >
                    Request This Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Not Sure Which Service You Need?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is here to help you choose the right cleaning solution. Contact us for a free
            consultation and personalized quote.
          </p>
          <button className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-teal-700 hover:to-teal-800 transition-all shadow-lg hover:shadow-xl">
            Get Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}

export default Services;
