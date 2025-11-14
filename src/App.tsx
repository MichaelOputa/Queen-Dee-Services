import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'gallery':
        return <Gallery />;
      case 'testimonials':
        return <Testimonials />;
      case 'booking':
        return <Booking />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer setCurrentPage={setCurrentPage} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
