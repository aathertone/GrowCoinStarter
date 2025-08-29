
import React from 'react';
import Image from 'next/image';

const stats = [
  { title: 'Market Cap', value: '$6,100' },
  { title: 'Total Supply', value: '1,000,000,000' },
  { title: 'Price', value: '$0.0000061' },
];

const roadmapPhases = [
  {
    title: 'Phase 1: Launch & Ignition 🔥',
    tasks: [
      'Launch on Pump.Fun',
      'Website launch',
      'Airdrops and Meme contests',
      'Marketing blitz',
      'Reach $50k MC',
    ],
  },
  {
    title: 'Phase 2: Growth & Momentum 📈',
    tasks: [
      'Listings on mid-tier CEXs',
      'Expand influencer partnerships',
      'Community-driven campaigns',
      'Target: Hit $100k -- $250k MC',
    ],
  },
  {
    title: 'Phase 3: Domination & Moonshot 🚀',
    tasks: [
      'Mini game launch',
      'Major CEX listings',
      'Global marketing and IRL meme events',
      '$1M+ MC',
    ],
  },
];



const socialLinks = [
  { name: 'X', url: 'https://x.com/kneegrowcoin?s=21' },
  { name: 'Telegram', url: 'https://t.me/kneegrowtokenchat' },
  { name: 'Discord', url: '#' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-green-400 animate-spin-slow mb-8">
          <Image
            src="https://images.pump.fun/coin-image/2WWrbmNsM6687n1ijWYMAXQWvVQ8sjhJdbfQPK2ypump?variant=600x600"
            alt="KneeGrow Coin"
            width={256}
            height={256}
            className="object-cover"
          />
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold text-green-400 drop-shadow-lg mb-4 animate-bounce">
          KneeGrow ($GROW)
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-6 max-w-2xl">
          The crypto that&apos;s ready to pump 🚀. Watch $GROW soar and join the community of degens aiming for the moon.
        </p>
        <a
          href="https://pump.fun/coin/2WWrbmNsM6687n1ijWYMAXQWvVQ8sjhJdbfQPK2ypump"
          className="px-8 py-4 bg-green-500 text-black font-bold rounded-2xl hover:bg-green-400 animate-pulse transition"
        >
          Buy $GROW
        </a>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-gray-900/70 border border-green-400 rounded-2xl p-6 text-center hover:scale-105 transition-transform"
          >
            <h3 className="text-lg font-semibold text-green-400">{stat.title}</h3>
            <p className="text-2xl font-bold text-white mt-2">{stat.value}</p>
          </div>
        ))}
      </section>

      {/* Roadmap Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-green-400 text-center mb-12">
          Roadmap
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roadmapPhases.map((phase) => (
            <div
              key={phase.title}
              className="bg-gray-900/70 border border-green-400 rounded-2xl p-6 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold text-green-400 mb-4">{phase.title}</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {phase.tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-8">
          Join the Community
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Follow the hype, share the pump, and ride $GROW with the community. Together we moon! 🌙🔥
        </p>
        <div className="flex justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="bg-gray-900/70 p-4 rounded-full hover:bg-green-500 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm border-t border-green-400/30">
        © 2025 KneeGrow ($GROW). Pump responsibly 🚀
      </footer>
    </div>
  );
}
