import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import GlassCard from "./GlassCard";

const TimelineItem = ({ experience, isLast }) => (
  <div className="relative pl-8 md:pl-12 pb-8 md:pb-12">
    {/* Line */}
    {!isLast && (
      <div className="absolute left-[11px] md:left-[15px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-transparent" />
    )}

    {/* Dot */}
    <div className="absolute left-0 top-1 w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
      <FaBriefcase className="text-white text-xs md:text-sm" />
    </div>

    <GlassCard className="p-5 md:p-8" hover={true}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 mb-3">
        <h4 className="text-lg md:text-2xl font-bold text-white">
          {experience.title}
        </h4>
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs md:text-sm font-mono w-fit">
          {experience.duration}
        </span>
      </div>

      <p className="text-purple-400 font-semibold mb-4 text-sm md:text-lg">
        {experience.company} <span className="text-gray-600">•</span>{" "}
        {experience.location}
      </p>

      {experience.responsibilities && (
        <ul className="space-y-2 md:space-y-3">
          {experience.responsibilities.map((resp, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-gray-400 text-sm md:text-base"
            >
              <HiSparkles className="text-teal-400 mt-1 flex-shrink-0" />
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      )}
    </GlassCard>
  </div>
);

export default TimelineItem;
