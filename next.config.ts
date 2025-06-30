import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com', // GitHub profile photos
      },
      {
        protocol: 'https',
        hostname: 'imgur.com', // If you use Imgur for OG or screenshots
      },
      {
        protocol: 'https',
        hostname: 'nandinijambhulkar12.github.io', // your GitHub Pages portfolio (if hosting assets there)
      },
    ],
  },
};

export default nextConfig;
