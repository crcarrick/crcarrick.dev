/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
