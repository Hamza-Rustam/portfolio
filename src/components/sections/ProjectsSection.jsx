import React from "react";
import ProjectCard from "../ProjectCard";

const ProjectsSection = ({ projectsData }) => {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg shadow-pink-500/30">
            <span className="text-xl md:text-2xl font-black text-white">
              02
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Projects
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-pink-500/50 to-transparent hidden md:block" />
        </div>

        <p className="text-base md:text-xl text-gray-400 mb-10 md:mb-14 max-w-2xl">
          A showcase of my work in{" "}
          <span className="text-purple-400 font-semibold">
            machine learning
          </span>{" "}
          and
          <span className="text-blue-400 font-semibold"> data science</span>.
        </p>

        {projectsData && (
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
