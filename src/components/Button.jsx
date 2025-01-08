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
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        onClick={onClick}
        className={`btn ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
