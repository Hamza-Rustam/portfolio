import React from "react";
import GlassCard from "./GlassCard";

const StatCard = ({ value, label, icon: Icon, color }) => (
  <GlassCard className="p-4 md:p-6 text-center group">
    <div
      className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
    >
      <Icon className="text-xl md:text-2xl text-white" />
    </div>
    <div className="text-3xl md:text-4xl font-black text-white mb-1">
      {value}
    </div>
    <div className="text-gray-500 text-sm md:text-base">{label}</div>
  </GlassCard>
);

export default StatCard;
