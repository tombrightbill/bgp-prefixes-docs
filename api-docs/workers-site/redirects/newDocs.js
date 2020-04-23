export const newDocsOverview = 'https://developers.cloudflare.com/workers'
export const newDocsBase = 'https://developers.cloudflare.com/workers'
// map for new docs to redirect to
export const newDocsMap = new Map([
  // e.g. /reference/workers-concepts/modifying-requests will now redirect to /templates/modifying-requests
  [
    '/workers/reference/workers-concepts/modifying-requests',
    '/workers/templates/snippets/modify_req_props',
  ],
])
