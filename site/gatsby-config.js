module.exports = {
  plugins: [
    `cloudflare-docs-theme`,
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
  assetPrefix: `/workers`,
}
console.log('running site config')
