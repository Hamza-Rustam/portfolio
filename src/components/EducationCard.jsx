import React from "react";
import GlassCard from "./GlassCard";

const EducationCard = ({ education, index }) => {
  const badges = ["🎓 Degree", "📚 Intermediate", "📖 Matric"];

  return (
    <GlassCard className="p-5 md:p-6 pt-8 md:pt-10 relative overflow-hidden group">
      {/* Badge - Fixed with proper margin-top */}
      <div className="absolute top-3 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-xs font-bold shadow-lg">
        {badges[index] || "📖 Education"}
      </div>

      <div className="mt-2">
        <h4 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
          {education.degree}
        </h4>
        <p className="text-gray-400 mb-1">{education.university}</p>
        <p className="text-gray-500 text-sm font-mono mb-3">
          {education.duration}
        </p>
        {education.cgpa && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/20 border border-teal-500/30">
            <span className="text-teal-400 font-bold">
              CGPA: {education.cgpa}
            </span>
          </div>
        )}
      </div>
    </GlassCard>
  );
};

export default EducationCard;
