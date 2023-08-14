/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
    async rewrites() {
        return [      
          {
            source: "/auth/:path*",
            destination: "https://jobpreppro-backend.onrender.com/auth/:path*",
          },
          {
            source: "/discuss/:path*",
            destination: "https://jobpreppro-backend.onrender.com/discuss/:path*",
          },
          {
            source: "/questions/:path*",
            destination: "https://jobpreppro-backend.onrender.com/questions/:path*",
          },
          {
            source: "/achiver/:path*",
            destination: "https://jobpreppro-backend.onrender.com/achiver/:path*",
          },
          {
            source: "/profile/:path*",
            destination: "https://jobpreppro-backend.onrender.com/profile/:path*",
          },
          {
            source: "/logs/:path*",
            destination: "https://jobpreppro-backend.onrender.com/logs/:path*",
          },
        ];
      },
}

module.exports = nextConfig
