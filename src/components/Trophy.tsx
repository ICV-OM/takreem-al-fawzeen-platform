
import React from 'react';

const Trophy = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 120" className="w-full h-full">
        {/* Trophy Cup */}
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#FF8C00" />
          </linearGradient>
          <linearGradient id="handleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B8860B" />
            <stop offset="100%" stopColor="#DAA520" />
          </linearGradient>
        </defs>
        
        {/* Left Handle */}
        <path
          d="M15 35 Q10 35 8 40 Q8 45 10 50 Q15 50 20 45 L20 35 Z"
          fill="url(#handleGradient)"
          stroke="#B8860B"
          strokeWidth="1"
        />
        
        {/* Right Handle */}
        <path
          d="M85 35 Q90 35 92 40 Q92 45 90 50 Q85 50 80 45 L80 35 Z"
          fill="url(#handleGradient)"
          stroke="#B8860B"
          strokeWidth="1"
        />
        
        {/* Main Cup */}
        <path
          d="M25 25 Q25 20 30 20 L70 20 Q75 20 75 25 L75 50 Q75 60 65 65 L35 65 Q25 60 25 50 Z"
          fill="url(#goldGradient)"
          stroke="#B8860B"
          strokeWidth="2"
        />
        
        {/* Cup Rim */}
        <ellipse
          cx="50"
          cy="20"
          rx="25"
          ry="3"
          fill="#FFD700"
          stroke="#B8860B"
          strokeWidth="1"
        />
        
        {/* Stem */}
        <rect
          x="45"
          y="65"
          width="10"
          height="20"
          fill="url(#goldGradient)"
          stroke="#B8860B"
          strokeWidth="1"
        />
        
        {/* Base */}
        <ellipse
          cx="50"
          cy="90"
          rx="20"
          ry="5"
          fill="url(#goldGradient)"
          stroke="#B8860B"
          strokeWidth="2"
        />
        
        {/* Decorative Elements */}
        <circle
          cx="40"
          cy="35"
          r="3"
          fill="#FFFF00"
          opacity="0.8"
        />
        <circle
          cx="60"
          cy="35"
          r="3"
          fill="#FFFF00"
          opacity="0.8"
        />
        <circle
          cx="50"
          cy="45"
          r="4"
          fill="#FFFF00"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};

export default Trophy;
