
// src/components/CommunitySection.tsx
import React from 'react';

type SocialLink = {
  name: string;
  url: string;
};

type CommunitySectionProps = {
  socialLinks: SocialLink[];
};

export const CommunitySection: React.FC<CommunitySectionProps> = ({ socialLinks }) => (
  <section className="py-16 px-6 text-center">
    <h2 className="text-3xl md:text-5xl font-extrabold text-primary-400 mb-8">Join the Community 🤝</h2>
    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
      Follow the hype, share the pump, and ride $GROW with the community. Together we moon! 🌙🔥
    </p>
    <div className="flex justify-center gap-4 md:gap-6">
      {socialLinks.map((link) => (
        <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="bg-primary-900/70 text-primary-300 p-4 rounded-full min-w-[120px] transition-all duration-300 ease-in-out hover:bg-primary-500 hover:text-black hover:scale-105 hover:shadow-md">
          <span className="font-semibold">{link.name}</span>
        </a>
      ))}
    </div>
  </section>
);
