module.exports = {
  plugins: [
    {
      resolve: `cloudflare-docs-theme`,
      options: {
        publicPath: 'api',
        contentPath: './src/content/',
      },
    },
  ],
  siteMetadata: {
    title: `Cloudflare API`,
    description: `Use Cloudflare’s APIs and edge network to build secure, ultra-fast applications.`,
    author: `@cloudflaredev`,
  },
  assetPrefix: `/api`,
}
console.log('running site config')
