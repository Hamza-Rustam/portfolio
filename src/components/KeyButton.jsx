import React, { useState } from "react";

const KeyButton = ({
  label,
  onClick,
  variant = "default",
  size = "medium",
  glow = false,
  disabled = false,
  children,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      setIsPressed(true);
      setTimeout(() => setIsPressed(false), 150);
      onClick && onClick();
    }
  };

  const baseClasses =
    "relative inline-flex items-center justify-center font-medium transition-all duration-200 ease-out cursor-pointer select-none border-2";

  const variantClasses = {
    default:
      "bg-gradient-to-b from-[var(--bg-secondary)] to-gray-100 border-[var(--border-color)] text-[var(--text-primary)] shadow-lg hover:shadow-xl",
    primary:
      "bg-gradient-to-b from-blue-500 to-blue-600 border-blue-400 text-white shadow-blue-500/50",
    secondary:
      "bg-gradient-to-b from-purple-500 to-purple-600 border-purple-400 text-white shadow-purple-500/50",
    accent:
      "bg-gradient-to-b from-teal-500 to-teal-600 border-teal-400 text-white shadow-teal-500/50",
    cyber:
      "bg-gradient-to-b from-green-400 to-green-500 border-green-300 text-black shadow-green-400/50",
    rgb: "bg-gradient-to-r from-pink-500 via-green-500 to-purple-500 border-transparent text-white",
  };

  const sizeClasses = {
    small: "px-3 py-2 text-sm rounded-md min-w-[60px] min-h-[40px]",
    medium: "px-4 py-3 text-base rounded-lg min-w-[80px] min-h-[50px]",
    large: "px-6 py-4 text-lg rounded-xl min-w-[100px] min-h-[60px]",
  };

  const stateClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "hover:transform hover:-translate-y-1 active:transform active:translate-y-0 active:scale-95";

  const glowClasses = glow ? "animate-glow shadow-2xl" : "";

  const pressedClasses = isPressed ? "animate-press scale-95" : "";

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${stateClasses} ${glowClasses} ${pressedClasses}`}
      onClick={handleClick}
      disabled={disabled}
      aria-label={label}
    >
      {/* Key Label */}
      {label && <span className="relative z-10">{label}</span>}

      {/* Custom Content */}
      {children}

      {/* Key Highlight Effect */}
      <div className="absolute inset-0 rounded-inherit bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200" />

      {/* RGB Glow Effect for RGB variant */}
      {variant === "rgb" && (
        <div className="absolute inset-0 rounded-inherit bg-gradient-to-r from-pink-500/20 via-green-500/20 to-purple-500/20 animate-pulse" />
      )}
    </button>
  );
};

export default KeyButton;
