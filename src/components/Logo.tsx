interface LogoProps {
  className?: string;
}

function Logo({ className = "w-16 h-16" }: LogoProps) {
  return (
    <img
      src="/ltd.png"
      alt="Queen Dee Integrated Services LTD Logo"
      className={className}
      style={{
        objectFit: 'contain',
        filter: 'drop-shadow(0 0 10px rgba(201,168,76,0.35))',
      }}
    />
  );
}

export default Logo;