module.exports = {
  plugins: [
    {
      resolve: `cloudflare-docs-theme`,
      options: {
        publicPath: 'api',
        contentPath: './src/content/',
      },
    },
    // {
    //   resolve: 'gatsby-source-rest-api',
    //   options: {
    //     endpoints: ['https://template-registry.developers.workers.dev/templates'],
    //   },
    // },
  ],
  siteMetadata: {
    title: `Cloudflare Workers`,
    description: `Use Cloudflare’s APIs and edge network to build secure, ultra-fast applications.`,
    author: `@cloudflaredev`,
  },
  assetPrefix: `/api`,
}
console.log('running site config')
