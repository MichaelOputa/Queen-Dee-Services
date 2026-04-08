import { useState } from 'react';
import { X, Play, Image as ImageIcon, Video } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  type: 'before' | 'after';
  mediaType: 'image' | 'video';
  url: string;
  thumbnail?: string;
}

function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'images' | 'videos'>('all');

  const galleryItems: GalleryItem[] = [
    // Images
    { id: '1',  title: 'Modern Bed Room',               category: 'Residential',      type: 'before', mediaType: 'image', url: 'before.jpg' },
    { id: '2',  title: 'Modern Bed Room',               category: 'Residential',      type: 'after',  mediaType: 'image', url: 'after.jpg' },
    { id: '3',  title: 'Corporate Office',              category: 'Commercial',       type: 'before', mediaType: 'image', url: 'before 2.jpg' },
    { id: '4',  title: 'Corporate Office',              category: 'Commercial',       type: 'after',  mediaType: 'image', url: 'after 2.jpg' },
    { id: '5',  title: 'Bedroom Deep Clean',            category: 'Deep Cleaning',    type: 'before', mediaType: 'image', url: 'before 3.jpg' },
    { id: '6',  title: 'Bedroom Deep Clean',            category: 'Deep Cleaning',    type: 'after',  mediaType: 'image', url: 'after 3.jpg' },
    { id: '7',  title: 'Air Conditioning Unit Cleaning', category: 'Air Conditioning', type: 'before', mediaType: 'image', url: 'before 4.jpg' },
    { id: '8',  title: 'Air Conditioning Unit Cleaning', category: 'Air Conditioning', type: 'after',  mediaType: 'image', url: 'after 4.jpg' },
    // Videos — add your actual video filenames in the url field
    { id: 'v1', title: 'Deep Cleaning Walkthrough',     category: 'Deep Cleaning',    type: 'after',  mediaType: 'video', url: 'video1.mp4' },
    { id: 'v2', title: 'Post-Construction Cleanup',     category: 'Commercial',       type: 'after',  mediaType: 'video', url: 'video2.mp4' },
    { id: 'v3', title: 'Office Cleaning Showcase',      category: 'Commercial',       type: 'after',  mediaType: 'video', url: 'video3.mp4' },
  ];

  const filtered = galleryItems.filter(item => {
    if (activeTab === 'images') return item.mediaType === 'image';
    if (activeTab === 'videos') return item.mediaType === 'video';
    return true;
  });

  const tabStyle = (tab: typeof activeTab): React.CSSProperties => ({
    display: 'flex', alignItems: 'center', gap: '8px',
    padding: '10px 24px', borderRadius: '8px',
    fontWeight: 600, fontSize: '0.82rem', letterSpacing: '0.06em',
    border: 'none', cursor: 'pointer',
    transition: 'all 0.2s',
    background: activeTab === tab ? 'linear-gradient(135deg, #C9A84C, #e8c96a)' : 'rgba(255,255,255,0.05)',
    color: activeTab === tab ? '#0a0f2e' : '#c8d0e8',
    boxShadow: activeTab === tab ? '0 4px 16px rgba(201,168,76,0.3)' : 'none',
  });

  return (
    <div className="pt-20" style={{ background: '#f8f6f0' }}>
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0a0f2e 0%, #111a5c 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-12">
            <span className="font-semibold text-sm uppercase tracking-wide" style={{ color: '#C9A84C' }}>Our Work</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">Before & After Gallery</h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#c8d0e8' }}>
              See the transformation! Browse through our portfolio showcasing the dramatic difference our professional cleaning services make.
            </p>
          </div>

          {/* Tab filters */}
          <div className="flex justify-center mb-12">
            <div style={{ display: 'flex', gap: '10px', padding: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(201,168,76,0.15)' }}>
              <button onClick={() => setActiveTab('all')} style={tabStyle('all')}>All</button>
              <button onClick={() => setActiveTab('images')} style={tabStyle('images')}>
                <ImageIcon size={15} /> Images
              </button>
              <button onClick={() => setActiveTab('videos')} style={tabStyle('videos')}>
                <Video size={15} /> Videos
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all"
                style={{ aspectRatio: '4/3', border: '1px solid rgba(201,168,76,0.2)' }}
              >
                {item.mediaType === 'image' ? (
                  <img
                    src={item.url}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={e => {
                      (e.currentTarget as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%230a0f2e"/%3E%3Ctext x="200" y="155" text-anchor="middle" fill="%23C9A84C" font-family="sans-serif" font-size="14"%3EImage Loading...%3C/text%3E%3C/svg%3E';
                    }}
                  />
                ) : (
                  <>
                    {/* Video thumbnail — uses the video itself as src for poster */}
                    <video
                      src={item.url}
                      className="absolute inset-0 w-full h-full object-cover"
                      muted
                      preload="metadata"
                      style={{ pointerEvents: 'none' }}
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(10,15,46,0.45)' }}>
                      <div className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: 'linear-gradient(135deg, #C9A84C, #e8c96a)', boxShadow: '0 4px 24px rgba(201,168,76,0.5)' }}>
                        <Play className="w-7 h-7 ml-1" style={{ color: '#0a0f2e' }} fill="#0a0f2e" />
                      </div>
                    </div>
                  </>
                )}

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(to top, rgba(10,15,46,0.92) 0%, rgba(10,15,46,0.15) 100%)' }} />

                {/* Bottom info */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-white transform translate-y-1 group-hover:translate-y-0 transition-transform opacity-0 group-hover:opacity-100">
                  <h3 className="text-base font-bold mb-1">{item.title}</h3>
                  <p className="text-sm" style={{ color: '#c8d0e8' }}>{item.category}</p>
                </div>

                {/* Top badges */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: item.type === 'after' ? 'linear-gradient(135deg, #C9A84C, #e8c96a)' : 'rgba(255,255,255,0.15)',
                      color: item.type === 'after' ? '#0a0f2e' : 'white',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    {item.type === 'before' ? 'Before' : 'After'}
                  </span>
                  <span
                    className="text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1"
                    style={{ background: 'rgba(10,15,46,0.75)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.4)', backdropFilter: 'blur(4px)' }}
                  >
                    {item.mediaType === 'video' ? <Video size={11} /> : <ImageIcon size={11} />}
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16 border-t" style={{ background: '#f8f6f0', borderColor: '#e8d9b0' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#0a0f2e' }}>Ready to Transform Your Space?</h2>
          <p className="mb-8 text-lg" style={{ color: '#4a5568' }}>
            Experience the same exceptional results. Book your cleaning service today and see the Queen Dee difference.
          </p>
          <a
            href="https://wa.me/2349132433968?text=Hi%20Queen%20Dee!%20I%20saw%20your%20gallery%20and%20would%20like%20to%20book%20a%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all"
            style={{ background: 'linear-gradient(135deg, #C9A84C, #e8c96a)', color: '#0a0f2e' }}
          >
            Book Your Service
          </a>
        </div>
      </section>

      {/* Lightbox modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(5,8,25,0.97)' }}
          onClick={() => setSelectedItem(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-5 right-5 p-3 rounded-full transition-colors z-10"
            style={{ background: 'rgba(201,168,76,0.15)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)' }}
            onClick={() => setSelectedItem(null)}
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-5xl w-full"
            onClick={e => e.stopPropagation()}
          >
            {selectedItem.mediaType === 'image' ? (
              <img
                src={selectedItem.url}
                alt={selectedItem.title}
                className="w-full rounded-2xl shadow-2xl"
                style={{ maxHeight: '80vh', objectFit: 'contain' }}
              />
            ) : (
              <video
                src={selectedItem.url}
                controls
                autoPlay
                className="w-full rounded-2xl shadow-2xl"
                style={{ maxHeight: '80vh', background: '#000' }}
              >
                Your browser does not support the video tag.
              </video>
            )}

            <div className="mt-5 text-center">
              <h3 className="text-2xl font-bold text-white mb-1">{selectedItem.title}</h3>
              <div className="flex items-center justify-center gap-3">
                <span style={{ color: '#C9A84C', fontSize: '0.85rem', fontWeight: 600 }}>{selectedItem.category}</span>
                <span style={{ color: 'rgba(201,168,76,0.4)' }}>•</span>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{
                    background: selectedItem.type === 'after' ? 'linear-gradient(135deg, #C9A84C, #e8c96a)' : 'rgba(255,255,255,0.12)',
                    color: selectedItem.type === 'after' ? '#0a0f2e' : 'white',
                  }}
                >
                  {selectedItem.type === 'before' ? 'Before' : 'After'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;