/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com', 'plus.unsplash.com', 'localhost', '127.0.0.1']
  },
  async rewrites() {
    return [
      {
        source: '/notice',
        destination: '/notices'
      }
    ];
  }
};

module.exports = nextConfig;

