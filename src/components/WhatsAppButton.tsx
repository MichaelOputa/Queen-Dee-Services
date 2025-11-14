import { MessageCircle } from 'lucide-react';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2347013043572"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all z-40 group animate-bounce hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}

export default WhatsAppButton;
