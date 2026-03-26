import { MessageCircle } from 'lucide-react';

function WhatsAppButton() {
  const whatsappNumber = '2349132433968';
  const message = 'Hi! I would like to inquire about your cleaning services.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 text-white p-4 rounded-full shadow-2xl transition-all z-40 group animate-bounce hover:animate-none"
      style={{background: 'linear-gradient(135deg, #25d366, #128c7e)', boxShadow: '0 4px 20px rgba(37,211,102,0.4)'}}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{background: '#0a0f2e', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)'}}>
        Chat with us on WhatsApp
      </span>
    </a>
  );
}

export default WhatsAppButton;