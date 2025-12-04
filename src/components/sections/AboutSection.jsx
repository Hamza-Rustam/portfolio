import React from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaStar,
  FaBrain,
  FaRocket,
} from "react-icons/fa";
import GlassCard from "../GlassCard";
import StatCard from "../StatCard";
import TimelineItem from "../TimelineItem";
import EducationCard from "../EducationCard";

const AboutSection = ({ aboutData }) => {
  if (!aboutData) return null;

  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
            <span className="text-xl md:text-2xl font-black text-white">
              01
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            About Me
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-purple-500/50 to-transparent hidden md:block" />
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Bio Card - spans 2 cols */}
          <GlassCard className="lg:col-span-2 p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden border-2 border-purple-500/30 shrink-0">
                <img
                  src="/dp.jpg"
                  alt="Hamza"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {aboutData.name}
                </h3>
                <p className="text-purple-400 font-semibold text-lg">
                  Machine Learning Engineer
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-base md:text-xl leading-relaxed text-justify max-w-3xl mx-auto tracking-wide">
              {aboutData.objective}
            </p>
          </GlassCard>

          {/* Stats Column */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            <StatCard
              value="3.5"
              label="CGPA Score"
              icon={FaStar}
              color="from-purple-500 to-pink-500"
            />
            <StatCard
              value="4+"
              label="ML Projects"
              icon={FaBrain}
              color="from-blue-500 to-cyan-500"
            />
            <StatCard
              value="3+"
              label="Internships"
              icon={FaBriefcase}
              color="from-teal-500 to-emerald-500"
            />
            <StatCard
              value="1+"
              label="Years Exp"
              icon={FaRocket}
              color="from-orange-500 to-amber-500"
            />
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <FaBriefcase className="text-purple-400" />
            Experience
          </h3>
          <div className="space-y-0">
            {aboutData.professionalExperiences?.map((exp, i) => (
              <TimelineItem
                key={i}
                experience={exp}
                isLast={i === aboutData.professionalExperiences.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <FaGraduationCap className="text-teal-400" />
            Education
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {aboutData.education?.map((edu, i) => (
              <EducationCard key={i} education={edu} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
