---
title: Quick Start
alwaysopen: false
weight: 1
---

## Getting Access to the Cloudflare API

When using the Cloudflare API, you need to be able to authenticate yourself so that Cloudflare knows who is making requests and what permissions they have to those resources. You can create an API Token to grant access to the API for you or automated systems that perform actions. See [creating an API Token](link) for more on this.

Legacy Note: Existing customers may be familiar with API Keys. These allow for less granular access and each user can only have one. For these reasons, we advice customers using API Keys to transition to using API Tokens.

## Making API Calls

Once you have your API Token created, all API requests are authorized in the same way. Cloudflare uses the [RFC standard](https://tools.ietf.org/html/rfc6750#section-2.1) `Authorization: Bearer <Token>` interface. When used in an example Cloudflare API request it looks like this:

```curl
curl -X GET "https://api.cloudflare.com/client/v4/zones/cd7d0123e3012345da9420df9514dad0" \
-H "Content-Type:application/json" \
-H "Authorization: Bearer YQSn-xWAQiiEh9qM58wZNnyQS7FUdoqGIUAbrh7T"
```

For spcificing guidance on making API calls, see our [API schema docs](https://api.cloudflare.com) or the appropriate [Developer Docs section](https://developers.cloudflare.com) for that service. Additionally, if you are using [golang](https://github.com/cloudflare/cloudflare-go) or [Hashicorp's Terraform](https://github.com/terraform-providers/terraform-provider-cloudflare) you can leverage our 1st party libraries to integrate with Cloudflare's API.