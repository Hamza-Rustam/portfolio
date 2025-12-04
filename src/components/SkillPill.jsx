import React from "react";

const SkillPill = ({ skill, delay = 0 }) => {
  const colors = [
    "from-purple-500/20 to-blue-500/20 border-purple-500/30 text-purple-300",
    "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-300",
    "from-teal-500/20 to-emerald-500/20 border-teal-500/30 text-teal-300",
    "from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-300",
    "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-300",
  ];
  const colorClass = colors[skill.length % colors.length];

  return (
    <span
      className={`
        inline-flex items-center px-4 py-2 md:px-5 md:py-2.5
        rounded-full text-sm md:text-base font-medium
        bg-gradient-to-r ${colorClass} border
        backdrop-blur-sm
        hover:scale-110 hover:-translate-y-1
        transition-all duration-300 cursor-default
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      {skill}
    </span>
  );
};

export default SkillPill;
