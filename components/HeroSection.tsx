// src/components/HeroSection.tsx
import React from 'react';

type HeroSectionProps = {
  coinName: string;
  coinSymbol: string;
  description: string;
  coinImageSrc: string;
  buyLink: string;
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  coinName,
  coinSymbol,
  description,
  coinImageSrc,
  buyLink,
}) => (
  <section className="relative min-h-screen flex flex-col items-center justify-center text-center p-6">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,128,0.15),_transparent_70%)] animate-pulse" />
    <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary-400 mb-8 animate-spin-slow-reverse">
      <a href={buyLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full transition-transform duration-500 ease-in-out hover:scale-110">
        <img
          src={coinImageSrc}
          alt={`${coinName} Coin`}
          className="w-full h-full object-cover"
        />
      </a>
    </div>
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary-400 drop-shadow-xl mb-4 animate-fade-in-up">
      {coinName} ({coinSymbol})
    </h1>
    <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 max-w-2xl animate-fade-in-up delay-200">
      {description}
    </p>
    <a href={buyLink} target="_blank" rel="noopener noreferrer">
      <button className="relative px-8 py-4 bg-primary-500 text-black font-extrabold rounded-full shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:bg-primary-400 transform hover:scale-105 animate-pulse-slow">
        <span className="relative z-10">Buy {coinSymbol}</span>
      </button>
    </a>
  </section>
);
