import React from "react";

const GlassCard = ({ children, className = "", hover = true }) => (
  <div
    className={`
    relative backdrop-blur-xl bg-white/[0.03] 
    border border-white/[0.08] rounded-2xl md:rounded-3xl
    ${
      hover
        ? "hover:bg-white/[0.06] hover:border-white/[0.15] hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1"
        : ""
    }
    transition-all duration-500
    ${className}
  `}
  >
    {children}
  </div>
);

export default GlassCard;
