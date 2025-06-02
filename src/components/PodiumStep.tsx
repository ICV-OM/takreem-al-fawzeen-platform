
import React from 'react';
import { Camera } from 'lucide-react';
import Medal from './Medal';
import Trophy from './Trophy';

interface PodiumStepProps {
  position: number;
  name: string;
  imageSrc: string;
  height: string;
}

const PodiumStep: React.FC<PodiumStepProps> = ({ position, name, imageSrc, height }) => {
  const getPositionText = () => {
    switch (position) {
      case 1: return "المركز الأول";
      case 2: return "المركز الثاني";
      case 3: return "المركز الثالث";
      case 4: return "المركز الرابع";
      case 5: return "المركز الخامس";
      default: return "";
    }
  };

  const getPositionColors = () => {
    switch (position) {
      case 1: return {
        bg: "celebration-gradient",
        border: "border-gold",
        text: "text-yellow-800",
        glow: "pulse-glow"
      };
      case 2: return {
        bg: "bg-gradient-to-br from-gray-200 to-gray-400",
        border: "border-silver",
        text: "text-gray-700",
        glow: ""
      };
      case 3: return {
        bg: "bg-gradient-to-br from-amber-600 to-amber-800",
        border: "border-bronze",
        text: "text-amber-100",
        glow: ""
      };
      case 4: return {
        bg: "bg-gradient-to-br from-gray-500 to-gray-700",
        border: "border-iron",
        text: "text-gray-100",
        glow: ""
      };
      case 5: return {
        bg: "bg-gradient-to-br from-purple-500 to-purple-700",
        border: "border-purple-400",
        text: "text-purple-100",
        glow: ""
      };
      default: return {
        bg: "bg-gray-200",
        border: "border-gray-300",
        text: "text-gray-700",
        glow: ""
      };
    }
  };

  const colors = getPositionColors();

  return (
    <div className={`flex flex-col items-center ${position === 1 ? 'bounce-slow' : ''}`}>
      {/* Awards Section */}
      <div className="flex items-center gap-2 mb-4">
        {position === 1 && (
          <Trophy className="w-12 h-12 animate-pulse" />
        )}
        {position !== 5 && (
          <Medal position={position} className="w-16 h-20" />
        )}
        {position === 5 && (
          <div className="w-16 h-20 flex items-center justify-center">
            <Camera className="w-12 h-12 text-purple-300 animate-pulse" />
          </div>
        )}
      </div>

      {/* Profile Image */}
      <div className={`relative mb-4 ${colors.glow}`}>
        <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 ${colors.border} shadow-2xl`}>
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        {position === 1 && (
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-yellow-800 text-xl">👑</span>
          </div>
        )}
      </div>

      {/* Podium */}
      <div 
        className={`${colors.bg} ${colors.border} border-2 rounded-t-lg shadow-xl transition-all duration-300 hover:scale-105 w-full max-w-[200px] flex flex-col items-center justify-end p-4`}
        style={{ height }}
      >
        {/* Name */}
        <h3 className={`${colors.text} font-bold text-lg md:text-xl text-center mb-2`}>
          {name}
        </h3>
        
        {/* Position */}
        <p className={`${colors.text} font-semibold text-sm md:text-base text-center`}>
          {getPositionText()}
        </p>

        {/* Position Number or Camera Icon */}
        <div className={`mt-2 w-10 h-10 rounded-full ${colors.bg} ${colors.border} border-2 flex items-center justify-center`}>
          {position === 5 ? (
            <Camera className="w-6 h-6 text-purple-200" />
          ) : (
            <span className={`${colors.text} font-bold text-lg`}>
              {position}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PodiumStep;
