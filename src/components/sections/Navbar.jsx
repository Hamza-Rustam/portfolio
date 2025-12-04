import React from "react";
import { FaBars } from "react-icons/fa";
import GlassCard from "../GlassCard";

const Navbar = ({ activeSection, scrollTo, setMobileNavOpen }) => {
  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4">
      <div
        className="max-w-7xl mx-auto px-4 md:px-8"
        style={{
          borderBottom: "3px solid",
          borderImage: "linear-gradient(to right, #a78bfa, #f472b6) 1",
        }}
      >
        <GlassCard
          className="px-4 md:px-6 py-3 flex items-center justify-between"
          hover={false}
        >
          <button
            onClick={() => scrollTo("hero")}
            className="text-xl md:text-2xl font-black"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hamza Rustam
            </span>
            <span className="text-white">.</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white/80 hover:text-white p-2"
            onClick={() => setMobileNavOpen(true)}
          >
            <FaBars size={20} />
          </button>
        </GlassCard>
      </div>
    </nav>
  );
};

export default Navbar;
