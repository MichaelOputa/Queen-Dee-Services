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
    { id: '1', title: 'Modern Bed Room', category: 'Residential', type: 'before', image_url: 'before.jpg' },
    { id: '2', title: 'Modern Bed Room', category: 'Residential', type: 'after', image_url: 'after.jpg' },
    { id: '3', title: 'Corporate Office', category: 'Commercial', type: 'before', image_url: 'before 2.jpg' },
    { id: '4', title: 'Corporate Office', category: 'Commercial', type: 'after', image_url: 'after 2.jpg' },
    { id: '5', title: 'Bedroom Deep Clean', category: 'Deep Cleaning', type: 'before', image_url: 'before 3.jpg' },
    { id: '6', title: 'Bedroom Deep Clean', category: 'Deep Cleaning', type: 'after', image_url: 'after 3.jpg' },
    { id: '7', title: 'Air conditioning Unit Cleaning', category: 'Air Conditioning', type: 'before', image_url: 'before 4.jpg' },
    { id: '8', title: 'Air Conditioning Unit Cleaning', category: 'Air Conditioning', type: 'after', image_url: 'after 4.jpg' },
  ];

  const whatsappLink = (title: string) => {
    const message = `Hi! I'm interested in your ${title} cleaning service.`;
    return `https://wa.me/2349132433968?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="pt-20" style={{background: '#f8f6f0'}}>
      <section className="py-20" style={{background: 'linear-gradient(135deg, #0a0f2e 0%, #111a5c 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm uppercase tracking-wide" style={{color: '#C9A84C'}}>Our Work</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">Before & After Gallery</h1>
            <p className="text-xl max-w-3xl mx-auto" style={{color: '#c8d0e8'}}>See the transformation! Browse through our portfolio showcasing the dramatic difference our professional cleaning services make.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(index)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all"
                style={{border: '1px solid rgba(201,168,76,0.2)'}}
              >
                <img src={item.image_url} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'linear-gradient(to top, rgba(10,15,46,0.9) 0%, rgba(10,15,46,0.2) 100%)'}}></div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2" style={{background: item.type === 'before' ? 'rgba(255,255,255,0.2)' : 'linear-gradient(135deg, #C9A84C, #e8c96a)', color: item.type === 'after' ? '#0a0f2e' : 'white'}}>
                    {item.type === 'before' ? 'Before' : 'After'}
                  </span>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-sm" style={{color: '#c8d0e8'}}>{item.category}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{background: 'rgba(10,15,46,0.7)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.4)'}}>
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t" style={{background: '#f8f6f0', borderColor: '#e8d9b0'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{color: '#0a0f2e'}}>Ready to Transform Your Space?</h2>
          <p className="mb-8 text-lg" style={{color: '#4a5568'}}>Experience the same exceptional results. Book your cleaning service today and see the Queen Dee difference.</p>
          <a
            href={whatsappLink('')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all"
            style={{background: 'linear-gradient(135deg, #C9A84C, #e8c96a)', color: '#0a0f2e'}}
          >
            Book Your Service
          </a>
        </div>
      </section>

      {selectedImage !== null && galleryItems[selectedImage] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{background: 'rgba(10,15,46,0.97)'}} onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 p-3 rounded-full transition-colors" style={{background: 'rgba(201,168,76,0.2)', color: '#C9A84C'}} onClick={() => setSelectedImage(null)}>
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-5xl w-full">
            <img src={galleryItems[selectedImage].image_url} alt={galleryItems[selectedImage].title} className="w-full rounded-xl shadow-2xl" />
            <div className="mt-6 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{galleryItems[selectedImage].title}</h3>
              <p style={{color: '#C9A84C'}}>{galleryItems[selectedImage].category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;