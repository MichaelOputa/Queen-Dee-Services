const tips = [
  {
    day: 'Day 5',
    title: 'Fans collect hidden dust',
    description: 'Dirty fan blades spread dust around the house every time they rotate.',
    accent: 'dark',
    background: 'linear-gradient(135deg, #0a0f2e 0%, #111a5c 100%)',
    image: '/5.jpeg',
    imagePosition: 'right',
    large: false,
  },
  {
    day: 'Day 6',
    title: 'Kitchen cabinets need cleaning inside and outside',
    description: 'Grease and food particles attract insects if left too long.',
    accent: 'gold',
    background: 'linear-gradient(135deg, #f1b93d 0%, #f7d77e 100%)',
    image: '/6.jpeg',
    imagePosition: 'left',
    large: false,
  },
  {
    day: 'Day 7',
    title: 'Windows should be cleaned regularly',
    description: 'Clean windows allow more light into your home and improve appearance instantly.',
    accent: 'dark',
    background: 'linear-gradient(135deg, #0a0f2e 0%, #111a5c 100%)',
    image: '/7.jpeg',
    imagePosition: 'right',
    large: false,
  },
  {
    day: 'Day 8',
    title: 'Your toilet brush holder should be washed',
    description: 'Many people clean the toilet but forget the holder that stores bacteria.',
    accent: 'gold',
    background: 'linear-gradient(135deg, #f9d577 0%, #f7ba45 100%)',
    image: '/8.jpeg',
    imagePosition: 'right',
    large: false,
  },
  {
    day: 'Day 9',
    title: 'Light switches are often ignored',
    description: 'They are touched every day and can easily gather dirt and germs.',
    accent: 'light',
    background: 'linear-gradient(135deg, #f3f3f3 0%, #f7d896 100%)',
    image: '/9.jpeg',
    imagePosition: 'right',
    large: false,
  },
  {
    day: 'Day 10',
    title: 'Curtains hold a lot of dust',
    description: 'Washing them helps improve air quality inside the home.',
    accent: 'dark',
    background: 'linear-gradient(135deg, #0c254d 0%, #0a0f2e 100%)',
    image: '/10.jpeg',
    imagePosition: 'left',
    large: false,
  },
  {
    day: 'Day 11',
    title: 'Under the bed should not be forgotten',
    description: 'Dust and dirt hide there quickly and can attract insects.',
    accent: 'dark',
    background: 'linear-gradient(135deg, #0a0f2e 0%, #111a5c 100%)',
    image: '/11.jpeg',
    imagePosition: 'right',
    large: false,
  },
  {
    day: 'Day 14',
    title: 'Walls can collect stains and dust',
    description: 'Spot-cleaning walls keeps the home looking fresh and neat.',
    accent: 'dark',
    background: 'linear-gradient(135deg, #0a0f2e 0%, #111a5c 100%)',
    image: '/WhatsApp Image 2026-09-15 at 06.49.11 (4).jpeg',
    imagePosition: 'right',
    large: false,
  },
  {
    day: 'Day 19',
    title: 'Cleaning your mirrors changes the whole room',
    description: 'Clean mirrors make spaces brighter and more attractive.',
    accent: 'gold',
    background: 'linear-gradient(135deg, #f3c75c 0%, #f0b349 100%)',
    image: '/19.jpeg',
    imagePosition: 'right',
    large: false,
  },
  {
    day: 'Day 20',
    title: 'Don’t ignore your balcony or compound outdoor dirt',
    description: 'Outdoor dirt easily enters the house when ignored.',
    accent: 'dark',
    background: 'linear-gradient(135deg, #0a0f2e 0%, #111a5c 100%)',
    image: '/20.jpeg',
    imagePosition: 'left',
    large: false,
  },
  {
    day: 'Day 21',
    title: 'Pillows should be washed regularly',
    description: 'They absorb sweat, oils, and dust over time.',
    accent: 'dark',
    background: 'linear-gradient(135deg, #0a0f2e 0%, #111a5c 100%)',
    image: '/21.jpeg',
    imagePosition: 'left',
    large: false,
  },
  {
    day: 'Day 4',
    title: 'Your mattress should be cleaned too',
    description: 'Dust, sweat, and dead skin build up inside mattresses and can trigger allergies.',
    accent: 'gold',
    background: 'linear-gradient(135deg, #f9d577 0%, #f0b349 100%)',
    image: '/4.jpeg',
    imagePosition: 'left',
    large: true,
  },
];

function CleaningTips() {
  return (
    <div className="pt-20 pb-20" style={{ background: '#f8f6f0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-semibold text-sm uppercase tracking-wide" style={{ color: '#C9A84C' }}>Knowledge Hub</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4" style={{ color: '#0a0f2e' }}>Cleaning Tips</h1>
          <p className="max-w-3xl mx-auto text-lg" style={{ color: '#4a5568' }}>
            Simple, practical cleaning habits that help you keep your home healthier, fresher, and more comfortable.
          </p>
        </div>

        <div className="space-y-10">
          {tips.map((tip, index) => (
            <article
              key={`${tip.day}-${index}`}
              className="overflow-hidden rounded-[30px] border shadow-lg"
              style={{
                background: tip.background,
                borderColor: tip.accent === 'gold' ? 'rgba(201,168,76,0.5)' : 'rgba(17,26,92,0.2)',
                color: tip.accent === 'dark' ? '#fff' : '#0a0f2e',
              }}
            >
              <div className="grid lg:grid-cols-2 items-center">
                {(tip.imagePosition === 'left' || tip.large) && (
                  <div className="relative">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className={tip.large ? 'w-full h-[420px] object-cover' : 'w-full h-[360px] object-cover'}
                    />
                  </div>
                )}

                <div className="p-6 sm:p-8 lg:p-12">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-black text-5xl md:text-7xl leading-none" style={{ color: tip.accent === 'dark' ? '#fff' : '#0a0f2e', opacity: 0.9 }}>
                      {tip.day.replace('Day ', '')}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4" style={{ color: tip.accent === 'dark' ? '#fff' : '#0a0f2e' }}>
                    {tip.title}
                  </h2>

                  <p className="text-xl md:text-2xl leading-relaxed max-w-xl" style={{ color: tip.accent === 'dark' ? '#edf3ff' : '#1f2937' }}>
                    {tip.description}
                  </p>
                </div>

                {tip.imagePosition === 'right' && !tip.large && (
                  <div className="relative">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-full h-[360px] object-cover"
                    />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CleaningTips;
