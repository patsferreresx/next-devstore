/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // modo atualizado para usar a tag <Image />
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],

    // modo antigo:
    // domains: ['github.com'],
  },
}

export default nextConfig
