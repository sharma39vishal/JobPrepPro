/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
    async rewrites() {
        return [      
          {
            source: "/auth/:path*",
            destination: "http://localhost:5000/auth/:path*",
          },
          {
            source: "/discuss/:path*",
            destination: "http://localhost:5000/discuss/:path*",
          },
          {
            source: "/questions/:path*",
            destination: "http://localhost:5000/questions/:path*",
          },
          {
            source: "/achiver/:path*",
            destination: "http://localhost:5000/achiver/:path*",
          },
          {
            source: "/profile/:path*",
            destination: "http://localhost:5000/profile/:path*",
          },
          {
            source: "/logs/:path*",
            destination: "http://localhost:5000/logs/:path*",
          },
        ];
      },
}

module.exports = nextConfig
