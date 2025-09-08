import React from "react";

const RadialBlurLogo = () => {
  return (
    <div className={` size-16 relative flex items-center justify-center`}>
      {/* Outer blur layer - most transparent */}
      <div className="absolute inset-0 rounded-full bg-gradient-radial from-black/20 to-transparent blur-xl"></div>

      {/* Middle blur layer */}
      <div className="absolute inset-2 rounded-full bg-gradient-radial from-black/40 to-transparent blur-lg"></div>

      {/* Inner blur layer */}
      <div className="absolute inset-4 rounded-full bg-gradient-radial from-black/60 to-transparent blur-md"></div>

      {/* Core center - sharp black center */}
      <div className="absolute inset-6 rounded-full bg-gradient-radial from-black to-transparent blur-sm"></div>

      {/* Sharp center point */}
      <div className="absolute w-6 h-6 rounded-full bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(
            circle,
            var(--tw-gradient-from),
            var(--tw-gradient-to)
          );
        }

        @keyframes breathe {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        .animate-pulse-breathing {
          animation: breathe 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default RadialBlurLogo;
