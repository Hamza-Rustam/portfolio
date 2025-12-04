import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import GlassCard from "../GlassCard";

const ContactSection = ({ contactData }) => {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <span className="text-xl md:text-2xl font-black text-white">
              04
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Contact
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent hidden md:block" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div>
            <p className="text-base md:text-xl text-gray-400 mb-8 leading-relaxed">
              I'm currently open to new opportunities and collaborations. Let's
              build something amazing together!
            </p>

            {contactData && (
              <div className="space-y-4">
                <a href={`mailto:${contactData.email}`} className="block group">
                  <GlassCard className="p-4 md:p-6 flex items-center gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <FaEnvelope className="text-white text-lg md:text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Email</p>
                      <p className="text-white text-base md:text-lg font-medium">
                        {contactData.email}
                      </p>
                    </div>
                  </GlassCard>
                </a>

                <a href={`tel:${contactData.mobile}`} className="block group">
                  <GlassCard className="p-4 md:p-6 flex items-center gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <FaPhone className="text-white text-lg md:text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Phone</p>
                      <p className="text-white text-base md:text-lg font-medium">
                        {contactData.mobile}
                      </p>
                    </div>
                  </GlassCard>
                </a>

                <GlassCard
                  className="p-4 md:p-6 flex items-center gap-4 md:gap-6"
                  hover={false}
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-lg">
                    <FaMapMarkerAlt className="text-white text-lg md:text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Location</p>
                    <p className="text-white text-base md:text-lg font-medium">
                      {contactData.address}
                    </p>
                  </div>
                </GlassCard>
              </div>
            )}
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              Connect with me
            </h3>

            {contactData && (
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href={`https://github.com/${contactData.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GlassCard className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center group">
                    <FaGithub className="text-2xl md:text-3xl text-gray-400 group-hover:text-white transition-colors" />
                  </GlassCard>
                </a>
                <a
                  href={`https://linkedin.com/in/${contactData.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GlassCard className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center group">
                    <FaLinkedin className="text-2xl md:text-3xl text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </GlassCard>
                </a>
                <a
                  href={`https://twitter.com/${contactData.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GlassCard className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center group">
                    <FaTwitter className="text-2xl md:text-3xl text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </GlassCard>
                </a>
              </div>
            )}

            {/* Message card */}
            <GlassCard className="p-6 md:p-8 text-center" hover={false}>
              <div className="text-4xl mb-4">👋</div>
              <p className="text-gray-400 text-sm md:text-base">
                Feel free to reach out! I'm always excited to discuss new
                projects and opportunities.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
