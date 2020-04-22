const DEFAULT_THEME_OPTS = { publicPath: 'workers', contentPath: './src/content' }

module.exports = (themeOptions) => {
  const contentPath = themeOptions.contentPath || DEFAULT_THEME_OPTS.contentPath

  return {
    assetPrefix: `/${themeOptions.publicPath}`,
    plugins: [
      `gatsby-plugin-typescript`,
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `mdx-pages`,
          path: contentPath,
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
}
console.log('ruan config theme')
