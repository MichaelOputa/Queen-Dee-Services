interface LogoProps {
  className?: string;
}

function Logo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <img
      src="/ltd.jpeg"
      alt="Queen Dee Integrated Services LTD Logo"
      className={className}
      style={{
        objectFit: 'contain',
        borderRadius: '10px',
        border: '2px solid rgba(201,168,76,0.7)',
        boxShadow: '0 0 14px rgba(201,168,76,0.4)',
        background: '#0a0f2e',
      }}
    />
  );
}

export default Logo;