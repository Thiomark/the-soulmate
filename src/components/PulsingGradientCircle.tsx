"use client";
import React, { useEffect, useState } from "react";

type ColorTuple = [number, number, number];

const PulsingGradientCircle = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [nextColorIndex, setNextColorIndex] = useState(1);
  const [transitionProgress, setTransitionProgress] = useState(0);

  const colors: readonly ColorTuple[] = [
    [239, 68, 68], // red
    [59, 130, 246], // blue
    [147, 51, 234], // purple
    [249, 115, 22], // orange
    [34, 197, 94], // green
  ] as const;

  // Function to interpolate between two colors
  const interpolateColor = (
    color1: ColorTuple,
    color2: ColorTuple,
    progress: number
  ): ColorTuple => {
    const r = Math.round(color1[0] + (color2[0] - color1[0]) * progress);
    const g = Math.round(color1[1] + (color2[1] - color1[1]) * progress);
    const b = Math.round(color1[2] + (color2[2] - color1[2]) * progress);
    return [r, g, b];
  };

  useEffect(() => {
    let startTime: number = Date.now();
    const duration: number = 8000; // 8 seconds per transition
    let animationId: number;

    const animate = (): void => {
      const elapsed: number = Date.now() - startTime;
      const progress: number = Math.min(elapsed / duration, 1);

      // Use easeInOut for smoother transitions
      const easeProgress: number = 0.5 - 0.5 * Math.cos(progress * Math.PI);
      setTransitionProgress(easeProgress);

      if (progress >= 1) {
        // Move to next color
        setCurrentColorIndex(nextColorIndex);
        setNextColorIndex((nextColorIndex + 1) % colors.length);
        startTime = Date.now();
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [currentColorIndex, nextColorIndex, colors.length]);

  // Get interpolated color
  const currentColor: ColorTuple = colors[currentColorIndex];
  const nextColor: ColorTuple = colors[nextColorIndex];
  const interpolatedColor: ColorTuple = interpolateColor(
    currentColor,
    nextColor,
    transitionProgress
  );

  const colorString: string = `rgb(${interpolatedColor[0]}, ${interpolatedColor[1]}, ${interpolatedColor[2]})`;

  return (
    <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center">
      {/* Hero Section */}
      <div className="relative text-center">
        {/* Main Circle with Smooth Color Morphing */}
        <div className="relative w-96 h-96 mx-auto mb-8">
          <div
            className="absolute inset-0 rounded-full slow-pulse"
            style={{
              background: `radial-gradient(circle, ${colorString
                .replace("rgb", "rgba")
                .replace(")", ", 1)")} 0%, ${colorString
                .replace("rgb", "rgba")
                .replace(")", ", 0.9)")} 20%, ${colorString
                .replace("rgb", "rgba")
                .replace(")", ", 0.75)")} 35%, ${colorString
                .replace("rgb", "rgba")
                .replace(")", ", 0.6)")} 50%, ${colorString
                .replace("rgb", "rgba")
                .replace(")", ", 0.4)")} 60%, ${colorString
                .replace("rgb", "rgba")
                .replace(")", ", 0.25)")} 70%, ${colorString
                .replace("rgb", "rgba")
                .replace(")", ", 0.15)")} 78%, ${colorString
                .replace("rgb", "rgba")
                .replace(")", ", 0.08)")} 84%, ${colorString
                .replace("rgb", "rgba")
                .replace(")", ", 0.04)")} 89%, ${colorString
                .replace("rgb", "rgba")
                .replace(")", ", 0.02)")} 93%, ${colorString
                .replace("rgb", "rgba")
                .replace(")", ", 0.01)")} 96%, ${colorString
                .replace("rgb", "rgba")
                .replace(")", ", 0.005)")} 98%, ${colorString
                .replace("rgb", "rgba")
                .replace(")", ", 0)")} 100%)`,
            }}
          ></div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        /* Slow pulsing animation */
        @keyframes slow-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.85;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.7;
          }
        }

        .slow-pulse {
          animation: slow-pulse 6s ease-in-out infinite;
        }

        /* Text animations */
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fade-in 1s ease-out 0.5s both;
        }

        .animate-fade-in-delayed-2 {
          animation: fade-in 1s ease-out 1s both;
        }
      `}</style>
    </div>
  );
};

export default PulsingGradientCircle;
