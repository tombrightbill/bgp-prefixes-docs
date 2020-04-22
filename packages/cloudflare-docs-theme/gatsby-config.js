const path = require('path')
console.log('__dirname', __dirname)

module.exports = {
  assetPrefix: `/workers`,
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mdx-pages`,
        path: `${__dirname}/src/content`,
        ignore: [`**/CONTRIBUTING*`, '/styles/**'],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    }, // Simple config, passing URL
  ],
}
console.log('ruan config theme')
