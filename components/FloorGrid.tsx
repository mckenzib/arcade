import React from 'react';

export const FloorGrid = () => {
  return (
    <>
      {/* Star field upper background */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        backgroundImage: `
          radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.6) 0%, transparent 100%),
          radial-gradient(1px 1px at 23% 40%, rgba(255,255,255,0.4) 0%, transparent 100%),
          radial-gradient(1.5px 1.5px at 37% 8%, rgba(255,255,255,0.7) 0%, transparent 100%),
          radial-gradient(1px 1px at 52% 22%, rgba(255,255,255,0.5) 0%, transparent 100%),
          radial-gradient(1px 1px at 65% 35%, rgba(255,255,255,0.3) 0%, transparent 100%),
          radial-gradient(1.5px 1.5px at 78% 12%, rgba(255,255,255,0.6) 0%, transparent 100%),
          radial-gradient(1px 1px at 88% 28%, rgba(255,255,255,0.4) 0%, transparent 100%),
          radial-gradient(1px 1px at 5% 55%, rgba(255,255,255,0.3) 0%, transparent 100%),
          radial-gradient(1px 1px at 18% 62%, rgba(255,255,255,0.5) 0%, transparent 100%),
          radial-gradient(1.5px 1.5px at 42% 48%, rgba(255,255,255,0.4) 0%, transparent 100%),
          radial-gradient(1px 1px at 58% 58%, rgba(255,255,255,0.3) 0%, transparent 100%),
          radial-gradient(1px 1px at 72% 44%, rgba(255,255,255,0.5) 0%, transparent 100%),
          radial-gradient(1px 1px at 93% 52%, rgba(255,255,255,0.4) 0%, transparent 100%),
          radial-gradient(2px 2px at 30% 20%, rgba(200,150,255,0.5) 0%, transparent 100%),
          radial-gradient(2px 2px at 70% 10%, rgba(255,150,200,0.4) 0%, transparent 100%),
          radial-gradient(1.5px 1.5px at 85% 42%, rgba(150,200,255,0.4) 0%, transparent 100%)
        `,
      }}></div>

      {/* Deep space radial gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(88,28,135,0.35) 0%, rgba(49,10,90,0.15) 50%, transparent 100%)'
      }}></div>

      {/* Horizon glow line */}
      <div className="absolute z-0 pointer-events-none"
        style={{
          bottom: '50%',
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(236,72,153,0.3) 15%, rgba(236,72,153,0.9) 40%, rgba(180,100,255,1) 50%, rgba(236,72,153,0.9) 60%, rgba(236,72,153,0.3) 85%, transparent 100%)',
          boxShadow: '0 0 12px 4px rgba(236,72,153,0.5), 0 0 40px 10px rgba(180,100,255,0.2)',
        }}></div>

      {/* Horizon bloom above the line */}
      <div className="absolute z-0 pointer-events-none"
        style={{
          bottom: '46%',
          left: '10%',
          right: '10%',
          height: '80px',
          background: 'radial-gradient(ellipse at 50% 100%, rgba(180,100,255,0.2) 0%, transparent 70%)',
          filter: 'blur(8px)',
        }}></div>

      {/* Perspective floor grid */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] overflow-hidden z-0 pointer-events-none"
        style={{ perspective: '500px' }}>

        {/* Main grid */}
        <div className="w-[200%] h-[100%] absolute -left-[50%] bottom-0"
          style={{
            transform: 'rotateX(65deg)',
            transformStyle: 'preserve-3d',
            backgroundImage: `
              linear-gradient(rgba(236, 72, 153, 0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 72, 153, 0.7) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-move 1.8s linear infinite',
          }}>
        </div>

        {/* Grid fade-to-dark at horizon overlay */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 25%, transparent 55%)'
        }}></div>

        {/* Grid side vignette */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.6) 100%)'
        }}></div>

        {/* Floor glow tint */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 40% at 50% 100%, rgba(236,72,153,0.12) 0%, transparent 70%)'
        }}></div>
      </div>

      {/* Side light pillars */}
      <div className="absolute bottom-0 left-0 w-32 h-[60vh] z-0 pointer-events-none" style={{
        background: 'linear-gradient(to right, rgba(180,100,255,0.06) 0%, transparent 100%)',
        filter: 'blur(20px)',
      }}></div>
      <div className="absolute bottom-0 right-0 w-32 h-[60vh] z-0 pointer-events-none" style={{
        background: 'linear-gradient(to left, rgba(180,100,255,0.06) 0%, transparent 100%)',
        filter: 'blur(20px)',
      }}></div>

      <style>{`
        @keyframes grid-move {
          0%   { transform: rotateX(65deg) translateY(0); }
          100% { transform: rotateX(65deg) translateY(60px); }
        }
      `}</style>
    </>
  );
};
