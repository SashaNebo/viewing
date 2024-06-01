/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    const svgRule = config.module.rules.find(
      (rule) => rule.test && rule.test.toString().includes("svg"),
    )
    if (svgRule) {
      svgRule.exclude = /\.svg$/
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },

  images: {
    remotePatterns: [
      {
        hostname: "loremflickr.com",
      },
    ],
  },
}

export default nextConfig
