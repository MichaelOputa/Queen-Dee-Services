import { ArrowRight, CheckCircle, Star, Shield, Clock } from 'lucide-react';

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
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE0YjhhNiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="bg-teal-100 text-teal-800 text-sm font-semibold px-4 py-2 rounded-full">
                  Nigeria's Premier Cleaning Company
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Premium Cleaning Solutions for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">
                  Homes & Businesses
                </span>{' '}
                Across Nigeria
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Experience the difference with Queen Dee Services LTD. We deliver exceptional
                cleaning services that transform your spaces into pristine environments. From
                residential homes to corporate offices, we ensure every corner sparkles.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/2349132433968?text=Hi%20Queen%20Dee%20Services!%20I%20would%20like%20to%20book%20a%20cleaning%20service.%20Please%20let%20me%20know%20availability%20and%20pricing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-teal-700 hover:to-teal-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Book a Cleaning</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 pt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <feature.icon className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-700 leading-snug">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-teal-100 to-teal-50 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-32 h-32 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center">
                      <Star className="w-16 h-16 text-teal-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Sparkling Clean Spaces
                    </h3>
                    <p className="text-gray-600">Professional cleaning you can trust</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">98%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Queen Dee Services?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We stand out as Nigeria's trusted cleaning partner, committed to excellence in every
              service we provide.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all"
              >
                <CheckCircle className="w-8 h-8 text-teal-600 mb-3" />
                <p className="text-gray-900 font-medium">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
