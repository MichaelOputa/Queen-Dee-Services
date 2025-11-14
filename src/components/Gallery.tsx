import { useState } from 'react';
import { Image as ImageIcon, X } from 'lucide-react';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      title: 'Modern Living Room - Before',
      category: 'Residential',
      type: 'before',
      image: 'public/before.jpg',
      color: 'from-gray-400 to-gray-500',
    },
    {
      title: 'Modern Living Room - After',
      category: 'Residential',
      type: 'after',
      image: 'public/after.jpg',
      color: 'from-teal-400 to-teal-500',
    },
    {
      title: 'Corporate Office - Before',
      category: 'Commercial',
      type: 'before',
      color: 'from-gray-400 to-gray-500',
    },
    {
      title: 'Corporate Office - After',
      category: 'Commercial',
      type: 'after',
      color: 'from-blue-400 to-blue-500',
    },
    {
      title: 'Kitchen Deep Clean - Before',
      category: 'Deep Cleaning',
      type: 'before',
      color: 'from-gray-400 to-gray-500',
    },
    {
      title: 'Kitchen Deep Clean - After',
      category: 'Deep Cleaning',
      type: 'after',
      color: 'from-teal-400 to-teal-500',
    },
    {
      title: 'Bathroom Renovation - Before',
      category: 'Post-Construction',
      type: 'before',
      color: 'from-gray-400 to-gray-500',
    },
    {
      title: 'Bathroom Renovation - After',
      category: 'Post-Construction',
      type: 'after',
      color: 'from-orange-400 to-orange-500',
    },
    {
      title: 'Conference Room - Before',
      category: 'Commercial',
      type: 'before',
      color: 'from-gray-400 to-gray-500',
    },
    {
      title: 'Conference Room - After',
      category: 'Commercial',
      type: 'after',
      color: 'from-teal-400 to-teal-500',
    },
    {
      title: 'Carpet Cleaning - Before',
      category: 'Specialized',
      type: 'before',
      color: 'from-gray-400 to-gray-500',
    },
    {
      title: 'Carpet Cleaning - After',
      category: 'Specialized',
      type: 'after',
      color: 'from-amber-400 to-amber-500',
    },
  ];

  return (
    <div className="pt-20 bg-white">
      <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
              Before & After Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the transformation! Browse through our portfolio showcasing the dramatic
              difference our professional cleaning services make.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} flex items-center justify-center`}
                >
                  <ImageIcon className="w-16 h-16 text-white opacity-50" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="absolute inset-x-0 bottom-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                      item.type === 'before' ? 'bg-gray-600' : 'bg-teal-600'
                    }`}
                  >
                    {item.type === 'before' ? 'Before' : 'After'}
                  </span>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.category}</p>
                </div>

                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.type === 'before'
                        ? 'bg-white/90 text-gray-800'
                        : 'bg-teal-600 text-white'
                    }`}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Experience the same exceptional results. Book your cleaning service today and see the
            Queen Dee difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-teal-700 hover:to-teal-800 transition-all shadow-lg hover:shadow-xl">
              Book Your Service
            </button>
            <button className="bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-teal-600 hover:bg-teal-50 transition-all">
              Reach Out to Us
            </button>
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-5xl w-full">
            <div
              className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${galleryItems[selectedImage].color} flex items-center justify-center`}
            >
              <ImageIcon className="w-32 h-32 text-white opacity-50" />
            </div>
            <div className="mt-6 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{galleryItems[selectedImage].title}</h3>
              <p className="text-gray-300">{galleryItems[selectedImage].category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
