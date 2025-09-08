"use client";

import { useRouter } from "next/navigation";

interface BackButtonProps {
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ className = "" }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className={`flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors group ${className}`}
    >
      <div className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center group-hover:border-gray-600 transition-colors">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <span className="text-sm font-light">Back</span>
    </button>
  );
};

export default BackButton;