import { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  type: 'before' | 'after';
  image_url: string;
}

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Modern Living Room',
      category: 'Residential',
      type: 'before',
      image_url: 'before.jpg',
    },
    {
      id: '2',
      title: 'Modern Living Room',
      category: 'Residential',
      type: 'after',
      image_url: 'public/after.jpg',
    },
    {
      id: '3',
      title: 'Corporate Office',
      category: 'Commercial',
      type: 'before',
      image_url: 'before 2.jpg',
    },
    {
      id: '4',
      title: 'Corporate Office',
      category: 'Commercial',
      type: 'after',
      image_url: 'after 2.jpg',
    },
    {
      id: '5',
      title: 'Studio Deep Clean',
      category: 'Deep Cleaning',
      type: 'before',
      image_url: 'before 3.jpg',
    },
    {
      id: '6',
      title: 'Studio Deep Clean',
      category: 'Deep Cleaning',
      type: 'after',
      image_url: 'after 3.jpg',
    },
    {
      id: '7',
      title: 'Air conditioning Unit Cleaning',
      category: 'Air Conditioning',
      type: 'before',
      image_url: 'before 4.jpg',
    },
    {
      id: '8',
      title: 'Air Conditioning Unit Cleaning',
      category: 'Air Conditioning',
      type: 'after',
      image_url: 'after 4.jpg',
    },
  ];

  const whatsappLink = (title: string) => {
    const message = `Hi! I'm interested in your ${title} cleaning service.`;
    return `https://wa.me/2349132433968?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="pt-20 bg-white">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
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
                key={item.id}
                onClick={() => setSelectedImage(index)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all"
              >
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="absolute inset-x-0 bottom-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                      item.type === 'before' ? 'bg-gray-600' : 'bg-blue-600'
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
                        : 'bg-blue-600 text-white'
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
            <a
              href={whatsappLink('')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
            >
              Book Your Service
            </a>
          </div>
        </div>
      </section>

      {selectedImage !== null && galleryItems[selectedImage] && (
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
            <img
              src={galleryItems[selectedImage].image_url}
              alt={galleryItems[selectedImage].title}
              className="w-full rounded-xl shadow-2xl"
            />
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
