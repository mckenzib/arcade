import React, { useState } from 'react';
import { Ghost, Cookie, Maximize2 } from 'lucide-react';
import { RetroLoader } from './RetroLoader';

// Custom Onion Icon since standard libraries might lack a specific one
const OnionIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z" />
    <path d="M12 2a15 15 0 0 1 5 10 15 15 0 0 1-5 10" />
    <path d="M12 2a15 15 0 0 0-5 10 15 15 0 0 0 5 10" />
    <path d="M12 2v20" />
  </svg>
);

// Custom Wireframe Sphere Icon
const SphereIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
    <path d="M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10" />
    <path d="M2 12h20" />
  </svg>
);

// Custom Boxing Glove Icon
const BoxingGloveIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M8 2a4 4 0 0 0-4 4v12a2 2 0 0 0 2 2h8a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H8z" />
    <path d="M4 14h10" />
    <path d="M14 6h4" />
    <path d="M4 10h12" />
  </svg>
);

// Custom Void Icon (Large Hole)
const VoidIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" strokeWidth="3" opacity="0.7" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

interface ArcadeCabinetProps {
  title: string;
  description: string;
  color: 'cyan' | 'orange' | 'pink' | 'purple' | 'red' | 'green' | 'yellow' | 'blue';
  path: string;
  onPlay: () => void;
  onSelect: () => void;
  isSelected: boolean;
  accentColor: string;
  isActive: boolean;
  isLoading: boolean;
  onLoadingComplete: () => void;
  isGameRunning: boolean;
  isExpanded: boolean;
  onExpand: () => void;
}

export const ArcadeCabinet: React.FC<ArcadeCabinetProps> = ({ 
  title, 
  description, 
  color, 
  path,
  onPlay,
  onSelect,
  isSelected,
  accentColor,
  isActive,
  isLoading,
  onLoadingComplete,
  isGameRunning,
  isExpanded,
  onExpand
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [screenHovered, setScreenHovered] = useState(false);

  const colorClasses = {
    cyan: {
      glow: 'shadow-[0_0_30px_rgba(34,211,238,0.4)]',
      border: 'border-cyan-500',
      text: 'text-cyan-400',
      bg: 'bg-cyan-900',
      screen: 'bg-cyan-950'
    },
    orange: {
      glow: 'shadow-[0_0_30px_rgba(249,115,22,0.4)]',
      border: 'border-orange-500',
      text: 'text-orange-400',
      bg: 'bg-orange-900',
      screen: 'bg-orange-950'
    },
    pink: {
      glow: 'shadow-[0_0_30px_rgba(236,72,153,0.4)]',
      border: 'border-pink-500',
      text: 'text-pink-400',
      bg: 'bg-pink-900',
      screen: 'bg-pink-950'
    },
    purple: {
      glow: 'shadow-[0_0_30px_rgba(168,85,247,0.4)]',
      border: 'border-purple-500',
      text: 'text-purple-400',
      bg: 'bg-purple-900',
      screen: 'bg-purple-950'
    },
    red: {
      glow: 'shadow-[0_0_30px_rgba(239,68,68,0.4)]',
      border: 'border-red-500',
      text: 'text-red-400',
      bg: 'bg-red-900',
      screen: 'bg-red-950'
    },
    green: {
      glow: 'shadow-[0_0_30px_rgba(74,222,128,0.4)]',
      border: 'border-green-500',
      text: 'text-green-400',
      bg: 'bg-green-900',
      screen: 'bg-green-950'
    },
    yellow: {
      glow: 'shadow-[0_0_30px_rgba(234,179,8,0.4)]',
      border: 'border-yellow-500',
      text: 'text-yellow-400',
      bg: 'bg-yellow-900',
      screen: 'bg-yellow-950'
    },
    blue: {
      glow: 'shadow-[0_0_30px_rgba(59,130,246,0.4)]',
      border: 'border-blue-500',
      text: 'text-blue-400',
      bg: 'bg-blue-900',
      screen: 'bg-blue-950'
    }
  };

  const currentTheme = colorClasses[color as keyof typeof colorClasses] || colorClasses.cyan;

  const handleInteraction = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isActive || isLoading || isGameRunning) return;
    
    if (isSelected) {
      onPlay();
    } else {
      onSelect();
    }
  };

  // Styles for selected vs unselected state
  // If selected: full opacity, normal scale, higher z-index
  // If not selected: reduced opacity, smaller scale, lower z-index, blur?
  const selectionStyles = isExpanded 
    ? '' 
    : isSelected 
      ? 'opacity-100 scale-100 z-20 brightness-110' 
      : 'opacity-50 scale-90 z-10 brightness-50 hover:opacity-70 hover:scale-95 cursor-pointer';

  // When expanded, we break out of the relative positioning to fill the screen
  const containerClass = isExpanded
    ? "fixed top-16 bottom-0 left-0 right-0 z-50 bg-black flex flex-col items-center justify-center animate-in fade-in duration-300"
    : `relative group transition-all duration-500 ease-out transform w-full h-full flex flex-col ${selectionStyles} ${!isActive && !isGameRunning && !isLoading ? 'cursor-not-allowed grayscale' : ''}`;

  return (
    <div 
      className={containerClass}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleInteraction}
    >
      {/* Cabinet Chassis - Hidden when Expanded */}
      <div className={`
        ${isExpanded ? 'hidden' : 'block'}
        absolute inset-0 rounded-t-2xl border-4 ${currentTheme.border} z-0
        ${isSelected && !isGameRunning && !isLoading ? currentTheme.glow : ''}
        transition-shadow duration-300
      `} style={{
        background: 'linear-gradient(160deg, #2a2a2e 0%, #1c1c20 40%, #141416 100%)',
        boxShadow: isSelected && !isGameRunning && !isLoading
          ? undefined
          : 'inset 2px 0 8px rgba(0,0,0,0.6), inset -1px 0 4px rgba(255,255,255,0.03)'
      }}></div>

      {/* 3D Side Depth Panel - Hidden when Expanded */}
      {!isExpanded && (
        <div className="absolute top-3 bottom-3 -right-3 w-3 z-0 rounded-r-sm" style={{
          background: 'linear-gradient(to right, #0a0a0b, #111114)',
          borderTop: '2px solid #222',
          borderRight: '2px solid #111',
          borderBottom: '2px solid #111',
        }}></div>
      )}

      {/* Cabinet Body Highlight Strip - Hidden when Expanded */}
      {!isExpanded && (
        <div className="absolute top-8 bottom-28 md:bottom-32 left-2 w-[2px] z-1 opacity-20 rounded-full" style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.05) 60%, transparent)'
        }}></div>
      )}

      {/* Marquee / Top Header - Hidden when Expanded */}
      <div className={`${isExpanded ? 'hidden' : 'flex'} z-10 h-20 md:h-24 rounded-t-xl border-b-4 ${currentTheme.border} items-center justify-center relative overflow-hidden shrink-0 mx-auto mt-1 w-[calc(100%-8px)]`}
        style={{ background: `linear-gradient(180deg, ${accentColor}33 0%, ${accentColor}11 60%, #000 100%)` }}>
        {/* Diagonal stripe overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 8px, ${accentColor} 8px, ${accentColor} 10px)`
        }}></div>
        {/* Top edge LED strip */}
        <div className="absolute top-0 left-0 right-0 h-1 opacity-60" style={{ background: accentColor, boxShadow: `0 0 8px ${accentColor}` }}></div>
        {/* Bottom edge accent */}
        <div className="absolute bottom-0 left-4 right-4 h-px opacity-30" style={{ background: accentColor }}></div>
        {/* Dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-10"></div>
        <h2 className={`font-arcade text-lg md:text-2xl text-center px-2 leading-tight z-20 ${isHovered && isSelected && !isGameRunning && 'animate-pulse'}`}
          style={{
            color: '#fff',
            textShadow: `0 0 8px ${accentColor}, 0 0 20px ${accentColor}, 0 0 2px #fff`
          }}>
          {title}
        </h2>
      </div>

      {/* Screen Section - Grows to fill when expanded */}
      <div className={`relative z-10 flex flex-col items-center justify-center min-h-0 transition-all duration-500 ${isExpanded ? 'w-full h-full p-0' : 'w-full flex-1 p-3 md:p-4'}`}>
          
          {/* Screen Bezel - Hidden borders when expanded */}
          <div className={`w-full h-full rounded-lg relative flex flex-col ${isExpanded ? 'rounded-none p-0 bg-black' : 'p-2'}`}
            style={isExpanded ? {} : {
              background: 'linear-gradient(145deg, #3a3a3f 0%, #252528 50%, #1a1a1d 100%)',
              boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.06), inset 0 -2px 4px rgba(0,0,0,0.8), inset 2px 0 4px rgba(255,255,255,0.03)'
            }}>
              
              {/* Actual Screen Container */}
              <div 
                 className={`
                   relative overflow-hidden
                   ${isExpanded 
                      ? 'w-full h-full border-none' 
                      : `w-full h-full rounded border-2 border-black shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] ${currentTheme.screen}`
                   }
                   bg-black
                 `}
                 onMouseEnter={() => setScreenHovered(true)}
                 onMouseLeave={() => setScreenHovered(false)}
              >
                  {isLoading && (
                    <RetroLoader 
                        gameName={title} 
                        theme={color} 
                        onComplete={onLoadingComplete} 
                    />
                  )}

                  {isGameRunning ? (
                    <>
                      {/* The Game Iframe */}
                      <iframe 
                        src={path} 
                        className={`w-full h-full border-0 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                        title={title}
                      />
                      
                      {/* Click Overlay (Only visible when NOT expanded) */}
                      {!isExpanded && !isLoading && (
                        <div 
                          className="absolute inset-0 z-20 bg-black/10 hover:bg-black/40 cursor-pointer flex items-center justify-center transition-colors duration-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            onExpand();
                          }}
                        >
                          {screenHovered && (
                            <div className="flex flex-col items-center animate-bounce">
                              <Maximize2 className="w-12 h-12 text-white mb-2 drop-shadow-lg" />
                              <span className="font-pixel text-white text-2xl drop-shadow-md tracking-widest bg-black/50 px-2">EXPAND</span>
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    /* Default "Insert Coin" Screen Content - Only shown if not loading and not playing */
                    !isLoading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2 md:p-4 z-10">
                            {/* Icon */}
                            <div className={`mb-2 md:mb-4 transition-transform duration-300 ${isHovered && isSelected ? 'scale-125 rotate-6' : ''}`}>
                              {color === 'cyan' && <Ghost className="w-8 h-8 md:w-12 md:h-12 text-cyan-300" />}
                              {color === 'orange' && <Cookie className="w-8 h-8 md:w-12 md:h-12 text-orange-300" />}
                              {color === 'purple' && <OnionIcon className="w-8 h-8 md:w-12 md:h-12 text-purple-300" />}
                              {color === 'red' && <SphereIcon className="w-8 h-8 md:w-12 md:h-12 text-red-300" />}
                              {color === 'green' && <SphereIcon className="w-8 h-8 md:w-12 md:h-12 text-green-300" />}
                              {color === 'yellow' && <BoxingGloveIcon className="w-8 h-8 md:w-12 md:h-12 text-yellow-300" />}
                              {color === 'blue' && <VoidIcon className="w-8 h-8 md:w-12 md:h-12 text-blue-300" />}
                            </div>

                            {/* Insert Coin Text */}
                            <div className={`font-pixel text-xl md:text-2xl ${currentTheme.text} ${isHovered && isSelected ? 'animate-bounce' : ''}`}>
                            {isSelected ? (isHovered ? 'CLICK TO PLAY' : 'INSERT COIN') : 'CLICK TO SELECT'}
                            </div>
                            
                            {/* Scanline overlay specific to screen */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_3px,3px_100%] pointer-events-none opacity-60"></div>
                        </div>
                    )
                  )}

                  {/* Screen Glare (Only when not expanded) */}
                  {!isExpanded && (
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 to-transparent pointer-events-none"></div>
                  )}
              </div>
          </div>
      </div>

      {/* Control Panel - Hidden when expanded */}
      {!isExpanded && (
      <div className="z-10 h-28 md:h-32 w-full relative shrink-0 mx-auto overflow-hidden"
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 96% 100%, 4% 100%)',
          background: 'linear-gradient(180deg, #323236 0%, #252528 60%, #1e1e21 100%)',
          borderTop: '3px solid #444',
          boxShadow: 'inset 0 2px 6px rgba(255,255,255,0.05), inset 0 -4px 8px rgba(0,0,0,0.6)'
        }}>

        {/* Panel surface texture lines */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 11px, rgba(255,255,255,0.15) 12px)'
        }}></div>

        {/* Joystick */}
        <div className="absolute left-5 md:left-7 top-3 md:top-4">
          {/* Base plate */}
          <div className="w-12 md:w-14 h-12 md:h-14 bg-zinc-900 rounded-full border-2 border-zinc-700 flex items-center justify-center shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)]">
            {/* Stick shaft */}
            <div className="relative flex flex-col items-center">
              <div className="w-2 md:w-2.5 h-7 md:h-8 bg-gradient-to-b from-zinc-400 to-zinc-600 rounded-full shadow-md"></div>
              {/* Ball top */}
              <div className="absolute -top-3 md:-top-3.5 w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-red-400 to-red-700 rounded-full shadow-lg border border-red-900"
                style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.6), inset 0 1px 2px rgba(255,255,255,0.3)' }}></div>
            </div>
          </div>
        </div>

        {/* Action Buttons (triangle layout) */}
        <div className="absolute right-4 md:right-6 top-2 md:top-3">
          {/* Top button */}
          <div className="flex justify-center mb-1">
            <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full border-b-[3px] border-black shadow-lg transition-all
              ${color === 'cyan' ? 'bg-cyan-500' : color === 'purple' ? 'bg-purple-500' : color === 'red' ? 'bg-blue-500' : color === 'green' ? 'bg-lime-500' : color === 'yellow' ? 'bg-blue-500' : color === 'blue' ? 'bg-indigo-500' : 'bg-yellow-500'}`}
              style={{ boxShadow: '0 3px 0 rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.3)' }}></div>
          </div>
          {/* Bottom two buttons */}
          <div className="flex gap-2 md:gap-2.5">
            <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full border-b-[3px] border-black shadow-lg transition-all
              ${color === 'cyan' ? 'bg-pink-500' : color === 'purple' ? 'bg-green-500' : color === 'red' ? 'bg-yellow-500' : color === 'green' ? 'bg-emerald-600' : color === 'yellow' ? 'bg-red-500' : color === 'blue' ? 'bg-red-600' : 'bg-red-500'}`}
              style={{ boxShadow: '0 3px 0 rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.3)' }}></div>
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border-b-[3px] border-black shadow-lg bg-yellow-400"
              style={{ boxShadow: '0 3px 0 rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.3)' }}></div>
          </div>
        </div>

        {/* Start Buttons */}
        <div className="absolute bottom-2 w-full flex justify-center gap-5 md:gap-6">
          <div className="flex flex-col items-center gap-0.5">
            <div className="w-8 h-3 md:w-9 md:h-3 bg-zinc-300 rounded-sm opacity-85 border border-zinc-400"
              style={{ boxShadow: '0 2px 0 rgba(0,0,0,0.5)' }}></div>
            <span className="text-[6px] md:text-[7px] font-pixel text-zinc-400 tracking-widest">1P</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <div className="w-8 h-3 md:w-9 md:h-3 bg-zinc-300 rounded-sm opacity-85 border border-zinc-400"
              style={{ boxShadow: '0 2px 0 rgba(0,0,0,0.5)' }}></div>
            <span className="text-[6px] md:text-[7px] font-pixel text-zinc-400 tracking-widest">2P</span>
          </div>
        </div>
      </div>
      )}
      
      {/* Coin Slot Area - Hidden when expanded */}
      {!isExpanded && (
      <div className={`z-10 h-16 md:h-20 w-[calc(100%-8px)] mx-auto rounded-b-xl items-center justify-center shrink-0 border-x-4 border-b-4 ${currentTheme.border} flex`}
        style={{ background: 'linear-gradient(180deg, #111113 0%, #0a0a0c 100%)' }}>
        {/* Coin slots row */}
        <div className="flex items-center justify-center gap-6 md:gap-8">
          {/* Slot 1 */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-9 h-10 md:w-11 md:h-12 bg-zinc-900 border border-zinc-700 rounded-sm flex items-center justify-center"
              style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.8)' }}>
              <div className="w-5 h-1 bg-zinc-600 rounded-sm"></div>
            </div>
            <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${currentTheme.bg}`}></div>
          </div>
          {/* Center label */}
          <div className="font-pixel text-zinc-600 text-[7px] text-center leading-tight tracking-widest">INSERT<br/>COIN</div>
          {/* Slot 2 */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-9 h-10 md:w-11 md:h-12 bg-zinc-900 border border-zinc-700 rounded-sm flex items-center justify-center"
              style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.8)' }}>
              <div className="w-5 h-1 bg-zinc-600 rounded-sm"></div>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
          </div>
        </div>
      </div>
      )}

      {/* Floor Glow Reflection - Hidden when expanded */}
      {!isExpanded && (
        <>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-8 blur-xl opacity-50 rounded-full"
            style={{ background: accentColor }}></div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-4 blur-md opacity-30 rounded-full"
            style={{ background: accentColor }}></div>
        </>
      )}
    </div>
  );
}