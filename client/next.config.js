/** @type {import('next').NextConfig} */
const newurl="http://localhost:5000";
// const newurl="https://jobpreppro-backend.onrender.com";

const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
    async rewrites() {
        return [      
          {
            source: "/auth/:path*",
            destination: `${newurl}/auth/:path*`,
          },
          {
            source: "/discuss/:path*",
            destination: `${newurl}/discuss/:path*`,
          },
          {
            source: "/questions/:path*",
            destination: `${newurl}/questions/:path*`,
          },
          {
            source: "/achiver/:path*",
            destination: `${newurl}/achiver/:path*`,
          },
          {
            source: "/profile/:path*",
            destination: `${newurl}/profile/:path*`,
          },
          {
            source: "/logs/:path*",
            destination: `${newurl}/logs/:path*`,
          },
        ];
      },
}

module.exports = nextConfig
