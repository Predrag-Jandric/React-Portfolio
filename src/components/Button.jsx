import { useState } from "react";

const Button = ({
  children,
  className = "",
  type = "button",
  target,
  rel,
  href,
  onClick,
  download,
}) => {
  const [rippleArray, setRippleArray] = useState([]);

  const handleRipple = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = { x, y, size };

    setRippleArray((prev) => [...prev, newRipple]);

    // Remove the ripple after animation ends
    setTimeout(() => {
      setRippleArray((prev) => prev.slice(1));
    }, 600);
  };

  if (href) {
    return (
      <a
      href={href}
      target={target}
      rel={rel}
      download={download}
      onClick={onClick}
      className={`btn relative overflow-hidden ${className}`}
    >
      {children}
    </a>
    );
  }

  return (
    <button
      type={type}
      className={`btn relative overflow-hidden  ${className}`}
      onClick={(e) => {
        handleRipple(e);
        if (onClick) onClick(e);
      }}
    >
      {children}
      <div className="absolute inset-0 pointer-events-none">
        {rippleArray.map((ripple, index) => (
          <span
            key={index}
            style={{
              top: ripple.y,
              left: ripple.x,
              width: ripple.size,
              height: ripple.size,
            }}
            className="absolute rounded-full bg-white/50 transform scale-0 animate-ripple"
          />
        ))}
      </div>
    </button>
  );
};

export default Button;
