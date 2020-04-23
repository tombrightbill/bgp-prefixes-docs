Uses the Cloudflare Docs Gatsby theme and sites to generate a Gatsby site and deploy on Cloudflare Workers

# Adding a path

1. Create a directory named the path you'd like deployed (e.g. `/api` ) and append `-docs`. (e.g. `api` + `-docs` = `api-docs`)

2. Copy paste content of one of the exisitng folder

3. Replace markdown content with your own

4. Replace the public path in gatsby-config.js, `/bin`, wrangler.toml and package.json with your own

# Test

TO run locally:

```
cd my-path
yarn
yarn start
```

With worker

```
yarn worker-start
```
