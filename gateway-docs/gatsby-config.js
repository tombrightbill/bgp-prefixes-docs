module.exports = {
  plugins: [
    {
      resolve: `cloudflare-docs-theme`,
      options: {
        publicPath: 'gateway',
        contentPath: './src/content/',
      },
    },
  ],
  siteMetadata: {
    title: `Cloudflare Gateway`,
    description: `Use Cloudflare’s APIs and edge network to build secure, ultra-fast applications.`,
    author: `@cloudflaredev`,
  },
}
