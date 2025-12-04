import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Hamza Rustam
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            Machine Learning Engineer
          </p>
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            ✨ ©️ 2025 Hamza Rustam | MenteE Develope
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            Made with <FaHeart className="text-red-500" /> and lots of ☕
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
