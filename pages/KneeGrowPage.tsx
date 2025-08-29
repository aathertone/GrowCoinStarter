
// src/pages/KneeGrowPage.tsx
import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { StatCard } from '../components/StatCard';
import { RoadmapSection } from '../components/Roadmap';
import { CommunitySection } from '../components/CommunitySection';

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
  { name: 'Twitter', url: '#'},
  { name: 'Telegram', url: '#'},
  { name: 'Discord', url: '#'},
];

export default function KneeGrowPage() {
  const stats = [
    { title: 'Market Cap', value: '$6,100' },
    { title: 'Total Supply', value: '1,000,000,000' },
    { title: 'Price', value: '$0.0000061' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans overflow-x-hidden">
      <HeroSection
        coinName="KneeGrow"
        coinSymbol="$GROW"
        description="The crypto that&apos;s ready to pump 🚀. Watch $GROW soar and join the community of degens aiming for the moon."
        coinImageSrc="https://images.pump.fun/coin-image/2WWrbmNsM6687n1ijWYMAXQWvVQ8sjhJdbfQPK2ypump?variant=600x600&ipfs=bafkreiftcf2l74ecsdlpkphxfa2v5fk2uhegnfuxjrutfighvldm6u3lj4&src=https%3A%2F%2Fipfs.io%2Fipfs%2Fbafkreiftcf2l74ecsdlpkphxfa2v5fk2uhegnfuxjrutfighvldm6u3lj4"
        buyLink="https://pump.fun/coin/2WWrbmNsM6687n1ijWYMAXQWvVQ8sjhJdbfQPK2ypump"
      />

      <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} title={stat.title} value={stat.value} />
        ))}
      </section>

      <RoadmapSection phases={roadmapPhases} />

      <CommunitySection socialLinks={socialLinks} />

      <footer className="py-8 text-center text-gray-400 text-sm border-t border-primary-400/30">
        © 2025 KneeGrow ($GROW). Pump responsibly 🚀
      </footer>
    </div>
  );
}