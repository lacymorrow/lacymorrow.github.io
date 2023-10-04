/** @type {import('next').NextConfig} */
const nextConfig = {
	// For Static Site Generation
	output: 'export',

	// cors: {
  //   origin: "*",
  // },
	// experimental: { serverActions:true },

	images: {
		// For Static Site Generation
		unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's.gravatar.com',
        port: '',
        pathname: '/avatar/**',
      },
    ],
  },
}

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
	defaultShowCopyCode: true
})

module.exports = withNextra(nextConfig)
