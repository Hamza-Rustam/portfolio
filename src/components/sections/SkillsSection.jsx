import React from "react";
import { FaPython, FaCode } from "react-icons/fa";
import GlassCard from "../GlassCard";
import SkillPill from "../SkillPill";

const SkillsSection = ({ skillsData }) => {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-teal-500/30">
            <span className="text-xl md:text-2xl font-black text-white">
              03
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white">Skills</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-teal-500/50 to-transparent hidden md:block" />
        </div>

        {skillsData && (
          <div className="space-y-8 md:space-y-12">
            {/* Languages */}
            <GlassCard className="p-6 md:p-10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <FaPython className="text-white" />
                </div>
                Languages & Frameworks
              </h3>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {skillsData.languages?.map((skill, i) => (
                  <SkillPill key={i} skill={skill} delay={i * 50} />
                ))}
              </div>
            </GlassCard>

            {/* Tools */}
            <GlassCard className="p-6 md:p-10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                  <FaCode className="text-white" />
                </div>
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {skillsData.tools?.map((tool, i) => (
                  <SkillPill key={i} skill={tool} delay={i * 50} />
                ))}
              </div>
            </GlassCard>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
