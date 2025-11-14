import { Star, Quote } from 'lucide-react';

function Testimonials() {
  const testimonials = [
    {
      name: 'Mrs. Adebayo Folake',
      location: 'Lekki, Lagos',
      rating: 5,
      text: 'Queen Dee Services transformed my home! Their attention to detail is incredible. Every corner was spotless, and the team was so professional and respectful. I highly recommend them to anyone looking for quality cleaning services in Lagos.',
      service: 'Residential Cleaning',
    },
    {
      name: 'Chief Emmanuel Okonkwo',
      location: 'Victoria Island, Lagos',
      rating: 5,
      text: 'We have been using Queen Dee Services for our corporate office for over a year now. They are reliable, thorough, and always exceed our expectations. Our employees appreciate coming to a clean and fresh workspace every morning.',
      service: 'Office Cleaning',
    },
    {
      name: 'Barr. Chioma Nwankwo',
      location: 'Yaba, Lagos',
      rating: 5,
      text: 'After our office renovation, Queen Dee Services did an outstanding post-construction cleanup. They removed all the dust and debris, and made the place look brand new. Very impressed with their efficiency and professionalism.',
      service: 'Post-Construction',
    },
    {
      name: 'Mr. Tunde Adeyemi',
      location: 'Ikoyi, Lagos',
      rating: 5,
      text: 'I needed a deep cleaning for my apartment before moving in, and Queen Dee Services delivered beyond my expectations. The place looked and smelled amazing. Their team was punctual and did an excellent job. Worth every naira!',
      service: 'Move-In Cleaning',
    },
    {
      name: 'Dr. Aisha Bello',
      location: 'Alapere, Lagos',
      rating: 5,
      text: 'As a busy professional, having Queen Dee Services handle my home cleaning has been a lifesaver. They are trustworthy, thorough, and always consistent. I can focus on my work knowing my home is in good hands.',
      service: 'Residential Cleaning',
    },
    {
      name: 'Engr. Peter Okoro',
      location: 'Ogudu, Lagos',
      rating: 5,
      text: 'We hired Queen Dee Services for fumigation and deep cleaning of our warehouse. The team was professional, used safe products, and the results were excellent. No more pest issues! Highly recommended for commercial properties.',
      service: 'Fumigation',
    },
    {
      name: 'Mrs. Grace Oladele',
      location: 'Ajah, Lagos',
      rating: 5,
      text: 'The carpet and upholstery cleaning service was fantastic! My furniture looks brand new again. The stains I thought were permanent are completely gone. Queen Dee Services really knows what they are doing.',
      service: 'Carpet Cleaning',
    },
    {
      name: 'Alhaji Musa Ibrahim',
      location: 'Lekki, Lagos',
      rating: 5,
      text: 'Queen Dee Services provides janitorial services for our shopping complex. They are reliable, professional, and maintain high standards. Our tenants are very happy with the cleanliness of the common areas.',
      service: 'Janitorial Services',
    },
    {
      name: 'Miss Blessing Eze',
      location: 'Surulere, Lagos',
      rating: 5,
      text: 'I was amazed by the level of service I received. The cleaners were polite, efficient, and left my apartment sparkling clean. The booking process was easy and the pricing was fair. Will definitely use them again!',
      service: 'Residential Cleaning',
    },
    {
      name: 'Mr. Ifeanyi Okeke',
      location: 'Ikeja, Lagos',
      rating: 5,
      text: 'Our company has tried several cleaning services, but Queen Dee Services is by far the best. They are consistent, professional, and their staff is well-trained. Our office has never looked better!',
      service: 'Office Cleaning',
    },
    {
      name: 'Mrs. Funmi Bakare',
      location: 'Banana Island, Lagos',
      rating: 5,
      text: 'Queen Dee Services handled the cleaning of my 5-bedroom home with such care and attention. They even cleaned areas I forgot to mention! The team is trustworthy and hardworking. I am now a loyal customer.',
      service: 'Deep Cleaning',
    },
    {
      name: 'Pastor Solomon Adeleke',
      location: 'Bode Thomas, Lagos',
      rating: 5,
      text: 'We needed cleaning services for our church facility, and Queen Dee Services was perfect. They were respectful, thorough, and completed the job on time. The congregation noticed the difference immediately!',
      service: 'Janitorial Services',
    },
  ];

  const stats = [
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '500+', label: 'Happy Clients' },
    { number: '4.9/5', label: 'Average Rating' },
  ];

  return (
    <div className="pt-20 bg-white">
      <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">
              Testimonials
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
              What Our Clients Say About Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what hundreds of satisfied clients across
              Nigeria have to say about Queen Dee Services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
              >
                <div className="text-4xl font-bold text-teal-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-teal-100" />
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                    <span className="text-xs bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-medium">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join Hundreds of Satisfied Customers
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Experience the exceptional service that has earned us a 98% satisfaction rate. Book
            your cleaning service today!
          </p>
          <button className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-teal-700 hover:to-teal-800 transition-all shadow-lg hover:shadow-xl">
            Book Your Service Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
