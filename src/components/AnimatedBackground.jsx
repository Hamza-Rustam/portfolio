import React, { useMemo } from "react";

// Floating Keyboard Key Component
const FloatingKey = ({ symbol, style, glowColor }) => (
  <div
    className="absolute pointer-events-none select-none animate-float-key"
    style={style}
  >
    <div
      className="relative px-3 py-2 md:px-4 md:py-3 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 shadow-lg"
      style={{
        boxShadow: `0 4px 15px ${glowColor}40, 0 0 30px ${glowColor}20, inset 0 1px 0 rgba(255,255,255,0.1)`,
      }}
    >
      {/* Key surface */}
      <div className="relative z-10 text-sm md:text-base font-mono font-bold text-gray-300">
        {symbol}
      </div>
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-lg opacity-50 blur-sm"
        style={{
          background: `linear-gradient(135deg, ${glowColor}30, transparent)`,
        }}
      />
    </div>
  </div>
);

const AnimatedBackground = ({ children }) => {
  // Generate floating keyboard elements
  const floatingKeys = useMemo(() => {
    const keys = [
      { symbol: "Esc", glow: "#8b5cf6" },
      { symbol: "Tab", glow: "#3b82f6" },
      { symbol: "⌘", glow: "#ec4899" },
      { symbol: "⇧", glow: "#14b8a6" },
      { symbol: "Ctrl", glow: "#f59e0b" },
      { symbol: "Alt", glow: "#10b981" },
      { symbol: "↵", glow: "#8b5cf6" },
      { symbol: "⌫", glow: "#ef4444" },
      { symbol: "F1", glow: "#06b6d4" },
      { symbol: "~", glow: "#a855f7" },
      { symbol: "⌥", glow: "#3b82f6" },
      { symbol: "fn", glow: "#ec4899" },
    ];

    return keys.map((key, i) => ({
      ...key,
      id: i,
      x: 5 + ((i * 31) % 85),
      y: 10 + ((i * 43) % 75),
      size: 0.7 + (i % 4) * 0.15,
      duration: 15 + (i % 5) * 5,
      delay: i * 0.8,
      direction: i % 2 === 0 ? 1 : -1,
    }));
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030014]">
      {/* Animated gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full bg-purple-600/30 blur-[100px] md:blur-[150px] animate-blob" />
        <div className="absolute top-[40%] right-[-20%] w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full bg-blue-600/25 blur-[100px] md:blur-[150px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[450px] h-[450px] md:w-[600px] md:h-[600px] rounded-full bg-teal-500/20 blur-[100px] md:blur-[150px] animate-blob animation-delay-4000" />
        <div className="absolute top-[60%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-pink-500/20 blur-[80px] md:blur-[120px] animate-blob animation-delay-3000" />
      </div>

      {/* Floating Keyboard Keys */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none hidden md:block">
        {floatingKeys.map((key) => (
          <FloatingKey
            key={key.id}
            symbol={key.symbol}
            glowColor={key.glow}
            style={{
              left: `${key.x}%`,
              top: `${key.y}%`,
              transform: `scale(${key.size})`,
              animationDuration: `${key.duration}s`,
              animationDelay: `${key.delay}s`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Starfield effect */}
      <div className="fixed inset-0 pointer-events-none hidden md:block">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 23) % 100}%`,
              animationDelay: `${i * 0.1}s`,
              opacity: 0.3 + (i % 5) * 0.1,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02] hidden md:block"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedBackground;
