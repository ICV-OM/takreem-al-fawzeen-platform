
import React from 'react';

interface MedalProps {
  position: number;
  className?: string;
}

const Medal: React.FC<MedalProps> = ({ position, className = "" }) => {
  const getMedalColor = () => {
    switch (position) {
      case 1: return { main: '#FFD700', secondary: '#FFA500', text: '#8B4513' };
      case 2: return { main: '#C0C0C0', secondary: '#A9A9A9', text: '#2F4F4F' };
      case 3: return { main: '#CD7F32', secondary: '#8B4513', text: '#FFFFFF' };
      case 4: return { main: '#696969', secondary: '#2F2F2F', text: '#FFFFFF' };
      default: return { main: '#FFD700', secondary: '#FFA500', text: '#8B4513' };
    }
  };

  const colors = getMedalColor();

  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 80 100" className="w-full h-full">
        <defs>
          <linearGradient id={`medalGradient${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.main} />
            <stop offset="50%" stopColor={colors.secondary} />
            <stop offset="100%" stopColor={colors.main} />
          </linearGradient>
          <radialGradient id={`medalShine${position}`} cx="30%" cy="30%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
            <stop offset="70%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        
        {/* Ribbon */}
        <path
          d="M30 5 L50 5 L50 45 L45 40 L40 45 L35 40 L30 45 Z"
          fill="#8B0000"
          stroke="#654321"
          strokeWidth="1"
        />
        <path
          d="M32 5 L48 5 L48 42 L43 37 L40 42 L37 37 L32 42 Z"
          fill="#DC143C"
        />
        
        {/* Medal Circle */}
        <circle
          cx="40"
          cy="60"
          r="25"
          fill={`url(#medalGradient${position})`}
          stroke={colors.secondary}
          strokeWidth="3"
        />
        
        {/* Inner Circle */}
        <circle
          cx="40"
          cy="60"
          r="18"
          fill="none"
          stroke={colors.secondary}
          strokeWidth="1"
        />
        
        {/* Shine Effect */}
        <circle
          cx="40"
          cy="60"
          r="25"
          fill={`url(#medalShine${position})`}
        />
        
        {/* Number */}
        <text
          x="40"
          y="68"
          textAnchor="middle"
          fontSize="20"
          fontWeight="bold"
          fill={colors.text}
          stroke="rgba(0,0,0,0.3)"
          strokeWidth="0.5"
        >
          {position}
        </text>
        
        {/* Decorative Stars */}
        <polygon
          points="25,45 27,50 32,50 28,53 30,58 25,55 20,58 22,53 18,50 23,50"
          fill="rgba(255,255,255,0.6)"
        />
        <polygon
          points="55,45 57,50 62,50 58,53 60,58 55,55 50,58 52,53 48,50 53,50"
          fill="rgba(255,255,255,0.6)"
        />
      </svg>
    </div>
  );
};

export default Medal;
