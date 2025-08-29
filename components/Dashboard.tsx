import { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const KneeGrowDashboard = () => {
  const [tokenData, setTokenData] = useState(null);
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const response = await axios.get('https://api.pump.fun/token/2q7jMwWYFxUdxBqWbi8ohztyG1agjQMrasUXwqGCpump');
        setTokenData(response.data);
        setGraphData(response.data.priceHistory); // Assuming priceHistory is available
      } catch (error) {
        console.error('Error fetching token data:', error);
      }
    };

    fetchTokenData();
  }, []);

  if (!tokenData) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,128,0.15),_transparent_70%)] animate-pulse" />
        <div className="relative z-10 w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-green-400 cursor-pointer animate-spin-slow mb-8 hover:scale-110 transition-transform duration-500">
          <img
            src={tokenData.logoUrl}
            alt="$GROW Coin"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-6xl font-extrabold text-green-400 drop-shadow-lg mb-4 animate-bounce">
          KneeGrow ($GROW)
        </h1>
        <p className="text-lg text-gray-300 mb-6 max-w-2xl">
          The crypto that's ready to pump 🚀. Watch $GROW soar and join the community of degens aiming for the moon.
        </p>
        <a href="https://pump.fun" target="_blank" rel="noopener noreferrer">
          <button className="px-8 py-4 bg-green-500 text-black font-bold rounded-2xl hover:bg-green-400 transition">
            Buy $GROW
          </button>
        </a>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900/70 border border-green-400 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
          <h3 className="text-lg font-semibold text-green-400">Market Cap</h3>
          <p className="text-2xl font-bold text-white mt-2">${tokenData.marketCap}</p>
        </div>
        <div className="bg-gray-900/70 border border-green-400 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
          <h3 className="text-lg font-semibold text-green-400">Total Supply</h3>
          <p className="text-2xl font-bold text-white mt-2">{tokenData.totalSupply}</p>
        </div>
        <div className="bg-gray-900/70 border border-green-400 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
          <h3 className="text-lg font-semibold text-green-400">Price</h3>
          <p className="text-2xl font-bold text-white mt-2">${tokenData.price}</p>
        </div>
      </section>

      {/* Graph Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="bg-gray-900/60 border border-green-400 rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Price Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={graphData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{ backgroundColor: "#111827", borderRadius: "8px" }}
                itemStyle={{ color: "#10b981" }}
              />
              <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm border-t border-green-400/30">
        © 2025 KneeGrow ($GROW). Pump responsibly 🚀
      </footer>
    </div>
  );
};

export default KneeGrowDashboard;
