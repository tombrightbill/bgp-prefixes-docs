console.log('running site node')
// const templatePage = require.resolve(`./src/templates/templatePage.tsx`)
// templates = await graphql(`
//   {
//     allRestApiTemplates {
//       nodes {
//         endpointId
//       }
//     }
//   }
// `)
// Create a custom page for the Template Gallery that's NOT based on markdown, just TSX
// const galleryTemplate = require.resolve(`./src/templates/gallery.tsx`)
//
// createPage({
//   path: `/workers/templates/`,
//   component: galleryTemplate,
// })
// templates.data.allRestApiTemplates.nodes.forEach(({ endpointId }) => {
//   createPage({
//     path: `/workers/templates/pages/${endpointId}/`,
//     component: templatePage,
//     context: {
//       id: endpointId,
//     },
//   })
// })
