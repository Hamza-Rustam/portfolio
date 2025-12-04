import React from "react";
import {
  FaChevronDown,
  FaPython,
  FaBrain,
  FaRocket,
  FaEnvelope,
} from "react-icons/fa";
import GlowButton from "../GlowButton";

const HeroSection = ({ scrollTo }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 md:px-8 pt-24 pb-12"
    >
      <div className="absolute inset-0 bg-black/80 md:bg-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Profile Picture */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-purple-500/30 rounded-2xl" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-blue-500/30 rounded-2xl" />

              {/* Main image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img
                  src="/dp.jpg"
                  alt="Hamza Rustam"
                  className="w-full h-full object-cover"
                />
                <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                  <div className="relative">
                    {/* Decorative elements */}
                    <div className="absolute -inset-4 bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
                    <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-purple-500/30 rounded-2xl" />
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-blue-500/30 rounded-2xl" />
                    {/* Main image container */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                      <img
                        src="/dp.jpg"
                        alt="Hamza Rustam"
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-linear-to-t from-purple-900/50 via-transparent to-transparent" />
                    </div>
                    {/* Floating badges */}
                    <div className="absolute -right-4 top-8 px-4 py-2 rounded-xl bg-purple-500/20 border border-purple-500/40 backdrop-blur-sm animate-float">
                      <span className="text-purple-300 text-sm font-bold">
                        ML Engineer
                      </span>
                    </div>
                    <div className="absolute -left-4 bottom-16 px-4 py-2 rounded-xl bg-blue-500/20 border border-blue-500/40 backdrop-blur-sm animate-float animation-delay-2000">
                      <span className="text-blue-300 text-sm font-bold">
                        Data Scientist
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-purple-900/50 via-transparent to-transparent" />
              </div>

              {/* Floating badges */}
              <div className="absolute -right-4 top-8 px-4 py-2 rounded-xl bg-purple-500/20 border border-purple-500/40 backdrop-blur-sm animate-float">
                <span className="text-purple-800 text-sm font-bold">
                  ML Engineer
                </span>
              </div>
              <div className="absolute -left-4 bottom-16 px-4 py-2 rounded-xl bg-blue-500/20 border border-blue-500/40 backdrop-blur-sm animate-float animation-delay-2000">
                <span className="text-blue-200 text-sm font-bold">
                  Data Scientist
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-sm font-medium">
                Available for hire
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6">
              <span className="text-white">Hi, I'm</span>
              <br />
              <span className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Hamza Rustam
              </span>
            </h1>

            {/* Title with icons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                <FaBrain className="text-purple-400" />
                ML Engineer
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                <FaPython className="text-blue-400" />
                Data Scientist
              </span>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Transforming complex data into intelligent solutions. I build AI
              systems that make a real difference, leveraging cutting-edge
              machine learning to solve real-world problems.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-purple-400">
                  3.5
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  CGPA
                </div>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-blue-400">
                  4+
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  Projects
                </div>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-teal-400">
                  3+
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  Internships
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <GlowButton
                variant="primary"
                size="lg"
                onClick={() => scrollTo("projects")}
              >
                <FaRocket /> View Projects
              </GlowButton>
              <GlowButton
                variant="secondary"
                size="lg"
                onClick={() => scrollTo("contact")}
              >
                <FaEnvelope /> Get in Touch
              </GlowButton>
            </div>
          </div>
        </div>

        {/* Scroll indicator - centered at bottom */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce hidden md:block"
          onClick={() => scrollTo("about")}
        >
          <div className="flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <FaChevronDown />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
