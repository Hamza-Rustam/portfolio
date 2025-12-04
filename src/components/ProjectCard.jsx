import React from "react";
import { FaBrain, FaDatabase, FaCode, FaRocket } from "react-icons/fa";
import GlassCard from "./GlassCard";

const ProjectCard = ({ project, index }) => {
  const icons = [FaBrain, FaDatabase, FaCode, FaRocket];
  const Icon = icons[index % icons.length];
  const gradients = [
    "from-purple-500 via-pink-500 to-rose-500",
    "from-blue-500 via-cyan-500 to-teal-500",
    "from-emerald-500 via-teal-500 to-cyan-500",
    "from-orange-500 via-amber-500 to-yellow-500",
  ];

  return (
    <GlassCard className="group p-6 md:p-8 h-full">
      {/* Icon badge */}
      <div
        className={`
        absolute -top-4 -right-4 md:-top-5 md:-right-5
        w-12 h-12 md:w-16 md:h-16 rounded-2xl
        bg-gradient-to-br ${gradients[index % gradients.length]}
        flex items-center justify-center
        shadow-xl transform group-hover:scale-110 group-hover:rotate-6
        transition-all duration-500
      `}
      >
        <Icon className="text-xl md:text-2xl text-white" />
      </div>

      {/* Number */}
      <div className="text-6xl md:text-7xl font-black text-white/5 absolute top-4 left-6">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative pt-4 md:pt-6">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
          {project.title}
        </h3>

        {project.duration && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs md:text-sm text-gray-400 font-mono">
              {project.duration}
            </span>
          </div>
        )}

        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Bottom gradient line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
          gradients[index % gradients.length]
        } rounded-b-2xl md:rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
    </GlassCard>
  );
};

export default ProjectCard;
