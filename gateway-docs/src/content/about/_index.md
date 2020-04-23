---
title: Cloudflare Gateway Documentation
alwaysopen: true
weight: 1
showNew: false
hidden: false
---

- [What is Cloudflare Gateway](#what-is-cloudflare-gateway)
- [How does Cloudflare Gateway work](#how-does-cloudflare-gateway-work)
- [DNS over HTTPS for Cloudflare Gateway](#dns-over-https-for-cloudflare-gateway)

## What is Cloudflare Gateway

Cloudflare Gateway is the modern Next Generation Firewall — a way to ensure that your team members are protected from malware and follow your organization's policies wherever they go online. Cloudflare Gateway, part of Cloudflare for Teams protects teams from security threats without sacrificing performance.

Using Cloudflare Gateway, you can protect offices, homes, stores, data centers and networks from malware, phishing, ransomware and other security threats on the Internet. Cloudflare Gateway sits between your user, device or network and the public Internet. Once you setup Cloudflare Gateway, Gateway's DNS filtering service will inspect all Internet bound DNS queries, log them and apply corresponding policies.

**Anyone and everyone can use Cloudflare Gateway**. All you need is a Cloudflare Account to get started. Start using Cloudflare Gateway's DNS filtering capaibilities by visiting our [teams dashboard](https://dash.teams.cloudflare.com/).

## How does Cloudflare Gateway work

Cloudflare Gateway's secure DNS filtering service sits between a device and the Internet and filters traffic at the DNS layer.

The primary difference between 1.1.1.1 and Gateway’s secure DNS filtering is that 1.1.1.1 does not block any DNS queries. When a browser requests `example.com`, the 1.1.1.1 public DNS resolver simply looks up the answer for the DNS query either in cache or by performing a full recursive query.

Cloudflare Gateway's DNS resolver adds an additional step to introduce security into this flow. Instead of allowing all DNS queries, Gateway first checks the hostname being queried against the intelligence Cloudflare has about threats on the Internet. If that query matches a known threat, or is requesting a blocked category, Gateway stops it before the site could load for the user - and potentially execute code or phish that team member.

![How Gateway Works](/media/how-does-gateway-work-dns.png)

For example, if a you are is using Cloudflare Gateway, and send a DNS query to `example.com`, first, Gateway checks if the DNS query is coming from your [location](/locations/). Second, if it is coming from your location, Gateway checks if the DNS query matches with any of the policies setup by you. The policy could be a domain that you are manually blocking or it could be part of a broader security or content category that you enabled. If the domain matches one of those cases, Cloudflare Gateway will block access to the domain.

## DNS over HTTPS for Cloudflare Gateway

Gateway supports DNS over HTTPS today and will also support DNS over TLS in the future. You can use cloudflared to setup your device and start sending DNS queries to Gateway in an encrypted fashion. It will also support other DNS over HTTPS clients as long as you can change the hostname in your preferred DNS over HTTPS client. Here’s how DNS over HTTPS for Cloudflare Gateway works:

![How Encrypted DNS Works](/media/encrypted-dns-gateway.png)

The DNS over HTTPS client encrypts the DNS request and sends it to the closest Cloudflare’s data center. Upon receiving the encrypted DNS request, it will decrypt it and send it to Cloudflare Gateway. Cloudflare Gateway will log the request, apply the required security policies and return the response to our edge. Our edge will encrypt the response and send it back to the DNS over HTTPS client.

By encrypting your DNS queries you will make sure that ISPs cannot snoop on your DNS queries and at the same time filter DNS requests that are malicious.

See how you can start using DNS over HTTPS for Gateway [with Firefox](/locations/setup-instructions/firefox)
