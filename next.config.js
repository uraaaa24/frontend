/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost.docker.internal:8000/api/:path*/"
      }
    ]
  }
}

module.exports = nextConfig
