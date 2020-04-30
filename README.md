Uses the Cloudflare Docs Gatsby theme and sites to generate a Gatsby site and deploy on Cloudflare Workers

# Adding a path

1. Create a directory named the path you'd like deployed (e.g. `/byoip` ) and append `-docs`. (e.g. `byoip` + `-docs` = `byoip-docs`)

2. Copy paste content of one of the exisitng folders (e.g. copy paste gateway-docs and rename it `byoip-docs`)

3. Replace markdown content with your own

4. Replace the public path in gatsby-config.js, `/bin`, wrangler.toml and package.json with your own (i.e. Do a find and replace all `gateway` => `byoip`)

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
