import React from 'react';

type StatCardProps = {
  title: string;
  value: string;
};

export const StatCard: React.FC<StatCardProps> = ({ title, value }) => (
  <div className="bg-primary-900/60 border border-primary-400 rounded-xl p-6 text-center shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-primary-400/30">
    <h3 className="text-sm md:text-md font-semibold text-primary-400 uppercase tracking-wide">{title}</h3>
    <p className="text-2xl md:text-3xl font-extrabold text-white mt-2 drop-shadow-md">{value}</p>
  </div>
);
