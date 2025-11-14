import { Target, Eye, Heart, Award, Users, TrendingUp } from 'lucide-react';

function About() {
  const values = [
    {
      icon: Heart,
      title: 'Excellence',
      description: 'We deliver nothing short of exceptional service in every job we undertake.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction and trust are at the heart of everything we do.',
    },
    {
      icon: Award,
      title: 'Professionalism',
      description: 'Our team is trained, certified, and committed to the highest standards.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We use modern techniques and eco-friendly products for superior results.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '10,000+', label: 'Jobs Completed' },
    { number: '50+', label: 'Expert Cleaners' },
    { number: '1', label: 'Major City Served' },
  ];

  return (
    <div className="pt-20 bg-white">
      <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
              Nigeria's Most Trusted Cleaning Company
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Queen Dee Services LTD is your premier cleaning partner, committed to delivering
              excellence and transforming spaces across Nigeria.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded with a vision to revolutionize the cleaning industry in Nigeria, Queen
                  Dee Services LTD has grown from a small local operation to one of the country's
                  most respected cleaning service providers.
                </p>
                <p>
                  What started as a passion for creating clean, healthy environments has evolved
                  into a commitment to excellence that serves hundreds of homes and businesses
                  across Lagos.
                </p>
                <p>
                  Our team of over 50 professional cleaners brings expertise, dedication, and
                  attention to detail to every project. We pride ourselves on using eco-friendly
                  products, modern cleaning techniques, and maintaining the highest standards of
                  professionalism.
                </p>
                <p>
                  Today, we are trusted by residential clients, corporate offices, medical
                  facilities, and commercial establishments who rely on us to maintain pristine,
                  healthy environments.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl transform rotate-3"></div>
                <img
                  src="/Queen.jpg"
                  alt="Queen Dee Services Team"
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover border-4 border-white"
                />
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-700 font-semibold mb-2">Founder & CEO</p>
                <p className="text-teal-600 font-bold text-lg">Queen Dee</p>
                <p className="text-gray-500 text-sm">Leading Nigeria's Cleaning Revolution</p>
              </div>
            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl font-bold text-teal-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-10 rounded-2xl text-white shadow-xl">
              <Target className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-teal-50 leading-relaxed">
                To provide exceptional cleaning services that exceed expectations, creating clean,
                healthy, and inspiring environments for our clients across Nigeria. We aim to set
                the standard for professionalism, reliability, and quality in the cleaning
                industry.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-2xl text-white shadow-xl">
              <Eye className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become Nigeria's leading cleaning services provider, recognized for our
                commitment to excellence, innovation, and customer satisfaction. We envision a
                future where every Nigerian home and business can access world-class cleaning
                services.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all group"
                >
                  <div className="bg-teal-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors">
                    <value.icon className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-teal-50 to-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Clients Trust Queen Dee Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="space-y-3">
              <div className="bg-teal-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Proven Track Record</h3>
              <p className="text-gray-600">
                Years of experience serving Nigerian homes and businesses with consistent
                excellence.
              </p>
            </div>
            <div className="space-y-3">
              <div className="bg-teal-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Trained Professionals</h3>
              <p className="text-gray-600">
                Our team is thoroughly vetted, trained, and equipped to handle any cleaning
                challenge.
              </p>
            </div>
            <div className="space-y-3">
              <div className="bg-teal-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Customer Satisfaction</h3>
              <p className="text-gray-600">
                98% satisfaction rate with thousands of happy customers across major Nigerian
                cities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
