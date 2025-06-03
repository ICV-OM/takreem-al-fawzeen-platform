import React, { useState, useEffect } from 'react';
import PodiumStep from '../components/PodiumStep';

const Index = () => {
  const winners = [
    {
      position: 2,
      name: "ماجد الهاشمي",
      imageSrc: "/lovable-uploads/beb1a6e7-9482-4d58-b0ca-a914a6736567.png",
      height: "200px"
    },
    {
      position: 1,
      name: "عمار الهاشمي",
      imageSrc: "/lovable-uploads/a21bba29-a454-4c5e-8f58-6db3213dce05.png",
      height: "240px"
    },
    {
      position: 3,
      name: "أحمد الكاسبي",
      imageSrc: "/lovable-uploads/ab7a64bf-787c-4536-b086-883ce292d4fb.png",
      height: "180px"
    },
    {
      position: 4,
      name: "إسراء",
      imageSrc: "/lovable-uploads/0d78814b-6fd4-420a-bb37-f463b1ed8e87.png",
      height: "160px"
    },
    {
      position: 5,
      name: "زينب",
      subtitle: "مركز التصوير الاحترافي",
      imageSrc: "/lovable-uploads/0d78814b-6fd4-420a-bb37-f463b1ed8e87.png",
      height: "140px"
    }
  ];

  const [currentWinnerIndex, setCurrentWinnerIndex] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    if (currentWinnerIndex < winners.length) {
      const timer = setTimeout(() => {
        if (currentWinnerIndex === winners.length - 1) {
          setIsAnimationComplete(true);
        } else {
          setCurrentWinnerIndex(prev => prev + 1);
        }
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [currentWinnerIndex, winners.length]);

  const getCurrentWinner = () => {
    // ترتيب العرض: 1، 2، 3، 4، 5
    const displayOrder = [1, 2, 3, 4, 5];
    const position = displayOrder[currentWinnerIndex];
    return winners.find(winner => winner.position === position);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden flex flex-col">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-18 h-18 bg-blue-400 rounded-full opacity-20 animate-bounce"></div>
        
        {/* Floating Confetti */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-bounce`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col h-full justify-between">
        {/* Header */}
        <div className="text-center pt-4">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-2 animate-pulse">
            🎉 منصة التكريم 🎉
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
            تهانينا للفائزين الأعزاء
          </h2>
          <div className="flex justify-center items-center gap-4 text-yellow-400 text-xl">
            <span className="animate-bounce">🏆</span>
            <span className="animate-pulse">✨</span>
            <span className="animate-bounce">🥇</span>
            <span className="animate-pulse">🎊</span>
            <span className="animate-bounce">🏅</span>
          </div>
        </div>

        {/* Podium */}
        <div className="flex justify-center items-end gap-2 md:gap-4 max-w-6xl mx-auto flex-grow">
          {!isAnimationComplete ? (
            // عرض الفائز الحالي منفرداً مع تأثير الظهور
            <div className="animate-fade-in flex items-end h-full">
              {getCurrentWinner() && (
                <PodiumStep
                  key={getCurrentWinner()!.position}
                  position={getCurrentWinner()!.position}
                  name={getCurrentWinner()!.name}
                  subtitle={getCurrentWinner()!.subtitle}
                  imageSrc={getCurrentWinner()!.imageSrc}
                  height={getCurrentWinner()!.height}
                />
              )}
            </div>
          ) : (
            // عرض جميع الفائزين معاً بعد انتهاء الرسوم المتحركة
            winners.map((winner) => (
              <div key={winner.position} className="animate-scale-in">
                <PodiumStep
                  position={winner.position}
                  name={winner.name}
                  subtitle={winner.subtitle}
                  imageSrc={winner.imageSrc}
                  height={winner.height}
                />
              </div>
            ))
          )}
        </div>

        {/* Bottom Section */}
        <div className="pb-4">
          {/* Celebration Message */}
          <div className="text-center bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-4 mx-auto max-w-2xl border border-white/20 mb-4">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">
              🎊 ألف مبارك للجميع 🎊
            </h3>
            <p className="text-sm md:text-base text-purple-100">
              نفتخر بإنجازاتكم ونتمنى لكم المزيد من التقدم والنجاح
            </p>
            <div className="flex justify-center gap-2 mt-2 text-lg">
              <span className="animate-pulse">🌟</span>
              <span className="animate-bounce">💫</span>
              <span className="animate-pulse">⭐</span>
              <span className="animate-bounce">✨</span>
              <span className="animate-pulse">🌟</span>
            </div>
          </div>

          {/* Footer Message */}
          <div className="text-center">
            <p className="text-white/80 text-sm md:text-base font-medium">
              مع تحيات المكتب الوطني للمحتوى المحلي ICV @2025
            </p>
          </div>
        </div>
      </div>

      {/* Fireworks Animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 2) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '2s'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Index;
