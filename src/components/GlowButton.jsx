import React from "react";

const GlowButton = ({ size, children, onClick }) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg
    bg-gradient-to-b from-gray-800 to-gray-600 text-white shadow-lg
    border border-gray-500 hover:shadow-xl active:shadow-inner
    transform active:translate-y-1 transition-all duration-200
  `;

  const sizeStyles = size === "lg" ? "text-lg" : "text-sm";

  return (
    <button className={`${baseStyles} ${sizeStyles}`} onClick={onClick}>
      <span className="text-gray-400 text-xs">[F1]</span>
      {children}
    </button>
  );
};

export default GlowButton;
