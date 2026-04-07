function WhatsAppButton() {
  const whatsappNumber = '2349132433968';
  const message = 'Hi! I would like to inquire about your cleaning services.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Chat on WhatsApp"
      style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(37, 211, 102, 0.82)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        boxShadow: '0 4px 24px rgba(37,211,102,0.35), 0 2px 8px rgba(0,0,0,0.2)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.1)';
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(37,211,102,0.95)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 28px rgba(37,211,102,0.5), 0 2px 10px rgba(0,0,0,0.25)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(37,211,102,0.82)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 24px rgba(37,211,102,0.35), 0 2px 8px rgba(0,0,0,0.2)';
      }}
    >
      {/* Official WhatsApp SVG logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="34"
        height="34"
        aria-hidden="true"
      >
        <path
          fill="white"
          d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 9.9L4 44l10.4-2.7C17.1 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4z"
        />
        <path
          fill="rgba(37,211,102,0.9)"
          d="M24 7c-9.4 0-17 7.6-17 17 0 3.3.9 6.4 2.6 9.1l.4.7-1.7 6.2 6.4-1.7.7.4C17.7 40.2 20.8 41 24 41c9.4 0 17-7.6 17-17S33.4 7 24 7z"
        />
        <path
          fill="white"
          d="M19.3 16c-.3-.7-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.4 1.4-1.4 3.4s1.4 3.9 1.6 4.2c.2.3 2.8 4.4 6.8 6 3.4 1.3 4.1 1.1 4.8 1 .7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.1-.4-.2-.8-.4-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.5-.2.3-.5.3-.9.1-.4-.2-1.8-.7-3.4-2.1-1.3-1.1-2.1-2.5-2.4-2.9-.2-.4 0-.6.2-.8l.6-.7c.2-.2.2-.4.4-.6.1-.2.1-.4 0-.6-.1-.1-1-2.3-1.3-3.2z"
        />
      </svg>

      {/* Tooltip */}
      <span
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          background: '#0a0f2e',
          color: '#C9A84C',
          border: '1px solid rgba(201,168,76,0.3)',
          boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
        }}
      >
        Chat with us on WhatsApp
      </span>
    </a>
  );
}

export default WhatsAppButton;