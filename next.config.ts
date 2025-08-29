/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pump.fun',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig;
