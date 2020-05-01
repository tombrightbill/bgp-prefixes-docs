---
title: Dynamic Advertisement API
alwaysopen: true
weight: 3
---

Toggling on/off a BGP advertisement by the Cloudflare edge is a simple API call. You can authorize a call with your email and api key, or create a [service token](https://support.cloudflare.com/hc/en-us/articles/200167836-Managing-API-Tokens-and-Keys) for this purpose. 

**You may toggle the advertisement status of a prefix once every 15 minutes, and it may take up to ten minutes for an advertisement/withdrawal to take effect.**

Additionally, you can add free text descriptions to your prefixes.

All the API calls can be found in our [API docs](https://api.cloudflare.com/#ip-address-management-dynamic-advertisement-properties).
